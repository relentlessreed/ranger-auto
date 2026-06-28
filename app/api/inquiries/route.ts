import { NextResponse } from "next/server";

import { getShopEmailFrom, getShopEmailTo } from "../../../lib/email";
import {
  allowedInquiryDocumentTypes,
  maxInquiryDocumentBytes,
  maxInquiryDocumentCount,
  maxInquiryEmailAttachmentBytes,
  validateInquiry,
  type InquiryValues
} from "../../../lib/validations/inquiry";

export async function POST(request: Request) {
  const formData = await request.formData();
  const files = formData
    .getAll("files")
    .filter((file): file is File => file instanceof File && file.size > 0);

  const values: InquiryValues = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    vehicle: String(formData.get("vehicle") ?? ""),
    serviceType: String(formData.get("serviceType") ?? ""),
    message: String(formData.get("message") ?? "")
  };

  const validationError = validateInquiry(values);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (files.length > maxInquiryDocumentCount) {
    return NextResponse.json(
      { error: `Upload up to ${maxInquiryDocumentCount} files per message.` },
      { status: 400 }
    );
  }

  const invalidFile = files.find(
    (file) =>
      !allowedInquiryDocumentTypes.has(file.type) || file.size > maxInquiryDocumentBytes
  );
  if (invalidFile) {
    return NextResponse.json(
      {
        error:
          "Files must be PDF, JPG, PNG, WebP, HEIC, or HEIF and no larger than 10MB each."
      },
      { status: 400 }
    );
  }

  const totalAttachmentBytes = files.reduce((sum, file) => sum + file.size, 0);
  if (totalAttachmentBytes > maxInquiryEmailAttachmentBytes) {
    return NextResponse.json(
      {
        error:
          "Total attachment size is too large to email. Keep uploads under 20MB combined."
      },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({
      success: true,
      warning:
        "Message form is working, but email sending is in demo mode until RESEND_API_KEY is configured."
    });
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString("base64")
    }))
  );

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: getShopEmailFrom(),
      to: getShopEmailTo(),
      reply_to: values.email,
      subject: `New Ranger Auto inquiry from ${values.name}`,
      attachments,
      html: renderInquiryEmail(values, files)
    })
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    return NextResponse.json(
      { error: payload.message ?? "Unable to send email right now." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function renderInquiryEmail(values: InquiryValues, files: File[]) {
  return `
    <div>
      <h1>New Ranger Auto contact form submission</h1>
      <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(values.phone || "Not provided")}</p>
      <p><strong>Vehicle:</strong> ${escapeHtml(values.vehicle || "Not provided")}</p>
      <p><strong>Service type:</strong> ${escapeHtml(values.serviceType || "General question")}</p>
      <p><strong>Attachments:</strong> ${files.length ? escapeHtml(files.map((file) => file.name).join(", ")) : "None"}</p>
      <p><strong>Issue details:</strong></p>
      <p>${escapeHtml(values.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

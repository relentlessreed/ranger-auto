"use client";

import { useEffect, useMemo, useState } from "react";

import {
  maxInquiryDocumentBytes,
  maxInquiryDocumentCount,
  validateInquiry,
  type InquiryValues
} from "../../lib/validations/inquiry";

const initialValues: InquiryValues = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  serviceType: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState<InquiryValues>(initialValues);
  const [files, setFiles] = useState<File[]>([]);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [serverError, setServerError] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!toastMessage) return;
    const timeout = window.setTimeout(() => setToastMessage(null), 3600);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  const helpText = useMemo(
    () =>
      `Upload up to ${maxInquiryDocumentCount} files. PDF, JPG, PNG, WebP, HEIC, or HEIF. Max ${Math.floor(
        maxInquiryDocumentBytes / (1024 * 1024)
      )}MB each.`,
    []
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);
    setToastMessage(null);

    const validationError = validateInquiry(values);
    if (validationError) {
      setServerError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.set("name", values.name);
      formData.set("email", values.email);
      formData.set("phone", values.phone);
      formData.set("vehicle", values.vehicle);
      formData.set("serviceType", values.serviceType);
      formData.set("message", values.message);

      for (const file of files) {
        formData.append("files", file);
      }

      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: formData
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setServerError(payload.error ?? "Unable to send your message right now.");
        return;
      }

      setValues(initialValues);
      setFiles([]);
      setFileInputKey((current) => current + 1);
      setToastMessage("Message sent. Ranger Auto will follow up shortly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {toastMessage ? (
        <div className="fixed right-4 top-4 z-[70] max-w-sm bg-rangerBlue px-4 py-3 text-sm font-semibold text-white shadow-lg">
          {toastMessage}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="contact-label">Name</label>
            <input
              className="contact-field"
              value={values.name}
              onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            />
          </div>
          <div>
            <label className="contact-label">Email</label>
            <input
              type="email"
              className="contact-field"
              value={values.email}
              onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="contact-label">Phone</label>
            <input
              className="contact-field"
              placeholder="Optional"
              value={values.phone}
              onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
            />
          </div>
          <div>
            <label className="contact-label">Vehicle</label>
            <input
              className="contact-field"
              placeholder="Year, make, model"
              value={values.vehicle}
              onChange={(event) => setValues((current) => ({ ...current, vehicle: event.target.value }))}
            />
          </div>
        </div>

        <div>
          <label className="contact-label">What do you need help with?</label>
          <select
            className="contact-field"
            value={values.serviceType}
            onChange={(event) =>
              setValues((current) => ({ ...current, serviceType: event.target.value }))
            }
          >
            <option value="">General shop question</option>
            <option value="Diagnostics">Diagnostics</option>
            <option value="Brake and suspension">Brake and suspension</option>
            <option value="Engine or transmission">Engine or transmission</option>
            <option value="Electrical">Electrical</option>
            <option value="Detailing">Detailing</option>
            <option value="Fabrication or custom work">Fabrication or custom work</option>
          </select>
        </div>

        <div>
          <label className="contact-label">Describe the issue</label>
          <textarea
            rows={7}
            className="contact-field min-h-[170px]"
            placeholder="Tell Ranger Auto what the vehicle is doing, when it started, and any work already done."
            value={values.message}
            onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          />
        </div>

        <div>
          <label className="contact-label">Photos or supporting files</label>
          <input
            key={fileInputKey}
            type="file"
            multiple
            accept=".pdf,image/jpeg,image/png,image/webp,.heic,.heif"
            className="contact-field file:mr-4 file:border-0 file:bg-rangerBlue file:px-4 file:py-2 file:font-bold file:uppercase file:tracking-[0.08em] file:text-white"
            onChange={(event) => {
              const nextFiles = Array.from(event.target.files ?? []).slice(0, maxInquiryDocumentCount);
              setFiles(nextFiles);
            }}
          />
          <p className="mt-2 text-sm leading-6 text-slate-600">{helpText}</p>
          {files.length ? (
            <div className="mt-3 grid gap-2">
              {files.map((file) => (
                <div key={`${file.name}-${file.size}`} className="border-l-4 border-rangerOrange bg-[#f7f8fb] px-3 py-2 text-sm text-slate-700">
                  {file.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {serverError ? (
          <p className="border-l-4 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-700">
            {serverError}
          </p>
        ) : null}

        <button className="button-primary w-full sm:w-auto" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}

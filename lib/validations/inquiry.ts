export const allowedInquiryDocumentTypes = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif"
]);

export const maxInquiryDocumentBytes = 10 * 1024 * 1024;
export const maxInquiryDocumentCount = 5;
export const maxInquiryEmailAttachmentBytes = 20 * 1024 * 1024;

export type InquiryValues = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  serviceType: string;
  message: string;
};

export function validateInquiry(values: InquiryValues) {
  if (values.name.trim().length < 2) {
    return "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    return "Enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    return "Please describe the issue in a little more detail.";
  }

  return null;
}

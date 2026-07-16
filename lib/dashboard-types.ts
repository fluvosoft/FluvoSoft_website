export type ContactMessageStatus = "new" | "read" | "handled";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  service: string | null;
  location: string | null;
  budget: string | null;
  meetingSlot: string | null;
  ipHashHint?: string;
  source?: string;
  status: ContactMessageStatus;
  createdAt: Date | null;
  handledAt?: Date | null;
  handledBy?: string | null;
  adminNote?: string | null;
};

export type ResumeBuilderWishlistEntry = {
  id: string;
  email: string;
  product: string;
  source: string;
  createdAt: Date | null;
};

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
  /** Full client IP captured server-side for abuse investigation (admin only). */
  ipAddress?: string;
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

export type KyotoHabitTrackerWishlistEntry = ResumeBuilderWishlistEntry;

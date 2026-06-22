export const DASHBOARD_ALLOWED_EMAILS = [
  "alisifat061@gmail.com",
  "sifatali008@gmail.com",
  "codewithsifat4@gmail.com",
] as const;

export function isDashboardAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  const normalized = email.toLowerCase();
  return (DASHBOARD_ALLOWED_EMAILS as readonly string[]).includes(normalized);
}

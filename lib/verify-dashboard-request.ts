import { isDashboardAdmin } from "@/lib/dashboard-access";
import { verifyDashboardIdToken } from "@/lib/firebase-admin";

export async function verifyDashboardRequest(req: Request) {
  const header = req.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    return { ok: false as const, status: 401, message: "Missing authorization token." };
  }

  const idToken = header.slice("Bearer ".length).trim();
  if (!idToken) {
    return { ok: false as const, status: 401, message: "Missing authorization token." };
  }

  try {
    const decoded = await verifyDashboardIdToken(idToken);
    if (!isDashboardAdmin(decoded.email)) {
      return { ok: false as const, status: 403, message: "This account is not authorized." };
    }
    return { ok: true as const, email: decoded.email ?? "" };
  } catch {
    return { ok: false as const, status: 401, message: "Invalid or expired session. Sign in again." };
  }
}

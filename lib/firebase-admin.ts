import { App, cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

let adminApp: App | null = null;

export function hasFirebaseAdminConfig(): boolean {
  return Boolean(process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim());
}

export function getFirebaseAdminApp(): App | null {
  if (adminApp) return adminApp;
  if (getApps().length) {
    adminApp = getApps()[0]!;
    return adminApp;
  }

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();
  if (!raw) return null;

  try {
    const serviceAccount = JSON.parse(raw) as {
      project_id: string;
      client_email: string;
      private_key: string;
    };

    adminApp = initializeApp({
      credential: cert(serviceAccount),
    });
    return adminApp;
  } catch {
    return null;
  }
}

export function getAdminFirestore() {
  const app = getFirebaseAdminApp();
  return app ? getFirestore(app) : null;
}

export async function verifyDashboardIdToken(idToken: string) {
  const app = getFirebaseAdminApp();
  if (!app) {
    throw new Error("Firebase Admin is not configured on the server.");
  }
  return getAuth(app).verifyIdToken(idToken);
}

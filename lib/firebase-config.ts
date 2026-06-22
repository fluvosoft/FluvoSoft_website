export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  databaseURL: string;
  measurementId?: string;
};

const REQUIRED_KEYS: (keyof Omit<FirebaseConfig, "measurementId">)[] = [
  "apiKey",
  "authDomain",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
  "databaseURL",
];

export function getFirebaseConfig(): FirebaseConfig {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "";

  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
    projectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
    databaseURL:
      process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
      (projectId ? `https://${projectId}-default-rtdb.firebaseio.com` : ""),
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || undefined,
  };
}

export function hasRequiredFirebaseConfig(config: FirebaseConfig): boolean {
  return REQUIRED_KEYS.every((key) => Boolean(config[key]));
}

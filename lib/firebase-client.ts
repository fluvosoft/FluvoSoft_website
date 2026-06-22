"use client";

import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import {
  Auth,
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Database, getDatabase } from "firebase/database";
import { Firestore, getFirestore } from "firebase/firestore";
import { getFirebaseConfig, hasRequiredFirebaseConfig } from "@/lib/firebase-config";

const firebaseConfig = getFirebaseConfig();
const hasFirebaseConfig = hasRequiredFirebaseConfig(firebaseConfig);

function getClientApp(): FirebaseApp | null {
  if (!hasFirebaseConfig) return null;
  return getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
}

let firestoreInstance: Firestore | null = null;
let rtdbInstance: Database | null = null;
let authInstance: Auth | null = null;
let analyticsInstance: Analytics | null = null;

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export function getClientFirestore(): Firestore | null {
  if (firestoreInstance) return firestoreInstance;
  const app = getClientApp();
  if (!app) return null;
  firestoreInstance = getFirestore(app);
  return firestoreInstance;
}

export function getClientRtdb(): Database | null {
  if (rtdbInstance) return rtdbInstance;
  const app = getClientApp();
  if (!app) return null;
  rtdbInstance = getDatabase(app);
  return rtdbInstance;
}

export function getClientAuth(): Auth | null {
  if (authInstance) return authInstance;
  const app = getClientApp();
  if (!app) return null;
  authInstance = getAuth(app);
  return authInstance;
}

export async function signInWithGoogle(): Promise<User> {
  const auth = getClientAuth();
  if (!auth) throw new Error("Firebase is not configured.");
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function signOutDashboard(): Promise<void> {
  const auth = getClientAuth();
  if (!auth) return;
  await signOut(auth);
}

export function subscribeToAuth(callback: (user: User | null) => void): () => void {
  const auth = getClientAuth();
  if (!auth) {
    callback(null);
    return () => undefined;
  }
  return onAuthStateChanged(auth, callback);
}

export async function initFirebaseAnalytics(): Promise<Analytics | null> {
  if (analyticsInstance) return analyticsInstance;
  if (typeof window === "undefined" || !hasFirebaseConfig) return null;

  const supported = await isSupported();
  if (!supported) return null;

  const app = getClientApp();
  if (!app) return null;

  analyticsInstance = getAnalytics(app);
  return analyticsInstance;
}

export { hasFirebaseConfig };

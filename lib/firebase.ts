import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { Database, getDatabase } from "firebase/database";
import { Firestore, getFirestore } from "firebase/firestore";
import { getFirebaseConfig, hasRequiredFirebaseConfig } from "@/lib/firebase-config";

const firebaseConfig = getFirebaseConfig();
const hasAllFirebaseValues = hasRequiredFirebaseConfig(firebaseConfig);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let rtdb: Database | null = null;

if (hasAllFirebaseValues) {
  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  db = getFirestore(app);
  rtdb = getDatabase(app);
}

export { app, db, rtdb, hasAllFirebaseValues, firebaseConfig };

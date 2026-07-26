import { NextRequest, NextResponse } from "next/server";
import { getAdminFirestore, hasFirebaseAdminConfig } from "@/lib/firebase-admin";
import { verifyDashboardRequest } from "@/lib/verify-dashboard-request";

type RouteContext = { params: { id: string } };

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status });
}

export async function DELETE(req: NextRequest, { params }: RouteContext) {
  try {
    const auth = await verifyDashboardRequest(req);
    if (!auth.ok) {
      return jsonError(auth.message, auth.status);
    }

    const messageId = String(params?.id || "").trim();
    if (!messageId) {
      return jsonError("Invalid message id.", 400);
    }

    if (!hasFirebaseAdminConfig()) {
      return jsonError(
        "Server delete is not configured. Add FIREBASE_SERVICE_ACCOUNT_JSON or use client delete with published Firestore rules.",
        503
      );
    }

    const db = getAdminFirestore();
    if (!db) {
      return jsonError("Firebase Admin failed to initialize.", 500);
    }

    await db.collection("contactMessages").doc(messageId).delete();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admin message delete failed:", error);
    return jsonError("Could not delete message.", 500);
  }
}

import { NextRequest, NextResponse } from "next/server";
import { getAdminFirestore, hasFirebaseAdminConfig } from "@/lib/firebase-admin";
import { verifyDashboardRequest } from "@/lib/verify-dashboard-request";

type RouteContext = { params: { id: string } };

export async function DELETE(req: NextRequest, { params }: RouteContext) {
  const auth = await verifyDashboardRequest(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, message: auth.message }, { status: auth.status });
  }

  const messageId = String(params.id || "").trim();
  if (!messageId) {
    return NextResponse.json({ ok: false, message: "Invalid message id." }, { status: 400 });
  }

  if (!hasFirebaseAdminConfig()) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Server delete is not configured. Add FIREBASE_SERVICE_ACCOUNT_JSON or publish Firestore delete rules.",
      },
      { status: 503 }
    );
  }

  const db = getAdminFirestore();
  if (!db) {
    return NextResponse.json(
      { ok: false, message: "Firebase Admin failed to initialize." },
      { status: 500 }
    );
  }

  try {
    await db.collection("contactMessages").doc(messageId).delete();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Could not delete message." }, { status: 500 });
  }
}

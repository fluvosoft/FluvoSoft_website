import { NextRequest, NextResponse } from "next/server";
import { push, ref, serverTimestamp as rtdbServerTimestamp } from "firebase/database";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { checkRateLimit } from "@/lib/rateLimit";
import { db, hasAllFirebaseValues, rtdb } from "@/lib/firebase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getIp(req);
    const allowed = checkRateLimit(`contact:${ip}`, 5, 60_000);
    if (!allowed) {
      return NextResponse.json({ ok: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim().toLowerCase();
    const subject = String(body?.subject || "").trim();
    const message = String(body?.message || "").trim();
    const service = String(body?.service || "").trim();
    const location = String(body?.location || "").trim();
    const budget = String(body?.budget || "").trim();
    const meetingSlot = String(body?.meetingSlot || "").trim();
    const website = String(body?.website || "").trim(); // honeypot field
    const elapsedMs = Number(body?.elapsedMs || 0);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (elapsedMs > 0 && elapsedMs < 1500) {
      return NextResponse.json({ ok: false, message: "Suspicious request blocked." }, { status: 400 });
    }

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json({ ok: false, message: "Invalid name." }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json({ ok: false, message: "Invalid email." }, { status: 400 });
    }
    if (subject.length > 150) {
      return NextResponse.json({ ok: false, message: "Subject is too long." }, { status: 400 });
    }
    if (service.length > 120) {
      return NextResponse.json({ ok: false, message: "Service is too long." }, { status: 400 });
    }
    if (location.length > 120) {
      return NextResponse.json({ ok: false, message: "Location is too long." }, { status: 400 });
    }
    if (budget.length > 80) {
      return NextResponse.json({ ok: false, message: "Budget is too long." }, { status: 400 });
    }
    if (meetingSlot.length > 120) {
      return NextResponse.json({ ok: false, message: "Meeting slot is too long." }, { status: 400 });
    }
    if (!message || message.length < 5 || message.length > 5000) {
      return NextResponse.json({ ok: false, message: "Invalid message length." }, { status: 400 });
    }
    if (!hasAllFirebaseValues || !db || !rtdb) {
      return NextResponse.json({ ok: false, message: "Server is not configured for form storage." }, { status: 500 });
    }

    const payload = {
      name,
      email,
      subject,
      message,
      service: service || null,
      location: location || null,
      budget: budget || null,
      meetingSlot: meetingSlot || null,
      ipHashHint: ip.slice(0, 6),
      source: "talk-with-team",
      status: "new",
    };

    await Promise.all([
      addDoc(collection(db, "contactMessages"), {
        ...payload,
        createdAt: serverTimestamp(),
      }),
      push(ref(rtdb, "contactMessages"), {
        ...payload,
        createdAt: rtdbServerTimestamp(),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Request failed." }, { status: 500 });
  }
}

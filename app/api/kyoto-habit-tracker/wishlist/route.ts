import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { ref, serverTimestamp, set } from "firebase/database";
import { checkRateLimit } from "@/lib/rateLimit";
import { hasAllFirebaseValues, rtdb } from "@/lib/firebase";

const GMAIL_REGEX = /^[a-z0-9._%+-]+@gmail\.com$/i;

function getIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getIp(req);
    if (!checkRateLimit(`kyoto-habit-tracker-wishlist:${ip}`, 5, 60_000)) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const email = String(body?.email || "").trim().toLowerCase();
    const website = String(body?.website || "").trim();
    const elapsedMs = Number(body?.elapsedMs || 0);

    if (website) return NextResponse.json({ ok: true });

    if (elapsedMs > 0 && elapsedMs < 800) {
      return NextResponse.json(
        { ok: false, message: "Please wait a moment and try again." },
        { status: 400 }
      );
    }

    if (!GMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid Gmail address." },
        { status: 400 }
      );
    }

    if (!hasAllFirebaseValues || !rtdb) {
      return NextResponse.json(
        { ok: false, message: "Wishlist registration is not configured." },
        { status: 500 }
      );
    }

    const id = createHash("sha256").update(email).digest("hex");
    const payload = {
      email,
      product: "KYOTO Habit Tracker",
      source: "kyoto-habit-tracker-wishlist",
      ipHashHint: ip.slice(0, 6),
      createdAt: serverTimestamp(),
    };

    await Promise.race([
      set(ref(rtdb, `kyotoHabitTrackerWishlist/${id}`), payload),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Realtime Database write timed out — check the database URL")),
          8000
        )
      ),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("KYOTO Habit Tracker wishlist write failed:", error);
    return NextResponse.json(
      { ok: false, message: "Could not join the wishlist. Please try again." },
      { status: 500 }
    );
  }
}

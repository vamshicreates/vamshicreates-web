import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const input = body as Record<string, unknown>;
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  const budget = typeof input.budget === "string" || typeof input.budget === "number"
    ? Number(input.budget)
    : NaN;
  const projectNote = typeof input.projectNote === "string" ? input.projectNote.trim() : "";

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    !Number.isFinite(budget) ||
    budget < 0 ||
    projectNote.length > 2000
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    await put(
      `waitlist/${Date.now()}-${crypto.randomUUID()}.json`,
      JSON.stringify({ email, budget, projectNote, type: "full", createdAt: new Date().toISOString() }),
      { access: "private", contentType: "application/json" },
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}

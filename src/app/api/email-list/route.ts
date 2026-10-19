import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

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
  const type = input.type === "creative-bootcamp-interest" || input.type === "builder-updates" ? input.type : "guide";
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const interest = typeof input.interest === "string" ? input.interest.trim() : "";
  const guide = typeof input.guide === "string" ? input.guide.trim() : "";

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    name.length > 120 ||
    interest.length > 1000 ||
    guide.length > 120 ||
    (type === "creative-bootcamp-interest" && !name) ||
    (type === "builder-updates" && (input.consent !== true || (input.website !== undefined && input.website !== "") || !["home", "projects", "what-to-build", "how-to-build"].includes(String(input.source))))
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    if (type === "builder-updates") {
      const key = createHash("sha256").update(email).digest("hex");
      await put(
        `builder-notes/${key}.json`,
        JSON.stringify({ type, email, source: input.source, status: "launch-list", consent: true, consentVersion: "builder-notes-v1", updatedAt: new Date().toISOString() }),
        { access: "private", contentType: "application/json", addRandomSuffix: false, allowOverwrite: true },
      );
      return NextResponse.json({ ok: true });
    }
    await put(
      `email-list/${Date.now()}-${crypto.randomUUID()}.json`,
      JSON.stringify({ type, email, name, interest, guide, createdAt: new Date().toISOString() }),
      { access: "private", contentType: "application/json" },
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}

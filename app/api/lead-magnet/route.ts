import { NextResponse } from "next/server";

type LeadMagnetPayload = {
  name?: unknown;
  email?: unknown;
  resource?: unknown;
  honeypot?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadMagnetPayload | null;

  if (!body || typeof body.name !== "string" || typeof body.email !== "string" || typeof body.resource !== "string") {
    return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const resource = body.resource.trim();

  if (!name || !EMAIL_PATTERN.test(email) || !resource) {
    return NextResponse.json({ success: false, message: "Please provide a valid name and email." }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_CAPTURE_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    console.error("LEAD_CAPTURE_WEBHOOK_URL is not configured.");
    return NextResponse.json({ success: false, message: "This form isn't available right now." }, { status: 503 });
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, resource, honeypot: typeof body.honeypot === "string" ? body.honeypot : "" }),
  });

  if (!response.ok) {
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}

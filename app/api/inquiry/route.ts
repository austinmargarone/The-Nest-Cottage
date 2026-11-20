import { NextResponse } from "next/server";

// Sends contact form messages to the owners' inbox through Resend (resend.com).
// Set these in Hostinger's environment variables:
//   RESEND_API_KEY  your Resend API key
//   INQUIRY_TO      where messages go (defaults to the cottage Gmail)
//   INQUIRY_FROM    a sender on a domain you've verified in Resend, e.g. "The Nest Cottage <hello@thenest-cottage.com>"

const TO = process.env.INQUIRY_TO || "thenestcottage2022@gmail.com";
const FROM = process.env.INQUIRY_FROM || "The Nest Cottage <onboarding@resend.dev>";

const esc = (v: unknown) =>
  String(v ?? "")
    .slice(0, 2000)
    .replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "The form data couldn't be read." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend it worked.
  if (data.company) return NextResponse.json({ ok: true });

  const booking = data.type === "booking";
  const missing = ["firstName", "lastName", "email", ...(booking ? ["phone", "checkIn", "checkOut"] : ["message"])].filter(
    (k) => !String(data[k] ?? "").trim()
  );
  if (missing.length) {
    return NextResponse.json({ error: "Some required fields are empty." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set; inquiry not sent", data);
    return NextResponse.json({ error: "The form isn't set up to send messages yet." }, { status: 503 });
  }

  const rows: [string, string | undefined][] = [
    ["Name", `${data.firstName} ${data.lastName}`],
    ["Email", data.email],
    ["Phone", data.phone],
    ...(booking
      ? ([
          ["Check-in", data.checkIn],
          ["Check-out", data.checkOut],
          ["Guests", data.guests],
          ["Working at", data.work],
          ["25+ and booking for self", data.age25 ? "Yes" : "No"],
        ] as [string, string | undefined][])
      : []),
    ["Message", data.message],
  ];

  const html = `<h2>${booking ? "New booking request" : "New question"} from the website</h2><table cellpadding="6">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td><strong>${esc(k)}</strong></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject: booking
        ? `Booking request: ${data.firstName} ${data.lastName}, ${data.checkIn} to ${data.checkOut}`
        : `Website question from ${data.firstName} ${data.lastName}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "The message didn't send." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

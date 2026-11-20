"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [type, setType] = useState("question");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "The message didn't send.");
      form.reset();
      setType("question");
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: `${(err as Error).message} Please try again, or email ${site.email}.`,
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="form-status" role="status">
        <h2 style={{ fontSize: "var(--t-lg)" }}>Message sent</h2>
        <p style={{ margin: 0 }}>Thanks. Trisha will get back to you by email or phone.</p>
      </div>
    );
  }

  const booking = type === "booking";

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="type">What can we help with?</label>
        <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="question">A question</option>
          <option value="booking">A booking request</option>
        </select>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone <span className="hint">{booking ? "" : "(optional)"}</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required={booking} />
        </div>
      </div>

      {booking && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor="checkIn">Check-in date</label>
              <input id="checkIn" name="checkIn" type="date" required />
            </div>
            <div className="field">
              <label htmlFor="checkOut">Check-out date</label>
              <input id="checkOut" name="checkOut" type="date" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="guests">Guests</label>
              <select id="guests" name="guests" required defaultValue="1">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="work">
                Where you&apos;ll be working <span className="hint">(optional)</span>
              </label>
              <input id="work" name="work" placeholder="e.g. Rochester General" />
            </div>
          </div>
          <label className="check">
            <input type="checkbox" name="age25" value="yes" required />
            <span>I&apos;m 25 or older and booking for my own stay.</span>
          </label>
        </>
      )}

      <div className="field">
        <label htmlFor="message">
          Message <span className="hint">{booking ? "(optional)" : ""}</span>
        </label>
        <textarea id="message" name="message" maxLength={2000} required={!booking} />
      </div>

      {/* Spam trap: people never see or fill this */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === "error" && (
        <p className="form-status error" role="alert">
          {status.message}
        </p>
      )}

      <div>
        <button className="btn" type="submit" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : booking ? "Send booking request" : "Send message"}
        </button>
      </div>
    </form>
  );
}

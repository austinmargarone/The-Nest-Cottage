import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact and booking requests",
  description: "Ask about dates or send a booking request for The Nest Cottage in Webster, NY.",
};

export default function ContactPage() {
  return (
    <>
      <header className="wrap page-head">
        <h1>Get in touch</h1>
        <p className="lede">
          Ask about dates, send a booking request, or just ask a question. You can also book through
          our{" "}
          <a href={site.furnishedFinder} target="_blank" rel="noopener">
            Furnished Finder listing
          </a>
          .
        </p>
      </header>
      <section className="section wrap contact-layout">
        <ContactForm />
        <aside>
          <ul className="contact-list">
            <li>
              <span>Call or text Trisha</span>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>Address</span>
              <p style={{ margin: 0, fontFamily: "var(--serif)", fontSize: "var(--t-md)" }}>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
            </li>
          </ul>
          <p style={{ marginTop: "2rem", color: "var(--ink-soft)" }}>
            Check-in is at 3:00 pm and check-out is by 11:00 am. Up to two guests, and the renter
            must be 25 or older.
          </p>
        </aside>
      </section>
    </>
  );
}

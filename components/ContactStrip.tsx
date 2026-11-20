import Link from "next/link";
import { site } from "@/content/site";

export default function ContactStrip() {
  return (
    <section className="section contact-strip" aria-labelledby="contact-title">
      <div className="wrap">
        <div>
          <h2 id="contact-title">Planning a contract in Rochester?</h2>
          <p className="lede">
            Book through Furnished Finder, or get in touch with us directly.
          </p>
          <div className="btn-row">
            <a className="btn" href={site.furnishedFinder} target="_blank" rel="noopener">
              Check dates on Furnished Finder
            </a>
            <Link className="btn btn-quiet" href="/contact">
              Send us a message
            </Link>
          </div>
        </div>
        <ul className="contact-list">
          <li>
            <span>Call or text Trisha</span>
            <a href={site.phoneHref}>{site.phone}</a>
          </li>
          <li>
            <span>Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

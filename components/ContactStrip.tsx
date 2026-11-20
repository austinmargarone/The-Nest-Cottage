import Link from "next/link";
import { site } from "@/content/site";

export default function ContactStrip() {
  return (
    <section className="section contact-strip" aria-labelledby="contact-title">
      <div className="wrap centered">
        <h2 id="contact-title">Questions?</h2>
        <p className="lede">
          If you should have any questions about The Nest Cottage, please do not hesitate to contact
          me. Text or call <a href={site.phoneHref}>{site.phone}</a>, or email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p className="signature">Trisha</p>
        <div className="btn-row centered-row">
          <Link className="btn" href="/contact">
            Be our guest
          </Link>
          <a className="btn btn-quiet" href={site.furnishedFinder} target="_blank" rel="noopener">
            Furnished Finder listing
          </a>
        </div>
      </div>
    </section>
  );
}

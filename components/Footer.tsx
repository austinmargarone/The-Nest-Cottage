import Link from "next/link";
import { areas } from "@/content/guide";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="wordmark">
              The Nest Cottage
            </Link>
            <p>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div>
            <p>Local guide</p>
            <ul>
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/guide/${a.slug}`}>{a.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/guide/driving-tour">Driving tour</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>Stay with us</p>
            <ul>
              <li>
                <Link href="/stay">Guest info</Link>
              </li>
              <li>
                <Link href="/stay#what-to-pack">What to pack</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a href={site.furnishedFinder} target="_blank" rel="noopener">
                  Furnished Finder listing
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-legal">
          © {new Date().getFullYear()} {site.legalName}
        </p>
      </div>
    </footer>
  );
}

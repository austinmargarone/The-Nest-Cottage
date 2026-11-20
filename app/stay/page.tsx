import type { Metadata } from "next";
import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import { bestTimes, houseRules, packing, temps } from "@/content/stay";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Guest info and what to pack",
  description:
    "Check-in times, house rules and a season-by-season packing list for The Nest Cottage in Webster, NY.",
};

// Chart range in °F
const MIN = 15;
const MAX = 90;
const pct = (t: number) => ((t - MIN) / (MAX - MIN)) * 100;

export default function StayPage() {
  return (
    <>
      <header className="wrap page-head">
        <h1>Guest info</h1>
        <p className="lede">
          The Nest is set up for travel nurses and other longer stays, usually 4 to 13+ weeks. Here
          is what to know before you arrive. For anything else, call or text Trisha at{" "}
          <a href={site.phoneHref}>{site.phone}</a> or email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </header>

      <section className="section wrap" aria-label="House rules">
        <ul className="rules">
          {houseRules.map((r) => (
            <li key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section wrap list-section" id="what-to-pack" style={{ paddingTop: 0 }}>
        <h2>What to pack</h2>
        <p className="lede">
          Think layers. In Upstate New York the temperature can swing a lot in an hour, a day or a
          week, in any season.
        </p>

        <h3 style={{ marginTop: "3rem" }}>Average highs and lows in Webster</h3>
        <p>In °F. Daylight saving time runs from March to November.</p>
        <ol className="temps">
          {temps.map((t) => (
            <li key={t.month}>
              <span className="m">{t.month}</span>
              <div>
                <div className="track" aria-label={`${t.month}: low ${t.low}°, high ${t.high}°`}>
                  <span
                    className={`bar${t.high >= 70 ? " warm" : ""}`}
                    style={{ left: `${pct(t.low)}%`, width: `${pct(t.high) - pct(t.low)}%` }}
                  />
                  <span className="lo" style={{ left: `${pct(t.low)}%` }} aria-hidden>
                    {t.low}°
                  </span>
                  <span className="hi" style={{ left: `${pct(t.high)}%` }} aria-hidden>
                    {t.high}°
                  </span>
                </div>
                <span className="note">{t.note}</span>
              </div>
            </li>
          ))}
        </ol>

        <h3 style={{ marginTop: "3.5rem" }}>Best time to visit</h3>
        <dl className="best-times">
          {bestTimes.map((b) => (
            <div key={b.what} style={{ display: "contents" }}>
              <dt>{b.what}</dt>
              <dd>{b.when}</dd>
            </div>
          ))}
        </dl>

        <h3 style={{ marginTop: "3.5rem" }}>Packing list by season</h3>
        <div className="seasons">
          {packing.map((s) => (
            <div key={s.season}>
              <h3>{s.season}</h3>
              <p>{s.note}</p>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "3rem" }}>
          Want ideas for your days off? Start with our <Link href="/guide">local guide</Link> or the{" "}
          <Link href="/guide/driving-tour">Webster driving tour</Link>.
        </p>
      </section>

      <ContactStrip />
    </>
  );
}

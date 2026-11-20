import type { Metadata } from "next";
import Link from "next/link";
import GuideNav from "@/components/GuideNav";
import { drivingTour } from "@/content/guide";

export const metadata: Metadata = {
  title: "Driving tour of Webster, NY",
  description: "A self-guided drive along Irondequoit Bay and Lake Ontario, with parks and trails to stop at along the way.",
};

export default function DrivingTour() {
  return (
    <>
      <header className="wrap page-head">
        <p className="crumb">
          <Link href="/guide">Local guide</Link>
        </p>
        <h1>Driving tour of Webster</h1>
        {drivingTour.intro.map((t) => (
          <p className="lede" key={t.slice(0, 12)}>{t}</p>
        ))}
        <GuideNav current="driving-tour" />
      </header>
      <section className="section wrap">
        <ol className="stops">
          {drivingTour.stops.map((s) => (
            <li key={s.title}>
              <h2 style={{ fontSize: "var(--t-lg)" }}>{s.title}</h2>
              {s.text.map((t) => (
                <p key={t.slice(0, 12)}>{t}</p>
              ))}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

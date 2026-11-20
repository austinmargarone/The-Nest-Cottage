import type { Metadata } from "next";
import Link from "next/link";
import GuideNav from "@/components/GuideNav";
import AreaList from "@/components/AreaList";

export const metadata: Metadata = {
  title: "Local guide",
  description:
    "Where to eat, what to see and where to shop around Webster, Rochester, the Erie Canal and the Finger Lakes.",
};

export default function GuidePage() {
  return (
    <>
      <header className="wrap page-head">
        <h1>Our local guide</h1>
        <p className="lede">
          Our favorite places to eat, see and shop, in order, from right here in Webster out to the
          Finger Lakes.
        </p>
        <GuideNav />
      </header>
      <section className="section wrap">
        <AreaList />
        <p style={{ marginTop: "3rem" }}>
          Got an afternoon? Follow our <Link href="/guide/driving-tour">driving tour of Webster</Link>{" "}
          along the bay and the lake.
        </p>
      </section>
    </>
  );
}

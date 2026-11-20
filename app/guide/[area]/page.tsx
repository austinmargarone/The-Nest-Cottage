import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GuideNav from "@/components/GuideNav";
import { areas, type Place } from "@/content/guide";

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const a = areas.find((x) => x.slug === area);
  if (!a) return {};
  return {
    title: `Where to eat, see and shop: ${a.name}`,
    description: `Our favorite restaurants, sights and shops in ${a.name}, from The Nest Cottage in Webster, NY.`,
  };
}

const sections = [
  { key: "eat", title: "Eat" },
  { key: "see", title: "See" },
  { key: "shop", title: "Shop" },
] as const;

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const a = areas.find((x) => x.slug === area);
  if (!a) notFound();

  return (
    <>
      <header className="wrap page-head">
        <p className="crumb">
          <Link href="/guide">Local guide</Link>
        </p>
        <h1>{a.name}</h1>
        <p className="lede">{a.intro}</p>
        <GuideNav current={a.slug} />
        <ul className="jump" aria-label="On this page">
          {sections.map((s) => (
            <li key={s.key}>
              <a href={`#${s.key}`}>{s.title}</a>
            </li>
          ))}
        </ul>
      </header>

      <div className="section wrap">
        {sections.map((s) => (
          <section key={s.key} id={s.key} className="list-section" aria-labelledby={`${s.key}-title`}>
            <h2 id={`${s.key}-title`}>{s.title}</h2>
            <PlaceList places={a[s.key]} />
          </section>
        ))}
      </div>
    </>
  );
}

function PlaceList({ places }: { places: Place[] }) {
  const groups = [...new Set(places.map((p) => p.group ?? ""))];
  return (
    <>
      {groups.map((g) => (
        <div key={g || "all"}>
          {g && <h3 className="group-title">{g}</h3>}
          <ol className="places">
            {places
              .filter((p) => (p.group ?? "") === g)
              .map((p) => (
                <li key={p.name}>
                  <div>
                    <h3>
                      {p.url ? (
                        p.url.startsWith("/") ? (
                          <Link href={p.url}>{p.name}</Link>
                        ) : (
                          <a href={p.url} target="_blank" rel="noopener">
                            {p.name}
                          </a>
                        )
                      ) : (
                        p.name
                      )}
                    </h3>
                    {p.note && <p>{p.note}</p>}
                  </div>
                  {p.address && <span className="addr">{p.address}</span>}
                </li>
              ))}
          </ol>
        </div>
      ))}
    </>
  );
}

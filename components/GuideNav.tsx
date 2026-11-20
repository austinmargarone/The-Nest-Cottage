import Link from "next/link";
import { areas } from "@/content/guide";

export default function GuideNav({ current }: { current?: string }) {
  const items = [
    ...areas.map((a) => ({ href: `/guide/${a.slug}`, label: a.name, key: a.slug })),
    { href: "/guide/driving-tour", label: "Driving tour", key: "driving-tour" },
  ];
  return (
    <nav aria-label="Guide areas">
      <ul className="guide-nav">
        {items.map((i) => (
          <li key={i.key}>
            <Link href={i.href} aria-current={current === i.key ? "page" : undefined}>
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

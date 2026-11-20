import Link from "next/link";
import { areas } from "@/content/guide";

// The four guide areas, set as type rather than photo cards.
export default function AreaList() {
  return (
    <ul className="area-list">
      {areas.map((a) => (
        <li key={a.slug}>
          <Link href={`/guide/${a.slug}`}>
            <span className="area-distance">{a.distance}</span>
            <span className="area-name">{a.name}</span>
            <span className="area-count">
              {a.eat.length} to eat, {a.see.length} to see, {a.shop.length} to shop
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

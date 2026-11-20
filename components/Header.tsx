"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="wordmark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-ink.png" alt="" width={34} height={39} />
          The Nest Cottage
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className="site-nav" data-open={open} aria-label="Main">
          <ul>
            {nav.map((item) => {
              const current =
                !item.href.includes("#") &&
                (pathname === item.href || pathname.startsWith(item.href + "/"));
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a className="btn" href={site.furnishedFinder} target="_blank" rel="noopener">
                Check availability
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

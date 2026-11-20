import type { NextConfig } from "next";

// Old WordPress URLs point to the new pages so links and search results keep working.
const old: [string, string][] = [
  ["/about", "/#the-cottage"],
  ["/the-nest-cottage", "/#photos"],
  ["/booking", "/contact"],
  ["/reviews", "/#reviews-title"],
  ["/check-in-check-out-times", "/stay"],
  ["/what-to-pack", "/stay#what-to-pack"],
  ["/eat-webster", "/guide/webster#eat"],
  ["/restaurants-where-to-eat-rochester-ny-upstate-ny-monroe-county-the-nest-cottage-webster-short-term-rental", "/guide/rochester#eat"],
  ["/eat-erie-canal-fairport-ny-pittsford-ny-bushnells-basin-ny-top-10-restaurants", "/guide/erie-canal#eat"],
  ["/eat-finger-lakes-ny-canandaigua-lake-cayuga-lake-seneca-lake-skaneateles-lake-restaurants", "/guide/finger-lakes#eat"],
  ["/see-webster-things-to-see-webster-ny-the-nest-cottage-short-term-rental", "/guide/webster#see"],
  ["/see-rochester-ny-top-10-list-things-to-see-rochester-roc-flower-city-flour-city-thenestcottage-short-term-rental", "/guide/rochester#see"],
  ["/see-erie-canal-towpath-fairport-pittsford-bushnellsbasin-ny-thenestcottage-shortterm-rental", "/guide/erie-canal#see"],
  ["/see-finger-lakes-ny-skaneateleslake-canandaigualake-cayugalake-senecalake-thenestcottage-shorttermrental", "/guide/finger-lakes#see"],
  ["/shop-webster-ny-village-shops-top10-suburb-of-rochester-thenestcottage-short-term-rental", "/guide/webster#shop"],
  ["/shop-rochester-ny-top10list-wheretoshop", "/guide/rochester#shop"],
  ["/shop-erie-canal-fairport-ny-pittsford-ny-bushnellsbasin-ny-thenestcottage-websterny", "/guide/erie-canal#shop"],
  ["/shop-finger-lakes-ny-canandaigua-skaneateles-cayuga-seneca-aurora-ithaca-watkinsglen", "/guide/finger-lakes#shop"],
  ["/category/blog", "/guide"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return old.map(([source, destination]) => ({ source: `${source}{/}?`, destination, permanent: true }));
  },
};

export default nextConfig;

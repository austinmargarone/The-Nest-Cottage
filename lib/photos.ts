import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

// Every image dropped into public/photos/gallery shows up in the gallery, sorted by file name.
// Rename files with a number prefix (01-living-room.jpg) to control the order.
export function getGalleryPhotos() {
  const dir = path.join(process.cwd(), "public", "photos", "gallery");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => {
      const { width = 3, height = 2 } = imageSize(fs.readFileSync(path.join(dir, f)));
      return { src: `/photos/gallery/${encodeURIComponent(f)}`, alt: altFromName(f), width, height };
    });
}

function altFromName(file: string) {
  const base = file
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  // Camera file names (DSC_0544, DJI_2026...) aren't useful descriptions
  if (!base || /^(dsc|dji|img|pxl|photo|placeholder)\b/i.test(base)) return "Photo of The Nest Cottage";
  return base.charAt(0).toUpperCase() + base.slice(1);
}

import { readFile, readdir } from "fs/promises";
import path from "path";

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
const DEFAULT_LNG = 121;
const DEFAULT_LAT = 23.7;

type MapImage = { src: string; lng: number; lat: number };

export async function GET() {
  const mapDir = path.join(process.cwd(), "public", "map");
  try {
    const files = await readdir(mapDir);
    const imageFiles = files.filter((f) =>
      IMAGE_EXT.includes(path.extname(f).toLowerCase())
    );

    const exifr = (await import("exifr")).default;
    const images: MapImage[] = [];

    for (const file of imageFiles) {
      const src = `/map/${file}`;
      const filePath = path.join(mapDir, file);

      let lng = DEFAULT_LNG;
      let lat = DEFAULT_LAT;

      try {
        const buffer = await readFile(filePath);
        const gps = await exifr.gps(buffer);
        if (gps?.latitude != null && gps?.longitude != null) {
          lat = gps.latitude;
          lng = gps.longitude;
        }
      } catch {
        // no EXIF or read error, keep default
      }

      images.push({ src, lng, lat });
    }

    return Response.json({ images });
  } catch {
    return Response.json({ images: [] });
  }
}

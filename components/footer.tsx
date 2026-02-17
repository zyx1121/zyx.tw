"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isMapPage = pathname === "/map";

  return (
    <footer className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-1">
      {isMapPage && (
        <span className="text-md text-muted-foreground">
          © Mapbox © OpenStreetMap
        </span>
      )}
      <span className="text-md text-muted-foreground">
        © {new Date().getFullYear()} ZYX
      </span>
    </footer>
  );
}

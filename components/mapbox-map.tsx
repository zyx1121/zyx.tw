"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";

const MAPBOX_STYLE = "mapbox://styles/mapbox/standard";
const STANDARD_MONOCHROME_NIGHT = {
  basemap: {
    theme: "monochrome",
    lightPreset: "night",
  },
} as const;

const MAP_CENTER: [number, number] = [121, 23.7];
const POPUP_ANIMATION_MS = 80;

function createMarkerWithPopup(
  map: mapboxgl.Map,
  imageUrl: string,
  lngLat: [number, number]
) {
  const el = document.createElement("div");
  el.className = "map-image-marker";
  el.style.width = "4rem";
  el.style.height = "4rem";
  el.style.borderRadius = "33%";
  el.style.overflow = "hidden";
  el.style.border = "4px solid var(--muted)";
  el.style.cursor = "pointer";
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Photo";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  el.appendChild(img);

  const popupContent = document.createElement("div");
  popupContent.className = "map-fullscreen-popup-content";
  const popupImg = document.createElement("img");
  popupImg.src = imageUrl;
  popupImg.alt = "Photo";
  popupImg.className = "map-fullscreen-popup-img";
  popupContent.appendChild(popupImg);

  const popup = new mapboxgl.Popup({
    className: "map-fullscreen-popup",
    offset: 0,
    closeOnClick: false,
  }).setDOMContent(popupContent);

  const onBackdropClick = (e: MouseEvent) => {
    if (e.target !== popupContent) return;
    const popupEl = document.querySelector(".map-fullscreen-popup");
    popupEl?.classList.remove("map-fullscreen-popup-visible");
    setTimeout(() => popup.remove(), POPUP_ANIMATION_MS);
  };

  popup.on("open", () => {
    const popupEl = document.querySelector(".map-fullscreen-popup");
    if (popupEl?.parentElement) document.body.appendChild(popupEl);
    popupEl?.classList.remove("map-fullscreen-popup-visible");
    popupContent.addEventListener("click", onBackdropClick);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        popupEl?.classList.add("map-fullscreen-popup-visible");
      });
    });
  });

  popup.on("close", () => {
    popupContent.removeEventListener("click", onBackdropClick);
    document
      .querySelector(".map-fullscreen-popup")
      ?.classList.remove("map-fullscreen-popup-visible");
  });

  const marker = new mapboxgl.Marker({ element: el })
    .setLngLat(lngLat)
    .setPopup(popup)
    .addTo(map);

  return marker;
}

export function MapboxMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!token || !containerRef.current) return;

    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: MAPBOX_STYLE,
      config: STANDARD_MONOCHROME_NIGHT,
      center: MAP_CENTER,
      zoom: 4,
      attributionControl: false,
    });

    mapRef.current = map;

    map.on("load", async () => {
      let images: { src: string; lng: number; lat: number }[] = [];
      try {
        const res = await fetch("/api/map-images");
        const data = await res.json();
        images = data.images ?? [];
      } catch {
        images = [];
      }

      if (images.length === 0) return;

      const markers: mapboxgl.Marker[] = [];
      images.forEach((img) => {
        const lngLat: [number, number] = [img.lng, img.lat];
        const marker = createMarkerWithPopup(map, img.src, lngLat);
        markers.push(marker);
      });

      markersRef.current = markers;
    });

    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-0" />;
}

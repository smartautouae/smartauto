// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      // ── Old WordPress service slugs ───────────────────────────────────
      {
        source: "/car-window-tinting-dubai",
        destination: "/services/car-window-tinting-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/car-window-tinting-dubai/",
        destination: "/services/car-window-tinting-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/villa-window-tinting",
        destination: "/services/villa-window-tinting-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/villa-window-tinting/",
        destination: "/services/villa-window-tinting-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/commercial",
        destination: "/services/commercial-window-tinting-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/paint-protection-films",
        destination: "/services/paint-protection-film-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/nano-ceramic-coating",
        destination: "/services/nano-ceramic-coating-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/car-detailing",
        destination: "/services/car-detailing-polishing-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/car-wrapping",
        destination: "/services/car-wrapping-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/switchable-smart-film",
        destination: "/services/switchable-smart-glass-film-dubai-sharjah",
        permanent: true,
      },
      {
        source: "/stone-protection-film",
        destination: "/services/surface-protection-film-dubai-sharjah",
        permanent: true,
      },

      // ── Old WordPress page slugs ──────────────────────────────────────
      { source: "/home",        destination: "/",             permanent: true },
      { source: "/about",       destination: "/why-us",       permanent: true },
      { source: "/about-us",    destination: "/why-us",       permanent: true },
      { source: "/our-branches",destination: "/branches",     permanent: true },
      { source: "/our-gallery", destination: "/gallery",      permanent: true },
      { source: "/reviews",     destination: "/testimonials", permanent: true },
      { source: "/get-in-touch",destination: "/contact",      permanent: true },


      // ── Trailing slash normalisation ──────────────────────────────────
      { source: "/services/:slug/", destination: "/services/:slug", permanent: true },
      { source: "/:slug/",          destination: "/:slug",          permanent: true },
    ];
  },
};

export default nextConfig;

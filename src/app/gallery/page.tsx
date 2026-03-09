import type { Metadata } from "next";
import { ChevronRight, Star, ArrowRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Gallery | Smart Auto UAE | Window Tinting & Protection Films Dubai & Sharjah",
  description:
    "Browse Smart Auto UAE's gallery of professional window tinting, smart film, PPF & surface protection installations across Dubai & Sharjah. Car tinting, villa tinting, commercial tinting, switchable smart film & surface protection films. Real projects. Real results.",
  keywords: [
    "Smart Auto UAE gallery",
    "window tinting gallery Dubai",
    "window tinting photos Dubai",
    "car tinting photos Dubai",
    "villa tinting photos Dubai",
    "commercial tinting photos Dubai",
    "smart film gallery Dubai",
    "PPF gallery Dubai",
    "surface protection film gallery Dubai",
    "window tinting before after Dubai",
    "Smart Auto UAE projects",
    "3M tinting photos Dubai",
    "window film installation gallery UAE",
  ],
  alternates: { canonical: "https://smartautouae.ae/gallery" },
  openGraph: {
    title: "Gallery | Smart Auto UAE | Window Tinting Dubai & Sharjah",
    description:
      "Professional window tinting, smart film, PPF & surface protection gallery. Real installations across Dubai & Sharjah.",
    url: "https://smartautouae.ae/gallery",
    siteName: "Smart Auto UAE",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#080808", color: "#fff", fontFamily: "var(--font-inter),sans-serif" }}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-44 pb-24"
          style={{ background: "linear-gradient(180deg,#050505 0%,#0A0A0A 100%)" }}>

          <div className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.025,
              backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom,transparent,#0A0A0A)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] mb-12" style={{ color: "rgba(255,255,255,0.3)" }}>
              <Link href="/" className="no-underline hover:text-white/60 transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>Home</Link>
              <ChevronRight size={12} />
              <span style={{ color: "#C9A84C" }}>Gallery</span>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: "#C9A84C" }}>
                <Star size={10} fill="#C9A84C" strokeWidth={0} />
                Real Projects · Real Results · Dubai & Sharjah
              </div>

              <h1 className="font-bold leading-[1.05] mb-5"
                style={{
                  fontFamily: "var(--font-playfair),serif",
                  fontSize: "clamp(2.4rem,5.5vw,4.5rem)",
                  color: "#fff",
                }}>
                Our Work Speaks{" "}
                <span style={{
                  background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  For Itself
                </span>
              </h1>

              <p className="mb-10 leading-[1.9] max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.95rem,1.3vw,1.05rem)" }}>
                Browse our portfolio of professional installations across{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Dubai and Sharjah</strong> -
                car window tinting, villa &amp; residential films, commercial buildings,
                switchable smart film, PPF, and surface protection.
                Every image is a real Smart Auto UAE project.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                  { v: "1000+", l: "Projects Completed" },
                  { v: "600+",  l: "5-Star Reviews" },
                  { v: "20+",   l: "Years Experience" },
                  { v: "4",     l: "Branches" },
                ].map((s) => (
                  <div key={s.l}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border"
                    style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.04)" }}>
                    <span className="font-bold text-[15px]"
                      style={{
                        fontFamily: "var(--font-playfair),serif",
                        background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}>
                      {s.v}
                    </span>
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FILTERABLE GALLERY GRID (Client Component) ────────────────── */}
        <GalleryGrid />

        {/* ── INSTAGRAM CTA ─────────────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              {/* Instagram gradient icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f9ce34" />
                    <stop offset="33%" stopColor="#ee2a7b" />
                    <stop offset="100%" stopColor="#6228d7" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig)" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.5" stroke="url(#ig)" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1" fill="url(#ig)" />
              </svg>
              <span className="font-semibold text-[15px]" style={{ color: "#fff" }}>Follow us on Instagram</span>
            </div>
            <p className="text-[13px] mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              See more of our latest installations, before &amp; afters, and behind-the-scenes content
              on Instagram. Updated regularly with new projects across Dubai &amp; Sharjah.
            </p>
            <a
              href="https://instagram.com/smartautouae"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm no-underline border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: "1px solid rgba(238,42,123,0.35)",
                background: "rgba(238,42,123,0.06)",
                color: "#ee2a7b",
              }}>
              @smartautouae
              <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* ── CTA BANNER ────────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#080808" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden border px-10 py-16 md:px-20 text-center"
              style={{ border: "1px solid rgba(201,168,76,0.18)", background: "#080808" }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(201,168,76,0.07) 0%,transparent 65%)" }} />
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.4),transparent)" }} />
              <div className="relative z-10">
                <p className="text-[10px] tracking-[0.35em] uppercase mb-5"
                  style={{ color: "rgba(201,168,76,0.6)" }}>
                  Get the Same Results · Dubai &amp; Sharjah · Free Consultation
                </p>
                <h2 className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-playfair),serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    color: "#fff",
                  }}>
                  Want Results Like These?
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Get a free consultation for any of our services -
                  car tinting, villa &amp; commercial window films, smart film, PPF &amp; surface protection.
                  Open every day 11AM – 9PM across 4 branches in Dubai &amp; Sharjah.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: "linear-gradient(135deg,#C9A84C,#E8C96A)", boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    <MessageCircle size={15} /> Book Free Consultation <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971524403677"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm no-underline border"
                    style={{ borderColor: "rgba(201,168,76,0.35)", color: "#C9A84C", background: "rgba(201,168,76,0.04)" }}>
                    <Phone size={15} /> +971 55 555 9424
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Phone, MapPin, ChevronRight,
  Star, Shield, Sparkles, Sun, Zap, Eye, ShieldCheck,
  Layers, Clock, Award, Building2, Store, Hotel,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Commercial Window Tinting Dubai & Sharjah | Office Building Window Film | Smart Auto UAE",
  description:
    "Professional commercial window tinting in Dubai & Sharjah. UAE's trusted applicator of 3M USA, Global USA & Totalgard films. Office window tinting, building window tinting, shop window tinting, privacy films, safety films. Block 90% heat, 99% UV, 95% glare. Free site visit. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah.",
  keywords: [
    "commercial window tinting Dubai",
    "commercial window tinting Sharjah",
    "commercial window tinting UAE",
    "office window tinting Dubai",
    "office window tinting Sharjah",
    "building window tinting Dubai",
    "building window tinting Sharjah",
    "building window film installation Dubai",
    "building window tinting near me Dubai",
    "office building window tinting Dubai",
    "office building privacy tinting Dubai",
    "shop window tinting Dubai",
    "shop window tinting Sharjah",
    "window tinting services Dubai",
    "decorative window film Dubai",
    "commercial window film Dubai",
    "3M commercial window tinting Dubai",
    "Totalgard commercial window film Dubai",
    "Global USA commercial window film UAE",
    "heat rejection window film commercial Dubai",
    "privacy window film office Dubai",
    "safety window film commercial UAE",
    "energy saving window film office Dubai",
    "sun control window film commercial UAE",
    "anti glare window film office Dubai",
    "commercial tinting near me Dubai",
    "Smart Auto UAE commercial tinting",
    "UAE authorised window film applicator",
    "office glass tinting Dubai",
    "commercial glass film Sharjah",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/commercial-window-tinting-dubai-sharjah" },
  openGraph: {
    title: "Commercial Window Tinting Dubai & Sharjah | Office Building Window Film | Smart Auto UAE",
    description:
      "UAE authorised commercial window tinting in Dubai & Sharjah. 3M USA, Global USA & Totalgard films. Office tinting, building tinting, shop tinting, privacy & safety films. Block 90% heat, 99% UV. Free site visit.",
    url: "https://smartautouae.ae/services/commercial-window-tinting-dubai-sharjah",
    siteName: "Smart Auto UAE",
    type: "website",
  },
};

// ── CONSTANTS ──────────────────────────────────────────────────────────────

const gold     = "#C9A84C";
const goldGrad = "linear-gradient(135deg,#C9A84C,#E8C96A)";
const cardBg   = "rgba(255,255,255,0.02)";
const cardBdr  = "rgba(255,255,255,0.06)";

// ── DATA ───────────────────────────────────────────────────────────────────

const filmBrands = [
  {
    name: "3M USA",
    tag: "Global Leader",
    tagColor: "#60a5fa",
    desc: "3M is the world's most trusted name in commercial and architectural window films. Their commercial range covers sun control, safety & security, and all-seasons films - used in offices, towers, shopping malls, schools, and hotels across the UAE.",
    features: [
      "Sun Control Window Films",
      "Safety & Security Films",
      "All Seasons Window Films",
      "Anti-graffiti film range",
      "99% UV ray protection",
      "OEM trusted globally",
    ],
  },
  {
    name: "Global USA",
    tag: "Premium Brand",
    tagColor: "#a78bfa",
    desc: "Global USA's commercial window film range is engineered with advanced nano-ceramic technology - delivering superior solar heat rejection, exceptional glare control, and long-term colour stability for commercial buildings and offices in the UAE.",
    features: [
      "Nano-ceramic film technology",
      "Superior heat rejection",
      "Signal-friendly - no interference",
      "Long-term colour stability",
      "High-rise & commercial grade",
      "Optimal visible light transmission",
    ],
  },
  {
    name: "Totalgard",
    tag: "UAE Specialist",
    tagColor: "#34d399",
    desc: "Totalgard is a leading UAE-based architectural window film brand - an authorised provider of sun control, safety, decorative, and graphically printed window films for commercial buildings, shopping malls, schools, hotels, and office spaces across the UAE.",
    features: [
      "UAE authorised distributor",
      "Commercial & architectural range",
      "Safety & security films",
      "Decorative & graphic printed films",
      "GCC climate-engineered",
      "Shopping malls, offices, schools",
    ],
  },
];

const commercialTypes = [
  {
    icon: Sun,
    id: "heat",
    title: "Sun Control & Heat Rejection",
    desc: "Our commercial heat rejection films block up to 90% of solar infrared heat - dramatically reducing indoor temperatures in offices, shops, and commercial spaces. Cut hot spots, reduce AC load, and lower energy bills year-round.",
    points: [
      "Up to 90% solar heat rejected",
      "Eliminates hot spots & discomfort",
      "Reduces AC consumption by up to 30%",
      "Maintains full natural light",
      "Ideal for south & west-facing facades",
      "3M, Global USA & Totalgard options",
    ],
  },
  {
    icon: Eye,
    id: "privacy",
    title: "Privacy & One-Way Films",
    desc: "Our commercial privacy films are dark from the outside and clear from the inside - providing complete privacy for offices, meeting rooms, and retail spaces while fully preserving natural light and outward views throughout the day.",
    points: [
      "Dark outside, crystal clear inside",
      "Full privacy without blocking daylight",
      "Ideal for meeting rooms & boardrooms",
      "Reduces glare on screens & monitors",
      "Available in multiple tint shades",
      "Frosted & decorative options available",
    ],
  },
  {
    icon: Shield,
    id: "safety",
    title: "Safety & Security Films",
    desc: "Commercial safety films hold shattered glass together on impact - protecting occupants, merchandise, and assets. Used in shopping malls, schools, office towers, and hotels where annealed glass presents safety and security risks.",
    points: [
      "Holds glass together on breakage",
      "Resistance to forced entry",
      "Ballistic resistance variants",
      "Anti-graffiti film options",
      "Meets UAE building safety codes",
      "Totalgard & 3M safety range",
    ],
  },
  {
    icon: Sparkles,
    id: "decorative",
    title: "Decorative & Graphic Films",
    desc: "Transform your commercial glass surfaces with decorative, frosted, and graphically printed films - creating branded, elegant, or patterned effects on office partitions, shopfronts, reception glass, and external facades.",
    points: [
      "Frosted & etched glass effects",
      "Branded graphic printing available",
      "Full or partial coverage options",
      "Shopfront & reception glass",
      "Office partition privacy films",
      "Enhances brand identity",
    ],
  },
];

const buildingTypes = [
  {
    icon: Building2,
    title: "Office Buildings & Towers",
    desc: "Reduce solar heat penetration, eliminate glare on screens, improve employee comfort, and cut cooling costs - in offices of all sizes from single-floor units to multi-storey commercial towers.",
  },
  {
    icon: Store,
    title: "Retail Shops & Showrooms",
    desc: "Protect merchandise from UV fading, reduce heat in customer-facing spaces, improve shopfront appearance, and create privacy for stock areas - all while maintaining a welcoming, naturally lit environment.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    desc: "Ensure guest comfort with heat-rejected, glare-free rooms. Enhance facade aesthetics with decorative films. Improve privacy for ground-floor suites and restaurant spaces - all using premium 3M, Global USA, and Totalgard films.",
  },
  {
    icon: Award,
    title: "Schools & Institutions",
    desc: "Safety and sun control films for schools, universities, mosques, and government buildings - protecting students and staff with safety-compliant glass reinforcement and UV-blocking heat rejection films.",
  },
];

const keyStats = [
  { value: "90%", label: "Heat Rejection",  desc: "Solar heat blocked from commercial interiors" },
  { value: "99%", label: "UV Protection",   desc: "Harmful UV rays blocked - protects people & assets" },
  { value: "95%", label: "Glare Reduction", desc: "Screen glare eliminated for productive workspaces" },
  { value: "30%", label: "Energy Savings",  desc: "Reduction in commercial cooling costs" },
];

const process = [
  {
    num: "01",
    title: "Free Site Survey",
    desc: "Our commercial team visits your building, office, or retail space - assessing glass type, orientation, sun exposure, and your specific requirements to recommend the ideal film solution.",
  },
  {
    num: "02",
    title: "Film Recommendation",
    desc: "We present a tailored recommendation from our 3M USA, Global USA, and Totalgard commercial film ranges - covering heat control, privacy, safety, decorative, or a combination of solutions.",
  },
  {
    num: "03",
    title: "Surface Preparation",
    desc: "All glass surfaces are professionally cleaned and decontaminated before installation - ensuring perfect film adhesion, zero bubbles, and a flawless long-lasting finish on every panel.",
  },
  {
    num: "04",
    title: "Professional Installation",
    desc: "Our certified commercial installers apply film panel by panel using precision cutting software - minimising disruption to your business operations while ensuring seamless, edge-to-edge coverage.",
  },
  {
    num: "05",
    title: "Inspection & Sign-Off",
    desc: "Every window is inspected under controlled lighting before project completion - checking for zero optical defects, bubbles, or lifting. We sign off only when every panel meets our quality standard.",
  },
];

const faqs = [
  {
    q: "What window film brands do you use for commercial tinting in Dubai?",
    a: "Smart Auto UAE is a UAE authorised distributor and applicator of three premium commercial window film brands: 3M USA - the global leader in architectural sun control, safety & security, and all-seasons commercial window films; Global USA - featuring advanced nano-ceramic technology for superior heat rejection and glare control; and Totalgard - a UAE-specialist brand widely used in commercial buildings, shopping malls, schools, hotels, and office towers across the UAE.",
  },
  {
    q: "What types of commercial window film do you offer?",
    a: "We offer four main categories of commercial window film: Sun Control & Heat Rejection films (block up to 90% solar heat, reduce AC load and energy costs); Privacy & One-Way films (dark from outside, clear from inside - ideal for offices and meeting rooms); Safety & Security films (hold shattered glass together, resist forced entry, anti-graffiti options); and Decorative & Graphic films (frosted, etched, branded, and printed options for shopfronts, partitions, and facades).",
  },
  {
    q: "How much energy can commercial window tinting save?",
    a: "Our commercial heat rejection films have been proven to reduce building cooling costs by up to 30%. By blocking up to 90% of solar infrared heat, window films dramatically reduce the load on commercial HVAC and air conditioning systems - delivering consistent, measurable energy savings year-round. In Dubai and Sharjah's climate, this represents a very significant ongoing cost reduction for any commercial property.",
  },
  {
    q: "Will commercial window tinting make offices darker?",
    a: "Not significantly. Our premium 3M, Global USA, and Totalgard commercial films are specifically engineered to reject heat and UV rays while maintaining high visible light transmission - keeping offices bright and naturally lit. Many of our commercial films are virtually invisible from the inside, with no noticeable change in interior light levels.",
  },
  {
    q: "Do you do office window tinting in Dubai?",
    a: "Yes - Smart Auto UAE provides professional office window tinting across Dubai and Sharjah for all sizes of office spaces - from individual offices and single floors to full multi-storey commercial towers. Our office tinting solutions reduce glare on computer screens, improve employee comfort, provide meeting room privacy, and lower energy bills.",
  },
  {
    q: "Do you offer shop and retail window tinting in Dubai?",
    a: "Yes - we offer professional shop window tinting and retail window film installation across Dubai and Sharjah. Our retail solutions include heat rejection films for customer comfort, UV protection films to prevent merchandise fading, privacy films for stock areas, and decorative or frosted films for shopfront aesthetics.",
  },
  {
    q: "Is commercial window tinting in UAE buildings regulated?",
    a: "Yes - for external window film installations on commercial buildings in Dubai and Sharjah, municipal approval may be required depending on the building type and location. As a UAE authorised applicator of 3M, Global USA, and Totalgard commercial films, Smart Auto UAE ensures all commercial installations are compliant with UAE building codes and safety standards. Our team advises on permit requirements during the free site survey.",
  },
  {
    q: "Where can I get commercial window tinting near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. We offer free on-site surveys and consultations for all commercial window tinting projects across Dubai and Sharjah. Contact us on WhatsApp or call us to schedule your free commercial site visit.",
  },
];

// ── FAQ COMPONENT ──────────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details
      className="group rounded-2xl border overflow-hidden"
      style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
        <span className="font-semibold text-[15px] pr-4" style={{ color: "#fff" }}>{question}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45"
          style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", color: gold }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-[13px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.45)" }}>{answer}</p>
      </div>
    </details>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function CommercialWindowTintingPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#080808", color: "#fff", fontFamily: "var(--font-inter),sans-serif" }}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-44 pb-28"
          style={{ background: "linear-gradient(180deg,#050505 0%,#0A0A0A 100%)" }}>

          <div className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.025,
              backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom,transparent,#0A0A0A)" }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.07,
            }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] mb-12" style={{ color: "rgba(255,255,255,0.3)" }}>
              <Link href="/" className="no-underline hover:text-white/60 transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="no-underline hover:text-white/60 transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>Services</Link>
              <ChevronRight size={12} />
              <span style={{ color: gold }}>Commercial Window Tinting</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  UAE's Trusted Applicator
                </div>

                <h1 className="font-bold leading-[1.05] mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.2rem,5vw,4rem)", color: "#fff" }}>
                  Commercial Window Tinting{" "}
                </h1>

                <p className="text-[13px] tracking-[0.2em] uppercase mb-6 font-medium"
                  style={{ color: "rgba(201,168,76,0.7)" }}>
                  Offices · Buildings · Shops · Hotels · Schools
                </p>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Professional commercial and office building window tinting in{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai,</strong>
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah and across UAE</strong>.
                  UAE authorised distributor and applicator of{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>3M USA, Global USA</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Totalgard</strong> commercial
                  window films - blocking 90% heat, 99% UV, and 95% glare across offices, buildings,
                  retail shops, hotels, and schools.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "UAE's trusted applicator",
                    "3M USA · Global USA · Totalgard",
                    "Up to 90% heat rejection",
                    "Office, building & shop tinting",
                    "Privacy · Safety · Decorative films",
                    "Free commercial site survey",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckCircle size={14} style={{ color: gold, flexShrink: 0 }} />
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>
                    Get a Free Quote <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971524403677"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm no-underline border"
                    style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden border"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", height: "480px" }}>
                  <img
                    src="/images/commercial-tint.webp"
                    alt="Commercial window tinting Dubai Sharjah - office building window film - 3M Global Totalgard - Smart Auto UAE"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 60%)" }} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 rounded-2xl px-5 py-4 border backdrop-blur-md"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(0,0,0,0.75)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.15)", color: gold }}>
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-[14px]" style={{ color: "#fff" }}>
                          UAE's Trusted Applicator
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          3M USA · Global USA · Totalgard · Dubai & Sharjah
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat - 99% UV */}
                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[26px] leading-none mb-0.5"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    99%
                  </div>
                  <div className="font-bold text-[11px] leading-tight mb-0.5" style={{ color: "#fff" }}>UV Blocked</div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Protection</div>
                </div>

                {/* Floating stat - 90% Heat */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[26px] leading-none mb-0.5"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    90%
                  </div>
                  <div className="font-bold text-[11px] leading-tight mb-0.5" style={{ color: "#fff" }}>Heat Blocked</div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Solar Rejection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY STATS ─────────────────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {keyStats.map((stat) => (
                <div key={stat.label}
                  className="rounded-2xl p-7 border text-center"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}>
                  <div className="font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2rem,4vw,3rem)", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {stat.value}
                  </div>
                  <div className="font-semibold text-[14px] mb-1.5" style={{ color: "#fff" }}>{stat.label}</div>
                  <div className="text-[11px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTHORISED DISTRIBUTOR BANNER ─────────────────────────────── */}
        <section className="py-10" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-2xl border px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5"
              style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}>
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <ShieldCheck size={18} style={{ color: gold }} />
                  <span className="font-bold text-[16px]" style={{ color: "#fff" }}>
                    UAE's Trusted Applicator
                  </span>
                </div>
                <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Smart Auto UAE is an authorised distributor and certified applicator of{" "}
                  <strong style={{ color: "rgba(255,255,255,0.65)" }}>3M USA, Global USA &amp; Totalgard</strong>{" "}
                  commercial window films in Dubai and Sharjah.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                {["3M USA", "Global USA", "Totalgard"].map((b) => (
                  <div key={b}
                    className="px-4 py-2 rounded-full border text-[11px] font-semibold tracking-wide"
                    style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)", color: gold }}>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMERCIAL FILM TYPES ─────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Commercial Film Solutions
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Commercial Window Film{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Types
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                From solar heat rejection and one-way privacy to safety, security, and decorative films -
                the complete range of commercial window film solutions for every building type in Dubai and Sharjah.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {commercialTypes.map((film) => (
                <div key={film.id}
                  className="rounded-2xl border p-8 transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                      <film.icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[19px] mb-2"
                        style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                        {film.title}
                      </h3>
                      <p className="text-[13px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {film.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {film.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2 text-[12px]"
                            style={{ color: "rgba(255,255,255,0.5)" }}>
                            <CheckCircle size={11} style={{ color: gold, flexShrink: 0 }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUILDING TYPES ────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Who We Work With
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Commercial Tinting for Every{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Building Type
                </span>
              </h2>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {buildingTypes.map((bt) => (
                <div key={bt.title}
                  className="rounded-2xl p-7 border text-center transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <bt.icon size={22} />
                  </div>
                  <h3 className="font-semibold text-[15px] mb-2.5" style={{ color: "#fff" }}>{bt.title}</h3>
                  <p className="text-[12px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>{bt.desc}</p>
                </div>
              ))}
            </div>

            {/* Additional building types pill row */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {[
                "Office Towers", "Shopping Malls", "Retail Shops",
                "Restaurants", "Hotels", "Schools & Universities",
                "Government Buildings", "Mosques", "Medical Centres",
                "Warehouses", "Showrooms", "Apartment Buildings",
              ].map((t) => (
                <span key={t}
                  className="px-4 py-1.5 rounded-full text-[11px] font-medium"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANDS ────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Premium Commercial Window Film Brands
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                3M USA · Global USA ·{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Totalgard
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                As a UAE authorised distributor and applicator, we install only professional-grade commercial
                window films from globally trusted brands - ensuring real, measurable performance across
                every building type in Dubai and Sharjah.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {filmBrands.map((brand) => (
                <div key={brand.name}
                  className="rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="px-7 pt-7 pb-5 border-b" style={{ borderColor: cardBdr }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wide mb-4"
                      style={{ background: `${brand.tagColor}20`, border: `1px solid ${brand.tagColor}50`, color: brand.tagColor }}>
                      {brand.tag}
                    </span>
                    <h3 className="font-bold text-[22px]"
                      style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                      {brand.name}
                    </h3>
                  </div>
                  <div className="px-7 py-6 flex-1">
                    <p className="text-[13px] leading-[1.75] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {brand.desc}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {brand.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-[12px]"
                          style={{ color: "rgba(255,255,255,0.5)" }}>
                          <CheckCircle size={11} style={{ color: gold, flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                How It Works
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Our Commercial Tinting{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Process
                </span>
              </h2>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              <div className="absolute top-10 left-[5%] w-[90%] h-px pointer-events-none hidden lg:block"
                style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent)" }} />
              {process.map((step) => (
                <div key={step.num}
                  className="rounded-2xl p-7 border text-center transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-[16px]"
                    style={{ fontFamily: "var(--font-playfair),serif", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)", color: gold }}>
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-[14px] mb-2" style={{ color: "#fff" }}>{step.title}</h3>
                  <p className="text-[12px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY SMART AUTO ────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div className="relative rounded-3xl overflow-hidden border order-2 lg:order-1"
                style={{ border: "1px solid rgba(201,168,76,0.12)", height: "460px" }}>
                <img
                  src="/images/commercial-tint-1.webp"
                  alt="Smart Auto UAE - commercial office building window tinting near me Dubai Sharjah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right,rgba(0,0,0,0.4) 0%,transparent 70%)" }} />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[
                    { val: "20+",  label: "Yrs Exp." },
                    { val: "4",    label: "Branches" },
                    { val: "600+", label: "Reviews" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl px-4 py-3 text-center border backdrop-blur-md"
                      style={{ background: "rgba(0,0,0,0.8)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <div className="font-bold text-[20px] leading-none mb-0.5"
                        style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        {s.val}
                      </div>
                      <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                  Why Smart Auto UAE
                </span>
                <h2 className="font-bold leading-snug mb-5"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#fff" }}>
                  Dubai &amp; Sharjah's Trusted{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Commercial Tinting Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  As a UAE authorised distributor and certified applicator of{" "}
                  <strong style={{ color: "rgba(255,255,255,0.75)" }}>3M USA, Global USA, and Totalgard</strong>{" "}
                  commercial window films, Smart Auto UAE delivers precision commercial installations
                  across offices, buildings, retail spaces, hotels, and schools throughout Dubai and Sharjah.
                  Over 20 years of experience. Minimal disruption to your business operations.
                  Full compliance with UAE building codes and safety standards.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: ShieldCheck, text: "UAE's trusted applicator - 3M, Global USA, Totalgard" },
                    { icon: Sun,         text: "Block 90% heat · 99% UV · 95% glare · 30% energy savings" },
                    { icon: Building2,   text: "Offices · Buildings · Shops · Hotels · Schools · Shopping malls" },
                    { icon: MapPin,      text: "4 branches - MotorCity, Al Quoz, Mirdif & Sharjah" },
                    { icon: Clock,       text: "Free commercial site survey · Open every day 11AM – 9PM" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                        <item.icon size={16} />
                      </div>
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>
                    Get a Free Quote <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971524403677"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm no-underline border"
                    style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                    <Phone size={14} /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BRANCHES ──────────────────────────────────────────────────── */}
        <BranchCards branches={BRANCHES} serviceName="Commercial Window Tinting" />

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Common Questions
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#fff" }}>
                FAQs - Commercial Window Tinting{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Dubai &amp; Sharjah
                </span>
              </h2>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
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
                  Commercial &amp; Office Window Tinting · Dubai &amp; Sharjah · UAE Authorised Applicator
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Reduce Heat. Protect Your Team. Cut Energy Costs.
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  3M USA · Global USA · Totalgard commercial films.
                  Block 90% heat · 99% UV · 95% glare · Up to 30% energy savings.
                  Offices · Buildings · Shops · Hotels · Schools.
                  UAE authorised applicator · Free commercial site survey.
                  Dubai &amp; Sharjah.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Book Free Site Survey <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971524403677"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm no-underline border"
                    style={{ borderColor: "rgba(201,168,76,0.35)", color: gold, background: "rgba(201,168,76,0.04)" }}>
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

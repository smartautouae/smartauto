import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Phone, MapPin, ChevronRight,
  Star, Shield, Zap, Droplets, Clock, Award, ShieldCheck, Sparkles,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Paint Protection Film Dubai & Sharjah | PPF TotalGard, 3M, SIRIUS, GLOBAL | Smart Auto UAE",
  description:
    "Professional Paint Protection Film (PPF) installation in Dubai & Sharjah. TotalGard, SIRIUS USA, GLOBAL USA, 3M & Smart Pro PPF. Self-healing, scratch-proof, UV resistant. Full body & partial PPF available. 5-year warranty. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah.",
  keywords: [
    "paint protection film Dubai",
    "paint protection film Sharjah",
    "PPF Dubai",
    "PPF Sharjah",
    "PPF installation Dubai UAE",
    "car PPF near me Dubai",
    "TotalGard PPF Dubai",
    "3M PPF Dubai",
    "SIRIUS PPF Dubai",
    "GLOBAL PPF Dubai",
    "Smart Pro PPF UAE",
    "self healing PPF Dubai",
    "clear bra Dubai",
    "full body PPF Dubai",
    "partial PPF Dubai",
    "scratch proof car film Dubai",
    "car paint protection Dubai",
    "car paint protection Sharjah",
    "PPF MotorCity Dubai",
    "PPF Al Quoz Dubai",
    "PPF Mirdif Dubai",
    "PPF Sharjah",
    "Smart Auto UAE PPF",
    "best PPF Dubai",
    "UV protection car film UAE",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/paint-protection-film-dubai-sharjah" },
  openGraph: {
    title: "Paint Protection Film Dubai & Sharjah | PPF TotalGard, 3M, SIRIUS, GLOBAL | Smart Auto UAE",
    description:
      "Professional PPF installation in Dubai & Sharjah. TotalGard, SIRIUS USA, GLOBAL USA, 3M & Smart Pro. Self-healing. 5-year warranty. 4 branches.",
    url: "https://smartautouae.ae/services/paint-protection-film-dubai-sharjah",
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

const benefits = [
  {
    icon: Shield,
    title: "Scratch & Chip Protection",
    desc: "PPF acts as an invisible armour on your car's paintwork - absorbing rock chips, road debris, minor scratches, and swirl marks before they can damage your original paint.",
  },
  {
    icon: Sparkles,
    title: "Self-Healing Technology",
    desc: "Our premium PPF films feature self-healing properties - swirl marks disappear on their own with heat from the sun or warm water, keeping your car looking flawless and better than showroom condition.",
  },
  {
    icon: Droplets,
    title: "Hydrophobic & Easy to Clean",
    desc: "PPF creates a hydrophobic surface that repels water, dirt, bird droppings, and bug splatter - making your car dramatically easier to maintain and keep clean in regional dusty conditions.",
  },
  {
    icon: Zap,
    title: "UV & Oxidation Resistance",
    desc: "UAE's intense UV exposure causes paint to fade and oxidise over time. PPF filters harmful UV rays, maintaining your car's original colour depth and gloss for years longer than unprotected paint.",
  },
  {
    icon: Award,
    title: "Preserves Resale Value",
    desc: "A perfectly maintained factory paint finish commands significantly higher resale value. PPF is one of the smartest investments you can make to protect your car's value in the UAE market.",
  },
  {
    icon: ShieldCheck,
    title: "Invisible Protection",
    desc: "We provide gloss and matte finish. Our PPF films are optically clear and virtually invisible once installed - your car looks exactly as intended from the factory, with zero change in colour, gloss, or appearance.",
  },
];

const ppfBrands = [
  {
    name: "TotalGard PPF",
    tag: "Most Popular",
    tagColor: "#C9A84C",
    origin: "TotalGard",
    features: [
      "Self-healing top coat",
      "High gloss finish",
      "Scratch & chip protection",
      "Hydrophobic surface",
      "UAE climate tested",
      "Upto 5-year warranty",
    ],
    desc: "TotalGard PPF is our most popular paint protection film across Dubai and Sharjah. It delivers outstanding clarity, self-healing capability, and long-term durability - engineered to withstand UAE's extreme heat, sand, and UV conditions.",
  },
  {
    name: "SIRIUS PPF",
    tag: "USA Premium",
    tagColor: "#60a5fa",
    origin: "SIRIUS USA",
    features: [
      "USA-origin premium film",
      "Advanced self-healing formula",
      "Crystal clear optical clarity",
      "Anti-yellowing technology",
      "High impact resistance",
      "Upto 5-year warranty",
    ],
    desc: "SIRIUS is a premium American-made PPF brand renowned for its advanced self-healing technology and exceptional optical clarity. A top choice for prestige and luxury car owners in Dubai and Sharjah who demand the very best protection.",
  },
  {
    name: "GLOBAL PPF",
    tag: "USA Certified",
    tagColor: "#34d399",
    origin: "GLOBAL USA",
    features: [
      "USA-engineered film",
      "Superior stain resistance",
      "Self-healing top coat",
      "UV & yellowing resistant",
      "Flexible installation",
      "Upto 10 year warranty",
    ],
    desc: "GLOBAL USA PPF offers outstanding stain resistance and impact protection with a premium USA-engineered formula. Trusted by car owners across Dubai and Sharjah for its long-term colour stability and durability in harsh UAE conditions.",
  },
  {
    name: "3M PPF",
    tag: "Global Brand",
    tagColor: "#a78bfa",
    origin: "3M",
    features: [
      "3M precision engineering",
      "Proven global performance",
      "Self-healing capability",
      "OEM-grade optical clarity",
      "Excellent UV protection",
      "10 year warranty",
      "Available in gloss & matte finish"
    ],
    desc: "3M's Paint Protection Film range is globally trusted for its precision engineering and consistent performance. A reliable premium option for car owners across Dubai and Sharjah who want a proven international brand with decades of track record.",
  },
  {
    name: "Smart Pro PPF",
    tag: "Our Brand",
    tagColor: "#C9A84C",
    origin: "Smart Auto UAE",
    features: [
      "Smart Auto exclusive brand",
      "Tailored for UAE conditions",
      "Self-healing top coat",
      "High gloss & matte options",
      "Exceptional value",
      "Upto 10 year warranty",
    ],
    desc: "Smart Pro is Smart Auto UAE's exclusive in-house PPF brand - developed and tested specifically for the UAE climate. It delivers premium self-healing protection at exceptional value, backed by our full Smart Auto warranty across all 4 branches.",
  },
];

const coverageOptions = [
  {
    title: "Full Body PPF",
    desc: "Complete paint protection coverage for the entire car - hood, bumpers, fenders, doors, roof, pillars, and rear. Maximum protection for car owners who want their entire vehicle shielded.",
    ideal: "New cars, luxury vehicles, daily drivers",
  },
  {
    title: "Front End Package",
    desc: "Covers the most vulnerable areas - full hood, front bumper, front fenders, and side mirrors. The most common package for protection against highway rock chips and road debris.",
    ideal: "Highway drivers, sports cars, SUVs",
  },
  {
    title: "Partial / Custom PPF",
    desc: "Targeted protection on specific panels you want covered - door edges, door cups, rocker panels, or any area prone to damage. Fully customised to your needs and budget.",
    ideal: "Budget-conscious owners, specific damage-prone areas",
  },
];

const process = [
  {
    num: "01",
    title: "Vehicle Inspection",
    desc: "We thoroughly inspect your car's current paint condition - identifying any existing chips, scratches, or defects that need addressing before PPF installation.",
  },
  {
    num: "02",
    title: "Paint Decontamination",
    desc: "Your car undergoes a full decontamination wash to remove all surface contaminants, bonded particles, and residues - ensuring the PPF bonds cleanly to the paint.",
  },
  {
    num: "03",
    title: "Film Selection & Cut",
    desc: "Choose your preferred PPF brand from TotalGard, SIRIUS, GLOBAL, 3M, or Smart Pro. Our team uses precision cut tailored to your exact car model.",
  },
  {
    num: "04",
    title: "Professional Installation",
    desc: "Our certified PPF installers apply the film with zero air bubbles, zero lifting edges, and invisible seams - ensuring a factory-fresh invisible finish on every panel.",
  },
  {
    num: "05",
    title: "Curing & Quality Check",
    desc: "The film is left to cure fully before a detailed quality inspection. We check every edge, seam, and panel before issuing your warranty card and returning your car.",
  },
];

const faqs = [
  {
    q: "What is Paint Protection Film (PPF)?",
    a: "Paint Protection Film (PPF) is a thick, optically clear polyurethane film applied directly to your car's painted surfaces. It acts as an invisible shield protecting your paint from rock chips, scratches, road debris, UV rays, bird droppings, and environmental contaminants - while preserving your car's original factory finish.",
  },
  {
    q: "Is PPF worth it in Dubai and Sharjah?",
    a: "Absolutely. Dubai and Sharjah's road conditions - including highway gravel, sand, and extreme UV exposure - make PPF one of the best investments for car owners in the UAE. PPF protects your paint from daily damage, prevents UV-related fading and oxidation, and preserves your car's resale value significantly.",
  },
  {
    q: "What is self-healing PPF?",
    a: "Self-healing PPF contains a special elastomeric top coat that allows minor surface scratches and swirl marks to 'heal' and disappear automatically when exposed to heat - either from sunlight or warm water. All our premium brands including TotalGard, SIRIUS, GLOBAL, 3M, and Smart Pro feature self-healing technology.",
  },
  {
    q: "What is the difference between TotalGard, SIRIUS, GLOBAL, 3M and Smart Pro PPF?",
    a: "All five brands we carry are high-quality PPF films with self-healing technology. TotalGard and Smart Pro are our most popular choices for outstanding value and UAE-tested performance. SIRIUS USA and GLOBAL USA are premium American-engineered films with advanced formulas. 3M is a globally trusted brand with proven engineering. Our experts will recommend the best option for your car and budget.",
  },
  {
    q: "How long does PPF installation take in Dubai?",
    a: "A full body PPF installation typically takes 2–4 days depending on the vehicle and coverage area. A front-end package usually takes 1–2 days. We have 4 branches across Dubai (MotorCity, Al Quoz, Mirdif) and Sharjah to serve you conveniently.",
  },
  {
    q: "How long does PPF last in UAE?",
    a: "Premium PPF films from TotalGard, SIRIUS, GLOBAL, 3M, and Smart Pro typically last 5–20 years in UAE conditions when properly maintained. All Smart Auto UAE installations come with a 5-year warranty covering yellowing, peeling, bubbling, and delamination.",
  },
  {
    q: "Can PPF be applied on a new car?",
    a: "Yes - in fact, new cars are the ideal candidate for PPF. Applying paint protection film on a new vehicle locks in the factory-perfect paint condition from day one, ensuring it stays in that condition for years. It is one of the first things we recommend for new car owners in Dubai and Sharjah.",
  },
  {
    q: "Where can I get PPF installed near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. All are open every day from 11AM to 9PM. Contact us on WhatsApp or call to book your PPF consultation.",
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

export default function PPFPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1800&q=80')",
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
              <span style={{ color: gold }}>Paint Protection Film</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left - Copy */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  TotalGard · SIRIUS · GLOBAL · 3M · Smart Pro · 5-Year Warranty
                </div>

                <h1 className="font-bold leading-[1.05] mb-6"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "#fff" }}>
                  Paint Protection Film{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    (PPF) in the UAE
                  </span>
                </h1>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Professional PPF installation across{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah</strong> using{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>TotalGard, SIRIUS USA, GLOBAL USA, 3M</strong> and our exclusive{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Smart Pro</strong> brand.
                  Self-healing, scratch-proof, invisible protection for your car's paint.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "Self-healing PPF technology",
                    "Scratch & chip protection",
                    "UV & oxidation resistant",
                    "Invisible on your car",
                    "Full body & partial options",
                    "4 branches - Dubai & Sharjah",
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
                    Book on WhatsApp <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971524403677"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm no-underline border"
                    style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>

              {/* Right - Image card */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden border"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", height: "480px" }}>
                  <img
                    src="/images/ppf-2.webp"
                    alt="Paint protection film PPF installation Dubai Sharjah - Smart Auto UAE"
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
                          Self-Healing · Invisible · 5-Year Warranty
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          TotalGard · SIRIUS · GLOBAL · 3M · Smart Pro
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[13px] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Self
                  </div>
                  <div className="font-bold text-[13px] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    Healing
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    PPF Film
                  </div>
                </div>

                {/* Floating stat 2 */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[28px] leading-none mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    5yr
                  </div>
                  <div className="text-[10px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Warranty
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── BENEFITS ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Why PPF in UAE
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Benefits of Paint Protection Film in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  the UAE
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Dubai and Sharjah's roads, sand, and extreme UV make PPF an essential investment
                for any car owner who values their paint, resale value, and long-term appearance.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <div key={b.title}
                  className="rounded-2xl p-7 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <b.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[16px] mb-2.5" style={{ color: "#fff" }}>{b.title}</h3>
                  <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PPF BRANDS ────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                5 Premium PPF Brands
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                PPF Brands Available{" "}
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                We carry the widest range of premium PPF brands in UAE - from global leaders to our own
                exclusive Smart Pro brand. Every film is genuine and every installation is certified.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            {/* 5 brand cards - 3 + 2 layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              {ppfBrands.slice(0, 3).map((brand) => (
                <BrandCard key={brand.name} brand={brand} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {ppfBrands.slice(3).map((brand) => (
                <BrandCard key={brand.name} brand={brand} />
              ))}
            </div>

            {/* Brand pills */}
            <div className="flex items-center justify-center gap-4 mt-14 flex-wrap">
              <p className="text-[11px] tracking-[0.2em] uppercase w-full text-center mb-1"
                style={{ color: "rgba(255,255,255,0.2)" }}>
                Authorised dealer &amp; installer for
              </p>
              {["TotalGard", "SIRIUS USA", "GLOBAL USA", "3M", "Smart Pro"].map((brand) => (
                <div key={brand}
                  className="px-5 py-2 rounded-full border text-[12px] font-semibold tracking-wide"
                  style={{
                    border: "1px solid rgba(201,168,76,0.2)",
                    background: "rgba(201,168,76,0.04)",
                    color: brand === "Smart Pro" ? gold : "rgba(255,255,255,0.55)",
                  }}>
                  {brand === "Smart Pro" ? "★ Smart Pro" : brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COVERAGE OPTIONS ──────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                PPF Coverage Options
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Full Body or Partial -{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  You Choose
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Whether you want complete paint protection or targeted coverage on key areas,
                we offer flexible PPF packages for every car and every budget.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {coverageOptions.map((opt, i) => (
                <div key={opt.title}
                  className="rounded-2xl p-8 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 font-bold text-[16px]"
                    style={{ fontFamily: "var(--font-playfair),serif", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-[18px] mb-3"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    {opt.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {opt.desc}
                  </p>
                  <div className="flex items-start gap-2 pt-4 border-t" style={{ borderColor: cardBdr }}>
                    <span className="text-[10px] tracking-[0.15em] uppercase flex-shrink-0 mt-0.5" style={{ color: gold }}>
                      Ideal for
                    </span>
                    <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>{opt.ideal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                How It Works
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Our PPF Installation{" "}
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
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div className="relative rounded-3xl overflow-hidden border order-2 lg:order-1"
                style={{ border: "1px solid rgba(201,168,76,0.12)", height: "460px" }}>
                <img
                  src="/images/ppf.webp"
                  alt="Smart Auto UAE - best PPF installer near me Dubai Sharjah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right,rgba(0,0,0,0.4) 0%,transparent 70%)" }} />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[
                    { val: "600+", label: "Google Reviews" },
                    { val: "4",    label: "Branches UAE" },
                    { val: "20+",  label: "Years Exp." },
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
                    PPF Installation Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  With over 20 years of experience across Dubai and Sharjah, Smart Auto UAE is the most
                  trusted destination for professional PPF installation near you. We carry 5 premium brands
                  including our own exclusive Smart Pro PPF - installed by certified technicians using
                  precision cut at all 4 locations.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: Award,       text: "5 premium PPF brands including exclusive Smart Pro" },
                    { icon: ShieldCheck, text: "5-year warranty on all PPF installations" },
                    { icon: MapPin,      text: "4 branches - MotorCity, Al Quoz, Mirdif & Sharjah" },
                    { icon: Clock,       text: "Open every day 10AM – 10PM, walk-ins welcome" },
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
                    Book Now <ArrowRight size={15} />
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
        <BranchCards
          branches={BRANCHES}
          serviceName="Paint Protection Film (PPF)"
        />


        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Common Questions
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#fff" }}>
                FAQs - Paint Protection Film{" "}
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
                  Paint Protection Film · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Protect Your Car's Paint in Dubai or Sharjah Today
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Walk in or book ahead at MotorCity, Al Quoz, Mirdif (Dubai) or Sharjah Central Mall.
                  TotalGard · SIRIUS USA · GLOBAL USA · 3M · Smart Pro PPF.
                  Self-healing. Invisible. 5-year warranty.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Book on WhatsApp <ArrowRight size={15} />
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

// ── BRAND CARD SUBCOMPONENT ────────────────────────────────────────────────

function BrandCard({ brand }: { brand: typeof ppfBrands[0] }) {
  return (
    <div
      className="rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>

      <div className="px-7 pt-7 pb-5 border-b" style={{ borderColor: cardBdr }}>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wide"
            style={{ background: `${brand.tagColor}20`, border: `1px solid ${brand.tagColor}50`, color: brand.tagColor }}>
            {brand.tag}
          </span>
          {brand.tag === "Our Brand" && (
            <span className="text-[10px] tracking-[0.15em] uppercase px-2 py-1 rounded-lg"
              style={{ background: "rgba(201,168,76,0.1)", color: gold }}>
              Exclusive
            </span>
          )}
        </div>
        <h3 className="font-bold text-[19px] mb-1"
          style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
          {brand.name}
        </h3>
        <p className="text-[11px] tracking-wide uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
          {brand.origin}
        </p>
      </div>

      <div className="px-7 py-6 flex-1">
        <p className="text-[13px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
          {brand.desc}
        </p>
        <ul className="flex flex-col gap-2.5">
          {brand.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}>
              <CheckCircle size={13} style={{ color: gold, flexShrink: 0 }} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-7 pb-7">
        <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-semibold no-underline transition-all duration-300 hover:gap-4"
          style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", color: gold }}>
          Get a Quote <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

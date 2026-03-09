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
  title: "Nano Ceramic Coating Dubai & Sharjah | SIRIUS, GYEON, JADE, ONYX | Smart Auto UAE",
  description:
    "Professional nano ceramic coating in Dubai & Sharjah. Bronze, Silver & Diamond packages from AED 1000. SIRIUS USA, GYEON, JADE & ONYX ceramic coatings. 9H hardness, self-cleaning, UV resistant. Up to 5-year warranty. Free annual service. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah.",
  keywords: [
    "nano ceramic coating Dubai",
    "ceramic coating Dubai",
    "nano ceramic coating Sharjah",
    "ceramic coating Sharjah",
    "car ceramic coating Dubai UAE",
    "9H ceramic coating Dubai",
    "SIRIUS ceramic coating Dubai",
    "GYEON ceramic coating Dubai",
    "ceramic coating near me Dubai",
    "ceramic coating near me Sharjah",
    "car paint protection coating Dubai",
    "hydrophobic coating Dubai",
    "ceramic coating packages Dubai",
    "best ceramic coating Dubai",
    "ceramic coating MotorCity Dubai",
    "ceramic coating Al Quoz Dubai",
    "ceramic coating Mirdif Dubai",
    "ceramic coating Sharjah",
    "UV protection ceramic coating UAE",
    "Smart Auto UAE ceramic coating",
    "doorstep ceramic coating Dubai",
    "ceramic coating price Dubai",
    "scratch resistant coating Dubai",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/nano-ceramic-coating-dubai-sharjah" },
  openGraph: {
    title: "Nano Ceramic Coating Dubai & Sharjah | SIRIUS, GYEON, JADE, ONYX | Smart Auto UAE",
    description:
      "Nano ceramic coating in Dubai & Sharjah. Bronze from AED 1000, Silver from AED 1300, Diamond from AED 1800. SIRIUS USA, GYEON, JADE, ONYX. Up to 5-year warranty. 4 branches.",
    url: "https://smartautouae.ae/services/nano-ceramic-coating-dubai-sharjah",
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
    title: "9H Scratch Resistance",
    desc: "Nano ceramic coatings form an ultra-hard 9H-rated surface layer on your paint - providing outstanding resistance to light scratches, swirl marks, and surface abrasions that daily driving causes.",
  },
  {
    icon: Droplets,
    title: "Super Hydrophobic Effect",
    desc: "Water, mud, dust, and road grime simply bead up and roll off your coated paint - keeping your car dramatically cleaner for longer and making every wash faster and easier in Dubai's dusty conditions.",
  },
  {
    icon: Zap,
    title: "UV & Oxidation Protection",
    desc: "UAE's intense sun causes paint to fade, oxidise, and lose its gloss over time. Nano ceramic coating creates a UV-resistant barrier that locks in your car's original colour depth and showroom shine for years.",
  },
  {
    icon: Sparkles,
    title: "Permanent Showroom Gloss",
    desc: "Unlike car wax that lasts months, ceramic coating bonds permanently to your paint at a molecular level - delivering a deep, wet-look gloss that makes your car look freshly detailed every single day.",
  },
  {
    icon: Award,
    title: "Chemical & Contaminant Resistance",
    desc: "Bird droppings, tree sap, industrial fallout, and acidic rain can etch unprotected paint. Ceramic coating's chemical resistance neutralises these threats before they can damage your car's finish.",
  },
  {
    icon: ShieldCheck,
    title: "Thermal Resistance up to 300°C",
    desc: "Our nano ceramic coatings are engineered to withstand extreme heat - up to 300°C - making them perfectly suited to UAE's brutal summer temperatures and engine bay heat exposure.",
  },
];

const packages = [
  {
    tier: "Bronze",
    tagline: "Essential Protection",
    color: "#CD7F32",
    colorLight: "rgba(205,127,50,0.12)",
    colorBdr: "rgba(205,127,50,0.3)",
    sedan: "1,000",
    suv: "1,200",
    warranty: "2 Years",
    includes: [
      "Nano ceramic coating application",
      "2-year coating warranty",
      "Free annual inspection & service",
      "9H hardness protection",
      "5-7 Micron High thickness",
      "Super hydrophobic surface",
      "UV & oxidation resistance",
    ],
    ideal: "Daily drivers, budget-conscious owners",
  },
  {
    tier: "Silver",
    tagline: "Premium Protection",
    color: "#A8A9AD",
    colorLight: "rgba(168,169,173,0.1)",
    colorBdr: "rgba(168,169,173,0.3)",
    sedan: "1,300",
    suv: "1,500",
    warranty: "3 Years",
    popular: true,
    includes: [
      "Premium nano ceramic coating",
      "3-year coating warranty",
      "Free annual inspection & service",
      "Free door edge PPF",
      "9H hardness protection",
      "5-7 Micron High thickness",
      "Superior hydrophobic effect",
      "UV, chemical & scratch resistance",
    ],
    ideal: "Regular car owners who want added value",
  },
  {
    tier: "Diamond",
    tagline: "Ultimate Protection",
    color: "#C9A84C",
    colorLight: "rgba(201,168,76,0.1)",
    colorBdr: "rgba(201,168,76,0.35)",
    sedan: "1,800",
    suv: "2,000",
    warranty: "5 Years",
    includes: [
      "Diamond-grade nano ceramic coating",
      "5-year coating warranty",
      "Free annual inspection & service",
      "Free door edge PPF",
      "Free headlight PPF",
      "Maximum 9H hardness",
      "5-7 Micron High thickness",
      "Elite hydrophobic & gloss finish",
      "Full UV, chemical & thermal protection",
    ],
    ideal: "Luxury cars, new vehicles, long-term owners",
  },
];

const brands = [
  {
    name: "SIRIUS USA Ceramic",
    tag: "Primary Brand",
    tagColor: "#60a5fa",
    origin: "SIRIUS USA",
    desc: "SIRIUS USA is our primary ceramic coating brand - an advanced American-engineered nano ceramic formula delivering outstanding 9H hardness, deep gloss, and long-term durability. Proven in UAE's extreme climate conditions.",
    features: [
      "9H hardness rating",
      "Advanced hydrophobic formula",
      "Deep gloss enhancement",
      "UV & chemical resistant",
      "Long-term durability",
      "USA engineered & certified",
    ],
  },
  {
    name: "JADE Ceramic",
    tag: "Premium",
    tagColor: "#34d399",
    origin: "JADE",
    desc: "JADE ceramic coating offers a premium-grade nano ceramic formula with exceptional gloss depth and surface hardness. A top choice for car owners in Dubai and Sharjah looking for outstanding clarity and long-lasting protection.",
    features: [
      "Premium gloss depth",
      "9H surface hardness",
      "Hydrophobic nano formula",
      "UV & oxidation protection",
      "Scratch & swirl resistance",
      "Long-lasting finish",
    ],
  },
  {
    name: "ONYX Ceramic",
    tag: "High Gloss",
    tagColor: "#a78bfa",
    origin: "ONYX",
    desc: "ONYX ceramic coating is renowned for its signature high-gloss finish and strong chemical resistance. Ideal for car owners in Dubai and Sharjah who want a mirror-like deep shine combined with durable nano ceramic protection.",
    features: [
      "Signature mirror gloss",
      "Strong chemical resistance",
      "9H hardness",
      "Super hydrophobic surface",
      "Anti-contamination formula",
      "Premium long-term protection",
    ],
  },
  {
    name: "GYEON Ceramic",
    tag: "Global Brand",
    tagColor: "#C9A84C",
    origin: "GYEON",
    desc: "GYEON is a globally recognised premium ceramic coating brand trusted by detailing professionals worldwide. Its advanced SiO2-based formula delivers exceptional durability, self-cleaning properties, and an outstanding wet-look finish.",
    features: [
      "SiO2 nano ceramic formula",
      "Self-cleaning properties",
      "Exceptional gloss & clarity",
      "Professional-grade durability",
      "UV & environmental resistance",
      "Globally trusted brand",
    ],
  },
];

const process = [
  {
    num: "01",
    title: "Paint Inspection",
    desc: "We assess your car's current paint condition - checking for swirl marks, scratches, oxidation, and contamination to determine the correct preparation needed before ceramic coating.",
  },
  {
    num: "02",
    title: "Decontamination Wash",
    desc: "A thorough multi-stage decontamination process removes all bonded surface contaminants, iron particles, and residues - ensuring a perfectly clean base for the ceramic coating to bond to.",
  },
  {
    num: "03",
    title: "Paint Correction",
    desc: "Where needed, we perform machine polishing to remove swirl marks, light scratches, and oxidation - so the ceramic coating locks in a perfect, defect-free finish rather than sealing in imperfections.",
  },
  {
    num: "04",
    title: "Ceramic Coating Application",
    desc: "Our certified detailers apply your chosen ceramic coating brand and package - methodically panel by panel, ensuring full even coverage and proper bonding for maximum protection and gloss.",
  },
  {
    num: "05",
    title: "Curing & Inspection",
    desc: "The coating is left to cure fully in a controlled environment. We then perform a detailed quality inspection under professional lighting before issuing your warranty card and returning your car.",
  },
];

const faqs = [
  {
    q: "What is nano ceramic coating?",
    a: "Nano ceramic coating is a liquid polymer applied to a car's exterior that chemically bonds to the factory paint, creating a permanent protective layer. Based on silicon dioxide (SiO2) nano-technology, it delivers 9H hardness, super hydrophobic properties, UV resistance, chemical resistance, and a deep showroom gloss - far outlasting traditional car wax or paint sealants.",
  },
  {
    q: "How long does nano ceramic coating last in Dubai?",
    a: "Our nano ceramic coating packages are warrantied for 2 years (Bronze), 3 years (Silver), or 5 years (Diamond). With proper maintenance - including your free annual service - the coating can protect your car's paint for the full warranty period and beyond in UAE conditions.",
  },
  {
    q: "What is included in the free annual service?",
    a: "All three packages - Bronze, Silver, and Diamond - include a free annual inspection and service visit at any Smart Auto UAE branch. Our team checks the coating condition, performs a maintenance decontamination, and addresses any areas that need attention to ensure your coating performs at its best throughout the warranty period.",
  },
  {
    q: "What is the difference between Bronze, Silver, and Diamond packages?",
    a: "Bronze (from AED 1,000) is our essential package with a 2-year warranty - ideal for daily drivers. Silver (from AED 1,300) upgrades to a 3-year warranty and includes free door edge PPF. Diamond (from AED 1,800) is our ultimate package with a 5-year warranty plus free door edge PPF and headlight PPF - recommended for new or luxury vehicles.",
  },
  {
    q: "What ceramic coating brands do you use?",
    a: "We use four premium ceramic coating brands at Smart Auto UAE - SIRIUS USA (our primary brand), JADE, ONYX, and GYEON. All are professional-grade nano ceramic formulas delivering 9H hardness, hydrophobic protection, and long-term durability suited to UAE's extreme climate.",
  },
  {
    q: "Is nano ceramic coating worth it in Dubai?",
    a: "Absolutely. Dubai's combination of intense UV, heat, sand, dust, and occasional salt air makes ceramic coating one of the most practical car care investments you can make. It replaces the need for regular waxing, keeps your car cleaner for longer, protects against paint fading and oxidation, and preserves your car's resale value significantly.",
  },
  {
    q: "Does ceramic coating prevent scratches?",
    a: "Ceramic coating provides 9H hardness and significant resistance to light surface scratches, swirl marks, and minor abrasions. However, it is not scratch-proof against deep or sharp impacts. For full scratch and chip protection, we recommend combining ceramic coating with Paint Protection Film (PPF) - our Silver and Diamond packages include door edge PPF as a starting point.",
  },
  {
    q: "Where can I get nano ceramic coating near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. All are open every day from 11AM to 9PM. Contact us on WhatsApp or walk in for a free consultation.",
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

export default function NanoCeramicCoatingPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1800&q=80')",
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
              <span style={{ color: gold }}>Nano Ceramic Coating</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  SIRIUS · GYEON · JADE · ONYX · From AED 1,000 · 5-Year Warranty
                </div>

                <h1 className="font-bold leading-[1.05] mb-6"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "#fff" }}>
                  Nano Ceramic Coating{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Dubai &amp; Sharjah
                  </span>
                </h1>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Professional nano ceramic coating across{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah</strong> using{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>SIRIUS USA, GYEON, JADE</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>ONYX</strong>. Permanent showroom gloss,
                  9H scratch resistance, super hydrophobic protection - backed by up to a 5-year warranty.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "9H hardness protection",
                    "Permanent showroom gloss",
                    "Super hydrophobic surface",
                    "UV & chemical resistant",
                    "Bronze, Silver & Diamond packages",
                    "4 branches - Dubai & Sharjah",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckCircle size={14} style={{ color: gold, flexShrink: 0 }} />
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a href="https://wa.me/971555559424" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>
                    Book on WhatsApp <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971555559424"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm no-underline border"
                    style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden border"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", height: "480px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=900&q=80"
                    alt="Nano ceramic coating Dubai Sharjah - 9H hardness showroom gloss - SIRIUS GYEON - Smart Auto UAE"
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
                          9H Hardness · Permanent Gloss · Up to 5 Years
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          SIRIUS USA · GYEON · JADE · ONYX
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[26px] leading-none mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    9H
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Hardness
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[13px] leading-tight mb-0.5"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    From AED
                  </div>
                  <div className="font-bold text-[22px] leading-none mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    1,000
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Sedan
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PACKAGES ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Ceramic Coating Packages
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Bronze, Silver &amp;{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Diamond Packages
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Three tiers of nano ceramic coating protection - choose the package that fits your car,
                your goals, and your budget. All include free annual service.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.tier}
                  className="relative rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: `1px solid ${pkg.colorBdr}`,
                    background: pkg.popular ? "rgba(168,169,173,0.04)" : cardBg,
                    boxShadow: pkg.popular ? "0 0 40px rgba(168,169,173,0.06)" : "none",
                  }}>

                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 flex justify-center">
                      <div className="px-5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-b-xl"
                        style={{ background: "rgba(168,169,173,0.15)", color: "#A8A9AD", border: "1px solid rgba(168,169,173,0.2)", borderTop: "none" }}>
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Top accent */}
                  <div className="h-1 w-full"
                    style={{ background: `linear-gradient(to right, ${pkg.color}, ${pkg.color}88)` }} />

                  {/* Header */}
                  <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: `${pkg.colorBdr}` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[13px]"
                        style={{ background: pkg.colorLight, border: `1px solid ${pkg.colorBdr}`, color: pkg.color }}>
                        {pkg.tier[0]}
                      </div>
                      <div>
                        <div className="font-bold text-[20px] leading-none"
                          style={{ fontFamily: "var(--font-playfair),serif", color: pkg.color }}>
                          {pkg.tier}
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                          {pkg.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="grid grid-cols-2 gap-3 mt-5">
                      {[
                        { label: "Sedan", price: pkg.sedan },
                        { label: "SUV", price: pkg.suv },
                      ].map((p) => (
                        <div key={p.label} className="rounded-xl px-4 py-3 text-center"
                          style={{ background: pkg.colorLight, border: `1px solid ${pkg.colorBdr}` }}>
                          <div className="text-[10px] tracking-[0.15em] uppercase mb-1"
                            style={{ color: "rgba(255,255,255,0.35)" }}>
                            {p.label}
                          </div>
                          <div className="font-bold text-[18px] leading-none"
                            style={{ fontFamily: "var(--font-playfair),serif", color: pkg.color }}>
                            AED {p.price}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Warranty badge */}
                    <div className="mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <ShieldCheck size={13} style={{ color: pkg.color }} />
                      <span className="text-[12px] font-semibold" style={{ color: "#fff" }}>
                        {pkg.warranty} Warranty
                      </span>
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                        + Free Annual Service
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-8 py-6 flex-1">
                    <ul className="flex flex-col gap-2.5">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[13px]"
                          style={{ color: "rgba(255,255,255,0.55)" }}>
                          <CheckCircle size={13} style={{ color: pkg.color, flexShrink: 0, marginTop: "2px" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-5 border-t flex items-start gap-2"
                      style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      <span className="text-[10px] tracking-[0.12em] uppercase flex-shrink-0 mt-0.5"
                        style={{ color: pkg.color }}>Ideal for</span>
                      <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>{pkg.ideal}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-8 pb-8">
                    <a href="https://wa.me/971555559424" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[13px] font-bold no-underline transition-all duration-300 hover:gap-4"
                      style={
                        pkg.tier === "Diamond"
                          ? { background: goldGrad, color: "#000" }
                          : { background: pkg.colorLight, border: `1px solid ${pkg.colorBdr}`, color: pkg.color }
                      }>
                      Book {pkg.tier} Package <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Package compare note */}
            <p className="text-center text-[12px] mt-8" style={{ color: "rgba(255,255,255,0.2)" }}>
              All prices are starting prices. Final quote may vary based on vehicle size and paint condition.
              Contact us for a free assessment at any of our 4 branches.
            </p>
          </div>
        </section>

        {/* ── BENEFITS ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Why Ceramic Coat in UAE
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Benefits of Nano Ceramic Coating in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Dubai &amp; Sharjah
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                In UAE's harsh climate, nano ceramic coating is the most advanced and long-lasting
                form of paint protection available - outperforming wax and sealants by years.
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

        {/* ── BRANDS ────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Premium Ceramic Brands
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Ceramic Coating Brands in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Dubai &amp; Sharjah
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                We use four premium professional-grade ceramic coating brands - led by SIRIUS USA as
                our primary brand. All deliver 9H hardness and long-term nano protection.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {brands.map((brand) => (
                <div key={brand.name}
                  className="rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: cardBdr }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wide mb-3"
                      style={{ background: `${brand.tagColor}20`, border: `1px solid ${brand.tagColor}50`, color: brand.tagColor }}>
                      {brand.tag}
                    </span>
                    <h3 className="font-bold text-[17px] mb-0.5"
                      style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                      {brand.name}
                    </h3>
                    <p className="text-[10px] tracking-wide uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
                      {brand.origin}
                    </p>
                  </div>
                  <div className="px-6 py-5 flex-1">
                    <p className="text-[12px] leading-[1.7] mb-4" style={{ color: "rgba(255,255,255,0.38)" }}>
                      {brand.desc}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {brand.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[12px]"
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

            {/* Brand pills */}
            <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
              <p className="text-[11px] tracking-[0.2em] uppercase w-full text-center mb-1"
                style={{ color: "rgba(255,255,255,0.2)" }}>
                Authorised installer for
              </p>
              {["SIRIUS USA", "JADE", "ONYX", "GYEON"].map((b) => (
                <div key={b}
                  className="px-5 py-2 rounded-full border text-[12px] font-semibold tracking-wide"
                  style={{
                    border: "1px solid rgba(201,168,76,0.2)",
                    background: b === "SIRIUS USA" ? "rgba(96,165,250,0.06)" : "rgba(201,168,76,0.04)",
                    color: b === "SIRIUS USA" ? "#60a5fa" : "rgba(255,255,255,0.55)",
                  }}>
                  {b === "SIRIUS USA" ? "★ SIRIUS USA" : b}
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
                Our Ceramic Coating{" "}
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
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80"
                  alt="Smart Auto UAE - best nano ceramic coating near me Dubai Sharjah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right,rgba(0,0,0,0.4) 0%,transparent 70%)" }} />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[
                    { val: "168+", label: "Google Reviews" },
                    { val: "4",    label: "Branches UAE" },
                    { val: "10+",  label: "Years Exp." },
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
                    Ceramic Coating Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  With over 10 years of experience, Smart Auto UAE is the most trusted nano ceramic
                  coating centre in Dubai and Sharjah. Our certified detailers use SIRIUS USA, GYEON,
                  JADE, and ONYX - applied with professional precision at all 4 branches, backed by
                  transparent package pricing and free annual service for every customer.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: Award,       text: "SIRIUS USA, GYEON, JADE & ONYX ceramic coatings" },
                    { icon: ShieldCheck, text: "Bronze, Silver & Diamond packages from AED 1,000" },
                    { icon: MapPin,      text: "4 branches - MotorCity, Al Quoz, Mirdif & Sharjah" },
                    { icon: Clock,       text: "Open every day 11AM – 9PM, walk-ins welcome" },
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
                  <a href="https://wa.me/971555559424" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>
                    Book Now <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971555559424"
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
          serviceName="Nano Ceramic Coating"
        />

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Common Questions
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#fff" }}>
                FAQs - Nano Ceramic Coating{" "}
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
                  Nano Ceramic Coating · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Book Your Nano Ceramic Coating in Dubai or Sharjah Today
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Bronze from AED 1,000 · Silver from AED 1,300 · Diamond from AED 1,800.
                  SIRIUS USA · GYEON · JADE · ONYX. Free annual service. Up to 5-year warranty.
                  4 branches across Dubai &amp; Sharjah.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971555559424" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Book on WhatsApp <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971555559424"
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

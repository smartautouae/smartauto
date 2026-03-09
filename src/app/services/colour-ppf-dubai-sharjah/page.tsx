import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Phone, MapPin, ChevronRight,
  Star, Shield, Sparkles, Clock, Award, ShieldCheck, Palette, Layers,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Colour PPF Dubai & Sharjah | Coloured Paint Protection Film | Smart Auto UAE",
  description:
    "Colour PPF in Dubai & Sharjah - coloured paint protection film that changes your car's colour while protecting the original paint. Self-healing, stone chip resistant, removable. 400+ colour options. MotorCity, Al Quoz, Mirdif & Sharjah branches. Smart Auto UAE.",
  keywords: [
    "colour PPF Dubai",
    "colour PPF Sharjah",
    "coloured paint protection film Dubai",
    "colour change PPF Dubai",
    "PPF colour wrap Dubai",
    "paint protection film colour change UAE",
    "self healing colour PPF Dubai",
    "colour PPF near me Dubai",
    "colour PPF MotorCity Dubai",
    "colour PPF Al Quoz Dubai",
    "colour PPF Mirdif Dubai",
    "colour PPF Sharjah",
    "matte colour PPF Dubai",
    "gloss colour PPF Dubai",
    "satin colour PPF Dubai",
    "Smart Auto UAE colour PPF",
    "best PPF Dubai",
    "stone chip protection colour change Dubai",
    "colour PPF vs vinyl wrap Dubai",
    "PPF wrap UAE",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/colour-ppf-dubai-sharjah" },
  openGraph: {
    title: "Colour PPF Dubai & Sharjah | Coloured Paint Protection Film | Smart Auto UAE",
    description:
      "Colour PPF in Dubai & Sharjah - change your car's colour and protect the original paint simultaneously. Self-healing, stone chip resistant, removable. 400+ colour options. 4 branches.",
    url: "https://smartautouae.ae/services/colour-ppf-dubai-sharjah",
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

const colourPpfTypes = [
  {
    name: "Gloss Colour PPF",
    desc: "A high-gloss coloured PPF that delivers a deep, wet-look paint finish while providing full stone chip and scratch protection underneath. The most popular choice for a premium colour change with maximum protection.",
    tags: ["Gloss Black", "Gloss White", "Gloss Red", "Any Colour"],
    color: gold,
  },
  {
    name: "Matte Colour PPF",
    desc: "Achieve the coveted matte finish while simultaneously protecting your car's original paint from stone chips, scratches, and UV damage. Matte PPF is impossible to replicate with standard paint.",
    tags: ["Matte Black", "Matte White", "Matte Grey", "Any Colour"],
    color: "#A8A9AD",
  },
  {
    name: "Satin Colour PPF",
    desc: "A mid-sheen satin finish PPF that sits between gloss and matte - delivering a refined, premium look with complete paint protection. One of the most sophisticated finishes available for UAE cars.",
    tags: ["Satin Black", "Satin White", "Satin Grey", "Any Colour"],
    color: "#94a3b8",
  },
  {
    name: "Metallic Colour PPF",
    desc: "Coloured PPF with metallic flake pigments embedded in the film - giving your car a stunning metallic colour change with the full protective benefits of PPF. A true alternative to expensive factory metallic paint.",
    tags: ["Metallic Silver", "Metallic Blue", "Metallic Red", "Custom"],
    color: "#e2e8f0",
  },
  {
    name: "Satin Chrome PPF",
    desc: "A premium satin chrome coloured PPF that delivers a striking near-mirror chrome appearance with the durability of paint protection film. Head-turning and protective in equal measure.",
    tags: ["Satin Gold", "Satin Silver", "Rose Gold", "Bronze"],
    color: "#fcd34d",
  },
  {
    name: "Custom Colour PPF",
    desc: "Looking for a specific colour or special effect not in our standard range? We offer custom-matched and special-effect coloured PPF films - including two-tone combinations and bespoke colour requests.",
    tags: ["Colour Match", "Two-Tone", "Special Effect", "Bespoke"],
    color: "#a78bfa",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Colour Change + Protection in One",
    desc: "Colour PPF is the ultimate upgrade - it changes your car's colour and simultaneously protects the original factory paint from stone chips, scratches, UV rays, and road debris. No other product offers both in a single application.",
  },
  {
    icon: Sparkles,
    title: "Self-Healing Technology",
    desc: "Our colour PPF films feature advanced self-healing technology - minor surface scratches and swirl marks disappear with heat exposure (sunlight or warm water), keeping your car looking flawless year after year.",
  },
  {
    icon: Award,
    title: "Preserves Resale Value",
    desc: "Unlike a colour respray, colour PPF is fully removable - revealing your original factory paint in perfect condition underneath. Remove at resale for the highest possible market value.",
  },
  {
    icon: Palette,
    title: "400+ Colours & Finishes",
    desc: "With over 400 colour options available - gloss, matte, satin, metallic, chrome, and custom - colour PPF gives you the same range of finish options as vinyl wrap, but with the added durability and protection of PPF.",
  },
  {
    icon: ShieldCheck,
    title: "Stone Chip & Scratch Resistant",
    desc: "Colour PPF is significantly thicker and more impact-resistant than vinyl wrap. It absorbs stone chip impacts, resists scratches, and provides a physical barrier against road debris that standard vinyl simply cannot match.",
  },
  {
    icon: Layers,
    title: "UV & Chemical Resistant",
    desc: "Our colour PPF films are engineered to resist UV degradation, yellowing, bird drop etching, and harsh chemical exposure - critical protection in UAE's extreme heat and sun conditions.",
  },
];

const colourPpfVsWrap = [
  {
    aspect: "Paint Protection",
    ppf: "Exceptional - thick film absorbs stone chips & impacts",
    wrap: "Basic - thin film, limited impact protection",
  },
  {
    aspect: "Self-Healing",
    ppf: "Yes - scratches heal with heat",
    wrap: "No - scratches are permanent",
  },
  {
    aspect: "Colour Change",
    ppf: "Yes - 400+ colour options available",
    wrap: "Yes - 400+ colour options available",
  },
  {
    aspect: "Thickness",
    ppf: "~200 microns - far superior protection",
    wrap: "~100 microns - primarily cosmetic",
  },
  {
    aspect: "Durability",
    ppf: "8–12 years with proper care",
    wrap: "3–7 years",
  },
  {
    aspect: "Reversibility",
    ppf: "Fully removable, residue-free",
    wrap: "Fully removable, residue-free",
  },
  {
    aspect: "UV Resistance",
    ppf: "Superior - no yellowing or degradation",
    wrap: "Standard UV resistance",
  },
  {
    aspect: "Best For",
    ppf: "Colour change + maximum paint protection",
    wrap: "Colour change on a budget",
  },
];

const process = [
  {
    num: "01",
    title: "Consultation",
    desc: "Choose your colour, finish, and scope - full body, partial panels, or accents. We help you select from 400+ colour PPF options and advise on the best coverage for your car and budget.",
  },
  {
    num: "02",
    title: "Surface Preparation",
    desc: "Your car is thoroughly washed, decontaminated, and clay-barred to ensure the PPF film adheres perfectly. Any existing paint defects are corrected before application.",
  },
  {
    num: "03",
    title: "Panel Preparation",
    desc: "Handles, mirrors, and removable parts are taken off wherever possible to ensure seamless, edge-to-edge coverage - giving a factory-finish appearance with no visible seams.",
  },
  {
    num: "04",
    title: "PPF Application",
    desc: "Our certified installers apply the coloured PPF film panel by panel using precision cutting software and heat-forming techniques - achieving perfect coverage on all body curves and edges.",
  },
  {
    num: "05",
    title: "Finishing & Inspection",
    desc: "All edges are sealed and heat-formed. A final quality inspection under professional lighting ensures zero lifting, bubbles, or colour inconsistencies before your car is handed back.",
  },
];

const faqs = [
  {
    q: "What is Colour PPF?",
    a: "Colour PPF (Coloured Paint Protection Film) is a premium, pigmented paint protection film that changes your car's colour while simultaneously protecting the original factory paint from stone chips, scratches, UV damage, and road debris. Unlike vinyl wrap - which is primarily cosmetic - colour PPF provides real, physical paint protection due to its superior thickness and self-healing properties.",
  },
  {
    q: "What is the difference between Colour PPF and vinyl wrap?",
    a: "Both change your car's colour and are fully removable - but colour PPF is significantly superior in terms of protection. Colour PPF is approximately twice the thickness of vinyl wrap (~200 microns vs ~100 microns), features self-healing technology for minor scratches, offers superior UV and chemical resistance, and typically lasts 8–12 years versus 3–7 years for vinyl. Colour PPF is the premium choice for car owners who want colour change and maximum paint protection together.",
  },
  {
    q: "What colour PPF finishes are available at Smart Auto UAE?",
    a: "We offer over 400 colour PPF options including gloss, matte, satin, metallic, satin chrome, and custom colour-matched films. Whether you want a classic gloss black, a matte white, a premium satin grey, or a custom bespoke colour - we can fulfil your request across all 4 branches in Dubai and Sharjah.",
  },
  {
    q: "Does colour PPF damage original paint?",
    a: "No - colour PPF is specifically engineered for clean, residue-free removal without damaging the original paintwork underneath. In fact, the PPF acts as a protective layer over your factory paint - preserving it in perfect condition for the full duration of the film's life.",
  },
  {
    q: "How long does colour PPF last in Dubai?",
    a: "A professionally installed colour PPF using premium film typically lasts 8–12 years under UAE conditions. Our colour PPF films are UV-stabilised and engineered to resist yellowing, chemical etching, and degradation in extreme heat and sun - making them ideal for Dubai and Sharjah's climate.",
  },
  {
    q: "Is colour PPF self-healing?",
    a: "Yes - our colour PPF films feature self-healing technology. Minor surface scratches and swirl marks in the film disappear when exposed to heat - either from direct sunlight or warm water. This keeps your car looking flawless without any polishing or repair work.",
  },
  {
    q: "Can I get a full body colour PPF in Dubai?",
    a: "Yes - Smart Auto UAE offers full body colour PPF installations across all 4 UAE branches. Full body coverage includes all exterior painted panels, providing complete colour change and total paint protection in one application.",
  },
  {
    q: "Where can I get colour PPF near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. All are open every day from 11AM to 9PM. Contact us on WhatsApp or walk in for a free colour PPF consultation.",
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

export default function ColourPpfPage() {
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
              <span style={{ color: gold }}>Colour PPF</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  400+ Colours · Self-Healing · Stone Chip Protection · Removable
                </div>

                <h1 className="font-bold leading-[1.05] mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "#fff" }}>
                  Colour PPF{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Dubai &amp; Sharjah
                  </span>
                </h1>

                <p className="text-[13px] tracking-[0.2em] uppercase mb-6 font-medium"
                  style={{ color: "rgba(201,168,76,0.7)" }}>
                  Colour Change · Paint Protection · One Film
                </p>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  The ultimate car upgrade across{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah</strong>.{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Colour PPF</strong> changes
                  your car's colour and simultaneously protects the original paint from stone chips, scratches,
                  and UV damage - with self-healing technology and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>400+ colour options</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "Colour change + paint protection",
                    "Self-healing surface technology",
                    "400+ colours & finishes",
                    "Stone chip & scratch resistant",
                    "Residue-free removal",
                    "Gloss, matte, satin & metallic",
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
                    Get a Quote <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971555559424"
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
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80"
                    alt="Colour PPF Dubai Sharjah - coloured paint protection film - Smart Auto UAE"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 60%)" }} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 rounded-2xl px-5 py-4 border backdrop-blur-md"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(0,0,0,0.75)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.15)", color: gold }}>
                        <Shield size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-[14px]" style={{ color: "#fff" }}>
                          Colour Change · Self-Healing · Paint Protection
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          400+ Colours · Gloss · Matte · Satin · Metallic
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat - Self-Healing */}
                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "120px" }}>
                  <div className="font-bold text-[13px] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Self
                  </div>
                  <div className="font-bold text-[13px] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    Healing
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Technology
                  </div>
                </div>

                {/* Floating stat - 400+ Colours */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[26px] leading-none mb-0.5"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    400+
                  </div>
                  <div className="font-bold text-[12px] leading-tight mb-0.5" style={{ color: "#fff" }}>
                    Colours
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    &amp; Finishes
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── WHAT IS COLOUR PPF ────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-3xl border overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.18)", background: "rgba(201,168,76,0.02)" }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.3),transparent)" }} />
              <div className="p-10 md:p-14">
                <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                  What Is It
                </span>
                <h2 className="font-bold leading-snug mb-6"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#fff" }}>
                  Colour PPF - The Best of Both Worlds
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <strong style={{ color: "rgba(255,255,255,0.8)" }}>Colour PPF</strong> is a pigmented paint
                      protection film - it combines the colour-changing ability of vinyl wrap with the superior
                      physical protection of PPF in a single premium film.
                    </p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Traditional clear PPF protects your paint but doesn't change its colour. Vinyl wrap changes
                      colour but offers limited protection. Colour PPF does both - in one application.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                      The film is significantly thicker than vinyl (~200 microns), features{" "}
                      <strong style={{ color: "rgba(255,255,255,0.8)" }}>self-healing technology</strong> that
                      removes minor scratches with heat, and is rated to last{" "}
                      <strong style={{ color: "rgba(255,255,255,0.8)" }}>8–12 years</strong> in UAE conditions.
                    </p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Like vinyl, it is fully removable and residue-free - preserving your car's original
                      factory paint in perfect condition throughout the film's life.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "Colour change ✓",
                    "Stone chip protection ✓",
                    "Self-healing ✓",
                    "Removable ✓",
                    "8–12 year lifespan ✓",
                    "400+ colours ✓",
                  ].map((tag) => (
                    <span key={tag}
                      className="px-4 py-1.5 rounded-full text-[11px] font-semibold"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: gold }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COLOUR PPF TYPES ──────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Colour PPF Finishes
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Colour PPF Options in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Dubai &amp; Sharjah
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                With 400+ colour PPF options available - gloss, matte, satin, metallic, satin chrome, and
                custom - there is no limit to what you can achieve for your car.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {colourPpfTypes.map((type) => (
                <div key={type.name}
                  className="rounded-2xl p-7 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <Palette size={20} />
                  </div>
                  <h3 className="font-bold text-[17px] mb-2"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    {type.name}
                  </h3>
                  <p className="text-[13px] leading-[1.7] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {type.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {type.tags.map((t) => (
                      <span key={t}
                        className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wide"
                        style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)", color: "rgba(255,255,255,0.5)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 400+ colour pill strip */}
            <div className="mt-12 rounded-2xl border px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
              style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}>
              <div>
                <div className="font-bold text-[22px] mb-1"
                  style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  400+ Colour PPF Options
                </div>
                <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Gloss · Matte · Satin · Metallic · Satin Chrome · Custom Colour Match
                </p>
              </div>
              <a href="https://wa.me/971555559424" target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black no-underline"
                style={{ background: goldGrad }}>
                Enquire Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Why Choose Colour PPF
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Benefits of Colour PPF in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Dubai &amp; Sharjah
                </span>
              </h2>
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

        {/* ── COLOUR PPF VS VINYL WRAP ───────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Understanding the Difference
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Colour PPF vs{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Vinyl Wrap
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Both change your car's colour - but Colour PPF offers far superior protection and longevity.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="rounded-2xl border overflow-hidden"
              style={{ border: `1px solid ${cardBdr}` }}>
              <div className="grid grid-cols-3 px-6 py-4"
                style={{ background: "rgba(201,168,76,0.05)", borderBottom: `1px solid ${cardBdr}` }}>
                <div className="text-[11px] tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Feature</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-center" style={{ color: gold }}>Colour PPF ✓</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-center" style={{ color: "rgba(255,255,255,0.3)" }}>Vinyl Wrap</div>
              </div>
              {colourPpfVsWrap.map((row, i) => (
                <div key={row.aspect}
                  className="grid grid-cols-3 px-6 py-4 gap-4"
                  style={{
                    borderBottom: i < colourPpfVsWrap.length - 1 ? `1px solid ${cardBdr}` : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                  }}>
                  <div className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {row.aspect}
                  </div>
                  <div className="text-[12px] text-center" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {row.ppf}
                  </div>
                  <div className="text-[12px] text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {row.wrap}
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
                Our Colour PPF{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Installation Process
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
                  src="https://images.unsplash.com/photo-1600705722908-bbeb1e6c2e71?w=900&q=80"
                  alt="Smart Auto UAE - best colour PPF near me Dubai Sharjah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right,rgba(0,0,0,0.4) 0%,transparent 70%)" }} />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[
                    { val: "400+", label: "Colours" },
                    { val: "4",    label: "Branches" },
                    { val: "10+",  label: "Yrs Exp." },
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
                    Colour PPF Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  With over 10 years of PPF installation experience across Dubai and Sharjah, Smart Auto UAE
                  delivers flawless colour PPF installations using premium films, precision cutting software,
                  and certified installers. Our{" "}
                  <strong style={{ color: "rgba(255,255,255,0.75)" }}>400+ colour options</strong>, combined
                  with expert panel preparation and heat-formed application, ensure a factory-finish result
                  with complete paint protection.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: Palette,     text: "400+ colour options - gloss, matte, satin, metallic, chrome, custom" },
                    { icon: ShieldCheck, text: "Self-healing PPF - stone chip & scratch resistant, 8–12 yr lifespan" },
                    { icon: MapPin,      text: "4 branches - MotorCity, Al Quoz, Mirdif & Sharjah" },
                    { icon: Clock,       text: "Open every day 11AM – 9PM - walk-ins & bookings welcome" },
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
                    Get a Quote <ArrowRight size={15} />
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
          serviceName="Colour PPF"
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
                FAQs - Colour PPF{" "}
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
                  Colour PPF · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Change Your Car's Colour &amp; Protect It - Today
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  400+ colour options · Gloss · Matte · Satin · Metallic · Custom.
                  Self-healing · Stone chip protection · 8–12 year lifespan.
                  Residue-free removal · Original paint preserved.
                  4 branches across Dubai &amp; Sharjah.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971555559424" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Get a Quote on WhatsApp <ArrowRight size={15} />
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

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
  title: "Car Wrapping Dubai & Sharjah | 100+ Colours, Chrome, Matte, Carbon | Smart Auto UAE",
  description:
    "Professional car wrapping in Dubai & Sharjah. 100+ vinyl colours and finishes - full body wraps, colour change, chrome, matte, carbon fibre, chameleon & custom designs. Vinyl wraps protect original paint. Removable, residue-free. Boats, bikes & commercial vehicles. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah.",
  keywords: [
    "car wrapping Dubai",
    "car wrapping Sharjah",
    "car wrapping near me Dubai",
    "car colour change Dubai",
    "vinyl wrap Dubai",
    "car foiling Dubai",
    "chrome wrap Dubai",
    "matte wrap Dubai",
    "carbon fibre wrap Dubai",
    "chameleon wrap Dubai",
    "full body wrap Dubai",
    "car branding Dubai",
    "400 colour car wrap Dubai",
    "car wrapping MotorCity Dubai",
    "car wrapping Al Quoz Dubai",
    "car wrapping Mirdif Dubai",
    "car wrapping Sharjah",
    "car wrapping price Dubai",
    "colour change wrap UAE",
    "Smart Auto UAE car wrapping",
    "commercial vehicle wrapping Dubai",
    "boat wrapping Dubai",
    "motorcycle wrapping Dubai",
    "custom car wrap Dubai",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/car-wrapping-dubai-sharjah" },
  openGraph: {
    title: "Car Wrapping Dubai & Sharjah | 100+ Colours, Chrome, Matte, Carbon | Smart Auto UAE",
    description:
      "Professional car wrapping in Dubai & Sharjah. 100+ vinyl colours - full body wraps, colour change, chrome, matte, carbon, chameleon & custom designs. Removable, residue-free. 4 branches.",
    url: "https://smartautouae.ae/services/car-wrapping-dubai-sharjah",
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

const wrapTypes = [
  {
    name: "Colour Change Wrap",
    desc: "Transform your car into any colour imaginable - from subtle satin whites to bold metallic reds. Choose from 100+ premium vinyl colours with clean, residue-free removal whenever you want a change.",
    colors: ["Solid", "Satin", "Metallic", "Pearl"],
    color: gold,
  },
  {
    name: "Matte / Satin Finish",
    desc: "Achieve the sought-after matte or satin look that turns heads on Dubai streets. Matte films give a premium flat finish that is impossible to achieve with standard paint.",
    colors: ["Matte Black", "Matte White", "Satin Grey", "Matte Custom"],
    color: "#A8A9AD",
  },
  {
    name: "Chrome Wrap",
    desc: "Our mirror-finish chrome wraps create a stunning, head-turning appearance that makes your car stand out on any road in Dubai or Sharjah. Available in multiple chrome shades.",
    colors: ["Silver Chrome", "Gold Chrome", "Rose Gold", "Black Chrome"],
    color: "#e2e8f0",
  },
  {
    name: "Carbon Fibre Wrap",
    desc: "The sporty, high-performance look of carbon fibre at a fraction of the cost - applied to full panels or as accents. Available in 3D and 4D carbon fibre texture films.",
    colors: ["3D Carbon", "4D Carbon", "Gloss Carbon", "Matte Carbon"],
    color: "#94a3b8",
  },
  {
    name: "Chameleon / Colour Shift",
    desc: "One of the most striking wrap effects available - chameleon films shift between multiple colours depending on viewing angle and lighting, creating a truly unique appearance.",
    colors: ["Blue-Purple", "Green-Gold", "Red-Blue", "Custom Shift"],
    color: "#a78bfa",
  },
  {
    name: "Custom & Digital Print",
    desc: "Full-scale custom designs, digital printing, advertising graphics, and brand liveries for personal cars, commercial fleets, boats, motorcycles, and helicopters.",
    colors: ["Full Digital Print", "Brand Livery", "Racing Stripes", "Custom Design"],
    color: "#60a5fa",
  },
];

const benefits = [
  {
    icon: Palette,
    title: "100+ Colour & Finish Options",
    desc: "With over 400 vinyl colours and finishes available - pearl, metallic, matte, gloss, chrome, 3D carbon, and chameleon - the possibilities for your car are virtually limitless. Custom colours and designs are available through digital printing.",
  },
  {
    icon: Shield,
    title: "Protects Original Paint",
    desc: "Vinyl wrap acts as a second skin over your factory paint - protecting it from everyday scratches, stone chips, and UV exposure. Remove the wrap at any time to reveal perfect original paint underneath.",
  },
  {
    icon: Award,
    title: "Preserves Resale Value",
    desc: "Repainting your car permanently reduces its value. Wrapping preserves the original paint and can be completely removed at resale - leaving your car in factory-original condition for the highest possible value.",
  },
  {
    icon: Sparkles,
    title: "Residue-Free Removal",
    desc: "All our premium PVC vinyl films are designed for clean removal - leaving absolutely no adhesive residue or damage to the original paintwork, no matter how long the wrap has been applied.",
  },
  {
    icon: Layers,
    title: "Cost-Effective vs Paint",
    desc: "A full body wrap achieves the same dramatic colour transformation as a full respray at significantly lower cost - with the added benefit of being reversible and not permanently altering your car.",
  },
  {
    icon: ShieldCheck,
    title: "Wash & Weather Resistant",
    desc: "Our vinyl wrap films are wash-street resistant and fully weather-proof - suitable for UAE's intense heat, sun, and occasional rain. They can be polished, waxed, or sealed for additional protection.",
  },
];

const vehicleTypes = [
  { name: "Cars & SUVs",        desc: "Full body or partial wraps for all car and SUV models" },
  { name: "Luxury & Supercars", desc: "Precision wrapping for high-end and exotic vehicles" },
  { name: "Commercial Fleets",  desc: "Brand livery and advertising graphics for fleets" },
  { name: "Motorcycles & Bikes",desc: "Full or partial vinyl wraps for bikes and motorcycles" },
  { name: "Boats & Marine",     desc: "Marine-grade vinyl wrapping for boats and watercraft" },
  { name: "Helicopters",        desc: "Specialised wrapping for aviation and helicopter exteriors" },
];

const wrapVsPaint = [
  {
    aspect: "Reversibility",
    wrap: "Fully reversible - remove anytime with no damage",
    paint: "Permanent - cannot be undone",
  },
  {
    aspect: "Original Paint",
    wrap: "Protected and preserved underneath",
    paint: "Replaced - reduces factory originality",
  },
  {
    aspect: "Resale Value",
    wrap: "Preserved - remove before sale",
    paint: "Reduced - especially non-standard colours",
  },
  {
    aspect: "Colour Options",
    wrap: "100+ options - chrome, matte, carbon, chameleon",
    paint: "Limited to standard automotive paints",
  },
  {
    aspect: "Time to Complete",
    wrap: "3–10 days depending on scope",
    paint: "1–2 weeks including preparation",
  },
  {
    aspect: "Care & Maintenance",
    wrap: "Wash-resistant, can be polished & sealed",
    paint: "Standard paint maintenance",
  },
];

const process = [
  {
    num: "01",
    title: "Consultation",
    desc: "Discuss your desired colour, finish, and scope - full body, partial, or accents. Choose from 100+ vinyl films and finishes. We help you select the perfect look for your car and budget.",
  },
  {
    num: "02",
    title: "Surface Preparation",
    desc: "Your car is thoroughly washed, decontaminated, and cleaned to ensure the vinyl adheres perfectly. All surfaces must be completely clean before film application.",
  },
  {
    num: "03",
    title: "Panel Preparation",
    desc: "Where possible, handles, mirrors, and add-on parts are removed to allow seamless wrapping with minimal seams - ensuring a flawless, virtually paint-like finish on all panels.",
  },
  {
    num: "04",
    title: "Vinyl Application",
    desc: "Our expert wrap technicians apply the premium PVC vinyl film panel by panel - using heat forming techniques to achieve perfect coverage on curves, edges, and complex body shapes.",
  },
  {
    num: "05",
    title: "Finishing & Inspection",
    desc: "All edges are heat-sealed and trimmed at 3–5mm hem depth. A full quality inspection under professional lighting ensures zero bubbles, lifts, or misalignment before handover.",
  },
];

const faqs = [
  {
    q: "What is car wrapping?",
    a: "Car wrapping is the process of applying a premium vinyl film over your car's original paintwork - completely changing its colour, finish, or adding custom designs. The wrap acts as a protective second skin that can be removed cleanly at any time without damaging the original paint underneath.",
  },
  {
    q: "How many colours are available for car wrapping at Smart Auto UAE?",
    a: "We stock over 400 vinyl wrap colours and finishes - including solid colours, satin, metallic, pearl, matte, gloss, chrome (silver, gold, rose gold, black chrome), 3D and 4D carbon fibre, chameleon colour-shift films, and fully custom digital print designs. If you have a specific colour in mind, we can match it through our colour match system.",
  },
  {
    q: "How long does a car wrap last in Dubai?",
    a: "A professionally applied car wrap using premium vinyl films typically lasts 3–7 years in UAE conditions, depending on care and the type of film used. Our wraps are wash-street resistant, UV-stabilised, and weather-proof to handle Dubai and Sharjah's intense sun and heat.",
  },
  {
    q: "Does car wrapping damage the original paint?",
    a: "No - when professionally applied and removed, car wrapping does not damage original paint. Our premium PVC vinyl films are specifically designed for residue-free removal. In fact, wrapping protects your original paint from scratches, UV damage, and everyday wear.",
  },
  {
    q: "Is car wrapping better than repainting?",
    a: "For most car owners in UAE, wrapping is the superior choice. It is reversible, preserves the original factory paint, maintains your car's resale value, offers 100+ colour and finish options (matte, chrome, carbon, chameleon), and can be completely removed at resale - making the original paint shine like new.",
  },
  {
    q: "Can I change my car colour legally with a wrap in Dubai?",
    a: "Yes - colour change car wraps are legal in the UAE, but you must update your vehicle registration documents to reflect the new colour. Smart Auto UAE can advise you on the procedure for updating your RTA vehicle records.",
  },
  {
    q: "Do you wrap vehicles other than cars?",
    a: "Yes - Smart Auto UAE wraps a wide range of vehicles including cars, SUVs, luxury and supercars, motorcycles and bikes, commercial fleet vehicles, boats and marine craft, and helicopters. Contact us to discuss your specific vehicle wrapping requirements.",
  },
  {
    q: "Where can I get my car wrapped near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. All are open every day from 11AM to 9PM. Contact us on WhatsApp or walk in for a free wrapping consultation.",
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

export default function CarWrappingPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=1800&q=80')",
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
              <span style={{ color: gold }}>Car Wrapping</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  100+ Colours · Chrome · Matte · Carbon · Chameleon · Custom
                </div>

                <h1 className="font-bold leading-[1.05] mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "#fff" }}>
                  Car Wrapping{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    in UAE
                  </span>
                </h1>

                <p className="text-[13px] tracking-[0.2em] uppercase mb-6 font-medium"
                  style={{ color: "rgba(201,168,76,0.7)" }}>
                  Your Car · Your Style · Your Colour
                </p>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Professional car wrapping across{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah</strong>. Choose from{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>100+ vinyl colours and finishes</strong> -
                  chrome, matte, carbon fibre, chameleon, pearl, metallic, and custom digital print designs -
                  protecting your original paint with a removable, residue-free premium vinyl film.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "100+ vinyl colours & finishes",
                    "Chrome, matte & carbon options",
                    "Chameleon colour-shift films",
                    "Custom & digital print designs",
                    "Residue-free, reversible removal",
                    "Cars, bikes, boats & commercial",
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
                    Get a Quote <ArrowRight size={15} />
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
                    src="https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=900&q=80"
                    alt="Car wrapping Dubai Sharjah - 100+ colours chrome matte carbon - Smart Auto UAE"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 60%)" }} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 rounded-2xl px-5 py-4 border backdrop-blur-md"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(0,0,0,0.75)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.15)", color: gold }}>
                        <Palette size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-[14px]" style={{ color: "#fff" }}>
                          Your Car · Your Style · Your Colour
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          100+ Colours · Chrome · Matte · Carbon · Chameleon
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat - Residue Free */}
                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "120px" }}>
                  <div className="font-bold text-[13px] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Residue
                  </div>
                  <div className="font-bold text-[13px] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    Free
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Removal
                  </div>
                </div>

                {/* Floating stat - 100+ Colours */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[26px] leading-none mb-0.5"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    100+
                  </div>
                  <div className="font-bold text-[12px] leading-tight mb-0.5"
                    style={{ color: "#fff" }}>
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

        {/* ── WRAP TYPES ────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Wrap Finishes & Styles
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Car Wrap Types Available in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Smart Auto
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                With over 400 colours and finishes to choose from - pearl, metallic, matte, gloss, chrome,
                carbon fibre, chameleon and custom digital print - there is no limit to what we can create for your car.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {wrapTypes.map((wrap) => (
                <div key={wrap.name}
                  className="rounded-2xl p-7 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <Palette size={20} />
                  </div>
                  <h3 className="font-bold text-[17px] mb-2"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    {wrap.name}
                  </h3>
                  <p className="text-[13px] leading-[1.7] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {wrap.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {wrap.colors.map((c) => (
                      <span key={c}
                        className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wide"
                        style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)", color: "rgba(255,255,255,0.5)" }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 100+ colour pill strip */}
            <div className="mt-12 rounded-2xl border px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
              style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}>
              <div>
                <div className="font-bold text-[22px] mb-1"
                  style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  100+ Vinyl Colours &amp; Finishes
                </div>
                <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Solid · Satin · Metallic · Pearl · Matte · Gloss · Chrome · Carbon · Chameleon · Custom Print
                </p>
              </div>
              <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black no-underline"
                style={{ background: goldGrad }}>
                View Colours <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Why Wrap Your Car
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Benefits of Car Wrapping in{" "}
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

        {/* ── WRAP VS PAINT ─────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Making the Right Choice
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Wrapping vs{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Repainting
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                For most UAE car owners, wrapping is the smarter choice - here's why.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="rounded-2xl border overflow-hidden"
              style={{ border: `1px solid ${cardBdr}` }}>
              <div className="grid grid-cols-3 px-6 py-4"
                style={{ background: "rgba(201,168,76,0.05)", borderBottom: `1px solid ${cardBdr}` }}>
                <div className="text-[11px] tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Aspect</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-center" style={{ color: gold }}>Car Wrap ✓</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-center" style={{ color: "rgba(255,255,255,0.3)" }}>Repaint</div>
              </div>
              {wrapVsPaint.map((row, i) => (
                <div key={row.aspect}
                  className="grid grid-cols-3 px-6 py-4 gap-4"
                  style={{
                    borderBottom: i < wrapVsPaint.length - 1 ? `1px solid ${cardBdr}` : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                  }}>
                  <div className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {row.aspect}
                  </div>
                  <div className="text-[12px] text-center" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {row.wrap}
                  </div>
                  <div className="text-[12px] text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {row.paint}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VEHICLE TYPES ─────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                We Wrap Everything
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff" }}>
                Cars, Bikes, Boats &amp;{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  More
                </span>
              </h2>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {vehicleTypes.map((v) => (
                <div key={v.name}
                  className="rounded-2xl p-5 border text-center transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <Shield size={16} />
                  </div>
                  <div className="font-semibold text-[13px] mb-1" style={{ color: "#fff" }}>{v.name}</div>
                  <div className="text-[11px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.3)" }}>{v.desc}</div>
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
                Our Car Wrapping{" "}
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
                  src="https://images.unsplash.com/photo-1600706432502-77a0e2e32790?w=900&q=80"
                  alt="Smart Auto UAE - best car wrapping near me Dubai Sharjah 400 colours"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right,rgba(0,0,0,0.4) 0%,transparent 70%)" }} />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[
                    { val: "100+", label: "Colours" },
                    { val: "4",    label: "Branches" },
                    { val: "20+",  label: "Yrs Exp." },
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
                    Car Wrapping Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  With over 20 years of experience and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.75)" }}>100+ vinyl colours and finishes</strong>{" "}
                  available across our 4 Dubai and Sharjah branches, Smart Auto UAE delivers flawless vinyl
                  wrap installations with premium PVC films, precision panel removal, and heat-formed
                  seam-free edges - from colour change wraps to full custom digital designs.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: Palette,     text: "100+ colours - colour change, chrome, matte, carbon, chameleon, custom print" },
                    { icon: ShieldCheck, text: "Premium PVC vinyl films - residue-free, wash & weather resistant" },
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
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>
                    Get a Quote <ArrowRight size={15} />
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
          serviceName="Car Wrapping"
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
                FAQs - Car Wrapping{" "}
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
                  Car Wrapping · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Transform Your Car's Look in Dubai or Sharjah Today
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  100+ colours &amp; finishes · Colour change · Chrome · Matte · Carbon · Chameleon · Custom digital print.
                  Residue-free removal · Original paint protected · Cars, bikes, boats &amp; commercial.
                  4 branches across Dubai &amp; Sharjah.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Get a Quote on WhatsApp <ArrowRight size={15} />
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

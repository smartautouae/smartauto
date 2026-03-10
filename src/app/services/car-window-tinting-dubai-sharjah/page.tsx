import type { Metadata } from "next";
import {
  Sun, CheckCircle, ArrowRight, Phone, MapPin, ChevronRight,
  Star, Shield, Zap, Eye, Thermometer, Clock, Award, ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Car Window Tinting Dubai & Sharjah | TotalGard & 3M Nano Ceramic | Smart Auto UAE",
  description:
    "Professional nano ceramic car window tinting in Dubai & Sharjah. Dark from outside, clear from inside. TotalGard & 3M films. UAE RTA compliant. 99% UV & heat rejection. Maximum privacy. 5-year warranty. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah.",
  keywords: [
    "car window tinting Dubai",
    "car window tinting Sharjah",
    "nano ceramic window tinting Dubai",
    "nano ceramic window tint Sharjah",
    "window tinting Dubai UAE",
    "dark window tint Dubai",
    "privacy window tint Dubai",
    "car tinting near me Dubai",
    "car tinting near me Sharjah",
    "legal car tint Dubai",
    "heat rejection window tint UAE",
    "3M nano ceramic tint Dubai",
    "TotalGard nano ceramic window tint Dubai",
    "TotalGard window tint Sharjah",
    "window tinting MotorCity",
    "window tinting Al Quoz",
    "window tinting Mirdif",
    "car tinting Sharjah",
    "RTA compliant window tint Dubai",
    "UV blocking car tint UAE",
    "best window tint for Dubai heat",
    "legal window tint percentage Dubai",
    "Smart Auto UAE window tinting",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/car-window-tinting-dubai-sharjah" },
  openGraph: {
    title: "Car Window Tinting Dubai & Sharjah | TotalGard & 3M Nano Ceramic | Smart Auto UAE",
    description:
      "Nano ceramic window tinting in Dubai & Sharjah. Dark from outside, clear from inside. TotalGard & 3M. UAE RTA compliant. 5-year warranty. 4 branches.",
    url: "https://smartautouae.ae/services/car-window-tinting-dubai-sharjah",
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
    icon: Eye,
    title: "Dark Outside, Clear Inside",
    desc: "Our nano ceramic films give your car a sleek, dark appearance from outside - while maintaining better outward visibility for the driver and passengers inside. No compromise on clarity.",
  },
  {
    icon: Shield,
    title: "Maximum Privacy",
    desc: "Keep your passengers, belongings, and interior away from outside eyes. Nano ceramic tinting provides strong privacy across all windows",
  },
  {
    icon: Thermometer,
    title: "Extreme Heat Rejection",
    desc: "TotalGard and 3M films block up to 99% of infrared heat - drastically cooling your car interior in UAE summer temperatures before you even switch on the A/C.",
  },
  {
    icon: Sun,
    title: "99% UV Ray Protection",
    desc: "Blocks 99% of harmful UV rays - protecting your skin from prolonged sun exposure and preventing your car's dashboard, leather seats, and interior trim from fading and cracking over time.",
  },
  {
    icon: Zap,
    title: "Reduced A/C Load & Fuel Saving",
    desc: "By blocking infrared heat at the glass, window tinting reduces the load on your car's air conditioning system - meaning less fuel consumption and a cooler cabin from the moment you get in.",
  },
  {
    icon: Award,
    title: "UAE RTA Compliant",
    desc: "A per UAE law it is allowed to tint upto 50% in all sides and rear",
  },
];

const filmTypes = [
  {
    name: "TotalGard Nano Ceramic Film",
    tag: "Most Popular",
    tagColor: "#C9A84C",
    brand: "TotalGard",
    features: [
      "Dark from outside, clear from inside",
      "Maximum heat & UV rejection",
      "UAE RTA compliant VLT",
      "No GPS or mobile signal interference",
      "Upto 15-year warranty",
    ],
    desc: "TotalGard nano ceramic film is our most popular window tinting choice across Dubai and Sharjah. It delivers a premium dark exterior appearance with outstanding outward clarity - giving you full privacy without sacrificing driver visibility. Purpose-built for UAE's extreme heat.",
  },
  {
    name: "3M Automotive Film",
    tag: "Premium",
    tagColor: "#a78bfa",
    features: [
      "Dark exterior, clear interior view ",
      "High heat & UV rejection",
      "Non-metallic - signal safe",
      "3M Crystal line series Patent oriented innovation with 200 layers of nano technology film ",
      "3M nano ceramic films provides the best in class clarity from inside",
      "3M Colour stable films",
      "3M FX Series",
    ],
    desc: "3M automotive films are globally recognised for their optical precision and durability. Achieve a deep, sleek tinted look from outside while retaining crystal-clear outward visibility from inside - a premium option for car owners in Dubai and Sharjah who want the best.",
  },
];

const process = [
  {
    num: "01",
    title: "Vehicle Inspection",
    desc: "We assess your car's glass condition and discuss your privacy and VLT preferences - recommending the ideal TotalGard or 3M nano ceramic film shade that meets UAE RTA law.",
  },
  {
    num: "02",
    title: "Film Selection",
    desc: "Choose your preferred darkness level from our TotalGard or 3M nano ceramic range. Our experts guide you on the darkest legal tint for maximum privacy on Dubai & Sharjah roads.",
  },
  {
    num: "03",
    title: "Professional Installation",
    desc: "Our certified technicians apply the nano ceramic film with precision - bubble-free, edge-sealed, and perfectly aligned on every window for a flawless dark finish.",
  },
  {
    num: "04",
    title: "Quality Check & Warranty",
    desc: "Full inspection before handover. We issue your official TotalGard or 3M warranty card plus a 5-year Smart Auto installer warranty - so your tint is protected long-term.",
  },
];

const faqs = [
  {
    q: "What is nano ceramic window tinting?",
    a: "Nano ceramic window tinting uses advanced ceramic particle technology embedded in the film to block heat, UV rays, and infrared radiation - without using metal. This means it delivers outstanding heat and UV rejection, keeps your car dark from outside while remaining clear from inside, and does not interfere with GPS, mobile signal, or radio reception.",
  },
  {
    q: "Is nano ceramic window tint dark from outside but clear from inside?",
    a: "Yes - this is one of the key advantages of nano ceramic window films like TotalGard and 3M. The film creates a dark, mirror-like appearance from outside for privacy and style, while maintaining excellent outward visibility for the driver and passengers inside. You can see out clearly; people outside cannot see in.",
  },
  {
    q: "What is the legal window tint percentage in Dubai?",
    a: "UAE RTA traffic law requires a minimum of 30% VLT (Visible Light Transmission) for front and rear side windows, and 50% VLT for the windshield. All TotalGard and 3M nano ceramic films we install at Smart Auto UAE are fully RTA compliant across Dubai and Sharjah. We can help you choose the darkest legal shade for maximum privacy.",
  },
  {
    q: "Does nano ceramic window tint affect GPS or mobile signal?",
    a: "No. TotalGard and 3M nano ceramic films are non-metallic, meaning they have zero interference with GPS navigation, mobile phone signal, or radio reception. This makes them the ideal upgrade from older metalised films which could disrupt in-car connectivity.",
  },
  {
    q: "What is the best window tint for privacy in Dubai?",
    a: "For maximum privacy in Dubai and Sharjah, we recommend TotalGard nano ceramic film at the darkest legally permitted VLT shade (30% for side windows). It gives your car a sleek dark appearance from outside while you retain perfect outward clarity from inside - and it fully complies with UAE RTA law.",
  },
  {
    q: "How long does nano ceramic window tinting last in UAE?",
    a: "TotalGard and 3M nano ceramic window tints are engineered for long-term durability and typically last 7–20 years in UAE conditions. All Smart Auto UAE installations come with a 5-year warranty covering peeling, bubbling, and colour fade.",
  },
  {
    q: "Where can I get nano ceramic window tinting near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 convenient branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. All branches are open every day from 10AM to 10PM. Walk-ins are welcome with no appointment needed.",
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

export default function CarWindowTintingPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1614026480418-bd11fdb9fa0e?w=1800&q=80')",
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
              <span style={{ color: gold }}>Car Window Tinting</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left - Copy */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  TotalGard &amp; 3M Nano Ceramic · 4 Branches · 5-Year Warranty
                </div>

                <h1 className="font-bold leading-[1.05] mb-6"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.6rem,5vw,4.5rem)", color: "#fff" }}>
                  Car Window Tinting{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Dubai &amp; Sharjah
                  </span>
                </h1>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Professional nano ceramic window tinting across{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai,</strong>{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah & all over UAE</strong> using genuine{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>TotalGard</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>3M</strong> films.{" "}
                  Dark from outside. Crystal clear from inside. Maximum privacy - RTA compliant.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "Dark outside, clear inside",
                    "Maximum privacy",
                    "99% UV & heat rejection",
                    "UAE RTA compliant VLT",
                    "TotalGard & 3M",
                    "Premium nano ceramic films",
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
                    src="/images/car-window-tinting.webp"
                    alt="Nano ceramic car window tinting Dubai Sharjah - dark outside clear inside - TotalGard 3M - Smart Auto UAE"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 60%)" }} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 rounded-2xl px-5 py-4 border backdrop-blur-md"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(0,0,0,0.75)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.15)", color: gold }}>
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-[14px]" style={{ color: "#fff" }}>
                          Dark Outside · Clear Inside · RTA Compliant
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          TotalGard &amp; 3M Nano Ceramic · Dubai &amp; Sharjah
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "120px" }}>
                  <div className="font-bold text-[15px] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Dark Out
                  </div>
                  <div className="font-bold text-[15px] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    Clear In
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Nano Ceramic
                  </div>
                </div>

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

        {/* ── DARK OUTSIDE CLEAR INSIDE HIGHLIGHT ───────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden border px-10 py-14 md:px-16"
              style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.02)" }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 30% 50%,rgba(201,168,76,0.05) 0%,transparent 65%)" }} />
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.3),transparent)" }} />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
                    style={{ background: "rgba(20,20,20,0.9)", border: "1px solid rgba(201,168,76,0.25)", color: gold }}>
                    <Eye size={24} />
                  </div>
                  <h3 className="font-bold text-[18px]"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    Dark From Outside
                  </h3>
                  <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    A deep, sleek tinted appearance that gives you maximum privacy and optical clarity from inside to out and gives your car a premium look
                    and keeping passengers private.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border"
                    style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.3)", color: gold }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M8 12h8M15 9l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.5)" }}>
                    Nano Ceramic Technology
                  </p>
                  <p className="text-[12px] leading-[1.7] max-w-[220px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                    TotalGard &amp; 3M nano ceramic films achieve both simultaneously - no compromise
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
                    style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", color: gold }}>
                    <Eye size={24} />
                  </div>
                  <h3 className="font-bold text-[18px]"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    Clear From Inside
                  </h3>
                  <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Drivers and passengers maintain better outward visibility at all times - day and night.
                    No distortion, no darkness. Just crystal clear vision through every window.
                  </p>
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
                Why Tint Your Car in UAE
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Benefits of{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Nano Ceramic Tinting
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                In UAE's extreme climate, nano ceramic window tinting is one of the most practical
                upgrades you can make - for privacy, comfort, and protection.
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

        {/* ── FILM BRANDS ───────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                TotalGard &amp; 3M Films
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Nano Ceramic Films Available in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  UAE
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                We exclusively use genuine TotalGard and 3M window films.
                Both deliver the signature dark-outside, clear-inside finish UAE drivers love.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {filmTypes.map((film) => (
                <div key={film.name}
                  className="rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="px-7 pt-7 pb-5 border-b" style={{ borderColor: cardBdr }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wide mb-4"
                      style={{ background: `${film.tagColor}20`, border: `1px solid ${film.tagColor}50`, color: film.tagColor }}>
                      {film.tag}
                    </span>
                    <h3 className="font-bold text-[20px] mb-1.5"
                      style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                      {film.name}
                    </h3>
                  </div>
                  <div className="px-7 py-6 flex-1">
                    <p className="text-[13px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {film.desc}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {film.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>
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
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
              <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
                Brands We Use
              </p>
              {["TotalGard", "3M"].map((brand) => (
                <div key={brand}
                  className="px-7 py-2.5 rounded-full border font-semibold text-[13px] tracking-wide"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.04)", color: "rgba(255,255,255,0.6)" }}>
                  {brand}
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
                Our Window Tinting{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Process
                </span>
              </h2>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
              <div className="absolute top-10 left-[12%] w-[76%] h-px pointer-events-none hidden lg:block"
                style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent)" }} />
              {process.map((step) => (
                <div key={step.num}
                  className="rounded-2xl p-8 border text-center transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-[18px]"
                    style={{ fontFamily: "var(--font-playfair),serif", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)", color: gold }}>
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-[15px] mb-2.5" style={{ color: "#fff" }}>{step.title}</h3>
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
                  src="/images/car-window-tint-2.webp"
                  alt="Smart Auto UAE - nano ceramic window tinting near me Dubai Sharjah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right,rgba(0,0,0,0.4) 0%,transparent 70%)" }} />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[
                    { val: "600+", label: "Google Reviews" },
                    { val: "4",    label: "Branches UAE"   },
                    { val: "20+",  label: "Years Exp."     },
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
                    Nano Ceramic Tinting Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  With over 20 years serving car owners across Dubai and Sharjah and all over UAE, Smart Auto is the
                  most trusted nano ceramic window tinting centre near you. We use only genuine TotalGard
                  and 3M films - delivering that signature dark-from-outside, clear-from-inside finish
                  our customers love, with full UAE RTA compliance guaranteed.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: Award,       text: "Provides World class material for withstanding in UAE Temperature" },
                    { icon: ShieldCheck, text: "Upto 15-year warranty on every window tinting job" },
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

        {/* ── BRANCHES - reusable BranchCards component ─────────────────── */}
        <BranchCards
          branches={BRANCHES}
          serviceName="Car Window Tinting"
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
                FAQs - Nano Ceramic Window Tinting{" "}
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
                  Nano Ceramic Window Tinting · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Book Your Nano Ceramic Window Tinting in Dubai or Sharjah Today
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Walk in or book ahead at MotorCity, Al Quoz, Mirdif (Dubai) or Sharjah Central Mall.
                  Genuine TotalGard &amp; 3M nano ceramic films. Dark outside, clear inside.
                  RTA compliant. 5-year warranty.
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

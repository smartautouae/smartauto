import type { Metadata } from "next";
import {
  Phone, MapPin, Clock, ChevronRight,
  ArrowRight, Star, MessageCircle, Navigation,
  Building2, Car, Home, ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Our Branches | Smart Auto UAE | Dubai & Sharjah | MotorCity · Al Quoz · Mirdif · Sharjah",
  description:
    "4 Smart Auto UAE branches across Dubai & Sharjah - MotorCity Dubai, Al Quoz Dubai, Mirdif Uptown Mall Dubai & Central Mall Sharjah. Open every day 11AM–9PM. Window tinting, smart film, PPF & surface protection. Free consultation. Walk in or book online.",
  keywords: [
    "Smart Auto UAE branches",
    "Smart Auto MotorCity Dubai",
    "Smart Auto Al Quoz Dubai",
    "Smart Auto Mirdif Dubai",
    "Smart Auto Sharjah",
    "window tinting MotorCity Dubai",
    "window tinting Al Quoz Dubai",
    "window tinting Mirdif Dubai",
    "window tinting Sharjah",
    "window tinting near me Dubai",
    "window tinting near me Sharjah",
    "car tinting near me Dubai",
    "villa tinting near me Dubai",
    "Smart Auto UAE location",
    "Smart Auto UAE opening hours",
    "Smart Auto UAE address",
    "tinting shop Dubai",
    "tinting shop Sharjah",
    "PPF near me Dubai",
    "smart film near me Dubai",
  ],
  alternates: { canonical: "https://smartautouae.ae/branches" },
  openGraph: {
    title: "Our Branches | Smart Auto UAE | Dubai & Sharjah",
    description:
      "4 branches - MotorCity, Al Quoz, Mirdif & Central Mall Sharjah. Open every day 11AM–9PM. Window tinting, smart film, PPF & surface protection.",
    url: "https://smartautouae.ae/branches",
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

const branches = [
  {
    id: "motorcity",
    number: "01",
    name: "MotorCity",
    city: "Dubai",
    tag: "Main Branch",
    address: "MotorCity, Dubai, UAE",
    phone: "+971 56 726 9666",
    hours: "11:00 AM – 9:00 PM · Every Day",
    mapsUrl: "https://maps.google.com/?q=Smart+Auto+UAE+MotorCity+Dubai",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.123!2d55.2376!3d25.0340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSmartAutoUAE!5e0!3m2!1sen!2sae!4v1234567890",
    color: "#C9A84C",
    colorBg: "rgba(201,168,76,0.06)",
    colorBdr: "rgba(201,168,76,0.2)",
    description: "Our main and longest-standing branch - centrally located in MotorCity Dubai. Full service for automotive tinting, villa & residential window films, smart film, PPF, and surface protection. Walk-in welcome.",
    nearbyAreas: ["Motor City", "Sports City", "Arabian Ranches", "Jumeirah Village Circle", "Al Barsha"],
    services: ["Car Window Tinting", "Villa Tinting", "Smart Film", "PPF", "Surface Protection"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
  },
  {
    id: "alquoz",
    number: "02",
    name: "Al Quoz",
    city: "Dubai",
    tag: "Dubai",
    address: "Al Quoz, Dubai, UAE",
    phone: "+971 56 726 9666",
    hours: "11:00 AM – 9:30 PM · Every Day",
    mapsUrl: "https://maps.google.com/?q=Smart+Auto+UAE+Al+Quoz+Dubai",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.123!2d55.2376!3d25.0340",
    color: "#60a5fa",
    colorBg: "rgba(96,165,250,0.06)",
    colorBdr: "rgba(96,165,250,0.2)",
    description: "Strategically located in Al Quoz - Dubai's industrial and auto services hub. Ideal for vehicles, commercial projects, and large-scale residential and building window film installations from central Dubai.",
    nearbyAreas: ["Al Quoz", "Sheikh Zayed Road", "Downtown Dubai", "Business Bay", "Al Safa"],
    services: ["Car Window Tinting", "Commercial Tinting", "Smart Film", "PPF", "Surface Protection"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
  },
  {
    id: "mirdif",
    number: "03",
    name: "Mirdif · Uptown Mall",
    city: "Dubai",
    tag: "Dubai",
    address: "Uptown Mall, Mirdif, Dubai, UAE",
    phone: "+971 55 782 3731",
    hours: "11:00 AM – 10:00 PM · Every Day",
    mapsUrl: "https://maps.google.com/?q=Smart+Auto+UAE+Mirdif+Uptown+Mall+Dubai",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.123!2d55.2376!3d25.0340",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,0.06)",
    colorBdr: "rgba(167,139,250,0.2)",
    description: "Located inside Uptown Mall Mirdif - convenient for residents of east Dubai and the surrounding communities. Full service available for automotive tinting, villa window films, and smart film installations.",
    nearbyAreas: ["Mirdif", "Rashidiya", "Muhaisnah", "Al Qusais", "Deira", "Garhoud"],
    services: ["Car Window Tinting", "Villa Tinting", "Smart Film", "PPF", "Surface Protection"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
  {
    id: "sharjah",
    number: "04",
    name: "Central Mall",
    city: "Sharjah",
    tag: "Sharjah",
    address: "Central Mall, Sharjah, UAE",
    phone: "+971 56 425 5770",
    hours: "10:00 AM – 10:00 PM · Every Day",
    mapsUrl: "https://maps.google.com/?q=Smart+Auto+UAE+Central+Mall+Sharjah",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.123!2d55.2376!3d25.0340",
    color: "#34d399",
    colorBg: "rgba(52,211,153,0.06)",
    colorBdr: "rgba(52,211,153,0.2)",
    description: "Our Sharjah branch - located inside Central Mall, serving all of Sharjah and the surrounding Northern Emirates. Full automotive tinting, villa, and commercial window film services available on-site.",
    nearbyAreas: ["Sharjah City Centre", "Al Nahda", "Al Khan", "Al Majaz", "Al Qasimia", "Ajman"],
    services: ["Car Window Tinting", "Villa Tinting", "Commercial Tinting", "Smart Film", "PPF"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80",
  },
];

const allServices = [
  { label: "Car Window Tinting",        href: "/services/car-window-tinting-dubai-sharjah" },
  { label: "Villa Window Tinting",      href: "/services/villa-window-tinting-dubai-sharjah" },
  { label: "Commercial Tinting",        href: "/services/commercial-window-tinting-dubai-sharjah" },
  { label: "Switchable Smart Film",     href: "/services/switchable-smart-glass-film-dubai-sharjah" },
  { label: "Surface Protection Films",  href: "/services/surface-protection-films-dubai-sharjah" },
];

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function BranchesPage() {
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
              <span style={{ color: gold }}>Branches</span>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                <Star size={10} fill={gold} strokeWidth={0} />
                4 Branches · Dubai & Sharjah · Open Every Day 11AM–9PM
              </div>

              <h1 className="font-bold leading-[1.05] mb-5"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5.5vw,4.5rem)", color: "#fff" }}>
                Find a Branch{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Near You
                </span>
              </h1>

              <p className="mb-10 leading-[1.9] max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.95rem,1.3vw,1.05rem)" }}>
                Smart Auto UAE operates{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>4 branches</strong> across{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Dubai and Sharjah</strong> -
                MotorCity, Al Quoz, Mirdif, and Central Mall Sharjah.
                All open{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>every day from 11AM to 9PM</strong>.
                Walk in, call ahead, or book a free on-site consultation.
              </p>

              {/* Branch quick-jump pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {branches.map((b) => (
                  <a key={b.id} href={`#${b.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-[12px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: b.colorBdr, background: b.colorBg, color: b.color }}>
                    <MapPin size={11} />
                    {b.name} · {b.city}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── QUICK STATS ───────────────────────────────────────────────── */}
        <section className="py-14" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: "4",    label: "Branches",        sub: "Dubai & Sharjah" },
                { value: "7",    label: "Days a Week",     sub: "Always open" },
                { value: "10h",  label: "Daily Hours",     sub: "11AM – 9PM" },
                { value: "20+",  label: "Years Experience",sub: "Trusted since 2014" },
              ].map((stat) => (
                <div key={stat.label}
                  className="rounded-2xl p-6 border text-center"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}>
                  <div className="font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-playfair),serif",
                      fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                      background: goldGrad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                    {stat.value}
                  </div>
                  <div className="font-semibold text-[13px] mb-1" style={{ color: "#fff" }}>{stat.label}</div>
                  <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANCH CARDS ──────────────────────────────────────────────── */}
        {branches.map((branch, idx) => (
          <section
            key={branch.id}
            id={branch.id}
            className="py-24"
            style={{ backgroundColor: idx % 2 === 0 ? "#0A0A0A" : "#060606" }}>
            <div className="max-w-7xl mx-auto px-6">

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

                {/* Image side */}
                <div className={`relative ${idx % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative rounded-3xl overflow-hidden border"
                    style={{ border: `1px solid ${branch.colorBdr}`, height: "420px" }}>
                    <img
                      src={branch.image}
                      alt={`Smart Auto UAE - ${branch.name} ${branch.city} - window tinting near me`}
                      className="w-full h-full object-cover"
                      style={{ opacity: 0.75 }}
                    />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 55%)" }} />

                    {/* Branch number watermark */}
                    <div className="absolute top-5 right-6 font-bold opacity-[0.12]"
                      style={{ fontFamily: "var(--font-playfair),serif", fontSize: "80px", color: branch.color, lineHeight: 1 }}>
                      {branch.number}
                    </div>

                    {/* Bottom info bar */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="rounded-2xl px-5 py-4 border backdrop-blur-md flex items-center gap-3"
                        style={{ background: "rgba(0,0,0,0.8)", border: `1px solid ${branch.colorBdr}` }}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: branch.colorBg, border: `1px solid ${branch.colorBdr}`, color: branch.color }}>
                          <MapPin size={16} />
                        </div>
                        <div>
                          <div className="font-semibold text-[13px]" style={{ color: "#fff" }}>
                            {branch.name} · {branch.city}
                          </div>
                          <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                            {branch.address}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nearby areas floating tag */}
                  <div className="absolute -bottom-5 -right-4 rounded-2xl px-5 py-3 border hidden sm:block"
                    style={{ background: "#0A0A0A", border: `1px solid ${branch.colorBdr}`, maxWidth: "200px" }}>
                    <div className="text-[9px] tracking-[0.15em] uppercase mb-2"
                      style={{ color: "rgba(255,255,255,0.3)" }}>
                      Serves Nearby
                    </div>
                    <div className="text-[11px] font-medium leading-[1.6]"
                      style={{ color: "rgba(255,255,255,0.55)" }}>
                      {branch.nearbyAreas.slice(0, 3).join(" · ")}
                    </div>
                  </div>
                </div>

                {/* Info side */}
                <div className={idx % 2 !== 0 ? "lg:order-1" : "lg:order-2"}>

                  {/* Branch number + tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-bold text-[12px] tracking-[0.2em]"
                      style={{ fontFamily: "var(--font-playfair),serif", color: "rgba(255,255,255,0.2)" }}>
                      {branch.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide"
                      style={{ background: branch.colorBg, border: `1px solid ${branch.colorBdr}`, color: branch.color }}>
                      {branch.tag}
                    </span>
                  </div>

                  <h2 className="font-bold leading-tight mb-2"
                    style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#fff" }}>
                    {branch.name}
                    <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400 }}> · {branch.city}</span>
                  </h2>

                  <p className="text-[14px] leading-[1.85] mb-7" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {branch.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-col gap-3.5 mb-7">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: branch.colorBg, border: `1px solid ${branch.colorBdr}`, color: branch.color }}>
                        <MapPin size={15} />
                      </div>
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: branch.colorBg, border: `1px solid ${branch.colorBdr}`, color: branch.color }}>
                        <Phone size={15} />
                      </div>
                      <a href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        className="text-[13px] no-underline hover:underline"
                        style={{ color: "rgba(255,255,255,0.55)" }}>
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: branch.colorBg, border: `1px solid ${branch.colorBdr}`, color: branch.color }}>
                        <Clock size={15} />
                      </div>
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{branch.hours}</span>
                    </div>
                  </div>

                  {/* Services available */}
                  <div className="mb-7">
                    <div className="text-[10px] tracking-[0.2em] uppercase mb-3"
                      style={{ color: "rgba(255,255,255,0.3)" }}>
                      Services Available
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {branch.services.map((s) => (
                        <span key={s}
                          className="px-3 py-1.5 rounded-full text-[11px] font-medium"
                          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Nearby areas */}
                  <div className="mb-8">
                    <div className="text-[10px] tracking-[0.2em] uppercase mb-3"
                      style={{ color: "rgba(255,255,255,0.3)" }}>
                      Nearby Areas
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {branch.nearbyAreas.map((area) => (
                        <span key={area}
                          className="px-3 py-1 rounded-full text-[11px]"
                          style={{ background: branch.colorBg, border: `1px solid ${branch.colorBdr}`, color: branch.color }}>
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black no-underline"
                      style={{ background: goldGrad, boxShadow: "0 4px 16px rgba(201,168,76,0.25)" }}>
                      <Navigation size={13} /> Get Directions
                    </a>
                    <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm no-underline border"
                      style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                      <MessageCircle size={13} /> WhatsApp
                    </a>
                    <a href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm no-underline border"
                      style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)", background: "transparent" }}>
                      <Phone size={13} /> Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── ALL SERVICES ──────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
              Available at All Branches
            </span>
            <h2 className="font-bold leading-snug mb-10"
              style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#fff" }}>
              Our Full Range of{" "}
              <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Services
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServices.map((s) => (
                <Link key={s.label} href={s.href}
                  className="group rounded-2xl p-5 border flex items-center justify-between no-underline transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: gold }} />
                    <span className="font-semibold text-[13px]" style={{ color: "#fff" }}>{s.label}</span>
                  </div>
                  <ArrowRight size={14} style={{ color: gold }}
                    className="opacity-40 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 transition-transform" />
                </Link>
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
                  4 Branches · Dubai &amp; Sharjah · Open Every Day 11AM–9PM
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Visit Us Today - No Appointment Needed.
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Walk into any of our 4 branches across Dubai and Sharjah.
                  Free consultation · Free quote · Open 7 days a week.
                  Or contact us on WhatsApp for an instant response.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    <MessageCircle size={15} /> WhatsApp Us <ArrowRight size={15} />
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

import type { Metadata } from "next";
import {
  Phone, Mail, MapPin, Clock, ChevronRight,
  ArrowRight, Star, MessageCircle, Navigation,
  Instagram, Facebook, Youtube,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Contact Smart Auto UAE | Window Tinting Dubai & Sharjah | 4 Branches",
  description:
    "Contact Smart Auto UAE for window tinting, smart film, PPF & surface protection in Dubai & Sharjah. 4 branches - MotorCity, Al Quoz, Mirdif & Central Mall Sharjah. Open every day 11AM–9PM. Call, WhatsApp or visit us for a free consultation.",
  keywords: [
    "contact Smart Auto UAE",
    "Smart Auto UAE phone number",
    "Smart Auto UAE WhatsApp",
    "window tinting near me Dubai",
    "window tinting near me Sharjah",
    "Smart Auto MotorCity",
    "Smart Auto Al Quoz",
    "Smart Auto Mirdif",
    "Smart Auto Sharjah",
    "window tinting Dubai contact",
    "window tinting Sharjah contact",
    "Smart Auto UAE location",
    "Smart Auto UAE address",
    "Smart Auto UAE opening hours",
    "free window tinting consultation Dubai",
    "book window tinting Dubai",
  ],
  alternates: { canonical: "https://smartautouae.ae/contact" },
  openGraph: {
    title: "Contact Smart Auto UAE | 4 Branches - Dubai & Sharjah",
    description:
      "4 branches across Dubai & Sharjah. Open every day 11AM–9PM. Call, WhatsApp or visit for a free consultation on window tinting, smart film & more.",
    url: "https://smartautouae.ae/contact",
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
    name: "MotorCity",
    city: "Dubai",
    address: "MotorCity, Dubai, UAE",
    phone: "+971 56 726 9666",
    hours: "11:00 AM – 9:00 PM",       // ← updated
    mapsUrl: "https://maps.app.goo.gl/S1GYhMkPCPnLJyQYA",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.63049266578!2d55.24183177553462!3d25.046610937783374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f43dbff2cc7%3A0x73ad529a52d1477d!2sSmart%20Auto%20Motorcity!5e0!3m2!1sen!2sae!4v1773157307773!5m2!1sen!2sae",
    color: "#60a5fa",
    colorBg: "rgba(96,165,250,0.06)",
    colorBdr: "rgba(96,165,250,0.2)",
    tag: "Main Branch",
  },
  {
    id: "alquoz",
    name: "Al Quoz",
    city: "Dubai",
    address: "Al Quoz, Dubai, UAE",
    phone: "+971 56 726 9666",
    hours: "11:00 AM – 9:30 PM",       // ← updated
    mapsUrl: "https://maps.app.goo.gl/nxeHGMRVwp7G1o8u5",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7793751533354!2d55.2221028755363!3d25.10932863525395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bed89a4b123%3A0x9a47cac14e6217de!2sSmart%20Auto%20Accessories%20Fitting%20LLC!5e0!3m2!1sen!2sae!4v1773157404150!5m2!1sen!2sae",
    color: "#34d399",
    colorBg: "rgba(52,211,153,0.06)",
    colorBdr: "rgba(52,211,153,0.2)",
    tag: "Dubai",
  },
  {
    id: "mirdif",
    name: "Mirdif · Uptown Mall",
    city: "Dubai",
    address: "Uptown Mall, Mirdif, Dubai, UAE",
    phone: "+971 55 782 3731",
    hours: "11:00 AM – 10:00 PM",      // ← updated
    mapsUrl: "https://maps.app.goo.gl/LpNiSaMwZV8DAt2W9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.385589712929!2d55.42180467553928!3d25.223934630616956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6097cebfd409%3A0x309d624d599b7c42!2sSmart%20Auto%20Mirdif%20%7C%20Window%20Tinting%2C%20Car%20Detailing%2C%20Nano%20Ceramic%20Coating%2C%20Paint%20Protection%20Film%2C%20Car%20Polishing!5e0!3m2!1sen!2sae!4v1773157457465!5m2!1sen!2sae",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,0.06)",
    colorBdr: "rgba(167,139,250,0.2)",
    tag: "Dubai",
  },
  {
    id: "sharjah",
    name: "Central Mall",
    city: "Sharjah",
    address: "Central Mall, Sharjah, UAE",
    phone: "+971 56 425 5770",
    hours: "10:00 AM – 10:00 PM",      // ← updated
    mapsUrl: "https://maps.app.goo.gl/11HqtjsP4gbsSyaRA",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9518525218955!2d55.41463777554239!3d25.339396625926117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f599640e3e9b3%3A0xacb155b55f797862!2sSmart%20Auto%20Sharjah%20-%20Window%20Tinting%2C%20Car%20Paint%20Protection%20Film!5e0!3m2!1sen!2sae!4v1773157505231!5m2!1sen!2sae",
    color: "#f97316",
    colorBg: "rgba(249,115,22,0.06)",
    colorBdr: "rgba(249,115,22,0.2)",
    tag: "Sharjah",
  },
];

const contactChannels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+971 52 440 3677",
    desc: "Chat with us instantly - fastest response",
    href: "https://wa.me/971524403677",
    cta: "Message on WhatsApp",
    color: "#4ade80",
    colorBg: "rgba(74,222,128,0.06)",
    colorBdr: "rgba(74,222,128,0.2)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 52 440 3677",
    desc: "Call us directly - any day 11AM–9PM",
    href: "tel:+971524403677",
    cta: "Call Now",
    color: "#60a5fa",
    colorBg: "rgba(96,165,250,0.06)",
    colorBdr: "rgba(96,165,250,0.2)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@smartautouae.ae",
    desc: "For quotes, projects & partnerships",
    href: "mailto:info@smartautouae.ae",
    cta: "Send Email",
    color: gold,
    colorBg: "rgba(201,168,76,0.06)",
    colorBdr: "rgba(201,168,76,0.2)",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@smartautouae",
    href: "https://instagram.com/smartautouae",
    color: "#f472b6",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "Smart Auto UAE",
    href: "https://facebook.com/smartautoaccessories",
    color: "#60a5fa",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "Smart Auto UAE",
    href: "https://youtube.com/@smartautouae",
    color: "#f87171",
  },
];

const services = [
  "Car Window Tinting",
  "Paint Protection Film (PPF)",
  "Color PPF",
  "Nano Ceramic Coating",
  "Car Detailing and Polishing",
  "Car Wrapping",
  "Villa Window Tinting",
  "Commercial Window Tinting",
  "Switchable Smart Film",
  "Surface Protection Films",
];

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function ContactPage() {
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
              <span style={{ color: gold }}>Contact</span>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                <Star size={10} fill={gold} strokeWidth={0} />
                4 Branches · Open Every Day · Free Consultation
              </div>

              <h1 className="font-bold leading-[1.05] mb-5"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5.5vw,4.5rem)", color: "#fff" }}>
                Get in Touch with{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Smart Auto UAE
                </span>
              </h1>

              <p className="mb-10 leading-[1.9] max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.95rem,1.3vw,1.05rem)" }}>
                4 branches across{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Dubai and Sharjah</strong>,
                open every day. Call, WhatsApp, or visit us for a free consultation on
                window tinting, smart film, surface protection, and PPF.
              </p>

              {/* Quick contact pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="https://wa.me/971567269666" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black no-underline"
                  style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
                <a href="tel:+971567269666"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm no-underline border"
                  style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                  <Phone size={14} /> +971 55 555 9424
                </a>
                <a href="mailto:info@smartautouae.ae"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm no-underline border"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", background: "transparent" }}>
                  <Mail size={14} /> Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT CHANNELS ──────────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactChannels.map((ch) => (
                <a key={ch.label} href={ch.href}
                  target={ch.label !== "Phone" && ch.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="rounded-2xl p-7 border flex flex-col gap-4 no-underline group transition-all duration-300 hover:-translate-y-1"
                  style={{ border: `1px solid ${ch.colorBdr}`, background: ch.colorBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${ch.color}15`, border: `1px solid ${ch.colorBdr}`, color: ch.color }}>
                    <ch.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase mb-1"
                      style={{ color: ch.color }}>{ch.label}</div>
                    <div className="font-bold text-[16px] mb-1" style={{ color: "#fff" }}>{ch.value}</div>
                    <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>{ch.desc}</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold mt-auto"
                    style={{ color: ch.color }}>
                    {ch.cta} <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPENING HOURS BANNER ──────────────────────────────────────── */}
        <section className="py-8" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-5xl mx-auto px-6">

            {/* Header row */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", color: gold }}>
                <Clock size={16} />
              </div>
              <div>
                <div className="font-bold text-[14px]" style={{ color: "#fff" }}>Opening Hours</div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  All branches open 7 days a week · Including weekends &amp; public holidays
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                <div className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.7)" }} />
                <span className="text-[12px] font-semibold" style={{ color: "#4ade80" }}>Open Now</span>
              </div>
            </div>

            {/* Per-branch hours grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {branches.map((branch) => (
                <div key={branch.id}
                  className="rounded-xl px-4 py-3.5 flex flex-col gap-1"
                  style={{ background: branch.colorBg, border: `1px solid ${branch.colorBdr}` }}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: branch.color }} />
                    <div className="text-[10px] font-bold tracking-[0.12em] uppercase truncate"
                      style={{ color: branch.color }}>
                      {branch.name}
                    </div>
                  </div>
                  <div className="text-[13px] font-semibold" style={{ color: "#fff" }}>
                    {branch.hours}
                  </div>
                  <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Every Day
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── BRANCHES & MAPS ───────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Find Us
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Our 4 Branches Across{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Dubai &amp; Sharjah
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Walk in, call ahead, or book a free on-site consultation.
                Hours vary per branch — check below.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {branches.map((branch) => (
                <div key={branch.id}
                  className="rounded-2xl border overflow-hidden"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>

                  {/* Map embed */}
                  <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
                    <iframe
                      src={branch.embedUrl}
                      width="100%"
                      height="220"
                      style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Smart Auto UAE - ${branch.name} ${branch.city}`}
                    />
                    {/* Branch name overlay */}
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
                        style={{ background: "rgba(0,0,0,0.8)", border: `1px solid ${branch.colorBdr}` }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: branch.color }} />
                        <span className="text-[11px] font-semibold" style={{ color: branch.color }}>
                          {branch.name} · {branch.city}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Branch info */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase"
                            style={{ background: branch.colorBg, border: `1px solid ${branch.colorBdr}`, color: branch.color }}>
                            {branch.tag}
                          </span>
                        </div>
                        <h3 className="font-bold text-[20px]"
                          style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                          {branch.name}
                        </h3>
                        <p className="text-[13px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                          {branch.city}, UAE
                        </p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={10} fill={gold} strokeWidth={0} style={{ color: gold }} />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <MapPin size={14} style={{ color: gold, flexShrink: 0 }} />
                        <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={14} style={{ color: gold, flexShrink: 0 }} />
                        <a href={`tel:${branch.phone.replace(/\s/g, "")}`}
                          className="text-[13px] no-underline hover:underline"
                          style={{ color: "rgba(255,255,255,0.5)" }}>
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={14} style={{ color: gold, flexShrink: 0 }} />
                        <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {branch.hours} · Every Day
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-black no-underline flex-1 justify-center"
                        style={{ background: goldGrad }}>
                        <Navigation size={13} /> Get Directions
                      </a>
                      <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm no-underline border flex-1 justify-center"
                        style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                        <MessageCircle size={13} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM ──────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left - info */}
              <div>
                <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                  Free Consultation
                </span>
                <h2 className="font-bold leading-snug mb-5"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#fff" }}>
                  Tell Us About Your{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Project
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Fill in the form and our team will get back to you within a few hours -
                  or contact us directly on{" "}
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="no-underline font-semibold" style={{ color: gold }}>
                    WhatsApp
                  </a>{" "}
                  for an instant response. We offer free on-site consultations and free
                  quotes for all services across Dubai and Sharjah.
                </p>

                {/* Service list */}
                <div className="flex flex-col gap-2.5 mb-8">
                  {services.map((s) => (
                    <div key={s} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: gold }} />
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>{s}</span>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-4"
                    style={{ color: "rgba(255,255,255,0.3)" }}>
                    Follow Us
                  </div>
                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl flex items-center justify-center no-underline transition-all duration-200 hover:-translate-y-1"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.4)",
                        }}>
                        <s.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - form */}
              <div className="rounded-2xl border p-8"
                style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                  className="flex flex-col gap-5">

                  {/* Name + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-semibold"
                        style={{ color: "rgba(255,255,255,0.5)" }}>
                        Full Name <span style={{ color: gold }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl px-4 py-3 text-[13px] outline-none transition-all duration-200 focus:border-[rgba(201,168,76,0.5)] placeholder:text-[rgba(255,255,255,0.18)]"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-semibold"
                        style={{ color: "rgba(255,255,255,0.5)" }}>
                        Phone / WhatsApp <span style={{ color: gold }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+971 5X XXX XXXX"
                        className="w-full rounded-xl px-4 py-3 text-[13px] outline-none transition-all duration-200 focus:border-[rgba(201,168,76,0.5)] placeholder:text-[rgba(255,255,255,0.18)]"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold"
                      style={{ color: "rgba(255,255,255,0.5)" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl px-4 py-3 text-[13px] outline-none transition-all duration-200 focus:border-[rgba(201,168,76,0.5)] placeholder:text-[rgba(255,255,255,0.18)]"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}
                    />
                  </div>

                  {/* Service dropdown */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold"
                      style={{ color: "rgba(255,255,255,0.5)" }}>
                      Service Required <span style={{ color: gold }}>*</span>
                    </label>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-xl px-4 py-3 text-[13px] outline-none transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", appearance: "none" }}>
                      <option value="" disabled style={{ background: "#111" }}>Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#111", color: "#fff" }}>{s}</option>
                      ))}
                      <option value="Other" style={{ background: "#111", color: "#fff" }}>Other / Not Sure</option>
                    </select>
                  </div>

                  {/* Location dropdown */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold"
                      style={{ color: "rgba(255,255,255,0.5)" }}>
                      Nearest Branch / Location
                    </label>
                    <select
                      name="branch"
                      defaultValue=""
                      className="w-full rounded-xl px-4 py-3 text-[13px] outline-none"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", appearance: "none" }}>
                      <option value="" style={{ background: "#111" }}>Select a branch…</option>
                      <option value="MotorCity" style={{ background: "#111", color: "#fff" }}>MotorCity, Dubai · 11AM–9PM</option>
                      <option value="Al Quoz" style={{ background: "#111", color: "#fff" }}>Al Quoz, Dubai · 11AM–9:30PM</option>
                      <option value="Mirdif" style={{ background: "#111", color: "#fff" }}>Mirdif · Uptown Mall, Dubai · 11AM–10PM</option>
                      <option value="Sharjah" style={{ background: "#111", color: "#fff" }}>Central Mall, Sharjah · 10AM–10PM</option>
                      <option value="On-Site Visit" style={{ background: "#111", color: "#fff" }}>On-Site Visit (Villa / Commercial)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold"
                      style={{ color: "rgba(255,255,255,0.5)" }}>
                      Message / Additional Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project - number of windows, car model, property type, etc."
                      className="w-full rounded-xl px-4 py-3 text-[13px] outline-none resize-none transition-all duration-200 focus:border-[rgba(201,168,76,0.5)] placeholder:text-[rgba(255,255,255,0.18)]"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-[14px] text-black cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)", border: "none" }}>
                    Send Enquiry <ArrowRight size={15} />
                  </button>

                  <p className="text-center text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                    Or contact us directly on{" "}
                    <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                      className="no-underline" style={{ color: "rgba(201,168,76,0.6)" }}>
                      WhatsApp
                    </a>{" "}
                    for an instant response.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

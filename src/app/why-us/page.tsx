import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Star, Shield, ShieldCheck, Award, Clock,
  MapPin, Users, Zap, Sparkles, ThumbsUp, Wrench,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Why Choose Smart Auto UAE | Best Window Tinting & Protection Films Dubai & Sharjah",
  description:
    "Why Smart Auto UAE? UAE authorised distributor & applicator of 3M USA, Global USA & Totalgard. 20+ years experience. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah. 600+ 5-star reviews. Professional window tinting, smart film, surface protection & PPF in Dubai & Sharjah. Free consultation.",
  keywords: [
    "why choose Smart Auto UAE",
    "best window tinting Dubai",
    "best window tinting Sharjah",
    "trusted window tinting Dubai",
    "3M authorised applicator Dubai",
    "Totalgard authorised applicator UAE",
    "best car tinting Dubai",
    "best villa tinting Dubai",
    "best commercial tinting Dubai",
    "professional window film Dubai",
    "window tinting experts Dubai",
    "Smart Auto UAE reviews",
    "Smart Auto UAE branches",
    "window tinting near me Dubai",
    "window tinting near me Sharjah",
    "best PPF Dubai",
    "surface protection film Dubai",
    "smart film Dubai",
    "Smart Auto MotorCity",
    "Smart Auto Al Quoz",
    "Smart Auto Mirdif",
    "Smart Auto Sharjah",
  ],
  alternates: { canonical: "https://smartautouae.ae/why-us" },
  openGraph: {
    title: "Why Choose Smart Auto UAE | Best Window Tinting Dubai & Sharjah",
    description:
      "UAE authorised 3M, Global USA & Totalgard applicator. 20+ years. 4 branches. 600+ 5-star reviews. Dubai & Sharjah's most trusted window tinting and protection film experts.",
    url: "https://smartautouae.ae/why-us",
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

const stats = [
  { value: "20+",  label: "Years Experience",   desc: "Over a decade of professional installations across Dubai & Sharjah" },
  { value: "4",    label: "Branches",            desc: "MotorCity · Al Quoz · Mirdif · Sharjah - open every day" },
  { value: "600+", label: "5-Star Reviews",      desc: "Verified Google reviews from real customers across the UAE" },
  { value: "3",    label: "Authorised Brands",   desc: "3M USA · Global USA · Totalgard - UAE authorised applicator" },
];

const reasons = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "UAE Authorised Distributor & Applicator",
    desc: "Smart Auto UAE is an official UAE authorised distributor and certified applicator of 3M USA, Global USA, and Totalgard window films and protection products. This means you receive genuine, manufacturer-backed products - not grey-market or counterfeit alternatives - with full product warranties and quality assurance on every installation.",
    highlight: "3M USA · Global USA · Totalgard",
  },
  {
    icon: Award,
    number: "02",
    title: "Over 20 years of Professional Experience",
    desc: "With more than 20 years of professional window film, smart film, surface protection, and PPF installation experience in the UAE market, our team has handled thousands of projects - from individual villa windows to full commercial building facades, construction fit-outs, and fleet vehicle tinting. Experience you can see in every installation.",
    highlight: "20+ Years · Thousands of Projects",
  },
  {
    icon: MapPin,
    number: "03",
    title: "4 Branches Across Dubai & Sharjah",
    desc: "We operate 4 fully staffed branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah - all open every day from 11AM to 9PM. Walk in for a consultation, bring your vehicle, or contact us for an on-site villa or commercial survey. Always near you, always available.",
    highlight: "MotorCity · Al Quoz · Mirdif · Sharjah",
  },
  {
    icon: Star,
    number: "04",
    title: "600+ Verified 5-Star Reviews",
    desc: "Over 168 verified 5-star Google reviews from real customers across Dubai and Sharjah. Our reviews reflect consistent feedback on three things: exceptional product quality, professional installation standards, and outstanding customer service. Every review is from a real person with a real experience - not curated or filtered.",
    highlight: "600+ Google Reviews · Real Customers",
  },
  {
    icon: Users,
    number: "05",
    title: "Certified, Trained Installation Teams",
    desc: "Every member of our installation team is professionally trained and certified in the application of window films, smart film, PPF, and surface protection products. We use precision cutting tools, controlled application environments, and strict quality inspection protocols - ensuring every installation meets the highest professional standard.",
    highlight: "Certified Installers · Quality Guaranteed",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Premium Products - No Compromises",
    desc: "We stock and install only premium, professional-grade products from the world's most trusted brands - 3M USA, Global USA, and Totalgard. We do not use unbranded, generic, or low-quality films. Every product we install is backed by manufacturer performance data, tested for the UAE's extreme UV index and solar radiation conditions.",
    highlight: "Premium Only · No Generic Films",
  },
  {
    icon: Wrench,
    number: "07",
    title: "Free Site Visits - Residential & Commercial",
    desc: "We offer free on-site consultations for all residential, villa, and commercial window tinting, smart film, and surface protection projects across Dubai and Sharjah. Our team visits your property, assesses your requirements, recommends the right solution for each space, and provides a full detailed quote - with zero obligation.",
    highlight: "Free Site Visit · No Obligation",
  },
  {
    icon: Clock,
    number: "08",
    title: "Open Every Day - 7 Days a Week",
    desc: "All 4 Smart Auto UAE branches are open 7 days a week, every day from 11AM to 9PM - including weekends and public holidays. We understand that our clients have busy schedules. You can visit us, call us, or contact us on WhatsApp any day of the week to book a consultation or get a quote.",
    highlight: "Open 7 Days · 11AM – 9PM",
  },
];

const services = [
  { name: "Automotive Window Tinting",    href: "/services/car-window-tinting-dubai-sharjah" },
  { name: "Villa Window Tinting",         href: "/services/villa-window-tinting-dubai-sharjah" },
  { name: "Commercial Window Tinting",    href: "/services/commercial-window-tinting-dubai-sharjah" },
  { name: "Switchable Smart Film",        href: "/services/switchable-smart-film-dubai-sharjah" },
  { name: "Surface Protection Films",     href: "/services/surface-protection-films-dubai-sharjah" },
  { name: "Paint Protection Film (PPF)",  href: "/services/paint-protection-film-dubai-sharjah" },
];

const reviews = [
  {
    name: "Ahmed Al Mansoori",
    location: "Dubai",
    rating: 5,
    text: "Excellent service and quality. Got 3M film on all villa windows and the difference in temperature is incredible. Professional team, clean installation, highly recommend.",
    service: "Villa Window Tinting",
  },
  {
    name: "Sarah Mitchell",
    location: "Sharjah",
    rating: 5,
    text: "Used Smart Auto for our office building tinting. The Totalgard film they installed has made a massive difference to our energy bills. The team was professional from site visit to final inspection.",
    service: "Commercial Window Tinting",
  },
  {
    name: "Ravi Krishnamurthy",
    location: "Dubai",
    rating: 5,
    text: "Had the smart switchable film installed in our meeting rooms. Works perfectly - clear during open sessions, frosted with one button for private meetings. Absolutely worth it.",
    service: "Switchable Smart Film",
  },
  {
    name: "Fatima Al Rashidi",
    location: "Dubai",
    rating: 5,
    text: "Fantastic. Brought my car in for full 3M tinting and the result is perfect. Dark from outside, crystal clear from inside. The team at MotorCity branch were outstanding.",
    service: "Car Window Tinting",
  },
  {
    name: "James Thornton",
    location: "Dubai",
    rating: 5,
    text: "Surface protection films for our entire villa during renovation. Every marble floor and countertop was protected perfectly - zero damage during 3 months of construction. Came off without a mark.",
    service: "Surface Protection Films",
  },
  {
    name: "Priya Nair",
    location: "Sharjah",
    rating: 5,
    text: "Smart Auto UAE are simply the best in Dubai. Have used them for 3 cars over the past 5 years and the quality and service is consistently excellent. Won't go anywhere else.",
    service: "Automotive Tinting",
  },
];

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function WhyUsPage() {
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom,transparent,#0A0A0A)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] mb-12" style={{ color: "rgba(255,255,255,0.3)" }}>
              <Link href="/" className="no-underline hover:text-white/60 transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>Home</Link>
              <ChevronRight size={12} />
              <span style={{ color: gold }}>Why Us</span>
            </div>

            {/* Hero content - centered */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                <Star size={10} fill={gold} strokeWidth={0} />
                UAE Authorised · 20+ Years · 4 Branches · 600+ 5-Star Reviews
              </div>

              <h1 className="font-bold leading-[1.05] mb-5"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5.5vw,4.5rem)", color: "#fff" }}>
                Why UAE Choose{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Smart Auto
                </span>
              </h1>

              <p className="mb-10 leading-[1.9] max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.95rem,1.3vw,1.1rem)" }}>
                UAE authorised distributor and certified applicator of{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>3M USA, Global USA &amp; Totalgard</strong>.
                Over{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>20 years</strong> of professional window film,
                smart film, surface protection, and PPF installation across{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Dubai and Sharjah</strong>.
                Trusted by thousands of homeowners, businesses, and fleet operators across the UAE.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                  style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>
                  Get a Free Consultation <ArrowRight size={15} />
                </a>
                <a href="tel:+971524403677"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm no-underline border"
                  style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}
                  className="rounded-2xl p-7 border text-center"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}>
                  <div className="font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-playfair),serif",
                      fontSize: "clamp(2rem,4vw,3.2rem)",
                      background: goldGrad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                    {stat.value}
                  </div>
                  <div className="font-semibold text-[14px] mb-1.5" style={{ color: "#fff" }}>{stat.label}</div>
                  <div className="text-[11px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTHORISED BRANDS BANNER ──────────────────────────────────── */}
        <section className="py-10" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-2xl border px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5"
              style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}>
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <ShieldCheck size={18} style={{ color: gold }} />
                  <span className="font-bold text-[16px]" style={{ color: "#fff" }}>
                    UAE Authorised Distributor &amp; Applicator
                  </span>
                </div>
                <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Genuine, manufacturer-backed products with full warranties on every installation.
                  Not grey-market. Not counterfeit. Only the real thing.
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

        {/* ── 8 REASONS ─────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                The Smart Auto Difference
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                8 Reasons to Choose{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Smart Auto UAE
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                From authorised brand partnerships and certified installation teams
                to 4 convenient branches and 600+ verified reviews -
                here's exactly what sets us apart.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {reasons.map((reason) => (
                <div key={reason.number}
                  className="rounded-2xl p-8 border flex gap-6 transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>

                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-[13px]"
                      style={{
                        fontFamily: "var(--font-playfair),serif",
                        background: "rgba(201,168,76,0.06)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: gold,
                      }}>
                      {reason.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <reason.icon size={16} style={{ color: gold, flexShrink: 0 }} />
                      <h3 className="font-bold text-[17px]"
                        style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-[13px] leading-[1.75] mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {reason.desc}
                    </p>
                    <div
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: gold,
                      }}>
                      {reason.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ───────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                What Our Customers Say
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                600+ Verified 5-Star{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Reviews
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Real feedback from real customers across Dubai and Sharjah.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((review, i) => (
                <div key={i}
                  className="rounded-2xl p-7 border flex flex-col"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <Star key={s} size={13} fill={gold} strokeWidth={0} style={{ color: gold }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[13px] leading-[1.8] flex-1 mb-5"
                    style={{ color: "rgba(255,255,255,0.55)" }}>
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <div>
                      <div className="font-semibold text-[13px]" style={{ color: "#fff" }}>{review.name}</div>
                      <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{review.location}</div>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-[10px] font-medium"
                      style={{
                        background: "rgba(201,168,76,0.07)",
                        border: "1px solid rgba(201,168,76,0.15)",
                        color: "rgba(255,255,255,0.4)",
                      }}>
                      {review.service}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Reviews CTA */}
            <div className="flex justify-center mt-10">
              <a
                href="https://g.page/r/smartautouae/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border text-[13px] font-semibold no-underline transition-all duration-200 hover:border-[rgba(201,168,76,0.5)]"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                  background: "transparent",
                }}>
                <Star size={13} fill="currentColor" />
                View All Reviews on Google
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </section>

        {/* ── OUR SERVICES ──────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                What We Do
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Our Full Range of{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Services
                </span>
              </h2>
              <p className="max-w-lg mx-auto text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                From automotive window tinting and villa glass films to smart switchable film,
                surface protection, and paint protection - everything under one trusted brand.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link key={service.name} href={service.href}
                  className="group rounded-2xl p-6 border flex items-center justify-between no-underline transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: gold }} />
                    <span className="font-semibold text-[14px]" style={{ color: "#fff" }}>{service.name}</span>
                  </div>
                  <ArrowRight size={15} style={{ color: gold, flexShrink: 0 }} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANCHES ──────────────────────────────────────────────────── */}
        <BranchCards branches={BRANCHES} serviceName="Free Consultation" />

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
                  UAE Authorised · 3M USA · Global USA · Totalgard · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-playfair),serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    color: "#fff",
                  }}>
                  Experience the Smart Auto UAE Difference.
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  20+ years · 4 branches · 600+ 5-star reviews · UAE authorised applicator.
                  Free consultation for all residential, commercial &amp; automotive services.
                  Open every day 11AM – 9PM across Dubai &amp; Sharjah.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Get a Free Consultation <ArrowRight size={15} />
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

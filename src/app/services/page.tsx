import type { Metadata } from "next";
import {
  Sun, Shield, Droplets, Sparkles, Car, Building2, Zap, Film, ArrowRight, Star,
  CheckCircle, Phone, MapPin, ChevronRight, Award, Clock, ShieldCheck, Gift,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Car Care Services Dubai & Sharjah | Window Tinting, PPF, Ceramic Coating | Smart Auto UAE",
  description:
    "Smart Auto UAE offers premium car care services in Dubai & Sharjah — Window Tinting, Paint Protection Film (PPF), Nano Ceramic Coating, Car Detailing, Car Wrapping, Villa Tinting & more. 4 branches across MotorCity, Al Quoz, Mirdif & Sharjah.",
  keywords: [
    "car care services Dubai",
    "car care services Sharjah",
    "window tinting Dubai",
    "window tinting Sharjah",
    "PPF Dubai",
    "PPF Sharjah",
    "paint protection film Dubai",
    "paint protection film Sharjah",
    "nano ceramic coating Dubai",
    "ceramic coating Sharjah",
    "car detailing Dubai",
    "car detailing Sharjah",
    "car wrapping Dubai",
    "car wrapping Sharjah",
    "villa window tinting Dubai",
    "villa window tinting Sharjah",
    "commercial window tinting Dubai",
    "commercial window tinting Sharjah",
    "smart glass film Dubai",
    "surface protection film Dubai",
    "Smart Auto UAE",
    "auto care Dubai",
    "auto care Sharjah",
    "car protection UAE",
    "best car care Dubai",
    "best car care Sharjah",
    "car tinting near me Dubai",
    "ceramic coating near me Sharjah",
  ],
  alternates: { canonical: "https://smartautouae.ae/services" },
  openGraph: {
    title: "Car Care Services Dubai & Sharjah | Smart Auto UAE",
    description:
      "Premium window tinting, PPF, ceramic coating, car detailing & wrapping across 4 branches in Dubai & Sharjah.",
    url: "https://smartautouae.ae/services",
    siteName: "Smart Auto UAE",
    type: "website",
  },
};

// ── DATA ───────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Sun,
    title: "Car Window Tinting Dubai & Sharjah",
    slug: "/car-window-tinting-dubai",
    tag: "Most Popular",
    tagColor: "#C9A84C",
    image: "https://images.unsplash.com/photo-1614026480418-bd11fdb9fa0e?w=700&q=80",
    description:
      "Advanced nano ceramic & carbon window tints that block 99% UV rays and heat — available across all 4 branches in Dubai and Sharjah. UAE RTA traffic law compliant with 5-year warranty.",
    features: ["Nano ceramic films", "UAE RTA compliant VLT", "99% UV & heat rejection", "5-year warranty", "Dubai & Sharjah branches"],
    price: "From AED 299",
  },
  {
    icon: Shield,
    title: "Paint Protection Film Dubai & Sharjah",
    slug: "/paint-protection-film-dubai",
    tag: "Premium",
    tagColor: "#a78bfa",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=700&q=80",
    description:
      "Self-healing TPU paint protection film shielding your car from scratches, stone chips, and harsh UAE road conditions. Authorised XPEL, SunTek & TotalGard installer in Dubai & Sharjah.",
    features: ["Self-healing TPU film", "XPEL, SunTek, TotalGard", "Gloss or matte finish", "10-year warranty", "Full & partial coverage"],
    price: "From AED 1,499",
  },
  {
    icon: Droplets,
    title: "Nano Ceramic Coating Dubai & Sharjah",
    slug: "/nano-ceramic-coating-dubai",
    tag: "Best Value",
    tagColor: "#34d399",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=700&q=80",
    description:
      "Professional 9H hardness ceramic coating creating a hydrophobic, scratch-resistant shield — ideal for UAE's extreme heat and sandstorms. Available in Dubai and Sharjah.",
    features: ["9H hardness rating", "Hydrophobic surface", "Mirror-like gloss", "2–5 year protection", "Gyeon, Gtechniq & IGL"],
    price: "From AED 799",
  },
  {
    icon: Sparkles,
    title: "Car Detailing Dubai & Sharjah",
    slug: "/car-detailing-dubai",
    tag: "Top Rated",
    tagColor: "#f472b6",
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4ec2d50?w=700&q=80",
    description:
      "Complete interior and exterior car detailing — paint correction, deep cleaning, engine bay wash, and odor elimination for a showroom finish across all Dubai & Sharjah branches.",
    features: ["Interior deep clean", "Paint correction & polishing", "Engine bay cleaning", "Odor elimination", "All 4 branches"],
    price: "From AED 199",
  },
  {
    icon: Car,
    title: "Car Wrapping Dubai & Sharjah",
    slug: "/car-wrapping-dubai",
    tag: "Custom",
    tagColor: "#60a5fa",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700&q=80",
    description:
      "Transform your car with a full or partial vinyl wrap — matte, gloss, satin, chrome, or custom designs. Available in Dubai and Sharjah with paint-safe removal guaranteed.",
    features: ["Matte, gloss & satin", "Full & partial wraps", "Colour change wraps", "Chrome & metallic", "Paint-safe removal"],
    price: "From AED 2,499",
  },
  {
    icon: Building2,
    title: "Villa Window Tinting Dubai & Sharjah",
    slug: "/villa-window-tinting-dubai",
    tag: "Residential",
    tagColor: "#fb923c",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
    description:
      "Premium residential window tinting for villas and apartments across Dubai and Sharjah — reduces heat, blocks UV rays, enhances privacy with a sleek modern finish.",
    features: ["Maximum privacy", "Heat & glare reduction", "UV protection", "Aesthetic enhancement", "Dubai & Sharjah villas"],
    price: "From AED 499",
  },
  {
    icon: Building2,
    title: "Commercial Window Tinting Dubai & Sharjah",
    slug: "/commercial-window-tinting-dubai",
    tag: "Commercial",
    tagColor: "#94a3b8",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    description:
      "Professional window tinting for offices, retail stores, and commercial buildings across Dubai and Sharjah — reduces energy costs, blocks UV, and enhances workspace privacy.",
    features: ["Energy cost reduction", "UV & heat blocking", "Enhanced privacy", "Large-scale install", "Dubai & Sharjah offices"],
    price: "Custom Quote",
  },
  {
    icon: Zap,
    title: "Switchable Smart Glass Film Dubai & Sharjah",
    slug: "/switchable-smart-glass-film-dubai",
    tag: "Smart Tech",
    tagColor: "#818cf8",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    description:
      "Electric switchable smart film — go from transparent to fully private at the touch of a button. Installed in offices, villas, and luxury vehicles across Dubai and Sharjah.",
    features: ["Instant privacy control", "Electric on/off switch", "Energy efficient", "Offices & villas", "Dubai & Sharjah install"],
    price: "Custom Quote",
  },
  {
    icon: Film,
    title: "Surface Protection Film Dubai & Sharjah",
    slug: "/surface-protection-film-dubai",
    tag: "Invisible Guard",
    tagColor: "#C9A84C",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&q=80",
    description:
      "Crystal-clear protective film for stone surfaces, door edges, panels, and trims — guards against chips and scratches while remaining completely invisible. Dubai & Sharjah.",
    features: ["Crystal clear finish", "Stone & panel guard", "Door edge protection", "Impact resistant", "Easy removal"],
    price: "From AED 199",
  },
];

const branches = [
  { name: "MotorCity",  area: "Dubai",   phone: "+971 55 782 3731" },
  { name: "Al Quoz",    area: "Dubai",   phone: "+971 54 701 1800" },
  { name: "Mirdif",     area: "Dubai",   phone: "+971 55 555 9424" },
  { name: "Sharjah",    area: "Sharjah", phone: "+971 55 555 9424" },
];

const whyItems = [
  { icon: Award,       title: "Authorised Installers",  desc: "Official installer for XPEL, TotalGard, 3M, Llumar & SunTek across Dubai and Sharjah." },
  { icon: MapPin,      title: "4 Branches in UAE",      desc: "MotorCity, Al Quoz, Mirdif in Dubai & Central Mall in Sharjah — always nearby." },
  { icon: ShieldCheck, title: "Warranty on All Work",   desc: "Every service backed by manufacturer & Smart Auto warranty across all locations." },
  { icon: Gift,        title: "Free Inspection",        desc: "Complimentary vehicle inspection with every service in Dubai & Sharjah. No hidden charges." },
];

// ── HELPERS ────────────────────────────────────────────────────────────────

const gold     = "#C9A84C";
const goldGrad = "linear-gradient(135deg,#C9A84C,#E8C96A)";
const cardBg   = "rgba(255,255,255,0.02)";
const cardBdr  = "rgba(255,255,255,0.06)";

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#080808", color: "#fff", fontFamily: "var(--font-inter),sans-serif" }}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-44 pb-24"
          style={{ background: "linear-gradient(180deg,#050505 0%,#0A0A0A 100%)" }}>

          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.025,
              backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }} />

          {/* Gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom,transparent,#0A0A0A)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] mb-12"
              style={{ color: "rgba(255,255,255,0.3)" }}>
              <Link href="/" className="no-underline transition-colors hover:text-white/60"
                style={{ color: "rgba(255,255,255,0.3)" }}>
                Home
              </Link>
              <ChevronRight size={12} />
              <span style={{ color: gold }}>Services</span>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
              style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
              <Star size={10} fill={gold} strokeWidth={0} />
              9 Premium Services &nbsp;·&nbsp; Dubai &amp; Sharjah
            </div>

            {/* H1 */}
            <h1 className="font-bold leading-[1.05] mb-6 max-w-3xl"
              style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.8rem,5vw,5rem)", color: "#fff" }}>
              Premium Car Care Services in{" "}
              <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Dubai &amp; Sharjah
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-10 leading-[1.9] max-w-2xl"
              style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
              Smart Auto UAE is the trusted name for window tinting, paint protection film,
              nano ceramic coating, car detailing, car wrapping and more — with branches across{" "}
              <strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>Dubai</strong> and{" "}
              <strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>Sharjah</strong>.
              One standard of excellence across all 4 locations.
            </p>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {[
                "Window Tinting Dubai", "Window Tinting Sharjah",
                "PPF Dubai", "PPF Sharjah",
                "Ceramic Coating Dubai", "Car Detailing Sharjah",
                "Car Wrapping Dubai", "Villa Tinting Sharjah",
                "Commercial Tinting Dubai",
              ].map((tag) => (
                <span key={tag}
                  className="px-3 py-1 rounded-full text-[11px] tracking-wide"
                  style={{ border: "1px solid rgba(201,168,76,0.18)", background: "rgba(201,168,76,0.04)", color: "rgba(255,255,255,0.45)" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
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
        </section>

        {/* ── SERVICES GRID ─────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                All Services · Dubai &amp; Sharjah
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Serving Customers Across{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Dubai &amp; Sharjah
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                All 9 services available across our 4 branches — MotorCity, Al Quoz &amp; Mirdif
                in Dubai, and Central Mall in Sharjah. Certified professionals. World-class brands.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={service.slug}
                  className="group relative rounded-2xl overflow-hidden border no-underline flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: cardBdr, background: cardBg, backdropFilter: "blur(12px)" }}>

                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={service.image}
                      alt={`${service.title} — Smart Auto UAE`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 60%)" }} />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide"
                      style={{ background: `${service.tagColor}22`, border: `1px solid ${service.tagColor}55`, color: service.tagColor }}>
                      {service.tag}
                    </span>
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold"
                      style={{ background: "rgba(0,0,0,0.8)", border: "1px solid rgba(201,168,76,0.3)", color: gold }}>
                      {service.price}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: gold }}>
                        <service.icon size={18} />
                      </div>
                      <h2 className="font-semibold text-[15px] leading-snug transition-colors duration-300 group-hover:text-[#C9A84C]"
                        style={{ color: "#fff", fontFamily: "var(--font-playfair),serif" }}>
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-[13px] leading-[1.7] mb-4 flex-1"
                      style={{ color: "rgba(255,255,255,0.45)" }}>
                      {service.description}
                    </p>

                    <ul className="flex flex-col gap-1.5 mb-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[12px]"
                          style={{ color: "rgba(255,255,255,0.4)" }}>
                          <CheckCircle size={12} style={{ color: gold, flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-300 group-hover:gap-3"
                      style={{ color: gold }}>
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>

                  {/* Gold bottom bar on hover */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: goldGrad }} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY SMART AUTO ────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#fff" }}>
                Why Choose{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Smart Auto UAE
                </span>
              </h2>
              <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
                Thousands of happy customers across Dubai &amp; Sharjah trust Smart Auto UAE
                for their car care and protection needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyItems.map((item) => (
                <div key={item.title}
                  className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)]"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[15px] mb-2" style={{ color: "#fff" }}>{item.title}</h3>
                  <p className="text-[12px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANCHES ──────────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#fff" }}>
                Visit Any of Our{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  4 Branches
                </span>
              </h2>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Open every day — 11:00 AM to 9:00 PM &nbsp;·&nbsp; Dubai &amp; Sharjah
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {branches.map((b) => (
                <div key={b.name}
                  className="rounded-2xl p-6 border text-center transition-all duration-300 hover:border-[rgba(201,168,76,0.3)]"
                  style={{ border: "1px solid rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.02)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <MapPin size={17} />
                  </div>
                  <div className="font-semibold text-[15px] mb-0.5"
                    style={{ color: "#fff", fontFamily: "var(--font-playfair),serif" }}>
                    {b.name}
                  </div>
                  <div className="text-[11px] tracking-[0.1em] uppercase mb-3"
                    style={{ color: "rgba(255,255,255,0.3)" }}>
                    {b.area}
                  </div>
                  <div className="w-8 h-px mx-auto mb-3" style={{ background: "rgba(201,168,76,0.3)" }} />
                  <a href={`tel:${b.phone.replace(/\s/g, "")}`}
                    className="text-[12px] no-underline transition-colors hover:underline"
                    style={{ color: gold }}>
                    {b.phone}
                  </a>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <Clock size={11} style={{ color: "rgba(255,255,255,0.25)" }} />
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                      11AM – 9PM Daily
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="relative rounded-3xl overflow-hidden border"
              style={{ border: "1px solid rgba(201,168,76,0.18)", background: "#080808" }}>

              {/* BG glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(201,168,76,0.07) 0%,transparent 65%)" }} />

              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.4),transparent)" }} />

              <div className="relative z-10 px-10 py-20 md:px-20 text-center">
                <p className="text-[10px] tracking-[0.35em] uppercase mb-5"
                  style={{ color: "rgba(201,168,76,0.6)" }}>
                  Open Every Day &nbsp;·&nbsp; 11AM – 9PM &nbsp;·&nbsp; Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-5"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
                  Book Your Service in Dubai or Sharjah
                </h2>
                <p className="mb-10 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Walk in or book ahead at any of our 4 branches — MotorCity, Al Quoz &amp; Mirdif
                  in Dubai, and Central Mall in Sharjah. Free inspection. No hidden charges.
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

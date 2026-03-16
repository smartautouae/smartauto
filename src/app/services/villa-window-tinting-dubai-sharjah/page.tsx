import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Phone, MapPin, ChevronRight,
  Star, Shield, Sparkles, Sun, Zap, Eye, ShieldCheck, Layers, Clock, Award,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Villa Window Tinting Dubai & Sharjah | Residential Window Tinting | Smart Auto UAE",
  description:
    "Professional villa and residential window tinting in Dubai & Sharjah. 3M, Global USA & Totalgard films - block up to 90% heat, 99% UV rays, 95% glare. Heat rejection, privacy & decorative films. Home window tinting, flat glass tinting, villa glass tinting. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah. Free site visit. Get a quote.",
  keywords: [
    "villa window tinting Dubai",
    "villa window tinting Sharjah",
    "residential window tinting Dubai",
    "residential window tinting Sharjah",
    "home window tinting Dubai",
    "home window tinting Sharjah",
    "flat glass tinting Dubai",
    "flat window tinting Dubai",
    "home glass tinting Dubai",
    "villa glass tinting Dubai",
    "house window tinting Dubai",
    "window tinting near me Dubai",
    "3M window film villa Dubai",
    "3M residential window tinting Dubai",
    "Totalgard window film Dubai",
    "Global USA window film Dubai",
    "heat rejection window film villa Dubai",
    "privacy window film villa Dubai",
    "UV protection window film Dubai",
    "energy saving window film Dubai",
    "villa window tinting MotorCity",
    "villa window tinting Al Quoz",
    "villa window tinting Mirdif",
    "villa window tinting Sharjah",
    "Smart Auto UAE villa tinting",
    "sun control window film Dubai",
    "anti glare window film villa Dubai",
    "window film installation Dubai",
    "residential tinting near me Dubai",
    "villa tinting service UAE",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/villa-window-tinting-dubai-sharjah" },
  openGraph: {
    title: "Villa Window Tinting Dubai & Sharjah | Residential Window Tinting | Smart Auto UAE",
    description:
      "Professional villa & residential window tinting in Dubai & Sharjah. 3M, Global USA & Totalgard films. Block 90% heat, 99% UV, 95% glare. Privacy films, heat rejection films. 4 branches.",
    url: "https://smartautouae.ae/services/villa-window-tinting-dubai-sharjah",
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
    name: "3M",
    tag: "Global Leader",
    tagColor: "#60a5fa",
    desc: "3M is the world's most recognised name in architectural window films. Their residential range offers industry-leading heat rejection, UV protection, and optical clarity - trusted by homeowners across Dubai and Sharjah for decades.",
    features: [
      "Sun Control Window Films",
      "Safety & Security Films",
      "All Seasons Window Films",
      "99% UV ray blocking",
      "Optically clear installation",
      "OEM trusted globally",
    ],
  },
  {
    name: "Global USA",
    tag: "Premium Brand",
    tagColor: "#a78bfa",
    desc: "Global USA window films are engineered with advanced nano-ceramic technology - delivering superior solar heat rejection, glare control, and long-term colour stability for residential applications in the UAE's extreme climate.",
    features: [
      "Nano-ceramic film technology",
      "Superior heat rejection",
      "Long-term colour stability",
      "Anti-glare performance",
      "Residential & villa range",
      "Signal-friendly films",
    ],
  },
  {
    name: "Totalgard",
    tag: "UAE Specialist",
    tagColor: "#34d399",
    desc: "Totalgard is a specialist window film brand with a strong UAE presence - offering purpose-built sun control, safety, and decorative films specifically engineered for the GCC's high UV index and extreme solar radiation conditions.",
    features: [
      "GCC climate-engineered films",
      "Safety & security range",
      "Decorative film options",
      "Sun control performance",
      "High UV index protection",
      "Commercial & residential",
    ],
  },
];

const filmTypes = [
  {
    icon: Sun,
    id: "heat",
    title: "Heat Rejection Films",
    desc: "Our solar heat rejection films block up to 90% of infrared heat from penetrating your villa's windows - dramatically reducing indoor temperatures, lowering AC load, and cutting energy bills year-round in Dubai and Sharjah.",
    points: [
      "Up to 90% solar heat rejected",
      "Keeps interiors significantly cooler",
      "Reduces AC consumption & energy bills",
      "Maintains full outward visibility",
      "Available in gloss and low-reflection finishes",
      "3M, Global USA & Totalgard options",
    ],
  },
  {
    icon: Eye,
    id: "privacy",
    title: "Privacy Films",
    desc: "Our one-way privacy films are dark from the outside but crystal clear from the inside - giving your villa complete privacy from neighbours and passersby while fully preserving your natural light and outward view.",
    points: [
      "Dark from outside, clear from inside",
      "Full privacy without blocking light",
      "Preserves your outward view entirely",
      "Reduces glare & heat simultaneously",
      "Ideal for ground-floor & street-facing windows",
      "Available in multiple tint shades",
    ],
  },
  {
    icon: Shield,
    id: "safety",
    title: "Safety & Security Films",
    desc: "Safety films hold shattered glass together in the event of breakage - protecting your family from injury, deterring forced entry, and providing an additional layer of security for all windows and glass doors in your villa.",
    points: [
      "Holds glass together on impact",
      "Protects against forced entry",
      "Reduces injury from glass breakage",
      "Anti-graffiti options available",
      "Ballistic resistance variants",
      "Totalgard & 3M safety range",
    ],
  },
  {
    icon: Sparkles,
    id: "decorative",
    title: "Decorative & Frosted Films",
    desc: "Transform the appearance of your villa's glass surfaces with decorative and frosted films - creating elegant frosted, etched, or patterned effects on windows, glass partitions, bathroom doors, and balcony glazing.",
    points: [
      "Frosted & etched glass effects",
      "Custom pattern options",
      "Full or partial privacy coverage",
      "Ideal for bathrooms & partitions",
      "Adds design character to glass",
      "Easy to remove & replace",
    ],
  },
];

const keyStats = [
  { value: "90%",  label: "Heat Rejection",    desc: "Solar heat blocked from your villa's interior" },
  { value: "99%",  label: "UV Protection",     desc: "Harmful UV rays blocked - protects skin & furnishings" },
  { value: "95%",  label: "Glare Reduction",   desc: "Solar glare eliminated for visual comfort" },
  { value: "30%",  label: "Energy Savings",    desc: "Reduction in cooling costs after installation" },
];

const benefits = [
  {
    icon: Sun,
    title: "Stay Cool Year-Round",
    desc: "UAE's extreme heat means your villa can reach unbearable indoor temperatures through untreated glass. Our heat rejection films block up to 90% of infrared solar heat - keeping every room significantly cooler without heavy curtains or blinds.",
  },
  {
    icon: ShieldCheck,
    title: "99% UV Ray Protection",
    desc: "Prolonged UV exposure fades furniture, flooring, curtains, artwork, and marble surfaces. Our window films block 99% of harmful UV rays - preserving the beauty of your villa's interiors for years without compromising natural light.",
  },
  {
    icon: Eye,
    title: "Complete Privacy",
    desc: "Our one-way privacy films are dark from the outside and crystal clear from the inside - giving you full privacy from outside viewers while maintaining your natural outward view throughout the day.",
  },
  {
    icon: Zap,
    title: "Lower Energy Bills",
    desc: "By significantly reducing solar heat penetration, our window films reduce the demand on your villa's air conditioning - delivering proven energy savings of up to 30% on cooling costs. A long-term investment that pays for itself.",
  },
  {
    icon: Shield,
    title: "Glass Safety & Security",
    desc: "Our safety films hold glass together on impact - protecting your family from injury due to accidental or forced glass breakage. An essential safety upgrade for ground-floor windows, large glass panels, and glass doors.",
  },
  {
    icon: Award,
    title: "Protects Interiors & Furnishings",
    desc: "Marble countertops, hardwood floors, upholstery, and display items deteriorate rapidly under continuous UV and solar exposure. Window tinting creates a protective barrier - preserving the elegance and value of your villa's interiors.",
  },
];

const process = [
  {
    num: "01",
    title: "Free Site Visit",
    desc: "Our team visits your villa in Dubai or Sharjah for a free consultation - assessing your windows, advising on the best film type for each area, and providing a full quote with no obligation.",
  },
  {
    num: "02",
    title: "Film Selection",
    desc: "Choose from our range of 3M, Global USA, and Totalgard films - heat rejection, privacy, safety, decorative, or a combination. We help you select the right film for each room and window type.",
  },
  {
    num: "03",
    title: "Surface Preparation",
    desc: "All glass surfaces are thoroughly cleaned and decontaminated before installation. A pristine surface ensures perfect film adhesion, no bubbles, and a flawless long-lasting finish.",
  },
  {
    num: "04",
    title: "Professional Installation",
    desc: "Our certified installers apply the film panel by panel using precision cutting tools - ensuring seamless coverage on all window shapes and sizes with clean, invisible edges.",
  },
  {
    num: "05",
    title: "Final Inspection",
    desc: "Every window is inspected under controlled lighting before we leave - checking for zero bubbles, lifts, or optical distortion. We leave only when you are completely satisfied.",
  },
];

const faqs = [
  {
    q: "What window film brands do you use for villa tinting in Dubai?",
    a: "We use three premium professional-grade window film brands for residential and villa tinting: 3M - the world's most trusted architectural window film brand with their Sun Control, Safety & Security, and All Seasons ranges; Global USA - featuring advanced nano-ceramic technology for superior heat rejection and clarity; and Totalgard - a UAE-specialist brand engineered specifically for the GCC's extreme UV index and solar radiation conditions.",
  },
  {
    q: "What is the difference between heat rejection film and privacy film?",
    a: "Heat rejection films are primarily designed to block solar infrared heat and UV rays - keeping your villa cooler and reducing energy bills without significantly affecting the appearance of your glass. Privacy films are specifically designed to be dark from the outside while remaining clear from the inside - giving occupants full outward visibility while preventing outsiders from seeing in. Many of our privacy films also include heat rejection and UV protection properties, giving you both benefits in a single film.",
  },
  {
    q: "Will window tinting make my villa darker inside?",
    a: "Not significantly. Our premium 3M, Global USA, and Totalgard films are engineered to reject heat and UV rays while maintaining excellent visible light transmission. Many films are virtually invisible from the inside - your rooms remain bright and naturally lit while solar heat and glare are dramatically reduced.",
  },
  {
    q: "How much heat does villa window tinting block?",
    a: "Our premium heat rejection films block up to 90% of infrared solar heat penetrating through your villa's glass - resulting in noticeably cooler interiors, reduced reliance on air conditioning, and energy savings of up to 30% on cooling costs. The exact performance depends on the specific film selected.",
  },
  {
    q: "Does villa window tinting protect furniture and marble?",
    a: "Yes - one of the most significant benefits of villa window tinting in Dubai is interior protection. Our films block 99% of UV rays - the primary cause of fading in furniture, flooring, curtains, marble countertops, artwork, and display items. Window tinting is a highly cost-effective way to preserve the beauty and value of your villa's interiors.",
  },
  {
    q: "Is villa window tinting permanent?",
    a: "No - all our residential window films are removable. They are applied with a pressure-sensitive adhesive that bonds to the glass surface but can be professionally removed without damaging the glass. Films typically last 10–15 years under UAE conditions with proper care.",
  },
  {
    q: "Do you offer a free site visit for villa window tinting in Dubai?",
    a: "Yes - Smart Auto UAE offers a free site visit and consultation for villa and residential window tinting across Dubai and Sharjah. Our team assesses your villa's windows, recommends the most suitable films for each area, and provides a full quote with no obligation.",
  },
  {
    q: "Where can I get villa window tinting near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. All are open every day from 11AM to 9PM. We also offer on-site villa visits across Dubai and Sharjah. Contact us on WhatsApp to book your free consultation.",
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

export default function VillaWindowTintingPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80')",
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
              <span style={{ color: gold }}>Villa Window Tinting</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  3M · Global USA · Totalgard · Block 90% Heat · 99% UV
                </div>

                <h1 className="font-bold leading-[1.05] mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "#fff" }}>
                  Villa Window Tinting{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    in UAE
                  </span>
                </h1>

                <p className="text-[13px] tracking-[0.2em] uppercase mb-6 font-medium"
                  style={{ color: "rgba(201,168,76,0.7)" }}>
                  Stay Cool · Private · Protected · Energy Efficient
                </p>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Professional villa and residential window tinting across{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah</strong> using{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>3M, Global USA</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Totalgard</strong> films.
                  Block up to 90% of solar heat, 99% of UV rays, and achieve complete privacy -
                  while preserving full natural light and your outward view.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "3M · Global USA · Totalgard",
                    "Up to 90% heat rejection",
                    "99% UV ray protection",
                    "Privacy - dark outside, clear inside",
                    "Safety & security films available",
                    "Free site visit - Dubai & Sharjah",
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
                    src="/images/villa-window-tint.webp"
                    alt="Villa window tinting Dubai Sharjah - residential window tinting - 3M Global Totalgard - Smart Auto UAE"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 60%)" }} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 rounded-2xl px-5 py-4 border backdrop-blur-md"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(0,0,0,0.75)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.15)", color: gold }}>
                        <Sun size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-[14px]" style={{ color: "#fff" }}>
                          3M · Global USA · Totalgard
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          Heat Rejection · Privacy · Safety · Decorative
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
                  <div className="font-bold text-[11px] leading-tight mb-0.5" style={{ color: "#fff" }}>
                    UV Blocked
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Protection
                  </div>
                </div>

                {/* Floating stat - 90% Heat */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[26px] leading-none mb-0.5"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    90%
                  </div>
                  <div className="font-bold text-[11px] leading-tight mb-0.5" style={{ color: "#fff" }}>
                    Heat Blocked
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Solar Rejection
                  </div>
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

        {/* ── FILM TYPES ────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                What We Offer
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Residential Window Film{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Types
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                From solar heat rejection and one-way privacy to safety, security, and decorative films -
                we offer the complete range of residential window film solutions for your Dubai or Sharjah villa.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filmTypes.map((film) => (
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

        {/* ── BRANDS ────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Premium Window Film Brands
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-figtree),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                3M · Global USA ·{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Totalgard
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                We install only professional-grade window films from globally trusted brands - ensuring
                long-lasting performance, optical clarity, and real protection for your villa in the UAE's extreme climate.
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
                    <h3 className="font-bold text-[22px] mb-0.5"
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

            {/* Brand pills */}
            <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
              <p className="text-[11px] tracking-[0.2em] uppercase w-full text-center mb-1"
                style={{ color: "rgba(255,255,255,0.2)" }}>
                Authorised installer of professional window films from
              </p>
              {[
                { name: "3M",        color: "#60a5fa" },
                { name: "Global USA",    color: "rgba(255,255,255,0.55)" },
                { name: "Totalgard",     color: "#34d399" },
              ].map((b) => (
                <div key={b.name}
                  className="px-5 py-2 rounded-full border text-[12px] font-semibold tracking-wide"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.04)", color: b.color }}>
                  {b.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Why Tint Your Villa
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Benefits of Villa Window Tinting in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  in UAE
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

        {/* ── PROCESS ───────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                How It Works
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Our Villa Window Tinting{" "}
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
                  src="/images/villa-window-tint-1.webp"
                  alt="Smart Auto UAE - best villa window tinting near me Dubai Sharjah residential"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right,rgba(0,0,0,0.4) 0%,transparent 70%)" }} />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[
                    { val: "600+", label: "Reviews" },
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
                  in UAE's Trusted{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Villa Tinting Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  With over 20 years of professional window film installation experience across Dubai and
                  Sharjah, Smart Auto UAE installs only premium{" "}
                  <strong style={{ color: "rgba(255,255,255,0.75)" }}>3M, Global USA, and Totalgard</strong>{" "}
                  films - ensuring maximum heat rejection, lasting UV protection, and flawless optical clarity
                  for every villa and residential property we work on. We come to you - free site visit included.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: Sun,        text: "3M, Global USA & Totalgard - premium residential window films" },
                    { icon: ShieldCheck,text: "Block 90% heat · 99% UV · 95% glare - proven performance" },
                    { icon: Eye,        text: "Privacy films - dark outside, crystal clear inside" },
                    { icon: MapPin,     text: "4 branches - MotorCity, Al Quoz, Mirdif & Sharjah" },
                    { icon: Clock,      text: "Open every day 11AM – 9PM · Free site visit available" },
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
        <BranchCards
          branches={BRANCHES}
          serviceName="Villa Window Tinting"
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
                FAQs - Villa Window Tinting{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  in UAE
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
                  Villa &amp; Residential Window Tinting · in UAE
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Stay Cool, Private &amp; Protected - Book Your Free Villa Tinting Consultation
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  3M · Global USA · Totalgard films.
                  Block 90% heat · 99% UV · 95% glare · Up to 30% energy savings.
                  Heat rejection · Privacy · Safety · Decorative films.
                  Free site visit across in UAE.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Book Free Site Visit <ArrowRight size={15} />
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

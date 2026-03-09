import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Star, Shield, Sparkles, ShieldCheck,
  Clock, Award, Layers, Hammer, Home, Building2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Surface Protection Films Dubai & Sharjah | Marble, Glass & Floor Protection | Smart Auto UAE",
  description:
    "Professional surface protection film installation in Dubai & Sharjah. Protect marble, granite, glass, floors, lifts, aluminium, wood, stainless steel & countertops from scratches, stains & damage. Residential & commercial. 3M & premium films. 4 branches — MotorCity, Al Quoz, Mirdif & Sharjah. Free site visit.",
  keywords: [
    "surface protection film Dubai",
    "surface protection film Sharjah",
    "marble protection film Dubai",
    "marble protection film Sharjah",
    "floor protection film Dubai",
    "glass protection film Dubai",
    "granite protection film Dubai",
    "countertop protection film Dubai",
    "surface protection film UAE",
    "protective film for marble Dubai",
    "protective film for glass Dubai",
    "protective film for floors Dubai",
    "aluminium surface protection film UAE",
    "stainless steel protection film Dubai",
    "wood surface protection film Dubai",
    "lift protection film Dubai",
    "elevator cab protection film Dubai",
    "lift interior protection film UAE",
    "elevator surface protection film Dubai",
    "anti scratch film Dubai",
    "anti scratch film Sharjah",
    "surface protection film installation Dubai",
    "surface protection film near me Dubai",
    "Smart Auto UAE surface protection",
    "3M surface protection film Dubai",
    "Totalgard surface protection UAE",
    "villa surface protection film Dubai",
    "commercial surface protection Dubai",
    "kitchen countertop protection film Dubai",
    "bathroom surface protection film Dubai",
    "surface protection film MotorCity Dubai",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/surface-protection-films-dubai-sharjah" },
  openGraph: {
    title: "Surface Protection Films Dubai & Sharjah | Marble, Glass & Floor Protection | Smart Auto UAE",
    description:
      "Surface protection film in Dubai & Sharjah. Protect marble, granite, glass, floors, lifts, aluminium & countertops from scratches, stains & damage. Residential & commercial. Free site visit.",
    url: "https://smartautouae.ae/services/surface-protection-films-dubai-sharjah",
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

const surfaces = [
  {
    icon: Sparkles,
    title: "Marble & Granite",
    desc: "Marble and granite surfaces are beautiful but highly susceptible to staining, etching, and scratching from daily use, cleaning products, and renovation activity. Our protection film creates an invisible barrier — preserving the natural lustre of your stone surfaces for years.",
    points: [
      "Protects against stains & etching",
      "Shields from scratches & abrasion",
      "Preserves natural colour & finish",
      "Ideal during renovation & fit-out",
      "Countertops, floors & wall cladding",
      "Removable without surface damage",
    ],
  },
  {
    icon: Layers,
    title: "Glass & Mirrors",
    desc: "Glass and mirror surfaces scratch easily during installation and daily use. Our glass protection films guard against abrasion, chemical splashes, and contamination — protecting your glazing from the moment of installation through to final handover.",
    points: [
      "Scratch & abrasion protection",
      "Paint & plaster splash resistance",
      "Window glass & glass doors",
      "Mirrors & decorative glass",
      "Shower enclosures & glass partitions",
      "Temporary or long-term protection",
    ],
  },
  {
    icon: Home,
    title: "Floors & Tiles",
    desc: "Flooring is one of the most expensive elements of any residential or commercial fit-out. Our floor protection films provide heavy-duty protection against foot traffic, tool impact, and material spillage — keeping tiles, hardwood, and polished floors pristine.",
    points: [
      "Heavy-duty floor traffic protection",
      "Tool drop & impact resistance",
      "Paint, plaster & chemical spillage",
      "Tiles, hardwood & polished stone",
      "Porcelain, marble & ceramic floors",
      "Peel-off clean after project completion",
    ],
  },
  {
    icon: Building2,
    title: "Lifts & Elevator Cabs",
    desc: "Elevator interiors — stainless steel walls, mirror panels, floor surfaces, and door frames — are highly exposed to daily scratches, trolley damage, and moving equipment. Our protection films keep lift finishes flawless through fit-out and handover.",
    points: [
      "Stainless steel elevator walls",
      "Mirror panels & glass surfaces",
      "Lift floor & threshold protection",
      "Door frames & cab interiors",
      "Protects during fit-out & moving",
      "Clean removal — no residue",
    ],
  },
  {
    icon: Hammer,
    title: "Aluminium & Metal Profiles",
    desc: "Aluminium window frames, door profiles, handrails, balustrades, and stainless steel fittings are vulnerable to scratches and contamination during installation. Our metal surface protection films ensure profiles are delivered and installed in perfect condition.",
    points: [
      "Aluminium window & door profiles",
      "Handrails & balustrades",
      "Stainless steel hardware & fixtures",
      "Ironmongery & bathroom fittings",
      "Protection during installation",
      "Removable after installation",
    ],
  },
  {
    icon: Shield,
    title: "Wood & Joinery",
    desc: "Wooden doors, kitchen cabinets, joinery, and fitted furniture with lacquered or high-gloss finishes are easily scratched during fit-out and transport. Our films are specifically suited to glossy coated wood — shielding the finish without any risk of adhesive transfer or surface dulling.",
    points: [
      "Wooden doors & door frames",
      "Kitchen cabinets & joinery",
      "Fitted furniture & wardrobes",
      "Lacquered & high-gloss surfaces",
      "Fire-rated & specialist joinery",
      "Clean removal — no residue",
    ],
  },
  {
    icon: Sparkles,
    title: "Bathroom & Kitchen Surfaces",
    desc: "Bathtubs, sinks, bathroom vanities, countertops, and kitchen worktops are among the most used surfaces in any property. Our protection films guard against scratches, stains, and daily wear — keeping these high-value surfaces looking new for longer.",
    points: [
      "Bathtubs & bathroom sinks",
      "Kitchen countertops & worktops",
      "Vanity tops & wet area surfaces",
      "Protects during & after fit-out",
      "Anti-scratch & stain-resistant",
      "Long-term or temporary application",
    ],
  },
];

const whyProtect = [
  {
    icon: ShieldCheck,
    title: "Prevent Costly Repairs",
    desc: "A single scratch on a marble countertop or polished floor can cost thousands of dirhams to repair or replace. Surface protection film is a fraction of that cost — applied once, it prevents damage entirely.",
  },
  {
    icon: Clock,
    title: "Faster Project Handover",
    desc: "Surface damage causes snagging, delays, and budget overruns in fit-out projects. Protection films eliminate the need for repair and replacement — significantly reducing handover timelines.",
  },
  {
    icon: Layers,
    title: "Transparent & Invisible",
    desc: "Our films are optically clear and low-profile — surfaces look completely normal with the film applied. Inspect finishes, show properties to clients, and operate normally — all while fully protected.",
  },
  {
    icon: Award,
    title: "Removable & Residue-Free",
    desc: "All our surface protection films are designed for clean, residue-free removal — peeling off without leaving adhesive, marks, or damage on any surface type, including polished stone, glass, and lacquered wood.",
  },
  {
    icon: Home,
    title: "Residential & Commercial",
    desc: "From a single villa bathroom to a full commercial fit-out spanning multiple floors — our surface protection film solutions scale to any project size across Dubai and Sharjah.",
  },
  {
    icon: Sparkles,
    title: "Preserves Value & Aesthetics",
    desc: "In Dubai's high-value property market, pristine surface finishes are non-negotiable. Protection films preserve the beauty, quality, and monetary value of every surface in your villa or commercial project.",
  },
];

const useCases = [
  {
    title: "Villas & Residences",
    desc: "New-build and renovation projects across Dubai and Sharjah. Protect marble floors, granite countertops, glass shower enclosures, wooden doors, and bathroom fittings during fit-out through to completion.",
    tags: ["New build", "Renovation", "Marble floors", "Kitchen countertops", "Bathroom glass"],
  },
  {
    title: "Commercial Fit-Outs",
    desc: "Office buildings, retail fit-outs, hotels, and hospitality projects. Protect high-specification surfaces — stone flooring, glass partitions, aluminium profiles, lift cab interiors, and joinery — during installation and handover.",
    tags: ["Office fit-out", "Retail", "Hotels", "Hospitality", "Lifts & Elevators"],
  },
  {
    title: "Property Staging & Handover",
    desc: "Protect completed surfaces during property snag inspections, client walkthroughs, and final handover — ensuring every surface is delivered in perfect condition without last-minute repair costs.",
    tags: ["Snagging", "Handover", "Property staging", "Show units"],
  },
];

const process = [
  {
    num: "01",
    title: "Site Assessment",
    desc: "Our team visits your villa or commercial space to assess all surfaces requiring protection — identifying the right film type, thickness, and adhesion level for each surface and application.",
  },
  {
    num: "02",
    title: "Film Selection",
    desc: "We select the appropriate protection film for each surface — light-tack films for delicate polished stone, heavy-duty films for high-traffic floors, and specialist films for aluminium, glass, and wet areas.",
  },
  {
    num: "03",
    title: "Surface Preparation",
    desc: "Surfaces are cleaned and assessed before film application — ensuring perfect adhesion, no trapped particles, and clean removal at the end of the protection period.",
  },
  {
    num: "04",
    title: "Professional Application",
    desc: "Films are precision-cut and applied by our trained installers — covering every surface area completely with clean, bubble-free coverage and sealed edges.",
  },
  {
    num: "05",
    title: "Clean Removal",
    desc: "Once your project is complete, our team removes all protection films cleanly — leaving every surface pristine, residue-free, and ready for final inspection or client handover.",
  },
];

const faqs = [
  {
    q: "What surfaces can surface protection film be applied to?",
    a: "Our surface protection films can be applied to marble, granite, and stone (countertops, floors, wall cladding); glass and mirrors; polished and tiled floors; lift and elevator cab interiors; aluminium window and door profiles, handrails, and balustrades; stainless steel hardware and bathroom fittings; wooden doors, cabinets, and joinery; kitchen countertops; and bathtubs and bathroom vanities. Our team selects the appropriate film type and adhesion level for each specific surface during the site assessment.",
  },
  {
    q: "Will surface protection film damage or mark my marble or stone?",
    a: "No — our surface protection films are specifically engineered for use on delicate polished surfaces including marble, granite, and stone. They use a light-tack, pressure-sensitive adhesive that bonds securely to protect against damage but releases cleanly without leaving adhesive residue, marks, or etching when removed. We select the correct film specification for each surface type during our site assessment.",
  },
  {
    q: "How long can surface protection film stay on?",
    a: "The duration depends on the specific film and application. Temporary protection films are typically designed for use over periods of weeks to several months during fit-out. Long-term residential protection films can remain in place for extended periods on surfaces like kitchen countertops and bathroom vanities. Our team advises on the correct film specification for your required protection duration during the site visit.",
  },
  {
    q: "Do you supply and install surface protection films, or supply only?",
    a: "Smart Auto UAE provides a full supply and professional installation service for surface protection films across Dubai and Sharjah. Our trained team handles site assessment, film selection, precise cutting, application, and clean removal at project completion — ensuring every surface is fully protected and perfectly presented at handover.",
  },
  {
    q: "Do you offer surface protection film for marble countertops in Dubai?",
    a: "Yes — marble countertop protection is one of our most in-demand residential services in Dubai. We supply and install clear, low-tack protection films on marble kitchen and bathroom countertops — guarding against staining, etching from cleaning products, and daily wear, while preserving the natural beauty and value of the marble surface.",
  },
  {
    q: "Can you protect lift and elevator interiors?",
    a: "Yes — lift cab interiors are one of the most frequently requested surface protection applications in commercial fit-outs. We apply protection films to stainless steel elevator walls, mirror panels, lift floors, door frames, and thresholds — protecting every surface from scratches, trolley damage, and mishandling during fit-out, move-in, and handover.",
  },
  {
    q: "Where can I get surface protection film near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches — MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. We offer free site visits and consultations for all surface protection film projects across Dubai and Sharjah — residential and commercial. Contact us on WhatsApp or call to book.",
  },
];

// ── FAQ COMPONENT ──────────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details
      className="group rounded-2xl border overflow-hidden"
      style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
        <span className="font-semibold text-[15px] pr-4" style={{ color: "#fff" }}>
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45"
          style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", color: gold }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-[13px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.45)" }}>
          {answer}
        </p>
      </div>
    </details>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function SurfaceProtectionFilmsPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80')",
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
              <span style={{ color: gold }}>Surface Protection Films</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  Marble · Wood · Lifts · Glass · Granite · Countertops · Floors
                </div>

                <h1 className="font-bold leading-[1.05] mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.2rem,5vw,4rem)", color: "#fff" }}>
                  Surface Protection Films{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Dubai &amp; Sharjah
                  </span>
                </h1>

                <p className="text-[13px] tracking-[0.2em] uppercase mb-6 font-medium"
                  style={{ color: "rgba(201,168,76,0.7)" }}>
                  Protect Every Glossy Surface · Preserve Every Finish
                </p>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Professional surface protection film supply and installation across{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)" }}>Dubai</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)" }}>Sharjah</strong>.
                  Shield your{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)" }}>
                    marble, granite, glass, floors, lifts, aluminium profiles, wood, and countertops
                  </strong>{" "}
                  from scratches, stains, and damage —
                  with clear, removable, residue-free protection films.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "Marble, granite & stone protection",
                    "Glass, mirror & floor protection",
                    "Lifts & elevator cab interiors",
                    "Aluminium profiles & metal fittings",
                    "Wooden doors, joinery & cabinets",
                    "Removable · Residue-free · Clear",
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
                    Get a Free Quote <ArrowRight size={15} />
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
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                    alt="Surface protection film Dubai Sharjah — marble glass floor lift protection — Smart Auto UAE"
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
                          Protect Every Glossy Surface from Day One
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          Marble · Wood · Lifts · Glass · Granite · Countertops
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating — Invisible */}
                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "120px" }}>
                  <div className="font-bold text-[13px] leading-snug mb-0.5"
                    style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "var(--font-playfair),serif" }}>
                    Invisible
                  </div>
                  <div className="font-bold text-[13px] leading-tight mb-0.5" style={{ color: "#fff" }}>Protection</div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Crystal Clear Film</div>
                </div>

                {/* Floating — Residue Free */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "120px" }}>
                  <div className="font-bold text-[13px] leading-snug mb-0.5"
                    style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "var(--font-playfair),serif" }}>
                    Residue-Free
                  </div>
                  <div className="font-bold text-[13px] leading-tight mb-0.5" style={{ color: "#fff" }}>Removal</div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>No Marks Left</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SURFACES WE PROTECT ───────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                What We Protect
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Surface Protection Films for{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Every Material
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                From marble countertops and polished stone floors to glass partitions, lift interiors,
                aluminium profiles, and high-gloss wooden joinery — we supply and install the right
                protection film for every surface type.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {surfaces.map((surface) => (
                <div key={surface.title}
                  className="rounded-2xl p-7 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <surface.icon size={20} />
                  </div>
                  <h3 className="font-bold text-[17px] mb-2"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    {surface.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {surface.desc}
                  </p>
                  <ul className="grid grid-cols-1 gap-y-2">
                    {surface.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-[12px]"
                        style={{ color: "rgba(255,255,255,0.5)" }}>
                        <CheckCircle size={11} style={{ color: gold, flexShrink: 0 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Surface pill tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {[
                "Marble", "Granite", "Onyx", "Glass", "Mirrors",
                "Ceramic Tiles", "Porcelain Floors", "Hardwood", "Polished Concrete",
                "Aluminium Profiles", "Stainless Steel", "Wooden Doors",
                "Kitchen Countertops", "Bathroom Vanities", "Bathtubs & Sinks",
                "Lift Cab Interiors", "Elevator Floors", "Escalator Panels",
                "Balustrades", "Handrails", "Fire-Rated Doors",
              ].map((t) => (
                <span key={t}
                  className="px-4 py-1.5 rounded-full text-[11px] font-medium"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY PROTECT ───────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Why It Matters
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Why Surface Protection Film is{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Essential in Dubai
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Dubai's high-value property market and year-round renovation activity make surface
                protection film one of the smartest investments in any residential or commercial project.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyProtect.map((item) => (
                <div key={item.title}
                  className="rounded-2xl p-7 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[16px] mb-2.5" style={{ color: "#fff" }}>{item.title}</h3>
                  <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ─────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Who We Work With
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Surface Protection for Every{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Project Type
                </span>
              </h2>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {useCases.map((uc) => (
                <div key={uc.title}
                  className="rounded-2xl p-8 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <h3 className="font-bold text-[18px] mb-3"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    {uc.title}
                  </h3>
                  <p className="text-[13px] leading-[1.75] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {uc.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {uc.tags.map((t) => (
                      <span key={t}
                        className="px-3 py-1 rounded-full text-[10px] font-medium"
                        style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)", color: "rgba(255,255,255,0.5)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
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
                Our Surface Protection{" "}
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

        {/* ── BRANCHES ──────────────────────────────────────────────────── */}
        <BranchCards branches={BRANCHES} serviceName="Surface Protection Films" />

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Common Questions
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#fff" }}>
                FAQs — Surface Protection Films{" "}
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
                  Surface Protection Films · Dubai &amp; Sharjah · Residential &amp; Commercial
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Protect Every Surface Before It's Too Late.
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Marble · Granite · Glass · Lifts · Floors · Aluminium · Wood · Countertops.
                  Clear, invisible protection. Removable &amp; residue-free.
                  Villas · Commercial fit-outs · Property handover.
                  Free site visit across Dubai &amp; Sharjah.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971555559424" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Book Free Site Visit <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971555559424"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm no-underline border"
                    style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                    <Phone size={14} /> Call Now
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

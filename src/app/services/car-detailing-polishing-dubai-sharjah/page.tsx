import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Phone, MapPin, ChevronRight,
  Star, Shield, Sparkles, Clock, Award, ShieldCheck,
  Car, Wind, Lightbulb, Layers,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Car Detailing & Polishing Dubai & Sharjah | 3M, SIRIUS, Polytop | Smart Auto UAE",
  description:
    "Professional car detailing and polishing in Dubai & Sharjah using 3M, SIRIUS USA & Polytop Germany products. Silver from AED 299, Gold AED 450, Diamond AED 600, Premium AED 1000. Interior detailing, exterior detailing, 6-step polishing, swirl mark removal, engine bay cleaning & headlight restoration. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah.",
  keywords: [
    "car detailing Dubai",
    "car detailing Sharjah",
    "car detailing near me Dubai",
    "car polishing Dubai",
    "car polishing Sharjah",
    "3M car detailing Dubai",
    "Polytop car detailing Dubai",
    "SIRIUS car detailing Dubai",
    "interior car detailing Dubai",
    "exterior car detailing Dubai",
    "car detailing price Dubai",
    "car detailing packages Dubai",
    "swirl mark removal Dubai",
    "engine bay cleaning Dubai",
    "headlight restoration Dubai",
    "car detailing MotorCity Dubai",
    "car detailing Al Quoz Dubai",
    "car detailing Mirdif Dubai",
    "car detailing Sharjah",
    "car detailing centre near me",
    "car detailing offers Dubai",
    "6 step car polishing Dubai",
    "Smart Auto UAE car detailing",
    "car wash and detailing Dubai",
    "ceramic sealant car Dubai",
    "paint correction Dubai",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/car-detailing-polishing-dubai-sharjah" },
  openGraph: {
    title: "Car Detailing & Polishing Dubai & Sharjah | 3M, SIRIUS, Polytop | Smart Auto UAE",
    description:
      "Professional car detailing in Dubai & Sharjah using 3M, SIRIUS USA & Polytop Germany. Silver from AED 299, Gold AED 450, Diamond AED 600, Premium AED 1,000. Interior, exterior, polishing, engine bay & headlight restoration. 4 branches.",
    url: "https://smartautouae.ae/services/car-detailing-polishing-dubai-sharjah",
    siteName: "Smart Auto UAE",
    type: "website",
  },
};

// ── CONSTANTS ──────────────────────────────────────────────────────────────

const gold      = "#C9A84C";
const goldGrad  = "linear-gradient(135deg,#C9A84C,#E8C96A)";
const cardBg    = "rgba(255,255,255,0.02)";
const cardBdr   = "rgba(255,255,255,0.06)";

// ── DATA ───────────────────────────────────────────────────────────────────

const detailingBrands = [
  {
    name: "3M",
    tag: "Global Leader",
    tagColor: "#60a5fa",
    origin: "3M",
    desc: "3M is the world's most trusted name in automotive detailing compounds and polishes. Our use of 3M products ensures precision paint correction, swirl mark removal, and surface finishing to the highest international standard.",
    features: [
      "World-renowned polishing compounds",
      "Precision paint correction",
      "Swirl mark & scratch removal",
      "Professional-grade abrasives",
      "OEM trusted globally",
      "Consistent, repeatable results",
    ],
  },
  {
    name: "SIRIUS USA",
    tag: "Premium Brand",
    tagColor: "#a78bfa",
    origin: "SIRIUS USA",
    desc: "SIRIUS USA brings advanced American-engineered detailing chemistry to every job - delivering superior surface preparation, deep gloss enhancement, and long-lasting paint protection across all detailing packages.",
    features: [
      "Advanced USA detailing formula",
      "Deep gloss enhancement",
      "Superior surface preparation",
      "Paint protection chemistry",
      "Professional detailing range",
      "Trusted across UAE",
    ],
  },
  {
    name: "Polytop Germany",
    tag: "German Precision",
    tagColor: "#34d399",
    origin: "Polytop Germany",
    desc: "Polytop is a premium German detailing brand renowned for its high-performance polishing compounds and Car Protection products. Our Premium package uses Polytop Germany compounds for the most demanding 6-step paint correction jobs.",
    features: [
      "Premium German compound range",
      "High-performance paint correction",
      "6-step polishing compounds",
      "Ceramic sealant products",
      "European precision engineering",
      "Used in Premium package",
    ],
  },
];

const services = [
  {
    icon: Car,
    id: "exterior",
    title: "Exterior Detailing",
    desc: "A thorough exterior treatment using 3M, SIRIUS USA & Polytop Germany products - removing oxidation, road grime, and contaminants, restoring your car's original paint finish and deep gloss.",
    points: [
      "Paint decontamination & clay bar",
      "6-step machine polishing",
      "Swirl mark & light scratch removal",
      "Wheel rim & brake caliper cleaning",
      "Tyre dressing & glass cleaning",
      "Protective wax or sealant finish",
    ],
  },
  {
    icon: Sparkles,
    id: "interior",
    title: "Interior Detailing",
    desc: "A complete deep clean of your car's entire interior - eliminating dust, stains, odours, and grime from every surface. Leaves your cabin spotless, fresh, and looking showroom-new.",
    points: [
      "Seats cleaning & stain removal",
      "Dashboard & centre console cleaning",
      "Door panels & roof lining cleaning",
      "Carpet & floor mat deep clean",
      "AC vent cleaning & glass polish",
      "Seat belt & plastic trim dressing",
    ],
  },
  {
    icon: Wind,
    id: "engine",
    title: "Engine Bay Cleaning",
    desc: "Professional engine bay decontamination and steam cleaning - safely removing years of grease, oil residue, and dirt build-up, leaving your engine bay looking immaculate and well-maintained.",
    points: [
      "Full engine bay decontamination",
      "Steam cleaning process",
      "Grease & oil residue removal",
      "Engine plastic & rubber dressing",
      "Leaves engine bay spotless",
      "Included in Premium package",
    ],
  },
  {
    icon: Lightbulb,
    id: "headlight",
    title: "Headlight Restoration",
    desc: "Professional restoration of yellowed, cloudy, or scratched headlight lenses - restoring full light projection and visibility, improving safety and enhancing your car's appearance.",
    points: [
      "Yellowing & cloudiness removal",
      "Scratch removal (surface level)",
      "Restored light projection & clarity",
    ],
  },
];

const packages = [
  {
    tier: "Silver",
    color: "#A8A9AD",
    colorLight: "rgba(168,169,173,0.08)",
    colorBdr: "rgba(168,169,173,0.25)",
    priceFrom: "299",
    priceTo: "349",
    tagline: "Essential Detailing",
    interior: [
      "Seats cleaning & stain removal",
      "Seat belts cleaning",
      "Dashboard cleaning",
      "Centre console cleaning",
      "Door side pad cleaning",
      "Roof cleaning",
      "Carpets & floor mats cleaning",
      "AC vents cleaning",
    ],
    exterior: [
      "Exterior waxing",
    ],
  },
  {
    tier: "Gold",
    color: "#C9A84C",
    colorLight: "rgba(201,168,76,0.08)",
    colorBdr: "rgba(201,168,76,0.3)",
    priceFrom: "450",
    priceTo: "500",
    tagline: "Enhanced Detailing",
    popular: true,
    interior: [
      "Seats cleaning & stain removal",
      "Seat belts cleaning",
      "Dashboard cleaning",
      "Centre console cleaning",
      "Door side pad cleaning",
      "Roof cleaning",
      "Carpets & floor mats cleaning",
      "AC vents cleaning",
    ],
    exterior: [
      "Washing & clay application",
      "Wheel rim & brake caliper cleaning",
      "6-step body polishing",
      "Swirl marks removal",
    ],
  },
  {
    tier: "Diamond",
    color: "#60a5fa",
    colorLight: "rgba(96,165,250,0.08)",
    colorBdr: "rgba(96,165,250,0.28)",
    priceFrom: "600",
    priceTo: "700",
    tagline: "Complete Detailing",
    interior: [
      "Seats cleaning & stain removal",
      "Seat belts cleaning",
      "Dashboard cleaning",
      "Centre console cleaning",
      "Door side pad cleaning",
      "Roof cleaning",
      "Carpets & floor mats cleaning",
      "AC vents cleaning",
      "Complete car disinfection",
    ],
    exterior: [
      "Complete decontamination process",
      "Underbody wash",
      "Washing & clay application",
      "Wheel rim & brake caliper cleaning",
      "6-step body polishing",
      "Swirl marks removal",
    ],
  },
  {
    tier: "Premium",
    color: "#C9A84C",
    colorLight: "rgba(201,168,76,0.1)",
    colorBdr: "rgba(201,168,76,0.4)",
    priceFrom: "1,000",
    priceTo: "1,100",
    tagline: "Ultimate Detailing",
    badge: "Best Value",
    interior: [
      "Seats cleaning & stain removal",
      "Seat belts cleaning",
      "Dashboard cleaning",
      "Centre console cleaning",
      "Door side pad cleaning",
      "Roof cleaning",
      "Carpets & floor mats cleaning",
      "AC vents cleaning",
      "Complete car disinfection",
    ],
    exterior: [
      "Complete decontamination process",
      "Underbody wash",
      "Washing & clay application",
      "Wheel rim & brake caliper cleaning",
      "6-step polishing with Polytop Germany compounds",
      "Swirl marks removal",
      "Ceramic sealant application",
      "Engine bay decontamination & steam cleaning",
    ],
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Showroom Finish Restored",
    desc: "Our 6-step machine polishing process using 3M and Polytop Germany compounds removes microscopic scratches, swirl marks, and oxidation - revealing the original paint surface and restoring a deep, permanent showroom shine.",
  },
  {
    icon: Shield,
    title: "Paint Protection",
    desc: "Detailing removes bonded contaminants that degrade paint over time. Our exterior treatments include protective wax or ceramic sealant applications using SIRIUS USA products to shield your paint from future damage.",
  },
  {
    icon: Wind,
    title: "Healthier Interior",
    desc: "A professionally cleaned interior eliminates dust, allergens, bacteria, and odour-causing contaminants - giving you a healthier, fresher driving environment every day.",
  },
  {
    icon: Lightbulb,
    title: "Improved Visibility & Safety",
    desc: "Headlight restoration dramatically improves nighttime light projection and road visibility - a critical safety upgrade for UAE roads that costs a fraction of headlight replacement.",
  },
  {
    icon: Award,
    title: "Higher Resale Value",
    desc: "A well-detailed car commands significantly more at resale. Buyers immediately notice a clean, polished, well-maintained exterior and interior - translating directly into better offers.",
  },
  {
    icon: Layers,
    title: "Long-Lasting Results",
    desc: "Unlike a basic car wash, professional detailing with premium 3M, SIRIUS, and Polytop products produces results that last months - especially with our Premium package's ceramic sealant for extended paint protection.",
  },
];

const process = [
  {
    num: "01",
    title: "Assessment",
    desc: "We inspect your car's interior and exterior condition - identifying paint defects, staining, oxidation, and contamination to determine the right treatment for your chosen package.",
  },
  {
    num: "02",
    title: "Interior Deep Clean",
    desc: "A thorough interior clean from roof to floor - seats, carpets, dashboard, door panels, AC vents, and all trim surfaces using premium foam-based cleaning products.",
  },
  {
    num: "03",
    title: "Exterior Wash & Decontamination",
    desc: "A multi-stage exterior wash followed by clay bar decontamination to remove all bonded surface contaminants, iron deposits, and road grime from the paintwork.",
  },
  {
    num: "04",
    title: "Machine Polishing",
    desc: "Our certified detailers perform a 6-step machine polishing process using 3M and Polytop Germany compounds - progressively removing scratches, swirl marks, and oxidation to reveal a flawless, deep-gloss paint surface.",
  },
  {
    num: "05",
    title: "Protection & Finish",
    desc: "We apply your chosen protective finish - exterior wax, SIRIUS ceramic sealant (Premium), or tyre dressing - before a final quality inspection and handover of your fully detailed car.",
  },
];

const faqs = [
  {
    q: "What detailing product brands does Smart Auto UAE use?",
    a: "We use three premium professional-grade detailing brands: 3M - the world's most trusted polishing compound brand; SIRIUS USA - advanced American detailing chemistry for surface preparation and gloss enhancement; and Polytop Germany - premium German compounds used in our 6-step polishing process, especially in the Premium package. Together these brands deliver the highest quality detailing results in Dubai and Sharjah.",
  },
  {
    q: "What is the difference between car detailing and a regular car wash?",
    a: "A regular car wash removes surface dirt and dust. Car detailing is a comprehensive process that deep cleans the entire interior, decontaminates and polishes the paintwork using professional-grade 3M, SIRIUS, and Polytop products, removes swirl marks and scratches, and applies protective treatments - restoring your car to a showroom-level finish that lasts months, not days.",
  },
  {
    q: "What is included in the Silver car detailing package?",
    a: "The Silver package (AED 299–349) covers a full interior deep clean - seats, seat belts, dashboard, centre console, door panels, roof, carpets, floor mats, and AC vents - plus an exterior wax finish. It is our essential detailing package ideal for regular maintenance.",
  },
  {
    q: "What is included in the Gold car detailing package?",
    a: "The Gold package (AED 450–500) includes everything in Silver plus a full exterior upgrade - washing and clay application, wheel rim and brake caliper cleaning, 6-step body polishing using 3M products, and swirl mark removal. It is our most popular package for a thorough inside-and-out transformation.",
  },
  {
    q: "What is included in the Diamond package?",
    a: "The Diamond package (AED 600–700) adds a complete decontamination process, underbody wash, and a full car disinfection to everything in the Gold package. Ideal for cars needing a more thorough exterior and hygiene treatment.",
  },
  {
    q: "What is the Premium car detailing package?",
    a: "The Premium package (AED 1,000–1,100) is our ultimate detailing service. It includes everything in Diamond plus 6-step polishing with Polytop Germany compounds, SIRIUS ceramic sealant application, and engine bay decontamination and steam cleaning. The ceramic sealant provides months of paint protection after detailing.",
  },
  {
    q: "What is headlight restoration?",
    a: "Headlight restoration is the professional process of removing yellowing, cloudiness, and surface scratches from plastic headlight lenses - restoring full clarity, light projection, and appearance. At Smart Auto UAE, full restoration takes 24 hours and includes one free follow-up service after one year.",
  },
  {
    q: "Where can I get car detailing near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. All branches are open every day from 11AM to 9PM. Walk-ins are welcome, or contact us on WhatsApp to book.",
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

export default function CarDetailingPage() {
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
              opacity: 0.06,
            }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] mb-12" style={{ color: "rgba(255,255,255,0.3)" }}>
              <Link href="/" className="no-underline hover:text-white/60 transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="no-underline hover:text-white/60 transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>Services</Link>
              <ChevronRight size={12} />
              <span style={{ color: gold }}>Car Detailing & Polishing</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  3M · SIRIUS USA · Polytop Germany · From AED 299
                </div>

                <h1 className="font-bold leading-[1.05] mb-6"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "#fff" }}>
                  Car Detailing &amp; Polishing{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Dubai &amp; Sharjah
                  </span>
                </h1>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Professional car detailing and polishing across{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah</strong> using{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>3M, SIRIUS USA</strong> and{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Polytop Germany</strong> products.
                  Interior deep clean, exterior polish, 6-step paint correction, engine bay cleaning,
                  and headlight restoration - all under one roof at{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>4 branches</strong> across the UAE.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "3M · SIRIUS USA · Polytop Germany",
                    "6-step machine polishing",
                    "Swirl mark & scratch removal",
                    "Engine bay steam cleaning",
                    "Headlight restoration",
                    "Silver, Gold, Diamond & Premium",
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

              {/* Right */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden border"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", height: "480px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1620060710473-b3d9a8d778c3?w=900&q=80"
                    alt="Car detailing and polishing Dubai Sharjah - 3M SIRIUS Polytop - Smart Auto UAE"
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
                          3M · SIRIUS USA · Polytop Germany
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          4 Packages · From AED 299 · 4 Branches UAE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[11px] leading-tight mb-0.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}>From AED</div>
                  <div className="font-bold text-[26px] leading-none mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    299
                  </div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Silver Package
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[26px] leading-none mb-1"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    6
                  </div>
                  <div className="text-[10px] tracking-[0.08em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Step Polish
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ─────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                What We Offer
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Full Car Detailing{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Services
                </span>
              </h2>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((svc) => (
                <div key={svc.id}
                  className="rounded-2xl border p-8 transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                      <svc.icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[19px] mb-2"
                        style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                        {svc.title}
                      </h3>
                      <p className="text-[13px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {svc.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {svc.points.map((pt) => (
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

        {/* ── PACKAGES ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Detailing Packages
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Silver, Gold, Diamond &amp;{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Premium Packages
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Four tiers of car detailing using 3M, SIRIUS USA, and Polytop Germany products -
                from essential interior and exterior cleaning to our ultimate Premium package with
                German compound polishing and ceramic sealant.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {packages.map((pkg) => (
                <div key={pkg.tier}
                  className="relative rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: `1px solid ${pkg.colorBdr}`,
                    background: pkg.popular ? "rgba(201,168,76,0.03)" : cardBg,
                    boxShadow: pkg.popular ? "0 0 40px rgba(201,168,76,0.05)" : "none",
                  }}>

                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
                      <div className="px-5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-b-xl"
                        style={{ background: "rgba(201,168,76,0.15)", color: gold, border: "1px solid rgba(201,168,76,0.25)", borderTop: "none" }}>
                        Most Popular
                      </div>
                    </div>
                  )}

                  {pkg.badge && (
                    <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
                      <div className="px-5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-b-xl"
                        style={{ background: goldGrad, color: "#000", borderTop: "none" }}>
                        {pkg.badge}
                      </div>
                    </div>
                  )}

                  <div className="h-1 w-full flex-shrink-0"
                    style={{ background: `linear-gradient(to right,${pkg.color},${pkg.color}66)` }} />

                  <div className="px-6 pt-8 pb-5 border-b" style={{ borderColor: pkg.colorBdr }}>
                    <div className="font-bold text-[22px] mb-0.5"
                      style={{ fontFamily: "var(--font-playfair),serif", color: pkg.color }}>
                      {pkg.tier}
                    </div>
                    <div className="text-[11px] mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {pkg.tagline}
                    </div>
                    <div className="rounded-xl px-4 py-3 text-center"
                      style={{ background: pkg.colorLight, border: `1px solid ${pkg.colorBdr}` }}>
                      <div className="text-[10px] tracking-[0.15em] uppercase mb-1"
                        style={{ color: "rgba(255,255,255,0.3)" }}>Starting from</div>
                      <div className="font-bold leading-none"
                        style={{ fontFamily: "var(--font-playfair),serif", color: pkg.color, fontSize: "clamp(1.4rem,2vw,1.8rem)" }}>
                        AED {pkg.priceFrom}
                        <span className="text-[13px] font-normal ml-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                          – {pkg.priceTo}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-5 flex-1 flex flex-col gap-5">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: gold }}>
                        Interior
                      </p>
                      <ul className="flex flex-col gap-2">
                        {pkg.interior.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[12px]"
                            style={{ color: "rgba(255,255,255,0.5)" }}>
                            <CheckCircle size={11} style={{ color: pkg.color, flexShrink: 0, marginTop: "2px" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: gold }}>
                        Exterior
                      </p>
                      <ul className="flex flex-col gap-2">
                        {pkg.exterior.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[12px]"
                            style={{ color: "rgba(255,255,255,0.5)" }}>
                            <CheckCircle size={11} style={{ color: pkg.color, flexShrink: 0, marginTop: "2px" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <a href="https://wa.me/971524403677" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[13px] font-bold no-underline transition-all duration-300 hover:gap-4"
                      style={
                        pkg.tier === "Premium"
                          ? { background: goldGrad, color: "#000" }
                          : { background: pkg.colorLight, border: `1px solid ${pkg.colorBdr}`, color: pkg.color }
                      }>
                      Book {pkg.tier} <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-[12px] mt-8" style={{ color: "rgba(255,255,255,0.2)" }}>
              Prices vary based on vehicle size and condition. Contact us for a free assessment at any of our 4 branches.
            </p>
          </div>
        </section>

        {/* ── BRANDS ────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Premium Detailing Products
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                3M · SIRIUS USA ·{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Polytop Germany
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                We use only professional-grade detailing products from three globally trusted brands -
                ensuring every car leaves our branches with a flawless, long-lasting finish.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {detailingBrands.map((brand) => (
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
                    <p className="text-[11px] tracking-wide uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
                      {brand.origin}
                    </p>
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
                Authorised to use professional products from
              </p>
              {[
                { name: "★ 3M",        color: "#60a5fa" },
                { name: "SIRIUS USA",      color: "rgba(255,255,255,0.55)" },
                { name: "Polytop Germany", color: "#34d399" },
              ].map((b) => (
                <div key={b.name}
                  className="px-5 py-2 rounded-full border text-[12px] font-semibold tracking-wide"
                  style={{
                    border: "1px solid rgba(201,168,76,0.2)",
                    background: "rgba(201,168,76,0.04)",
                    color: b.color,
                  }}>
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
                Why Detail Your Car
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Benefits of Professional Car Detailing{" "}
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
                Our Car Detailing{" "}
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
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=900&q=80"
                  alt="Smart Auto UAE - best car detailing near me Dubai Sharjah 3M SIRIUS Polytop"
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
                  Dubai &amp; Sharjah's Trusted{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Car Detailing Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  With over 20 years of experience serving car owners across Dubai and Sharjah, Smart Auto
                  UAE delivers professional car detailing using{" "}
                  <strong style={{ color: "rgba(255,255,255,0.75)" }}>3M, SIRIUS USA, and Polytop Germany</strong>{" "}
                  products. From a Silver interior refresh to our full Premium package with German compound
                  polishing and ceramic sealant - every job is completed by certified detailers at all 4 branches.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: Award,       text: "3M, SIRIUS USA & Polytop Germany detailing products" },
                    { icon: ShieldCheck, text: "6-step polishing with Polytop Germany compounds (Premium)" },
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

        {/* ── BRANCHES ──────────────────────────────────────────────────── */}
        <BranchCards
          branches={BRANCHES}
          serviceName="Car Detailing & Polishing"
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
                FAQs - Car Detailing{" "}
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
                  Car Detailing &amp; Polishing · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Book Your Car Detailing in Dubai or Sharjah Today
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  3M · SIRIUS USA · Polytop Germany products.
                  Silver AED 299 · Gold AED 450 · Diamond AED 600 · Premium AED 1,000.
                  Interior &amp; exterior detailing · 6-step polishing · Engine bay cleaning.
                  4 branches across Dubai &amp; Sharjah. Walk-ins welcome.
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

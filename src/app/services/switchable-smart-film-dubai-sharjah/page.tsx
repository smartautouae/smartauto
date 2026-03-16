import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Star, Shield, Sparkles, Eye, Zap, ShieldCheck,
  Clock, Award, Building2, Home, Wifi,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";
import SmartFilmDemo from "../../../components/SmartFilmDemo";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Switchable Smart Film Dubai & Sharjah | Smart Glass Film | PDLC Film | Smart Auto UAE",
  description:
    "Switchable smart glass film installation in Dubai & Sharjah. PDLC smart film transforms any existing glass from clear to frosted instantly - at the touch of a button. Privacy on demand for offices, villas, hotels, meeting rooms & partitions. Remote, wall switch & smart home control. 4 branches - MotorCity, Al Quoz, Mirdif & Sharjah. Free site visit.",
  keywords: [
    "switchable smart film Dubai",
    "switchable smart film Sharjah",
    "smart glass film Dubai",
    "smart glass film Sharjah",
    "PDLC film Dubai",
    "PDLC smart film UAE",
    "switchable smart glass Dubai",
    "smart glass Dubai",
    "smart film installation Dubai",
    "smart film installation Sharjah",
    "privacy glass film Dubai",
    "smart glass film office Dubai",
    "smart glass film villa Dubai",
    "smart switchable glass film UAE",
    "office smart glass film Dubai",
    "meeting room privacy film Dubai",
    "smart glass partition Dubai",
    "smart glass near me Dubai",
    "smart glass near me Sharjah",
    "electrochromic film Dubai",
    "smart window film Dubai",
    "smart glass film MotorCity Dubai",
    "smart glass film Al Quoz Dubai",
    "smart glass film Mirdif Dubai",
    "smart glass film Sharjah",
    "privacy on demand glass Dubai",
    "frosted glass film switchable Dubai",
    "Smart Auto UAE smart film",
    "smart home glass film Dubai",
    "smart film retrofit Dubai",
  ],
  alternates: { canonical: "https://smartautouae.ae/services/switchable-smart-film-dubai-sharjah" },
  openGraph: {
    title: "Switchable Smart Film Dubai & Sharjah | Smart Glass Film | PDLC Film | Smart Auto UAE",
    description:
      "PDLC switchable smart film in Dubai & Sharjah. Clear to frosted in milliseconds - at the touch of a button. Offices, villas, hotels, meeting rooms. Remote, wall switch & smart home control. Free site visit.",
    url: "https://smartautouae.ae/services/switchable-smart-film-dubai-sharjah",
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

const howItWorks = [
  {
    state: "ON - Clear",
    color: "#60a5fa",
    colorBg: "rgba(96,165,250,0.07)",
    colorBdr: "rgba(96,165,250,0.25)",
    desc: "When powered ON, an electric current aligns the liquid crystal particles inside the PDLC film - making the glass crystal clear with up to 92% optical clarity.",
    icon: "○",
  },
  {
    state: "OFF - Frosted",
    color: gold,
    colorBg: "rgba(201,168,76,0.07)",
    colorBdr: "rgba(201,168,76,0.25)",
    desc: "When powered OFF, the liquid crystal particles scatter randomly - instantly turning the glass opaque and frosted, providing complete privacy on demand.",
    icon: "●",
  },
];

const controlMethods = [
  { label: "Remote Control",      desc: "Simple handheld remote for instant switching from anywhere in the room" },
  { label: "Wall Switch",         desc: "Discreet, hardwired wall switch - like a standard light switch" },
  { label: "Smartphone App",      desc: "Control via mobile app for smart home integration" },
  { label: "Voice Command",       desc: "Compatible with Alexa, Google Home, and smart home automation systems" },
  { label: "Timer & Schedule",    desc: "Automate privacy schedules - e.g. frosted during office hours" },
  { label: "Sensor Automation",   desc: "Motion and occupancy sensor triggers for hands-free control" },
];

const applications = [
  {
    icon: Building2,
    title: "Office Meeting Rooms",
    desc: "Transform glass-walled meeting rooms and boardrooms into private spaces instantly - no blinds, no curtains, no fixed partitions. Open and transparent between meetings, completely private when needed.",
    tags: ["Meeting rooms", "Boardrooms", "Office fronts", "Reception glass"],
  },
  {
    icon: Eye,
    title: "Office Partitions & Facades",
    desc: "Replace static frosted partitions with switchable smart film - giving your office the flexibility to be open-plan or divided on demand. A premium, modern upgrade for any commercial workspace.",
    tags: ["Open-plan offices", "Glass partitions", "Office facades", "Flex workspaces"],
  },
  {
    icon: Home,
    title: "Villas & Residences",
    desc: "Bring smart home technology to your villa's windows, bathroom glass, bedroom partitions, and skylights. Instant privacy without curtains or blinds - controlled by remote, app, or voice.",
    tags: ["Bathroom windows", "Bedroom partitions", "Skylights", "Balcony glass"],
  },
  {
    icon: Sparkles,
    title: "Hotels & Hospitality",
    desc: "Provide guests with instant, effortless privacy control in suites, bathrooms, and lobby glass. Switchable smart film is the ultimate luxury hotel upgrade - sleek, high-tech, and maintenance-free.",
    tags: ["Hotel suites", "Bathroom glass", "Lobby partitions", "Restaurant spaces"],
  },
  {
    icon: Shield,
    title: "Healthcare & Clinics",
    desc: "Patient privacy on demand in consultation rooms, ward partitions, and clinical areas - without heavy curtains that harbour bacteria. Hygienic, instant, and fully controllable.",
    tags: ["Consultation rooms", "Ward partitions", "Waiting areas", "Clinics"],
  },
  {
    icon: Wifi,
    title: "Retail Showrooms & Shops",
    desc: "Create dramatic product reveals, private viewing areas, or display windows that switch from opaque to clear on cue. A powerful visual tool for luxury retail and automotive showrooms.",
    tags: ["Display windows", "Product reveals", "Private viewing", "Showrooms"],
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Instant Privacy On Demand",
    desc: "Switch from fully transparent to completely frosted in milliseconds - at the touch of a button. No curtains, no blinds, no manual adjustments. Complete privacy exactly when you need it, full openness when you don't.",
  },
  {
    icon: Sparkles,
    title: "Retrofit - No Glass Replacement",
    desc: "Smart film applies directly to your existing glass surfaces as a self-adhesive film - no need to replace windows, doors, or partitions. A cost-effective smart glass upgrade for any space, new or existing.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Switchable smart film reduces solar heat penetration and glare when frosted - lowering the demand on air conditioning and delivering measurable energy savings. Especially effective on south and west-facing glass in UAE's climate.",
  },
  {
    icon: Award,
    title: "Modern, Premium Aesthetic",
    desc: "Smart film eliminates the need for bulky blinds, curtains, or fixed partitions - giving your space a clean, minimal, high-tech appearance. A premium design upgrade that adds significant visual and monetary value to any property.",
  },
  {
    icon: ShieldCheck,
    title: "Multiple Control Options",
    desc: "Control your smart film via remote, wall switch, smartphone app, voice command, timer, or smart home automation system. Fully compatible with Alexa, Google Home, and leading home automation platforms.",
  },
  {
    icon: Shield,
    title: "UV & Glare Reduction",
    desc: "In addition to privacy control, our smart film blocks harmful UV rays and reduces solar glare - protecting interiors, furnishings, and occupants from sun damage throughout the day, particularly in the frosted state.",
  },
];

const smartFilmVsAlternatives = [
  { aspect: "Privacy",           smartFilm: "Instant on demand - clear or frosted",      blinds: "Manual adjustment only",         frostedGlass: "Permanent - cannot switch" },
  { aspect: "Natural Light",     smartFilm: "Full light when clear, diffused when frosted", blinds: "Blocked when closed",          frostedGlass: "Diffused - always" },
  { aspect: "Aesthetics",        smartFilm: "Clean, minimal, high-tech",                  blinds: "Bulky, collects dust",           frostedGlass: "Static, cannot change" },
  { aspect: "Installation",      smartFilm: "Film retrofit - no glass replacement",       blinds: "Requires frame & fixtures",      frostedGlass: "Full glass replacement" },
  { aspect: "Smart Control",     smartFilm: "Remote, app, voice, automation",             blinds: "Manual or basic motor",          frostedGlass: "None" },
  { aspect: "UV Protection",     smartFilm: "Yes - blocks UV in both states",             blinds: "Only when closed",               frostedGlass: "Partial" },
  { aspect: "Maintenance",       smartFilm: "Zero - no moving parts",                     blinds: "Regular cleaning required",      frostedGlass: "None needed" },
  { aspect: "Best For",          smartFilm: "Offices, villas, hotels, healthcare",        blinds: "Budget-conscious settings",      frostedGlass: "Permanent fixed privacy" },
];

const process = [
  {
    num: "01",
    title: "Free Site Visit",
    desc: "Our team visits your space - office, villa, or commercial property - to assess the glass areas, measure dimensions, and advise on the best smart film solution for each application.",
  },
  {
    num: "02",
    title: "Custom Measurement",
    desc: "Every panel is precisely measured and the smart film is custom-cut to exact dimensions - ensuring seamless, edge-to-edge coverage on all glass shapes and sizes.",
  },
  {
    num: "03",
    title: "Glass Preparation",
    desc: "All glass surfaces are thoroughly cleaned and decontaminated before installation - ensuring perfect adhesion, no bubbles, and a crystal-clear optical finish.",
  },
  {
    num: "04",
    title: "Film Installation",
    desc: "Our certified smart film installers apply the PDLC film panel by panel - connecting the electrical supply and ensuring flawless, bubble-free coverage on every glass surface.",
  },
  {
    num: "05",
    title: "Control Setup & Demo",
    desc: "We install your chosen control method - remote, wall switch, or smart home integration - and walk you through full operation before handover. No technical knowledge required.",
  },
];

const faqs = [
  {
    q: "What is switchable smart film?",
    a: "Switchable smart film - also called PDLC film (Polymer Dispersed Liquid Crystal film) - is a self-adhesive film that transforms any existing glass surface into smart glass. When powered ON, an electric current aligns the liquid crystals inside the film, making it completely transparent. When powered OFF, the crystals scatter randomly and the glass becomes instantly frosted and opaque - providing complete privacy on demand. It can be controlled by remote, wall switch, smartphone app, or voice command.",
  },
  {
    q: "What is the difference between smart film and smart glass?",
    a: "Smart film is applied as a self-adhesive retrofit film directly onto your existing glass - no glass replacement required, making it significantly more cost-effective. Smart glass has the PDLC technology permanently laminated inside the glass panel during manufacturing, requiring full glass replacement. Both deliver the same instant clear-to-frosted switching functionality. Smart film is the ideal solution for existing spaces, renovations, and upgrades.",
  },
  {
    q: "How is switchable smart film controlled?",
    a: "Smart Auto UAE's switchable smart film can be controlled through multiple methods: a handheld remote control, a hardwired wall switch (like a standard light switch), a smartphone app, voice commands (Alexa, Google Home), scheduled timers, or full smart home automation integration. We set up your preferred control method during installation.",
  },
  {
    q: "Can smart film be applied to any glass?",
    a: "Yes - our PDLC smart film can be applied to virtually any smooth, flat glass surface including windows, glass doors, glass partitions, shower screens, skylights, and glass facades. It is suitable for both residential and commercial installations. Our team assesses your specific glass type during the free site visit to confirm suitability.",
  },
  {
    q: "Does switchable smart film provide UV protection?",
    a: "Yes - our smart film blocks harmful UV rays in both the clear and frosted states. In the frosted (powered off) state, it also significantly reduces solar glare and heat penetration - helping to maintain a comfortable indoor temperature and protect furniture, flooring, and interiors from sun damage.",
  },
  {
    q: "Is smart film permanent? Can it be removed?",
    a: "Smart film is a self-adhesive retrofit film and is therefore removable. It can be professionally removed without damaging the underlying glass surface. This makes it a flexible, future-proof solution - unlike frosted glass or fixed partitions which require full replacement to undo.",
  },
  {
    q: "What are the most common uses for switchable smart film in Dubai?",
    a: "The most popular applications for smart film in Dubai include: office meeting rooms and boardrooms (instant privacy without blinds), glass office partitions and facades, villa and residential bathroom windows and bedroom partitions, hotel suites and bathrooms, healthcare consultation rooms, and luxury retail and automotive showrooms. Any space where flexible, on-demand privacy is required benefits from smart film.",
  },
  {
    q: "Where can I get switchable smart film installed near me in Dubai or Sharjah?",
    a: "Smart Auto UAE has 4 branches - MotorCity Dubai, Al Quoz Dubai, Mirdif (Uptown Mall) Dubai, and Central Mall Sharjah. We offer free on-site surveys and consultations for all smart film projects across Dubai and Sharjah. Contact us on WhatsApp or call us to book your free site visit.",
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

export default function SwitchableSmartFilmPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80')",
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
              <span style={{ color: gold }}>Switchable Smart Film</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                  <Star size={10} fill={gold} strokeWidth={0} />
                  PDLC Smart Film · Clear to Frosted in Milliseconds · No Glass Replacement
                </div>

                <h1 className="font-bold leading-[1.05] mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.2rem,5vw,4rem)", color: "#fff" }}>
                  Switchable Smart Film{" "}
                  <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    in UAE
                  </span>
                </h1>

                <p className="text-[13px] tracking-[0.2em] uppercase mb-6 font-medium"
                  style={{ color: "rgba(201,168,76,0.7)" }}>
                  Clear · Frosted · At the Touch of a Button
                </p>

                <p className="mb-8 leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
                  Transform any existing glass in your{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Dubai</strong> or{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Sharjah</strong> office,
                  villa, hotel, or commercial space into smart switchable glass -
                  instantly switching from{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>crystal clear to fully frosted</strong>{" "}
                  in milliseconds. No glass replacement. No curtains. No blinds.
                  Complete{" "}
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>privacy on demand</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    "PDLC smart film - no glass replacement",
                    "Clear to frosted in milliseconds",
                    "Remote, wall switch & app control",
                    "Offices, villas, hotels & healthcare",
                    "UV blocking & glare reduction",
                    "Privacy in Luxury",
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
                    src="/images/smart-glass.webp"
                    alt="Switchable smart film Dubai Sharjah - PDLC smart glass film - Smart Auto UAE"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 60%)" }} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 rounded-2xl px-5 py-4 border backdrop-blur-md"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(0,0,0,0.75)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.15)", color: gold }}>
                        <Zap size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-[14px]" style={{ color: "#fff" }}>
                          PDLC Switchable Smart Glass Film
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          Clear → Frosted · Remote · App · Voice · Timer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating - Instant Privacy */}
                <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "120px" }}>
                  <div className="font-bold text-[13px] leading-snug mb-0.5"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Instant
                  </div>
                  <div className="font-bold text-[13px] leading-snug mb-0.5" style={{ color: "#fff" }}>Privacy</div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>On Demand</div>
                </div>

                {/* Floating - 92% Clarity */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 border text-center"
                  style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)", minWidth: "110px" }}>
                  <div className="font-bold text-[26px] leading-none mb-0.5"
                    style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    92%
                  </div>
                  <div className="font-bold text-[11px] leading-tight mb-0.5" style={{ color: "#fff" }}>Optical</div>
                  <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Clarity</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                The Technology
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                How Switchable Smart Film{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Works
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                PDLC (Polymer Dispersed Liquid Crystal) technology - liquid crystal particles inside the film
                align or scatter in response to an electric current, switching glass between two states instantly.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            {/* ON / OFF states */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {howItWorks.map((state) => (
                <div key={state.state}
                  className="rounded-2xl p-8 border"
                  style={{ border: `1px solid ${state.colorBdr}`, background: state.colorBg }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-[22px]"
                      style={{ background: `${state.color}15`, border: `1px solid ${state.colorBdr}`, color: state.color }}>
                      {state.icon}
                    </div>
                    <h3 className="font-bold text-[18px]"
                      style={{ fontFamily: "var(--font-playfair),serif", color: state.color }}>
                      {state.state}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {state.desc}
                  </p>
                </div>
              ))}
            </div>

{/* ── INTERACTIVE DEMO ──────────────────────────────────────────── */}
<SmartFilmDemo />

            {/* Control Methods */}
            <div className="rounded-2xl border p-8"
              style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
              <h3 className="font-bold text-[18px] mb-6 text-center"
                style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                Control Methods
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {controlMethods.map((method) => (
                  <div key={method.label} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: gold }} />
                    <div>
                      <div className="font-semibold text-[13px] mb-0.5" style={{ color: "#fff" }}>{method.label}</div>
                      <div className="text-[11px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.4)" }}>{method.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── APPLICATIONS ──────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Where We Install
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Smart Film Applications in{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Dubai, Sharjah and Across UAE
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Switchable smart film transforms any glass surface in any setting -
                from office meeting rooms and boardrooms to villa bathrooms and luxury hotel suites.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {applications.map((app) => (
                <div key={app.title}
                  className="rounded-2xl p-7 border transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                  style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", color: gold }}>
                    <app.icon size={20} />
                  </div>
                  <h3 className="font-bold text-[16px] mb-2"
                    style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
                    {app.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {app.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((t) => (
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

        {/* ── BENEFITS ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Why Choose Smart Film
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Benefits of Switchable Smart Film in{" "}
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

        {/* ── SMART FILM VS ALTERNATIVES ────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                How It Compares
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                Smart Film vs Blinds vs{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Frosted Glass
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                See why switchable smart film outperforms traditional privacy solutions on every dimension.
              </p>
              <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
            </div>

            <div className="rounded-2xl border overflow-hidden" style={{ border: `1px solid ${cardBdr}` }}>
              {/* Header */}
              <div className="grid grid-cols-4 px-6 py-4"
                style={{ background: "rgba(201,168,76,0.05)", borderBottom: `1px solid ${cardBdr}` }}>
                <div className="text-[11px] tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Feature</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-center" style={{ color: gold }}>Smart Film ✓</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-center" style={{ color: "rgba(255,255,255,0.3)" }}>Blinds / Curtains</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-center" style={{ color: "rgba(255,255,255,0.3)" }}>Frosted Glass</div>
              </div>
              {smartFilmVsAlternatives.map((row, i) => (
                <div key={row.aspect}
                  className="grid grid-cols-4 px-6 py-4 gap-3"
                  style={{
                    borderBottom: i < smartFilmVsAlternatives.length - 1 ? `1px solid ${cardBdr}` : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                  }}>
                  <div className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>{row.aspect}</div>
                  <div className="text-[12px] text-center" style={{ color: "rgba(255,255,255,0.7)" }}>{row.smartFilm}</div>
                  <div className="text-[12px] text-center" style={{ color: "rgba(255,255,255,0.35)" }}>{row.blinds}</div>
                  <div className="text-[12px] text-center" style={{ color: "rgba(255,255,255,0.35)" }}>{row.frostedGlass}</div>
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
                Our Smart Film{" "}
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
                style={{ border: "1px solid rgba(201,168,76,0.12)", height: "495px" }}>
                <img
                  src="/images/smart-glass-1.webp"
                  alt="Smart Auto UAE - switchable smart glass film near me Dubai Sharjah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right,rgba(0,0,0,0.4) 0%,transparent 70%)" }} />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[
                    { val: "20+",  label: "Yrs Exp." },
                    { val: "4",    label: "Branches" },
                    { val: "600+", label: "Reviews" },
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
                    Smart Film Experts
                  </span>
                </h2>
                <p className="text-[14px] leading-[1.9] mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  With over 20 years of professional window film installation experience, Smart Auto UAE
                  delivers flawless PDLC switchable smart film installations across offices, villas, hotels,
                  healthcare spaces, and commercial properties throughout Dubai and Sharjah. Our certified
                  installers handle every project from free site visit to final control system setup -
                  ensuring a seamless, fully operational smart film installation every time.
                </p>
                <div className="flex flex-col gap-4 mb-9">
                  {[
                    { icon: Zap,         text: "PDLC smart film - clear to frosted in milliseconds" },
                    { icon: ShieldCheck, text: "No glass replacement - retrofit onto existing glass" },
                    { icon: Wifi,        text: "Remote, wall switch, app & voice control setup included" },
                    { icon: Building2,   text: "Offices, villas, hotels, healthcare & retail" },
                    { icon: Clock,       text: "Free site visit · Open every day 11AM – 9PM" },
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
        <BranchCards branches={BRANCHES} serviceName="Switchable Smart Film" />

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                Common Questions
              </span>
              <h2 className="font-bold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#fff" }}>
                FAQs - Switchable Smart Film{" "}
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
                  Switchable Smart Film · PDLC Smart Glass Film · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Transform Your Glass. Get Privacy On Demand.
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  PDLC switchable smart film - clear to frosted in milliseconds.
                  No glass replacement · No blinds · No curtains.
                  Remote · Wall switch · App · Voice · Smart home control.
                  Offices · Villas · Hotels · Healthcare · Retail.
                  Free site visit across Dubai &amp; Sharjah.
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

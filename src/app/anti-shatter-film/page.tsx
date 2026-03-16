"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield, CheckCircle, Phone, MapPin,
  Star, Zap, Building2, Home, AlertTriangle, Lock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const gold     = "#C9A84C";
const goldGrad = "linear-gradient(135deg,#C9A84C,#E8C96A)";
const WA_MSG   = encodeURIComponent("Hi, I'm interested in Anti-Shatter Safety Window Film for my property. Can you provide a quote?");
const WA_LINK  = `https://wa.me/971547011800?text=${WA_MSG}`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const benefits = [
  {
    icon: Shield,
    title: "Shatter-Resistant Protection",
    desc: "Holds broken glass fragments together on impact — preventing dangerous flying shards that cause serious injuries.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: Lock,
    title: "Forced Entry Deterrent",
    desc: "Makes windows significantly harder to smash through — delaying intruders and protecting your family or staff.",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
  },
  {
    icon: AlertTriangle,
    title: "Blast & Explosion Protection",
    desc: "Approved for blast mitigation. Critical for commercial buildings and high-risk areas in the UAE.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    icon: Zap,
    title: "Storm & Impact Resistance",
    desc: "Protects against sandstorms, high winds, and accidental impacts — essential in the UAE climate.",
    img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80",
  },
  {
    icon: Home,
    title: "UV & Heat Rejection",
    desc: "Blocks up to 99% of UV rays and reduces solar heat — lowering AC costs while protecting your interiors.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Villas & Commercial Buildings",
    desc: "Suitable for all glass types — floor-to-ceiling windows, skylights, glass partitions, doors, and more.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
];

const useCases = [
  {
    label: "Villa & Apartment Windows",
    icon: Home,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    desc: "Full glass coverage for villas, townhouses and apartments across Dubai & Sharjah.",
  },
  {
    label: "Office Glass Partitions",
    icon: Building2,
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    desc: "Protect staff from shattered partitions in open-plan offices and meeting rooms.",
  },
  {
    label: "Retail Shopfronts",
    icon: Building2,
    img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&q=80",
    desc: "Smash-and-grab deterrent for retail glass fronts and display windows.",
  },
  {
    label: "Glass Doors & Skylights",
    icon: Shield,
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    desc: "Ideal for high-risk glass surfaces prone to accidental or forced impact.",
  },
  {
    label: "Hotel & Hospitality Spaces",
    icon: Star,
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    desc: "Protect guests and meet safety standards across hotels and resorts in the UAE.",
  },
  {
    label: "Schools & Public Buildings",
    icon: CheckCircle,
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    desc: "Child-safe glass protection for classrooms, corridors, and public spaces.",
  },
];

const faqs = [
  {
    q: "What is anti-shatter safety film?",
    a: "It's a thick polyester film applied to glass that holds shattered pieces together on impact — preventing dangerous flying shards from causing injury.",
  },
  {
    q: "Is it visible after installation?",
    a: "No. The film is optically clear and virtually invisible once applied. It won't affect the appearance of your windows or glass.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential villas take 1 day. Commercial projects are assessed on-site. We work around your schedule to minimise disruption.",
  },
  {
    q: "Does it work with tinted or double-glazed glass?",
    a: "Yes. Our safety film is compatible with all standard glass types including tinted, clear, and most double-glazed units.",
  },
  {
    q: "Do you serve all of Dubai, Sharjah & Abu Dhabi?",
    a: "Yes. We cover all areas across Dubai, Sharjah & Abu Dhabi with on-site installation. Our 4 branches are in MotorCity, Al Quoz, Mirdif, and Sharjah Central Mall.",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show:   { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } },
      }}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border:     isOpen ? "1px solid rgba(201,168,76,0.25)" : "1px solid rgba(255,255,255,0.07)",
        background: "rgba(255,255,255,0.02)",
      }}>
      <button
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="text-white font-semibold text-[15px] pr-4 leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
          style={{ color: gold }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden">
        <p className="px-6 pb-6 text-white/50 text-sm leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
}

// ── INTERACTIVE DEMO ─────────────────────────────────────────────────────

const scenarios = [
  {
    id: "intruder",
    icon: "🔒",
    label: "Forced Entry",
    title: "Intruder Trying to Break In",
    desc: "A burglar attempts to smash through a villa window. Without film, glass shatters instantly giving access in seconds. With anti-shatter film, glass holds together — delaying entry by minutes and triggering alarm response time.",
    withoutImg:    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    withImg:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    withoutLabel:  "Without Film - Glass Shatters",
    withLabel:     "With Film — Glass Holds",
    withoutPoints: [
      "Glass shatters on first strike",
      "Intruder gains entry in under 10 seconds",
      "Flying shards injure occupants",
      "No deterrent effect",
    ],
    withPoints: [
      "Glass cracks but holds in place",
      "Entry delayed by 3–5 minutes",
      "No dangerous flying fragments",
      "Deters most opportunistic intruders",
    ],
  },
  {
    id: "blast",
    icon: "💥",
    label: "Blast / Explosion",
    title: "Nearby Blast or Explosion",
    desc: "A blast wave from a nearby explosion sends lethal glass shards across a room at high velocity. Anti-shatter film absorbs the energy and holds fragments in place — the single most critical protection in blast-risk zones.",
    withoutImg:    "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    withImg:       "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    withoutLabel:  "❌ Without Film — Lethal Shards",
    withLabel:     "✅ With Film — Fragments Contained",
    withoutPoints: [
      "Glass becomes high-velocity projectiles",
      "Majority of blast injuries are from glass",
      "Entire pane disintegrates",
      "Critical injury risk to all occupants",
    ],
    withPoints: [
      "Fragments stay bonded to film",
      "Blast energy absorbed by polyester layers",
      "Pane may bow but won't shatter freely",
      "Dramatically reduces injury risk",
    ],
  },
  {
    id: "stone",
    icon: "🪨",
    label: "Stone / Impact",
    title: "Stone or Object Hitting Glass",
    desc: "A stone thrown by a lawnmower, a child's ball, or vandalism. Without film, the pane shatters sending sharp fragments across the room. With film, the glass cracks in place — no fragments, no injury.",
    withoutImg:    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    withImg:       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    withoutLabel:  "❌ Without Film — Glass Everywhere",
    withLabel:     "✅ With Film — Cracks, Doesn't Shatter",
    withoutPoints: [
      "Pane explodes inward on impact",
      "Sharp fragments scatter across floor",
      "Children & pets at serious risk",
      "Immediate replacement required",
    ],
    withPoints: [
      "Crack stays contained in the pane",
      "No flying fragments inside",
      "Safe to clean up — no scatter",
      "Film holds until replacement",
    ],
  },
];

function InteractiveDemo() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);
  const [showWith,       setShowWith]       = useState(false);
  const [animating,      setAnimating]      = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const switchScenario = (s: typeof scenarios[0]) => {
    if (s.id === activeScenario.id) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveScenario(s);
      setShowWith(false);
      setAnimating(false);
    }, 250);
  };

  const toggle = () => {
    setAnimating(true);
    setTimeout(() => {
      setShowWith((v) => !v);
      setAnimating(false);
    }, 200);
  };

  return (
    <section ref={ref} className="py-24 px-6" style={{ backgroundColor: "#060606" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          className="text-center mb-12">
          <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
            See the Difference
          </span>
          <h2 className="font-bold leading-snug mb-4"
            style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
            Want to See{" "}
            <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              the Results?
            </span>
          </h2>
          <p className="text-white/40 text-[14px] max-w-xl mx-auto">
            Choose a real-world scenario and see exactly what happens with and without anti-shatter safety film.
          </p>
        </motion.div>

        {/* Scenario tabs */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}>
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => switchScenario(s)}
              className="flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background:   activeScenario.id === s.id ? goldGrad          : "rgba(255,255,255,0.03)",
                border:       activeScenario.id === s.id ? "none"            : "1px solid rgba(255,255,255,0.08)",
                color:        activeScenario.id === s.id ? "#000"            : "rgba(255,255,255,0.5)",
                boxShadow:    activeScenario.id === s.id ? "0 4px 20px rgba(201,168,76,0.3)" : "none",
              }}>
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* Main demo card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="rounded-3xl overflow-hidden border"
          style={{ borderColor: "rgba(201,168,76,0.15)", background: "rgba(255,255,255,0.02)" }}>

          {/* Image area */}
          <div className="relative h-[300px] md:h-[420px] overflow-hidden">
            <motion.img
              key={`${activeScenario.id}-${showWith}`}
              src={showWith ? activeScenario.withImg : activeScenario.withoutImg}
              alt={showWith ? activeScenario.withLabel : activeScenario.withoutLabel}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: animating ? 0 : 1, scale: animating ? 1.04 : 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to bottom,transparent 40%,rgba(0,0,0,0.75) 100%)" }} />

            {/* State badge - top left */}
            <motion.div
              key={`badge-${showWith}`}
              className="absolute top-4 left-4 px-4 py-2 rounded-full text-[12px] font-bold backdrop-blur-md"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: showWith ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)",
                border:     showWith ? "1px solid rgba(74,222,128,0.4)" : "1px solid rgba(248,113,113,0.4)",
                color:      showWith ? "#4ade80" : "#f87171",
              }}>
              {showWith ? activeScenario.withLabel : activeScenario.withoutLabel}
            </motion.div>

            {/* Scenario title - bottom */}
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-white font-bold text-xl mb-1"
                style={{ fontFamily: "var(--font-playfair),serif" }}>
                {activeScenario.title}
              </h3>
              <p className="text-white/55 text-[13px] leading-relaxed max-w-2xl">
                {activeScenario.desc}
              </p>
            </div>
          </div>
          {/* Toggle button */}
            <div className="flex items-center justify-center">
              <button
                onClick={toggle}
                className="flex items-center gap-3 px-3 py-2 rounded-full font-bold text-[13px] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background:   showWith ? "rgba(248,113,113,0.12)" : goldGrad,
                  border:       showWith ? "1px solid rgba(248,113,113,0.35)" : "none",
                  color:        showWith ? "#f87171" : "#000",
                  boxShadow:    showWith ? "none" : "0 4px 20px rgba(201,168,76,0.35)",
                }}>
                <span style={{ fontSize: "16px" }}>{showWith ? "😨" : "😃"}</span>
                {showWith ? "Show Without Film" : "Show With Film →"}
              </button>
            </div>

          {/* Bottom panel */}
          <div className="p-6 md:p-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

              {/* Without column */}
              <div className="p-5 rounded-2xl" style={{ background: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.15)" }}>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "#f87171" }}>
                  ❌ Without Anti-Shatter Film
                </p>
                <div className="flex flex-col gap-2.5">
                  {activeScenario.withoutPoints.map((p) => (
                    <div key={p} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#f87171" }} />
                      <span className="text-white/55 text-[13px] leading-snug">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* With column */}
              <div className="p-5 rounded-2xl" style={{ background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.15)" }}>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "#4ade80" }}>
                  ✅ With Anti-Shatter Film
                </p>
                <div className="flex flex-col gap-2.5">
                  {activeScenario.withPoints.map((p) => (
                    <div key={p} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#4ade80" }} />
                      <span className="text-white/55 text-[13px] leading-snug">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// ── CTA BAR ──────────────────────────────────────────────────────────────

function CTABar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide text-black no-underline transition-all hover:scale-105 active:scale-95"
        style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.35)" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Get a Free Quote on WhatsApp
      </a>
      <a href="tel:+971547011800"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide no-underline transition-all hover:scale-105 active:scale-95"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.3)", color: gold }}>
        <Phone size={15} /> Call +971 54 701 1800
      </a>
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────

export default function AntiShatterFilmPage() {
  const benefitRef = useRef(null);
  const visualRef  = useRef(null);
  const useCaseRef = useRef(null);
  const faqRef     = useRef(null);
  const ctaRef     = useRef(null);

  const benefitInView  = useInView(benefitRef,  { once: true, margin: "-80px" });
  const visualInView   = useInView(visualRef,   { once: true, margin: "-80px" });
  const useCaseInView  = useInView(useCaseRef,  { once: true, margin: "-80px" });
  const faqInView      = useInView(faqRef,      { once: true, margin: "-80px" });
  const ctaInView      = useInView(ctaRef,      { once: true, margin: "-80px" });

  return (
    <main style={{ backgroundColor: "#080808", color: "#fff" }}>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6"
        style={{ background: "#050505" }}>
        <div className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80)", opacity: 0.13 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center,transparent 20%,rgba(0,0,0,0.92) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.06) 0%,transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.25),transparent)" }} />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-28 pb-20">
          <motion.div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
            style={{ background: "rgba(201,168,76,0.06)", color: gold, borderColor: "rgba(201,168,76,0.3)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Shield size={12} />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">
              Dubai, Sharjah & Abu Dhabi · Villas & Commercial
            </span>
          </motion.div>

          <motion.h1
            className="font-bold text-white leading-[1.05] mb-5"
            style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,7vw,5.5rem)" }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9 }}>
            Anti-Shatter Safety
            <span className="block" style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Window Film UAE
            </span>
          </motion.h1>

          <motion.p
            className="text-white/55 leading-relaxed mb-8 max-w-2xl"
            style={{ fontSize: "clamp(1rem,1.5vw,1.15rem)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            Protect your villa or office from shattered glass injuries, forced entry, and blast impact.
            Invisible safety film installed by certified technicians across{" "}
            <strong className="text-white/80">Dubai, Sharjah & Abu Dhabi</strong> — same-week availability.
          </motion.p>

          <motion.div className="flex items-center justify-center gap-6 mb-10 flex-wrap"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            {["Free On-Site Survey", "10-Year Warranty", "Certified Installers", "4 Branches UAE"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckCircle size={13} style={{ color: gold }} />
                <span className="text-[11px] text-white/50 tracking-wide">{t}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            <CTABar />
          </motion.div>

          <motion.div className="flex items-center gap-2 mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill={gold} strokeWidth={0} style={{ color: gold }} />
            ))}
            <span className="text-white/40 text-[12px] ml-1">600+ Google Reviews · Smart Auto UAE</span>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ───────────────────────────────────────────── */}
      <div className="py-5 border-t border-b overflow-hidden"
        style={{ background: "rgba(201,168,76,0.03)", borderColor: "rgba(201,168,76,0.08)" }}>
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...Array(3)].flatMap(() => [
            "🛡️ Shatter Resistant", "🔒 Forced Entry Protection", "💨 Blast Mitigation",
            "☀️ 99% UV Rejection", "🏠 Villas & Apartments", "🏢 Offices & Retail",
            "✅ Free Survey — Dubai, Sharjah & Abu Dhabi", "⚡ Same-Week Install",
          ]).map((t, i) => (
            <span key={i} className="text-[11px] tracking-[0.15em] uppercase flex-shrink-0"
              style={{ color: "rgba(201,168,76,0.6)" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── WHAT IS IT — VISUAL EXPLAINER ───────────────────────────── */}
      <section ref={visualRef} className="py-24 px-6" style={{ background: "linear-gradient(180deg,#080808,#0A0A0A)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text side */}
            <motion.div variants={fadeUp} initial="hidden" animate={visualInView ? "show" : "hidden"}>
              <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
                What Is It?
              </span>
              <h2 className="font-bold text-white mb-6 leading-snug"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
                Invisible Protection.{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Real-World Safety.
                </span>
              </h2>
              <p className="text-white/50 text-[15px] leading-[1.8] mb-6">
                Anti-shatter safety film is a thick, optically clear polyester film bonded directly to your existing glass.
                On impact — whether from a break-in, storm, accident, or blast — the film holds all shattered pieces
                in place, preventing dangerous glass fragments from becoming lethal projectiles.
              </p>
              <p className="text-white/50 text-[15px] leading-[1.8] mb-8">
                It's invisible, maintenance-free, and compatible with all glass types — tinted, clear, or double-glazed.
                Once applied by our certified technicians, your glass is immediately safer without any visible change.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Optically clear — no change in appearance",
                  "Works on existing glass — no replacement needed",
                  "Holds fragments together on any type of impact",
                  "Compatible with tinted, clear & double-glazed glass",
                  "Maintenance-free with 10-year warranty",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: gold, flexShrink: 0 }} />
                    <span className="text-white/60 text-[14px]">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image collage side */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              style={{ gridTemplateRows: "220px 220px" }}
              initial={{ opacity: 0, x: 40 }}
              animate={visualInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
              {/* Tall left */}
              <div className="rounded-2xl overflow-hidden border row-span-2 relative group"
                style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80"
                  alt="Villa window safety film Dubai"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase px-3 py-1 rounded-md border backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.8)", borderColor: "rgba(201,168,76,0.2)", color: gold }}>
                  Villa Windows
                </span>
              </div>
              {/* Top right */}
              <div className="rounded-2xl overflow-hidden border relative group"
                style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                  alt="Office glass safety film Dubai"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase px-3 py-1 rounded-md border backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.8)", borderColor: "rgba(201,168,76,0.2)", color: gold }}>
                  Office Glass
                </span>
              </div>
              {/* Bottom right */}
              <div className="rounded-2xl overflow-hidden border relative group"
                style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80"
                  alt="Commercial building window film UAE"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase px-3 py-1 rounded-md border backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.8)", borderColor: "rgba(201,168,76,0.2)", color: gold }}>
                  Commercial
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────────────── */}
      <section ref={benefitRef} className="py-24 px-6" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={benefitInView ? "show" : "hidden"}
            className="text-center mb-16">
            <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
              Why Anti-Shatter Film
            </span>
            <h2 className="font-bold leading-snug"
              style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
              One Film.{" "}
              <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Multiple Protections.
              </span>
            </h2>
            <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                initial="hidden"
                animate={benefitInView ? "show" : "hidden"}
                className="rounded-2xl overflow-hidden border group transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                whileHover={{ borderColor: "rgba(201,168,76,0.3)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", y: -4 }}>
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img src={b.img} alt={b.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <b.icon size={18} style={{ color: gold }} />
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-2 leading-snug">{b.title}</h3>
                  <p className="text-white/45 text-[13px] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<InteractiveDemo />

      {/* ── INLINE CTA BANNER ───────────────────────────────────────── */}
      <section className="py-14 px-6 text-center"
        style={{ background: "rgba(201,168,76,0.04)", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <p className="text-white/60 text-[13px] uppercase tracking-widest mb-3">Limited Slots This Week</p>
        <h3 className="text-white font-bold text-2xl mb-6"
          style={{ fontFamily: "var(--font-playfair),serif" }}>
          Get a Free On-Site Survey & Quote
        </h3>
        <CTABar />
      </section>

      {/* ── WHERE IT'S USED ─────────────────────────────────────────── */}
      <section ref={useCaseRef} className="py-24 px-6"
        style={{ background: "linear-gradient(180deg,#080808,#0A0A0A)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={useCaseInView ? "show" : "hidden"}
            className="text-center mb-14">
            <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>
              Applications
            </span>
            <h2 className="font-bold leading-snug"
              style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
              Where We{" "}
              <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Install It
              </span>
            </h2>
            <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <motion.div
                key={u.label}
                variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.4 } } }}
                initial="hidden"
                animate={useCaseInView ? "show" : "hidden"}
                className="rounded-2xl overflow-hidden border group"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                whileHover={{ borderColor: "rgba(201,168,76,0.25)", y: -3 }}>
                {/* Image */}
                <div className="h-40 overflow-hidden relative">
                  <img src={u.img} alt={u.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.6),transparent)" }} />
                </div>
                {/* Content */}
                <div className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <u.icon size={15} style={{ color: gold }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[14px] mb-1">{u.label}</h3>
                    <p className="text-white/45 text-[12px] leading-relaxed">{u.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANCHES ────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: gold }}>4 Locations</p>
          <h3 className="text-white font-bold text-2xl mb-8"
            style={{ fontFamily: "var(--font-playfair),serif" }}>
            We Cover All of Dubai, Sharjah & Abu Dhabi
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {["MotorCity, Dubai", "Al Quoz, Dubai", "Mirdif · Uptown Mall", "Central Mall, Sharjah"].map((b) => (
              <div key={b} className="flex items-center gap-2 p-4 rounded-xl border justify-center text-center"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(201,168,76,0.15)" }}>
                <MapPin size={12} style={{ color: gold, flexShrink: 0 }} />
                <span className="text-white/60 text-[12px]">{b}</span>
              </div>
            ))}
          </div>
          <CTABar />
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section ref={faqRef} className="py-24 px-6"
        style={{ background: "linear-gradient(180deg,#080808,#0A0A0A)" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={faqInView ? "show" : "hidden"}
            className="text-center mb-14">
            <span className="text-[11px] tracking-[0.35em] uppercase mb-4 block" style={{ color: gold }}>FAQ</span>
            <h2 className="font-bold"
              style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#fff" }}>
              Common Questions
            </h2>
            <div className="w-14 h-0.5 mx-auto mt-5 rounded-full" style={{ background: goldGrad }} />
          </motion.div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section ref={ctaRef} className="py-28 px-6 text-center relative overflow-hidden"
        style={{ background: "#050505" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.07) 0%,transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent)" }} />

        <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "show" : "hidden"}
          className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-4 block" style={{ color: gold }}>
            Book Today
          </span>
          <h2 className="font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.1 }}>
            Protect Your Property
            <span className="block" style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Before It's Too Late
            </span>
          </h2>
          <p className="text-white/45 text-[14px] leading-relaxed mb-10 max-w-lg mx-auto">
            Free on-site survey. Same-week installation. Serving villas, apartments, offices, and retail across Dubai, Sharjah and Abu Dhabi.
          </p>
          <CTABar />
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill={gold} strokeWidth={0} style={{ color: gold }} />
            ))}
            <span className="text-white/35 text-[12px] ml-1">Trusted by 100,000+ customers since 2014</span>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

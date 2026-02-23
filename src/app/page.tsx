"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ChevronDown, Star, Shield, Droplets, Sun, Sparkles,
  Car, Award, Users, Clock, ThumbsUp,
  Phone, Mail, MapPin, Instagram, CheckCircle, ArrowRight,
  Building2, Zap, Film,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── DATA ───────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Sun,
    title: "Car Window Tinting",
    href: "/car-window-tinting-dubai/",
    image: "https://images.unsplash.com/photo-1614026480418-bd11fdb9fa0e?w=600&q=80",
    description: "Advanced heat-reducing, UV-blocking nano ceramic & carbon tints for superior comfort, privacy, and style. UAE traffic law compliant VLT levels. 5-year warranty.",
    features: ["Nano ceramic films", "UAE law compliant VLT", "99% UV & heat rejection", "5-year warranty"],
  },
  {
    icon: Building2,
    title: "Villa Window Tinting",
    href: "/villa-window-tinting/",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    description: "Premium window tinting for villas — enhanced privacy, reduced heat and glare, blocks harmful UV rays, all while adding a sleek and stylish look to your home.",
    features: ["Maximum privacy films", "Heat & glare reduction", "UV protection", "Aesthetic enhancement"],
  },
  {
    icon: Building2,
    title: "Office & Commercial Tinting",
    href: "/commercial/",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    description: "Advanced window tinting for offices and commercial buildings — reduces heat, blocks UV rays, enhances privacy, and improves energy efficiency and comfort.",
    features: ["Energy efficiency", "UV & heat blocking", "Enhanced privacy", "Large-scale installation"],
  },
  {
    icon: Shield,
    title: "Paint Protection Film (PPF)",
    href: "/paint-protection-films/",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
    description: "An invisible self-healing shield that protects against scratches, chips, and harsh elements — preserving your car's factory finish for years in UAE conditions.",
    features: ["Self-healing TPU film", "XPEL, SunTek, TotalGard", "Gloss or matte finish", "10-year warranty"],
  },
  {
    icon: Droplets,
    title: "Nano Ceramic Coating",
    href: "/nano-ceramic-coating/",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80",
    description: "Ultra-glossy 9H hardness ceramic coating — repels dirt, water, and contaminants while enhancing your car's shine. Built for UAE's extreme heat and UV exposure.",
    features: ["9H hardness rating", "Hydrophobic surface", "Mirror-like gloss", "2–5 year protection"],
  },
  {
    icon: Sparkles,
    title: "Car Detailing & Polishing",
    href: "/car-detailing/",
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4ec2d50?w=600&q=80",
    description: "Precision interior and exterior detailing for a spotless, showroom-quality appearance. Paint correction, deep cleaning, engine bay, and full odor elimination.",
    features: ["Interior deep clean", "Paint correction", "Engine bay cleaning", "Odor elimination"],
  },
  {
    icon: Car,
    title: "Car Wrapping",
    href: "/car-wrapping/",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    description: "Custom colour-change wraps and finishes for a unique, head-turning look with added paint protection. Matte, gloss, satin, chrome, and bespoke designs.",
    features: ["Matte, gloss & satin", "Full & partial wraps", "Colour change wraps", "Paint-safe removal"],
  },
  {
    icon: Zap,
    title: "Switchable Smart Film",
    href: "/switchable-smart-glass-film/",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Innovative switchable smart glass film that lets you control light and privacy dynamically at the touch of a button. Ideal for offices, villas, and luxury vehicles.",
    features: ["Instant privacy control", "Electric on/off switch", "Energy efficient", "Villas & offices"],
  },
  {
    icon: Film,
    title: "Marble Protection Film",
    href: "/stone-protection-film/",
    image: "https://img.kwcdn.com/product/fancy/df615e07-b68c-4e53-8476-814ebe037342.jpg?imageView2/2/w/800/q/70/format/avif",
    description: "Transparent protective film for surfaces, panels, and stone — guards against chips, scratches, and environmental damage while remaining completely invisible.",
    features: ["Crystal clear finish", "Stone & panel guard", "Impact resistant", "Easy removal"],
  },
];

const whyFeatures = [
  { icon: Award,    title: "Expert Services",       description: "Skilled professionals with 10+ years of certified experience in premium car care across UAE." },
  { icon: Users,    title: "Quality Materials",      description: "Premium coatings, films, and products from world-class brands like XPEL, 3M, Gyeon & TotalGard." },
  { icon: Clock,    title: "Tailored Solutions",     description: "Custom services for each vehicle and property — no one-size-fits-all approach here." },
  { icon: ThumbsUp, title: "4 Convenient Branches",  description: "MotorCity, Al Quoz, Mirdif (Dubai) & Sharjah — always a Smart Auto near you." },
];

const steps = [
  { num: "01", title: "Book Appointment",  desc: "Call, WhatsApp, or walk into any of our 4 branches in Dubai & Sharjah." },
  { num: "02", title: "Free Inspection",   desc: "Our certified experts inspect your vehicle and recommend the ideal treatment plan." },
  { num: "03", title: "Premium Service",   desc: "We apply using top-grade materials with precision — craftsmanship you can see." },
  { num: "04", title: "Drive Away Happy",  desc: "Leave with a warranty certificate and a car that turns heads everywhere." },
];

const testimonials = [
  { name: "Mohammed Maaeez",         role: "Verified Google Review", date: "Feb 2026", rating: 5, text: "Amazing service with amazing staff (Subeer and Team). Being very genuine to their work. Loved the service." },
  { name: "Ratheesh Vadakkeveliyil", role: "Harley Davidson Owner",  date: "Dec 2025", rating: 5, text: "Outstanding quality for my Harley Davidson — ceramic coating and polishing done to perfection. Reasonable charges and they offer yearly boosting for free. Highly recommend Smart Auto Care!" },
  { name: "Suraj Nair",              role: "Verified Google Review", date: "Dec 2025", rating: 5, text: "They are fast and reasonably priced. Have done tinting for 3 cars from them. They provide 5 years warranty. Will keep coming back." },
  { name: "Abdullah Rehman",         role: "Verified Google Review", date: "Nov 2025", rating: 5, text: "Amazing service for detailing and tints. Given them all my cars and they've always taken care of me. Best in Dubai." },
  { name: "Maryam Yousuf",           role: "Uptown Mall Visit",      date: "Nov 2025", rating: 5, text: "Visited the Uptown Mall branch — Subeer was cooperative and did an excellent job at a very affordable price. Will visit again." },
  { name: "Jesto Joseph",            role: "Verified Google Review", date: "Oct 2025", rating: 5, text: "Excellent work in tinting — it's crystal clear from inside. I can drive my car now with much more safety and comfort. Highly recommended!" },
];

const brands = ["TotalGard", "3M", "XPEL"];

const branches = [
  { city: "MotorCity Branch", address: "Detroit Line, Uptown Buildings Foxhill Parking 5, Spinneys Exit, Behind KFC — Dubai, UAE",        mapHref: "https://maps.app.goo.gl/smd7UDESbcqYXq4h7", phone: "+971 55 782 3731" },
  { city: "Al Quoz Branch",   address: "D16 Road, Al Quoz 4, Warehouse No. 6 / Behind JOTUN Warehouse — Dubai, UAE",                     mapHref: "https://maps.app.goo.gl/iTvk9uV3U27XbzUd7", phone: "+971 54 701 1800" },
  { city: "Mirdif Branch",    address: "Uptown Mall, Algeria 47 Street Basement Parking, Near Spinneys Apple Parking — Dubai, UAE",       mapHref: "https://maps.app.goo.gl/kcZJj1x3t3wyMRoy9", phone: "+971 55 555 9424" },
  { city: "Sharjah Branch",   address: "Central Mall, Basement Level 1, Samnan, Halwan — Sharjah, UAE",                                  mapHref: "https://maps.app.goo.gl/un6Gnywt5TdPJSbk7", phone: "+971 55 555 9424" },
];

const contactItems = [
  { icon: Phone,     label: "Phone / WhatsApp", value: "+971 55 555 9424",      href: "tel:+971555559424" },
  { icon: Phone,     label: "Phone 2",          value: "+971 55 782 3731",      href: "tel:+971557823731" },
  { icon: Mail,      label: "Email",            value: "info@smartautouae.ae",  href: "mailto:info@smartautouae.ae" },
  { icon: MapPin,    label: "Branches",         value: "4 Locations — Dubai & Sharjah", href: "#branches" },
  { icon: Instagram, label: "Instagram",        value: "@smartautouae",         href: "https://instagram.com/smartautouae" },
];

const stripItems = [
  "Car Window Tinting Dubai", "PPF Dubai", "Nano Ceramic Coating UAE",
  "Car Detailing Dubai", "Villa Tinting Dubai", "Car Wrapping UAE",
  "Smart Film Dubai", "Commercial Tinting", "Marble Protection Film",
  "Al Quoz · MotorCity · Mirdif · Sharjah",
];

const galleryItems = [
  { category: "Ceramic Coating", before: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",  after: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",  label: "BMW 5 Series — Nano Ceramic Coating · Al Quoz" },
  { category: "PPF",             before: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?w=800&q=80",  after: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",  label: "Range Rover — Totalgard PPF · MotorCity Dubai" },
  { category: "Window Tinting",  before: "https://images.unsplash.com/photo-1548538713-3e1d57b6e562?w=800&q=80",    after: "https://images.unsplash.com/photo-1614026480418-bd11fdb9fa0e?w=800&q=80",    label: "Mercedes C-Class — Nano Ceramic Tint · Mirdif" },
  { category: "Car Wrap",        before: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",  after: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",  label: "Porsche Cayenne — Matte Black Wrap · Dubai" },
  { category: "Detailing",       before: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=800&q=80", after: "https://images.unsplash.com/photo-1616455579100-2ceaa4ec2d50?w=800&q=80", label: "Toyota Camry — Full Detailing · Sharjah Branch" },
];

const allCategories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];

const faqs = [
  { q: "How much does window tinting cost in Dubai?",       a: "Car window tinting in Dubai starts from AED 299 depending on film type and vehicle size. We offer nano ceramic, carbon, and dyed films — all UAE traffic law compliant. All tints come with a 5-year warranty." },
  { q: "What is the best PPF for cars in UAE?",             a: "For UAE's extreme heat and harsh roads, self-healing TPU-based films like XPEL, SunTek, and TotalGard are the top choices. Smart Auto UAE is an authorised installer across all 4 branches." },
  { q: "How long does nano ceramic coating last in Dubai?", a: "A professional nano ceramic coating in Dubai lasts 2–5 years depending on product tier and maintenance. We use 9H hardness coatings from Gyeon, Gtechniq, and IGL — ideal for UAE's harsh climate." },
  { q: "How many branches does Smart Auto UAE have?",       a: "Smart Auto UAE has 4 branches — MotorCity, Al Quoz, and Mirdif in Dubai, plus a Sharjah branch at Central Mall. All branches are open every day 11AM – 9PM." },
  { q: "Do you offer villa and commercial window tinting?", a: "Yes! In addition to car tinting, Smart Auto UAE offers premium villa window tinting and commercial/office building tinting across Dubai and Sharjah. We also install switchable smart film for dynamic privacy control." },
  { q: "How long does a full car wrap take?",               a: "A full vinyl wrap typically takes 2–4 days depending on vehicle size. Partial wraps and accent pieces can be done in 1 day at any of our Dubai or Sharjah branches." },
  { q: "Is ceramic coating worth it in UAE?",               a: "Absolutely. UAE's intense UV, sandstorms, and extreme heat make ceramic coating one of the best investments for your car. It protects paint, repels water and dust, and keeps your car looking new year-round." },
];

// ── ANIMATION VARIANTS ─────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};


// ── UAE OPEN STATUS HOOK ───────────────────────────────────────────────────

function useOpenStatus() {
  const [status, setStatus] = useState({
    isOpen: false,
    label: "Open Now",
    sublabel: "",
    timeStr: "",
  });

  useEffect(() => {
    const compute = () => {
      const now   = new Date();
      const uae   = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dubai" }));
      const hours = uae.getHours();
      const mins  = uae.getMinutes();
      const total = hours * 60 + mins;

      const OPEN  = 11 * 60; // 660  → 11:00 AM
      const CLOSE = 21 * 60; // 1260 → 09:00 PM

      const isOpen = total >= OPEN && total < CLOSE;

      let sublabel = "";
      if (isOpen) {
        const minsLeft  = CLOSE - total;
        const hLeft     = Math.floor(minsLeft / 60);
        const mLeft     = minsLeft % 60;
        sublabel = hLeft > 0
          ? `Closes in ${hLeft}h${mLeft > 0 ? ` ${mLeft}m` : ""}`
          : `Closes in ${mLeft}m`;
      } else {
        sublabel = "Reopens tomorrow at 11:00 AM";
      }

      const h    = hours % 12 || 12;
      const m    = String(mins).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      setStatus({ isOpen, label: isOpen ? "Open Now" : "Closed", sublabel, timeStr: `${h}:${m} ${ampm} UAE` });
    };

    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}

// ── REUSABLE COMPONENTS ────────────────────────────────────────────────────

const SectionHeader = ({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight: string }) => (
  <div className="text-center mb-16">
    <span className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4 block">{eyebrow}</span>
    <h2 className="font-bold leading-snug"
      style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
      {title} <span className="gold-text">{highlight}</span>
    </h2>
    <div className="w-14 h-0.5 mx-auto mt-5 rounded-full"
      style={{ background: "linear-gradient(to right,#C9A84C,#E8C96A)" }} />
  </div>
);

const GoldBtn = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <motion.a
    href={href}
    className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide text-black no-underline ${className}`}
    style={{ background: "linear-gradient(135deg,#C9A84C,#E8C96A)", boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}
    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(201,168,76,0.5)" }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const OutlineBtn = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-gold border border-gold/40 bg-gold/5 backdrop-blur-sm no-underline"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(201,168,76,0.15)" }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const GlassCard = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <motion.div
    className={`relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl overflow-hidden ${className}`}
    whileHover={{ y: -6, borderColor: "rgba(201,168,76,0.35)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
    transition={{ duration: 0.3 }}
    {...(props as object)}
  >
    {children}
  </motion.div>
);

// ── STATUS BADGE ───────────────────────────────────────────────────────────

function StatusBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const { isOpen, label, sublabel } = useOpenStatus();
  const hex = isOpen ? "#4ade80" : "#f87171";
  const col = isOpen ? "rgba(74,222,128," : "rgba(248,113,113,";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border backdrop-blur-sm font-semibold
        ${size === "sm" ? "px-3 py-1 text-[11px]" : "px-5 py-2.5 text-[13px]"}`}
      style={{ borderColor: `${col}0.4)`, background: `${col}0.08)`, color: hex }}
    >
      <span className="relative flex" style={{ width: "10px", height: "10px" }}>
        {isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: hex }} />
        )}
        <span className="relative inline-flex rounded-full h-full w-full"
          style={{ backgroundColor: hex }} />
      </span>
      {label}
      {sublabel && (
        <>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
          <span className="font-normal" style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px" }}>
            {sublabel}
          </span>
        </>
      )}
    </div>
  );
}

// ── BRANCH CARD ────────────────────────────────────────────────────────────

function BranchCard({ branch }: { branch: (typeof branches)[0] }) {
  const { isOpen, label, sublabel } = useOpenStatus();
  const hex = isOpen ? "#4ade80" : "#f87171";
  const col = isOpen ? "rgba(74,222,128," : "rgba(248,113,113,";

  return (
    <GlassCard className="p-8">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-white font-bold text-lg mb-1"
            style={{ fontFamily: "var(--font-playfair),serif" }}>
            {branch.city}
          </h3>
          <p className="text-white/40 text-[13px] leading-relaxed">{branch.address}</p>
        </div>

        {/* Dynamic badge */}
        <div className="flex flex-col items-end gap-1 ml-4 flex-shrink-0">
          <span
            className="px-3 py-1 rounded-full text-[11px] font-semibold border flex items-center gap-1.5"
            style={{ borderColor: `${col}0.4)`, background: `${col}0.08)`, color: hex }}
          >
            <span className="relative flex" style={{ width: "7px", height: "7px" }}>
              {isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: hex }} />
              )}
              <span className="relative inline-flex rounded-full h-full w-full"
                style={{ backgroundColor: hex }} />
            </span>
            {label}
          </span>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            {sublabel}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-white/50">
          <Clock size={14} className="text-gold flex-shrink-0" />
          Every Day: 11:00 AM – 9:00 PM
        </div>
        <div className="flex items-center gap-3 text-sm text-white/50">
          <Phone size={14} className="text-gold flex-shrink-0" />
          <a href={`tel:${branch.phone.replace(/\s/g, "")}`}
            className="hover:text-gold transition-colors no-underline">
            {branch.phone}
          </a>
        </div>
      </div>

      <a href={branch.mapHref} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gold text-sm font-semibold no-underline hover:underline transition-all">
        <MapPin size={14} /> Get Directions <ArrowRight size={14} />
      </a>
    </GlassCard>
  );
}

// ── FAQ ACCORDION ──────────────────────────────────────────────────────────

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} custom={index} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <GlassCard className={`transition-all duration-300 ${open ? "border-gold/30" : ""}`}>
        <button
          className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
          onClick={() => setOpen(!open)}>
          <span className="text-white font-semibold text-[15px] pr-4 leading-snug">{question}</span>
          <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} className="text-gold flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
              className="overflow-hidden">
              <p className="px-6 pb-6 text-white/50 text-sm leading-[1.8]">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}

// ── BEFORE & AFTER GALLERY ─────────────────────────────────────────────────

function BeforeAfterGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab,   setActiveTab]   = useState("All");
  const [sliderPos,   setSliderPos]   = useState(50);
  const [isDragging,  setIsDragging]  = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref          = useRef(null);
  const isInView     = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeTab === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeTab);
  const current  = filtered[activeIndex] ?? filtered[0];

  const handleTabChange = (tab: string) => { setActiveTab(tab); setActiveIndex(0); setSliderPos(50); };
  const handleSlide = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSliderPos(Math.min(95, Math.max(5, ((clientX - rect.left) / rect.width) * 100)));
  };
  const prev = () => { setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length); setSliderPos(50); };
  const next = () => { setActiveIndex((i) => (i + 1) % filtered.length); setSliderPos(50); };

  return (
    <section id="gallery" className="py-24" style={{ background: "linear-gradient(180deg,#060606 0%,#0A0A0A 100%)" }}>
      <div className="w-full max-w-7xl mx-auto px-6">
        <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <SectionHeader eyebrow="Before & After" title="Our" highlight="Results Speak" />
          <p className="text-center text-white/35 text-[13px] -mt-10 mb-12">
            Drag the slider to reveal the transformation ✦
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div className="flex items-center justify-center gap-2.5 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
          {allCategories.map((tab) => (
            <button key={tab} onClick={() => handleTabChange(tab)}
              className="px-5 py-2 rounded-full text-[13px] font-medium tracking-wide border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: activeTab === tab ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)",
                background:  activeTab === tab ? "rgba(201,168,76,0.1)" : "rgba(255,255,255,0.02)",
                color:       activeTab === tab ? "#C9A84C"              : "rgba(255,255,255,0.5)",
              }}>
              {tab}
            </button>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
          {/* Slider */}
          <div ref={containerRef}
            className="relative rounded-2xl overflow-hidden cursor-ew-resize select-none border border-gold/15"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={(e) => { if (isDragging) handleSlide(e.clientX); }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={(e) => handleSlide(e.touches[0].clientX)}>
            <div className="relative w-full h-[420px] md:h-[500px]">
              <img src={current.before} alt="Before" draggable={false} className="absolute inset-0 w-full h-full object-cover" />
              <img src={current.after}  alt="After"  draggable={false} className="absolute inset-0 w-full h-full object-cover"
                style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }} />
              {/* Divider */}
              <div className="absolute top-0 bottom-0 w-0.5 z-10 pointer-events-none"
                style={{ left: `${sliderPos}%`, background: "#C9A84C", boxShadow: "0 0 12px rgba(201,168,76,0.6)", transform: "translateX(-50%)" }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "#C9A84C", boxShadow: "0 0 0 4px rgba(201,168,76,0.25),0 4px 20px rgba(0,0,0,0.5)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5L3 12L8 19M16 5L21 12L16 19" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-md text-[11px] font-semibold tracking-widest uppercase backdrop-blur-md text-white/70 border border-white/10 bg-black/70">Before</span>
              <span className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-md text-[11px] font-semibold tracking-widest uppercase backdrop-blur-md text-gold border border-gold/40 bg-gold/20">After</span>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-lg text-[12px] text-white/70 whitespace-nowrap backdrop-blur-md border border-gold/20 bg-black/75 tracking-wide">
                {current.label}
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-5 justify-center flex-wrap">
            {filtered.map((item, i) => (
              <div key={i} onClick={() => { setActiveIndex(i); setSliderPos(50); }}
                className="w-20 h-14 rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  border:    i === activeIndex ? "1px solid #C9A84C"             : "1px solid rgba(255,255,255,0.06)",
                  opacity:   i === activeIndex ? 1                               : 0.5,
                  boxShadow: i === activeIndex ? "0 0 12px rgba(201,168,76,0.3)" : "none",
                }}>
                <img src={item.after} alt={item.label} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center text-gold border border-gold/20 bg-white/[0.04] hover:bg-gold/12 hover:border-gold/50 transition-all duration-300 cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex gap-2 items-center">
              {filtered.map((_, i) => (
                <div key={i} onClick={() => { setActiveIndex(i); setSliderPos(50); }}
                  className="h-2 rounded-full cursor-pointer transition-all duration-300"
                  style={{ width: i === activeIndex ? "24px" : "8px", background: i === activeIndex ? "#C9A84C" : "rgba(255,255,255,0.15)" }} />
              ))}
            </div>
            <button onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center text-gold border border-gold/20 bg-white/[0.04] hover:bg-gold/12 hover:border-gold/50 transition-all duration-300 cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function Home() {
  const servicesRef     = useRef(null);
  const whyUsRef        = useRef(null);
  const processRef      = useRef(null);
  const testimonialsRef = useRef(null);
  const brandsRef       = useRef(null);
  const branchesRef     = useRef(null);
  const ctaRef          = useRef(null);
  const contactRef      = useRef(null);

  const sInView   = useInView(servicesRef,     { once: true, margin: "-80px" });
  const wInView   = useInView(whyUsRef,         { once: true, margin: "-80px" });
  const pInView   = useInView(processRef,       { once: true, margin: "-80px" });
  const tInView   = useInView(testimonialsRef,  { once: true, margin: "-80px" });
  const bInView   = useInView(brandsRef,        { once: true, margin: "-80px" });
  const brInView  = useInView(branchesRef,      { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef,           { once: true, margin: "-80px" });
  const cInView   = useInView(contactRef,       { once: true, margin: "-80px" });

  return (
    <main>
      <Navbar />

{/* ── HERO ────────────────────────────────────────────────────────── */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
  style={{ background: "#050505" }}
>
  {/* Full background image */}
  <div
    className="absolute inset-0 bg-cover bg-center pointer-events-none"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1800&q=85')",
      opacity: 0.18,
    }}
  />

  {/* Dark vignette overlay */}
  <div className="absolute inset-0 pointer-events-none"
    style={{ background: "radial-gradient(ellipse at center,transparent 20%,rgba(0,0,0,0.85) 100%)" }} />

  {/* Gold radial glow */}
  <div className="absolute inset-0 pointer-events-none"
    style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.07) 0%,transparent 65%)" }} />

  {/* Top rule */}
  <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
    style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.25),transparent)" }} />

  {/* Bottom rule */}
  <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
    style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.12),transparent)" }} />

  {/* Left vertical accent */}
  <div className="absolute top-0 bottom-0 w-px pointer-events-none"
    style={{ left: "8%", background: "linear-gradient(to bottom,transparent,rgba(201,168,76,0.12),transparent)" }} />

  {/* Right vertical accent */}
  <div className="absolute top-0 bottom-0 w-px pointer-events-none"
    style={{ right: "8%", background: "linear-gradient(to bottom,transparent,rgba(201,168,76,0.12),transparent)" }} />

  {/* ── CONTENT ── */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">

    {/* Badge */}
    <motion.div
      className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1.5 mb-10 bg-gold/[0.06] backdrop-blur-sm text-gold text-[10px] tracking-[0.25em] uppercase"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
      <Star size={11} fill="#C9A84C" />
      168+ Google Reviews · 4 Branches in Dubai &amp; Sharjah
      <Star size={11} fill="#C9A84C" />
    </motion.div>

    {/* H1 */}
    <motion.h1
      className="font-bold text-white leading-[1.05] mb-6"
      style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(3.5rem,8vw,7rem)" }}
      initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }}>
      Expert Car Care
      <span className="gold-text block">&amp; Protection</span>
    </motion.h1>

    {/* Divider line */}
    <motion.div
      className="flex items-center gap-4 mb-6 w-full justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
      <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.5))" }} />
      <span className="text-gold/60 text-[10px] tracking-[0.25em] uppercase">
        Window Tinting · PPF · Ceramic Coating · Detailing · Wrapping
      </span>
      <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to left,transparent,rgba(201,168,76,0.5))" }} />
    </motion.div>

    {/* Description */}
    <motion.p
      className="text-white/50 leading-[1.9] mb-10 max-w-xl"
      style={{ fontSize: "clamp(0.95rem,1.4vw,1.1rem)" }}
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
      At Smart Auto, we redefine excellence in automotive detailing and window protection —
      combining cutting-edge technology with a commitment to perfection across
      4 branches in Dubai &amp; Sharjah.
    </motion.p>

    {/* Branch names */}
    <motion.p
      className="text-gold/55 text-[12px] tracking-[0.18em] uppercase mb-10"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.78 }}>
      MotorCity · Al Quoz · Mirdif · Sharjah Central Mall
    </motion.p>

    {/* CTAs */}
    <motion.div
      className="flex items-center justify-center gap-4 flex-wrap mb-16"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
      <GoldBtn href="#services">Explore Services <ArrowRight size={15} /></GoldBtn>
      <OutlineBtn href="https://wa.me/971555559424">
        <Phone size={14} /> WhatsApp Us
      </OutlineBtn>
    </motion.div>

    {/* Stats */}
    <motion.div
      className="grid grid-cols-4 border-t border-gold/15 pt-8 w-full max-w-md"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
      {[
        { value: "168+", label: "Google Reviews" },
        { value: "4",    label: "Branches" },
        { value: "10+",  label: "Years in UAE" },
        { value: "5★",   label: "Avg Rating" },
      ].map((s, i) => (
        <div key={s.label}
          className={`text-center px-3 ${i !== 3 ? "border-r border-gold/15" : ""}`}>
          <div className="gold-text font-bold leading-none mb-1.5"
            style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.4rem,2.5vw,2rem)" }}>
            {s.value}
          </div>
          <div className="text-white/35 text-[9px] tracking-[0.12em] uppercase">{s.label}</div>
        </div>
      ))}
    </motion.div>
  </div>

  {/* Scroll indicator */}
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
    animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
    <span className="text-[9px] tracking-[0.2em] uppercase text-gold/40">Scroll</span>
    <ChevronDown size={22} className="text-gold/45" />
  </motion.div>
</section>


      {/* ── MARQUEE STRIP ───────────────────────────────────────────────── */}
      <div className="overflow-hidden py-4 border-t border-b border-gold/8 bg-gold/[0.03]">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...stripItems, ...stripItems, ...stripItems].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[11px] tracking-[0.15em] uppercase text-gold/55 flex-shrink-0">
              <div className="w-1 h-1 rounded-full bg-gold" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section id="services" className="py-24" style={{ background: "linear-gradient(180deg,#080808 0%,#0A0A0A 100%)" }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div ref={servicesRef} variants={fadeUp} initial="hidden" animate={sInView ? "show" : "hidden"}>
            <SectionHeader eyebrow="Elevate · Protect · Personalise" title="All Our" highlight="Services" />
            <p className="text-center text-white/40 text-sm -mt-10 mb-14 max-w-2xl mx-auto leading-relaxed">
              Premium automotive care and window tinting solutions designed to protect, enhance, and elevate
              your vehicle and property — available across all 4 branches.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp} custom={i} initial="hidden" animate={sInView ? "show" : "hidden"}>
                <GlassCard className="p-8 h-full group">
                  <div className="rounded-xl overflow-hidden h-44 mb-6">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gold/8 border border-gold/20 flex items-center justify-center mb-5 text-gold transition-all duration-300 group-hover:bg-gold/18 group-hover:border-gold/50">
                    <s.icon size={24} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2.5 transition-colors duration-300 group-hover:text-gold">{s.title}</h3>
                  <p className="text-white/45 text-[13px] leading-[1.7] mb-4">{s.description}</p>
                  <ul className="flex flex-col gap-2 mb-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[12px] text-white/45">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={s.href} className="inline-flex items-center gap-1.5 text-gold text-[13px] font-semibold no-underline hover:gap-3 transition-all duration-300">
                    Explore <ArrowRight size={14} />
                  </a>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: "linear-gradient(to right,#C9A84C,#E8C96A)" }} />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section id="why-us" className="py-24" style={{ backgroundColor: "#060606" }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <div ref={whyUsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeLeft} initial="hidden" animate={wInView ? "show" : "hidden"}>
              <span className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4 block">Why Choose Smart Auto</span>
              <h2 className="text-white font-bold mb-5 leading-[1.2]"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>
                Comprehensive Automotive<br /><span className="gold-text">&amp; Tinting Solutions</span>
              </h2>
              <p className="text-white/50 text-base leading-[1.8] mb-7">
                At Smart Auto UAE, we specialise in delivering professional car care and protection
                for every need — from luxury vehicles to everyday cars, and residential to commercial
                properties. Our goal is to enhance both the aesthetics and durability of your vehicle and property.
              </p>
              <div className="flex flex-col gap-3.5 mb-9">
                {[
                  "Authorised installers for XPEL, TotalGard, 3M & Llumar",
                  "All works backed by manufacturer warranty",
                  "4 branches — MotorCity, Al Quoz, Mirdif & Sharjah",
                  "Free inspection & no hidden charges",
                  "Open every day 11AM – 9PM",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    <span className="text-white/60 text-sm">{p}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <GoldBtn href="/contact">Get a Free Quote <ArrowRight size={16} /></GoldBtn>
                <OutlineBtn href="https://wa.me/971555559424"><Phone size={15} /> WhatsApp</OutlineBtn>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" animate={wInView ? "show" : "hidden"}>
              <div className="grid grid-cols-2 gap-3.5" style={{ gridTemplateRows: "260px 260px" }}>
                <div className="rounded-2xl overflow-hidden border border-gold/10 relative row-span-2 group">
                  <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80" alt="XPEL PPF installation Dubai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-3.5 left-3.5 text-[10px] tracking-[0.15em] uppercase text-gold px-3 py-1 rounded-md border border-gold/20 bg-black/80 backdrop-blur-sm">Totalgard PPF</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold/10 relative group">
                  <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80" alt="Nano ceramic coating UAE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-3.5 left-3.5 text-[10px] tracking-[0.15em] uppercase text-gold px-3 py-1 rounded-md border border-gold/20 bg-black/80 backdrop-blur-sm">Ceramic Coating</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold/10 relative group">
                  <img src="https://images.unsplash.com/photo-1617531653332-bd46c16f7d5e?w=600&q=80" alt="Car window tinting Dubai Sharjah" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-3.5 left-3.5 text-[10px] tracking-[0.15em] uppercase text-gold px-3 py-1 rounded-md border border-gold/20 bg-black/80 backdrop-blur-sm">Window Tinting</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {whyFeatures.map((f, i) => (
              <motion.div key={f.title} variants={fadeUp} custom={i} initial="hidden" animate={wInView ? "show" : "hidden"}>
                <GlassCard className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center text-gold mb-3.5">
                    <f.icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-1.5">{f.title}</h3>
                  <p className="text-white/40 text-[12px] leading-[1.6]">{f.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section id="process" className="py-24" style={{ background: "linear-gradient(180deg,#080808 0%,#0A0A0A 100%)" }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div ref={processRef} variants={fadeUp} initial="hidden" animate={pInView ? "show" : "hidden"}>
            <SectionHeader eyebrow="Simple Process" title="How It" highlight="Works" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="absolute top-9 left-[12%] w-[76%] h-px pointer-events-none hidden lg:block"
              style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.25),transparent)" }} />
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} custom={i} initial="hidden" animate={pInView ? "show" : "hidden"}>
                <GlassCard className="p-9 text-center">
                  <div className="rounded-full bg-gold/6 border border-gold/25 flex items-center justify-center mx-auto mb-5 text-gold"
                    style={{ width: "72px", height: "72px", fontFamily: "var(--font-playfair),serif", fontSize: "22px", fontWeight: 700 }}>
                    {step.num}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2.5">{step.title}</h3>
                  <p className="text-white/40 text-[13px] leading-[1.6]">{step.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ──────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "#060606" }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div ref={brandsRef} variants={fadeUp} initial="hidden" animate={bInView ? "show" : "hidden"}>
            <SectionHeader eyebrow="Trusted Products" title="Brands We" highlight="Work With" />
          </motion.div>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {brands.map((brand, i) => (
              <motion.div key={brand}
                className="px-6 py-2.5 rounded-full border border-gold/15 bg-white/[0.03] text-white/45 text-[13px] font-semibold tracking-wide transition-all duration-300 hover:border-gold/50 hover:text-gold hover:bg-gold/6 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }} animate={bInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.07 }}>
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-24" style={{ backgroundColor: "#080808" }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div ref={testimonialsRef} variants={fadeUp} initial="hidden" animate={tInView ? "show" : "hidden"}>
            <SectionHeader eyebrow="168+ Google Reviews" title="What Our" highlight="Clients Say" />
            <div className="flex items-center justify-center gap-2 -mt-10 mb-14">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#C9A84C" className="text-gold" />)}
              <span className="text-white/50 text-sm ml-2">4.9 / 5 · Smart Auto UAE</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} variants={fadeUp} custom={i} initial="hidden" animate={tInView ? "show" : "hidden"}>
                <GlassCard className="p-9">
                  <div className="text-gold/15 mb-4 leading-none"
                    style={{ fontFamily: "var(--font-playfair),serif", fontSize: "64px" }}>&ldquo;</div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} fill="#C9A84C" className="text-gold" />)}
                  </div>
                  <span className="text-white/25 text-[11px] mb-3 block">{t.date} · Google Review</span>
                  <p className="text-white/55 text-sm leading-[1.8] mb-6">{t.text}</p>
                  <hr className="border-white/6 mb-4" />
                  <div className="text-white font-semibold text-[15px]">{t.name}</div>
                  <div className="text-gold/65 text-[12px] mt-1">{t.role}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center mt-10"
            variants={fadeUp} initial="hidden" animate={tInView ? "show" : "hidden"}>
            <a href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJCdS_zpdgXz4RQnybWU1inTA"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-sm font-semibold border border-gold/25 px-6 py-2.5 rounded-full bg-gold/5 hover:bg-gold/12 transition-all duration-300 no-underline">
              <Star size={14} fill="#C9A84C" /> Write a Google Review
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────────── */}
      <BeforeAfterGallery />

      {/* ── BRANCHES ────────────────────────────────────────────────────── */}
      <section id="branches" className="py-24" style={{ background: "linear-gradient(180deg,#060606 0%,#0A0A0A 100%)" }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div ref={branchesRef} variants={fadeUp} initial="hidden" animate={brInView ? "show" : "hidden"}>
            <SectionHeader eyebrow="4 Convenient Locations" title="Find Us in" highlight="Dubai & Sharjah" />
          </motion.div>

          {/* Global live status bar */}
          <motion.div className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 10 }} animate={brInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
            <StatusBadge size="md" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch, i) => (
              <motion.div key={branch.city} variants={fadeUp} custom={i} initial="hidden" animate={brInView ? "show" : "hidden"}>
                <BranchCard branch={branch} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="w-full max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionHeader eyebrow="FAQ" title="Frequently Asked" highlight="Questions" />
          </motion.div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#060606" }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div ref={ctaRef}
            className="relative rounded-3xl p-16 md:p-20 text-center overflow-hidden backdrop-blur-sm border border-gold/20"
            style={{ background: "linear-gradient(135deg,rgba(201,168,76,0.1) 0%,rgba(201,168,76,0.04) 50%,rgba(201,168,76,0.08) 100%)" }}
            variants={fadeUp} initial="hidden" animate={ctaInView ? "show" : "hidden"}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.06) 0%,transparent 60%)" }} />
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 relative z-10">
              4 Branches · Open Every Day 11AM – 9PM
            </p>
            <h2 className="text-white font-bold mb-4 relative z-10"
              style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2rem,4vw,3rem)" }}>
              Ready to Transform<br /><span className="gold-text">Your Car?</span>
            </h2>
            <p className="text-white/50 text-base mb-6 max-w-lg mx-auto relative z-10">
              Book at any of our 4 branches — MotorCity, Al Quoz, Mirdif (Dubai) or Sharjah Central Mall.
              Free inspection with every service. No hidden charges.
            </p>
            <div className="flex justify-center mb-9 relative z-10">
              <StatusBadge size="md" />
            </div>
            <div className="flex gap-4 justify-center flex-wrap relative z-10">
              <GoldBtn href="https://wa.me/971555559424">Book on WhatsApp <ArrowRight size={16} /></GoldBtn>
              <OutlineBtn href="tel:+971555559424"><Phone size={16} /> +971 55 555 9424</OutlineBtn>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div ref={contactRef} variants={fadeUp} initial="hidden" animate={cInView ? "show" : "hidden"}>
            <SectionHeader eyebrow="Get In Touch" title="Book Your" highlight="Appointment" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
            {/* Info column */}
            <motion.div variants={fadeLeft} initial="hidden" animate={cInView ? "show" : "hidden"}>
              <p className="text-white/50 text-base leading-[1.8] mb-8">
                Reach out via any channel — our team responds within the hour. Walk-ins welcome at all 4 branches.
              </p>
              <div className="flex flex-col gap-3.5">
                {contactItems.map((item) => (
                  <motion.a key={item.label} href={item.href}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl no-underline"
                    whileHover={{ x: 6, borderColor: "rgba(201,168,76,0.3)" }} transition={{ duration: 0.2 }}>
                    <div className="w-12 h-12 min-w-[48px] rounded-xl bg-gold/8 border border-gold/20 flex items-center justify-center text-gold">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.12em] text-white/35 mb-0.5">{item.label}</div>
                      <div className="text-white text-[15px]">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Form column */}
            <motion.form
              className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl p-10"
              onSubmit={(e) => e.preventDefault()}
              variants={fadeRight} initial="hidden" animate={cInView ? "show" : "hidden"}>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {["Full Name", "Phone Number"].map((f) => (
                  <div key={f}>
                    <label className="block text-[10px] uppercase tracking-[0.12em] text-white/35 mb-2">{f}</label>
                    <input type="text" placeholder={f}
                      className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-gold/45 focus:bg-gold/[0.03] transition-all duration-300" />
                  </div>
                ))}
              </div>
              {[
                { label: "Email Address",  type: "email", placeholder: "your@email.com" },
                { label: "Your Car Model", type: "text",  placeholder: "e.g. Toyota Camry 2023" },
              ].map((f) => (
                <div key={f.label} className="mb-5">
                  <label className="block text-[10px] uppercase tracking-[0.12em] text-white/35 mb-2">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-gold/45 focus:bg-gold/[0.03] transition-all duration-300" />
                </div>
              ))}
              <div className="mb-5">
                <label className="block text-[10px] uppercase tracking-[0.12em] text-white/35 mb-2">Preferred Branch</label>
                <select className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold/45 transition-all duration-300" style={{ colorScheme: "dark" }}>
                  <option value="">Select Branch</option>
                  <option>MotorCity — Dubai</option>
                  <option>Al Quoz — Dubai</option>
                  <option>Mirdif (Uptown Mall) — Dubai</option>
                  <option>Central Mall — Sharjah</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block text-[10px] uppercase tracking-[0.12em] text-white/35 mb-2">Service Needed</label>
                <select className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold/45 transition-all duration-300" style={{ colorScheme: "dark" }}>
                  <option value="">Select a Service</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-[10px] uppercase tracking-[0.12em] text-white/35 mb-2">Message</label>
                <textarea rows={4} placeholder="Tell us more about your requirements..."
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-gold/45 focus:bg-gold/[0.03] transition-all duration-300 resize-none" />
              </div>
              <GoldBtn href="#" className="w-full !flex">
                Send Message <ArrowRight size={16} />
              </GoldBtn>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

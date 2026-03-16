"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Star, Zap, ChevronLeft, ChevronRight } from "lucide-react";

// ── CONSTANTS ──────────────────────────────────────────────────────────────

const gold     = "#C9A84C";
const goldGrad = "linear-gradient(135deg,#C9A84C,#E8C96A)";

// ── TYPES ──────────────────────────────────────────────────────────────────

type BaseItem = {
  id: number;
  category: string;
  tag: string;
  location: string;
  size: "normal" | "wide" | "tall";
};

type BeforeAfterItem = BaseItem & {
  type: "beforeafter";
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
};

type SmartFilmItem = BaseItem & {
  type: "smartfilm";
  onSrc: string;
  offSrc: string;
  onAlt: string;
  offAlt: string;
};

type GalleryItem = BeforeAfterItem | SmartFilmItem;

// ── DATA ───────────────────────────────────────────────────────────────────

const items: GalleryItem[] = [
  // ── CAR TINTING ────────────────────────────────────────────────────────
  {
    id: 1,
    type: "beforeafter",
    category: "car",
    tag: "Color PPF",
    location: "MotorCity, Dubai",
    size: "wide",
    before: "/images/gallery/color-ppf-before.webp",
    after:  "/images/gallery/color-ppf-after.webp",
    beforeAlt: "Car window before tinting - clear glass - Smart Auto UAE",
    afterAlt:  "Car window after tinting - 3M ceramic film - Smart Auto UAE",
    beforeLabel: "Before",
    afterLabel:  "After",
  },
  {
    id: 2,
    type: "beforeafter",
    category: "car",
    tag: "Ceramic Coating",
    location: "Al Quoz, Dubai",
    size: "normal",
    before: "/images/gallery/ceramic-coating-before-1.webp",
    after:  "/images/gallery/ceramic-coating-after-1.webp",
    beforeAlt: "Sedan before tinting Dubai",
    afterAlt:  "Sedan after tinting Dubai - Global USA film",
    beforeLabel: "Before",
    afterLabel:  "After",
  },
  {
    id: 3,
    type: "beforeafter",
    category: "car",
    tag: "Car Tinting",
    location: "Sharjah",
    size: "normal",
    before: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    beforeAlt: "SUV before tinting Sharjah",
    afterAlt:  "SUV after tinting Sharjah - Smart Auto UAE",
    beforeLabel: "Before",
    afterLabel:  "After - 3M FX",
  },
  {
    id: 4,
    type: "beforeafter",
    category: "car",
    tag: "Car Tinting",
    location: "Mirdif, Dubai",
    size: "normal",
    before: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    beforeAlt: "Coupe before tinting Mirdif Dubai",
    afterAlt:  "Coupe after tinting Mirdif Dubai",
    beforeLabel: "Before",
    afterLabel:  "After - Totalgard",
  },

  // ── VILLA TINTING ──────────────────────────────────────────────────────
  {
    id: 5,
    type: "beforeafter",
    category: "villa",
    tag: "Villa Tinting",
    location: "Arabian Ranches, Dubai",
    size: "wide",
    before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    after:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    beforeAlt: "Villa windows before tinting Dubai",
    afterAlt:  "Villa windows after tinting Dubai - 3M heat rejection",
    beforeLabel: "Before - No Film",
    afterLabel:  "After - 3M Heat Rejection",
  },
  {
    id: 6,
    type: "beforeafter",
    category: "villa",
    tag: "Villa Tinting",
    location: "JVC, Dubai",
    size: "tall",
    before: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    beforeAlt: "Villa before window film JVC Dubai",
    afterAlt:  "Villa after window film JVC Dubai - privacy tinting",
    beforeLabel: "Before",
    afterLabel:  "After - Privacy Film",
  },
  {
    id: 7,
    type: "beforeafter",
    category: "villa",
    tag: "Villa Tinting",
    location: "Jumeirah, Dubai",
    size: "normal",
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    beforeAlt: "Villa window before tinting Jumeirah",
    afterAlt:  "Villa window after tinting Jumeirah - Totalgard",
    beforeLabel: "Before",
    afterLabel:  "After - Totalgard",
  },

  // ── COMMERCIAL ────────────────────────────────────────────────────────
  {
    id: 8,
    type: "beforeafter",
    category: "commercial",
    tag: "Commercial",
    location: "Sheikh Zayed Road, Dubai",
    size: "wide",
    before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80",
    after:  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    beforeAlt: "Office building before window tinting Dubai",
    afterAlt:  "Office building after window tinting Dubai - solar control",
    beforeLabel: "Before - No Film",
    afterLabel:  "After - Solar Control",
  },
  {
    id: 9,
    type: "beforeafter",
    category: "commercial",
    tag: "Commercial",
    location: "Business Bay, Dubai",
    size: "normal",
    before: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    beforeAlt: "Commercial office before film installation",
    afterAlt:  "Commercial office after film installation - glare control",
    beforeLabel: "Before",
    afterLabel:  "After - Glare Control",
  },
  {
    id: 10,
    type: "beforeafter",
    category: "commercial",
    tag: "Commercial",
    location: "DIFC, Dubai",
    size: "normal",
    before: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    beforeAlt: "Commercial building before tinting DIFC",
    afterAlt:  "Commercial building after tinting DIFC",
    beforeLabel: "Before",
    afterLabel:  "After - 3M Commercial",
  },

  // ── SMART FILM ────────────────────────────────────────────────────────
  {
    id: 11,
    type: "smartfilm",
    category: "smart",
    tag: "Smart Film",
    location: "DIFC, Dubai",
    size: "wide",
    onSrc:  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    offSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    onAlt:  "Smart film ON - clear glass - office Dubai",
    offAlt: "Smart film OFF - frosted glass - office Dubai",
  },
  {
    id: 12,
    type: "smartfilm",
    category: "smart",
    tag: "Smart Film",
    location: "Business Bay, Dubai",
    size: "normal",
    onSrc:  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    offSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    onAlt:  "Smart film meeting room ON clear Dubai",
    offAlt: "Smart film meeting room OFF frosted Dubai",
  },
  {
    id: 13,
    type: "smartfilm",
    category: "smart",
    tag: "Smart Film",
    location: "Palm Jumeirah, Dubai",
    size: "normal",
    onSrc:  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    offSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    onAlt:  "Smart film villa ON clear Palm Jumeirah",
    offAlt: "Smart film villa OFF frosted Palm Jumeirah",
  },

  // ── SURFACE PROTECTION ────────────────────────────────────────────────
  {
    id: 14,
    type: "beforeafter",
    category: "surface",
    tag: "Surface Protection",
    location: "Dubai Villa",
    size: "wide",
    before: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
    after:  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    beforeAlt: "Marble floor without surface protection film",
    afterAlt:  "Marble floor protected with surface protection film",
    beforeLabel: "Without Protection",
    afterLabel:  "With Protection Film",
  },
  {
    id: 15,
    type: "beforeafter",
    category: "surface",
    tag: "Surface Protection",
    location: "Commercial Fit-Out, Dubai",
    size: "normal",
    before: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    beforeAlt: "Countertop scratched without protection",
    afterAlt:  "Countertop protected with surface film",
    beforeLabel: "Unprotected",
    afterLabel:  "Protected",
  },
];

// ── FILTER TABS ────────────────────────────────────────────────────────────

const filters = [
  { key: "all",        label: "All Projects" },
  { key: "car",        label: "Car Tinting" },
  { key: "villa",      label: "Villa Tinting" },
  { key: "commercial", label: "Commercial" },
  { key: "smart",      label: "Smart Film" },
  { key: "surface",    label: "Surface Protection" },
];

// ── REUSABLE BEFORE/AFTER SLIDER CORE ─────────────────────────────────────
// Used in both grid cards AND lightbox

function BeforeAfterSlider({
  item,
  defaultPos = 50,
}: {
  item: BeforeAfterItem;
  defaultPos?: number;
}) {
  const [sliderPos, setSliderPos] = useState(defaultPos);
  const [dragging, setDragging]   = useState(false);
  const containerRef              = useRef<HTMLDivElement>(null);

  const calcPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => { e.preventDefault(); setDragging(true); };
  const onMouseMove = useCallback((e: MouseEvent) => { if (dragging) calcPos(e.clientX); }, [dragging, calcPos]);
  const onMouseUp   = useCallback(() => setDragging(false), []);
  const onTouchMove = (e: React.TouchEvent) => calcPos(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      style={{ cursor: dragging ? "grabbing" : "col-resize" }}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => calcPos(e.touches[0].clientX)}>

      {/* AFTER - base layer */}
      <img
        src={item.after}
        alt={item.afterAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* BEFORE - clipped */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}>
        <img
          src={item.before}
          alt={item.beforeAlt}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${10000 / Math.max(sliderPos, 0.1)}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] pointer-events-none z-10"
        style={{ left: `${sliderPos}%`, background: "rgba(255,255,255,0.95)" }}
      />

      {/* Handle */}
      <div
  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center"
  style={{
          left: `${sliderPos}%`,
          background: "#fff",
          border: "2px solid rgba(201,168,76,0.7)",
          cursor: dragging ? "grabbing" : "grab",
          boxShadow: "0 0 0 4px rgba(201,168,76,0.2), 0 4px 16px rgba(0,0,0,0.5)",
        }}>
        <ChevronLeft  size={11} style={{ color: "#333", marginRight: "-1px" }} />
        <ChevronRight size={11} style={{ color: "#333", marginLeft:  "-1px" }} />
      </div>

      {/* BEFORE label */}
      <div
        className="absolute top-3 left-3 z-10 pointer-events-none px-2.5 py-1 rounded-full text-[10px] font-bold transition-opacity duration-200"
        style={{
          background: "rgba(0,0,0,0.72)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.85)",
          opacity: sliderPos < 14 ? 0 : 1,
        }}>
        {item.beforeLabel ?? "Before"}
      </div>

      {/* AFTER label */}
      <div
        className="absolute top-3 right-3 z-10 pointer-events-none px-2.5 py-1 rounded-full text-[10px] font-bold transition-opacity duration-200"
        style={{
          background: goldGrad,
          color: "#000",
          opacity: sliderPos > 86 ? 0 : 1,
        }}>
        {item.afterLabel ?? "After"}
      </div>
    </div>
  );
}

// ── SMART FILM TOGGLE ─────────────────────────────────────────────────────

function SmartFilmToggle({ item }: { item: SmartFilmItem }) {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* ON */}
      <motion.img
        src={item.onSrc}
        alt={item.onAlt}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ opacity: isOn ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        draggable={false}
      />

      {/* OFF - frosted */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isOn ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <img
          src={item.offSrc}
          alt={item.offAlt}
          className="w-full h-full object-cover"
          style={{ filter: "blur(14px) brightness(1.2) saturate(0.2)" }}
          draggable={false}
        />
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.22)" }} />
        <div className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.02) 3px,rgba(255,255,255,0.02) 4px)",
          }} />
      </motion.div>

      {/* Status pill */}
      <div className="absolute top-3 left-3 z-10">
        <motion.div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full backdrop-blur-md"
          style={{ border: "1px solid", background: "rgba(0,0,0,0.72)" }}
          animate={{ borderColor: isOn ? "rgba(74,222,128,0.5)" : "rgba(248,113,113,0.5)" }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            animate={{
              backgroundColor: isOn ? "#4ade80" : "#f87171",
              boxShadow: isOn ? "0 0 5px rgba(74,222,128,0.8)" : "0 0 5px rgba(248,113,113,0.8)",
            }} />
          <motion.span
            className="text-[10px] font-bold"
            animate={{ color: isOn ? "#4ade80" : "#f87171" }}>
            {isOn ? "ON · Clear" : "OFF · Frosted"}
          </motion.span>
        </motion.div>
      </div>

      {/* Toggle button */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={(e) => { e.stopPropagation(); setIsOn((v) => !v); }}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-[11px] cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background:   isOn ? "rgba(248,113,113,0.15)" : goldGrad,
            border:       isOn ? "1px solid rgba(248,113,113,0.4)" : "none",
            color:        isOn ? "#f87171" : "#000",
            boxShadow:    isOn ? "none" : "0 4px 14px rgba(201,168,76,0.4)",
            backdropFilter: "blur(8px)",
          }}>
          <Zap size={11} />
          {isOn ? "Turn OFF" : "Turn ON"}
        </button>
      </div>
    </div>
  );
}

// ── LIGHTBOX ───────────────────────────────────────────────────────────────

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{ background: "rgba(0,0,0,0.93)", backdropFilter: "blur(16px)" }}>

      <motion.div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden"
        initial={{ scale: 0.88, opacity: 0, y: 28 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 28 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{ border: "1px solid rgba(201,168,76,0.2)" }}>

        {/* Main content */}
        <div style={{ height: "65vh" }}>
          {item.type === "beforeafter"
            ? <BeforeAfterSlider item={item} defaultPos={50} />
            : <SmartFilmToggle item={item} />
          }
        </div>

        {/* Bottom bar */}
        <div className="px-7 py-5 flex items-center justify-between gap-4 flex-wrap"
          style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <div className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold mb-1.5"
              style={{ background: goldGrad, color: "#000" }}>
              {item.tag}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} style={{ color: gold }} />
              <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                {item.location}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill={gold} strokeWidth={0} style={{ color: gold }} />
              ))}
            </div>
            <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              {item.type === "beforeafter"
                ? "Drag the slider to compare before & after"
                : "Toggle the button to switch glass state"}
            </span>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
          style={{ background: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}>
          <X size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── GRID CARD - with live slider/toggle inline ─────────────────────────────

function GridCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const isSmart = item.type === "smartfilm";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative group rounded-2xl overflow-hidden"
      style={{
        gridColumn: item.size === "wide" ? "span 2" : "span 1",
        gridRow:    item.size === "tall" ? "span 2" : "span 1",
        border:     "1px solid rgba(255,255,255,0.06)",
      }}>

      {/* ── LIVE INTERACTIVE CONTENT ──────────────────────────────────── */}
      {isSmart
        ? <SmartFilmToggle item={item as SmartFilmItem} />
        : <BeforeAfterSlider item={item as BeforeAfterItem} defaultPos={50} />
      }

      {/* ── BOTTOM META BAR - always visible ─────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between gap-2"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
          paddingTop: "28px",
        }}>
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full text-[9px] font-bold"
            style={{ background: goldGrad, color: "#000" }}>
            {item.tag}
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={10} style={{ color: "rgba(255,255,255,0.45)" }} />
            <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.5)" }}>
              {item.location}
            </span>
          </div>
        </div>

        {/* Expand hint */}
        <button
          onClick={onClick}
          className="px-2.5 py-1 rounded-full text-[9px] font-semibold flex items-center gap-1 cursor-pointer transition-all duration-150 hover:scale-105 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(6px)",
          }}>
          ⛶ Expand
        </button>
      </div>
    </motion.div>
  );
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function GalleryGrid() {
  const [active,   setActive]   = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "all" ? items : items.filter(i => i.category === active);

  const openLightbox  = useCallback((item: GalleryItem) => setLightbox(item), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const counts: Record<string, number> = {
    all:        items.length,
    car:        items.filter(i => i.category === "car").length,
    villa:      items.filter(i => i.category === "villa").length,
    commercial: items.filter(i => i.category === "commercial").length,
    smart:      items.filter(i => i.category === "smart").length,
    surface:    items.filter(i => i.category === "surface").length,
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── FILTER TABS ─────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {filters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background:  isActive ? goldGrad : "rgba(255,255,255,0.03)",
                  border:      isActive ? "none"   : "1px solid rgba(255,255,255,0.08)",
                  color:       isActive ? "#000"   : "rgba(255,255,255,0.5)",
                  boxShadow:   isActive ? "0 4px 14px rgba(201,168,76,0.3)" : "none",
                }}>
                {f.label}
                <span
                  className="px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                  style={{
                    background: isActive ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.06)",
                    color:      isActive ? "#000"             : "rgba(255,255,255,0.35)",
                  }}>
                  {counts[f.key]}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── LEGEND ──────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            <span>↔</span> Drag to compare before &amp; after
          </div>
          <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div className="flex items-center gap-2 text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            <Zap size={12} style={{ color: gold }} /> Toggle for smart film
          </div>
        </div>

        {/* ── GRID ────────────────────────────────────────────────────── */}
        <motion.div
          layout
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gridAutoRows: "260px",
          }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <GridCard
                key={item.id}
                item={item}
                onClick={() => openLightbox(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── LIGHTBOX ─────────────────────────────────────────────────── */}
        <AnimatePresence>
          {lightbox && (
            <Lightbox item={lightbox} onClose={closeLightbox} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

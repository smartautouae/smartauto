"use client";

import { useState, useEffect } from "react";
import { MapPin, X, ChevronDown } from "lucide-react";

// ── TYPES ──────────────────────────────────────────────────────────────────

export type Branch = {
  name: string;
  area: string;
  phone: string;
  whatsapp: string;
};

type Props = {
  branch: Branch | null;
  serviceName: string;           // e.g. "Car Window Tinting"
  onClose: () => void;
};

type FormData = {
  name: string;
  phone: string;
  carBrand: string;
  carModel: string;
  carType: string;
  carTypeOther: string;
  message: string;
};

// ── CONSTANTS ──────────────────────────────────────────────────────────────

const gold     = "#C9A84C";
const goldGrad = "linear-gradient(135deg,#C9A84C,#E8C96A)";

const CAR_TYPES = [
  "Sedan",
  "SUV",
  "Coupe",
  "Hatchback",
  "Pickup Truck",
  "Van / Minivan",
  "Sports Car",
  "Luxury Car",
  "Electric Vehicle",
  "Others",
];

const EMPTY_FORM: FormData = {
  name: "",
  phone: "",
  carBrand: "",
  carModel: "",
  carType: "",
  carTypeOther: "",
  message: "",
};

// ── INPUT STYLE HELPERS ────────────────────────────────────────────────────

const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#fff",
};

function InputField({
  label,
  required = true,
  optional = false,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-[11px] tracking-[0.15em] uppercase mb-2"
        style={{ color: "rgba(255,255,255,0.4)" }}>
        {label}{" "}
        {required && !optional && <span style={{ color: gold }}>*</span>}
        {optional && (
          <span style={{ color: "rgba(255,255,255,0.2)" }}>(optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

// ── WHATSAPP SVG ───────────────────────────────────────────────────────────

function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── BOOKING MODAL ──────────────────────────────────────────────────────────

export default function BookingModal({ branch, serviceName, onClose }: Props) {
  const [form, setForm]           = useState<FormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  // Reset form each time a new branch is opened
  useEffect(() => {
    if (branch) {
      setForm(EMPTY_FORM);
      setSubmitted(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [branch]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!branch) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const focusStyle  = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.45)");
  const blurStyle   = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)");

  const sharedInputClass =
    "w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const carTypeLabel =
      form.carType === "Others" && form.carTypeOther
        ? form.carTypeOther
        : form.carType;

    const text = [
      `Hi Smart Auto UAE (${branch.name}),`,
      ``,
      `*Service:* ${serviceName}`,
      `*Branch:* ${branch.name}, ${branch.area}`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Car Brand:* ${form.carBrand}`,
      `*Car Model:* ${form.carModel}`,
      `*Car Type:* ${carTypeLabel}`,
      form.message ? `*Notes:* ${form.message}` : "",
      ``,
      `Please confirm my booking. Thank you!`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(
      `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>

      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden"
        style={{
          background: "#0E0E0E",
          border: "1px solid rgba(201,168,76,0.2)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.85)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.55),transparent)" }} />

        {/* ── HEADER ───────────────────────────────────────────────────── */}
        <div
          className="flex items-start justify-between px-7 pt-7 pb-5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <MapPin size={13} style={{ color: gold }} />
              <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: gold }}>
                {branch.area}
              </span>
            </div>
            <h3
              className="font-bold text-[22px] leading-tight"
              style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
              Book in {branch.name}
            </h3>
            <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
              {serviceName} · Smart Auto UAE
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors hover:bg-white/10 ml-4"
            style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
            <X size={16} />
          </button>
        </div>

        {/* ── FORM ─────────────────────────────────────────────────────── */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4">

            {/* Name */}
            <InputField label="Your Name">
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Ahmed Al Mansouri"
                value={form.name}
                onChange={handleChange}
                onFocus={focusStyle}
                onBlur={blurStyle}
                className={sharedInputClass}
                style={inputBase}
              />
            </InputField>

            {/* Phone */}
            <InputField label="Phone Number">
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. +971 55 123 4567"
                value={form.phone}
                onChange={handleChange}
                onFocus={focusStyle}
                onBlur={blurStyle}
                className={sharedInputClass}
                style={inputBase}
              />
            </InputField>

            {/* Car Brand + Car Model */}
            <div className="grid grid-cols-2 gap-3">
              <InputField label="Car Brand">
                <input
                  type="text"
                  name="carBrand"
                  required
                  placeholder="e.g. Toyota"
                  value={form.carBrand}
                  onChange={handleChange}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  className={sharedInputClass}
                  style={inputBase}
                />
              </InputField>
              <InputField label="Car Model">
                <input
                  type="text"
                  name="carModel"
                  required
                  placeholder="e.g. Land Cruiser"
                  value={form.carModel}
                  onChange={handleChange}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  className={sharedInputClass}
                  style={inputBase}
                />
              </InputField>
            </div>

            {/* Car Type dropdown */}
            <InputField label="Car Type">
              <div className="relative">
                <select
                  name="carType"
                  required
                  value={form.carType}
                  onChange={handleChange}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  className={`${sharedInputClass} appearance-none pr-10`}
                  style={{
                    ...inputBase,
                    color: form.carType ? "#fff" : "rgba(255,255,255,0.3)",
                  }}>
                  <option value="" disabled style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.4)" }}>
                    Select car type
                  </option>
                  {CAR_TYPES.map((t) => (
                    <option key={t} value={t} style={{ background: "#1a1a1a", color: "#fff" }}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                />
              </div>
            </InputField>

            {/* "Others" specify field — conditional */}
            {form.carType === "Others" && (
              <InputField label="Please Specify">
                <input
                  type="text"
                  name="carTypeOther"
                  required
                  placeholder="e.g. Limousine, Convertible..."
                  value={form.carTypeOther}
                  onChange={handleChange}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  className={sharedInputClass}
                  style={inputBase}
                />
              </InputField>
            )}

            {/* Additional notes */}
            <InputField label="Additional Notes" optional>
              <textarea
                name="message"
                rows={3}
                placeholder="Preferred date/time, specific requests, or questions..."
                value={form.message}
                onChange={handleChange}
                onFocus={focusStyle}
                onBlur={blurStyle}
                className={`${sharedInputClass} resize-none`}
                style={inputBase}
              />
            </InputField>

            {/* Disclaimer */}
            <p className="text-[11px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.2)" }}>
              Clicking "Send Enquiry" opens WhatsApp with your details pre-filled for the{" "}
              <span style={{ color: "rgba(201,168,76,0.6)" }}>{branch.name}</span> team.
              We'll confirm your booking promptly.
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-[14px] text-black transition-all duration-200 hover:opacity-90 active:scale-[0.98] mt-1"
              style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.25)" }}>
              <WaIcon size={16} />
              Send Enquiry via WhatsApp
            </button>

          </form>
        ) : (

          /* ── SUCCESS STATE ─────────────────────────────────────────── */
          <div className="px-7 py-14 flex flex-col items-center text-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke={gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4
              className="font-bold text-[22px]"
              style={{ fontFamily: "var(--font-playfair),serif", color: "#fff" }}>
              Enquiry Sent!
            </h4>
            <p className="text-[13px] leading-[1.8] max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Your booking enquiry for{" "}
              <span style={{ color: gold }}>{serviceName}</span> has been sent to our{" "}
              <span style={{ color: gold }}>{branch.name}</span> branch.
              Our team will get back to you on WhatsApp shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-10 py-3 rounded-full font-bold text-[13px] text-black"
              style={{ background: goldGrad }}>
              Done
            </button>
          </div>

        )}
      </div>
    </div>
  );
}

import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const carServices = [
  { label: "Car Window Tinting",        href: "/services/car-window-tinting-dubai-sharjah" },
  { label: "Paint Protection Film",     href: "/services/paint-protection-film-dubai-sharjah" },
  { label: "Colour PPF",                href: "/services/colour-ppf-dubai-sharjah" },
  { label: "Nano Ceramic Coating",      href: "/services/nano-ceramic-coating-dubai-sharjah" },
  { label: "Car Detailing & Polishing", href: "/services/car-detailing-polishing-dubai-sharjah" },
  { label: "Car Wrapping",              href: "/services/car-wrapping-dubai-sharjah" },
];

const propertyServices = [
  { label: "Villa Window Tinting",    href: "/services/villa-window-tinting-dubai-sharjah" },
  { label: "Commercial Tinting",      href: "/services/commercial-window-tinting-dubai-sharjah" },
  { label: "Switchable Smart Film",   href: "/services/switchable-smart-glass-film-dubai-sharjah" },
  { label: "Surface Protection Film", href: "/services/surface-protection-film-dubai-sharjah" },
];

const companyLinks = [
  { label: "Why Us",       href: "/why-us" },
  { label: "Gallery",      href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Branches",     href: "/branches" },
  { label: "Contact",      href: "/contact" },
];

const branches = [
  "MotorCity, Dubai",
  "Al Quoz, Dubai",
  "Mirdif · Uptown Mall, Dubai",
  "Central Mall, Sharjah",
];

// ── SOCIAL ICON SVGs ───────────────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/smartautouae", Icon: IconInstagram },
  { label: "WhatsApp",  href: "https://wa.me/971567269666",         Icon: IconWhatsApp },
  { label: "Facebook",  href: "#",                                  Icon: IconFacebook },
  { label: "Email",     href: "mailto:info@smartautouae.ae",        Icon: IconEmail },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: "#050505", borderColor: "rgba(201,168,76,0.1)" }}>
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* ── ROW 1 — Brand + Services ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-14 pb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>

          {/* Brand — full width on mobile, 2 cols on md+ */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="no-underline">
              <span className="gold-text font-bold block"
                style={{ fontFamily: "var(--font-playfair), serif", fontSize: "22px" }}>
                SMART AUTO
              </span>
              <span className="block text-[9px] tracking-[0.4em] uppercase mt-1 mb-4"
                style={{ color: "rgba(201,168,76,0.5)" }}>
                UAE
              </span>
            </Link>
            <p className="text-[13px] leading-[1.8] mb-5 max-w-sm"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              Dubai &amp; Sharjah's most trusted premium car care centre.
              Window tinting, PPF, ceramic coating, detailing &amp; more — all under one roof.
            </p>

            {/* Branches — 2 col grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
              {branches.map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <MapPin size={10} style={{ color: "rgba(201,168,76,0.5)", flexShrink: 0 }} />
                  <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{b}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+971567269666"
              className="inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-full border no-underline transition-all duration-300"
              style={{
                color: "#C9A84C",
                borderColor: "rgba(201,168,76,0.3)",
                background: "rgba(201,168,76,0.05)",
              }}>
              <Phone size={14} /> +971 567 269 666
            </a>
          </div>

          {/* Automotive Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-4"
              style={{ color: "#C9A84C" }}>
              Automotive
            </h4>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {carServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[12.5px] no-underline transition-colors duration-300 hover:text-[#C9A84C]"
                    style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property & Glass */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-4"
              style={{ color: "#C9A84C" }}>
              Property &amp; Glass
            </h4>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {propertyServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[12.5px] no-underline transition-colors duration-300 hover:text-[#C9A84C]"
                    style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── ROW 2 — Company + Hours + Social ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-4"
              style={{ color: "#C9A84C" }}>
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {companyLinks.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[12.5px] no-underline transition-colors duration-300 hover:text-[#C9A84C]"
                    style={{ color: "rgba(255,255,255,0.4)" }}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-4"
              style={{ color: "#C9A84C" }}>
              Opening Hours
            </h4>
            <div className="flex items-start gap-2">
              <Clock size={13} style={{ color: "rgba(201,168,76,0.5)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <p className="text-[12.5px] font-medium mb-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Every Day
                </p>
                <p className="text-[12.5px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  11:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Find Us — icon buttons */}
<div className="col-span-2 md:col-span-2 flex flex-col justify-start">
  <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-4"
    style={{ color: "#C9A84C" }}>
    Find Us
  </h4>
  <div className="flex items-center gap-3">
    {socialLinks.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:text-[#C9A84C] hover:border-[rgba(201,168,76,0.35)] hover:bg-[rgba(201,168,76,0.07)]"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.45)",
        }}>
        <Icon />
      </a>
    ))}
  </div>
</div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="py-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Smart Auto UAE — All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy",   href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12px] no-underline transition-colors duration-300 hover:text-[#C9A84C]"
                style={{ color: "rgba(255,255,255,0.25)" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

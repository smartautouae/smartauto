"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { label: "Car Window Tinting",        href: "/car-window-tinting-dubai" },
  { label: "Paint Protection Film",     href: "/paint-protection-film-dubai" },
  { label: "Nano Ceramic Coating",      href: "/nano-ceramic-coating-dubai" },
  { label: "Car Detailing & Polishing", href: "/car-detailing-dubai" },
  { label: "Car Wrapping",              href: "/car-wrapping-dubai" },
  { label: "Villa Window Tinting",      href: "/villa-window-tinting-dubai" },
  { label: "Commercial Tinting",        href: "/commercial-window-tinting-dubai" },
  { label: "Switchable Smart Film",     href: "/switchable-smart-glass-film-dubai" },
  { label: "Surface Protection Film",   href: "/surface-protection-film-dubai" },
];

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "Services",     href: "/services",  hasDropdown: true },
  { label: "Why Us",       href: "/#why-us" },
  { label: "Gallery",      href: "/#gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Branches",     href: "/#branches" },
  { label: "Contact",      href: "/#contact" },
];

export default function Navbar() {
  const [scrolled,           setScrolled]           = useState(false);
  const [menuOpen,           setMenuOpen]            = useState(false);
  const [servicesOpen,       setServicesOpen]        = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen]  = useState(false);
  const pathname   = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Hover via pointer events on the li ref — no JSX event handler props
  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;
    const open  = () => setServicesOpen(true);
    const close = () => setServicesOpen(false);
    el.addEventListener("mouseenter", open);
    el.addEventListener("mouseleave", close);
    return () => {
      el.removeEventListener("mouseenter", open);
      el.removeEventListener("mouseleave", close);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "border-b border-gold/15" : ""
      }`}
      style={
        scrolled
          ? { background: "rgba(10,10,10,0.90)", backdropFilter: "blur(20px)", boxShadow: "0 4px 40px rgba(0,0,0,0.6)" }
          : {}
      }
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}>

      <div className="flex items-center justify-between h-20 max-w-7xl mx-auto px-6">

        {/* ── LOGO ── */}
        <Link href="/" className="no-underline flex-shrink-0">
          <span className="gold-text block font-bold"
            style={{ fontFamily: "var(--font-playfair),serif", fontSize: "20px" }}>
            SMART AUTO
          </span>
          <span className="block text-[9px] tracking-[0.4em] uppercase mt-0.5"
            style={{ color: "rgba(201,168,76,0.6)" }}>
            UAE
          </span>
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) =>
            link.hasDropdown ? (

              // Services dropdown — hover handled via useEffect ref, no JSX handlers
              <li key={link.label} ref={dropdownRef} className="relative">
                <button
                  className="flex items-center gap-1 text-[13px] tracking-wide transition-colors duration-300 relative cursor-pointer h-20"
                  style={{
                    color: isActive(link.href) ? "#C9A84C" : "rgba(255,255,255,0.7)",
                    background: "none",
                    border: "none",
                  }}>
                  {link.label}
                  <motion.div
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}>
                    <ChevronDown size={13} />
                  </motion.div>
                  <span
                    className="absolute bottom-4 left-0 h-px bg-gold transition-all duration-300"
                    style={{ width: isActive(link.href) ? "100%" : "0" }} />
                </button>

                {/* Dropdown panel */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-64 rounded-2xl overflow-hidden border"
                      style={{
                        background: "rgba(10,10,10,0.97)",
                        backdropFilter: "blur(20px)",
                        borderColor: "rgba(201,168,76,0.15)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                      }}
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}>

                      {/* Header */}
                      <div className="px-4 py-3 border-b"
                        style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                        <Link
                          href="/services"
                          className="text-[11px] tracking-[0.2em] uppercase font-semibold no-underline flex items-center justify-between"
                          style={{ color: "#C9A84C" }}>
                          All Services
                          <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "10px" }}>View All →</span>
                        </Link>
                      </div>

                      {/* Service links */}
                      <div className="py-2">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`flex items-center gap-2.5 px-4 py-2.5 text-[13px] no-underline transition-all duration-200
                              hover:bg-[rgba(201,168,76,0.06)]
                              ${pathname === s.href
                                ? "text-[#C9A84C]"
                                : "text-white/60 hover:text-[#C9A84C]"
                              }`}>
                            <span
                              className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200
                                ${pathname === s.href ? "bg-[#C9A84C]" : "bg-[rgba(201,168,76,0.4)]"}`}
                            />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

            ) : (

              // Regular link
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[13px] tracking-wide transition-colors duration-300 relative pb-1 group no-underline"
                  style={{ color: isActive(link.href) ? "#C9A84C" : "rgba(255,255,255,0.7)" }}>
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 group-hover:w-full"
                    style={{ width: isActive(link.href) ? "100%" : "0" }} />
                </Link>
              </li>

            )
          )}
        </ul>

        {/* ── CTA ── */}
        <motion.a
          href="tel:+971567269666"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-black no-underline"
          style={{ background: "linear-gradient(135deg,#C9A84C,#E8C96A)", boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <Phone size={14} /> Call Now
        </motion.a>

        {/* ── MOBILE TOGGLE ── */}
        <button
          className="md:hidden p-1 cursor-pointer"
          style={{ color: "#C9A84C", background: "none", border: "none" }}
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t overflow-hidden"
            style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)", borderColor: "rgba(201,168,76,0.1)" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}>
            <div className="flex flex-col px-6 py-5">

              {navLinks.map((link) =>
                link.hasDropdown ? (

                  // Mobile services accordion
                  <div key={link.label}>
                    <button
                      className="w-full flex items-center justify-between py-3 text-[15px] transition-colors duration-300 cursor-pointer"
                      style={{
                        color: mobileServicesOpen ? "#C9A84C" : "rgba(255,255,255,0.75)",
                        background: "none",
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                      {link.label}
                      <motion.div
                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}>
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden">
                          <div className="pl-4 py-2 flex flex-col gap-1">
                            <Link
                              href="/services"
                              className="py-2 text-[13px] font-semibold no-underline"
                              style={{ color: "#C9A84C" }}
                              onClick={() => setMenuOpen(false)}>
                              → View All Services
                            </Link>
                            {serviceLinks.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="py-2 text-[13px] no-underline transition-colors duration-200"
                                style={{ color: pathname === s.href ? "#C9A84C" : "rgba(255,255,255,0.5)" }}
                                onClick={() => setMenuOpen(false)}>
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                ) : (

                  // Regular mobile link
                  <Link
                    key={link.label}
                    href={link.href}
                    className="py-3 text-[15px] no-underline transition-colors duration-300"
                    style={{
                      color: isActive(link.href) ? "#C9A84C" : "rgba(255,255,255,0.75)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                    onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>

                )
              )}

              {/* Mobile CTA */}
              <a
                href="tel:+971567269666"
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-black no-underline"
                style={{ background: "linear-gradient(135deg,#C9A84C,#E8C96A)" }}>
                <Phone size={14} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "Services",     href: "#services" },
  { label: "Why Us",       href: "#why-us" },
  { label: "Gallery",      href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "border-b border-gold/15" : ""}`}
      style={scrolled ? { background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)", boxShadow: "0 4px 40px rgba(0,0,0,0.6)" } : {}}
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>

      <div className="flex items-center justify-between h-20 max-w-7xl mx-auto px-6">
        {/* Logo */}
        <a href="#home" className="no-underline">
          <span className="gold-text block font-bold" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px" }}>SMART AUTO</span>
          <span className="block text-[9px] tracking-[0.4em] uppercase text-gold/60 mt-0.5">UAE</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}
                className="text-[13px] tracking-wide text-white/70 hover:text-gold transition-colors duration-300 relative pb-1 group no-underline">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a href="tel:+971567269666"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-black no-underline"
          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Phone size={14} /> Call Now
        </motion.a>

        {/* Mobile toggle */}
        <button className="md:hidden text-gold p-1" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t border-gold/10 overflow-hidden"
            style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                  className="py-3 text-[15px] text-white/75 hover:text-gold border-b border-white/5 transition-colors duration-300 no-underline">
                  {link.label}
                </a>
              ))}
              <a href="tel:+971567269666"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-black no-underline"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}>
                <Phone size={14} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

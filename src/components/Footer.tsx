import { Phone } from "lucide-react";

const serviceLinks = ["Window Tinting", "Paint Protection Film", "Ceramic Coating", "Car Detailing", "Car Wrapping", "Accessories Fitting"];
const companyLinks = ["About Us", "Why Choose Us", "How It Works", "Testimonials", "Contact"];
const socialLinks  = [
  { label: "Instagram", href: "https://instagram.com/smartautouae" },
  { label: "WhatsApp",  href: "https://wa.me/971567269666" },
  { label: "Facebook",  href: "#" },
  { label: "Email",     href: "mailto:info@smartautouae.ae" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10" style={{ backgroundColor: "#050505" }}>
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-18 pt-16 pb-12">
          {/* Brand */}
          <div>
            <span className="gold-text font-bold block" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "22px" }}>SMART AUTO</span>
            <span className="block text-[9px] tracking-[0.4em] uppercase text-gold/50 mt-1 mb-4">UAE</span>
            <p className="text-white/35 text-[13px] leading-[1.8] mb-6">
              Dubai&apos;s most trusted premium car care centre. All services under one roof.
            </p>
            <a href="tel:+971567269666"
              className="inline-flex items-center gap-2 text-[13px] text-gold font-semibold px-5 py-2.5 rounded-full border border-gold/30 bg-gold/5 hover:bg-gold/12 transition-all duration-300 no-underline">
              <Phone size={14} /> +971 567 269 666
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-5">Services</h4>
            <ul className="flex flex-col gap-3 list-none">
              {serviceLinks.map((s) => <li key={s}><a href="#services" className="text-[13px] text-white/40 hover:text-gold transition-colors duration-300 no-underline">{s}</a></li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-5">Company</h4>
            <ul className="flex flex-col gap-3 list-none">
              {companyLinks.map((c) => <li key={c}><a href={`#${c.toLowerCase().replace(/ /g, "-")}`} className="text-[13px] text-white/40 hover:text-gold transition-colors duration-300 no-underline">{c}</a></li>)}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-5">Find Us</h4>
            <ul className="flex flex-col gap-3 list-none">
              {socialLinks.map((l) => <li key={l.label}><a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/40 hover:text-gold transition-colors duration-300 no-underline">{l.label}</a></li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[12px] text-white/25">© {new Date().getFullYear()} Smart Auto UAE — All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-[12px] text-white/25 hover:text-gold transition-colors duration-300 no-underline">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Star, ChevronRight, ArrowRight, Phone, Quote } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchCards from "@/components/BranchCards";
import { BRANCHES } from "@/constants/branches";

// ── SEO METADATA ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Smart Auto UAE | Window Tinting Dubai & Sharjah",
  description:
    "168+ verified 5-star customer reviews for Smart Auto UAE. Trusted window tinting, smart film, PPF & surface protection services across Dubai & Sharjah. Read real reviews from real customers — car tinting, villa tinting, commercial tinting, smart film & more.",
  keywords: [
    "Smart Auto UAE reviews",
    "Smart Auto UAE testimonials",
    "window tinting reviews Dubai",
    "window tinting reviews Sharjah",
    "car tinting reviews Dubai",
    "villa tinting reviews Dubai",
    "commercial tinting reviews Dubai",
    "3M tinting reviews Dubai",
    "Totalgard reviews UAE",
    "best window tinting Dubai reviews",
    "Smart Auto Google reviews",
    "window film reviews Dubai",
    "smart film reviews Dubai",
    "PPF reviews Dubai",
    "surface protection film reviews Dubai",
    "Smart Auto MotorCity reviews",
    "Smart Auto Al Quoz reviews",
    "Smart Auto Mirdif reviews",
    "Smart Auto Sharjah reviews",
    "trusted window tinting Dubai",
  ],
  alternates: { canonical: "https://smartautouae.ae/testimonials" },
  openGraph: {
    title: "Customer Reviews & Testimonials | Smart Auto UAE",
    description:
      "168+ verified 5-star Google reviews for Smart Auto UAE. Trusted window tinting, smart film & PPF in Dubai & Sharjah. Real reviews from real customers.",
    url: "https://smartautouae.ae/testimonials",
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

const overallStats = [
  { value: "168+", label: "5-Star Reviews",    sub: "Verified on Google" },
  { value: "4.9",  label: "Average Rating",    sub: "Out of 5 stars" },
  { value: "10+",  label: "Years Trusted",     sub: "Dubai & Sharjah" },
  { value: "4",    label: "Branches",          sub: "MotorCity · Al Quoz · Mirdif · Sharjah" },
];

// All reviews grouped by service category
const reviewCategories = [
  {
    category: "Car Window Tinting",
    color: "#60a5fa",
    colorBg: "rgba(96,165,250,0.06)",
    colorBdr: "rgba(96,165,250,0.2)",
    reviews: [
      {
        name: "Ahmed Al Mansoori",
        location: "Dubai · MotorCity Branch",
        rating: 5,
        date: "February 2026",
        text: "Got full 3M tinting on my BMW and the result is absolutely flawless. Dark from outside, crystal clear from inside. The team at MotorCity were professional and efficient — done in under 2 hours. Highly recommend to anyone looking for quality car tinting in Dubai.",
      },
      {
        name: "Ravi Krishnamurthy",
        location: "Dubai · Al Quoz Branch",
        rating: 5,
        date: "January 2026",
        text: "Third car I've had done with Smart Auto over 5 years. The quality never drops — always perfect installation, always clean, always zero bubbles. They know their products inside out. Won't go anywhere else in Dubai for car tinting.",
      },
      {
        name: "Liam O'Brien",
        location: "Dubai · Mirdif Branch",
        rating: 5,
        date: "December 2025",
        text: "Brought my Range Rover in for Global USA ceramic tint. The heat rejection is genuinely remarkable — you feel the difference immediately. Great customer service, clean workshop, professional team. Absolutely worth every dirham.",
      },
      {
        name: "Priya Nair",
        location: "Sharjah Branch",
        rating: 5,
        date: "November 2025",
        text: "Smart Auto Sharjah branch is excellent. Quick appointment, clean and professional installation on my sedan. 3M film looks perfect — windows are dark outside but perfectly clear from inside. Staff were helpful and friendly throughout.",
      },
    ],
  },
  {
    category: "Villa Window Tinting",
    color: "#34d399",
    colorBg: "rgba(52,211,153,0.06)",
    colorBdr: "rgba(52,211,153,0.2)",
    reviews: [
      {
        name: "Fatima Al Rashidi",
        location: "Dubai · Villa — JVC",
        rating: 5,
        date: "January 2026",
        text: "Had all windows in our 5-bedroom villa tinted with 3M heat rejection films. The difference in temperature is incredible — rooms that used to be unbearably hot in the afternoon are now completely comfortable. The team came on time, worked neatly, and finished in one day. Outstanding.",
      },
      {
        name: "Marcus Williams",
        location: "Dubai · Villa — Arabian Ranches",
        rating: 5,
        date: "December 2025",
        text: "Used Smart Auto for our villa window tinting after getting recommendations from neighbours. The privacy film on the ground floor is perfect — dark from outside, crystal clear from inside. We no longer need curtains in the living room. Professional, clean, and genuinely excellent work.",
      },
      {
        name: "Nadia Sultana",
        location: "Sharjah · Villa",
        rating: 5,
        date: "October 2025",
        text: "Totalgard film installed on all villa windows. The heat reduction is significant — our AC bills have dropped noticeably since installation. The team was punctual, courteous, and took great care with all surfaces. Highly recommend Smart Auto for villa tinting in Sharjah.",
      },
    ],
  },
  {
    category: "Commercial Window Tinting",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,0.06)",
    colorBdr: "rgba(167,139,250,0.2)",
    reviews: [
      {
        name: "Sarah Mitchell",
        location: "Sharjah · Office Building",
        rating: 5,
        date: "January 2026",
        text: "Smart Auto handled our entire office building window tinting project across 6 floors. From the initial site survey to final inspection — completely professional throughout. The Totalgard film has made a measurable difference to our energy bills and the glare on screens has been eliminated. Couldn't be happier.",
      },
      {
        name: "James Thornton",
        location: "Dubai · Retail Showroom",
        rating: 5,
        date: "November 2025",
        text: "Had privacy and heat rejection films installed across our showroom. The team worked outside business hours to minimise disruption — that kind of consideration means a lot. Result is excellent. Customers regularly comment on how cool and comfortable the showroom feels.",
      },
      {
        name: "Omar Al Farsi",
        location: "Dubai · Restaurant",
        rating: 5,
        date: "September 2025",
        text: "Installed sun control films on all south-facing windows of our restaurant. Massive difference in ambient temperature for guests — especially during afternoon service. The team were fast, professional, and left no mess whatsoever. Exceptional service.",
      },
    ],
  },
  {
    category: "Switchable Smart Film",
    color: "#f97316",
    colorBg: "rgba(249,115,22,0.06)",
    colorBdr: "rgba(249,115,22,0.2)",
    reviews: [
      {
        name: "Daniel Park",
        location: "Dubai · Office — DIFC",
        rating: 5,
        date: "February 2026",
        text: "Smart film installed across three meeting rooms. Works perfectly — one button and the glass goes from completely transparent to fully frosted. The installation was seamless, the control setup was clearly explained. Clients are always impressed when they see it. Worth every penny.",
      },
      {
        name: "Aisha Bint Mohammed",
        location: "Dubai · Villa",
        rating: 5,
        date: "December 2025",
        text: "Had smart film installed on our master bedroom windows and bathroom glass. The privacy on demand is exactly what we wanted — no curtains, no blinds, just clean glass that frosts at the press of a button. Smart Auto's team was knowledgeable and professional throughout.",
      },
      {
        name: "Robert Chen",
        location: "Dubai · Hotel",
        rating: 5,
        date: "October 2025",
        text: "Smart Auto installed switchable film across 24 hotel suites. The project was large, the team managed it perfectly — minimal disruption to operations, flawless finish in every room. Guests absolutely love the technology. Smart Auto is now our go-to for all film installations.",
      },
    ],
  },
  {
    category: "Surface Protection Films",
    color: "#f43f5e",
    colorBg: "rgba(244,63,94,0.06)",
    colorBdr: "rgba(244,63,94,0.2)",
    reviews: [
      {
        name: "Elena Petrova",
        location: "Dubai · Villa Renovation",
        rating: 5,
        date: "January 2026",
        text: "Used Smart Auto for surface protection across our villa renovation — marble floors, granite countertops, all glass, and aluminium profiles. 4 months of construction and every surface came out perfect underneath. The film came off cleanly with zero residue. Saved us a fortune in potential repairs.",
      },
      {
        name: "Hassan Al Blooshi",
        location: "Dubai · Commercial Fit-Out",
        rating: 5,
        date: "November 2025",
        text: "Smart Auto protected all the stone flooring and glass across our 3-floor office fit-out. Large project handled efficiently and professionally. Not a single surface was damaged during the entire construction period. The removable film is genuinely the best investment on any fit-out project.",
      },
    ],
  },
];

const featuredReview = {
  name: "Ahmed Al Mansoori",
  location: "Dubai",
  rating: 5,
  service: "Full Villa & Fleet Tinting",
  text: "I have been using Smart Auto UAE for over 6 years — for my cars, my villa, and our company fleet. The consistency of quality and service across every single job is what keeps me coming back. They use genuine 3M and Totalgard products, the team is always professional and knowledgeable, and the results speak for themselves. If you want the best window tinting in Dubai, Smart Auto is the only answer.",
};

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function TestimonialsPage() {
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom,transparent,#0A0A0A)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] mb-12" style={{ color: "rgba(255,255,255,0.3)" }}>
              <Link href="/" className="no-underline hover:text-white/60 transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>Home</Link>
              <ChevronRight size={12} />
              <span style={{ color: gold }}>Testimonials</span>
            </div>

            {/* Centered hero */}
            <div className="max-w-4xl mx-auto text-center">

              {/* Star row */}
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} fill={gold} strokeWidth={0} style={{ color: gold }} />
                ))}
              </div>

              <div className="inline-flex items-center gap-2.5 border rounded-full px-4 py-1.5 mb-8 text-[10px] tracking-[0.3em] uppercase"
                style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)", color: gold }}>
                168+ Verified Google Reviews · 4.9 Star Rating · Dubai & Sharjah
              </div>

              <h1 className="font-bold leading-[1.05] mb-5"
                style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(2.4rem,5.5vw,4.5rem)", color: "#fff" }}>
                What Our Customers{" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Say About Us
                </span>
              </h1>

              <p className="mb-10 leading-[1.9] max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.95rem,1.3vw,1.05rem)" }}>
                Over{" "}
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>168 verified 5-star Google reviews</strong>{" "}
                from real customers across Dubai and Sharjah. Car tinting, villa tinting,
                commercial window films, smart film, and surface protection —
                read what our customers say about every service we offer.
              </p>

              {/* Rating summary pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {overallStats.map((stat) => (
                  <div key={stat.label}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border"
                    style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.04)" }}>
                    <span className="font-bold text-[16px]"
                      style={{ fontFamily: "var(--font-playfair),serif", background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {stat.value}
                    </span>
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED REVIEW ───────────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative rounded-3xl border overflow-hidden px-10 py-12 md:px-14"
              style={{ border: "1px solid rgba(201,168,76,0.22)", background: "rgba(201,168,76,0.03)" }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,0.4),transparent)" }} />

              {/* Large quote mark */}
              <div className="absolute top-8 right-10 opacity-[0.06]"
                style={{ fontSize: "120px", lineHeight: 1, fontFamily: "serif", color: gold }}>
                &ldquo;
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: featuredReview.rating }).map((_, i) => (
                  <Star key={i} size={16} fill={gold} strokeWidth={0} style={{ color: gold }} />
                ))}
              </div>

              <p className="leading-[1.9] mb-8 relative z-10"
                style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(1rem,1.4vw,1.15rem)" }}>
                &ldquo;{featuredReview.text}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-bold text-[16px]" style={{ color: "#fff" }}>{featuredReview.name}</div>
                  <div className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{featuredReview.location}</div>
                </div>
                <div className="px-4 py-2 rounded-full text-[11px] font-semibold border"
                  style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.07)", color: gold }}>
                  {featuredReview.service}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REVIEWS BY CATEGORY ───────────────────────────────────────── */}
        {reviewCategories.map((cat) => (
          <section key={cat.category} className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
            <div className="max-w-7xl mx-auto px-6">

              {/* Category header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1" style={{ background: `linear-gradient(to right,${cat.colorBdr},transparent)` }} />
                <div className="flex items-center gap-3 px-5 py-2 rounded-full border flex-shrink-0"
                  style={{ background: cat.colorBg, border: `1px solid ${cat.colorBdr}` }}>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={10} fill={cat.color} strokeWidth={0} style={{ color: cat.color }} />
                    ))}
                  </div>
                  <span className="font-bold text-[12px] tracking-wide" style={{ color: cat.color }}>
                    {cat.category}
                  </span>
                </div>
                <div className="h-px flex-1" style={{ background: `linear-gradient(to left,${cat.colorBdr},transparent)` }} />
              </div>

              {/* Review cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.reviews.map((review, i) => (
                  <div key={i}
                    className="rounded-2xl p-7 border flex flex-col relative overflow-hidden"
                    style={{ border: `1px solid ${cardBdr}`, background: cardBg }}>

                    {/* Subtle quote watermark */}
                    <div className="absolute top-4 right-5 opacity-[0.04]"
                      style={{ fontSize: "72px", lineHeight: 1, fontFamily: "serif", color: "#fff" }}>
                      &ldquo;
                    </div>

                    {/* Stars + date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, s) => (
                          <Star key={s} size={12} fill={gold} strokeWidth={0} style={{ color: gold }} />
                        ))}
                      </div>
                      <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                        {review.date}
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-[13px] leading-[1.85] flex-1 mb-5 relative z-10"
                      style={{ color: "rgba(255,255,255,0.55)" }}>
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Reviewer */}
                    <div className="flex items-center gap-3 pt-4 border-t"
                      style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      {/* Avatar initial */}
                      <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[13px] flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", color: gold }}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-[13px]" style={{ color: "#fff" }}>{review.name}</div>
                        <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{review.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── GOOGLE REVIEWS CTA ────────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#060606" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill={gold} strokeWidth={0} style={{ color: gold }} />
              ))}
            </div>
            <h2 className="font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff" }}>
              Join 168+ Happy Customers
            </h2>
            <p className="text-sm mb-7 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Read all our verified reviews on Google, or leave your own after your experience with Smart Auto UAE.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="https://g.page/r/smartautouae/review"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-black no-underline"
                style={{ background: goldGrad, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>
                <Star size={14} fill="#000" strokeWidth={0} />
                View All Google Reviews
                <ArrowRight size={14} />
              </a>
              <a href="https://g.page/r/smartautouae/review"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm no-underline border"
                style={{ borderColor: "rgba(201,168,76,0.3)", color: gold, background: "rgba(201,168,76,0.04)" }}>
                Leave a Review
              </a>
            </div>
          </div>
        </section>

        {/* ── BRANCHES ──────────────────────────────────────────────────── */}
        <BranchCards branches={BRANCHES} serviceName="Free Consultation" />

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
                <div className="flex items-center justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={gold} strokeWidth={0} style={{ color: gold }} />
                  ))}
                </div>
                <p className="text-[10px] tracking-[0.35em] uppercase mb-5"
                  style={{ color: "rgba(201,168,76,0.6)" }}>
                  168+ 5-Star Reviews · UAE Authorised · Dubai &amp; Sharjah
                </p>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair),serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff" }}>
                  Ready to Experience It for Yourself?
                </h2>
                <p className="mb-8 max-w-lg mx-auto text-sm leading-[1.9]"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Join hundreds of happy customers across Dubai and Sharjah.
                  Free consultation for all services — automotive, villa, commercial,
                  smart film &amp; surface protection.
                  Open every day 11AM – 9PM.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a href="https://wa.me/971555559424" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black no-underline"
                    style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}>
                    Book a Free Consultation <ArrowRight size={15} />
                  </a>
                  <a href="tel:+971555559424"
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

"use client";

import { useState } from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import BookingModal, { type Branch } from "@/components/BookingModal";

const gold     = "#C9A84C";
const goldGrad = "linear-gradient(135deg,#C9A84C,#E8C96A)";

type Props = {
  branches: Branch[];
  serviceName: string;
};

function WaIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function BranchCards({ branches, serviceName }: Props) {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  return (
    <>
      <section className="py-20" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <span
              className="text-[11px] tracking-[0.35em] uppercase mb-3 block"
              style={{ color: gold }}>
              4 Locations · Dubai &amp; Sharjah
            </span>
            <h2
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-playfair),serif",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                color: "#fff",
              }}>
              Book{" "}
              <span
                style={{
                  background: goldGrad,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                {serviceName}
              </span>{" "}
              at Any of Our 4 Branches
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Open every day · 11AM – 9PM · Walk-ins welcome
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {branches.map((b) => (
              <div
                key={b.name}
                className="rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(201,168,76,0.12)",
                  background: "rgba(201,168,76,0.02)",
                }}>

                {/* Card info */}
                <div className="p-6 flex-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(201,168,76,0.07)",
                      border: "1px solid rgba(201,168,76,0.18)",
                      color: gold,
                    }}>
                    <MapPin size={17} />
                  </div>

                  <div
                    className="font-semibold text-[17px] mb-0.5"
                    style={{ color: "#fff", fontFamily: "var(--font-playfair),serif" }}>
                    {b.name}
                  </div>
                  <div
                    className="text-[11px] tracking-[0.1em] uppercase mb-3"
                    style={{ color: "rgba(255,255,255,0.3)" }}>
                    {b.area}
                  </div>

                  <div className="w-8 h-px mb-3" style={{ background: "rgba(201,168,76,0.25)" }} />

                  <a
                    href={`tel:${b.phone.replace(/\s/g, "")}`}
                    className="text-[12px] no-underline hover:underline block mb-1"
                    style={{ color: gold }}>
                    {b.phone}
                  </a>
                  <div className="flex items-center gap-1.5">
                    <Clock size={11} style={{ color: "rgba(255,255,255,0.2)" }} />
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                      11AM – 9PM Daily
                    </span>
                  </div>
                </div>

                {/* Card buttons */}
                <div className="p-4 pt-0 flex flex-col gap-2.5">

                  {/* Book button */}
                  <button
                    onClick={() => setActiveBranch(b)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-bold text-black transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={{ background: goldGrad }}>
                    Book in {b.name} <ArrowRight size={12} />
                  </button>

                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/${b.whatsapp}?text=${encodeURIComponent(
                      `Hi, I'd like to book ${serviceName} at your ${b.name} branch.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-semibold no-underline transition-all duration-200 hover:bg-[rgba(37,211,102,0.15)]"
                    style={{
                      border: "1px solid rgba(37,211,102,0.3)",
                      color: "#25D366",
                      background: "rgba(37,211,102,0.05)",
                    }}>
                    <WaIcon size={13} />
                    WhatsApp {b.name}
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking modal */}
      <BookingModal
        branch={activeBranch}
        serviceName={serviceName}
        onClose={() => setActiveBranch(null)}
      />
    </>
  );
}

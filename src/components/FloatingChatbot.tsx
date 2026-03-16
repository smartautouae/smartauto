"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, Phone, ChevronRight, Zap } from "lucide-react";

// ── CONSTANTS ──────────────────────────────────────────────────────────────

const gold     = "#C9A84C";
const goldGrad = "linear-gradient(135deg,#C9A84C,#E8C96A)";
const WA_NUM   = "971567269666";
const waLink   = (msg: string) =>
  `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

// ── TYPES ──────────────────────────────────────────────────────────────────

type Role    = "bot" | "user";
type MsgType = "text" | "options" | "booking";

type Option = {
  label: string;
  value: string;
};

type Message = {
  id: number;
  role: Role;
  type: MsgType;
  text: string;
  options?: Option[];
};

// ── CONVERSATION FLOWS ─────────────────────────────────────────────────────

const SERVICES: Option[] = [
  { label: "Car Window Tinting",        value: "Car Window Tinting" },
  { label: "Paint Protection Film",     value: "Paint Protection Film" },
  { label: "Colour PPF",                value: "Colour PPF" },
  { label: "Nano Ceramic Coating",       value: "Nano Ceramic Coating" },
  { label: "Car Detailing & Polishing", value: "Car Detailing & Polishing" },
  { label: "Car Wrapping",              value: "Car Wrapping" },
  { label: "Villa Window Tinting",      value: "Villa Window Tinting" },
  { label: "Commercial Tinting",        value: "Commercial Tinting" },
  { label: "Switchable Smart Film",     value: "Switchable Smart Film" },
  { label: "Surface Protection Film",   value: "Surface Protection Film" },
];

const BRANCHES: Option[] = [
  { label: "📍 MotorCity, Dubai",          value: "MotorCity Dubai" },
  { label: "📍 Al Quoz, Dubai",            value: "Al Quoz Dubai" },
  { label: "📍 Mirdif · Uptown Mall",      value: "Mirdif Dubai" },
  { label: "📍 Central Mall, Sharjah",     value: "Central Mall Sharjah" },
];

const SERVICE_INFO: Record<string, string> = {
  "Car Window Tinting":
    "We use 3M, Global USA & Totalgard films for car window tinting. Blocks heat, UV & glare. All 4 branches. Prices from AED 199.",
  "Paint Protection Film":
    "PPF shields your car's paint from rock chips, scratches & swirls. Invisible, self-healing film. Available at all branches.",
  "Colour PPF":
    "Colour PPF lets you change your car's look while protecting the paint — available in matte, satin & gloss finishes.",
  "Nano Ceramic Coating":
    "Professional ceramic coating for long-lasting gloss, hydrophobic protection & UV resistance. Multi-year warranty available.",
  "Car Detailing & Polishing":
    "Full interior & exterior detailing, machine polishing & paint correction. Restore your car to showroom condition.",
  "Car Wrapping":
    "Full & partial car wraps in any colour or finish. Matte, chrome, satin, brushed metal & more. Premium brands only.",
  "Villa Window Tinting":
    "Heat-rejection & privacy window films for villas & apartments. Reduce AC bills, block UV & improve privacy.",
  "Commercial Tinting":
    "Solar control & privacy films for offices, retail & commercial buildings. Energy-saving solutions across Dubai & Sharjah.",
  "Switchable Smart Film":
    "PDLC switchable smart glass film — turns glass from clear to frosted at the touch of a button. Villas, offices & partitions.",
  "Surface Protection Film":
    "Clear protection films for marble, granite, glass, floors, lifts, wood & countertops. Removable & residue-free.",
};

// ── HELPERS ────────────────────────────────────────────────────────────────

let msgId = 0;
const newId = () => ++msgId;

const botMsg = (text: string, type: MsgType = "text", options?: Option[]): Message => ({
  id: newId(), role: "bot", type, text, options,
});

const userMsg = (text: string): Message => ({
  id: newId(), role: "user", type: "text", text,
});

// ── INITIAL GREETING ───────────────────────────────────────────────────────

const GREETING: Message[] = [
  botMsg("👋 Hi! I'm the Smart Auto Assistant."),
  botMsg("How can I help you today?", "options", [
    { label: "Find a Service",   value: "find_service" },
    { label: "Book an Appointment", value: "book" },
    { label: "Find a Branch",    value: "branch" },
    { label: "Talk to our team",  value: "human" },
  ]),
];

// ── COMPONENT ──────────────────────────────────────────────────────────────

export default function FloatingChatbot() {
  const [open,     setOpen]     = useState(false);
  const [visible,  setVisible]  = useState(false);
  const [msgs,     setMsgs]     = useState<Message[]>(GREETING);
  const [input,    setInput]    = useState("");
  const [typing,   setTyping]   = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Show bubble after 5 seconds
useEffect(() => {
  const t = setTimeout(() => {
    if (!dismissed) setVisible(true);
  }, 5000);
  return () => clearTimeout(t);
}, [dismissed]);

// Hide bubble after 5 seconds of being visible (only if chat not opened)
useEffect(() => {
  if (!visible || open) return;
  const t = setTimeout(() => {
    setVisible(false);
  }, 5000);
  return () => clearTimeout(t);
}, [visible, open]);

// Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const dismiss = () => {
    setVisible(false);
    setOpen(false);
    setDismissed(true);
  };

  const addBotMsg = (text: string, type: MsgType = "text", options?: Option[]) => {
    setMsgs((prev) => [...prev, botMsg(text, type, options)]);
  };

  const botReply = (text: string, type: MsgType = "text", options?: Option[]) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      addBotMsg(text, type, options);
    }, 700);
  };

  const handleOption = (value: string, label: string) => {
    // Add user message
    setMsgs((prev) => [...prev, userMsg(label)]);

    // ── MAIN MENU ──
    if (value === "find_service") {
      botReply("Which service are you interested in?", "options", SERVICES);
      return;
    }

    if (value === "branch") {
      botReply("We have 4 branches — all open every day 11AM–9PM. Which area suits you?", "options", BRANCHES);
      return;
    }

    if (value === "human") {
      botReply("Sure! You can reach us directly:", "booking");
      return;
    }

    if (value === "book") {
      if (selectedService) {
        botReply(
          `Great! Let's book your ${selectedService} appointment. Which branch is closest to you?`,
          "options",
          BRANCHES
        );
      } else {
        botReply("Which service would you like to book?", "options", SERVICES);
      }
      return;
    }

    // ── SERVICE SELECTED ──
    if (SERVICE_INFO[value]) {
      setSelectedService(value);
      botReply(SERVICE_INFO[value]);
      setTimeout(() => {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          addBotMsg("What would you like to do next?", "options", [
            { label: "Book this service",    value: "book" },
            { label: "Find nearest branch",  value: "branch" },
            { label: "Ask something else",   value: "restart" },
            { label: "Call us now",           value: "call" },
          ]);
        }, 700);
      }, 900);
      return;
    }

    // ── BRANCH SELECTED ──
    if (value.includes("Dubai") || value.includes("Sharjah")) {
      const waMsg = selectedService
        ? `Hi, I'd like to book a ${selectedService} appointment at your ${value} branch.`
        : `Hi, I'd like to visit your ${value} branch. Can you help me?`;

      botReply(
        `Perfect! Our ${value} branch is open every day 11AM – 9PM.`,
      );
      setTimeout(() => {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          addBotMsg(
            `Tap below to confirm your booking via WhatsApp 👇`,
            "booking",
          );
          // Store wa message for booking button
          setMsgs((prev) => [
            ...prev.slice(0, -1),
            { ...prev[prev.length - 1], text: waMsg },
          ]);
        }, 700);
      }, 900);
      return;
    }

    // ── CALL ──
    if (value === "call") {
      botReply("Call us anytime — we're available every day 11AM–9PM.", "booking");
      return;
    }

    // ── RESTART ──
    if (value === "restart") {
      botReply("Sure! How can I help you?", "options", [
        { label: "Find a Service",      value: "find_service" },
        { label: "Book an Appointment", value: "book" },
        { label: "Find a Branch",       value: "branch" },
        { label: "Talk to our team",     value: "human" },
      ]);
      return;
    }
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMsgs((prev) => [...prev, userMsg(trimmed)]);
    setInput("");

    const lower = trimmed.toLowerCase();

    if (lower.includes("tint") || lower.includes("window")) {
      botReply("We offer window tinting for cars, villas & commercial buildings. Which are you interested in?", "options", [
        { label: "Car Window Tinting",   value: "Car Window Tinting" },
        { label: "Villa Window Tinting", value: "Villa Window Tinting" },
        { label: "Commercial Tinting",   value: "Commercial Tinting" },
      ]);
    } else if (lower.includes("ppf") || lower.includes("paint") || lower.includes("protection")) {
      botReply(SERVICE_INFO["Paint Protection Film"]);
      setTimeout(() => {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          addBotMsg("Would you like to book?", "options", [
            { label: "📅 Book PPF",          value: "book" },
            { label: "📍 Find a Branch",     value: "branch" },
          ]);
        }, 700);
      }, 900);
    } else if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) {
      botReply("Prices vary by service and vehicle type. For an accurate quote, our team can help you directly 👇", "booking");
    } else if (lower.includes("branch") || lower.includes("location") || lower.includes("where")) {
      botReply("We have 4 branches across Dubai & Sharjah:", "options", BRANCHES);
    } else if (lower.includes("book") || lower.includes("appointment")) {
      botReply("Which service would you like to book?", "options", SERVICES);
    } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      botReply("Hey! 👋 How can I help you today?", "options", [
        { label: "🔍 Find a Service",      value: "find_service" },
        { label: "📅 Book an Appointment", value: "book" },
        { label: "📍 Find a Branch",       value: "branch" },
      ]);
    } else {
      botReply("I'm not sure about that, but our team can help you directly!", "booking");
    }
  };

  return (
    <>
      {/* ── FLOATING BUTTON ─────────────────────────────────────────── */}
      <AnimatePresence>
        {!open && visible && (
          <motion.div
            className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-2"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}>

            {/* Dismiss X */}
            <button
              onClick={dismiss}
              className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
              style={{
                background: "rgba(20,20,20,0.9)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.5)",
              }}>
              <X size={11} />
            </button>

            {/* Bubble prompt */}
            <motion.div
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl rounded-br-sm cursor-pointer"
              style={{
                background: "rgba(10,10,10,0.95)",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
              <span className="text-[13px] font-medium" style={{ color: "#fff" }}>
                Need help finding a service?
              </span>
            </motion.div>

            {/* Main button */}
            <motion.button
              onClick={() => setOpen(true)}
              className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
              style={{
                background: goldGrad,
                boxShadow: "0 4px 24px rgba(201,168,76,0.45)",
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}>
              <MessageCircle size={24} style={{ color: "#000" }} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Re-open button when dismissed or closed */}
      <AnimatePresence>
        {!open && !visible && !dismissed && (
          <motion.button
            className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
            style={{ background: goldGrad, boxShadow: "0 4px 24px rgba(201,168,76,0.4)" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => { setVisible(true); setOpen(true); }}>
            <MessageCircle size={24} style={{ color: "#000" }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Minimised button — always shows after dismiss so user can re-open */}
      <AnimatePresence>
        {!open && dismissed && (
          <motion.button
            className="fixed bottom-6 right-6 z-[200] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              background: "rgba(10,10,10,0.9)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: gold,
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => { setDismissed(false); setVisible(true); setOpen(true); }}>
            <MessageCircle size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── CHAT WINDOW ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 right-6 z-[200] flex flex-col rounded-3xl overflow-hidden"
            style={{
              width: "360px",
              height: "560px",
              background: "#0A0A0A",
              border: "1px solid rgba(201,168,76,0.2)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
            }}
            initial={{ opacity: 0, scale: 0.85, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}>

            {/* ── HEADER ────────────────────────────────────────────── */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,rgba(201,168,76,0.12),rgba(201,168,76,0.04))",
                borderBottom: "1px solid rgba(201,168,76,0.12)",
              }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: goldGrad }}>
                  <Zap size={16} style={{ color: "#000" }} />
                </div>
                <div>
                  <div className="font-bold text-[14px]" style={{ color: "#fff" }}>
                    Smart Auto UAE
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Online · Replies instantly
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                }}>
                <X size={15} />
              </button>
            </div>

            {/* ── MESSAGES ──────────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
              style={{ scrollbarWidth: "none" }}>

              {msgs.map((msg) => (
                <div key={msg.id}>

                  {/* Bot message */}
                  {msg.role === "bot" && msg.type === "text" && (
                    <motion.div
                      className="flex items-end gap-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5"
                        style={{ background: goldGrad }}>
                        <Zap size={10} style={{ color: "#000" }} />
                      </div>
                      <div
                        className="px-4 py-2.5 rounded-2xl rounded-bl-sm text-[13px] leading-[1.6] max-w-[80%]"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.85)",
                        }}>
                        {msg.text}
                      </div>
                    </motion.div>
                  )}

                  {/* Bot options */}
                  {msg.role === "bot" && msg.type === "options" && (
                    <motion.div
                      className="flex flex-col gap-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}>
                      <div className="flex items-end gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5"
                          style={{ background: goldGrad }}>
                          <Zap size={10} style={{ color: "#000" }} />
                        </div>
                        <div
                          className="px-4 py-2.5 rounded-2xl rounded-bl-sm text-[13px] leading-[1.6] max-w-[80%]"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            color: "rgba(255,255,255,0.85)",
                          }}>
                          {msg.text}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 pl-8">
                        {msg.options?.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleOption(opt.value, opt.label)}
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[12.5px] font-medium cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-left"
                            style={{
                              background: "rgba(201,168,76,0.06)",
                              border: "1px solid rgba(201,168,76,0.2)",
                              color: "rgba(255,255,255,0.75)",
                            }}>
                            {opt.label}
                            <ChevronRight size={13} style={{ color: gold, flexShrink: 0 }} />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Bot booking CTA */}
                  {msg.role === "bot" && msg.type === "booking" && (
                    <motion.div
                      className="flex flex-col gap-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}>
                      <div className="flex items-end gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5"
                          style={{ background: goldGrad }}>
                          <Zap size={10} style={{ color: "#000" }} />
                        </div>
                        {msg.text !== "" && (
                          <div
                            className="px-4 py-2.5 rounded-2xl rounded-bl-sm text-[13px] leading-[1.6] max-w-[80%]"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.07)",
                              color: "rgba(255,255,255,0.85)",
                            }}>
                            {msg.text.startsWith("Hi,") ? "Tap below to confirm your booking 👇" : msg.text}
                          </div>
                        )}
                      </div>
                      <div className="pl-8 flex flex-col gap-2">
                        <a
                          href={waLink(
                            msg.text.startsWith("Hi,")
                              ? msg.text
                              : selectedService
                              ? `Hi, I'd like to book ${selectedService} at Smart Auto UAE.`
                              : "Hi, I'd like to get more information about your services."
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[13px] font-bold no-underline transition-all duration-200 hover:-translate-y-0.5"
                          style={{
                            background: "#25D366",
                            color: "#fff",
                            boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
                          }}>
                          {/* WhatsApp icon */}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Book via WhatsApp
                        </a>
                        <a
                          href="tel:+971567269666"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[12.5px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.7)",
                          }}>
                          <Phone size={13} /> Call +971 56 726 9666
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {/* User message */}
                  {msg.role === "user" && (
                    <motion.div
                      className="flex justify-end"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}>
                      <div
                        className="px-4 py-2.5 rounded-2xl rounded-br-sm text-[13px] leading-[1.6] max-w-[75%]"
                        style={{ background: goldGrad, color: "#000", fontWeight: 500 }}>
                        {msg.text}
                      </div>
                    </motion.div>
                  )}

                </div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    className="flex items-end gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: goldGrad }}>
                      <Zap size={10} style={{ color: "#000" }} />
                    </div>
                    <div
                      className="px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}>
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "rgba(255,255,255,0.4)" }}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* ── INPUT ─────────────────────────────────────────────── */}
            <div
              className="px-4 py-3 flex-shrink-0 flex items-center gap-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl text-[13px] outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#fff",
                  caretColor: gold,
                }}
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 flex-shrink-0"
                style={{
                  background: input.trim() ? goldGrad : "rgba(255,255,255,0.05)",
                  border: input.trim() ? "none" : "1px solid rgba(255,255,255,0.08)",
                  color: input.trim() ? "#000" : "rgba(255,255,255,0.3)",
                }}>
                <Send size={15} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

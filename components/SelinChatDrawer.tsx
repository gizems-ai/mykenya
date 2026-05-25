"use client";

import { useState, useEffect, useRef, useCallback, FormEvent, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.32, 0.72, 0, 1] as const;

const P = {
  kgreen: "#1B5E3F",
  kred:   "#C8302C",
  cream:  "#FDFBF6",
  ink:    "#0F0F0E",
  sand:   "#E2D2AE",
  paper:  "#F7F2E6",
  soft:   "#5E6450",
  line:   "#0F0F0E14",
} as const;

const INITIAL_MESSAGES = [
  { id: "s1", role: "selin" as const, content: "Karibu! I'm Ali — MyKenya's AI concierge. Tell me about your Kenya dream and I'll narrow it down. Selin, our founder, will personally follow up with your tailored itinerary." },
];

interface Message { id: string; role: "selin" | "user"; content: string; }

function SelinAvatar({ size = "sm" }: { size?: "sm" | "md" }) {
  const dim = size === "md" ? 40 : 28;
  return (
    <div style={{
      width: dim, height: dim, borderRadius: "50%",
      background: P.kgreen, color: P.cream,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-newsreader), serif", fontSize: size === "md" ? 18 : 13,
      flexShrink: 0,
    }}>A</div>
  );
}

function TypingDots() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 10, maxWidth: "85%" }}>
      <SelinAvatar />
      <div style={{ background: "white", borderRadius: "16px 16px 16px 4px", padding: "14px 16px", border: `1px solid ${P.line}` }}>
        <div style={{ display: "flex", gap: 5, alignItems: "center", height: 16 }}>
          {[0, 160, 320].map((delay) => (
            <span key={delay} style={{
              width: 8, height: 8, borderRadius: "50%", background: P.kgreen,
              display: "inline-block", animation: "bounce 1.4s infinite",
              animationDelay: `${delay}ms`,
            }} />
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      ` }} />
    </div>
  );
}

function LeadForm({ onSubmit }: { onSubmit: (d: { name: string; email: string }) => Promise<void> }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitting(true);
    try { await onSubmit(form); } finally { setSubmitting(false); }
  };

  const inputStyle = {
    width: "100%", background: P.paper, borderRadius: 12,
    padding: "10px 14px", border: `1px solid ${P.line}`,
    fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14,
    color: P.ink, outline: "none", boxSizing: "border-box" as const,
  };

  return (
    <div style={{ background: "white", borderRadius: 16, padding: 20, border: `1px solid ${P.line}` }}>
      <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 600, color: P.ink, marginBottom: 12 }}>
        Leave your details — Selin will personally send you a tailored shortlist.
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input type="text" placeholder="Your name" value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} required style={inputStyle} />
        <input type="email" placeholder="Your email" value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} required style={inputStyle} />
        <button type="submit" disabled={submitting} style={{
          background: P.kgreen, color: P.cream, border: "none", borderRadius: 24,
          padding: "12px 0", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14,
          cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.6 : 1,
        }}>
          {submitting ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}

function WhatsAppCard() {
  const href = "https://wa.me/254700000000?text=Hi%20Selin%2C%20I%27d%20love%20to%20plan%20my%20Kenya%20trip%20with%20you.";
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 20, border: `1px solid ${P.line}`, textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 600, color: P.ink, marginBottom: 12 }}>
        Continue on WhatsApp — Selin personally replies within the hour.
      </p>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "#25D366", color: "white", borderRadius: 999,
        padding: "10px 20px", textDecoration: "none",
        fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 500,
      }}>
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Open WhatsApp
      </a>
    </div>
  );
}

const SELIN_RESPONSES: Record<string, string> = {
  "mara":       "The Mara is extraordinary — especially during the migration (July–October). I'd pair it with 2–3 nights on the coast. Want me to sketch a route?",
  "coast":      "Diani or Watamu? Diani is livelier with great reefs; Watamu is slower, more eco. Both incredible. Which vibe fits you better?",
  "safari":     "Great — are you after the Big Five, the migration specifically, or a more off-the-beaten-path conservancy like Laikipia?",
  "diani":      "Diani is one of my favorites — the reef snorkeling is unbeatable. Are you thinking adults-only or is this for a family?",
  "lamu":       "Lamu is magical. No cars, time slows down. Peponi Hotel is my go-to. How many nights do you have?",
  "budget":     "Tented camps typically run $700–1,500/night all-in; beach resorts from $300. What's your ballpark per night?",
  "family":     "Perfect — with children, Amboseli is wonderful (elephants + Kilimanjaro!). Or the Mara for the spectacle. How old are the kids?",
  "solo":       "Solo travel in Kenya is genuinely wonderful — especially for women. I've guided many solo travelers. What kind of experience are you after?",
  "couple":     "For couples, I love combining 3 nights in a private tented camp with 4 nights at a boutique beach lodge. Which regions interest you?",
  "honeymoon":  "Congratulations! I'd recommend Cottar's 1920s Camp + The House Diani — that combination is perfection. Shall I put together a detailed outline?",
};

function getSelinResponse(text: string): string {
  const lower = text.toLowerCase();
  for (const [key, resp] of Object.entries(SELIN_RESPONSES)) {
    if (lower.includes(key)) return resp;
  }
  return "That sounds wonderful. Give me a bit more — how long are you thinking, and are there any regions you're set on? That'll help me find the right match.";
}

export default function SelinChatDrawer() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [qualified, setQualified] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const userMsgCount = messages.filter((m) => m.role === "user").length;

  useEffect(() => {
    if (userMsgCount >= 3 && !qualified) setShowLeadForm(true);
  }, [userMsgCount, qualified]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-selin-chat", handler);
    return () => window.removeEventListener("open-selin-chat", handler);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 360);
      return () => clearTimeout(t);
    }
  }, [open]);

  const sendMessage = useCallback((text: string) => {
    const userMsg: Message = { id: `u${Date.now()}`, role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setTimeout(() => {
      const reply: Message = { id: `s${Date.now()}`, role: "selin", content: getSelinResponse(text) };
      setMessages((prev) => [...prev, reply]);
      setIsLoading(false);
    }, 900 + Math.random() * 400);
  }, []);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  }, [input, sendMessage]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }, [handleSend]);

  const handleLeadSubmit = async ({ name, email }: { name: string; email: string }) => {
    const waUrl = `https://wa.me/254700000000?text=${encodeURIComponent(`Hi Selin, my name is ${name} (${email}). I've been exploring Kenya stays and would love your help planning a trip.`)}`;
    setShowLeadForm(false);
    setQualified(true);
    const confirmMsg: Message = { id: `s${Date.now()}`, role: "selin", content: `Thanks, ${name}! I've passed your details to Selin — she'll send you a personal shortlist within the hour. You can also reach her directly on WhatsApp below.` };
    setMessages((prev) => [...prev, confirmMsg]);
    void waUrl;
  };

  return (
    <>
      {/* Floating button */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              style={{
                background: P.ink, color: P.cream,
                fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, fontWeight: 500,
                padding: "6px 12px", borderRadius: 999, pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              Chat with Ali
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((v) => !v)}
          aria-label="Chat with Ali"
          style={{
            width: 56, height: 56, borderRadius: "50%",
            background: P.kgreen, color: P.cream, border: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 4px 24px rgba(27,94,63,0.4)",
            position: "relative",
          }}
          animate={{ y: open ? 0 : [0, -6, 0] }}
          transition={open ? { duration: 0.2 } : { repeat: Infinity, duration: 3, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 22, lineHeight: 1 }}>S</span>
          {!open && (
            <span style={{
              position: "absolute", top: -4, right: -4,
              width: 18, height: 18, borderRadius: "50%",
              background: P.kred, border: "2px solid white",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "white", fontWeight: 700,
            }}>1</span>
          )}
        </motion.button>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.2)", zIndex: 40 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="selin-drawer"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{
              position: "fixed", top: 0, right: 0, height: "100%",
              width: "min(420px, 100vw)",
              background: "white", zIndex: 50,
              display: "flex", flexDirection: "column", boxShadow: "-4px 0 40px rgba(0,0,0,0.15)",
            }}
            aria-label="Ali chat"
          >
            {/* Header */}
            <div style={{ background: P.kgreen, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <SelinAvatar size="md" />
                <div>
                  <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 600, color: "white", margin: 0 }}>Ali · MyKenya AI</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#86efac", display: "inline-block" }} />
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "rgba(255,255,255,0.6)", margin: 0, letterSpacing: 1 }}>AI CONCIERGE · SELIN FOLLOWS UP</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: "50%", display: "flex" }}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: 20, background: P.paper, display: "flex", flexDirection: "column", gap: 16 }}>
              {messages.map((msg) =>
                msg.role === "selin" ? (
                  <div key={msg.id} style={{ display: "flex", alignItems: "flex-end", gap: 10, maxWidth: "85%" }}>
                    <SelinAvatar />
                    <div style={{ background: "white", borderRadius: "16px 16px 16px 4px", padding: "12px 16px", border: `1px solid ${P.line}` }}>
                      <p style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 15, color: P.ink, lineHeight: 1.5, margin: 0 }}>{msg.content}</p>
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} style={{ display: "flex", alignItems: "flex-end", gap: 10, justifyContent: "flex-end" }}>
                    <div style={{ background: P.kgreen, borderRadius: "16px 16px 4px 16px", padding: "12px 16px", maxWidth: "82%" }}>
                      <p style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 15, color: "white", lineHeight: 1.5, margin: 0 }}>{msg.content}</p>
                    </div>
                  </div>
                )
              )}

              {isLoading && <TypingDots />}
              {showLeadForm && !qualified && <LeadForm onSubmit={handleLeadSubmit} />}
              {qualified && <WhatsAppCard />}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {!qualified && (
              <div style={{ padding: "12px 16px", borderTop: `1px solid ${P.line}`, background: "white", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tell Ali about your Kenya dream…"
                  disabled={isLoading}
                  style={{
                    flex: 1, background: P.paper, borderRadius: 999,
                    padding: "10px 16px", border: `1px solid ${P.line}`,
                    fontFamily: "var(--font-newsreader), serif", fontSize: 14, color: P.ink,
                    outline: "none", opacity: isLoading ? 0.5 : 1,
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  aria-label="Send"
                  style={{
                    width: 38, height: 38, borderRadius: "50%",
                    background: P.kgreen, color: "white", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: (isLoading || !input.trim()) ? "not-allowed" : "pointer",
                    opacity: (isLoading || !input.trim()) ? 0.4 : 1, flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            )}

            {/* Bottom link */}
            <div style={{ padding: "8px 16px", background: "white", borderTop: `1px solid ${P.paper}`, flexShrink: 0, textAlign: "center" }}>
              <a href="/planner" style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: P.kgreen, textDecoration: "none" }}>
                Open full AI planner →
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

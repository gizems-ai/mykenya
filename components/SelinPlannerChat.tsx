"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

interface Step {
  key: string | null;
  question: string;
  chips: { label: string; value: string }[];
  multi: boolean;
  isForm?: boolean;
  freeText?: boolean;
  freeTextPlaceholder?: string;
}

const STEPS: Step[] = [
  {
    key: "origin",
    question: "Where are you travelling from?",
    chips: [
      { label: "🇬🇧 UK", value: "UK" },
      { label: "🇺🇸 USA", value: "US" },
      { label: "🇩🇪 Germany", value: "DE" },
      { label: "🇫🇷 France", value: "FR" },
      { label: "🇹🇷 Turkey", value: "TR" },
      { label: "🇦🇪 UAE", value: "AE" },
      { label: "Somewhere else", value: "other" },
    ],
    multi: false,
  },
  {
    key: "companions",
    question: "Who are you travelling with?",
    chips: [
      { label: "Solo", value: "solo" },
      { label: "With a partner", value: "partner" },
      { label: "With friends", value: "friends" },
      { label: "Family with kids", value: "family" },
      { label: "Group", value: "group" },
    ],
    multi: false,
  },
  {
    key: "duration",
    question: "How long do you have?",
    chips: [
      { label: "Under a week", value: "under7" },
      { label: "7–10 days", value: "7-10" },
      { label: "10–14 days", value: "10-14" },
      { label: "2–3 weeks", value: "14-21" },
      { label: "A month+", value: "30+" },
    ],
    multi: false,
  },
  {
    key: "regions",
    question: "Which regions are calling you? Pick all that interest you.",
    chips: [
      { label: "Masai Mara", value: "mara" },
      { label: "Diani Beach", value: "diani" },
      { label: "Lamu / Coast", value: "lamu" },
      { label: "Nairobi", value: "nairobi" },
      { label: "Amboseli", value: "amboseli" },
      { label: "Laikipia / Nanyuki", value: "laikipia" },
      { label: "Selin decides", value: "suggest" },
    ],
    multi: true,
  },
  {
    key: "stayTypes",
    question: "What kind of stays do you want? (Pick any.)",
    chips: [
      { label: "Tented camp", value: "camp" },
      { label: "Beach lodge", value: "beach" },
      { label: "Private villa", value: "villa" },
      { label: "Boutique hotel", value: "boutique" },
      { label: "Mix it up", value: "mix" },
    ],
    multi: true,
  },
  {
    key: "experiences",
    question: "What experiences are you here for?",
    chips: [
      { label: "Game drives", value: "safari" },
      { label: "Migration (Jul–Oct)", value: "migration" },
      { label: "Beach & snorkeling", value: "beach" },
      { label: "Walking / hiking", value: "walking" },
      { label: "Culture & community", value: "culture" },
      { label: "Photography", value: "photography" },
      { label: "Slow travel & rest", value: "slow" },
    ],
    multi: true,
  },
  {
    key: "pace",
    question: "How do you want to move through it?",
    chips: [
      { label: "Slow — linger longer", value: "slow" },
      { label: "Balanced", value: "balanced" },
      { label: "Packed — see everything", value: "active" },
    ],
    multi: false,
  },
  {
    key: "accommodation",
    question: "What level of accommodation?",
    chips: [
      { label: "Comfortable & clean", value: "comfortable" },
      { label: "Boutique & curated", value: "boutique" },
      { label: "Luxury tented", value: "luxury" },
      { label: "Ultra-private / villa", value: "ultraprivate" },
    ],
    multi: false,
  },
  {
    key: "budget",
    question: "What's your ballpark budget per night?",
    chips: [
      { label: "Under $400", value: "under400" },
      { label: "$400 – $800", value: "400-800" },
      { label: "$800 – $1,500", value: "800-1500" },
      { label: "$1,500+", value: "1500+" },
      { label: "Flexible", value: "flexible" },
    ],
    multi: false,
  },
  {
    key: "special",
    question: "Anything Selin should know? (Optional — pick any.)",
    chips: [
      { label: "Honeymoon / anniversary", value: "honeymoon" },
      { label: "First time in Africa", value: "firsttime" },
      { label: "Eco / community focus", value: "eco" },
      { label: "Mobility needs", value: "mobility" },
      { label: "Vegetarian / dietary", value: "dietary" },
      { label: "Nothing special", value: "none" },
    ],
    multi: true,
    freeText: true,
    freeTextPlaceholder: "Any other details for Selin…",
  },
  {
    key: null,
    question: "Almost done — where should Selin send your personalised Kenya shortlist?",
    chips: [],
    multi: false,
    isForm: true,
  },
];

const GENERATING_MSGS = [
  "Reading your answers…",
  "Matching with Selin's curated list…",
  "Cross-checking guide availability…",
  "Composing your Kenya shortlist…",
  "Almost ready — just the finishing touches…",
];

export default function SelinPlannerChat() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [multiSel, setMultiSel] = useState<string[]>([]);
  const [singleSel, setSingleSel] = useState("");
  const [freeText, setFreeText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [genMsgIdx, setGenMsgIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = STEPS[step];
  const total = STEPS.length;

  useEffect(() => { setSingleSel(""); setMultiSel([]); setFreeText(""); }, [step]);

  useEffect(() => {
    if (!isGenerating) return;
    const id = setInterval(() => setGenMsgIdx((i) => (i + 1) % GENERATING_MSGS.length), 2800);
    return () => clearInterval(id);
  }, [isGenerating]);

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  function toggleChip(value: string) {
    if (current.multi) {
      setMultiSel((prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]);
    } else {
      setSingleSel(value);
    }
  }

  function canContinue() {
    if (current.isForm) return false;
    if (current.multi) return multiSel.length > 0;
    return singleSel !== "";
  }

  function advance() {
    if (!current.key) return;
    const value = current.multi
      ? (freeText ? [...multiSel, freeText].filter(Boolean) : multiSel)
      : (freeText ? `${singleSel}; ${freeText}` : singleSel);
    setAnswers((prev) => ({ ...prev, [current.key!]: value }));
    setStep((s) => s + 1);
  }

  async function generate() {
    setError(null);
    if (!firstName.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    setIsGenerating(true);
    setGenMsgIdx(0);

    const summary = Object.entries(answers)
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
      .join("\n");

    const waMsg = `Hi Selin! I've just completed the MyKenya planner. Here are my answers:\n\n${summary}\n\nMy name is ${firstName.trim()} ${lastName.trim()} (${email.trim()}). Looking forward to your Kenya shortlist!`;
    const waUrl = `https://wa.me/905323343613?text=${encodeURIComponent(waMsg)}`;

    await new Promise((r) => setTimeout(r, 4000));
    setIsGenerating(false);
    setDone(true);
    window.open(waUrl, "_blank");
  }

  if (isGenerating) {
    return (
      <div style={{ minHeight: 400, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: "64px 24px" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: P.kgreen, color: P.cream,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-newsreader), serif", fontSize: 24,
          animation: "pulse 2s infinite",
        }}>S</div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        ` }} />
        <AnimatePresence mode="wait">
          <motion.p
            key={genMsgIdx}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 20, color: P.ink, textAlign: "center", margin: 0 }}
          >
            {GENERATING_MSGS[genMsgIdx]}
          </motion.p>
        </AnimatePresence>
        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: P.soft, letterSpacing: 1, textTransform: "uppercase" }}>
          Opening WhatsApp shortly…
        </p>
      </div>
    );
  }

  if (done) {
    return (
      <div style={{ minHeight: 400, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: "64px 24px", textAlign: "center" }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: P.kgreen, color: P.cream,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-newsreader), serif", fontSize: 28,
        }}>✓</div>
        <h2 style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 32, color: P.ink, margin: 0, letterSpacing: -0.8 }}>
          Your answers are with Selin.
        </h2>
        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16, color: P.soft, maxWidth: 440 }}>
          WhatsApp should have opened with your plan summary. If it didn&apos;t, tap below.
        </p>
        <a
          href={`https://wa.me/905323343613?text=${encodeURIComponent(`Hi Selin, I completed the MyKenya planner. My name is ${firstName} ${lastName} (${email}).`)}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#25D366", color: "white", borderRadius: 999,
            padding: "12px 24px", textDecoration: "none",
            fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 500,
          }}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Open WhatsApp
        </a>
      </div>
    );
  }

  const chipStyle = (selected: boolean): React.CSSProperties => ({
    padding: "10px 18px", minHeight: 44, borderRadius: 999,
    border: `1px solid ${selected ? P.kgreen : P.line}`,
    background: selected ? P.kgreen : P.cream,
    color: selected ? P.cream : P.ink,
    fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14,
    cursor: "pointer", transition: "all 150ms ease-out",
  });

  const inputStyle: React.CSSProperties = {
    width: "100%", border: `1px solid ${P.line}`, borderRadius: 12,
    padding: "12px 16px", background: "white", color: P.ink,
    fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15,
    outline: "none", boxSizing: "border-box",
  };

  return (
    <div ref={containerRef} style={{ width: "100%", maxWidth: 640, margin: "0 auto", padding: "0 16px 64px" }}>
      {/* Progress */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: `${P.ink}80` }}>
            Step {step + 1} of {total}
          </span>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: `${P.ink}80` }}>
            {Math.round(((step + 1) / total) * 100)}%
          </span>
        </div>
        <div style={{ height: 3, background: `${P.ink}15`, borderRadius: 999, overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", background: P.kgreen, borderRadius: 999 }}
            animate={{ width: `${((step + 1) / total) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.35 }}
        >
          {/* Selin bubble */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 32 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
              background: P.kred, color: P.cream,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-newsreader), serif", fontSize: 16,
            }}>S</div>
            <div style={{
              background: "white", border: `1px solid ${P.sand}`,
              borderRadius: "0 16px 16px 16px", padding: "16px 20px",
            }}>
              <p style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 20, lineHeight: 1.6, color: P.ink, margin: 0, whiteSpace: "pre-line" }}>
                {current.question}
              </p>
            </div>
          </div>

          {/* Form step */}
          {current.isForm ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: `${P.ink}70`, marginBottom: 6 }}>First name *</label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Jane" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: `${P.ink}70`, marginBottom: 6 }}>Last name</label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                    placeholder="Smith" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: `${P.ink}70`, marginBottom: 6 }}>Email *</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com" style={inputStyle} />
              </div>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, color: `${P.ink}50`, fontStyle: "italic" }}>
                Selin will reply personally — no newsletters, no spam.
              </p>

              {error && <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: P.kred }}>{error}</p>}

              <button onClick={generate} style={{
                background: P.ink, color: P.cream, border: "none", borderRadius: 999,
                padding: "16px 0", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16, fontWeight: 500,
                cursor: "pointer", marginTop: 8,
              }}>
                Send to Selin — build my Kenya →
              </button>
            </div>
          ) : (
            <>
              {/* Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                {current.chips.map((chip) => {
                  const sel = current.multi ? multiSel.includes(chip.value) : singleSel === chip.value;
                  return (
                    <button key={chip.value} onClick={() => toggleChip(chip.value)} style={chipStyle(sel)}>
                      {chip.label}
                    </button>
                  );
                })}
              </div>

              {/* Free text */}
              {current.freeText && (
                <div style={{ marginBottom: 24 }}>
                  <input type="text" value={freeText} onChange={(e) => setFreeText(e.target.value)}
                    placeholder={current.freeTextPlaceholder ?? "…"} style={inputStyle} />
                </div>
              )}

              {/* Continue */}
              <AnimatePresence>
                {canContinue() && (
                  <motion.button
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    onClick={advance}
                    style={{
                      width: "100%", background: P.ink, color: P.cream, border: "none", borderRadius: 999,
                      padding: "16px 0", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    Continue →
                  </motion.button>
                )}
              </AnimatePresence>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

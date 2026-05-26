"use client";

import Link from "next/link";

const P = {
  cream:  "#FDFBF6",
  paper:  "#F7F2E6",
  sand:   "#E2D2AE",
  kgreen: "#1B5E3F",
  kred:   "#C8302C",
  ink:    "#0F0F0E",
  soft:   "rgba(15,15,14,0.6)",
} as const;

const TIMELINE = [
  { year: "İstanbul", label: "The beginning", note: "Born and raised in Turkey. Law degree — disciplined thinking, the habit of reading the small print, a certain intolerance for chaos." },
  { year: "Moda & E-ticaret", label: "The fashion years", note: "Senior management in fashion and e-commerce. Years of understanding what people want before they know they want it. Taste as a professional skill." },
  { year: "Londra", label: "The city before", note: "London — a world-city education. Learning that the best things are rarely the most visible ones. A taste for the edit." },
  { year: "Nairobi", label: "The accident", note: "Her husband's career moved them to Nairobi. She expected a chapter. Kenya had other plans." },
  { year: "2 çocuk", label: "Growing up African", note: "Two children raised in Nairobi. School runs through Westlands, weekends in the Mara, childhood summers on the coast. Kenya became home before anyone decided it would." },
  { year: "MyKenya", label: "The edit", note: "Dozens of friends and strangers asked for her Kenya. She started writing it down. Then building it properly." },
];

const PILLARS = [
  {
    n: "01",
    title: "The lawyer's eye",
    body: "A law degree teaches you to read what's between the lines — to find the gap between what's promised and what's delivered. Every lodge on our list has been stress-tested for that gap. We close it before you arrive.",
  },
  {
    n: "02",
    title: "The fashion executive's taste",
    body: "Years in fashion and e-commerce taught Selin one thing above all: curation is editing. The right ten things, not the safe hundred. That's the only way to build a list worth trusting.",
  },
  {
    n: "03",
    title: "The expat's inside view",
    body: "She didn't visit Kenya. She lived it — school runs, local markets, the doctor's number at 2am, the mechanic who fixes the Land Rover. The city beyond the safari lodge. That's the access we give you.",
  },
  {
    n: "04",
    title: "The mother's logistics",
    body: "Two children raised in Nairobi means she has planned more complex Africa itineraries than most travel companies — nap windows, pediatric malaria doses, kid-safe reef snorkel depths. If you're travelling with children, you're in the right place.",
  },
];

export default function AboutClient() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", background: P.cream }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .ab-hero-grid { grid-template-columns: 1fr !important; }
          .ab-pillar-grid { grid-template-columns: 1fr !important; }
          .ab-tl-grid { grid-template-columns: 1fr !important; }
          .ab-cta-grid { grid-template-columns: 1fr !important; }
          .ab-photo-col { display: none !important; }
          .ab-breadcrumb { padding: 14px 20px !important; }
          .ab-section { padding: 48px 20px !important; }
          .ab-hero-section { padding: 48px 20px 0 !important; }
        }
      `}} />

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div className="ab-breadcrumb" style={{
        background: P.paper, padding: "14px 48px",
        borderBottom: "1px solid rgba(15,15,14,0.10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 8,
      }}>
        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em" }}>
          <Link href="/" style={{ color: "rgba(15,15,14,0.5)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <span style={{ color: P.kred }}>About</span>
        </div>
        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(15,15,14,0.35)" }}>
          Istanbul → London → Nairobi
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="ab-hero-section" style={{ padding: "80px 56px 0" }}>
        <div className="ab-hero-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.1fr 1fr",
          gap: 80, alignItems: "flex-start",
        }}>
          {/* Left */}
          <div>
            <div style={{ width: 48, height: 1, background: P.kred, marginBottom: 16 }} />
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: P.kred, marginBottom: 24 }}>
              § The founder
            </div>
            <h1 style={{
              fontFamily: "var(--font-newsreader), serif", fontWeight: 400,
              fontSize: "clamp(48px, 5.5vw, 80px)", lineHeight: 1.0, letterSpacing: -2,
              color: P.ink, margin: "0 0 36px",
            }}>
              She didn't plan<br />
              to fall in love<br />
              <em style={{ fontStyle: "italic", color: P.kgreen }}>with Kenya.</em>
            </h1>
            <p style={{
              fontFamily: "var(--font-newsreader), serif",
              fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.65,
              color: P.soft, maxWidth: 560, margin: "0 0 24px",
            }}>
              Selin Tapıcı grew up in Istanbul. She studied law, spent years running fashion and e-commerce businesses across Turkey, then followed her husband to London — and then to Nairobi. She expected a posting. She found a life.
            </p>
            <p style={{
              fontFamily: "var(--font-newsreader)", fontSize: "clamp(17px, 1.4vw, 19px)", lineHeight: 1.65,
              color: P.soft, maxWidth: 560, margin: 0,
            }}>
              Her two children grew up in Kenya. She built a partner network from real friendships, not cold emails. And when people kept asking her for her Kenya — the real one, not the brochure version — she started MyKenya.
            </p>
          </div>

          {/* Right — photo */}
          <div className="ab-photo-col" style={{ position: "sticky", top: 100 }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", background: P.sand }}>
              <img
                src="/selin-founder.jpg"
                alt="Selin Tapıcı — Founder, MyKenya"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
              {/* Caption */}
              <div style={{
                position: "absolute", bottom: 16, left: 16,
                background: "rgba(15,15,14,0.75)",
                fontFamily: "var(--font-dm-mono), monospace", fontSize: 10,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: P.cream, padding: "6px 14px", backdropFilter: "blur(4px)",
              }}>
                Selin Tapıcı · Nairobi
              </div>
            </div>
            {/* Hatari Sana note */}
            <div style={{
              marginTop: 12, fontFamily: "var(--font-dm-mono), monospace", fontSize: 10,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(15,15,14,0.35)",
              textAlign: "right",
            }}>
              Hatari Sana — Swahili for "Very Dangerous" ·{" "}
              <span style={{ color: P.kgreen }}>which is what Kenya does to you.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull quote ─────────────────────────────────────────────────────── */}
      <section className="ab-section" style={{ padding: "80px 56px", background: P.kgreen }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 40, height: 1, background: "rgba(253,251,246,0.3)", margin: "0 auto 32px" }} />
          <blockquote style={{
            fontFamily: "var(--font-newsreader), serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.35, letterSpacing: -0.5,
            color: P.cream, margin: "0 0 32px",
          }}>
            "I didn't arrive in Kenya as a traveller. I arrived as someone's wife, in a new city, trying to figure out where to buy decent bread. Kenya taught me the rest."
          </blockquote>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(253,251,246,0.5)" }}>
            Selin Tapıcı · Founder
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────────────────── */}
      <section className="ab-section" style={{ padding: "80px 56px", background: P.paper }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: P.kred, marginBottom: 12 }}>§ The arc</div>
            <h2 style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 400, fontSize: "clamp(32px, 3vw, 48px)", lineHeight: 1.05, letterSpacing: -0.8, color: P.ink, margin: 0 }}>
              How she got here
            </h2>
          </div>
          <div className="ab-tl-grid" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 0 }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ display: "contents" }}>
                {/* Left */}
                <div style={{
                  padding: "28px 32px 28px 0",
                  borderRight: `2px solid ${i === TIMELINE.length - 1 ? "transparent" : P.kred}22`,
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", right: -7, top: 32,
                    width: 12, height: 12, borderRadius: "50%",
                    background: i === TIMELINE.length - 1 ? P.kgreen : P.kred,
                    border: `2px solid ${i === TIMELINE.length - 1 ? P.kgreen : P.kred}`,
                  }} />
                  <div style={{ fontFamily: "var(--font-newsreader), serif", fontStyle: "italic", fontSize: 20, color: P.kred, marginBottom: 4 }}>{item.year}</div>
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(15,15,14,0.35)" }}>{item.label}</div>
                </div>
                {/* Right */}
                <div style={{
                  padding: "28px 0 28px 40px",
                  borderBottom: i < TIMELINE.length - 1 ? "1px solid rgba(15,15,14,0.07)" : "none",
                }}>
                  <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16, lineHeight: 1.65, color: "rgba(15,15,14,0.72)", margin: 0 }}>
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it works ───────────────────────────────────────────────────── */}
      <section className="ab-section" style={{ padding: "80px 56px", background: P.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: P.kred, marginBottom: 12 }}>§ Why it works</div>
            <h2 style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 400, fontSize: "clamp(32px, 3vw, 48px)", lineHeight: 1.05, letterSpacing: -0.8, color: P.ink, margin: 0 }}>
              An unusual combination of skills
            </h2>
          </div>
          <div className="ab-pillar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {PILLARS.map((p) => (
              <div key={p.n} style={{ background: P.paper, padding: "36px 40px" }}>
                <div style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 64, color: P.kred, lineHeight: 1, fontWeight: 300, marginBottom: 16 }}>{p.n}</div>
                <h3 style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 400, fontSize: 26, color: P.ink, margin: "0 0 14px" }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, lineHeight: 1.65, color: P.soft, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What MyKenya is not ────────────────────────────────────────────── */}
      <section className="ab-section" style={{ padding: "72px 56px", background: P.ink }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(253,251,246,0.4)", marginBottom: 40 }}>§ Honest notes</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="ab-cta-grid">
            <div>
              <h3 style={{ fontFamily: "var(--font-newsreader)", fontStyle: "italic", fontWeight: 300, fontSize: 28, color: P.cream, margin: "0 0 16px" }}>What MyKenya is not</h3>
              {[
                "A tour operator with 200 fixed packages",
                "A booking platform that takes a cut",
                "An AI tool that builds itineraries without human review",
                "A service that sends you anywhere without knowing you",
              ].map((line, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                  <span style={{ color: "rgba(253,251,246,0.25)", fontSize: 12, lineHeight: "22px", flexShrink: 0 }}>×</span>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, color: "rgba(253,251,246,0.6)", lineHeight: 1.5 }}>{line}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-newsreader)", fontStyle: "italic", fontWeight: 300, fontSize: 28, color: P.cream, margin: "0 0 16px" }}>What it is</h3>
              {[
                "A personal concierge who has actually been to every place she recommends",
                "An edit — not a catalogue",
                "AI for the logistics, humans for the calls that matter",
                "One conversation that turns into the trip you actually wanted",
              ].map((line, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                  <span style={{ color: P.kgreen, fontSize: 12, lineHeight: "22px", flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, color: "rgba(253,251,246,0.75)", lineHeight: 1.5 }}>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <section className="ab-section" style={{ padding: "64px 56px", background: P.paper, borderBottom: "1px solid rgba(15,15,14,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }} className="ab-cta-grid">
          {[
            { n: "6+", label: "Years living in Nairobi" },
            { n: "48", label: "Vetted partner properties" },
            { n: "1,200+", label: "Travellers guided" },
            { n: "2", label: "Kids raised in Kenya" },
          ].map(({ n, label }) => (
            <div key={label} style={{ padding: "24px 0" }}>
              <div style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 56, color: P.kred, lineHeight: 1, fontWeight: 300 }}>{n}</div>
              <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(15,15,14,0.45)", marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="ab-section" style={{ padding: "80px 56px", background: P.cream }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(15,15,14,0.35)", marginBottom: 20 }}>§ Plan with Selin</div>
          <h2 style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 400, fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: 1.05, letterSpacing: -1, color: P.ink, margin: "0 0 20px" }}>
            She'd love to plan<br />
            <em style={{ fontStyle: "italic", color: P.kgreen }}>your Kenya.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 18, lineHeight: 1.6, color: P.soft, margin: "0 0 44px" }}>
            Start with the AI planner to sketch your trip. Selin reviews everything personally and replies within a few hours.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/planner" style={{
              display: "inline-block", background: P.ink, color: P.cream,
              fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500,
              fontSize: 15, padding: "16px 36px", borderRadius: 999, textDecoration: "none",
            }}>
              Start the planner →
            </a>
            <a
              href="https://wa.me/905323343613?text=Hi%20Selin%2C%20I%27d%20love%20to%20plan%20my%20Kenya%20trip%20with%20you."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#25D366", color: "white",
                fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500,
                fontSize: 15, padding: "16px 28px", borderRadius: 999, textDecoration: "none",
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Selin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

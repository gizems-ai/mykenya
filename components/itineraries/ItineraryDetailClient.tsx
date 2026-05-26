"use client";

import React from "react";
import Link from "next/link";
import { PROGRAMS, PROGRAMS_MAP } from "@/lib/itineraries";
import { CuratedBadge } from "@/components/CuratedBadge";

const P = {
  cream:  "#FDFBF6",
  paper:  "#F7F2E6",
  sand:   "#E2D2AE",
  kgreen: "#1B5E3F",
  kred:   "#C8302C",
  ink:    "#0F0F0E",
} as const;

export default function ItineraryDetailClient({ slug }: { slug: string }) {
  const program = PROGRAMS_MAP[slug] ?? PROGRAMS[0];
  const accent = program.accent;

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", background: P.cream }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .itn-hero-grid  { grid-template-columns: 1fr !important; }
          .itn-meta-grid  { grid-template-columns: 1fr 1fr !important; }
          .itn-day-grid   { grid-template-columns: 1fr !important; }
          .itn-lodge-grid { grid-template-columns: 1fr !important; }
          .itn-prac-grid  { grid-template-columns: 1fr !important; }
          .itn-hon-grid   { grid-template-columns: 1fr !important; }
          .itn-nav-grid   { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* ── 1. Breadcrumb ──────────────────────────────────────────────────── */}
      <div style={{
        background: P.paper, padding: "14px 48px",
        borderBottom: "1px solid rgba(15,15,14,0.10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 8,
      }}>
        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em" }}>
          <Link href="/" style={{ color: "rgba(15,15,14,0.5)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <span style={{ color: "rgba(15,15,14,0.5)" }}>Sample Journeys</span>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <span style={{ color: accent, textTransform: "uppercase" }}>{program.title}</span>
        </div>
        <div style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "rgba(15,15,14,0.45)",
        }}>Journey {program.n} · {program.route}</div>
      </div>

      {/* ── 2. Hero ────────────────────────────────────────────────────────── */}
      <section style={{ background: P.cream, padding: "72px 56px" }}>
        <div className="itn-hero-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.2fr 1fr",
          gap: 80, alignItems: "center",
        }}>
          <div>
            <div style={{ width: 48, height: 1, background: accent, marginBottom: 14 }} />
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
              color: accent, marginBottom: 20,
            }}>{program.kicker}</div>
            <h1 style={{
              fontFamily: "var(--font-newsreader), serif", fontWeight: 400,
              fontSize: "clamp(40px, 4.5vw, 68px)", lineHeight: 1.02, letterSpacing: -1.5,
              color: P.ink, margin: "0 0 28px",
            }}>{program.title}</h1>
            <p style={{
              fontFamily: "var(--font-newsreader), serif",
              fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.6,
              color: "rgba(15,15,14,0.65)", margin: "0 0 40px", maxWidth: 560,
            }}>{program.intro}</p>
            <CuratedBadge />
          </div>
          <div>
            <div style={{ position: "relative", borderRadius: 2, overflow: "hidden", aspectRatio: "4/3" }}>
              <img
                src={program.img}
                alt={program.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(15,15,14,0.6), transparent)",
                padding: "24px 20px 20px",
              }}>
                <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(253,251,246,0.7)" }}>
                  {program.nights} · {program.group}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Meta strip ──────────────────────────────────────────────────── */}
      <div style={{ background: P.ink, padding: "0 56px" }}>
        <div className="itn-meta-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid rgba(253,251,246,0.1)",
        }}>
          {[
            ["Route", program.route],
            ["Duration", program.nights],
            ["Group", program.group],
            ["From", program.from],
          ].map(([label, val]) => (
            <div key={label} style={{
              padding: "28px 0", borderRight: "1px solid rgba(253,251,246,0.08)",
            }}>
              <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(253,251,246,0.4)", marginBottom: 6 }}>{label}</div>
              <div style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 18, color: P.cream }}>{val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Who it's for ────────────────────────────────────────────────── */}
      <section style={{ padding: "64px 56px", background: P.paper, borderBottom: "1px solid rgba(15,15,14,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, marginBottom: 18 }}>This trip is for</div>
            {program.forWhom.map((line, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                <span style={{ color: accent, fontSize: 14, lineHeight: "24px", flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: P.ink, lineHeight: 1.5 }}>{line}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(15,15,14,0.4)", marginBottom: 18 }}>What's included</div>
            {program.includes.map((line, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                <span style={{ color: P.kgreen, fontSize: 14, lineHeight: "24px", flexShrink: 0 }}>·</span>
                <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: P.ink, lineHeight: 1.5 }}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Day-by-day program ──────────────────────────────────────────── */}
      <section style={{ padding: "80px 56px", background: P.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, marginBottom: 12 }}>§ The programme</div>
            <h2 style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 400, fontSize: "clamp(32px, 3vw, 48px)", lineHeight: 1.05, letterSpacing: -0.8, color: P.ink, margin: 0 }}>
              Day by day
            </h2>
          </div>

          <div className="itn-day-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "0" }}>
            {program.days.map((day, i) => (
              <React.Fragment key={i}>
                {/* Left: day label */}
                <div style={{
                  padding: "32px 32px 32px 0",
                  borderRight: `2px solid ${i === program.days.length - 1 ? "transparent" : accent}20`,
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", right: -7, top: 36,
                    width: 12, height: 12, borderRadius: "50%",
                    background: i === program.days.length - 1 ? "transparent" : accent,
                    border: `2px solid ${accent}`,
                  }} />
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, marginBottom: 6 }}>{day.day}</div>
                  <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, color: "rgba(15,15,14,0.45)" }}>{day.location}</div>
                  {day.stay !== "—" && (
                    <div style={{ marginTop: 10, fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "rgba(15,15,14,0.35)", lineHeight: 1.4 }}>{day.stay}</div>
                  )}
                </div>

                {/* Right: content */}
                <div style={{
                  padding: "32px 0 32px 40px",
                  borderBottom: i < program.days.length - 1 ? "1px solid rgba(15,15,14,0.07)" : "none",
                }}>
                  <h3 style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 400, fontSize: 22, color: P.ink, margin: "0 0 16px" }}>{day.title}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {day.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "rgba(15,15,14,0.25)", fontSize: 12, lineHeight: "22px", flexShrink: 0 }}>—</span>
                        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: "rgba(15,15,14,0.75)", lineHeight: 1.55 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Stays ───────────────────────────────────────────────────────── */}
      <section style={{ padding: "72px 56px", background: P.kgreen }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(253,251,246,0.5)", marginBottom: 12 }}>§ Where you sleep</div>
            <h2 style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 400, fontSize: "clamp(28px, 2.5vw, 40px)", lineHeight: 1.05, letterSpacing: -0.5, color: P.cream, margin: 0 }}>
              Curated stays — all vetted, all Selin-approved.
            </h2>
          </div>
          <div className="itn-lodge-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${program.lodges.length}, 1fr)`, gap: 24 }}>
            {program.lodges.map((lodge, i) => (
              <div key={i} style={{
                background: "rgba(253,251,246,0.07)", border: "1px solid rgba(253,251,246,0.12)",
                borderRadius: 2, padding: 28,
              }}>
                <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(253,251,246,0.4)", marginBottom: 6 }}>{lodge.nights}</div>
                <div style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 22, color: P.cream, marginBottom: 4 }}>{lodge.name}</div>
                <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", color: "rgba(253,251,246,0.5)", marginBottom: 16 }}>{lodge.region}</div>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(253,251,246,0.7)", margin: 0 }}>{lodge.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Practical + Honest ──────────────────────────────────────────── */}
      <section style={{ padding: "72px 56px", background: P.paper }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="itn-prac-grid">
          <div>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, marginBottom: 28 }}>§ Practical</div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {program.practical.map(([label, val]) => (
                  <tr key={label} style={{ borderBottom: "1px solid rgba(15,15,14,0.07)" }}>
                    <td style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(15,15,14,0.4)", padding: "12px 20px 12px 0", verticalAlign: "top", whiteSpace: "nowrap" }}>{label}</td>
                    <td style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: P.ink, padding: "12px 0", lineHeight: 1.5 }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(15,15,14,0.4)", marginBottom: 28 }}>§ Honest notes</div>
            {program.honest.map(([title, body], i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500, fontSize: 14, color: P.ink, marginBottom: 6 }}>{title}</div>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "rgba(15,15,14,0.65)", lineHeight: 1.55, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 56px", background: P.ink }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(253,251,246,0.4)", marginBottom: 20 }}>§ Make it yours</div>
          <h2 style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 400, fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: 1.05, letterSpacing: -1, color: P.cream, margin: "0 0 20px" }}>
            This is a starting point,{" "}
            <em style={{ fontStyle: "italic", color: P.sand }}>not a package.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 18, lineHeight: 1.6, color: "rgba(253,251,246,0.6)", margin: "0 0 48px" }}>
            Selin will adapt every day, every lodge, every transfer to your exact group. Tell her the arc you want and she'll tell you what's possible in your window.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/planner"
              style={{
                display: "inline-block", background: accent, color: P.cream,
                fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500,
                fontSize: 15, letterSpacing: "0.02em",
                padding: "16px 36px", borderRadius: 999, textDecoration: "none",
              }}
            >
              Customize this journey →
            </a>
            <a
              href={`https://wa.me/254700000000?text=${encodeURIComponent(`Hi Selin — I'm interested in the "${program.title}" programme. Can we talk through the dates?`)}`}
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

      {/* ── 9. Other journeys ──────────────────────────────────────────────── */}
      <section style={{ padding: "64px 56px", background: P.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(15,15,14,0.4)", marginBottom: 32 }}>§ Other starting points</div>
          <div className="itn-nav-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {PROGRAMS.filter((p) => p.slug !== slug).map((p) => (
              <Link key={p.slug} href={`/itineraries/${p.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: P.paper, border: "1px solid rgba(15,15,14,0.08)",
                  borderTop: `3px solid ${p.accent}`,
                  padding: 24, borderRadius: 2,
                  transition: "transform 150ms",
                }}>
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: p.accent, marginBottom: 8 }}>Journey {p.n}</div>
                  <div style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 20, color: P.ink, marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(15,15,14,0.5)" }}>{p.nights} · {p.route}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

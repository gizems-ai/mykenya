"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EXPERIENCE_DETAIL, EXPERIENCE_FILTERS, MONTHS, type Experience } from "@/lib/experiences";

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  cream:  "#FDFBF6",
  paper:  "#F7F2E6",
  sand:   "#E2D2AE",
  kgreen: "#1B5E3F",
  kred:   "#C8302C",
  ink:    "#0F0F0E",
} as const;

const TAG_COLORS = [P.kred, P.kgreen, P.ink, P.sand, P.kred, P.kgreen, P.ink, P.sand];
const TAG_TEXT   = [P.cream, P.cream, P.cream, P.ink, P.cream, P.cream, P.cream, P.ink];

const SEASON_BG: Record<number, string> = {
  2: P.paper,
  3: P.sand,
  4: "rgba(27,94,63,0.30)",
  5: P.kred,
};
const SEASON_GLYPH: Record<number, string> = { 2: "○", 3: "◐", 4: "●", 5: "●" };
const SEASON_TEXT: Record<number, string> = { 2: P.ink, 3: P.ink, 4: P.cream, 5: P.cream };

// ─── Component ───────────────────────────────────────────────────────────────
export default function ExperiencesClient() {
  const [filter, setFilter]     = useState("All");
  const [featured, setFeatured] = useState<Experience>(EXPERIENCE_DETAIL[0]);

  const visible = filter === "All"
    ? EXPERIENCE_DETAIL
    : EXPERIENCE_DETAIL.filter((e) => e.filterTag === filter);

  // chip selection state for final CTA
  const chipNames = EXPERIENCE_DETAIL.map((e) => e.title);

  return (
    <div style={{ fontFamily: `var(--font-dm-sans), sans-serif`, background: P.cream }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .exp-hero-grid { flex-direction: column !important; }
          .exp-card-grid { grid-template-columns: 1fr 1fr !important; }
          .exp-feat-grid { grid-template-columns: 1fr !important; }
          .exp-season-cols { font-size: 9px !important; }
          .exp-cta-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .exp-card-grid { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* ── 1. Header ─────────────────────────────────────────────────────── */}
      <section style={{ background: P.cream, padding: "72px 48px 64px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase",
          color: P.kred, marginBottom: 20,
        }}>§ Experiences</div>
        <h1 style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(48px, 5vw, 72px)",
          lineHeight: 1.04, letterSpacing: "-0.03em",
          color: P.ink, margin: "0 0 20px",
        }}>
          Eight ways into the{" "}
          <em style={{ color: P.kgreen, fontStyle: "italic" }}>country.</em>
        </h1>
        <p style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 20, lineHeight: 1.55, color: "#5E6450", maxWidth: 600, margin: 0,
        }}>
          Safari, coast, wellness, honeymoon, nomad, family, villa, photography. We plan all eight — and every combination between.
        </p>
      </section>

      {/* ── 2. Filter pills + Card grid ───────────────────────────────────── */}
      <section style={{ background: P.paper, padding: "64px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Filter pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
            {EXPERIENCE_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                  padding: "8px 18px", borderRadius: 100,
                  border: `1.5px solid ${filter === f ? P.ink : "rgba(15,15,14,0.25)"}`,
                  background: filter === f ? P.ink : "transparent",
                  color: filter === f ? P.cream : P.ink,
                  cursor: "pointer", transition: "all 0.15s",
                }}
              >{f}</button>
            ))}
          </div>

          {/* Card grid */}
          <div className="exp-card-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}>
            {visible.map((exp, i) => {
              const globalIdx = EXPERIENCE_DETAIL.indexOf(exp);
              const tagBg = TAG_COLORS[globalIdx % TAG_COLORS.length];
              const tagTx = TAG_TEXT[globalIdx % TAG_TEXT.length];
              const isActive = featured.slug === exp.slug;
              return (
                <div
                  key={exp.slug}
                  onClick={() => setFeatured(exp)}
                  style={{
                    background: P.cream,
                    borderRadius: 8,
                    overflow: "hidden",
                    cursor: "pointer",
                    outline: isActive ? `2px solid ${P.kred}` : "2px solid transparent",
                    outlineOffset: 0,
                    transition: "outline 0.15s",
                  }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                    <img
                      src={exp.img[0]}
                      alt={exp.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    {/* Tag */}
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      background: tagBg, color: tagTx,
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: 100,
                    }}>{exp.tag} · {exp.filterTag}</div>
                  </div>
                  {/* Card body */}
                  <div style={{ padding: "16px 18px 18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                        color: "rgba(15,15,14,0.5)",
                      }}>{exp.region}</span>
                      <span style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10, letterSpacing: "0.1em",
                        color: P.kred,
                      }}>{exp.from}</span>
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 24, fontWeight: 400, color: P.ink, margin: "0 0 6px",
                    }}>{exp.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 14, fontStyle: "italic", color: P.kgreen, margin: "0 0 6px", lineHeight: 1.4,
                    }}>{exp.lead}</p>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13, color: "rgba(15,15,14,0.65)", margin: 0, lineHeight: 1.5,
                    }}>{exp.blurb}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Featured deep dive ─────────────────────────────────────────── */}
      <section style={{ background: P.kgreen, padding: "80px 48px" }}>
        <div className="exp-feat-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start",
        }}>
          {/* Left: image */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden" }}>
              <img
                src={featured.img[0]}
                alt={featured.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Featured label */}
              <div style={{
                position: "absolute", top: 16, left: 16,
                background: P.kred, color: P.cream,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                padding: "5px 12px", borderRadius: 100,
              }}>Featured deep dive</div>
              {/* Region tag bottom-right */}
              <div style={{
                position: "absolute", bottom: 16, right: 16,
                background: P.cream, color: P.ink,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                padding: "5px 12px", borderRadius: 100,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}>{featured.region}</div>
            </div>
          </div>

          {/* Right: copy */}
          <div style={{ paddingTop: 8 }}>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              color: P.sand, marginBottom: 16,
            }}>◇ {featured.kicker}</div>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 56, fontWeight: 400, lineHeight: 1.0,
              letterSpacing: "-0.03em", color: P.cream,
              margin: "0 0 20px",
            }}>{featured.title}.</h2>
            <p style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 20, fontStyle: "italic", color: P.sand,
              margin: "0 0 16px", lineHeight: 1.4,
            }}>{featured.lead}</p>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 16, color: "rgba(253,251,246,0.75)",
              margin: "0 0 32px", lineHeight: 1.6,
            }}>{featured.blurb}</p>

            {/* What we plan */}
            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
                color: P.sand, marginBottom: 12,
              }}>What we plan</div>
              {featured.highlights.map((h, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8,
                }}>
                  <span style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11, color: P.kred, minWidth: 18, marginTop: 1,
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 15, color: P.cream, lineHeight: 1.4,
                  }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Signature stays */}
            <div style={{ marginBottom: 36 }}>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
                color: P.sand, marginBottom: 12,
              }}>Signature stays</div>
              {featured.stays.map((s, i) => (
                <div key={i} style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 18, color: P.cream, marginBottom: 4, lineHeight: 1.3,
                }}>— {s}</div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/planner" style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "13px 24px", borderRadius: 100,
                background: P.cream, color: P.ink,
                textDecoration: "none", display: "inline-block",
              }}>Draft this trip →</Link>
              <Link href={`/experiences/${featured.slug}`} style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "12px 24px", borderRadius: 100,
                background: "transparent", color: P.cream,
                border: `1.5px solid rgba(253,251,246,0.5)`,
                textDecoration: "none", display: "inline-block",
              }}>Read the field guide</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Season matrix ──────────────────────────────────────────────── */}
      <section style={{ background: P.paper, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 36, fontWeight: 400, color: P.ink, margin: 0,
            }}>Honest season, month by month.</h2>
            {/* Legend */}
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              {[["○","2",P.paper],["◐","3",P.sand],["●","4","rgba(27,94,63,0.30)"],["●","5",P.kred]].map(([g, v, bg]) => (
                <div key={v} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 4, background: bg as string,
                    border: "1px solid rgba(15,15,14,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-dm-mono), monospace", fontSize: 12,
                    color: Number(v) >= 4 ? P.cream : P.ink,
                  }}>{g}</div>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "rgba(15,15,14,0.5)", letterSpacing: "0.1em" }}>
                    {v === "2" ? "Quiet" : v === "3" ? "Good" : v === "4" ? "Great" : "Peak"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "rgba(15,15,14,0.5)", textAlign: "left",
                    padding: "8px 16px 8px 0", borderBottom: `1px solid rgba(15,15,14,0.12)`,
                    width: 160,
                  }}>Experience</th>
                  {MONTHS.map((m) => (
                    <th key={m} className="exp-season-cols" style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "rgba(15,15,14,0.5)", textAlign: "center",
                      padding: "8px 4px", borderBottom: `1px solid rgba(15,15,14,0.12)`,
                    }}>{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EXPERIENCE_DETAIL.map((exp, ri) => (
                  <tr key={exp.slug}>
                    <td style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 15, color: P.ink, padding: "8px 16px 8px 0",
                      borderBottom: `1px solid rgba(15,15,14,0.08)`,
                    }}>{exp.title}</td>
                    {exp.season.map((s, ci) => (
                      <td key={ci} style={{
                        padding: "4px",
                        borderBottom: `1px solid rgba(15,15,14,0.08)`,
                      }}>
                        <div style={{
                          background: SEASON_BG[s],
                          border: s === 2 ? "1px solid rgba(15,15,14,0.15)" : "none",
                          borderRadius: 4,
                          width: "100%", height: 28,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 13, color: SEASON_TEXT[s],
                        }}>{SEASON_GLYPH[s]}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. Final CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: P.kred, padding: "80px 48px" }}>
        <div className="exp-cta-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center",
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 48, fontWeight: 400, lineHeight: 1.1,
              letterSpacing: "-0.03em", color: P.cream,
              margin: 0,
            }}>Tell us which track.</h2>
          </div>

          {/* Right: card */}
          <div style={{
            background: P.cream, borderRadius: 12,
            boxShadow: "8px 8px 0 0 #0F0F0E",
            padding: "32px",
          }}>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(15,15,14,0.45)", marginBottom: 20,
            }}>Select your experience</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {EXPERIENCE_DETAIL.map((exp, i) => {
                const preSelected = i === 0 || i === 3;
                return (
                  <div key={exp.slug} style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 13, fontWeight: 500,
                    padding: "7px 16px", borderRadius: 100,
                    background: preSelected ? P.kgreen : "transparent",
                    color: preSelected ? P.cream : P.ink,
                    border: `1.5px solid ${preSelected ? P.kgreen : "rgba(15,15,14,0.2)"}`,
                  }}>{exp.title}</div>
                );
              })}
            </div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(15,15,14,0.35)", marginBottom: 16,
            }}>→ draft in 4h</div>
            <Link href="/planner" style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "13px 24px", borderRadius: 100,
              background: P.ink, color: P.cream,
              textDecoration: "none", display: "inline-block",
            }}>Draft my journey →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

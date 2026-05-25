"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCE_DETAIL, DETAIL_COPY } from "@/lib/experiences";
import { CuratedBadge } from "@/components/CuratedBadge";

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  cream:  "#FDFBF6",
  paper:  "#F7F2E6",
  sand:   "#E2D2AE",
  kgreen: "#1B5E3F",
  kred:   "#C8302C",
  ink:    "#0F0F0E",
} as const;

const CARD_ACCENTS = [P.kred, P.kgreen, P.ink, P.sand];
const CARD_ACCENT_TEXT = [P.cream, P.cream, P.cream, P.ink];
const QUOTE_BG = [P.kred, P.kgreen, P.ink];

export default function SafariDetailClient() {
  const exp   = EXPERIENCE_DETAIL.find((e) => e.slug === "safari")!;
  const copy  = DETAIL_COPY["safari"];

  const activityData = [
    { title: "Game drives", desc: "Private conservancy drives from first light — your vehicle, your pace, your guide's eyes." },
    { title: "Walking safaris", desc: "On foot with Maasai trackers. The bush reads differently at ankle height." },
    { title: "Hot-air balloon", desc: "Dawn over the Mara at altitude. One hour. Champagne breakfast after." },
    { title: "Hide photography", desc: "Custom hides at waterholes. Big cats, patience, natural light." },
  ];

  const relatedExps = copy.relatedSlugs.map((s) => EXPERIENCE_DETAIL.find((e) => e.slug === s)!).filter(Boolean);

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", background: P.cream }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .sd-hero-grid  { grid-template-columns: 1fr !important; }
          .sd-why-grid   { grid-template-columns: 1fr !important; }
          .sd-act-grid   { grid-template-columns: 1fr 1fr !important; }
          .sd-sample-grid{ grid-template-columns: 1fr !important; }
          .sd-stays-grid { grid-template-columns: 1fr 1fr !important; }
          .sd-gal-flex   { flex-wrap: wrap !important; }
          .sd-gal-flex > * { flex: 0 0 33% !important; }
          .sd-prac-grid  { grid-template-columns: 1fr !important; }
          .sd-hon-grid   { grid-template-columns: 1fr !important; }
          .sd-cta-grid   { grid-template-columns: 1fr !important; }
          .sd-rel-grid   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .sd-act-grid   { grid-template-columns: 1fr !important; }
          .sd-stays-grid { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* ── 1. Breadcrumb ──────────────────────────────────────────────────── */}
      <div style={{
        background: P.paper, padding: "14px 48px",
        borderBottom: "1px solid rgba(15,15,14,0.10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em" }}>
          <Link href="/" style={{ color: "rgba(15,15,14,0.5)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <Link href="/experiences" style={{ color: "rgba(15,15,14,0.5)", textDecoration: "none" }}>Experiences</Link>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <span style={{ color: P.kred, textTransform: "uppercase" }}>Safari</span>
        </div>
        <div style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "rgba(15,15,14,0.45)",
        }}>Track 01 · Wild Kenya</div>
      </div>

      {/* ── 2. Hero ────────────────────────────────────────────────────────── */}
      <section style={{ background: P.cream, padding: "72px 56px" }}>
        <div className="sd-hero-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.15fr 1fr",
          gap: 80, alignItems: "center",
        }}>
          {/* Left: text */}
          <div>
            <div style={{
              width: 48, height: 1, background: P.kgreen, marginBottom: 14,
            }} />
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase",
              color: P.kgreen, marginBottom: 20,
            }}>Wild Kenya · Mara · Laikipia · Amboseli</div>
            <h1 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontWeight: 400,
              fontSize: 168, lineHeight: 0.88, letterSpacing: "-0.04em",
              color: P.ink, margin: "0 0 28px",
            }}>
              Safari<span style={{ color: P.kred }}>.</span>
            </h1>
            <p style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 26, fontStyle: "italic", color: P.kgreen,
              margin: "0 0 20px", lineHeight: 1.35,
            }}>{exp.lead}</p>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 17, color: "rgba(15,15,14,0.7)",
              margin: "0 0 36px", lineHeight: 1.65, maxWidth: 520,
            }}>{copy.intro}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/planner" style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "13px 26px", borderRadius: 100,
                background: P.ink, color: P.cream, textDecoration: "none", display: "inline-block",
              }}>Draft my safari →</Link>
              <a href="#sample-day" style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "12px 26px", borderRadius: 100,
                background: "transparent", color: P.ink,
                border: `1.5px solid rgba(15,15,14,0.3)`,
                textDecoration: "none", display: "inline-block",
              }}>See sample days</a>
            </div>
          </div>

          {/* Right: image */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden" }}>
              <img
                src={copy.lodges[0].img}
                alt="Angama Mara"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Caption pill */}
              <div style={{
                position: "absolute", bottom: 16, left: 16,
                background: P.cream, color: P.ink,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                padding: "5px 12px", borderRadius: 100,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}>Mara · Field 041</div>
              {/* Track 01 pill */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                background: P.kred, color: P.cream,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                padding: "5px 12px", borderRadius: 100,
              }}>Track 01</div>
            </div>
            {/* CuratedBadge */}
            <div style={{ position: "absolute", top: -20, right: -20 }}>
              <CuratedBadge size={134} rotate={-12} label="SLOW SAFARI · PRIVATE LAND · NO CONVOYS" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Stat strip ─────────────────────────────────────────────────── */}
      <section style={{
        background: P.paper,
        borderTop: "1px solid rgba(15,15,14,0.15)",
        borderBottom: "1px solid rgba(15,15,14,0.15)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {[
            { label: "Best months", value: copy.bestMonths },
            { label: "Length",      value: exp.days },
            { label: "Group size",  value: copy.groupSize },
            { label: "Pace",        value: copy.pace },
            { label: "From",        value: exp.from },
          ].map((col, i) => (
            <div key={i} style={{
              padding: "22px 24px",
              borderRight: i < 4 ? "1px solid rgba(15,15,14,0.12)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
                color: "rgba(15,15,14,0.4)", marginBottom: 6,
              }}>{col.label}</div>
              <div style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontSize: 24, color: P.ink, lineHeight: 1.15,
              }}>{col.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Why Kenya ──────────────────────────────────────────────────── */}
      <section style={{ background: P.cream, padding: "80px 48px" }}>
        <div className="sd-why-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1.4fr",
          gap: 80, alignItems: "start",
        }}>
          {/* Left */}
          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              color: P.kred, marginBottom: 16,
            }}>§ Why Kenya, why now</div>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 56, fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.03em",
              color: P.ink, margin: 0,
            }}>
              The slow drive,{" "}
              <em style={{ color: P.kgreen, fontStyle: "italic" }}>not the sighting.</em>
            </h2>
          </div>

          {/* Right */}
          <div>
            <p style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 22, lineHeight: 1.5, color: P.ink, margin: "0 0 32px",
            }}>{copy.why.split(".")[0] + "."}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
                  color: P.kgreen, marginBottom: 12, paddingBottom: 8,
                  borderBottom: `1.5px solid ${P.kgreen}`,
                }}>Who it&#39;s for</div>
                {["First-time safari seekers","Photographers and wildlife lovers","Couples seeking real remoteness","Families with patient kids"].map((p, i) => (
                  <div key={i} style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14, color: "rgba(15,15,14,0.75)",
                    padding: "8px 0", borderBottom: "1px solid rgba(15,15,14,0.08)",
                    display: "flex", gap: 8, alignItems: "flex-start",
                  }}>
                    <span style={{ color: P.kgreen, marginTop: 1 }}>→</span>
                    {p}
                  </div>
                ))}
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
                  color: P.kred, marginBottom: 12, paddingBottom: 8,
                  borderBottom: `1.5px solid ${P.kred}`,
                }}>Who it&#39;s not for</div>
                {["Travellers who need a packed itinerary","Those who won't watch the weather","Anyone expecting 100 animals guaranteed","Checklist-first travellers"].map((p, i) => (
                  <div key={i} style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14, color: "rgba(15,15,14,0.75)",
                    padding: "8px 0", borderBottom: "1px solid rgba(15,15,14,0.08)",
                    display: "flex", gap: 8, alignItems: "flex-start",
                  }}>
                    <span style={{ color: P.kred, marginTop: 1 }}>✕</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. What we plan — 4 cards ─────────────────────────────────────── */}
      <section style={{ background: P.paper, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 40, fontWeight: 400, color: P.ink,
            margin: "0 0 40px",
          }}>What we plan.</h2>
          <div className="sd-act-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20,
          }}>
            {activityData.map((act, i) => {
              const accentBg = CARD_ACCENTS[i % CARD_ACCENTS.length];
              const accentTx = CARD_ACCENT_TEXT[i % CARD_ACCENT_TEXT.length];
              return (
                <div key={i} style={{ borderRadius: 8, overflow: "hidden" }}>
                  {/* Accent header */}
                  <div style={{
                    background: accentBg, padding: "20px 20px 16px",
                    display: "flex", flexDirection: "column", gap: 4,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
                      color: accentTx === P.ink ? "rgba(15,15,14,0.5)" : "rgba(253,251,246,0.6)",
                    }}>Day · field</div>
                    <div style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 36, fontWeight: 400, color: accentTx, lineHeight: 1,
                    }}>{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  {/* Image */}
                  <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                    <img
                      src={exp.img[i % exp.img.length]}
                      alt={act.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  {/* Text */}
                  <div style={{ padding: "16px 18px 20px", background: P.cream }}>
                    <h3 style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 24, fontWeight: 400, color: P.ink, margin: "0 0 8px",
                    }}>{act.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13, color: "rgba(15,15,14,0.65)", margin: 0, lineHeight: 1.5,
                    }}>{act.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Sample day ─────────────────────────────────────────────────── */}
      <section id="sample-day" style={{ background: P.kgreen, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase",
              color: P.sand, marginBottom: 12,
            }}>05:30 <em>to stars.</em></div>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 48, fontWeight: 400, lineHeight: 1.05,
              letterSpacing: "-0.03em", color: P.cream, margin: 0,
            }}>
              A day in the{" "}
              <em style={{ fontStyle: "italic", color: P.sand }}>field.</em>
            </h2>
          </div>

          <div className="sd-sample-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64,
          }}>
            {/* Left */}
            <div>
              <p style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontSize: 20, lineHeight: 1.6, color: "rgba(253,251,246,0.75)", margin: 0,
              }}>
                Every day in the bush runs on a rhythm older than any itinerary. Pre-dawn light, the cool air, the first tracks. We don&#39;t fill your day — we let the bush set the pace, and we give you the guide who knows when to stop the vehicle and just listen.
              </p>
            </div>

            {/* Right: timeline */}
            <div>
              {copy.sampleDay.map((row, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "60px 1fr",
                  gap: 16, paddingTop: 16, paddingBottom: 16,
                  borderTop: i > 0 ? "1px solid rgba(253,251,246,0.15)" : "none",
                }}>
                  <div style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 12, letterSpacing: "0.1em",
                    color: "rgba(226,210,174,0.6)",
                    paddingTop: 3,
                  }}>{row.t}</div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 22, color: P.cream, marginBottom: 4, lineHeight: 1.2,
                    }}>{row.title}</div>
                    <div style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 14, color: "rgba(253,251,246,0.65)", lineHeight: 1.5,
                    }}>{row.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Signature stays ────────────────────────────────────────────── */}
      <section style={{ background: P.cream, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 40, fontWeight: 400, color: P.ink, margin: 0,
            }}>
              Six camps we <em style={{ fontStyle: "italic", color: P.kgreen }}>actually stand behind.</em>
            </h2>
            <a href="/planner" style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: P.kred, textDecoration: "none",
            }}>12 more on request →</a>
          </div>
          <div className="sd-stays-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
          }}>
            {copy.lodges.map((lodge, i) => (
              <div key={i}>
                <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden", marginBottom: 14 }}>
                  <img
                    src={lodge.img}
                    alt={lodge.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 22, fontWeight: 400, color: P.ink, margin: "0 0 4px",
                }}>{lodge.name}</h3>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                  color: P.kred, marginBottom: 6,
                }}>{lodge.region}</div>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14, color: "rgba(15,15,14,0.65)", margin: 0, lineHeight: 1.5,
                }}>{lodge.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Gallery row ────────────────────────────────────────────────── */}
      <section style={{ background: P.ink, padding: 0 }}>
        <div className="sd-gal-flex" style={{ display: "flex", gap: 4 }}>
          {copy.gallery.map((url, i) => (
            <div key={i} style={{ flex: 1, aspectRatio: "3/4", overflow: "hidden", minWidth: 0 }}>
              <img
                src={url}
                alt={`Gallery ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. Practical ──────────────────────────────────────────────────── */}
      <section style={{ background: P.paper, padding: "80px 48px" }}>
        <div className="sd-prac-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1.4fr",
          gap: 80, alignItems: "start",
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 56, fontWeight: 400, lineHeight: 1.05,
              letterSpacing: "-0.03em", color: P.ink, margin: "0 0 36px",
            }}>
              The boring{" "}
              <em style={{ fontStyle: "italic", color: P.kgreen }}>things, sorted.</em>
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {copy.practical.map(([key, val], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(15,15,14,0.10)" }}>
                    <td style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "rgba(15,15,14,0.45)", padding: "14px 24px 14px 0",
                      whiteSpace: "nowrap",
                    }}>{key}</td>
                    <td style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 16, color: P.ink, padding: "14px 0",
                    }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 28, fontWeight: 400, color: P.ink, margin: "0 0 24px",
            }}>What to pack</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
              {copy.pack.map((item, i) => (
                <div key={i} style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14, color: "rgba(15,15,14,0.75)", lineHeight: 1.5,
                  padding: "8px 0", borderBottom: "1px solid rgba(15,15,14,0.08)",
                  display: "flex", gap: 8, alignItems: "flex-start",
                }}>
                  <span style={{ color: P.kgreen, marginTop: 1 }}>—</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Honest notes ─────────────────────────────────────────────── */}
      <section style={{ background: P.cream, padding: "80px 48px" }}>
        <div className="sd-hon-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1.4fr",
          gap: 80, alignItems: "start",
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 56, fontWeight: 400, lineHeight: 1.05,
              letterSpacing: "-0.03em", color: P.ink, margin: "0 0 20px",
            }}>
              Honest{" "}
              <em style={{ fontStyle: "italic", color: P.kgreen }}>notes.</em>
            </h2>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15, color: "rgba(15,15,14,0.6)", lineHeight: 1.6, margin: 0,
            }}>These are the things we tell everyone. They won&#39;t stop you coming. They might change when.</p>
          </div>

          {/* Right: rows */}
          <div>
            {copy.honest.map(([headline, body], i) => (
              <div key={i} style={{
                borderTop: "1px solid rgba(15,15,14,0.12)",
                paddingTop: 24, paddingBottom: 24,
              }}>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: P.kred, marginBottom: 8,
                }}>N° {String(i + 1).padStart(2, "0")}</div>
                <h3 style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 26, fontWeight: 400, color: P.ink, margin: "0 0 8px", lineHeight: 1.2,
                }}>{headline}</h3>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 15, color: "rgba(15,15,14,0.65)", margin: 0, lineHeight: 1.6,
                }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Traveler quotes ───────────────────────────────────────────── */}
      <section style={{ background: P.paper, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {copy.quotes.map((q, i) => (
              <div key={i} style={{
                background: QUOTE_BG[i % QUOTE_BG.length],
                borderRadius: 8, padding: "32px",
              }}>
                <p style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 22, fontStyle: "italic", color: P.cream,
                  margin: "0 0 20px", lineHeight: 1.45,
                }}>&ldquo;{q.body}&rdquo;</p>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(253,251,246,0.6)",
                }}>{q.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. Related experiences ───────────────────────────────────────── */}
      <section style={{ background: P.paper, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 40, fontWeight: 400, color: P.ink, margin: 0,
            }}>
              Add another <em style={{ fontStyle: "italic", color: P.kgreen }}>track.</em>
            </h2>
            <Link href="/experiences" style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: P.kred, textDecoration: "none",
            }}>All experiences →</Link>
          </div>
          <div className="sd-rel-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20,
          }}>
            {relatedExps.map((rel, i) => (
              <Link key={rel.slug} href={`/experiences/${rel.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ borderRadius: 8, overflow: "hidden", background: P.cream }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                    <img
                      src={rel.img[0]}
                      alt={rel.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: P.cream, background: P.kred,
                      padding: "4px 10px", borderRadius: 100,
                    }}>{rel.tag}</div>
                  </div>
                  <div style={{ padding: "14px 16px 16px" }}>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                      color: P.kred, marginBottom: 6,
                    }}>{rel.kicker}</div>
                    <h3 style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 22, fontWeight: 400, color: P.ink, margin: 0,
                    }}>{rel.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. Final CTA ────────────────────────────────────────────────── */}
      <section style={{ background: P.kred, padding: "80px 48px" }}>
        <div className="sd-cta-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.4fr 1fr",
          gap: 64, alignItems: "center",
        }}>
          {/* Left */}
          <h2 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 48, fontWeight: 400, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: P.cream, margin: 0,
          }}>
            Draft my <em style={{ fontStyle: "italic" }}>safari.</em>
          </h2>

          {/* Right: card */}
          <div style={{
            background: P.cream, borderRadius: 12,
            boxShadow: "8px 8px 0 0 #0F0F0E",
            padding: "32px",
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {[
                { label: "Window: Late Sep", filled: true },
                { label: "Length: 8 nights", filled: true },
                { label: "Travellers: 2 adults", filled: true },
                { label: "Budget: $$$$", filled: true },
              ].map((chip, i) => (
                <div key={i} style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13, fontWeight: 500,
                  padding: "7px 16px", borderRadius: 100,
                  background: P.kgreen, color: P.cream,
                  border: `1.5px solid ${P.kgreen}`,
                }}>{chip.label}</div>
              ))}
            </div>
            <Link href="/planner" style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "13px 24px", borderRadius: 100,
              background: P.ink, color: P.cream,
              textDecoration: "none", display: "inline-block",
            }}>Draft this trip →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { JOURNAL_ENTRIES, JOURNAL_FILTERS, type JournalEntry } from "@/lib/experiences";

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  cream:  "#FDFBF6",
  paper:  "#F7F2E6",
  sand:   "#E2D2AE",
  kgreen: "#1B5E3F",
  kred:   "#C8302C",
  ink:    "#0F0F0E",
} as const;

function accentBg(accent: string) {
  if (accent === "red")   return P.kred;
  if (accent === "green") return P.kgreen;
  if (accent === "sand")  return P.sand;
  return P.ink; // black
}
function accentText(accent: string) {
  return accent === "sand" ? P.ink : P.cream;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function JournalClient() {
  const [filter, setFilter] = useState("Latest");
  const [nlName, setNlName] = useState("");
  const [nlEmail, setNlEmail] = useState("");
  const [nlState, setNlState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!nlEmail) return;
    setNlState("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nlName, email: nlEmail }),
      });
      setNlState(res.ok ? "done" : "error");
    } catch {
      setNlState("error");
    }
  }

  const visible = filter === "Latest"
    ? JOURNAL_ENTRIES
    : JOURNAL_ENTRIES.filter((e) => {
        if (filter === "Guides") return e.kicker === "Guide";
        return e.kicker === filter;
      });

  const lead = JOURNAL_ENTRIES[0];

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", background: P.cream }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .jnl-lead-grid { grid-template-columns: 1fr !important; }
          .jnl-card-grid { grid-template-columns: 1fr 1fr !important; }
          .jnl-pick-grid { grid-template-columns: 1fr !important; }
          .jnl-pq-grid   { grid-template-columns: 1fr !important; }
          .jnl-nl-grid   { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .jnl-card-grid { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* ── 1. Breadcrumb ─────────────────────────────────────────────────── */}
      <div style={{
        background: P.paper, padding: "14px 48px",
        borderBottom: "1px solid rgba(15,15,14,0.10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 8,
      }}>
        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em" }}>
          <Link href="/" style={{ color: "rgba(15,15,14,0.5)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <span style={{ color: P.kred }}>Journal</span>
        </div>
        <div style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "rgba(15,15,14,0.45)",
        }}>§ Vol. 02 · Mar 2026 · 24 stories</div>
      </div>

      {/* ── 2. Lead feature ───────────────────────────────────────────────── */}
      <section style={{ background: P.paper, padding: "80px 48px" }}>
        <div className="jnl-lead-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.25fr 1fr",
          gap: 56, alignItems: "start",
        }}>
          {/* Left: lead image */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "5/4", borderRadius: 8, overflow: "hidden" }}>
              <img
                src={lead.img}
                alt={lead.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
              }} />
              {/* Accent pill top-left */}
              <div style={{
                position: "absolute", top: 16, left: 16,
                background: accentBg(lead.accent), color: accentText(lead.accent),
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                padding: "5px 12px", borderRadius: 100,
              }}>{lead.kicker}</div>
              {/* Author byline bottom-left */}
              <div style={{
                position: "absolute", bottom: 16, left: 16,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11, letterSpacing: "0.1em",
                color: "rgba(253,251,246,0.85)",
              }}>by {lead.author}</div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            {/* Masthead row */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
                <h2 style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 56, fontWeight: 400, color: P.ink,
                  margin: 0, lineHeight: 1,
                }}>Journal<span style={{ color: P.kred }}>.</span></h2>
                <span style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(15,15,14,0.45)",
                }}>Field guide · vol. 02</span>
              </div>
              <div style={{ height: 2, background: P.ink }} />
            </div>

            {/* Lead story */}
            <div style={{ marginBottom: 36 }}>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
                color: P.kred, marginBottom: 12,
              }}>§ The lead this week</div>
              <h1 style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontSize: 40, fontWeight: 400, lineHeight: 1.1,
                letterSpacing: "-0.02em", color: P.ink, margin: "0 0 14px",
              }}>{lead.title}</h1>
              <p style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontSize: 20, fontStyle: "italic", color: P.kgreen,
                margin: "0 0 24px", lineHeight: 1.45,
              }}>{lead.excerpt}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <Link href={`/journal/${lead.slug}`} style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "12px 22px", borderRadius: 100,
                  background: P.ink, color: P.cream,
                  textDecoration: "none", display: "inline-block",
                }}>Read the lead →</Link>
                <a href="#all-stories" style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "11px 22px", borderRadius: 100,
                  background: "transparent", color: P.ink,
                  border: `1.5px solid rgba(15,15,14,0.3)`,
                  textDecoration: "none", display: "inline-block",
                }}>All stories ↓</a>
              </div>

              {/* Also reading mini-deck */}
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(15,15,14,0.4)", marginBottom: 10,
              }}>Also reading</div>
              {JOURNAL_ENTRIES.slice(1, 4).map((entry) => (
                <Link key={entry.n} href={`/journal/${entry.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    display: "flex", gap: 10, alignItems: "baseline",
                    padding: "9px 0", borderBottom: "1px dashed rgba(15,15,14,0.15)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11, color: P.kred, flexShrink: 0,
                    }}>No. {entry.n}</span>
                    <span style={{ color: "rgba(15,15,14,0.15)" }}>—</span>
                    <span style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 15, color: P.ink, flex: 1, lineHeight: 1.3,
                    }}>{entry.title}</span>
                    <span style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, color: "rgba(15,15,14,0.4)", flexShrink: 0,
                    }}>{entry.read}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Filter + Card grid ─────────────────────────────────────────── */}
      <section id="all-stories" style={{ background: P.cream, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 40, fontWeight: 400, color: P.ink, margin: "0 0 28px",
          }}>
            Everything we&#39;ve <em style={{ fontStyle: "italic", color: P.kgreen }}>written about Kenya.</em>
          </h2>

          {/* Filter pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
            {JOURNAL_FILTERS.map((f) => (
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
          <div className="jnl-card-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28,
          }}>
            {visible.map((entry) => (
              <Link key={entry.n} href={`/journal/${entry.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: P.paper, borderRadius: 8, overflow: "hidden",
                }}>
                  {/* Image */}
                  <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden" }}>
                    <img
                      src={entry.img}
                      alt={entry.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      background: accentBg(entry.accent), color: accentText(entry.accent),
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: 100,
                    }}>{entry.kicker}</div>
                  </div>
                  {/* Body */}
                  <div style={{ padding: "16px 18px 20px" }}>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, letterSpacing: "0.1em",
                      color: "rgba(15,15,14,0.45)", marginBottom: 8,
                    }}>No.{entry.n} · {entry.date} · {entry.read}</div>
                    <h3 style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 22, fontWeight: 400, color: P.ink, margin: "0 0 8px", lineHeight: 1.25,
                    }}>{entry.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 14, color: "rgba(15,15,14,0.65)",
                      margin: "0 0 14px", lineHeight: 1.55,
                    }}>{entry.excerpt}</p>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11, letterSpacing: "0.1em",
                      color: P.kred,
                    }}>by {entry.author} →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Editor's picks ─────────────────────────────────────────────── */}
      <section style={{ background: P.kgreen, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: P.sand, marginBottom: 16,
          }}>Editor&#39;s picks</div>
          <h2 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 40, fontWeight: 400, color: P.cream,
            margin: "0 0 40px",
          }}>
            Three pieces <em style={{ fontStyle: "italic", color: P.sand }}>worth your hour.</em>
          </h2>

          <div className="jnl-pick-grid" style={{
            display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 20,
          }}>
            {/* Large card */}
            <Link href={`/journal/${JOURNAL_ENTRIES[1].slug}`} style={{ textDecoration: "none", borderRadius: 8, overflow: "hidden", background: "rgba(253,251,246,0.08)", display: "block" }}>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <img
                  src={JOURNAL_ENTRIES[1].img}
                  alt={JOURNAL_ENTRIES[1].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ background: P.ink, padding: "24px" }}>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(253,251,246,0.5)", marginBottom: 10,
                }}>{JOURNAL_ENTRIES[1].kicker} · {JOURNAL_ENTRIES[1].date}</div>
                <h3 style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 36, fontWeight: 400, color: P.cream,
                  margin: "0 0 10px", lineHeight: 1.1,
                }}>{JOURNAL_ENTRIES[1].title}</h3>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14, color: "rgba(253,251,246,0.6)", margin: "0 0 14px", lineHeight: 1.5,
                }}>{JOURNAL_ENTRIES[1].excerpt}</p>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11, color: P.sand,
                }}>by {JOURNAL_ENTRIES[1].author}</div>
              </div>
            </Link>

            {/* Side cards */}
            {[JOURNAL_ENTRIES[6], JOURNAL_ENTRIES[9]].map((entry) => (
              <Link key={entry.n} href={`/journal/${entry.slug}`} style={{ textDecoration: "none", borderRadius: 8, overflow: "hidden", display: "block" }}>
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={entry.img}
                    alt={entry.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ background: "rgba(253,251,246,0.08)", padding: "20px" }}>
                  <div style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: P.sand, marginBottom: 8,
                  }}>{entry.kicker} · {entry.date}</div>
                  <h3 style={{
                    fontFamily: "var(--font-newsreader), Georgia, serif",
                    fontSize: 22, fontWeight: 400, color: P.cream,
                    margin: "0 0 8px", lineHeight: 1.2,
                  }}>{entry.title}</h3>
                  <div style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11, color: "rgba(253,251,246,0.55)",
                  }}>by {entry.author}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Pull-quote ─────────────────────────────────────────────────── */}
      <section style={{ background: P.cream, padding: "80px 48px" }}>
        <div className="jnl-pq-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 2fr 1fr",
          gap: 48, alignItems: "center",
        }}>
          {/* Left */}
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: P.kred,
          }}>◇ From the masthead</div>

          {/* Center: quote */}
          <blockquote style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 44, fontStyle: "italic", fontWeight: 400,
            lineHeight: 1.15, letterSpacing: "-0.02em",
            color: P.ink, margin: 0, textAlign: "center",
          }}>
            &ldquo;<span style={{ color: P.kred }}>Kenya</span> doesn&#39;t meet you where you expect. It meets you where you actually are.&rdquo;
          </blockquote>

          {/* Right */}
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, letterSpacing: "0.15em",
            color: "rgba(15,15,14,0.5)", textAlign: "right",
          }}>— Selin Tapıcı<br />Founder · MyKenya</div>
        </div>
      </section>

      {/* ── 6. Newsletter ─────────────────────────────────────────────────── */}
      <section style={{ background: P.kred, padding: "80px 48px" }}>
        <div className="jnl-nl-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.3fr 1fr",
          gap: 64, alignItems: "center",
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 48, fontWeight: 400, lineHeight: 1.1,
              letterSpacing: "-0.03em", color: P.cream,
              margin: "0 0 16px",
            }}>
              One letter,{" "}
              <em style={{ fontStyle: "italic" }}>once a month.</em>
            </h2>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 17, color: "rgba(253,251,246,0.7)", lineHeight: 1.6, margin: 0,
            }}>
              Field notes, one curated stay, one honest travel truth. Written by Selin from Nairobi, Lamu, or wherever she is that month. No algorithms — just the letter.
            </p>
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
              color: "rgba(15,15,14,0.4)", marginBottom: 20,
            }}>§ The Letter · vol. 02</div>

            {nlState === "done" ? (
              <div style={{ padding: "24px 0" }}>
                <div style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 28, fontWeight: 400, color: P.kgreen, marginBottom: 10,
                }}>You&rsquo;re on the list.</div>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14, color: "rgba(15,15,14,0.6)", lineHeight: 1.5,
                }}>
                  The next letter goes out in a few weeks. Selin writes it from wherever she is that month.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div style={{ marginBottom: 16 }}>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={nlName}
                    onChange={(e) => setNlName(e.target.value)}
                    style={{
                      width: "100%", boxSizing: "border-box",
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 20, color: P.ink,
                      background: "transparent",
                      border: "none", borderBottom: `1.5px solid ${P.ink}`,
                      outline: "none", padding: "8px 0", marginBottom: 16,
                    }}
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    required
                    style={{
                      width: "100%", boxSizing: "border-box",
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 20, color: P.ink,
                      background: "transparent",
                      border: "none", borderBottom: `1.5px solid ${P.ink}`,
                      outline: "none", padding: "8px 0",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={nlState === "sending"}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                    padding: "13px 24px", borderRadius: 100,
                    background: P.ink, color: P.cream, border: "none",
                    cursor: nlState === "sending" ? "wait" : "pointer",
                    marginTop: 16, marginBottom: 14, display: "block",
                    opacity: nlState === "sending" ? 0.6 : 1,
                  }}
                >
                  {nlState === "sending" ? "Sending…" : "Send me The Letter →"}
                </button>
                {nlState === "error" && (
                  <div style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10, color: P.kred, marginBottom: 8,
                  }}>Something went wrong — try again or WhatsApp Selin directly.</div>
                )}
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10, letterSpacing: "0.15em",
                  color: "rgba(15,15,14,0.4)",
                }}>No algorithms. One letter. Every 4 weeks.</div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

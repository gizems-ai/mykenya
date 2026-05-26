"use client";

import Link from "next/link";
import { CITY_GUIDES } from "@/lib/data";

const P = {
  cream:  "#FDFBF6",
  paper:  "#F7F2E6",
  sand:   "#E2D2AE",
  kgreen: "#1B5E3F",
  kred:   "#C8302C",
  ink:    "#0F0F0E",
} as const;

export default function CitiesIndexClient() {
  return (
    <div style={{ background: P.cream, fontFamily: "var(--font-dm-sans), sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .ci-grid { grid-template-columns: 1fr 1fr !important; }
          .ci-header-grid { grid-template-columns: 1fr !important; }
          .ci-pad { padding: 48px 24px !important; }
          .ci-breadcrumb { padding: 14px 24px !important; }
        }
        @media (max-width: 480px) {
          .ci-grid { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* Breadcrumb */}
      <div className="ci-breadcrumb" style={{
        background: P.paper, padding: "14px 48px",
        borderBottom: "1px solid rgba(15,15,14,0.10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 8,
      }}>
        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em" }}>
          <Link href="/" style={{ color: "rgba(15,15,14,0.5)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <span style={{ color: P.kred }}>City Guides</span>
        </div>
        <div style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "rgba(15,15,14,0.45)",
        }}>8 cities · curated</div>
      </div>

      {/* Hero */}
      <section className="ci-pad" style={{ background: P.paper, padding: "80px 48px", borderBottom: "2px solid #0F0F0E" }}>
        <div className="ci-header-grid" style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.4fr 1fr",
          gap: 56, alignItems: "end",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              color: P.kred, marginBottom: 20,
            }}>◇ MyKenya · City guides</div>
            <h1 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 400,
              lineHeight: 0.94, letterSpacing: "-0.035em",
              color: P.ink, margin: "0 0 24px",
            }}>
              Eight cities.<br />
              <em style={{ fontStyle: "italic", color: P.kgreen }}>One Kenya.</em>
            </h1>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 18, lineHeight: 1.6, color: "rgba(15,15,14,0.7)",
              maxWidth: 540, margin: 0,
            }}>
              From Nairobi's design-café belt to Lamu's donkey streets — each city guide is written by someone who actually lives near it. Neighbourhood picks, what to avoid, how to arrive.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 120, fontWeight: 400, lineHeight: 1,
              color: "rgba(15,15,14,0.06)", letterSpacing: "-0.05em",
              userSelect: "none",
            }}>08</div>
            <Link href="/planner" style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "13px 26px", borderRadius: 100,
              background: P.ink, color: P.cream, textDecoration: "none",
              display: "inline-block", marginTop: 16,
            }}>Plan your route →</Link>
          </div>
        </div>
      </section>

      {/* City grid */}
      <section className="ci-pad" style={{ padding: "80px 48px", background: P.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="ci-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2,
            background: P.ink,
            border: "2px solid #0F0F0E",
          }}>
            {CITY_GUIDES.map((city, i) => (
              <Link key={city.city} href={`/cities/${city.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ position: "relative", background: P.paper, overflow: "hidden" }} className="city-card">
                  <style dangerouslySetInnerHTML={{ __html: `.city-card:hover .city-img { transform: scale(1.04); } .city-card:hover .city-overlay { opacity: 1; }` }} />

                  {/* Image */}
                  <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                    <img
                      src={Array.isArray(city.img) ? city.img[0] : city.img}
                      alt={city.city}
                      className="city-img"
                      style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        display: "block", transition: "transform 0.4s ease",
                        objectPosition: city.imgPosition?.replace("object-", "") ?? "center",
                      }}
                    />
                    {/* Gradient */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(15,15,14,0.8) 0%, rgba(15,15,14,0.1) 55%, transparent 100%)",
                    }} />
                    {/* Hover overlay */}
                    <div className="city-overlay" style={{
                      position: "absolute", inset: 0,
                      background: "rgba(200,48,44,0.15)",
                      opacity: 0, transition: "opacity 0.3s ease",
                    }} />

                    {/* Flag strip at top */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, display: "flex" }}>
                      {city.flag.map((c, j) => (
                        <div key={j} style={{ flex: 1, background: c }} />
                      ))}
                    </div>

                    {/* Number */}
                    <div style={{
                      position: "absolute", top: 14, right: 14,
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, letterSpacing: "0.15em",
                      color: "rgba(253,251,246,0.6)",
                    }}>0{i + 1}</div>

                    {/* Bottom content */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 18px" }}>
                      <div style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                        color: "rgba(253,251,246,0.6)", marginBottom: 6,
                      }}>{city.kicker}</div>
                      <h2 style={{
                        fontFamily: "var(--font-newsreader), Georgia, serif",
                        fontSize: 28, fontWeight: 400, color: P.cream,
                        margin: "0 0 6px", lineHeight: 1.05,
                      }}>{city.city}</h2>
                      <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 12, color: "rgba(253,251,246,0.7)",
                        margin: "0 0 12px", lineHeight: 1.4,
                      }}>{city.note}</p>
                      <div style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10, color: P.sand, letterSpacing: "0.1em",
                      }}>Open guide →</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ci-pad" style={{ padding: "72px 48px", background: P.kgreen }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: P.sand, marginBottom: 16,
          }}>◇ Not sure where to start?</div>
          <h2 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 44, fontWeight: 400, lineHeight: 1.1,
            color: P.cream, margin: "0 0 16px",
          }}>
            Tell Selin where you want to <em style={{ fontStyle: "italic", color: P.sand }}>feel something.</em>
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 16, color: "rgba(253,251,246,0.7)",
            margin: "0 0 36px", lineHeight: 1.6,
          }}>
            She'll route you through the right cities in the right order, with the right people on the ground.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/planner" style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "14px 28px", borderRadius: 100,
              background: P.cream, color: P.ink, textDecoration: "none",
            }}>Start Planning ↗</Link>
            <a href="https://wa.me/905323343613" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "13px 28px", borderRadius: 100,
              background: "transparent", color: P.cream,
              border: "1.5px solid rgba(253,251,246,0.4)",
              textDecoration: "none",
            }}>WhatsApp Selin →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

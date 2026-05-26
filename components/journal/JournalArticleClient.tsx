"use client";

import Link from "next/link";
import { type JournalEntry } from "@/lib/experiences";
import { type JournalArticle, type ArticleBlock } from "@/lib/journal-articles";
import { JOURNAL_ENTRIES } from "@/lib/experiences";

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
  return P.ink;
}
function accentText(accent: string) {
  return accent === "sand" ? P.ink : P.cream;
}

function renderBlock(block: ArticleBlock, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 20, lineHeight: 1.7, color: P.ink,
          margin: "0 0 24px",
        }}>{block.text}</p>
      );
    case "h2":
      return (
        <h2 key={i} style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 32, fontWeight: 400, lineHeight: 1.2,
          color: P.ink, margin: "48px 0 20px",
          letterSpacing: "-0.02em",
        }}>{block.text}</h2>
      );
    case "pull":
      return (
        <blockquote key={i} style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 26, fontStyle: "italic", fontWeight: 400,
          lineHeight: 1.4, color: P.kgreen,
          borderLeft: `3px solid ${P.kgreen}`,
          margin: "40px 0", padding: "4px 0 4px 28px",
        }}>{block.text}</blockquote>
      );
    case "ul":
      return (
        <ul key={i} style={{
          margin: "0 0 28px 20px", padding: 0,
          listStyleType: "disc",
        }}>
          {block.items.map((item, j) => (
            <li key={j} style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 19, lineHeight: 1.65, color: P.ink,
              marginBottom: 8,
            }}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={i} style={{ overflowX: "auto", margin: "0 0 32px" }}>
          <table style={{
            width: "100%", borderCollapse: "collapse",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
          }}>
            <thead>
              <tr style={{ background: P.ink }}>
                {block.head.map((h, j) => (
                  <th key={j} style={{
                    color: P.cream, padding: "10px 16px",
                    textAlign: "left", fontWeight: 600,
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    fontSize: 11,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} style={{ background: j % 2 === 0 ? P.paper : P.cream }}>
                  {row.map((cell, k) => (
                    <td key={k} style={{
                      padding: "10px 16px", color: P.ink,
                      borderBottom: "1px solid rgba(15,15,14,0.08)",
                    }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "divider":
      return (
        <div key={i} style={{
          margin: "40px 0",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <div style={{ flex: 1, height: 1, background: "rgba(15,15,14,0.12)" }} />
          <span style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 14, color: "rgba(15,15,14,0.3)",
          }}>◇</span>
          <div style={{ flex: 1, height: 1, background: "rgba(15,15,14,0.12)" }} />
        </div>
      );
    default:
      return null;
  }
}

interface Props {
  entry: JournalEntry;
  article: JournalArticle;
}

export default function JournalArticleClient({ entry, article }: Props) {
  const related = JOURNAL_ENTRIES.filter((e) => e.slug !== entry.slug).slice(0, 3);

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", background: P.cream }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .art-hero-grid { flex-direction: column !important; }
          .art-body { padding: 48px 24px !important; }
          .art-related-grid { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* Breadcrumb */}
      <div style={{
        background: P.paper, padding: "14px 48px",
        borderBottom: "1px solid rgba(15,15,14,0.10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 8,
      }}>
        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em" }}>
          <Link href="/" style={{ color: "rgba(15,15,14,0.5)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <Link href="/journal" style={{ color: "rgba(15,15,14,0.5)", textDecoration: "none" }}>Journal</Link>
          <span style={{ color: "rgba(15,15,14,0.3)", margin: "0 8px" }}>→</span>
          <span style={{ color: P.kred }}>No. {entry.n}</span>
        </div>
        <div style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "rgba(15,15,14,0.45)",
        }}>{entry.date} · {entry.read}</div>
      </div>

      {/* Hero */}
      <section style={{ background: P.paper, padding: "0" }}>
        {/* Hero image full-width */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "21/8", overflow: "hidden", maxHeight: 520 }}>
          <img
            src={entry.img}
            alt={entry.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)",
          }} />
          {/* Kicker pill */}
          <div style={{
            position: "absolute", top: 28, left: 48,
            background: accentBg(entry.accent), color: accentText(entry.accent),
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "6px 14px", borderRadius: 100,
          }}>{entry.kicker}</div>
          {/* No. badge */}
          <div style={{
            position: "absolute", top: 28, right: 48,
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, letterSpacing: "0.15em",
            color: "rgba(253,251,246,0.65)",
          }}>No. {entry.n}</div>
        </div>

        {/* Title block */}
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "56px 48px 48px" }}>
          <h1 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400,
            lineHeight: 1.08, letterSpacing: "-0.03em",
            color: P.ink, margin: "0 0 20px",
          }}>{entry.title}</h1>
          <p style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 22, fontStyle: "italic", color: P.kgreen,
            margin: "0 0 32px", lineHeight: 1.45,
          }}>{entry.excerpt}</p>

          {/* Byline row */}
          <div style={{
            display: "flex", alignItems: "center", gap: 16,
            paddingTop: 24, borderTop: "1px solid rgba(15,15,14,0.12)",
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: accentBg(entry.accent),
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontSize: 18, color: accentText(entry.accent), fontStyle: "italic",
              }}>{entry.author[0]}</span>
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 14, fontWeight: 600, color: P.ink,
              }}>{entry.author}</div>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10, letterSpacing: "0.12em",
                color: "rgba(15,15,14,0.45)",
              }}>{entry.date} · {entry.read} read</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="art-body" style={{ background: P.cream, padding: "64px 48px" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          {article.body.map((block, i) => renderBlock(block, i))}
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: P.kgreen, padding: "64px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: P.sand, marginBottom: 16,
          }}>◇ Ready to go?</div>
          <h2 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 44, fontWeight: 400, lineHeight: 1.1,
            color: P.cream, margin: "0 0 16px",
          }}>
            Let Selin plan your <em style={{ fontStyle: "italic", color: P.sand }}>Kenya.</em>
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 16, color: "rgba(253,251,246,0.7)",
            margin: "0 0 36px", lineHeight: 1.6,
          }}>
            Every trip starts with a 30-minute conversation — no forms, no templates. Just your vision and her six years on the ground.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/planner" style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "14px 28px", borderRadius: 100,
              background: P.cream, color: P.ink,
              textDecoration: "none",
            }}>Start Your Journey ↗</a>
            <a
              href="https://wa.me/905323343613"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "13px 28px", borderRadius: 100,
                background: "transparent", color: P.cream,
                border: "1.5px solid rgba(253,251,246,0.4)",
                textDecoration: "none",
              }}
            >WhatsApp Selin →</a>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section style={{ background: P.paper, padding: "80px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: P.kred, marginBottom: 12,
          }}>Also from the journal</div>
          <h2 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: 36, fontWeight: 400, color: P.ink,
            margin: "0 0 40px",
          }}>
            More <em style={{ fontStyle: "italic", color: P.kgreen }}>field notes.</em>
          </h2>

          <div className="art-related-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
          }}>
            {related.map((rel) => (
              <Link key={rel.n} href={`/journal/${rel.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: P.cream, borderRadius: 8, overflow: "hidden",
                  transition: "transform 0.15s",
                }}>
                  <div style={{ position: "relative", aspectRatio: "5/3", overflow: "hidden" }}>
                    <img
                      src={rel.img}
                      alt={rel.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      background: accentBg(rel.accent), color: accentText(rel.accent),
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: 100,
                    }}>{rel.kicker}</div>
                  </div>
                  <div style={{ padding: "18px 20px 22px" }}>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10, color: "rgba(15,15,14,0.45)",
                      marginBottom: 8, letterSpacing: "0.1em",
                    }}>No. {rel.n} · {rel.read}</div>
                    <h3 style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: 22, fontWeight: 400, color: P.ink,
                      margin: "0 0 8px", lineHeight: 1.2,
                    }}>{rel.title}</h3>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11, color: P.kred,
                    }}>Read →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/journal" style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "13px 28px", borderRadius: 100,
              border: `1.5px solid rgba(15,15,14,0.3)`,
              color: P.ink, textDecoration: "none",
              display: "inline-block",
            }}>← Back to all stories</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

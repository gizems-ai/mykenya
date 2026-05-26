"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CuratedBadge } from "@/components/CuratedBadge";
import type { CityData, NeighboringGuide } from "@/lib/cities";

// ─── colour tokens ───────────────────────────────────────────────
const C = {
  kred: "#C8302C",
  kgreen: "#1B5E3F",
  ksky: "#7BCEEA",
  ink: "#0F0F0E",
  cream: "#FDFBF6",
  sand: "#E2D2AE",
  paper: "#F7F2E6",
};

// ─── accent helpers ───────────────────────────────────────────────
function accentBg(a: string) {
  if (a === "green") return C.kgreen;
  if (a === "red") return C.kred;
  if (a === "sand") return C.sand;
  return C.ink; // black
}
function accentText(a: string) {
  return a === "sand" ? C.ink : C.cream;
}

// ─── small helpers ────────────────────────────────────────────────
function MonoKicker({
  children,
  color = C.kred,
  style = {},
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function SerialTitle({
  text,
  style = {},
}: {
  text: string;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-newsreader), serif",
        fontStyle: "italic",
        color: C.kgreen,
        margin: "12px 0 0",
        lineHeight: 1.05,
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html: text.replace(/\*(.*?)\*/g, "<em>$1</em>"),
      }}
    />
  );
}

// ─── Flag strip ───────────────────────────────────────────────────
function FlagStrip({
  colors,
  height = 14,
}: {
  colors: string[];
  height?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        height,
        border: "1px solid " + C.ink,
        overflow: "hidden",
        width: "100%",
      }}
    >
      {colors.map((c, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            background: c,
            borderRight: i < colors.length - 1 ? "1px solid " + C.ink : "none",
          }}
        />
      ))}
    </div>
  );
}

// ─── Tab pill ─────────────────────────────────────────────────────
function TabPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        padding: "6px 16px",
        border: "1px solid " + C.ink,
        background: active ? C.ink : "transparent",
        color: active ? C.cream : C.ink,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────
export default function CityGuideClient({
  city,
  neighboring,
}: {
  city: CityData;
  neighboring: NeighboringGuide[];
}) {
  const [activeTab, setActiveTab] = useState<"eat" | "do" | "stay">("eat");

  // fortyEight items all have day + t fields (grouping done inline via isNewDay)

  return (
    <>
      {/* ── mobile overrides ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@media (max-width: 768px) {
  .city-name-big { font-size: 80px !important; }
  .masthead-city-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  .stat-strip-grid { grid-template-columns: 1fr 1fr !important; }
  .neighborhood-grid { grid-template-columns: 1fr !important; }
  .list-two-col { grid-template-columns: 1fr !important; }
  .stays-grid { grid-template-columns: 1fr !important; }
  .forty-eight-grid { grid-template-columns: 1fr !important; }
  .timeline-row-cols { grid-template-columns: 60px 140px 1fr !important; }
  .gallery-flex { flex-wrap: wrap !important; }
  .gallery-flex > div { flex: 0 0 calc(50% - 2px) !important; }
  .practical-grid { grid-template-columns: 1fr !important; }
  .honest-grid { grid-template-columns: 1fr !important; }
  .neighboring-grid { grid-template-columns: 1fr 1fr !important; }
  .cta-grid { grid-template-columns: 1fr !important; }
  .masthead-pad { padding: 40px 24px !important; }
  .section-pad { padding-left: 24px !important; padding-right: 24px !important; }
  .breadcrumb-wrap { padding: 14px 24px !important; }
}
@media (max-width: 480px) {
  .neighboring-grid { grid-template-columns: 1fr !important; }
}
`,
        }}
      />

      {/* ─── A. Breadcrumb ─────────────────────────────────────────── */}
      <div
        className="breadcrumb-wrap"
        style={{
          padding: "20px 56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          opacity: 0.65,
          borderBottom: "1px solid rgba(15,15,14,0.12)",
          background: C.cream,
        }}
      >
        <span>
          Home → City Guides →{" "}
          <span style={{ color: C.kred, opacity: 1 }}>{city.city}</span>
        </span>
        <span>§ City file · No. 01 · Vol. 02</span>
      </div>

      {/* ─── B. Masthead ───────────────────────────────────────────── */}
      <div
        className="masthead-pad"
        style={{
          background: C.ksky,
          padding: "48px 56px 80px",
        }}
      >
        {/* masthead bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: "2px solid " + C.ink,
            paddingBottom: 10,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-newsreader), serif",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            MyKenya — City Guides
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.14em",
            }}
          >
            № 01 · {city.city} · Kenya · Vol. 02
          </span>
        </div>

        {/* city row */}
        <div
          className="masthead-city-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 56,
            alignItems: "end",
            marginBottom: 40,
          }}
        >
          {/* left column */}
          <div>
            <MonoKicker color={C.kred} style={{ marginBottom: 10 }}>
              ◇ {city.kicker} · Kenya
            </MonoKicker>
            <h1
              className="city-name-big"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: 220,
                lineHeight: 0.84,
                letterSpacing: "-0.04em",
                color: C.ink,
                margin: "0 0 20px",
              }}
            >
              {city.city}
              <span style={{ color: C.kred }}>.</span>
            </h1>
            <FlagStrip colors={city.flag} height={14} />
          </div>

          {/* right column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontStyle: "italic",
                fontSize: 26,
                color: C.kgreen,
                margin: "0 0 16px",
                lineHeight: 1.25,
              }}
            >
              {city.motto}
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                opacity: 0.85,
                margin: 0,
                color: C.ink,
              }}
            >
              {city.intro}
            </p>
          </div>
        </div>

        {/* Hero image — matches handoff: CuratedBadge floats above-right of image */}
        <div style={{ marginTop: 48, position: "relative" }}>
          <div
            style={{
              position: "relative",
              aspectRatio: "16/7",
              overflow: "hidden",
            }}
          >
            <Image
              src={city.hero.img}
              alt={city.hero.caption}
              fill
             
              style={{ objectFit: "cover" }}
            />
            {/* caption pill */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                background: C.cream,
                padding: "8px 14px",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: C.ink,
              }}
            >
              {city.hero.caption}
            </div>
          </div>
          {/* CuratedBadge overflows top-right, matching handoff top:-22 right:-28 */}
          <div style={{ position: "absolute", top: -22, right: -28 }}>
            <CuratedBadge
              size={130}
              rotate={-12}
              label={`GOOD MORNING · ${city.city.toUpperCase()} · 1,795 M ASL`}
            />
          </div>
        </div>

        {/* Stat strip */}
        <div
          className="stat-strip-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            marginTop: 0,
          }}
        >
          {city.stats.map(([key, val]) => (
            <div
              key={key}
              style={{
                background: C.cream,
                border: "1px solid " + C.ink,
                padding: "22px 22px",
              }}
            >
              <MonoKicker color={C.ink} style={{ opacity: 0.5, marginBottom: 6 }}>
                {key}
              </MonoKicker>
              <p
                style={{
                  fontFamily: "var(--font-newsreader), serif",
                  fontSize: 22,
                  margin: 0,
                  color: C.ink,
                  lineHeight: 1.1,
                }}
              >
                {val}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── C. Neighborhoods ──────────────────────────────────────── */}
      <div
        className="section-pad"
        style={{
          background: C.cream,
          padding: "120px 56px 60px",
        }}
      >
        {/* section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 40,
            alignItems: "start",
            marginBottom: 48,
          }}
        >
          <div>
            <MonoKicker>§ The map · four quarters</MonoKicker>
            <SerialTitle text={`${city.city} runs *on four quarters.*`} style={{ fontSize: 64 }} />
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: C.ink,
              margin: "auto 0 0",
              opacity: 0.8,
            }}
          >
            The city changes character every fifteen minutes by car. Pick where
            you sleep accordingly.
          </p>
        </div>

        {/* 2×2 grid */}
        <div
          className="neighborhood-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
          }}
        >
          {city.neighborhoods.map((nb) => {
            const bg = accentBg(nb.accent);
            const fg = accentText(nb.accent);
            return (
              <article
                key={nb.n}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: C.cream,
                  border: `1px solid rgba(15,15,14,0.08)`,
                }}
              >
                {/* image */}
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "16/9",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={nb.img}
                      alt={nb.name}
                      fill
                     
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  {/* accent pill */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: bg,
                      color: fg,
                      padding: "4px 12px",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {nb.n} · Quarter
                  </div>
                </div>
                {/* text */}
                <div style={{ padding: "22px 26px 26px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: 4,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-newsreader), serif",
                        fontSize: 36,
                        margin: 0,
                        color: C.ink,
                        lineHeight: 1,
                      }}
                    >
                      {nb.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 22,
                        color: bg === C.sand ? C.ink : bg,
                        lineHeight: 1,
                      }}
                    >
                      №{nb.n}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-newsreader), serif",
                      fontStyle: "italic",
                      fontSize: 14,
                      color: C.kgreen,
                      margin: "0 0 8px",
                    }}
                  >
                    {nb.sub}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: C.ink,
                      margin: 0,
                      opacity: 0.85,
                    }}
                  >
                    {nb.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ─── D. The List ───────────────────────────────────────────── */}
      <div
        className="section-pad"
        style={{
          background: C.cream,
          padding: "60px 56px 100px",
        }}
      >
        {/* pinned header */}
        <div
          style={{
            borderBottom: "2px solid " + C.ink,
            paddingBottom: 20,
            marginBottom: 40,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <MonoKicker>§ The list · curated</MonoKicker>
            <h2
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontSize: 56,
                margin: "8px 0 0",
                lineHeight: 1,
                color: C.ink,
              }}
              dangerouslySetInnerHTML={{
                __html: "Where to eat, what to do, <em>where to put your head.</em>",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 0 }}>
            <TabPill
              label="Eat & drink"
              active={activeTab === "eat"}
              onClick={() => setActiveTab("eat")}
            />
            <TabPill
              label="Do"
              active={activeTab === "do"}
              onClick={() => setActiveTab("do")}
            />
            <TabPill
              label="Stay"
              active={activeTab === "stay"}
              onClick={() => setActiveTab("stay")}
            />
          </div>
        </div>

        {/* Eat & drink */}
        {activeTab === "eat" && (
          <div
            className="list-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }}
          >
            {[city.eat.slice(0, 3), city.eat.slice(3, 6)].map((col, ci) => (
              <div key={ci}>
                {col.map(([name, desc, cat], i) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 16,
                      padding: "18px 0",
                      borderBottom: "1px solid rgba(15,15,14,0.12)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 11,
                        color: C.kred,
                        letterSpacing: "0.1em",
                        minWidth: 32,
                        flexShrink: 0,
                      }}
                    >
                      N°{ci * 3 + i + 1}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: "var(--font-newsreader), serif",
                          fontSize: 28,
                          margin: 0,
                          lineHeight: 1.1,
                          color: C.ink,
                        }}
                      >
                        {name}
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          margin: "3px 0 0",
                          opacity: 0.65,
                          color: C.ink,
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        color: C.kred,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >
                      {cat}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Do */}
        {activeTab === "do" && (
          <div
            className="list-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }}
          >
            {[city.do.slice(0, 3), city.do.slice(3, 6)].map((col, ci) => (
              <div key={ci}>
                {col.map(([name, desc, dur], i) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 16,
                      padding: "18px 0",
                      borderBottom: "1px solid rgba(15,15,14,0.12)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 11,
                        color: C.kred,
                        letterSpacing: "0.1em",
                        minWidth: 32,
                        flexShrink: 0,
                      }}
                    >
                      N°{ci * 3 + i + 1}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: "var(--font-newsreader), serif",
                          fontSize: 28,
                          margin: 0,
                          lineHeight: 1.1,
                          color: C.ink,
                        }}
                      >
                        {name}
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          margin: "3px 0 0",
                          opacity: 0.65,
                          color: C.ink,
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        color: C.kred,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >
                      {dur}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Stay */}
        {activeTab === "stay" && (
          <div
            className="stays-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
          >
            {city.stays.map((stay) => (
              <div key={stay.name}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    marginBottom: 14,
                  }}
                >
                  <Image
                    src={stay.img}
                    alt={stay.name}
                    fill
                   
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <MonoKicker color={C.kred} style={{ marginBottom: 6 }}>
                  {stay.area}
                </MonoKicker>
                <p
                  style={{
                    fontFamily: "var(--font-newsreader), serif",
                    fontSize: 28,
                    margin: "0 0 8px",
                    lineHeight: 1.1,
                    color: C.ink,
                  }}
                >
                  {stay.name}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, opacity: 0.75 }}>
                  {stay.note}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── E. 48 Hours ───────────────────────────────────────────── */}
      <div
        className="section-pad"
        style={{
          background: C.kgreen,
          padding: "100px 56px",
          color: C.cream,
        }}
      >
        <div
          className="forty-eight-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          {/* left */}
          <div>
            <MonoKicker color={C.sand} style={{ marginBottom: 10 }}>
              § 48 hours in {city.city}
            </MonoKicker>
            <h2
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontStyle: "italic",
                fontSize: 64,
                color: C.cream,
                margin: "0 0 24px",
                lineHeight: 1,
              }}
              dangerouslySetInnerHTML={{
                __html: "Two days, <em style='color:#E2D2AE'>done properly.</em>",
              }}
            />
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: C.cream,
                opacity: 0.8,
                maxWidth: 320,
                margin: 0,
              }}
            >
              The sequence that actually works — not too much, exactly right.
              Built around the city&rsquo;s rhythms, not against them.
            </p>
          </div>

          {/* right — timeline, day headers inserted inline */}
          <div style={{ borderTop: `1px solid rgba(253,251,246,0.3)` }}>
            {city.fortyEight.map((row, i) => {
              const isNewDay = i === 0 || city.fortyEight[i - 1].day !== row.day;
              return (
                <React.Fragment key={i}>
                  {isNewDay && (
                    <div
                      style={{
                        padding: "20px 0 8px",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: C.sand,
                      }}
                    >
                      ◇ {row.day}
                    </div>
                  )}
                  <div
                    className="timeline-row-cols"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "90px 220px 1fr",
                      gap: "0 32px",
                      alignItems: "baseline",
                      padding: "18px 0",
                      borderBottom: "1px solid rgba(253,251,246,0.2)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 13,
                        letterSpacing: "0.1em",
                        color: C.sand,
                      }}
                    >
                      {row.t}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-newsreader), serif",
                        fontSize: 22,
                        color: C.cream,
                        lineHeight: 1.15,
                      }}
                    >
                      {row.title}
                    </span>
                    <span style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.85, color: C.cream }}>
                      {row.note}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── F. Gallery row — full bleed, 6-col grid, 3/4 ratio ──── */}
      <div style={{ padding: "60px 0", background: C.cream }}>
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 4,
          }}
        >
          {city.galleryStrip.map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
               
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ─── G. Practical + Getting around ────────────────────────── */}
      <div
        className="section-pad"
        style={{
          background: C.paper,
          padding: "80px 56px",
        }}
      >
        <div
          className="practical-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
        >
          {/* practical */}
          <div>
            <MonoKicker style={{ marginBottom: 10 }}>§ The practical bit</MonoKicker>
            <h3
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontSize: 44,
                margin: "0 0 28px",
                lineHeight: 1.05,
                color: C.ink,
              }}
              dangerouslySetInnerHTML={{
                __html: "The boring <em>things, sorted.</em>",
              }}
            />
            <div>
              {city.practical.map(([key, val]) => (
                <div
                  key={key}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "160px 1fr",
                    gap: 16,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(15,15,14,0.1)",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: C.kred,
                    }}
                  >
                    {key}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-newsreader), serif",
                      fontSize: 18,
                      color: C.ink,
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* getting around */}
          <div>
            <MonoKicker style={{ marginBottom: 10 }}>§ Getting around</MonoKicker>
            <h3
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontSize: 44,
                margin: "0 0 28px",
                lineHeight: 1.05,
                color: C.ink,
              }}
              dangerouslySetInnerHTML={{
                __html: "Moving <em>through it.</em>",
              }}
            />
            <div>
              {city.getAround.map(([mode, desc]) => (
                <div
                  key={mode}
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(15,15,14,0.1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-newsreader), serif",
                      fontSize: 20,
                      margin: "0 0 4px",
                      color: C.ink,
                    }}
                  >
                    {mode}
                  </p>
                  <p style={{ fontSize: 14, margin: 0, opacity: 0.7, color: C.ink }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── H. Honest notes ───────────────────────────────────────── */}
      <div
        className="section-pad"
        style={{
          background: C.cream,
          padding: "120px 56px",
        }}
      >
        <div
          className="honest-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          {/* left */}
          <div>
            <MonoKicker style={{ marginBottom: 10 }}>§ No filter</MonoKicker>
            <h2
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontSize: 56,
                margin: "0 0 20px",
                lineHeight: 1,
                color: C.ink,
              }}
              dangerouslySetInnerHTML={{ __html: "Honest <em>notes.</em>" }}
            />
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                opacity: 0.75,
                maxWidth: 320,
                margin: 0,
                color: C.ink,
              }}
            >
              Things we wish someone had told us on day one. Not scare quotes —
              just the shape of the city.
            </p>
          </div>

          {/* right */}
          <div>
            {city.honest.map(([title, body], i) => (
              <div
                key={title}
                style={{
                  padding: "24px 0",
                  borderTop: "1px solid rgba(15,15,14,0.2)",
                  borderBottom: "1px solid rgba(15,15,14,0.2)",
                  marginTop: i > 0 ? -1 : 0,
                }}
              >
                <MonoKicker color={C.kred} style={{ marginBottom: 8 }}>
                  N° {String(i + 1).padStart(2, "0")}
                </MonoKicker>
                <p
                  style={{
                    fontFamily: "var(--font-newsreader), serif",
                    fontSize: 24,
                    margin: "0 0 8px",
                    lineHeight: 1.15,
                    color: C.ink,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                    opacity: 0.75,
                    color: C.ink,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── I. Neighboring guides — ksky shelf ────────────────────── */}
      <div
        className="section-pad"
        style={{
          background: C.ksky,
          padding: "100px 56px",
        }}
      >
        {/* header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: "2px solid " + C.ink,
            paddingBottom: 16,
            marginBottom: 0,
            gap: 16,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-newsreader), serif",
              fontSize: 44,
              margin: 0,
              lineHeight: 1,
              color: C.ink,
            }}
          >
            Other city guides
            <span style={{ color: C.kred }}>.</span>
          </h2>
          <a
            href="/destinations"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: C.ink,
              textDecoration: "none",
            }}
          >
            All 8 cities →
          </a>
        </div>

        {/* 4-column grid */}
        <div
          className="neighboring-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {neighboring.map((g, i) => (
            <a
              key={g.slug}
              href={`/destinations/${g.slug}`}
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                padding: 20,
                background: C.ksky,
                borderLeft: i > 0 ? "1.5px solid " + C.ink : "none",
                borderBottom: "1px solid " + C.ink,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-newsreader), serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0 0 4px",
                  borderBottom: "1px solid " + C.ink,
                  paddingBottom: 6,
                }}
              >
                MyKenya City Guides
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 700,
                  fontSize: 32,
                  margin: "10px 0 10px",
                  color: C.ink,
                  lineHeight: 1,
                }}
              >
                {g.city}
              </p>
              <FlagStrip colors={g.flag} height={10} />
              <div
                style={{
                  position: "relative",
                  aspectRatio: "5/6",
                  overflow: "hidden",
                  margin: "10px 0",
                  border: "1px solid " + C.ink,
                  borderTop: "none",
                }}
              >
                <Image
                  src={g.img}
                  alt={g.city}
                  fill
                 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <MonoKicker color={C.kred} style={{ marginBottom: 6 }}>
                {g.kicker}
              </MonoKicker>
              <p style={{ fontSize: 13, margin: 0, lineHeight: 1.55, color: C.ink }}>
                {g.note}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* ─── J. Final CTA — kred bg ────────────────────────────────── */}
      <div
        className="section-pad"
        style={{
          background: C.kred,
          padding: "120px 56px",
        }}
      >
        <div
          className="cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          {/* left */}
          <div>
            <MonoKicker color={C.sand} style={{ marginBottom: 16 }}>
              § Pack your days right
            </MonoKicker>
            <h2
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontSize: 104,
                margin: "0 0 20px",
                lineHeight: 0.9,
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: C.cream,
              }}
              dangerouslySetInnerHTML={{
                __html: `Three days,<br/><em style='font-style:italic'>perfectly stitched.</em>`,
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontStyle: "italic",
                fontSize: 22,
                color: C.sand,
                margin: "0 0 16px",
              }}
            >
              We map it, you live it.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: C.cream,
                opacity: 0.8,
                maxWidth: 420,
                margin: "0 0 32px",
              }}
            >
              Tell Selin your dates, your pace, your one non-negotiable. She&rsquo;ll draft
              the full {city.city} run in under four hours — every booking, every
              transition, every quiet hour accounted for.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
              <a
                href="/planner"
                style={{
                  display: "inline-block",
                  background: C.cream,
                  color: C.kred,
                  padding: "20px 32px",
                  borderRadius: 999,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Plan my {city.city} →
              </a>
              <a
                href="https://wa.me/905323343613"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: C.cream,
                  padding: "20px 32px",
                  borderRadius: 999,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "1.5px solid " + C.cream,
                }}
              >
                WhatsApp Selin ↗
              </a>
            </div>
          </div>

          {/* right — card */}
          <div
            style={{
              background: C.cream,
              padding: "28px",
              boxShadow: "8px 8px 0 " + C.ink,
            }}
          >
            <MonoKicker color={C.kred} style={{ marginBottom: 12 }}>
              § Sample itinerary
            </MonoKicker>
            <p
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontSize: 22,
                margin: "0 0 20px",
                color: C.ink,
                lineHeight: 1.15,
              }}
            >
              One Saturday in {city.city}
            </p>
            {city.fortyEight.slice(0, 4).map((row, idx, arr) => (
              <div
                key={row.t + row.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom:
                    idx < arr.length - 1 ? "1px solid rgba(15,15,14,0.12)" : "none",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11,
                    color: C.kred,
                  }}
                >
                  {row.t}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-newsreader), serif",
                      fontSize: 18,
                      margin: "0 0 2px",
                      color: C.ink,
                    }}
                  >
                    {row.title}
                  </p>
                  <p style={{ fontSize: 12, margin: 0, opacity: 0.6, color: C.ink }}>
                    {row.note}
                  </p>
                </div>
              </div>
            ))}
            <div
              style={{
                borderTop: "1px dashed rgba(15,15,14,0.3)",
                marginTop: 16,
                paddingTop: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  color: C.kred,
                  letterSpacing: "0.1em",
                }}
              >
                → draft in 4h
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { STAYS, CATEGORIES, type Stay } from "@/lib/stays";

// ─── Palette ─────────────────────────────────────────────────────────────────

const P = {
  bg:    "#FDFBF6",
  page:  "#F7F2E6",
  ink:   "#0F0F0E",
  soft:  "#5E6450",
  kgreen:"#1B5E3F",
  kred:  "#C8302C",
  sand:  "#E2D2AE",
  line:  "#0F0F0E14",
  chip:  "#0F0F0E08",
} as const;

// ─── Index hero ───────────────────────────────────────────────────────────────

function IndexHero({ onSearch }: { onSearch: () => void }) {
  return (
    <section className="mk-si-hero" style={{
      padding: "72px 48px 40px",
      background: `linear-gradient(180deg, ${P.bg} 0%, ${P.page} 100%)`,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: 5, textTransform: "uppercase",
              color: P.kred, opacity: 0.9, marginBottom: 16,
            }}>
              Stays · curated across Kenya
            </div>
            <h1 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(44px, 4.6vw, 76px)", lineHeight: 1.04, letterSpacing: -1.8,
              color: P.ink, margin: "0 0 18px",
            }}>
              Every stay,{" "}
              <em style={{ color: P.kgreen, fontStyle: "italic" }}>slept in</em>.
              <br />Not just bookmarked — lived in first.
            </h1>
            <p style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 19, lineHeight: 1.5,
              color: P.soft, maxWidth: 620, margin: 0,
            }}>
              Tented camps, beach lodges, private villas, Swahili stone houses. Six regions, real hosts, all priced transparently — no booking fees, no surprises.
            </p>
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "flex-end", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: P.soft, letterSpacing: 1 }}>
            {[
              { n: "18",   label: "CURATED STAYS" },
              { n: "6",    label: "REGIONS" },
              { n: "4.93", label: "AVG RATING" },
            ].map(({ n, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 32, color: P.kgreen, letterSpacing: -0.8 }}>{n}</div>
                <div style={{ marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search bar */}
        <div className="mk-si-search-bar" style={{
          marginTop: 40,
          background: P.bg,
          border: `1px solid ${P.line}`,
          borderRadius: 999,
          padding: 6,
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr 1fr auto",
          alignItems: "center",
          boxShadow: `0 14px 40px -24px ${P.kgreen}25`,
        }}>
          {[
            { l: "What kind of stay", v: "Tented camp, beach, villa…" },
            { l: "Region",    v: "Any region" },
            { l: "When",      v: "Any month" },
            { l: "Nights",    v: "Any length" },
          ].map((f, i, arr) => (
            <div key={f.l} style={{
              padding: "14px 22px",
              borderRight: i < arr.length - 1 ? `1px solid ${P.line}` : "none",
            }}>
              <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: P.soft }}>{f.l}</div>
              <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, color: P.ink, marginTop: 4 }}>{f.v}</div>
            </div>
          ))}
          <button
            onClick={onSearch}
            style={{
              margin: 4, padding: "14px 24px", borderRadius: 999, border: "none",
              background: P.kgreen, color: P.bg,
              fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Find my stay
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Category rail ────────────────────────────────────────────────────────────

function CategoryRail({ active, onChange }: { active: string; onChange: (key: string) => void }) {
  return (
    <section className="mk-si-cat-rail" style={{
      padding: "24px 48px",
      borderBottom: `1px solid ${P.line}`,
      background: P.bg,
      position: "sticky", top: 83, zIndex: 30,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 10, alignItems: "center", overflowX: "auto" }}>
        {CATEGORIES.map((c) => {
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              onClick={() => onChange(c.key)}
              style={{
                whiteSpace: "nowrap",
                padding: "10px 16px", borderRadius: 999,
                border: `1px solid ${isActive ? P.kgreen : P.line}`,
                background: isActive ? P.kgreen : "transparent",
                color: isActive ? P.bg : P.ink,
                fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 8,
                transition: "all 200ms ease-out",
              }}
            >
              {c.label}
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, opacity: 0.6 }}>{c.count}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ─── Filter rail (sidebar) ────────────────────────────────────────────────────

const FILTER_SECTIONS = [
  { t: "Price (USD / night)",  items: ["Under $300", "$300 – $600", "$600 – $1,200", "$1,200+"] },
  { t: "Stay type",            items: ["Tented Camp", "Beach Resort", "Bush Lodge", "Boutique Hotel", "Private Villa", "Eco Lodge"] },
  { t: "Region",               items: ["Masai Mara", "Diani Beach", "Lamu Archipelago", "Nanyuki / Laikipia", "Amboseli", "Naivasha"] },
  { t: "Nights",               items: ["2–3 nights", "3–5 nights", "5–7 nights", "7+ nights"] },
  { t: "For",                  items: ["Solo traveller", "Couple", "Family", "Small group"] },
  { t: "Features",             items: ["Eco Certified", "Private vehicle", "Community owned", "Big Five", "Beach / ocean", "Migration positioning"] },
] as const;

function FilterRail({ count }: { count: number }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const anyChecked = Object.values(checked).some(Boolean);

  return (
    <aside className="mk-si-filter-rail" style={{ position: "sticky", top: 160, alignSelf: "start" }}>
      <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, color: P.kgreen, marginBottom: 4, letterSpacing: -0.4 }}>Filter stays</div>
      <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, color: P.soft, marginBottom: 20 }}>
        Showing <b style={{ color: P.ink }}>{count}</b> stays
        {anyChecked && (
          <>
            {" · "}
            <button
              onClick={() => setChecked({})}
              style={{ color: P.kred, background: "none", border: "none", cursor: "pointer", fontSize: 12, fontFamily: "var(--font-dm-sans), sans-serif", padding: 0 }}
            >
              Clear all
            </button>
          </>
        )}
      </div>
      {FILTER_SECTIONS.map((s, si) => (
        <div key={s.t} style={{ borderTop: si === 0 ? "none" : `1px solid ${P.line}`, padding: "16px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: P.soft }}>{s.t}</div>
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path d="M2 3l3 3 3-3" stroke={P.ink} strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {s.items.map((item) => {
              const key = `${si}-${item}`;
              const isChecked = !!checked[key];
              return (
                <label key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: P.ink, cursor: "pointer" }}>
                  <span
                    onClick={() => toggle(key)}
                    style={{
                      width: 14, height: 14, borderRadius: 3,
                      border: `1px solid ${isChecked ? P.kgreen : P.line}`,
                      background: isChecked ? P.kgreen : "transparent",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, cursor: "pointer",
                    }}
                  >
                    {isChecked && (
                      <svg width="10" height="10" viewBox="0 0 10 10">
                        <path d="M2 5l2 2 4-4" stroke={P.bg} strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                  <span style={{ flex: 1 }}>{item}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}

// ─── Stay card ────────────────────────────────────────────────────────────────

function StayCard({ stay }: { stay: Stay }) {
  function openWhatsApp() {
    window.open("https://wa.me/254700000000?text=Hi%20Selin%2C%20I%27m%20interested%20in%20" + encodeURIComponent(stay.title), "_blank");
  }

  return (
    <article className="mk-si-card" style={{
      display: "grid", gridTemplateColumns: "320px 1fr auto",
      gap: 28, padding: "28px 0",
      borderTop: `1px solid ${P.line}`, alignItems: "start",
    }}>
      {/* Image */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: 6, overflow: "hidden" }}>
          <Image src={stay.imgSrc} alt={stay.title} fill style={{ objectFit: "cover" }} sizes="320px" />
        </div>
        {stay.featured && (
          <div style={{
            position: "absolute", top: 10, left: 10,
            background: P.kred, color: P.bg,
            padding: "4px 10px", borderRadius: 999,
            fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase",
          }}>
            Selin&apos;s Pick
          </div>
        )}
        <div style={{
          position: "absolute", bottom: 10, right: 10,
          background: `${P.bg}EE`, color: P.ink,
          padding: "6px 10px", borderRadius: 999,
          fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: 0.8,
          display: "flex", gap: 6, alignItems: "center",
        }}>
          <svg width="8" height="8" viewBox="0 0 10 10"><circle cx="5" cy="5" r="2" fill={P.kgreen}/></svg>
          {stay.region.toUpperCase()}
        </div>
      </div>

      {/* Info */}
      <div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: P.kgreen }}>{stay.cat}</div>
          <div style={{ width: 3, height: 3, borderRadius: 999, background: P.soft }} />
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: 1, color: P.soft }}>{stay.nights}</div>
        </div>
        <div style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 28, color: P.ink, letterSpacing: -0.8, lineHeight: 1.15, marginBottom: 6,
        }}>
          {stay.title}
        </div>
        <div style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 15, color: P.soft, marginBottom: 14, maxWidth: 520, lineHeight: 1.45,
        }}>
          {stay.sub}
        </div>
        {/* Host */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14, fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12 }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%",
            background: P.kgreen, color: P.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 11,
          }}>
            {stay.host[0]}
          </div>
          <div style={{ color: P.ink }}>{stay.host}</div>
        </div>
        {/* Includes preview */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 24px", maxWidth: 560, marginBottom: 14 }}>
          {stay.includes.slice(0, 4).map((inc) => (
            <div key={inc} style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, color: P.ink, display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: P.kgreen, flexShrink: 0 }}>+</span>
              <span>{inc}</span>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, color: P.soft }}>
          {stay.includes.length > 4 && (
            <span>+ {stay.includes.length - 4} more · </span>
          )}
          {stay.badges.join(" · ")}
        </div>
      </div>

      {/* Price + CTA */}
      <div className="mk-si-card-price" style={{ textAlign: "right", minWidth: 200 }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center", justifyContent: "flex-end", marginBottom: 12, fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12 }}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.3L6 8.5l-3 1.6.6-3.3L1.2 4.5l3.3-.5L6 1z" fill={P.kred}/>
          </svg>
          <b style={{ color: P.ink }}>{stay.rating}</b>
          <span style={{ color: P.soft }}>({stay.reviews})</span>
        </div>
        {stay.orig && (
          <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, color: P.soft, textDecoration: "line-through" }}>
            from ${stay.orig.toLocaleString()}
          </div>
        )}
        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: P.soft, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>from</div>
        <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 34, color: P.kgreen, letterSpacing: -1 }}>
          ${stay.from.toLocaleString()}
        </div>
        <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, color: P.soft, marginBottom: 14 }}>USD · per night</div>
        <button
          onClick={openWhatsApp}
          style={{
            display: "inline-block", padding: "10px 20px", borderRadius: 999,
            background: P.kgreen, color: P.bg,
            fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13,
            border: "none", cursor: "pointer",
          }}
        >
          Ask Selin →
        </button>
        <div style={{ marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, color: P.kred }}>
          No booking fee · direct rate
        </div>
      </div>
    </article>
  );
}

// ─── Sort ─────────────────────────────────────────────────────────────────────

type SortKey = "recommended" | "trusted" | "price-asc" | "price-desc" | "nights" | "rating";

function sortStays(list: Stay[], sort: SortKey): Stay[] {
  const sorted = [...list];
  if (sort === "price-asc")  return sorted.sort((a, b) => a.from - b.from);
  if (sort === "price-desc") return sorted.sort((a, b) => b.from - a.from);
  if (sort === "nights")     return sorted.sort((a, b) => parseInt(a.nights) - parseInt(b.nights));
  if (sort === "rating")     return sorted.sort((a, b) => b.rating - a.rating);
  if (sort === "trusted")    return sorted.sort((a, b) => b.reviews - a.reviews);
  return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}

// ─── Results ─────────────────────────────────────────────────────────────────

function Results({ activeCategory }: { activeCategory: string }) {
  const [sort, setSort] = useState<SortKey>("recommended");

  const filtered = activeCategory === "all"
    ? STAYS
    : STAYS.filter((s) => s.catKey === activeCategory);

  const sorted = sortStays(filtered, sort);

  const sortOptions: { value: SortKey; label: string }[] = [
    { value: "recommended", label: "Recommended by Selin" },
    { value: "trusted",     label: "Most reviewed" },
    { value: "price-asc",   label: "Price: low to high" },
    { value: "price-desc",  label: "Price: high to low" },
    { value: "nights",      label: "Shortest first" },
    { value: "rating",      label: "Highest rated" },
  ];

  return (
    <section id="stays-list" className="mk-si-results" style={{ padding: "48px 48px 96px", background: P.bg, scrollMarginTop: 180 }}>
      <div className="mk-si-results-grid" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 48 }}>
        <FilterRail count={filtered.length} />
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div>
              <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 28, color: P.ink, letterSpacing: -0.6 }}>
                {filtered.length} stays curated for you
              </div>
              <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, color: P.soft, marginTop: 4 }}>
                All regions · All durations
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13 }}>
              <span style={{ color: P.soft }}>Sort:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                style={{
                  padding: "8px 14px", borderRadius: 999,
                  border: `1px solid ${P.line}`,
                  background: "transparent", color: P.ink,
                  fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13,
                }}
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            {sorted.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ padding: "64px 0", textAlign: "center", fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, color: P.soft }}>
              No stays in this category yet — WhatsApp Selin to find the right fit.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Selin band ───────────────────────────────────────────────────────────────

function SelinBand() {
  function openWhatsApp() {
    window.open("https://wa.me/254700000000?text=Hi%20Selin%2C%20I%27d%20like%20help%20planning%20my%20Kenya%20stay.", "_blank");
  }

  return (
    <section className="mk-si-selin-section" style={{ padding: "72px 48px", background: P.kgreen, color: P.bg }}>
      <div className="mk-si-selin-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, letterSpacing: 5, textTransform: "uppercase",
            color: P.sand, opacity: 0.9, marginBottom: 16,
          }}>
            Not sure where to start
          </div>
          <h2 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontWeight: 400,
            fontSize: 48, letterSpacing: -1.2, lineHeight: 1.08,
            margin: "0 0 18px", color: P.bg,
          }}>
            Tell Selin how you want to{" "}
            <em style={{ color: P.sand }}>wake up</em>.
          </h2>
          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 17, lineHeight: 1.55, color: `${P.bg}C0`, maxWidth: 480, margin: "0 0 24px" }}>
            Selin has slept in every camp on this list. She'll narrow it to three in under five minutes — then it's your call.
          </p>
          <button
            onClick={openWhatsApp}
            style={{
              padding: "12px 22px", borderRadius: 999,
              background: P.bg, color: P.ink,
              fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14,
              border: "none", cursor: "pointer",
            }}
          >
            WhatsApp Selin
          </button>
        </div>
        <div style={{ background: `${P.bg}10`, border: `1px solid ${P.bg}20`, padding: 24, borderRadius: 8 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: P.kred, color: P.bg,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16,
            }}>S</div>
            <div>
              <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: P.bg }}>Selin</div>
              <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: `${P.bg}80`, letterSpacing: 0.8 }}>YOUR GUIDE · 6 YRS IN NAIROBI</div>
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, lineHeight: 1.5, color: P.bg, marginBottom: 16 }}>
            &ldquo;Most people who ask about the Mara also want something coastal. I usually pair Sand River with three nights at Diani — the contrast makes both feel more intense.&rdquo;
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Yes, pair them", "Just the Mara", "Start from scratch →"].map((c) => (
              <button
                key={c}
                onClick={openWhatsApp}
                style={{
                  fontSize: 12, padding: "8px 14px",
                  border: `1px solid ${P.bg}30`, borderRadius: 999,
                  color: P.bg, fontFamily: "var(--font-dm-sans), sans-serif",
                  background: "transparent", cursor: "pointer",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function StaysIndexClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  function scrollToStays() {
    document.getElementById("stays-list")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ background: P.bg, color: P.ink, minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .mk-si-hero { padding: 40px 20px 28px !important; }
          .mk-si-search-bar { grid-template-columns: 1fr !important; border-radius: 12px !important; }
          .mk-si-search-bar > div { border-right: none !important; border-bottom: 1px solid rgba(15,15,14,0.08); }
          .mk-si-search-bar > div:last-of-type { border-bottom: none; }
          .mk-si-cat-rail { padding: 14px 16px !important; }
          .mk-si-results { padding: 24px 16px 56px !important; }
          .mk-si-results-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .mk-si-filter-rail { display: none !important; }
          .mk-si-card { grid-template-columns: 1fr !important; gap: 16px !important; }
          .mk-si-card-price { min-width: 0 !important; text-align: left !important; }
          .mk-si-selin-section { padding: 48px 20px !important; }
          .mk-si-selin-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      ` }} />
      <IndexHero onSearch={scrollToStays} />
      <CategoryRail active={activeCategory} onChange={setActiveCategory} />
      <Results activeCategory={activeCategory} />
      <SelinBand />
    </div>
  );
}

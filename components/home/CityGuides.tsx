"use client";

import Image from "next/image";
import { CITY_GUIDES } from "@/lib/data";

const VISIBLE = CITY_GUIDES.slice(0, 5);

export function CityGuides() {
  return (
    <section className="py-[100px]" style={{ background: "#7BCEEA" }}>
      <div className="px-14">
        {/* Header */}
        <div className="flex items-end justify-between pb-4 border-b-[1.5px] border-ink mb-0">
          <h2 className="font-serif text-[clamp(32px,4vw,56px)] uppercase tracking-[-0.01em] font-normal">
            City Guides
          </h2>
          <a href="/destinations" className="font-mono text-sm tracking-[0.1em] uppercase hover:underline">
            See all →
          </a>
        </div>
      </div>

      {/* Cards — 5 equal columns, edge-to-edge from px-14 */}
      <div className="px-14 flex" style={{ gap: 0 }}>
        {VISIBLE.map((guide, i) => (
          <div
            key={guide.city}
            className="flex-1 flex flex-col"
            style={{
              borderLeft: i > 0 ? "1.5px solid #0F0F0E" : "none",
              minWidth: 0,
              height: 460,
            }}
          >
            {/* Text block */}
            <div className="px-5 pt-5 pb-4 flex flex-col">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-60 mb-3 pb-2 border-b border-ink/40">
                MyKenya City Guides
              </p>
              <h3 className="font-sans font-bold text-[28px] leading-none tracking-[-0.02em] mb-1">
                {guide.city}
              </h3>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-60 mb-2">
                {guide.kicker}
              </p>
              <p className="font-sans text-[12px] leading-relaxed opacity-70">
                {guide.note}
              </p>
            </div>

            {/* Image — fills remaining space */}
            <div className="relative flex-1 overflow-hidden" style={{ minHeight: 220 }}>
              <Image
                src={Array.isArray(guide.img) ? guide.img[0] : guide.img}
                alt={guide.city}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>

      <div className="px-14 mt-0 border-t-[1.5px] border-ink" />
    </section>
  );
}

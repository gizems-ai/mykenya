"use client";

import { useState } from "react";
import Image from "next/image";
import { KenyaMap } from "../KenyaMap";
import { DESTINATIONS } from "@/lib/data";

const FILTERS = ["All", "Safari", "Coast", "Highlands", "City"];

export function DestinationsSection() {
  const [active, setActive] = useState("Masai Mara");
  const [filter, setFilter] = useState("All");

  const activeData = DESTINATIONS.find((d) => d.name === active) || DESTINATIONS[0];
  const filtered = filter === "All" ? DESTINATIONS : DESTINATIONS.filter((d) => d.region === filter);

  return (
    <section id="destinations" className="pt-14 md:pt-[120px] px-4 md:px-14 pb-10 md:pb-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <h2 className="font-serif text-[clamp(48px,6vw,88px)] leading-[0.94] font-normal tracking-[-0.03em] max-w-[640px]">
          Find your <br />
          <em className="italic text-kgreen">corner of Kenya.</em>
        </h2>
        <div className="flex gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-colors ${
                filter === f
                  ? "bg-ink text-cream border-ink"
                  : "border-ink/30 text-ink/70 hover:border-ink/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Map + Active card */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 mb-12">
        {/* Map */}
        <div className="bg-paper p-8 border border-ink/10">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-50 mb-4">
            ◇ Tap a region — Kenya, illustrated
          </p>
          <KenyaMap active={active} onSelect={setActive} />
        </div>

        {/* Active destination card */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden mb-6">
            <Image
              src={Array.isArray(activeData.img) ? activeData.img[0] : activeData.img}
              alt={activeData.name}
              fill
              className="object-cover transition-all duration-300"
              unoptimized
            />
            <span className="absolute top-4 left-4 bg-kred text-cream font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
              {activeData.region}
            </span>
          </div>
          <h3 className="font-serif text-[56px] leading-none font-normal tracking-[-0.02em] mb-3">
            {activeData.name}
          </h3>
          <p className="font-sans text-[17px] opacity-70 mb-6">{activeData.tagline}</p>
          <div className="flex gap-4">
            <a href="#" className="font-sans text-sm font-bold tracking-[0.06em] uppercase px-5 py-3 bg-ink text-cream rounded-full hover:opacity-90 transition-opacity">
              Open guide →
            </a>
            <a href="/planner" className="font-sans text-sm font-bold tracking-[0.06em] uppercase px-5 py-3 border border-ink rounded-full hover:bg-ink hover:text-cream transition-colors">
              Plan with AI
            </a>
          </div>
        </div>
      </div>

      {/* Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DESTINATIONS.map((dest, i) => (
          <button
            key={dest.name}
            onClick={() => setActive(dest.name)}
            className={`group text-left border transition-all ${
              dest.name === active ? "border-kred" : "border-ink/10 hover:border-ink/30"
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={Array.isArray(dest.img) ? dest.img[0] : dest.img}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
            <div className="p-2">
              <p className="font-mono text-[9px] tracking-[0.1em] uppercase opacity-40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-sans text-xs font-medium truncate">{dest.name}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

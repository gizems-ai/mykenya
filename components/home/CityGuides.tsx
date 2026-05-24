"use client";

import { useRef } from "react";
import Image from "next/image";
import { CITY_GUIDES } from "@/lib/data";

export function CityGuides() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-[100px]" style={{ background: "#7BCEEA" }}>
      <div className="px-14">
        {/* Header */}
        <div className="flex items-end justify-between pb-4 mb-0 border-b-[1.5px] border-ink">
          <h2 className="font-serif text-[clamp(32px,4vw,56px)] uppercase tracking-[-0.01em] font-normal">
            City Guides
          </h2>
          <a href="#" className="font-mono text-sm tracking-[0.1em] uppercase hover:underline">
            See all →
          </a>
        </div>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-[4px] px-14 mt-0 pb-2 snap-x-mandatory"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {CITY_GUIDES.map((guide, i) => (
          <div
            key={guide.city}
            className="flex-none w-[280px] snap-start"
            style={{
              borderLeft: i > 0 ? "1.5px solid #0F0F0E" : "none",
            }}
          >
            <div className="px-5 pt-5 pb-6 flex flex-col h-full bg-[#7BCEEA]">
              {/* Header */}
              <p
                className="font-sans font-semibold text-[10.5px] tracking-[0.12em] uppercase mb-3 pb-1"
                style={{ borderBottom: "1px solid #0F0F0E" }}
              >
                MyKenya City Guides
              </p>

              {/* City name */}
              <h3 className="font-sans font-bold text-[36px] leading-none tracking-[-0.02em] mb-3">
                {guide.city}
              </h3>

              {/* Flag stripe */}
              <div className="flex h-[10px] border border-ink mb-0">
                {guide.flag.map((color, j) => (
                  <div key={j} className="flex-1" style={{ background: color }} />
                ))}
              </div>

              {/* Image */}
              <div className="relative border border-t-0 border-ink mb-4 overflow-hidden" style={{ aspectRatio: "5/6" }}>
                <Image
                  src={Array.isArray(guide.img) ? guide.img[0] : guide.img}
                  alt={guide.city}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Kicker + note */}
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-60 mb-2">
                {guide.kicker}
              </p>
              <p className="font-sans text-sm leading-relaxed opacity-80">{guide.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll button */}
      <div className="px-14 mt-4 flex justify-end">
        <button
          onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
          className="font-mono text-sm tracking-[0.1em] uppercase px-5 py-2 border-[1.5px] border-ink hover:bg-ink hover:text-cream transition-colors"
        >
          → Scroll
        </button>
      </div>

      <div className="px-14 mt-8 border-t-[1.5px] border-ink" />
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { BeadStrip } from "./BeadStrip";

const NAV_LINKS = ["Destinations", "Stays", "Experiences", "Journal", "Planner"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Red top bar */}
      <div className="h-1 bg-kred" />
      <BeadStrip height={8} />
      <header className="sticky top-0 z-50 bg-cream border-b border-ink/10">
        <div className="flex items-center justify-between px-14 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex gap-[3px]">
              <div className="w-[7px] h-[22px] bg-ink" />
              <div className="w-[7px] h-[22px] bg-kred" />
              <div className="w-[7px] h-[22px] bg-kgreen" />
            </div>
            <span className="font-serif text-[28px] font-medium tracking-[-0.02em]">MyKenya</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50 ml-1">est. 2026</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="font-sans text-sm font-medium text-ink hover:text-kred transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] opacity-60 hidden md:block">EN</span>
            <a
              href="#planner"
              className="hidden md:inline-block bg-kred text-cream font-sans text-sm font-bold tracking-[0.08em] uppercase px-[22px] py-[12px] rounded-full hover:opacity-90 transition-opacity"
            >
              Start Your Journey ↗
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-ink transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-6 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-ink transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden bg-cream border-t border-ink/10 px-8 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="font-sans text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            ))}
            <a
              href="#planner"
              onClick={() => setOpen(false)}
              className="mt-2 bg-kred text-cream font-sans text-sm font-bold tracking-[0.08em] uppercase px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity"
            >
              Start Your Journey ↗
            </a>
          </div>
        )}
      </header>
    </>
  );
}

import React from "react";

export function WhatsIncluded() {
  const services = [
    {
      num: "01",
      accent: "#C8302C",
      title: "Personal Concierge",
      subtitle: "→ One human, start to finish",
      body: "Selin or a senior member of the team handles your entire journey. One WhatsApp thread, full accountability.",
      includes: ["Pre-trip planning call", "On-ground contact", "24/7 emergency line"],
    },
    {
      num: "02",
      accent: "#7BCEEA",
      title: "AI-Assisted Planning",
      subtitle: "→ Smart itinerary, human-refined",
      body: "We use our own trained planner to generate the initial route, then Selin reviews and refines every detail by hand.",
      includes: ["Pacing & timing", "Budget optimization", "Seasonal adjustments"],
    },
    {
      num: "03",
      accent: "#0F0F0E",
      title: "Private 4×4 Jeeps",
      subtitle: "→ Your vehicle, your schedule",
      body: "No shared game drives. Your guide, your jeep, your timing. We work with Maasai guides certified by KWS.",
      includes: ["Licensed safari guide", "Custom game drive times", "Bush picnic on request"],
    },
    {
      num: "04",
      accent: "#C8302C",
      title: "Bush Flights",
      subtitle: "→ Skip the long road",
      body: "We book and coordinate all domestic bush flights — Mara, Lamu, Amboseli, Samburu. One less thing to manage.",
      includes: ["Airstrip transfers", "Luggage limit guidance", "Flexible rebooking"],
    },
    {
      num: "05",
      accent: "#7BCEEA",
      title: "Curated Stays",
      subtitle: "→ Properties we've slept in",
      body: "Every camp and hotel on our list has been visited. We don't recommend what we haven't experienced ourselves.",
      includes: ["Verified quality", "Preferred rates", "Room selection"],
    },
    {
      num: "06",
      accent: "#0F0F0E",
      title: "24/7 On the Ground",
      subtitle: "→ We don't clock off",
      body: "Flight delays, rain in the Mara, a fever on day three — we pick up. Always. That's what the concierge fee buys.",
      includes: ["WhatsApp response < 20 min", "Local partner network", "Medical referral ready"],
    },
  ];

  return (
    <section className="py-[80px] md:py-[120px] px-4 md:px-14 bg-kgreen text-cream">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-14 items-end mb-16">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-7 h-px bg-sand block" />
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: "#E2D2AE" }}>
              § Door to door · end-to-end
            </p>
          </div>
          <h2 className="font-serif text-[clamp(48px,6vw,104px)] leading-[0.9] font-normal tracking-[-0.035em]">
            You land at JKIA.{" "}
            <br />
            <em className="italic">We&apos;re already moving.</em>
          </h2>
          <p className="font-serif italic text-[22px] mt-6 max-w-[640px] opacity-80">
            Every transfer, every camp, every meal — confirmed before you arrive.
          </p>

          {/* Concierge pill */}
          <div className="inline-flex items-center gap-3 bg-cream text-ink rounded-full px-5 py-3 mt-8">
            <span className="w-2 h-2 rounded-full bg-kred animate-pulse" />
            <span className="font-mono text-[12px] tracking-[0.1em] uppercase">
              06:42 NBO · Driver dispatched · Mwangi en route
            </span>
          </div>
        </div>

        {/* Arrivals board */}
        <div
          className="bg-cream text-ink p-6 max-w-[380px] ml-auto"
          style={{ boxShadow: "8px 8px 0 #0F0F0E" }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-60">◇ Arrivals · JKIA</p>
            <span className="w-2 h-2 rounded-full bg-kgreen" />
          </div>
          <div className="space-y-3 border-b border-ink/10 pb-4 mb-4">
            {[
              { flight: "TK 605", route: "IST→NBO", status: "Landed", time: "06:42", note: "Terminal 1A" },
              { flight: "", route: "", status: "Driver pickup", time: "07:00", note: "Mwangi confirmed" },
              { flight: "", route: "", status: "Hotel Hemingways", time: "07:45", note: "ETA" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_auto] gap-2 text-xs items-center">
                <span className="font-mono opacity-50">{row.flight || "·"}</span>
                <span className="font-sans opacity-70 truncate">{row.status} {row.note && <span className="opacity-50">· {row.note}</span>}</span>
                <span className="font-mono opacity-60">{row.time}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-50">concierge · Selin</span>
            <a href="#" className="font-mono text-[10px] tracking-[0.1em] uppercase text-kgreen">WhatsApp ↗</a>
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {services.map((svc) => (
          <div key={svc.num} className="bg-cream text-ink">
            {/* Accent top */}
            <div
              className="px-8 py-7 flex flex-col justify-between min-h-[160px] text-cream"
              style={{ background: svc.accent }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-70">No. {svc.num}</span>
                <span className="font-serif italic text-[14px] opacity-70">included</span>
              </div>
              <div className="flex justify-end mt-4">
                {/* Icon placeholder */}
                <div className="w-12 h-12 border-[1.5px] border-cream/50 rounded-full flex items-center justify-center">
                  <span className="font-mono text-[18px] opacity-70">◈</span>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-7 flex flex-col">
              <h3 className="font-serif text-[32px] leading-none font-normal mb-2">{svc.title}</h3>
              <p className="font-serif italic text-[16px] mb-3" style={{ color: svc.accent }}>
                {svc.subtitle}
              </p>
              <p className="font-sans text-sm leading-relaxed opacity-75 mb-6">{svc.body}</p>
              <div className="mt-auto pt-4 border-t border-ink/10 grid grid-cols-[16px_1fr] gap-x-2 gap-y-2">
                {svc.includes.map((item) => (
                  <React.Fragment key={item}>
                    <span className="font-sans text-[13px]" style={{ color: svc.accent }}>◆</span>
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase opacity-75">{item}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strip */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          "◐ Airport pickup",
          "Bush camp transfer",
          "Coastal hop flight",
          "Curated meals & guides",
          "Airport drop-off",
        ].map((item, i) => (
          <span
            key={item}
            className="font-mono text-[11px] tracking-[0.12em] uppercase bg-cream text-ink px-5 py-3 rounded-full"
          >
            {item}{i < 4 ? " →" : ""}
          </span>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell us your Kenya",
      desc: "Answer eight questions — or just message Selin directly. We build the shape of your trip around your pace, not a template.",
    },
    {
      num: "02",
      title: "AI drafts, humans refine",
      desc: "Our planner generates a route. Selin reviews every line, swaps what doesn't fit, adds the details no algorithm knows.",
    },
    {
      num: "03",
      title: "We move with you",
      desc: "Transfers, camps, bush flights, meals — all confirmed before you land. We're on WhatsApp throughout. One point of contact.",
    },
  ];

  return (
    <section className="py-[120px] px-14 bg-kgreen text-cream">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-20 items-end">
        {/* Left */}
        <div>
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-[0.96] font-normal tracking-[-0.02em]">
            Three steps,{" "}
            <br />
            <em className="italic" style={{ color: "#E2D2AE" }}>nothing more.</em>
          </h2>
        </div>

        {/* Right — cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="bg-cream text-ink p-8 min-h-[280px] flex flex-col justify-between"
            >
              <span className="font-serif text-[80px] text-kred leading-none font-normal">{num}</span>
              <div>
                <h3 className="font-serif text-[22px] mb-3 font-normal">{title}</h3>
                <p className="font-sans text-sm leading-relaxed opacity-70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const WHATSAPP_MESSAGES = [
    { from: "selin", text: "Hi! I'm Selin 👋 Tell me — what draws you to Kenya?" },
    { from: "user", text: "We've always wanted to see the Great Migration. Two of us, 10 days." },
    { from: "selin", text: "Perfect timing — the river crossings peak July–September. Shall I sketch a first route?" },
    { from: "user", text: "Yes please. Budget is flexible, we care most about the experience." },
  ];

  return (
    <section id="planner" className="py-14 md:py-[120px] px-4 md:px-14 bg-kred text-cream">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-16 items-center">
        {/* Left */}
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase opacity-70 mb-6">
            § Plan your Kenya · personally curated
          </p>
          <h2 className="font-serif text-[clamp(56px,8vw,104px)] leading-[0.9] font-normal tracking-[-0.035em] mb-6">
            Plan with{" "}
            <br />
            <em className="italic">Selin.</em>
          </h2>
          <p className="font-serif italic text-[22px] opacity-80 mb-4">
            Hand-curated. AI-assisted. End-to-end.
          </p>
          <p className="font-sans text-[17px] leading-relaxed opacity-75 mb-10 max-w-[500px]">
            Start with the AI planner to shape your trip, then Selin reviews every detail personally. No templates. No packages. Your Kenya.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#"
              className="bg-cream text-kred font-sans text-sm font-bold tracking-[0.08em] uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Start Your Journey →
            </a>
            <a
              href="https://wa.me/254700000000"
              className="border border-cream text-cream font-sans text-sm font-bold tracking-[0.08em] uppercase px-8 py-4 rounded-full hover:bg-cream hover:text-kred transition-colors"
            >
              WhatsApp Selin ↗
            </a>
          </div>
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase opacity-60">
            Average reply time · under 4 hours · Nairobi time
          </p>
        </div>

        {/* Right — WhatsApp preview */}
        <div
          className="bg-cream text-ink p-6 max-w-[420px]"
          style={{ boxShadow: "8px 8px 0 #0F0F0E" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-ink/10">
            <div className="w-9 h-9 rounded-full bg-kgreen flex items-center justify-center text-cream font-sans font-bold text-sm">
              S
            </div>
            <div>
              <p className="font-sans font-semibold text-sm">Selin Tapıcı</p>
              <p className="font-mono text-[10px] tracking-[0.08em] text-kgreen uppercase">● online · Nairobi</p>
            </div>
          </div>

          {/* Chat bubbles */}
          <div className="space-y-3 mb-5">
            {WHATSAPP_MESSAGES.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-kgreen text-cream rounded-[14px] rounded-br-[4px]"
                      : "bg-paper text-ink rounded-[14px] rounded-bl-[4px]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-dashed border-ink/20 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-50">◇ live preview</span>
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-50">WhatsApp · +254 ···</span>
          </div>
        </div>
      </div>
    </section>
  );
}

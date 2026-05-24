import dynamic from "next/dynamic";
import { BeadStrip } from "@/components/BeadStrip";

const SelinPlannerChat = dynamic(() => import("@/components/SelinPlannerChat"), { ssr: false });

export const metadata = {
  title: "AI Planner · MyKenya",
  description: "Answer ten questions. Selin builds your personalised Kenya itinerary.",
};

export default function PlannerPage() {
  return (
    <>
      <BeadStrip height={20} />
      <section style={{ minHeight: "100vh", background: "#F7F2E6", paddingTop: 72, paddingBottom: 96 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11, letterSpacing: 5, textTransform: "uppercase",
              color: "#C8302C", marginBottom: 16,
            }}>§ AI Planner</p>
            <h1 style={{
              fontFamily: "var(--font-newsreader), serif",
              fontWeight: 400,
              fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5,
              color: "#0F0F0E", margin: "0 0 16px",
            }}>
              Ten questions.{" "}
              <em style={{ fontStyle: "italic", color: "#1B5E3F" }}>Your Kenya.</em>
            </h1>
            <p style={{
              fontFamily: "var(--font-newsreader), serif",
              fontSize: 18, lineHeight: 1.55, color: "#5E6450", maxWidth: 520, margin: "0 auto",
            }}>
              Answer a few questions and Selin will send you a personal shortlist — camps, lodges, and a rough route built around what you actually want.
            </p>
          </div>

          <SelinPlannerChat />
        </div>
      </section>
    </>
  );
}

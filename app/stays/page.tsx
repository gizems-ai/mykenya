import dynamic from "next/dynamic";

const StaysIndexClient = dynamic(() => import("@/components/stays/StaysIndexClient"), { ssr: false });

export const metadata = {
  title: "Stays · MyKenya",
  description: "Curated Kenya stays — tented camps, beach lodges, private villas, Swahili stone houses. Every property slept in, not just bookmarked.",
};

export default function StaysPage() {
  return <StaysIndexClient />;
}

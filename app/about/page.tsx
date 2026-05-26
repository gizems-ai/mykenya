import dynamic from "next/dynamic";

const AboutClient = dynamic(() => import("@/components/about/AboutClient"), { ssr: false });

export const metadata = {
  title: "About Selin · MyKenya",
  description: "Selin Tapıcı — lawyer turned fashion executive turned Kenya travel curator. The story behind MyKenya.",
};

export default function AboutPage() {
  return <AboutClient />;
}

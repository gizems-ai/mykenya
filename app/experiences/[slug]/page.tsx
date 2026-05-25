import dynamic from "next/dynamic";
const SafariDetailClient = dynamic(() => import("@/components/experiences/SafariDetailClient"), { ssr: false });
export function generateStaticParams() { return [{ slug: "safari" }]; }
export const metadata = { title: "Safari · MyKenya" };
export default function ExperienceDetailPage() { return <SafariDetailClient />; }

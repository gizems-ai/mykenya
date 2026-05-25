import dynamic from "next/dynamic";
const ExperiencesClient = dynamic(() => import("@/components/experiences/ExperiencesClient"), { ssr: false });
export const metadata = { title: "Experiences · MyKenya", description: "Eight ways into Kenya." };
export default function ExperiencesPage() { return <ExperiencesClient />; }

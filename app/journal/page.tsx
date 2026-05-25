import dynamic from "next/dynamic";
const JournalClient = dynamic(() => import("@/components/journal/JournalClient"), { ssr: false });
export const metadata = { title: "Journal · MyKenya", description: "Field notes, guides, and conversations from Kenya." };
export default function JournalPage() { return <JournalClient />; }

import type { Metadata } from "next";
import { Newsreader, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MyKenya — Curated Kenya Travel",
    template: "%s | MyKenya",
  },
  description:
    "Kenya, beyond the ordinary. Curated travel experiences — local intelligence and AI-assisted logistics, finished in person by founder Selin Tapıcı.",
  openGraph: {
    title: "MyKenya — Curated Kenya Travel",
    description: "Kenya, beyond the ordinary. Curated by humans. Planned by AI.",
    siteName: "MyKenya",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

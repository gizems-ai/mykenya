import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { JOURNAL_ENTRIES } from "@/lib/experiences";
import { ARTICLES } from "@/lib/journal-articles";

const JournalArticleClient = dynamic(
  () => import("@/components/journal/JournalArticleClient"),
  { ssr: false }
);

export function generateStaticParams() {
  return JOURNAL_ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = JOURNAL_ENTRIES.find((e) => e.slug === params.slug);
  if (!entry) return {};
  return {
    title: `${entry.title} · MyKenya Journal`,
    description: entry.excerpt,
  };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const entry = JOURNAL_ENTRIES.find((e) => e.slug === params.slug);
  const article = ARTICLES[params.slug];
  if (!entry || !article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.excerpt,
    author: {
      "@type": "Person",
      name: entry.author,
    },
    publisher: {
      "@type": "Organization",
      name: "MyKenya",
      url: "https://mykenya.vercel.app",
    },
    url: `https://mykenya.vercel.app/journal/${entry.slug}`,
    image: entry.img,
    articleSection: entry.kicker,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JournalArticleClient entry={entry} article={article} />
    </>
  );
}

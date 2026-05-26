import { MetadataRoute } from "next";
import { EXPERIENCE_DETAIL } from "@/lib/experiences";
import { CITIES_MAP } from "@/lib/cities";
import { PROGRAMS } from "@/lib/itineraries";

const BASE = "https://mykenya.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const experienceUrls = EXPERIENCE_DETAIL.map((e) => ({
    url: `${BASE}/experiences/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityUrls = Object.keys(CITIES_MAP).map((slug) => ({
    url: `${BASE}/cities/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const itineraryUrls = PROGRAMS.map((p) => ({
    url: `${BASE}/itineraries/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/experiences`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/stays`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/planner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/journal`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/cities/nairobi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...experienceUrls,
    ...cityUrls,
    ...itineraryUrls,
  ];
}

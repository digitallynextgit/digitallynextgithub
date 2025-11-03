import React from "react";
import ListingClient from "./ListingClient";
import { testPageDataMap } from "@/app/data/test-page-data";
import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, webPageJsonLd } from "@/app/utils/seo";

interface CardItem {
  id: string;
  imgUrl: string;
  title: string;
  description?: string;
  industry?: string;
  impact?: string;
  slug?: string;
}

const buildImpactSummary = (id: string): string | undefined => {
  const data = testPageDataMap[id];
  if (!data || !data.impact) return undefined;

  const parts: string[] = [];
  const cov = data.impact.coverage;
  if (cov?.geographic) parts.push(cov.geographic.trim());
  if (cov?.media) parts.push(cov.media.trim());
  if (cov?.publications) parts.push(cov.publications.trim());

  if (parts.length) return parts.filter(Boolean).join(" • ");

  const achievements = data.impact.achievements?.filter(Boolean) ?? [];
  return achievements.length ? achievements.join(" • ") : undefined;
};

export default function CaseStudiesListing() {
  const items: CardItem[] = Object.keys(testPageDataMap).map((id) => {
    const data = testPageDataMap[id];
    const img = data.hero.mobileImages?.[0] ?? "/banner/1.webp";
    return {
      id,
      imgUrl: img,
      title: data.hero.title,
      description: data.hero.description,
      industry: data.clientProfile?.industry,
      impact: buildImpactSummary(id),
      slug: id,
    };
  });
  return (
    <main className="min-h-screen">
      <Script id="ld-case-studies-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: "Case Studies | DigitallyNext",
            description: "Real-world case studies showcasing DigitallyNext’s strategy and outcomes.",
            path: "/case-studies",
          })
        )}
      </Script>
      <ListingClient items={items} />
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | DigitallyNext",
  description:
    "Real-world case studies showcasing DigitallyNext’s strategy and outcomes.",
  path: "/case-studies",
  keywords: [
    "DigitallyNext case studies",
    "digital transformation",
    "marketing results",
    "strategy",
  ],
});

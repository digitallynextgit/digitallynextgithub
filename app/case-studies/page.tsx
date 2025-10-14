"use client";

import React, { useEffect, useMemo, useState } from "react";
import ExploreCard from "@/app/components/ExploreCard";
import { testPageDataMap } from "@/app/data/test-page-data";

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

  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [perPage, setPerPage] = useState<number>(4);
  const [page, setPage] = useState<number>(0);

  // Responsive items per page: 1 (mobile), 2 (tablet), 4 (desktop)
  useEffect(() => {
    const calcPerPage = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1024;
      if (w < 640) return 1; // sm
      if (w < 1024) return 2; // md
      return 4; // lg+
    };
    const update = () => setPerPage(calcPerPage());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    // reset to first page when perPage changes
    setPage(0);
    // ensure active item is visible
    const firstVisible = items[0]?.id;
    if (firstVisible) setActive(firstVisible);
  }, [perPage]);

  const maxPage = useMemo(() => {
    return Math.max(0, Math.ceil(items.length / perPage) - 1);
  }, [items.length, perPage]);

  const start = page * perPage;
  const end = start + perPage;
  const visibleItems = items.slice(start, end);

  const handleClick = (id: string) => setActive(id);
  const prevPage = () => setPage((p) => Math.max(0, p - 1));
  const nextPage = () => setPage((p) => Math.min(maxPage, p + 1));

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto mt-32">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">{start + 1}</span>-<span className="font-semibold">{Math.min(end, items.length)}</span> of <span className="font-semibold">{items.length}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={page === 0}
            className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            aria-label="Previous"
          >
            ← Prev
          </button>
          <button
            onClick={nextPage}
            disabled={page >= maxPage}
            className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            aria-label="Next"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Grid listing: responsive 1/2/4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleItems.map((item, index) => (
          <ExploreCard
            key={item.id}
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            industry={item.industry}
            impact={item.impact}
            slug={item.slug}
            index={start + index}
            active={active}
            handleClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
}

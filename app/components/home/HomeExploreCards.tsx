'use client';

import React, { useEffect, useMemo, useState } from 'react';
import ExploreCard from '@/app/components/ExploreCard';
import { testPageDataMap } from '@/app/data/test-page-data';

interface CardItem {
  id: string;
  imgUrl: string;
  title: string;
  description?: string;
  industry?: string;
  impact?: string;
  slug?: string;
}

// Simple impact summary builder (optional)
const buildImpactSummary = (id: string): string | undefined => {
  const data = testPageDataMap[id];
  const coverage = data?.impact?.coverage;
  if (!coverage) return undefined;
  const parts: string[] = [];
  if (coverage.geographic) parts.push(coverage.geographic);
  if (coverage.media) parts.push(coverage.media);
  if (coverage.publications) parts.push(coverage.publications);
  return parts.length ? parts.join(' • ') : undefined;
};

export default function HomeExploreCards() {
  // Build card items from test data; skip 'default' if present and take first 4
  const keys = Object.keys(testPageDataMap).filter((k) => k !== 'default');
  const items: CardItem[] = keys.map((id) => {
    const data = testPageDataMap[id];
    const img = data.hero.mobileImages?.[0] ?? '/banner/1.webp';
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

  const [active, setActive] = useState<string>(items[0]?.id ?? '');
  const [perPage, setPerPage] = useState<number>(4);
  const [page, setPage] = useState<number>(0);

  // Ensure active stays valid if items change
  useEffect(() => {
    if (!items.find((i) => i.id === active)) {
      setActive(items[0]?.id ?? '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  // Responsive items per page: 1 (mobile), 2 (tablet), 4 (desktop)
  useEffect(() => {
    const calcPerPage = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (w < 640) return 1; // sm
      if (w < 1024) return 2; // md
      return 4; // lg+
    };
    const update = () => setPerPage(calcPerPage());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
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
  const visibleItems = items.slice(start, start + perPage);

  const handleClick = (id: string) => setActive(id);

  const prevPage = () => setPage((p) => Math.max(0, p - 1));
  const nextPage = () => setPage((p) => Math.min(maxPage, p + 1));

  return (
    <section className="w-full py-12 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-[4.5vw] font-semibold mb-10 text-center">
          Featured Case Studies
        </h2>

        {/* Navigation Arrows */}
        <button
          aria-label="Previous"
          onClick={prevPage}
          disabled={page === 0}
          className={`absolute -left-20 top-1/2  z-10 bg-white border border-gray-200 shadow-sm rounded-full p-3 hidden sm:flex items-center justify-center transition-opacity ${page === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
        >
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>

        <button
          aria-label="Next"
          onClick={nextPage}
          disabled={page >= maxPage}
          className={`absolute -right-20 top-1/2  z-10 bg-white border border-gray-200 shadow-sm rounded-full p-3 hidden sm:flex items-center justify-center transition-opacity ${page >= maxPage ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
        >
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </button>

        {/* Cards Grid */}
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

        {/* Page indicator */}
        <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
          <span>
            Showing {Math.min(items.length, start + 1)}-
            {Math.min(items.length, start + visibleItems.length)} of {items.length}
          </span>
        </div>
      </div>
    </section>
  );
}
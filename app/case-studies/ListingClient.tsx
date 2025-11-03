'use client';

import React, { useEffect, useMemo, useState } from 'react';
import ExploreCard from '@/app/components/ExploreCard';

interface CardItem {
  id: string;
  imgUrl: string;
  title: string;
  description?: string;
  industry?: string;
  impact?: string;
  slug?: string;
}

type Props = {
  items: CardItem[];
};

export default function ListingClient({ items }: Props) {
  const [active, setActive] = useState<string>(items[0]?.id ?? '');
  const [perPage, setPerPage] = useState<number>(4);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const calcPerPage = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (w < 640) return 1; // sm
      if (w < 1024) return 2; // md
      return 3; // lg+
    };
    const update = () => setPerPage(calcPerPage());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setPage(0);
    const firstVisible = items[0]?.id;
    if (firstVisible) setActive(firstVisible);
  }, [perPage, items]);

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
    <section className="px-6 py-16 max-w-7xl mx-auto lg:mt-32 mt-16">
      <h1 className="text-6xl text-center lg:text-7xl font-bold mb-8">Case Studies</h1>
      <div className="flex items-center justify-between flex-col lg:flex-row gap-5 mb-6">
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">{start + 1}</span>-<span className="font-semibold">{Math.min(end, items.length)}</span> of <span className="font-semibold">{items.length}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={page === 0}
            className="px-3 py-2 rounded-full border border-black bg-white text-gray-800 lg:disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={nextPage}
            disabled={page >= maxPage}
            className="px-3 py-2 rounded-full border border-black bg-white text-gray-800 lg:disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
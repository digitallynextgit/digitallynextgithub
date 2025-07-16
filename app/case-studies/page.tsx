'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { caseStudies } from '@/app/data/case-studies';
import { CaseStudyIndustry, CaseStudySector, CaseStudyRegion } from '@/types/case-study';
import CaseStudyCard from '@/components/CaseStudyCard';

// Get unique industries, regions, and sectors for filtering
const industries = Array.from(new Set(caseStudies.map(study => study.industry)));
const regions = Array.from(new Set(caseStudies.flatMap(study => study.region)));
const sectors = Array.from(new Set(caseStudies.flatMap(study => study.sector)));

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<{
    industry: CaseStudyIndustry | 'all';
    region: CaseStudyRegion | 'all';
    sector: CaseStudySector | 'all';
  }>({
    industry: 'all',
    region: 'all',
    sector: 'all'
  });

  // Filter case studies based on selected filters
  const filteredStudies = caseStudies.filter(study => {
    const industryMatch = activeFilter.industry === 'all' || study.industry === activeFilter.industry;
    const regionMatch = activeFilter.region === 'all' || study.region.includes(activeFilter.region as CaseStudyRegion);
    const sectorMatch = activeFilter.sector === 'all' || study.sector.includes(activeFilter.sector as CaseStudySector);
    return industryMatch && regionMatch && sectorMatch;
  });

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore how we&apos;ve helped businesses across industries transform their digital presence
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/podcast/pattern-bg.svg')" }}></div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Industry Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Industry</label>
              <select 
                className="rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                value={activeFilter.industry}
                onChange={(e) => setActiveFilter({...activeFilter, industry: e.target.value as CaseStudyIndustry | 'all'})}
              >
                <option value="all">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Region</label>
              <select 
                className="rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                value={activeFilter.region}
                onChange={(e) => setActiveFilter({...activeFilter, region: e.target.value as CaseStudyRegion | 'all'})}
              >
                <option value="all">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            {/* Sector Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Sector</label>
              <select 
                className="rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                value={activeFilter.sector}
                onChange={(e) => setActiveFilter({...activeFilter, sector: e.target.value as CaseStudySector | 'all'})}
              >
                <option value="all">All Sectors</option>
                {sectors.map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredStudies.map(study => (
              <div key={study.id}>
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900">No case studies match your filters</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8">Let&apos;s create your success story together</p>
          <Link href="/contact">
            <span className="inline-block bg-white text-red-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Get in Touch
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
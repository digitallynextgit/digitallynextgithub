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
      <section className="relative w-full bg-gradient-to-r from-red-700 to-red-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Explore The Journey</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Discover how we&apos;ve transformed businesses across industries with innovative digital solutions
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/podcast/pattern-bg.svg')" }}></div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Filter Impact Stories</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Industry Filter */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">Industry</label>
              <div className="relative">
                <select 
                  className="w-full md:w-64 appearance-none rounded-lg border border-gray-200 bg-white p-3 pr-10 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50"
                  value={activeFilter.industry}
                  onChange={(e) => setActiveFilter({...activeFilter, industry: e.target.value as CaseStudyIndustry | 'all'})}
                >
                  <option value="all">All Industries</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Region Filter */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">Region</label>
              <div className="relative">
                <select 
                  className="w-full md:w-64 appearance-none rounded-lg border border-gray-200 bg-white p-3 pr-10 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50"
                  value={activeFilter.region}
                  onChange={(e) => setActiveFilter({...activeFilter, region: e.target.value as CaseStudyRegion | 'all'})}
                >
                  <option value="all">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sector Filter */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">Sector</label>
              <div className="relative">
                <select 
                  className="w-full md:w-64 appearance-none rounded-lg border border-gray-200 bg-white p-3 pr-10 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50"
                  value={activeFilter.sector}
                  onChange={(e) => setActiveFilter({...activeFilter, sector: e.target.value as CaseStudySector | 'all'})}
                >
                  <option value="all">All Sectors</option>
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Impact Stories</h2>
          <div className="flex flex-col space-y-8">
            {filteredStudies.map(study => (
              <div key={study.id} className="transform transition-all duration-300 hover:scale-[1.01] w-full">
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900">No case studies match your filters</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </section>
    
    </main>
  );
}
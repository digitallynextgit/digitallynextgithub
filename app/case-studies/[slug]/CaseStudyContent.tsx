'use client';

import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/types/case-study';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  prevStudy: CaseStudy | null;
  nextStudy: CaseStudy | null;
  relatedStudies: CaseStudy[];
}

export default function CaseStudyContent({ 
  caseStudy, 
  prevStudy, 
  nextStudy,
  relatedStudies 
}: CaseStudyContentProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                {caseStudy.industry}
              </span>
              {caseStudy.region.map(region => (
                <span key={region} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                  {region}
                </span>
              ))}
              {caseStudy.sector.map(sector => (
                <span key={sector} className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">
                  {sector}
                </span>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">{caseStudy.title}</h1>
            
            {/* One-liner */}
            <p className="text-xl md:text-2xl max-w-3xl text-center mb-8">
              {caseStudy.oneLiner}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/podcast/pattern-bg.svg')" }}></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            {/* Client Background */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Client Background</h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.background}</p>
            </section>

            {/* Objective / Challenge */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Objective</h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.objective}</p>
            </section>

            {/* Solution Implemented */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Solution Implemented</h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
            </section>

            {/* Key Focus Areas */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Key Focus Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.keyFocusAreas.map((area, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Digital Assets Delivered */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Digital Assets Delivered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.digitalAssetsDelivered.map((asset, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{asset}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact / Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Impact & Results</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{caseStudy.impact}</p>
              
              {caseStudy.impactStats && caseStudy.impactStats.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {caseStudy.impactStats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                      <div className="text-gray-700">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Learnings & Forward Strategy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Learnings & Forward Strategy</h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.learnings}</p>
            </section>

            {/* Testimonial (if available) */}
            {caseStudy.testimonial && (
              <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                <div className="flex flex-col items-center">
                  <FaQuoteLeft className="text-red-600 text-4xl mb-4" />
                  <p className="text-gray-700 text-lg italic text-center mb-4">{caseStudy.testimonial}</p>
                  <FaQuoteRight className="text-red-600 text-4xl" />
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Quick Facts */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Industry:</span>
                  <span className="ml-2 text-gray-600">{caseStudy.industry}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Region:</span>
                  <span className="ml-2 text-gray-600">{caseStudy.region.join(', ')}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Sector:</span>
                  <span className="ml-2 text-gray-600">{caseStudy.sector.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Related Case Studies */}
            {relatedStudies.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Case Studies</h3>
                <div className="space-y-4">
                  {relatedStudies.map(study => (
                    <Link href={`/case-studies/${study.slug}`} key={study.id}>
                      <div className="group cursor-pointer">
                        <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                          {study.title}
                        </h4>
                        <p className="text-sm text-gray-600">{study.industry} | {study.region.join(', ')}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Need Similar Results?</h3>
              <p className="mb-6">Let&apos;s discuss how we can help transform your digital presence</p>
              <Link href="/contact">
                <span className="inline-block bg-white text-red-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          {prevStudy ? (
            <Link href={`/case-studies/${prevStudy.slug}`}>
              <span className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
                <FaArrowLeft className="mr-2" />
                <span>Previous: {prevStudy.title}</span>
              </span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextStudy ? (
            <Link href={`/case-studies/${nextStudy.slug}`}>
              <span className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
                <span>Next: {nextStudy.title}</span>
                <FaArrowRight className="ml-2" />
              </span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8">Let&apos;s create your success story together</p>
          <Link href="/contact">
            <span className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
              Get in Touch
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
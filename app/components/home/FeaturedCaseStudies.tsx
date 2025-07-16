'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudies } from '@/app/data/case-studies';
import CaseStudyCard from '@/components/CaseStudyCard';

export default function FeaturedCaseStudies() {
  // Get 3 featured case studies
  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Case Studies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how we&apos;ve helped businesses transform their digital presence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/case-studies">
              <span className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                View All Case Studies
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
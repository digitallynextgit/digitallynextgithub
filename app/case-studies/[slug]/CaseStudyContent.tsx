"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/types/case-study";
import dayjs from "dayjs";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaQuoteRight,
  FaBuilding,
  // FaTarget,
  FaBullseye,
  FaCog,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaBalanceScale,
  FaSync,
  FaGraduationCap,
  // FaUser,
  FaInfoCircle,
  FaIndustry,
  FaGlobe,
  FaTags,
  FaFlag,
} from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  relatedStudies,
}: CaseStudyContentProps) {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs()); // update every second
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative w-full bg-black text-white py-12 sm:py-16 md:py-20 min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cs-banner.webp"
            alt="Case Study Banner"
            fill
            className="object-cover sm:object-top opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-8">
            {/* Left Image - Hidden on mobile, visible on tablet+ */}
            <div className="hidden md:block flex-shrink-0">
              <Image
                src="/images/internship/1.webp"
                alt=""
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[300px] hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Center Content */}
            <div className="flex flex-col justify-center items-center text-center flex-1 max-w-4xl">
              <p className="text-xs sm:text-sm font-bold text-red-500 mb-2 sm:mb-3">
                {now.format("dddd, D MMMM YYYY")}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-3xl leading-relaxed px-2">
                {caseStudy.oneLiner}
              </p>
              
              {/* Mobile Images - Only visible on mobile */}
              <div className="flex md:hidden gap-4 mb-6">
                <Image
                  src="/images/internship/1.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
                />
                <Image
                  src="/images/internship/2.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Image - Hidden on mobile, visible on tablet+ */}
            <div className="hidden md:block flex-shrink-0">
              <Image
                src="/images/internship/2.webp"
                alt=""
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[300px] hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Time Display */}
          <div className="flex justify-center sm:justify-end items-center mt-6 sm:mt-8">
            <p className="text-sm sm:text-base font-extrabold">
              {now.format("HH:mm:ss")}
            </p>
          </div>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 z-20 opacity-10 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-repeat"
            style={{ backgroundImage: "url('/podcast/pattern-bg.svg')" }}
          ></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Column - Completely Redesigned */}
          <div className="lg:w-2/3">
            {/* Hero Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <FaBuilding className="text-3xl opacity-80" />
                  <div className="text-right">
                    <div className="text-2xl font-bold">Background</div>
                    <div className="text-red-200 text-sm">Client Story</div>
                  </div>
                </div>
                <div className="text-red-100 text-sm">Foundation</div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-red-500 p-6 rounded-2xl text-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <FaBullseye className="text-3xl opacity-80" />
                  <div className="text-right">
                    <div className="text-2xl font-bold">Objective</div>
                    <div className="text-red-600 text-sm">Mission</div>
                  </div>
                </div>
                <div className="text-red-700 text-sm">Target</div>
              </div>
              
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <FaFlag className="text-3xl opacity-80" />
                  <div className="text-right">
                    <div className="text-2xl font-bold">Goal</div>
                    <div className="text-red-200 text-sm">Vision</div>
                  </div>
                </div>
                <div className="text-red-100 text-sm">Achievement</div>
              </div>
            </div>

            {/* Story Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Journey</h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-500 to-red-500 rounded-full"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {/* Client Background */}
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      1
                    </div>
                    <Card className="flex-1 bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                        <CardTitle className="flex items-center gap-3">
                          <FaBuilding className="text-2xl" />
                          The Challenge
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {caseStudy.background}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Objective */}
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      2
                    </div>
                    <Card className="flex-1 bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                        <CardTitle className="flex items-center gap-3">
                          <FaBullseye className="text-2xl" />
                          Our Mission
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {caseStudy.objective}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Goal */}
                  {caseStudy.goal && (
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                        3
                      </div>
                      <Card className="flex-1 bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                          <CardTitle className="flex items-center gap-3">
                            <FaFlag className="text-2xl" />
                            The Vision
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {caseStudy.goal}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Solution & Implementation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Solution */}
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FaCog className="text-2xl" />
                    Solution Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    {caseStudy.solution}
                  </p>
                  <div className="flex items-center gap-2 text-red-600 font-semibold">
                    <FaRocket className="text-lg" />
                    <span>Implementation Ready</span>
                  </div>
                </CardContent>
              </Card>

              {/* Key Focus Areas */}
              <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-red-500 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FaLightbulb className="text-2xl" />
                    Strategic Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {caseStudy.keyFocusAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 font-medium">{area}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Digital Assets - Modern Grid */}
            <Card className="mb-8 bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FaRocket className="text-3xl" />
                  Delivered Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                  {caseStudy.digitalAssetsDelivered.map((asset, index) => (
                    <div key={index} className={`group relative overflow-hidden p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${index % 2 === 0 ? 'bg-gradient-to-br from-red-600 to-red-800 text-white border-red-800' : 'bg-white text-red-800 border-red-500'}`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-red-500' : 'bg-gradient-to-r from-red-500 to-red-600'}`}>
                          <FaCheckCircle className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <div className={`w-full rounded-full h-2 mb-2 ${index % 2 === 0 ? 'bg-red-400' : 'bg-gray-200'}`}>
                            <div className={`h-2 rounded-full ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-r from-red-500 to-red-600'}`} style={{width: '100%'}}></div>
                          </div>
                          <span className={`text-sm ${index % 2 === 0 ? 'text-red-200' : 'text-gray-500'}`}>Completed</span>
                        </div>
                      </div>
                      <p className={`font-medium transition-colors duration-200 ${index % 2 === 0 ? 'text-red-100 group-hover:text-white' : 'text-gray-700 group-hover:text-red-700'}`}>{asset}</p>
                      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-10 translate-x-10 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${index % 2 === 0 ? 'bg-gradient-to-br from-red-400 to-red-500' : 'bg-gradient-to-br from-red-400 to-red-600'}`}></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results & Impact - Interactive Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Impact & Results */}
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <CardTitle className="flex items-center gap-3 text-xl relative z-10">
                    <FaChartLine className="text-2xl animate-pulse" />
                    Impact & Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-red-300 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6 relative z-10">
                    {caseStudy.impact}
                  </p>
                  <div className="flex items-center gap-3 text-red-600 font-semibold relative z-10">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    <span>Measurable Success</span>
                  </div>
                  {caseStudy.impactStats && caseStudy.impactStats.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 relative z-10">
                      {caseStudy.impactStats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-lg text-center border border-red-200 hover:shadow-md transition-shadow"
                        >
                          <div className="text-2xl font-bold text-red-600 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-gray-600 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Expected vs Achieved */}
              {caseStudy.expectedVsAchieved && (
                <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-red-500 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <CardTitle className="flex items-center gap-3 text-xl relative z-10">
                      <FaBalanceScale className="text-2xl" />
                      Performance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-red-300 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6 relative z-10">
                      {caseStudy.expectedVsAchieved}
                    </p>
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                      <div className="text-center p-3 bg-white rounded-lg shadow-md border border-red-200">
                        <div className="text-2xl font-bold text-red-600">Expected</div>
                        <div className="text-sm text-gray-500">Baseline</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-md border border-red-200">
                        <div className="text-2xl font-bold text-red-700">Achieved</div>
                        <div className="text-sm text-gray-500">Results</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Strategy & Learning - Advanced Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Pivots & Iterations */}
              {caseStudy.pivotsIterations && (
                <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-red-500 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <CardTitle className="flex items-center gap-3 text-xl relative z-10">
                      <FaSync className="text-2xl group-hover:animate-spin" />
                      Adaptive Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-red-300 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6 relative z-10">
                      {caseStudy.pivotsIterations}
                    </p>
                    <div className="flex items-center gap-3 text-red-600 font-semibold relative z-10">
                      <FaSync className="text-lg" />
                      <span>Continuous Improvement</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Learnings & Forward Strategy */}
              <Card className="bg-gradient-to-br from-red-600 to-red-800 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group text-white">
                <CardHeader className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <CardTitle className="flex items-center gap-3 text-xl relative z-10">
                    <FaGraduationCap className="text-2xl" />
                    Strategic Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400 to-red-500 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                  <p className="text-red-100 leading-relaxed text-lg mb-6 relative z-10">
                    {caseStudy.learnings}
                  </p>
                  <div className="flex items-center gap-3 text-red-200 font-semibold relative z-10">
                    <FaGraduationCap className="text-lg" />
                    <span>Knowledge Transfer</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial - Premium Design */}
            {caseStudy.testimonial && (
              <Card className="mb-12 bg-gradient-to-br from-white to-gray-50 border-2 border-red-500 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FaQuoteLeft className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-xl leading-relaxed mb-6 italic text-red-700">
                        &quot;{caseStudy.testimonial}&quot;
                      </blockquote>
                      <FaQuoteRight className="text-red-600 text-2xl mb-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Quick Facts Card */}
            <Card className="mb-8 border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
                <CardTitle className="text-xl text-red-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <FaInfoCircle className="text-white text-sm" />
                  </div>
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <FaIndustry className="text-red-600 mr-3" />
                    <div>
                      <span className="font-medium text-red-700 block">Industry:</span>
                      <span className="text-red-600">{caseStudy.industry}</span>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <FaGlobe className="text-red-600 mr-3" />
                    <div>
                      <span className="font-medium text-red-700 block">Region:</span>
                      <span className="text-red-600">{caseStudy.region.join(", ")}</span>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <FaTags className="text-red-600 mr-3" />
                    <div>
                      <span className="font-medium text-red-700 block">Sector:</span>
                      <span className="text-red-600">{caseStudy.sector.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Case Studies */}
            {relatedStudies.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Case Studies
                </h3>
                <div className="space-y-4">
                  {relatedStudies.map((study) => (
                    <Link href={`/case-studies/${study.slug}`} key={study.id}>
                      <div className="group cursor-pointer">
                        <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                          {study.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {study.industry} | {study.region.join(", ")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Need Similar Results?</h3>
              <p className="mb-6">
                Let&apos;s discuss how we can help transform your digital
                presence
              </p>
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s create your success story together
          </p>
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

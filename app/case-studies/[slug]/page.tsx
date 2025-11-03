
import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import dayjs from "dayjs";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
  FaQuoteLeft,
  FaEye,
  FaDollarSign,
  FaTrophy
} from "react-icons/fa";
import Image from "next/image";
import { Features } from "@/components/features";
import { AnimatedList } from "@/components/magicui/animated-list";
import LightRays from "@/components/reactbits/lightrays";
import { Globe } from "@/components/ui/globe";
import { getTestPageDataById, testPageDataMap } from '@/app/data/test-page-data';
import { notFound } from 'next/navigation';
import Impact from '@/components/impact';
import Results from '@/components/results';
import { TestPageData } from '@/types/test-page';
import { buildMetadata, caseStudyJsonLd } from '@/app/utils/seo';

export default async function TestPage(
  props: { params?: Promise<{ slug: string }> }
) {
  const now = dayjs();
  const { slug } = await props.params!;
  const pageData: TestPageData | null = getTestPageDataById(slug);
  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen  from-gray-50 via-white to-gray-100">
      {/* Case Study JSON-LD */}
      {pageData && (
        <Script id="ld-case-study" type="application/ld+json">
          {JSON.stringify(
            caseStudyJsonLd({
              title: pageData.hero.title,
              description: pageData.hero.description,
              path: `/case-studies/${slug}`,
            })
          )}
        </Script>
      )}
      {/* Hero Section */}

      <section className="relative w-full bg-black text-white md:py-2 h-[100vh]  flex justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">

          <div style={{ width: '100%', height: '100%', position: 'relative' }}>

            <LightRays

              raysOrigin="top-center"

              raysColor="#00ffff"

              raysSpeed={1.5}

              lightSpread={0.8}

              rayLength={1.2}

              followMouse={true}

              mouseInfluence={0.1}

              noiseAmount={0.1}

              distortion={0.05}

              className="custom-rays"

            />
            {/* <Galaxy /> */}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center  gap-6 lg:gap-8">
            {/* Left Image - Hidden on mobile, visible on tablet+ */}
            {/* <div className="hidden md:block flex-shrink-0">
              <Image
                src="/images/internship/1.webp"
                alt=""
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[300px] hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
              />
            </div> */}

            {/* Center Content */}
            <div className="flex flex-col justify-center items-center text-center  max-w-4xl mt-32">
              <p className="text-xs sm:text-sm font-bold text-red-500 mb-2 sm:mb-3">
                {now.format("dddd, D MMMM YYYY")}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl  font-extrabold mb-4 sm:mb-6 leading-tight">
                {pageData.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-3xl leading-relaxed px-2">
                {pageData.hero.description}
              </p>

              {/* Mobile Images - Only visible on mobile */}
              <div className="flex md:hidden gap-4 mb-6">
                {pageData.hero.mobileImages?.map((imageSrc: string, index: number) => (
                  <Image
                    key={index}
                    src={imageSrc}
                    alt=""
                    width={120}
                    height={120}
                    className="hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Right Image - Hidden on mobile, visible on tablet+ */}
            {/* <div className="hidden md:block flex-shrink-0">
              <Image
                src="/images/internship/2.webp"
                alt=""
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[300px] hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
              />
            </div> */}
          </div>

          {/* Time Display */}
          <div className="flex justify-center sm:justify-end items-center mt-6 sm:mt-8">
            <p className="text-sm sm:text-base font-extrabold">
              {now.format("HH:mm:ss")}
            </p>
          </div>
        </div>

        {/* Pattern overlay */}
        {/* <div className="absolute inset-0 z-20 opacity-10 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-repeat"
            style={{ backgroundImage: "url('/podcast/pattern-bg.svg')" }}
          ></div>
        </div> */}
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
         <Results results={pageData.results} />
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          {/* Client Profile */}
          <section className="relative bg-gradient-to-br from-red-600/10 via-white to-[#00D6E8]/10 rounded-3xl p-8 shadow-xl border border-red-600/20 w-[45%] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-[#00D6E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00D6E8]/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">

                <h2 className="text-2xl font-semibold   text-red-500 group-hover:scale-105 transition-transform duration-300">Client Profile</h2>
              </div>
              <AnimatedList>
                <div className="grid sm:grid-cols-1 gap-4 text-left">
                  <div className="bg-gradient-to-r from-red-600/10 to-[#00D6E8]/10 rounded-2xl p-4 border border-red-600/20 hover:border-[#00D6E8]/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group/item">
                    <div className="text-sm font-semibold text-red-600 mb-1 group-hover/item:text-[#00D6E8] transition-colors duration-300">Industry</div>
                    <div className="text-base font-semibold text-gray-900 group-hover/item:text-gray-800 transition-colors duration-300">{pageData.clientProfile.industry}</div>
                  </div>
                  <div className="bg-gradient-to-r from-[#00D6E8]/10 to-red-600/10 rounded-2xl p-4 border border-[#00D6E8]/20 hover:border-red-600/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group/item">
                    <div className="text-sm font-semibold text-[#00D6E8] mb-1 group-hover/item:text-red-600 transition-colors duration-300">Category</div>
                    <div className="text-base font-semibold text-gray-900 group-hover/item:text-gray-800 transition-colors duration-300">{pageData.clientProfile.category}</div>
                  </div>
                  <div className="bg-gradient-to-r from-red-600/10 to-[#00D6E8]/10 rounded-2xl p-4 border border-red-600/20 hover:border-[#00D6E8]/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group/item">
                    <div className="text-sm font-semibold text-red-600 mb-1 group-hover/item:text-[#00D6E8] transition-colors duration-300">Region</div>
                    <div className="text-base font-semibold text-gray-900 group-hover/item:text-gray-800 transition-colors duration-300">{pageData.clientProfile.region}</div>
                  </div>
                </div>
              </AnimatedList>
            </div>
          </section>


          {/* Objective Goal */}
          <section className="relative bg-white rounded-3xl hover:scale-105 transition-transform duration-500 p-8 shadow-xl border border-gray-100 w-[55%]">
            <div className="flex flex-col h-full">

              <div className=" relative flex size-full  items-center justify-center flex-col overflow-hidden border rounded-3xl">
                <div className="flex items-center flex-col mb-6 ">
                  <div className=" flex items-center justify-center flex-col text-left -translate-y-12 p-10 ">
                    <h2 className="text-2xl font-semibold text-center  mb-4 text-red-500 hover:scale-110 transition-transform duration-300">{pageData.objectiveGoal.title}</h2>
                    <p className="text-sm text-gray-700 leading-relaxed font-semibold mb-6 text-center">
                      {pageData.objectiveGoal.description}
                    </p>
                  </div>
                  <Globe className="top-36" />
                </div>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
            </div>
          </section>
        </div>

        <Features solutionProposed={pageData.solutionProposed} />

        <Impact impact={pageData.impact} />

     

      </div>
    </div>
  );
}

export async function generateMetadata(
  props: { params?: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params!;
  const data = getTestPageDataById(slug);
  if (!data) return {};
  const keywords: string[] = [];
  if (data.clientProfile?.industry) keywords.push(data.clientProfile.industry);
  if (data.clientProfile?.category) keywords.push(data.clientProfile.category);
  return buildMetadata({
    title: `${data.hero.title} | DigitallyNext Case Study`,
    description: data.hero.description,
    path: `/case-studies/${slug}`,
    keywords,
    images: data.hero.mobileImages && data.hero.mobileImages.length ? [data.hero.mobileImages[0]] : undefined,
  });
}

export function generateStaticParams() {
  return Object.keys(testPageDataMap).map((slug) => ({ slug }));
}
// import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/types/case-study';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  // Determine impact story number based on study.id (1-8)
  const impactStoryNumber = (study.id <= 8) ? study.id : (study.id % 8 || 8);
  
  // Helper function to get icon based on industry or sector
  const getIcon = () => {
    const industryIcons: Record<string, string> = {
      "IT/ITES": "💻",
      "Healthcare": "🏥",
      "Healthcare Tech": "⚕️",
      "Luxury & Lifestyle": "✨",
      "BFSI": "💰",
      "Consulting": "📊"
    };
    
    return industryIcons[study.industry] || "🎯";
  };
  
  return (
    <Link href={`/case-studies/${study.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col border border-gray-100">
        {/* Header with Impact Story Number */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 text-white flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl mr-2">{getIcon()}</span>
            <span className="font-medium">{study.industry}</span>
          </div>
          <div className="bg-white text-red-600 rounded-full h-8 w-8 flex items-center justify-center font-bold">
            #{impactStoryNumber}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h2>
          <p className="text-gray-600 mb-5 flex-grow">{study.tagLine ?? study.oneLiner}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {study.region.slice(0, 2).map(region => (
              <span key={region} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {region}
              </span>
            ))}
            {study.sector.slice(0, 2).map(sector => (
              <span key={sector} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {sector}
              </span>
            ))}
          </div>
          
          {/* Key results preview */}
          {study.impactStats && study.impactStats.length > 0 && (
            <div className="border-t border-gray-100 pt-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Impact</h3>
              <div className="grid grid-cols-2 gap-3">
                {study.impactStats.map((stat, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-red-600 mr-2">
                      {stat.icon === "network" && "🌐"}
                      {stat.icon === "rocket" && "🚀"}
                      {!stat.icon && "📈"}
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-auto pt-2">
            <span className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors">
              View Case Study
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
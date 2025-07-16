// import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/types/case-study';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${study.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
        {/* Image */}
        {/* <div className="relative h-48 w-full bg-gradient-to-r from-gray-700 to-gray-900">
          {study.featuredImage ? (
            <Image
              src={study.featuredImage}
              alt={study.title}
              fill
              className="object-cover opacity-80"
            />
          ) : null}
          
        
          <div className="absolute top-0 left-0 right-0 p-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
              {study.industry}
            </span>
            {study.region.slice(0, 1).map(region => (
              <span key={region} className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                {region}
              </span>
            ))}
            {study.sector.slice(0, 1).map(sector => (
              <span key={sector} className="px-2 py-1 bg-gray-800 text-white text-xs rounded-full">
                {sector}
              </span>
            ))}
          </div>
        </div> */}
        
        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h2>
          <p className="text-gray-600 mb-4 flex-grow">{study.oneLiner}</p>
          
          {/* Key results preview */}
          {study.impactStats && study.impactStats.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-4">
              {study.impactStats.slice(0, 2).map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-red-600 font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-500 ml-1">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-4">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
              View Case Study
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
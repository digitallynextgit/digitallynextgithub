import { notFound } from 'next/navigation';
import { caseStudies } from '@/app/data/case-studies';
import CaseStudyContent from './CaseStudyContent';

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params,  }: { params: Promise<{ slug: string }>; searchParams?: Promise<Record<string, string | string[] | undefined>> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);
  
  if (!caseStudy) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((study) => study.slug === slug);
  const prevStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  const nextStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;

  // Get related case studies (same industry or sector, excluding current)
  const relatedStudies = caseStudies
    .filter(study => study.id !== caseStudy.id)
    .filter(study => 
      study.industry === caseStudy.industry || 
      study.sector.some(sector => caseStudy.sector.includes(sector))
    )
    .slice(0, 3); // Get up to 3 related case studies

  return (
    <CaseStudyContent
      caseStudy={caseStudy}
      prevStudy={prevStudy}
      nextStudy={nextStudy}
      relatedStudies={relatedStudies}
    />
  );
}
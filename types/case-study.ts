export type CaseStudyIndustry = "IT/ITES" | "Healthcare" | "Healthcare Tech" | "Luxury & Lifestyle" | "BFSI" | "Consulting";

export type CaseStudyRegion = "US" | "India" | "UAE" | "Israel" | "Spain" | "Czech Republic" | "APAC";

export type CaseStudySector = 
  | "SAP" | "AWS" | "QA-NetSuite" 
  | "Genomics" | "Genetics" 
  | "Hearing Aids" 
  | "Judaica Art" 
  | "Insurance" 
  | "Value Cards" 
  | "Real Estate Advisory" 
  | "Legal - IP & Media";

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  oneLiner: string;
  industry: CaseStudyIndustry;
  region: CaseStudyRegion[];
  sector: CaseStudySector[];
  background: string;
  objective: string;
  solution: string;
  keyFocusAreas: string[];
  digitalAssetsDelivered: string[];
  impact: string;
  impactStats?: {
    label: string;
    value: string;
    icon?: string;
  }[];
  learnings: string;
  testimonial?: string;
  featuredImage?: string;
  galleryImages?: string[];
}
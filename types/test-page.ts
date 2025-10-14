export interface TestPageData {
  // Hero Section
  hero: {
    date?: string;
    title: string;
    description: string;
    images?: {
      left?: string;
      right?: string;
    };
    mobileImages: string[];
  };

  // Client Profile Section
  clientProfile: {
    industry: string;
    category: string;
    region: string;
  };

  // Objective Goal Section
  objectiveGoal: {
    title: string;
    description: string;
  };

  // Impact Section
  impact?: {
    coverage?: {
      geographic?: string;
      media?: string;
      publications?: string;
    };
    achievements?: string[];
  };

  // Results Section
  results: {
    brandRecognition: {
      percentage: string;
      title: string;
      description: string;
    };
    revenueGrowth: {
      percentage: string;
      title: string;
      description: string;
    };
  };

  // Solution Proposed Section
  solutionProposed?: {
    approach?: string;
    focusAreas?: string[];
    strategicSupport?: string[];
    digitalAssets?: string[];
  };

  expectedVsAchieved?: {
    content: string;
  };

  learnings?: {
    content: string;
  };

  testimonial?: {
    content: string;
    author?: string;
    position?: string;
  };
}

export interface TestPageProps {
  data: TestPageData;
}
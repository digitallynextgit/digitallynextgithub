'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { fadeIn } from '@/app/utils/motion';

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  description?: string;
  industry?: string;
  impact?: string;
  slug?: string;
  index: number;
  // Interaction removed; keep optional for compatibility
  active?: string;
  handleClick?: (id: string) => void;
}

const ExploreCard = ({ id, imgUrl, title, description, industry, impact, slug, index }: ExploreCardProps) => {
  const CardContent = () => (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative flex items-center justify-center min-w-[170px] h-full min-h-[500px] lg:min-h-[550px] overflow-hidden bg-white border-2 border-red-500 rounded-[24px] shadow-lg`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[22px] opacity-20"
      />
      <div className="absolute bottom-0 p-8 w-full bg-white/95 rounded-b-[22px] border-t-2 border-red-500 flex flex-col justify-between h-[500px] lg:h-[550px]">
        <div className="flex-1">
          <div
            className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[24px] bg-red-500 mb-[16px]`}
          >
          <img
            src="/case-studies/case-icon.svg"
            alt="case study"
            className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
          />
          </div>
          <div className="flex items-center gap-2 mb-2">
          {industry && (
            <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full border border-red-300">
              {industry}
            </span>
          )}
          </div>
          <p className="font-normal text-[14px] leading-[18px] text-black uppercase tracking-wider">
          Case Study
          </p>
          <h2 className="mt-[12px] font-semibold  text-[22px] text-black leading-tight max-h-[86px] overflow-hidden">
          {title}
          </h2>
          {description && (
          <p className="mt-[16px] font-normal text-[14px] leading-[20px] text-black max-h-[60px] overflow-hidden">
            {description}
          </p>
          )}
          {impact && (
          <div className="mt-[16px] p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="text-[12px] text-red-700 uppercase tracking-wider mb-1">Impact</p>
            <p className="text-[13px] text-black leading-[18px] max-h-[56px] overflow-hidden">{impact}</p>
          </div>
          )}
        </div>
        {slug && (
          <div className="mt-[16px]">
            <Link
              href={`/case-studies/${slug}`}
              aria-label={`View full case study: ${title}`}
              className="w-full inline-flex bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 items-center justify-center gap-2"
              role="button"
            >
              <span>View Full Case Study</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );

  return <CardContent />;
};

export default ExploreCard;
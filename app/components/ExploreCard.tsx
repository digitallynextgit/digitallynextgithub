'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '@/app/utils/motion';

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  description?: string;
  industry?: string;
  impact?: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ExploreCard = ({ id, imgUrl, title, description, industry, impact, index, active, handleClick }: ExploreCardProps) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] lg:h-[700px] h-[500px]  transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer bg-white border-2 border-red-500 rounded-[24px] shadow-lg`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={`case-study-${index}`}
      className="absolute w-full h-full object-cover rounded-[22px] opacity-20"
    />
    {active !== id ? (
      <h3 className="font-semibold text-wrap text-[18px] lg:text-[24px] text-black absolute z-10 lg:bottom-40 lg:rotate-[-90deg] lg:origin-[0,0] bg-white/80 px-4 py-2 rounded-2xl lg:w-[400px] text-center">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-white/95 rounded-b-[22px] border-t-2 border-red-500">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] bg-red-500 mb-[16px]`}
        >
          <img
            src="/case-studies/case-icon.svg"
            alt="case study"
            className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
          />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full border border-red-300">
            {industry}
          </span>
        </div>
        <p className="font-normal text-[14px] leading-[18px] text-black uppercase tracking-wider">
          Case Study
        </p>
        <h2 className="mt-[12px] font-semibold sm:text-[28px] text-[20px] text-black leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-[16px] font-normal text-[14px] leading-[20px] text-black line-clamp-3">
            {description}
          </p>
        )}
        {impact && (
          <div className="mt-[16px] p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="text-[12px] text-red-700 uppercase tracking-wider mb-1">Impact</p>
            <p className="text-[13px] text-black leading-[18px]">{impact}</p>
          </div>
        )}
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
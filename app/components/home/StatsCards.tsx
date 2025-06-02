"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";

interface StatsCardProps {
  value: string;
  label: string;
  mascot: string;
  color: string;
}

const statsData: StatsCardProps[] = [
  {
    value: "15+",
    label: "Countries Served",
    mascot: "🌎",
    color: "#00C9A7"
  },
  {
    value: "100+",
    label: "Clients Served",
    mascot: "👥",
    color: "#FFB800"
  },
  {
    value: "40+",
    label: "Industries Served",
    mascot: "🏭",
    color: "#FF3D71"
  }
];

const NumberTicker = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.8 });
  
  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds animation
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * numericValue));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    } else {
      // Reset counter when not in view
      setCount(0);
    }
  }, [isInView, numericValue]);
  
  return (
    <div ref={ref} className="inline-block">
      <span className="text-5xl md:text-6xl font-bold">{count}</span>
      <span className="text-5xl md:text-6xl font-bold">+</span>
    </div>
  );
};

const StatsCard = ({ value, label, mascot, color }: StatsCardProps) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="relative bg-white border-b-8 rounded-xl p-6 md:p-8 max-w-xl flex flex-col items-center text-center overflow-hidden group"
      style={{ borderColor: color }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => controls.start("visible")}
      onHoverEnd={() => controls.start("hidden")}
    >
      <NumberTicker value={value} />
      
      <div className="w-24 md:w-32 h-1 my-3 md:my-4" style={{ backgroundColor: color }}></div>
      
      <p className="text-lg md:text-xl font-medium mb-2 md:mb-4">{label}</p>
      
      {/* Mascot that animates on hover */}
      <motion.div 
        className="absolute -right-12 -bottom-12 text-7xl md:text-8xl opacity-10 pointer-events-none"
        initial={{ rotate: 0 }}
        whileHover={{ 
          rotate: [0, -10, 10, -5, 5, 0],
          scale: 1.2,
          opacity: 0.2,
          transition: { 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          }
        }}
      >
        {mascot}
      </motion.div>

      {/* Arrow that appears on hover */}
      <motion.div 
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { y: 10, opacity: 0 },
          visible: { 
            y: [10, 0, 5, 0],
            opacity: 1,
            transition: {
              y: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              },
              opacity: { duration: 0.3 }
            }
          }
        }}
      >
        <ArrowUpIcon 
          size={24} 
          style={{ color }}
          strokeWidth={3}
        />
      </motion.div>
    </motion.div>
  );
};

export function StatsCards() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto py-4 md:py-16">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}

export default StatsCards; 
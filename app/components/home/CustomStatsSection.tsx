"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: string;
  label: string;
  icon: string;
  color: string;
}

const stats: StatItemProps[] = [
  {
    value: "15+",
    label: "Countries Served",
    icon: "🌎",
    color: "#00C9A7"
  },
  {
    value: "100+",
    label: "Clients Served",
    icon: "👥",
    color: "#FFB800"
  },
  {
    value: "40+",
    label: "Industries Served",
    icon: "🏭",
    color: "#FF3D71"
  }
];

const AnimatedCounter = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();
    
    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * numericValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isInView, numericValue]);
  
  return (
    <span ref={ref} className="text-5xl sm:text-6xl md:text-7xl font-bold">
      {count}<span className="text-5xl sm:text-6xl md:text-7xl">+</span>
    </span>
  );
};

const StatItem = ({ value, label, icon, color }: StatItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg"
      style={{ borderBottom: `8px solid ${color}` }}
    >
      <div className="text-6xl mb-3 opacity-20">{icon}</div>
      <AnimatedCounter value={value} />
      <div className="w-20 h-1 my-4" style={{ backgroundColor: color }}></div>
      <h3 className="text-xl font-medium text-center">{label}</h3>
    </motion.div>
  );
};

export default function CustomStatsSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Global Impact</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 
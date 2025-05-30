"use client";

import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
import {  useState } from "react";

interface MarqueeProps {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children?: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4 py-2",
          vertical ? "flex-col" : "flex-row",
          vertical
            ? "animate-marquee-vertical"
            : "animate-marquee"
        )}
        style={{
          "--duration": "20s",
          "--gap": "1rem",
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: isHovered ? "paused" : "running",
        } as React.CSSProperties}
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i} className="flex shrink-0 gap-4">
            {children}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-4 py-4",
          vertical ? "flex-col" : "flex-row",
          vertical
            ? "animate-marquee-vertical"
            : "animate-marquee"
        )}
        style={{
          "--duration": "20s",
          "--gap": "1rem",
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: isHovered ? "paused" : "running",
        } as React.CSSProperties}
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i} className="flex shrink-0 gap-4">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import Image from "next/image";

// Create arrays for odd-numbered logo files
const logos = [
  { src: "/logos/1.png", alt: "Logo 1" },
  { src: "/logos/3.png", alt: "Logo 3" },
  { src: "/logos/5.png", alt: "Logo 5" },
  { src: "/logos/7.png", alt: "Logo 7" },
  { src: "/logos/9.png", alt: "Logo 9" },
];

const logosSecondRow = [
  { src: "/logos/11.png", alt: "Logo 11" },
  { src: "/logos/13.png", alt: "Logo 13" },
  { src: "/logos/15.png", alt: "Logo 15" },
  { src: "/logos/17.png", alt: "Logo 17" },
  { src: "/logos/19.png", alt: "Logo 19" },
];

const LogoItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative h-24 w-48 mx-8 flex items-center justify-center"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
};

export function LogoSlider() {
  return (
    <div className="w-full overflow-hidden py-12">
      <div className="max-w-7xl mx-auto">
        <Marquee className="py-6" repeat={3}>
          {logos.map((logo, index) => (
            <LogoItem key={index} {...logo} />
          ))}
        </Marquee>
        <Marquee className="py-6" reverse repeat={2}>
          {logosSecondRow.map((logo, index) => (
            <LogoItem key={index} {...logo} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default LogoSlider; 
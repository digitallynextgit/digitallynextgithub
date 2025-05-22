"use client";

import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png",
    alt: "Intel",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    alt: "Samsung",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    alt: "Netflix",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1280px-Adobe_Corporate_Logo.png",
    alt: "Adobe",
  },
  {
    src: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png",
    alt: "Spotify",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png",
    alt: "Tesla",
  },
];

const logosSecondRow = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png",
    alt: "Intel",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    alt: "Samsung",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    alt: "Netflix",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1280px-Adobe_Corporate_Logo.png",
    alt: "Adobe",
  },
  {
    src: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png",
    alt: "Spotify",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png",
    alt: "Tesla",
  },
];

const LogoItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative h-16 w-32 mx-8 flex items-center justify-center"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
};

export function LogoSlider() {
  return (
    <div className="w-full overflow-hidden py-2">
      <div className="max-w-7xl mx-auto">
        <Marquee className="py-6" repeat={2}>
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
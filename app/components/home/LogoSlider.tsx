"use client";

import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

// Logo data with placeholder URLs - replace with actual logos as needed
const logos = [
  {
    name: "Google",
    url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Microsoft",
    url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
  },
  // {
  //   name: "Apple",
  //   url: "https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg",
  // },
  {
    name: "Facebook",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
  },
  {
    name: "IBM",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Intel",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png",
  },
  {
    name: "Samsung",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  },
];

// Second set of logos for the bottom row
const logosSecondRow = [
  {
    name: "Netflix",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
  },
  {
    name: "Adobe",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1280px-Adobe_Corporate_Logo.png",
  },
  {
    name: "Spotify",
    url: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png",
  },
  {
    name: "Tesla",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png",
  },
  {
    name: "Twitter",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png",
  },
  {
    name: "Oracle",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
  },
  {
    name: "Nvidia",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
  },
  {
    name: "Salesforce",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
  },
];

const LogoItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <motion.div
      className={cn(
        "mx-8 flex h-16 items-center justify-center rounded-lg px-8",
        "transition-all duration-200 ease-in-out hover:scale-110"
      )}
      whileHover={{ y: -5 }}
    >
      <Image
        src={url} 
        alt={`${name} logo`} 
        fill
        className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </motion.div>
  );
};

export function LogoSlider() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h3 className="text-5xl font-bold text-center mb-10">Trusted by Leading Companies</h3>
        
        <div className="space-y-8">
          {/* First row - moving left to right */}
          <div className="relative overflow-hidden">
            <Marquee
              pauseOnHover
              className="py-4 [--duration:30s]"
            >
              {logos.map((logo, idx) => (
                <LogoItem key={idx} {...logo} />
              ))}
            </Marquee>
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900/50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900/50 to-transparent z-10"></div>
          </div>
          
          {/* Second row - moving right to left */}
          <div className="relative overflow-hidden">
            <Marquee
              pauseOnHover
              className="py-4 [--duration:25s]"
              reverse
            >
              {logosSecondRow.map((logo, idx) => (
                <LogoItem key={idx} {...logo} />
              ))}
            </Marquee>
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900/50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900/50 to-transparent z-10"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LogoSlider; 
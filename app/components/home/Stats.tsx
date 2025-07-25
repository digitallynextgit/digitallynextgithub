'use client';

import {  FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon } from "lucide-react";
// import { useState } from "react";

// import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import CustomStatsSection from "./CustomStatsSection";
import Link from "next/link";

const files = [
  {
    name: "Transforming a 30+ Year Legacy Tech Brand",
    body: "Transformed a 30+ year legacy tech firm into a new-age brand.",
    color: "#00C9A7",
    link: "/case-studies/it-ites-sap-aws"
  },
  {
    name: "Cross-Border Healthcare Brand Transformation",
    body: "Rebranded a post-M&A healthcare brand across borders",
    color: "#FFB800",
    link: "/case-studies/healthcare-genomics-genetics"
  },
  {
    name: "Breaking Social Taboos Around Hearing Aids",
    body: "Created a digital movement breaking social taboos around hearing aids.",
    color: "#FF3D71",
    link: "/case-studies/healthcare-tech-hearing-aids"
  },
  {
    name: "Global Digital Gallery for Judaica Art",
    body: "Brought Judaica art to global audiences via digital.",
    color: "#1E86FF",
    link: "/case-studies/luxury-lifestyle-judaica-art"
  },
  {
    name: "Phygital InsurTech Model for Tier II & III Cities",
    body: "Launched a first-of-its-kind phygital InsurTech model in Tier II & III cities.",
    color: "#9747FF",
    link: "/case-studies/bfsi-insurance-india"
  },
  {
    name: "Global Digital Visibility for Student Fintech Card",
    body: "Built a global digital brand for a UNESCO-endorsed student value card, scaling reach to 125+ countries through strategic marketing.",
    color: "#1E86FF",
    link: "/case-studies/bfsi-value-cards"
  },
  {
    name: "Digital Modernization for Global Real Estate Consulting",
    body: "Digitally modernized a 40+ year-old global real estate consultancy by highlighting its legacy and advocacy in the built environment.",
    color: "#1E86FF",
    link: "/case-studies/consulting-real-estate-advisory"
  },
  {
    name: "Digital Globalization for Media Law Firm",
    body: "Managed the digital transformation of a global legal advisory firm, specializing in IP, media, entertainment, and promotional law.",
    color: "#1E86FF",
    link: "/case-studies/consulting-legal-ip-media"
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}
 
const notifications = [
  {
    name: "B2B",
    description: "",
    time: "",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "B2C",
    description: "",
    time: "",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "D2C",
    description: "",
    time: "",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "B2G",
    description: "",
    time: "",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "C2C",
    description: "",
    time: "",
    icon: "💬",
    color: "#1E86FF",
  },
  {
    name: "C2B",
    description: "",
    time: "",
    icon: "👤",
    color: "#1E86FF",
  },
];
 
const notificationsList = Array.from({ length: 10 }, () => notifications).flat();
 
const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
 
function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notificationsList.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
 
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

const features = [
  {
    Icon: FileTextIcon,
    name: "A Campaign Which Soon Turned Into A MOVEMENT!",
    description: "",
    href: "/case-studies/healthcare-tech-hearing-aids",
    cta: "Read Case Study",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <Link href={f.link} key={idx}>
            <figure
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
              )}
              style={{
                backgroundColor: f.color + "33",
                borderColor: f.color,
              }}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </figure>
          </Link>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Be It",
    description: "There is No As Such Standard Plan Fit All.",
    href: "/services",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  // {
  //   Icon: CalendarIcon,
  //   name: "Book Free Performance Consulting",
  //   description: "",
  //   className: "col-span-3 lg:col-span-1",
  //   href: "#",
  //   cta: "Learn more",
  //   background: (
  //     <Calendar
  //       mode="single"
  //       selected={new Date(2025, 4, 11, 0, 0, 0)}
  //       className="absolute left-12 md:top-10 origin-top scale-125 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
  //     />
  //   ),
  // },
];

export function BentoDemo() {
  return (
    <>
      <BentoGrid className="max-w-6xl mx-auto md:py-20 py-10 md:px-10 px-4">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
      
      <CustomStatsSection />
    </>
  );
}

// Add default export for the component
export default BentoDemo;

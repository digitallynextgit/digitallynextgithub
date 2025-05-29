'use client';

import { CalendarIcon, FileTextIcon, BarChartIcon } from "@radix-ui/react-icons";
import { BellIcon, ArrowUpIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
// import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs";
import { AnimatedList } from "@/components/magicui/animated-list";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    color: "#00C9A7",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    color: "#FFB800",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    color: "#FF3D71",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    color: "#1E86FF",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    color: "#9747FF",
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

// StatsCards Components
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
      <span className="text-6xl font-bold">{count}</span>
      <span className="text-6xl font-bold">+</span>
    </div>
  );
};

const StatsCard = ({ value, label, mascot, color }: StatsCardProps) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="relative bg-white border-b-8 rounded-xl p-8 max-w-xl flex flex-col items-center text-center overflow-hidden group"
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
      
      <div className="w-32 h-1 my-4" style={{ backgroundColor: color }}></div>
      
      <p className="text-xl font-medium mb-4">{label}</p>
      
      {/* Mascot that animates on hover */}
      <motion.div 
        className="absolute -right-12 -bottom-12 text-8xl opacity-10 pointer-events-none"
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

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-16">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

const features = [
  {
    Icon: FileTextIcon,
    name: "A Campaign Which Soon Turned Into A MOVEMENT!",
    description: "",
    href: "#",
    cta: "Read Case Study",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
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
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Be It",
    description: "There is No As Such Standard Plan Fit All.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Book Free Performance Consulting",
    description: "",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2025, 4, 11, 0, 0, 0)}
        className="absolute md:left-12 left-2 md:top-10 origin-top scale-125 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: BarChartIcon,
    name: "",
    description: "",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "",
    background: (
      <StatsCards />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:py-20 py-10 md:px-10 px-4">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

// Add default export for the component
export default BentoDemo;

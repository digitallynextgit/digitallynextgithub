'use client'
import Image from "next/image";
import Link from "next/link";
import { careersData } from "@/app/data/careers/full-time";
import { internshipPositions } from "@/app/data/careers/internship";
import { FaArrowRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface Position {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const internshipDataFormatted = {
  title: "Join Our Internship Program",
  positions: internshipPositions.map((position, index) => ({
    id: index + 1,
    icon: `/images/internship/${index + 1}.webp`,
    title: position.title,
    description: position.description.split('.')[0] + '.'
  }))
};

const Careers = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeTab, setActiveTab] = useState<'fulltime' | 'internship'>('fulltime');
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!api || !mounted || isMobile) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, mounted, isMobile]);

  const currentPositions: Position[] = activeTab === 'fulltime' 
    ? careersData.positions 
    : internshipDataFormatted.positions;

  if (!mounted) {
    return null;
  }

  const CardsContent = () => (
    <div className="flex flex-col lg:hidden gap-4 w-full">
      {currentPositions.map((position: Position) => (
        <div key={position.id} className="w-full">
          <Link
            href={activeTab === 'fulltime' ? "/careers/full-time" : "/careers/internship"}
            className="group h-full block"
          >
            <div className="bg-white rounded-[4vw] p-4 border-2 border-black hover:border-red-600 transition-all duration-300 h-full flex flex-col hover:bg-blue">
              <div className="flex-grow aspect-square relative mb-2 h-[25vh]">
              <Image
                  src={position.icon}
                  alt={position.title}
                  fill
                  className="object-contain p-[3vw] hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-between mt-auto">
                <h3 className="text-[3.5vw] font-semibold">
                  {position.title}
                </h3>
                <FaArrowRight className="text-[3.5vw] transform transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-white py-[12vh] px-[6vw] relative">
      {/* Logo in top right corner */}
      <div className="absolute top-[4vh] right-[6vw] w-[12vw] h-[12vw] rounded-full border-2 border-black p-[1vw]">
        <Image
          src="/images/redstar.webp"
          alt="Digitally Next Logo"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>

      <div className="lg:max-w-[90%]">
        <h2 className="text-[8vw] lg:text-[5vw] font-semibold mb-[2vh]">
          {activeTab === 'fulltime' ? careersData.title : internshipDataFormatted.title}
        </h2>
        <p className="text-[3vw] md:text-[1.5vw] text-gray-600 mb-[4vh] lg:max-w-[70%]">
          Join our team and be part of our exciting journey
        </p>

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-[4vh]">
          <button
            onClick={() => setActiveTab('fulltime')}
            className={`px-8 py-3 rounded-full text-[2.5vw] md:text-[1.2vw] font-semibold transition-all duration-300 ${
              activeTab === 'fulltime'
                ? 'bg-red-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Full Time
          </button>
          <button
            onClick={() => setActiveTab('internship')}
            className={`px-8 py-3 rounded-full text-[2.5vw] md:text-[1.2vw] font-semibold transition-all duration-300 ${
              activeTab === 'internship'
                ? 'bg-red-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Internship
          </button>
        </div>

        {/* Mobile View */}
        <CardsContent />

        {/* Desktop View with Carousel */}
        <div className="hidden lg:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-[90vw]"
          >
            <CarouselContent>
              {currentPositions.map((position: Position) => (
                <CarouselItem 
                  key={position.id} 
                  className="basis-1/4"
                >
                  <Link
                    href={activeTab === 'fulltime' ? "/careers" : "/careers"}
                    className="group h-full block"
                  >
                    <div className="bg-white rounded-[2vw] p-[1vw] border-2 border-black hover:border-red-600 transition-all duration-300 h-full flex flex-col hover:bg-blue">
                      <div className="flex-grow aspect-square relative mb-[2vh]">
                        <Image
                          src={position.icon}
                          alt={position.title}
                          fill
                          className="object-cover p-[2.5vw] hover:scale-125 transition-all duration-300"
                        />
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <h3 className="text-[1.2vw] font-semibold">
                          {position.title}
                        </h3>
                        <FaArrowRight className="text-[1.5vw] transform transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Careers;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { nuggetsData } from "@/app/data/nuggets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ConsultationFormPopup from "@/app/components/ConsultationFormPopup";

const nuggetColors = ["#ff4255", "#0ec9c5"];

interface NuggetItem {
  id: number;
  images: number[];
  title: string;
  link: string;
  downloadUrl: string;
}

interface NuggetCardProps {
  item: NuggetItem;
}

const NuggetCard: React.FC<NuggetCardProps> = ({ item }) => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [downloadPending, setDownloadPending] = React.useState(false);
  const [failedImages, setFailedImages] = React.useState<Record<string, boolean>>({});

  const handleDownload = () => {
    setIsFormOpen(true);
    setDownloadPending(true);
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    if (downloadPending && item.downloadUrl) {
      window.open(item.downloadUrl, "_blank");
      setDownloadPending(false);
    }
  };

  const bgColor = nuggetColors[(item.id - 1) % 2];

  return (
    <div className="relative flex flex-col h-full group">
      <div
        className="absolute left-0 top-0 w-full h-full z-0 transition-all duration-300 group-hover:scale-105"
        style={{
          background: bgColor,
          clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%, 20% 50%)",
          opacity: 0.15,
        }}
      />

      <div className="relative z-10 w-full">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {item.images &&
              item.images.map((imageNumber: number) => {
                const imagePath = `/nuggetsimg/${item.id}/${imageNumber}.webp`;
                return (
                  <CarouselItem key={imageNumber}>
                    <div className="relative h-[62vh] transform transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={failedImages[imagePath] ? "/images/placeholder.webp" : imagePath}
                        alt={`${item.title} - Image ${imageNumber}`}
                        width={1200}
                        height={200}
                        priority={true}
                        className="object-cover rounded-t-[2vw] border-2 transition-all duration-300"
                        style={{ borderColor: bgColor }}
                        onError={() => {
                          console.error("Image failed to load:", imagePath);
                          setFailedImages((prev) => ({
                            ...prev,
                            [imagePath]: true,
                          }));
                        }}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <div className="relative z-10 bg-transparent p-[3vw] md:p-[1vw] rounded-b-[2vw] mt-[vw]">
        <div className="flex flex-col md:flex-row gap-[2vw] lg:mt-[1vw] mt-[12vw]">
          <Link
            href={item.link}
            className="bg-white text-center px-[2vw] md:px-[2vw] py-[1vh] lg:py-[1vh] rounded-full transition-all hover:shadow-lg"
            style={{ color: bgColor, borderColor: bgColor, borderWidth: 2, borderStyle: "solid" }}
          >
            <span className="lg:text-[1.25vw] text-[5vw] md:text-[1vw]">Read More</span>
          </Link>
          <button
            onClick={handleDownload}
            className="text-white text-center lg:text-[1.25vw] text-[5vw] md:text-[1vw] px-[2vw] md:px-[2vw] py-[1vh] lg:py-[1vh] rounded-full transition-all hover:shadow-lg flex-1"
            style={{ backgroundColor: bgColor }}
          >
            Download PDF
          </button>
        </div>
      </div>

      <ConsultationFormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onSuccess={handleFormSuccess} />
    </div>
  );
};

const NuggetsClient: React.FC = () => {
  const rows: NuggetItem[][] = [];
  for (let i = 0; i < nuggetsData.items.length; i += 3) {
    rows.push(nuggetsData.items.slice(i, i + 3));
  }

  return (
    <>
      <div className="text-center lg:my-[9vh] my-[10vw]">
        <h1 className="text-[11vw] md:text-[4vw] font-bold text-blue">{nuggetsData.title}</h1>
      </div>

      <div className="block md:hidden space-y-[4vh]">
        {nuggetsData.items.map((item: NuggetItem) => (
          <div key={item.id} className="w-full">
            <NuggetCard item={item} />
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 gap-[4vh]">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-[2vw] justify-start">
              {row.map((item: NuggetItem) => (
                <div key={item.id} className="w-[30vw]">
                  <NuggetCard item={item} />
                </div>
              ))}
              {row.length < 3 && [...Array(3 - row.length)].map((_, index) => (
                <div key={`empty-${index}`} className="w-[30vw]" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NuggetsClient;
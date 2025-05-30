"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import CircularGallery from "@/components/home/CircularGallery";

const SocialMediaSection = () => {
  // Define gallery items using images from both gallery and flow directories
  const galleryItems = [
    {
      image: "/gallery/1.webp",
      text: "Gallery 1",
    },

    {
      image: "/gallery/2.webp",
      text: "Gallery 2",
    },
    {
      image: "/gallery/3.webp",
      text: "Gallery 3",
    },
    {
      image: "/flow/1.png",
      text: "Flow 1",
    },

    {
      image: "/flow/4.png",
      text: "Flow 4",
    },
    {
      image: "/flow/5.png",
      text: "Flow 5",
    },
    {
      image: "/flow/2.png",
      text: "Flow 2",
    },
  ];

  return (
    <div style={{ height: "600px", position: "relative" }} >
       <CircularGallery 
         items={galleryItems} 
         bend={3} 
         textColor="#ffffff" 
         borderRadius={0.05} 
       />
    </div>
  );
};

export default SocialMediaSection;

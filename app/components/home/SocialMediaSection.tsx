"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import CircularGallery from "@/components/home/CircularGallery";

const SocialMediaSection = () => {
  return (
    <div style={{ height: "600px", position: "relative" }} >
       <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
    </div>
  );
};

export default SocialMediaSection;

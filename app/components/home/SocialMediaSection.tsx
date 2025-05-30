"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import YoutubeFacade from "@/app/components/social/YoutubeFacade";
import CircularGallery from "@/components/home/CircularGallery";

const SocialMediaSection = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
       <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
    </div>
  );
};

export default SocialMediaSection;

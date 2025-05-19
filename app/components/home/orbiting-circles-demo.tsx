"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import {
    FaWhatsapp,
    FaSpotify,
    FaApple,
    FaTwitter,
    FaInstagram,
    FaMicrosoft
} from "react-icons/fa";
import {
    SiNotion,
    SiOpenai,
    SiGoogledrive,
    SiSlack
} from "react-icons/si";

export function OrbitingCirclesDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                <FaWhatsapp />
                <SiNotion />
                <SiOpenai />
                <SiGoogledrive />
                <FaSpotify />
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                <FaTwitter />
                <FaInstagram />
                <FaApple />
                <FaMicrosoft />
                <SiSlack />
            </OrbitingCircles>
        </div>
    );
} 
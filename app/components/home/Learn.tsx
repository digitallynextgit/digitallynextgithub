"use client";

import Bounce from "@/components/reactbits/bounce";
import { useEffect, useState } from "react";
// import Image from "next/image";

export default function Learn() {
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallMobile, setIsSmallMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsSmallMobile(window.innerWidth < 480);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const images = [
        "https://picsum.photos/400/400?grayscale",
        "https://picsum.photos/500/500?grayscale",
        "https://picsum.photos/600/600?grayscale",
        "https://picsum.photos/700/700?grayscale",
        "https://picsum.photos/300/300?grayscale"
    ];

    const desktopTransformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)"
    ];

    const mobileTransformStyles = [
        "rotate(5deg) translate(-50px)",
        "rotate(0deg) translate(-25px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(25px)",
        "rotate(-5deg) translate(50px)"
    ];

    const smallMobileTransformStyles = [
        "rotate(5deg) translate(-30px)",
        "rotate(0deg) translate(-15px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(15px)",
        "rotate(-5deg) translate(30px)"
    ];

    const getContainerWidth = () => {
        if (isSmallMobile) return 240;
        if (isMobile) return 280;
        return 500;
    };

    const getContainerHeight = () => {
        if (isSmallMobile) return 160;
        if (isMobile) return 180;
        return 250;
    };

    const getTransformStyles = () => {
        if (isSmallMobile) return smallMobileTransformStyles;
        if (isMobile) return mobileTransformStyles;
        return desktopTransformStyles;
    };

    return (
        <section className="bg-[#f8f3ee] py-16 px-6 md:px-20 overflow-hidden">
            {/* section 1  */}
            <div className="max-w-7xl mx-auto flex  justify-between md:gap-24 items-center">
                {/* Left Text Section */}
                <div className="space-y-6 order-2 md:order-1">
                    <p className="uppercase tracking-wider text-sm font-semibold text-[#5d7a64]">Watch and Learn</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">
                        Get inspired with our <br />
                        award-winning show, <br />
                        Podcast.
                    </h2>
                    <p className="text-lg text-gray-700 md:w-[80%] w-full">
                        With hundreds of episodes, Podcast will motivate you with wit and wisdom to build your dreams.
                        Search our library to find the perfect one for you.
                    </p>
                    <button className="mt-4 bg-[#5d7a64] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition">
                        Watch Now
                    </button>
                </div>

                {/* Right Globe Section */}
                <div className="flex justify-center items-center order-1 md:order-2">
                    <Bounce
                        className="custom-bounceCards hidden md:block"
                        images={images}
                        containerWidth={getContainerWidth()}
                        containerHeight={getContainerHeight()}
                        animationDelay={1}
                        animationStagger={0.08}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={getTransformStyles()}
                        enableHover={true}
                    />
                </div>
            </div>
        </section>
    );
}

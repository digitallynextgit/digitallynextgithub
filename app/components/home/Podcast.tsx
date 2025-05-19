"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { FaInstagram, FaMedium, FaYoutube, FaLinkedin,FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from "react-icons/fa";

const iconClass = 'text-black dark:text-white';

export default function Learn() {

    return (
        <section className="md:border-[20px] border-0 border-white bg-[#f8f3ee] pb-4">
            {/* section  */}
            <div className="max-w-7xl bg-[#f8f3ee] lg:px-6 py-2 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-0 items-center">
                <div className="relative overflow-hidden h-[500px] w-full">
                    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                        <OrbitingCircles iconSize={60}>
                            <FaInstagram size={40} className={iconClass} />
                            <FaLinkedin size={40} className={iconClass} />
                            <FaMedium size={40} className={iconClass} />
                        </OrbitingCircles>
                        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                            <FaXTwitter size={40} className={iconClass} />
                            <FaFacebookSquare size={40} className={iconClass} />
                            <FaYoutube size={40} className={iconClass} />
                        </OrbitingCircles>
                    </div>
                </div>

                {/* Left Globe Section */}
                <div className="flex justify-center items-center order-1 md:order-2">
                    {/* <Card /> */}
                </div>

                {/* Right Text Section */}
                <div className="md:space-y-6 order-2 md:order-1 px-4">
                    <p className="uppercase tracking-wider text-sm font-semibold text-[#5d7a64]">Watch and Learn</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">
                        Get inspired with our <br />
                        award-winning show, <br />
                        Podcast.
                    </h2>
                    <p className="text-lg text-gray-700">
                        With hundreds of episodes, Podcast will motivate you with wit and wisdom to build your dreams.
                        Search our library to find the perfect one for you.
                    </p>
                    <button className="mt-4 bg-[#5d7a64] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition">
                        Watch Now
                    </button>
                </div>
            </div>

        </section>
    );
}

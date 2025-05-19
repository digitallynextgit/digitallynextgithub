import React from "react";
import Image from "next/image";

const Community: React.FC = () => {
  return (
    <div className="flex h-[80%] bg-black text-white justify-center gap-64 md:flex-row flex-col items-center py-16 px-10 overflow-hidden">
      {/* Left Section */}
      <div className="flex items-center justify-between gap-10 flex-col ">
        <h1 className="md:text-6xl text-4xl font-bold leading-tight ml-10">
          START YOUR <br />
          CONVERSATION <br />
          JOURNEY!
        </h1>
        <div className="flex space-x-4">
          <button className="bg-white text-black md:px-8 md:py-3 px-4 py-2 font-semibold border border-black hover:bg-gray-200">
            GET STARTED
          </button>
          <button className="bg-black text-white md:px-8 md:py-3 px-4 py-2 font-semibold border border-white hover:bg-gray-800">
            STARTED FROM
          </button>
        </div>
        {/* Placeholder for microphone image */}
        <div className="">
          <Image src="/podcast/mic1.webp" alt="Mic" width={300} height={100} className="md:mb-[-200px] mb-[-150px]"/>
        </div>

        
      </div>
      {/* Right Section - Image Placeholder */}
      <div className=" overflow-hidden md:block hidden">
          <Image src="/podcast/pd1.webp" alt="Mic" width={380} height={100} className="rounded-full"/>
        </div>
    </div>
  );
};

export default Community;

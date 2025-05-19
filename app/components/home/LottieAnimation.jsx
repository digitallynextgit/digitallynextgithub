'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = ({ src, className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <DotLottieReact
        src={src || "https://lottie.host/6659a81d-1046-466c-bd4d-889bc5fd8c4b/QgjOCUlNx6.lottie"}
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation; 
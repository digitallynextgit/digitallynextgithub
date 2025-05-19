import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const ImageCarousel = ({ images, className = '', imageHeight = 400, effect = 'fade', showNavigation = false }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      effect={effect}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={showNavigation}
      loop={true}
      className={`w-full rounded-md overflow-hidden ${className}`}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full" style={{ height: `${imageHeight}px` }}>
            <Image
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel; 
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

interface ImageType {
  src: {
    desktop: string;
    mobile: string;
  };
  alt?: string;
}

interface AutoplayType {
  delay: number;
  disableOnInteraction: boolean;
}

interface ImageCarouselProps {
  images: ImageType[];
  className?: string;
  imageHeight?: number;
  showNavigation?: boolean;
  imageClassName?: string;
  autoplay?: AutoplayType;
}

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  className = '', 
  imageHeight = 400, 
  showNavigation = false, 
  imageClassName = 'object-cover',
  autoplay = {
    delay: 3000,
    disableOnInteraction: false,
  }
}) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={autoplay || {
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className={`w-full rounded-md overflow-hidden ${className} relative group`}
      navigation={showNavigation ? {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } : false}
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-size': '25px',
      } as React.CSSProperties}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full" style={{ height: `${imageHeight}px` }}>
            <Image
              src={image.src.desktop}
              alt={image.alt || `Slide ${index + 1}`}
              fill
              className={`${imageClassName} hidden md:block`}
              priority={index === 0}
              sizes="50vw"
            />
            <Image
              src={image.src.desktop}
              alt={image.alt || `Slide ${index + 1}`}
              fill
              className={`${imageClassName} block md:hidden`}
              priority={index === 0}
              sizes="100vw"
              quality={60}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
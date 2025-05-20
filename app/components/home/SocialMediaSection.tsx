'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import YoutubeFacade from '@/app/components/social/YoutubeFacade';

const videos = [
  {
    id: 1,
    title: 'Digital Marketing Tips',
    videoId: 'https://youtube.com/shorts/W3wgGAupLe0?si=nl3rw4VKlhjSUCG2',
  },
  {
    id: 2,
    title: 'SEO Strategies',
    videoId: 'https://youtube.com/shorts/AoLkcEhQGDo?si=jKqj-k6v6ZttWGm4',
  },
  {
    id: 3,
    title: 'Content Creation',
    videoId: 'https://youtube.com/shorts/W3wgGAupLe0?si=cVqneXkpq-3Linh4',
  },
  {
    id: 4,
    title: 'Social Media Growth',
    videoId: 'https://youtube.com/shorts/EAD9KZEOMI0?si=FI-nph3a-2TzLY6V',
  },
  {
    id: 5,
    title: 'Brand Building',
    videoId: 'https://youtube.com/shorts/AoLkcEhQGDo?si=zKOGR7B0rcdkNq6b',
  },
  {
    id: 6,
    title: 'Marketing Strategy',
    videoId: 'https://youtube.com/shorts/W3wgGAupLe0?si=TgUpoEIACa0zTnSF',
  },
  {
    id: 7,
    title: 'Lead Generation',
    videoId: 'https://youtube.com/shorts/Z3zl-XE8clI?si=bYl0GEpA6hv2ttTk',
  },
  {
    id: 8,
    title: 'Email Marketing',
    videoId: 'https://youtube.com/shorts/YhK55IT3hcw?si=kNp7kwF9LgUch-xf',
  },
];

function getYouTubeId(url: string) {
  // Extract the video ID from the shorts URL
  const match = url.match(/shorts\/([\w-]+)/);
  return match ? match[1] : '';
}

const Arrow = ({ left, onClick, disabled }: { left?: boolean; onClick: () => void; disabled: boolean }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-[300px] z-20 -translate-y-1/2 ${left ? 'left-0' : 'right-0'}  transition disabled:opacity-40 text-red-600`}
    aria-label={left ? 'Previous' : 'Next'}
    style={{ fontSize: 80 }}
  >
    {left ? '‹' : '›'}
  </button>
);

const SocialMediaSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 4, spacing: 24 },
      },
    },
    loop: true,
  });
//   const [current, setCurrent] = React.useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-12">Desi/Global gigs @DN</h2>
      <div className="relative w-full max-w-6xl px-4">
        <div ref={sliderRef} className="keen-slider">
          {videos.map((video,) => {
            const id = getYouTubeId(video.videoId);
            return (
              <div key={video.id} className="keen-slider__slide flex flex-col items-center">
                <div className="w-[300px] h-[550px] bg-white rounded-[1.5rem] border-4 border-gray-200 shadow-xl flex items-center justify-center overflow-hidden relative mx-auto">
                  {/* Speaker/Camera Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-full z-10" />
                  {id && (
                    <YoutubeFacade videoId={id} className="w-full h-full rounded-[1.5rem]" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4 text-center">{video.title}</h3>
                <motion.a
                  href={video.videoId}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, backgroundColor: '#FF0000', color: '#fff', boxShadow: '0 8px 32px 0 rgba(255,0,0,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-3 py-3 rounded-full bg-white border-2 border-red-500 text-red-600 font-semibold text-lg shadow transition-colors duration-300 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-200"
                >
                  <FaYoutube className="text-xl" />
                  Watch on YouTube
                </motion.a>
              </div>
            );
          })}
        </div>
        {/* Arrows */}
        <Arrow
          left
          onClick={() => instanceRef.current?.prev()}
          disabled={false}
          
        />
        <Arrow
          onClick={() => instanceRef.current?.next()}
          disabled={false}
        />
      </div>
    </section>
  );
};

export default SocialMediaSection; 
'use client';

import ManualYouTubeShorts from './ManualYouTubeShorts';

// Define shorts from the provided YouTube links
const ALL_SHORTS = [
  {
    videoId: "R-ZsQwf0trg",
    title: "The office doesn't feel the same without your favorite colleague!",
  },
  {
    videoId: "DADADP3l0xA",
    title: "The office doesn't feel the same without your favorite colleague!",
  },
  {
    videoId: "W6WQffr_XsE",
    title: "The office doesn't feel the same without your favorite colleague!",
  },
  {
    videoId: "Yg3NTztIYVw",
    title: "The office doesn't feel the same without your favorite colleague!",
  },
  {
    videoId: "CjcwocqDmo0",
    title: "The office doesn't feel the same without your favorite colleague!",
  },
  {
    videoId: "u3hVvkRakUY",
    title: "The office doesn't feel the same without your favorite colleague!",
  },
  {
    videoId: "Az53f4Cy_wU",
    title: "The office doesn't feel the same without your favorite colleague!",
  },
  {
    videoId: "pQdQBJubVmQ",
    title: "Short 1"
  },
  {
    videoId: "t8jV9a4pRAw",
    title: "Short 2"
  },
  {
    videoId: "Z5AJT3bHoh8", 
    title: "Short 3"
  },
  {
    videoId: "Pm7xWfCjoKU",
    title: "Short 4"
  },
  {
    videoId: "lnr4Dc2jVuo",
    title: "Short 5"
  },
  {
    videoId: "kuUsS3-DipY",
    title: "Short 6"
  },
  {
    videoId: "-a5LDtJH5QM",
    title: "Short 7"
  },
  {
    videoId: "vJMkrt3i0do",
    title: "Short 8"
  },
  {
    videoId: "dePGxFJwJ-s",
    title: "Short 9"
  },
  {
    videoId: "PYmYohXZ_dE",
    title: "Short 10"
  },
  {
    videoId: "0PlZUWP1oG0",
    title: "Short 11"
  },
  {
    videoId: "hzoE5Vv2Ff4",
    title: "Short 12"
  },

];

export default function ManualYoutubeShortsWrapper() {
  return <ManualYouTubeShorts shorts={ALL_SHORTS} />;
} 
'use client';

import ManualYouTubeShorts from './ManualYouTubeShorts';

// Define shorts from the provided YouTube links
const ALL_SHORTS = [
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
  }
];

export default function ManualYoutubeShortsWrapper() {
  return <ManualYouTubeShorts shorts={ALL_SHORTS} />;
} 
import { fetchYouTubeShorts } from '@/app/utils/fetchShorts';
import YouTubeShorts from './YouTubeShorts';
import type { Short } from '@/app/utils/fetchShorts';

export default async function YouTubeShortsWrapper() {
  // Try to fetch shorts server-side with proper error handling
  let shorts: Short[] = [];
  
  try {
    console.log('Fetching YouTube shorts for homepage...');
    shorts = await fetchYouTubeShorts();
    console.log(`Fetched ${shorts.length} YouTube shorts successfully`);
  } catch (error) {
    console.error("Error fetching YouTube shorts server-side:", error);
  }

  return <YouTubeShorts initialShorts={shorts} />;
} 
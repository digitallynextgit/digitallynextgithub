import { NextResponse } from 'next/server';
import type { Short } from '@/app/utils/fetchShorts';

// Define interfaces for YouTube API response
interface YouTubeVideoID {
  kind: string;
  videoId: string;
}

interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

interface YouTubeThumbnails {
  default?: YouTubeThumbnail;
  medium?: YouTubeThumbnail;
  high?: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
}

interface YouTubeSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface YouTubeSearchItem {
  kind: string;
  etag: string;
  id: YouTubeVideoID;
  snippet: YouTubeSnippet;
}

interface YouTubeErrorResponse {
  error: {
    code: number;
    message: string;
    errors: {
      message: string;
      domain: string;
      reason: string;
    }[];
  };
}

// Get YouTube API key from environment variables
const YOUTUBE_API_KEY = process.env.YT_API_KEY || process.env.YOUTUBE_API_KEY;

// Get channel ID from environment variables
const rawChannelId = process.env.YT_CHANNEL_ID || process.env.YOUTUBE_CHANNEL_ID || '@digitallynext';

// If the channel ID is a URL or handle, extract just the channel ID or handle
function getProperChannelId(input: string): string {
  // If it's already a channel ID (starts with UC)
  if (input.startsWith('UC')) {
    return input;
  }
  
  // If it's a URL with channel in it
  if (input.includes('youtube.com/channel/')) {
    const match = input.match(/youtube\.com\/channel\/([^\/\?]+)/);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // If it's a handle or custom URL (starts with @)
  if (input.startsWith('@') || input.includes('/@')) {
    // For @handle format, we'll search by channel name
    // Extract just the handle part without the @
    const handleMatch = input.match(/@([^\/\?]+)/);
    if (handleMatch && handleMatch[1]) {
      return '@' + handleMatch[1];
    }
  }
  
  // Default fallback
  return '@digitallynext'; // Default to @digitallynext handle
}

const CHANNEL_ID = getProperChannelId(rawChannelId);

// Known working short - use as fallback and for format reference
const KNOWN_WORKING_SHORTS: Short[] = [
  {
    videoId: "W5REyClI5pI",
    title: "The office doesn't feel the same without your favorite colleague! TAG THEM! 👇 @digitallynext",
    thumbnail: "https://i.ytimg.com/vi/W5REyClI5pI/hqdefault.jpg",
    publishedAt: new Date().toISOString(),
    description: "Every office has that one person who makes work fun and bearable."
  },
  {
    videoId: "J9aXLu7sY7U",
    title: "Fallback Short 1",
    thumbnail: "https://i.ytimg.com/vi/J9aXLu7sY7U/hqdefault.jpg",
    publishedAt: new Date().toISOString(),
    description: "This is a fallback short when the YouTube API is unavailable."
  }
];

export async function GET() {
  console.log('YouTube Shorts API route called');
  
  try {
    // Check if we have API credentials
    if (!YOUTUBE_API_KEY) {
      console.error('YouTube API key not configured in environment variables');
      return NextResponse.json(KNOWN_WORKING_SHORTS);
    }

    console.log(`Fetching shorts from channel: ${CHANNEL_ID}`);
    
    let apiUrl = '';
    const isChannelId = CHANNEL_ID.startsWith('UC');
    const isHandle = CHANNEL_ID.startsWith('@');
    
    // YouTube has deprecated the videoDuration=short parameter, so we'll use a different approach
    // We'll search for videos and then filter by duration on the client side
    
    if (isChannelId) {
      // Use channel ID search
      apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=12&order=date&type=video&key=${YOUTUBE_API_KEY}`;
    } else if (isHandle) {
      // For @handles, we'll search using the handle as a query term along with "shorts"
      // This is more reliable for getting actual shorts content
      apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(CHANNEL_ID + " shorts")}&maxResults=12&order=viewCount&type=video&key=${YOUTUBE_API_KEY}`;
    } else {
      // Fallback to a general search
      apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent("digitally next shorts")}&maxResults=12&order=date&type=video&key=${YOUTUBE_API_KEY}`;
    }
    
    console.log(`YouTube API URL: ${apiUrl.replace(YOUTUBE_API_KEY, 'API_KEY_HIDDEN')}`);
    
    // Fetch the latest shorts from YouTube API
    const response = await fetch(apiUrl);
    const responseText = await response.text();
    
    // Try to parse the response
    let data: { items: YouTubeSearchItem[] } | YouTubeErrorResponse;
    try {
      data = JSON.parse(responseText);
    } catch {
      console.error('Failed to parse YouTube API response:', responseText.substring(0, 200));
      return NextResponse.json(KNOWN_WORKING_SHORTS);
    }
    
    // Check for YouTube API errors
    if ('error' in data) {
      console.error('YouTube API error:', data.error);
      
      // In production, just return the known working shorts
      return NextResponse.json(KNOWN_WORKING_SHORTS);
    }
    
    if (!data.items || data.items.length === 0) {
      console.log('No items returned from YouTube API');
      return NextResponse.json(KNOWN_WORKING_SHORTS);
    }
    
    // Add the known working short to the results to ensure we have at least one working example
    const knownWorkingShort = KNOWN_WORKING_SHORTS[0];
    
    // Transform YouTube API response to our Short format
    let shorts: Short[] = data.items
      .filter(item => item.id && item.id.videoId && item.snippet) // Filter out any invalid items
      .map((item: YouTubeSearchItem) => {
        // Get the best available thumbnail or use a placeholder
        const thumbnailUrl = item.snippet.thumbnails.high?.url || 
                          item.snippet.thumbnails.medium?.url || 
                          item.snippet.thumbnails.default?.url || 
                          `https://i.ytimg.com/vi/${item.id.videoId}/hqdefault.jpg`;
      
        return {
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: thumbnailUrl,
          publishedAt: item.snippet.publishedAt,
          description: item.snippet.description || "Check out this YouTube Short!"
        };
      });

    // Add the known working short to the beginning of the array
    if (!shorts.some(short => short.videoId === knownWorkingShort.videoId)) {
      shorts = [knownWorkingShort, ...shorts];
    }
    
    console.log(`Fetched ${shorts.length} YouTube shorts successfully`);
    return NextResponse.json(shorts);
  } catch (error) {
    console.error('Error in YouTube shorts API:', error);
    
    // Always return at least the known working shorts
    return NextResponse.json(KNOWN_WORKING_SHORTS);
  }
} 
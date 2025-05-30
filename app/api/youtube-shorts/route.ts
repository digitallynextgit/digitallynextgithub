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
  return 'UCnb7CwF65VXrDGbsw2hv5HA'; // Default channel ID
}

const CHANNEL_ID = getProperChannelId(rawChannelId);

// Add fallback shorts for cases where the API doesn't work
const FALLBACK_SHORTS: Short[] = [
  {
    videoId: "J9aXLu7sY7U",
    title: "Fallback Short 1",
    thumbnail: "https://i.ytimg.com/vi/J9aXLu7sY7U/hqdefault.jpg",
    publishedAt: new Date().toISOString(),
    description: "This is a fallback short when the YouTube API is unavailable."
  },
  {
    videoId: "1PbLg9H0WCw",
    title: "Fallback Short 2",
    thumbnail: "https://i.ytimg.com/vi/1PbLg9H0WCw/hqdefault.jpg",
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
      return NextResponse.json({ 
        error: 'YouTube API key not configured. Please set YT_API_KEY in your environment variables.' 
      }, { status: 500 });
    }

    console.log(`Fetching shorts from channel: ${CHANNEL_ID}`);
    
    let apiUrl = '';
    const isChannelId = CHANNEL_ID.startsWith('UC');
    
    if (isChannelId) {
      // Use channel ID search
      apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=8&order=date&type=video&videoDuration=short&key=${YOUTUBE_API_KEY}`;
    } else {
      // For @handles, we need to first search for the channel
      // This is a fallback approach and not ideal
      apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(CHANNEL_ID)}&maxResults=8&order=date&type=video&videoDuration=short&key=${YOUTUBE_API_KEY}`;
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
      return NextResponse.json({ 
        error: `Invalid response from YouTube API: ${responseText.substring(0, 100)}...`
      }, { status: 500 });
    }
    
    // Check for YouTube API errors
    if ('error' in data) {
      console.error('YouTube API error:', data.error);
      
      if (data.error.code === 403) {
        return NextResponse.json({ 
          error: `YouTube API quota exceeded or invalid API key: ${data.error.message}`
        }, { status: 403 });
      }
      
      return NextResponse.json({ 
        error: `YouTube API error (${data.error.code}): ${data.error.message}`
      }, { status: 500 });
    }
    
    if (!data.items || data.items.length === 0) {
      console.log('No items returned from YouTube API');
      
      // Return fallback shorts in production, error in development
      if (process.env.NODE_ENV === 'production') {
        console.log('Using fallback shorts for production');
        return NextResponse.json(FALLBACK_SHORTS);
      } else {
        return NextResponse.json({ 
          error: 'No YouTube shorts found for this channel. Check your channel ID or handle.'
        }, { status: 404 });
      }
    }
    
    // Transform YouTube API response to our Short format
    const shorts: Short[] = data.items
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
          description: item.snippet.description
        };
      });

    console.log(`Fetched ${shorts.length} YouTube shorts successfully`);
    return NextResponse.json(shorts);
  } catch (error) {
    console.error('Error in YouTube shorts API:', error);
    
    // Return fallback shorts in production
    if (process.env.NODE_ENV === 'production') {
      console.log('Using fallback shorts for production due to error');
      return NextResponse.json(FALLBACK_SHORTS);
    }
    
    return NextResponse.json({ 
      error: `Failed to fetch YouTube shorts: ${error instanceof Error ? error.message : String(error)}`
    }, { status: 500 });
  }
} 
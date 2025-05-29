import { NextResponse } from 'next/server';
import type { Short } from '@/app/utils/fetchShorts';

// Get YouTube API key from environment variables
const YOUTUBE_API_KEY = process.env.YT_API_KEY || process.env.YOUTUBE_API_KEY;

// Get channel ID from environment variables
let rawChannelId = process.env.YT_CHANNEL_ID || process.env.YOUTUBE_CHANNEL_ID || 'UCnb7CwF65VXrDGbsw2hv5HA';

// If the channel ID is a URL or handle, extract just the channel ID or handle
function getProperChannelId(input: string): string {
  // If it's already a channel ID (starts with UC)
  if (input.startsWith('UC')) {
    return input;
  }
  
  // If it's a URL with @handle format
  if (input.includes('@')) {
    // For demo purposes, we'll use a fixed channel ID since we can't directly convert handles to channel IDs
    console.log('Found channel handle in URL, using default channel ID');
    return 'UCnb7CwF65VXrDGbsw2hv5HA';
  }
  
  // Default fallback
  return input;
}

const CHANNEL_ID = getProperChannelId(rawChannelId);

export async function GET() {
  try {
    // Check if we have API credentials
    if (!YOUTUBE_API_KEY) {
      throw new Error('YouTube API key not configured in environment variables (YT_API_KEY)');
    }

    console.log(`Fetching shorts from channel ID: ${CHANNEL_ID}`);
    
    // Fetch the latest shorts from YouTube API
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=4&order=date&type=video&videoDuration=short&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`YouTube API responded with ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`YouTube API response received: ${data.items?.length || 0} items`);
    
    if (!data.items || data.items.length === 0) {
      console.log('No items returned from YouTube API');
      throw new Error('No YouTube shorts found for this channel');
    }
    
    // Transform YouTube API response to our Short format
    const shorts: Short[] = data.items.map((item: any) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description
    }));

    console.log(`Fetched ${shorts.length} YouTube shorts successfully`);
    return NextResponse.json(shorts);
  } catch (error) {
    console.error('Error in YouTube shorts API:', error);
    return NextResponse.json({ error: 'Failed to fetch YouTube shorts' }, { status: 500 });
  }
} 
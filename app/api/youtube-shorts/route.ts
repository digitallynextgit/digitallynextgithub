import { NextResponse } from 'next/server';
import type { Short } from '@/app/utils/fetchShorts';
import { NextRequest } from 'next/server';

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

// Known working short - guaranteed to work in all environments
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
    title: "Fallback Short Example",
    thumbnail: "https://i.ytimg.com/vi/J9aXLu7sY7U/hqdefault.jpg",
    publishedAt: new Date().toISOString(),
    description: "This is a fallback short when the YouTube API is unavailable."
  }
];

// Cache to store fetched shorts
let cachedShorts: Short[] = [];
let lastFetchTime = 0;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes cache - longer TTL for production stability

export async function GET(request: NextRequest) {
  console.log('YouTube Shorts API route called');
  
  // Parse query parameters for pagination
  const searchParams = request.nextUrl.searchParams;
  const offsetParam = searchParams.get('offset') || '0';
  const limitParam = searchParams.get('limit') || '4';
  
  const offset = parseInt(offsetParam, 10);
  const limit = Math.min(parseInt(limitParam, 10), 8); // Limit to max 8 items per request
  
  console.log(`Requested shorts with offset: ${offset}, limit: ${limit}`);
  
  try {
    // Always include known working shorts at the beginning for the first request
    if (offset === 0) {
      // Initialize with known working shorts for immediate response
      const initialResponse = [...KNOWN_WORKING_SHORTS];
      
      // Use cached shorts if available and not expired
      const now = Date.now();
      if (cachedShorts.length > 0 && now - lastFetchTime < CACHE_TTL) {
        console.log(`Using cached shorts (${cachedShorts.length} items in cache)`);
        
        // Filter out duplicates by videoId
        const cachedWithoutDuplicates = cachedShorts.filter(
          cached => !KNOWN_WORKING_SHORTS.some(
            known => known.videoId === cached.videoId
          )
        );
        
        // Return combined shorts list with pagination
        const combinedShorts = [...initialResponse, ...cachedWithoutDuplicates];
        return NextResponse.json(combinedShorts.slice(0, limit));
      }
      
      // For production, if we don't have a cache yet, immediately return known working shorts
      // while the fetch happens in the background for subsequent requests
      if (process.env.NODE_ENV === 'production') {
        // Start background fetch for future requests
        fetchYouTubeShorts().catch(error => 
          console.error('Background fetch failed:', error)
        );
        
        return NextResponse.json(initialResponse);
      }
    } else if (cachedShorts.length > offset) {
      // For subsequent pages, use cache if available
      console.log(`Serving cached shorts for offset ${offset}`);
      return NextResponse.json(cachedShorts.slice(offset, offset + limit));
    }
    
    // If we get here, we need to fetch from YouTube API
    const shorts = await fetchYouTubeShorts();
    
    // Return the requested pagination slice
    const paginatedShorts = shorts.slice(offset, offset + limit);
    return NextResponse.json(paginatedShorts);
  } catch (error) {
    console.error('Error in YouTube shorts API handler:', error);
    
    // Always return at least the known working shorts for the first page, empty for subsequent pages
    return NextResponse.json(offset === 0 ? KNOWN_WORKING_SHORTS.slice(0, limit) : []);
  }
}

// Separate function to fetch shorts from YouTube API
async function fetchYouTubeShorts(): Promise<Short[]> {
  try {
    // Check if we have API credentials
    if (!YOUTUBE_API_KEY) {
      console.error('YouTube API key not configured in environment variables');
      return KNOWN_WORKING_SHORTS;
    }

    console.log(`Fetching shorts from channel: ${CHANNEL_ID}`);
    
    let apiUrl = '';
    const isChannelId = CHANNEL_ID.startsWith('UC');
    const isHandle = CHANNEL_ID.startsWith('@');
    
    // YouTube has deprecated the videoDuration=short parameter, so we'll use a different approach
    // Request more items than needed to have enough for pagination
    const maxResults = 20; // Request maximum allowed to fill our cache
    
    if (isChannelId) {
      // Use channel ID search
      apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${maxResults}&order=date&type=video&key=${YOUTUBE_API_KEY}`;
    } else if (isHandle) {
      // For @handles, we'll search using the handle as a query term along with "shorts"
      // This is more reliable for getting actual shorts content
      apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(CHANNEL_ID + " shorts")}&maxResults=${maxResults}&order=viewCount&type=video&key=${YOUTUBE_API_KEY}`;
    } else {
      // Fallback to a general search
      apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent("digitally next shorts")}&maxResults=${maxResults}&order=date&type=video&key=${YOUTUBE_API_KEY}`;
    }
    
    console.log(`YouTube API URL: ${apiUrl.replace(YOUTUBE_API_KEY, 'API_KEY_HIDDEN')}`);
    
    // Add timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    // Fetch the latest shorts from YouTube API
    const response = await fetch(apiUrl, { 
      signal: controller.signal,
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`YouTube API responded with ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json() as { items: YouTubeSearchItem[] } | YouTubeErrorResponse;
    
    // Check for YouTube API errors
    if ('error' in data) {
      console.error('YouTube API error:', data.error);
      return KNOWN_WORKING_SHORTS;
    }
    
    if (!data.items || data.items.length === 0) {
      console.log('No items returned from YouTube API');
      return KNOWN_WORKING_SHORTS;
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
          title: item.snippet.title || "YouTube Short",
          thumbnail: thumbnailUrl,
          publishedAt: item.snippet.publishedAt || new Date().toISOString(),
          description: item.snippet.description || "Check out this YouTube Short!"
        };
      });

    // Add the known working short to the beginning if it's not already there
    if (!shorts.some(short => short.videoId === knownWorkingShort.videoId)) {
      shorts = [knownWorkingShort, ...shorts];
    }
    
    // Update the cached shorts and timestamp
    cachedShorts = shorts;
    lastFetchTime = Date.now();
    
    console.log(`Fetched ${shorts.length} YouTube shorts successfully`);
    return shorts;
  } catch (error) {
    console.error('Error fetching YouTube shorts:', error);
    
    // If we have cached shorts, use them as fallback
    if (cachedShorts.length > 0) {
      console.log('Using cached shorts as fallback due to error');
      return cachedShorts;
    }
    
    // Otherwise return known working shorts
    return KNOWN_WORKING_SHORTS;
  }
} 
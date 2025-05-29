export interface Short {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
}

export async function fetchYouTubeShorts(): Promise<Short[]> {
  try {
    // Get the current origin (protocol + hostname + port)
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    
    // Build the absolute URL
    const apiUrl = `${origin}/api/youtube-shorts`;
    
    // Fetch shorts from our API endpoint
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch shorts: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchYouTubeShorts:', error);
    return [];
  }
} 
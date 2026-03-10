export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    try {
      // Serve static assets from the dist directory
      const assetResponse = await fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    } catch {
      // Continue to fallback if fetch fails
    }
    
    // Fallback to index.html for SPA routing
    return fetch(new URL("/index.html", url.origin));
  },
};

import { fetchGamesData } from '../../../services/gameService';

export async function GET() {
  try {
    // Fetch game data
    const games = await fetchGamesData();

    // Generate XML for game pages
    const gamePages = games.map((game) => `
      <url>
        <loc>https://lokisurf.com/game/${encodeURIComponent(game.guid)}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `);

    // Build the sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://lokisurf.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${gamePages.join('')}
    </urlset>`;

    // Return the sitemap as a response
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating games sitemap:', error);

    // Return an error response if something goes wrong
    return new Response('Error generating sitemap', { status: 500 });
  }
}

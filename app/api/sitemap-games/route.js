// src/pages/api/sitemap-games.js

import { fetchGamesData } from '../../../services/gameService';

export async function GET() {
  try {
    const games = await fetchGamesData();
    const gamePages = games.map(game => `/game/${game.guid}`);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://lokisurf.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${gamePages
        .map(page => `
          <url>
            <loc>https://lokisurf.com${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>`)
        .join('')}
    </urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating games sitemap', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}

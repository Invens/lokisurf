// src/pages/api/sitemap-categories.js

import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.lokisurf.com/api/categories');
    const categories = response.data;
    const categoryPages = categories.map(category => `/category/${encodeURIComponent(category)}`);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://lokisurf.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${categoryPages
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
    console.error('Error generating categories sitemap', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}

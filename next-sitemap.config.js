module.exports = {
  siteUrl: 'https://www.lokisurf.com/', // Base URL of your site
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 50000, // Limit URLs per sitemap
  changefreq: 'daily', // Default change frequency
  priority: 0.7, // Default priority for pages
  exclude: ['/admin/**', '/private/**'], // Exclude specific paths
  transform: async (config, url) => {
    // Ensure valid XML escaping and data formatting
    return {
      loc: url.replace(/&/g, '&amp;'), // Escape & characters in URLs
      lastmod: new Date().toISOString(), // Add last modified date
      changefreq: 'daily',
      priority: 0.7,
    };
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.lokisurf.com/api/sitemap-games', // Dynamic sitemap API route
    ],
  },
};

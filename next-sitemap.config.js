module.exports = {
  siteUrl: 'https://www.lokisurf.com',
  generateRobotsTxt: true,
  sitemapSize: 50000, // Reduce sitemap size if errors persist
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/**', '/private/**'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.lokisurf.com/my-custom-sitemap.xml',
    ],
  },
  transform: async (config, url) => {
    return {
      loc: url.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'), // Escape special characters
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    };
  },
};

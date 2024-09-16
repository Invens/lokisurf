// next-sitemap.config.js

module.exports = {
    siteUrl: 'https://www.lokisurf.com', // Replace with your site's URL
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    sitemapSize: 7000, // (optional) Limit the number of URLs per sitemap file
    changefreq: 'daily', // (optional) Change frequency
    priority: 0.7, // (optional) Default priority for pages
    exclude: ['/admin/**', '/private/**'], // (optional) Exclude specific paths
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.lokisurf.com/my-custom-sitemap.xml',
      ],
    },
  }
  
// next-sitemap.js

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://frontiers.dev',
    generateRobotsTxt: true, 

  };
  
  module.exports = config;
  
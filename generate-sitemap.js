import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/login', changefreq: 'monthly', priority: 0.8 },
  { url: '/signup', changefreq: 'monthly', priority: 0.8 },

  // Add more routes as necessary
];

const stream = new SitemapStream({ hostname: 'https://anonmyus-instaviewers.vercel.app/' });

Readable.from(links).pipe(stream);

streamToPromise(stream)
  .then((data) => fs.writeFileSync('public/sitemap.xml', data.toString()))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

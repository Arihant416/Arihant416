import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const SITE = 'https://arihant416.vercel.app';

// Client-side routes that need their own crawlable <head> (link previews, search).
// Each gets a copy of the built index.html with page-specific metadata.
const STATIC_ROUTES = [
  {
    path: 'beyond-work',
    title: 'Beyond Work | Arihant Jain',
    description: 'The stories, anime, music, and everyday life Arihant Jain returns to away from backend engineering.',
    image: `${SITE}/og-beyond-work.png`,
    imageAlt: 'Beyond Work: stories Arihant Jain keeps coming back to',
  },
];

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

const setMeta = (html, attr, key, value) => {
  const pattern = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`static-routes: <meta ${attr}="${key}"> not found in index.html`);
  return html.replace(pattern, `$1${escapeAttr(value)}$2`);
};

function staticRoutes() {
  let outDir;
  return {
    name: 'static-routes',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const base = await readFile(resolve(outDir, 'index.html'), 'utf8');
      await Promise.all(STATIC_ROUTES.map(async (route) => {
        const url = `${SITE}/${route.path}`;
        let html = base.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
        html = setMeta(html, 'name', 'description', route.description);
        html = setMeta(html, 'property', 'og:title', route.title);
        html = setMeta(html, 'property', 'og:description', route.description);
        html = setMeta(html, 'property', 'og:url', url);
        html = setMeta(html, 'property', 'og:image', route.image);
        html = setMeta(html, 'property', 'og:image:alt', route.imageAlt);
        html = setMeta(html, 'name', 'twitter:title', route.title);
        html = setMeta(html, 'name', 'twitter:description', route.description);
        html = setMeta(html, 'name', 'twitter:url', url);
        html = setMeta(html, 'name', 'twitter:image', route.image);
        html = setMeta(html, 'name', 'twitter:image:alt', route.imageAlt);
        html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`);
        const dir = resolve(outDir, route.path);
        await mkdir(dir, { recursive: true });
        await writeFile(resolve(dir, 'index.html'), html);
      }));
    },
  };
}

export default defineConfig({
  plugins: [react(), staticRoutes()],
});

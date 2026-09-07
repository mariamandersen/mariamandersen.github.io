import { build } from 'vite';
import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const root = new URL('../', import.meta.url);
await build();
const html = await readFile(new URL('.build/index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('style.css', root));
const version = createHash('sha256').update(css).digest('hex').slice(0, 12);
const page = html.replace('href="/style.css"', `href="/style.css?v=${version}` + '"');
await cp(new URL('.build/assets/portfolio', import.meta.url), new URL('assets/portfolio', root), { recursive: true });
await writeFile(new URL('index.html', root), page);
await writeFile(new URL('404.html', root), page);
await writeFile(new URL('.nojekyll', root), '');
const data = await readFile(new URL('src/data/projects.ts', import.meta.url), 'utf8');
for (const [,slug] of data.matchAll(/slug: '([^']+)'/g)) {
  const dir = new URL(`prosjekt/${slug}/`, root);
  await mkdir(dir, {recursive:true});
  await writeFile(new URL('index.html', dir), page.replaceAll('https://mariamandersen.no/"', `https://mariamandersen.no/prosjekt/${slug}/"`));
}
console.log('Built homepage and direct project URLs for GitHub Pages.');

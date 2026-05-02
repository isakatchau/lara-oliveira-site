// Generate responsive AVIF + WebP from source PNGs.
// Usage: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, '../public/images');
const OUT_DIR = SRC_DIR; // emit alongside

const WIDTHS = [800, 1200, 1600];
const FORMATS = [
  { ext: 'avif', options: { quality: 50, effort: 6 } },
  { ext: 'webp', options: { quality: 78, effort: 5 } },
];

async function processFile(name) {
  const src = path.join(SRC_DIR, name);
  const baseName = path.parse(name).name; // e.g. doc-trabalhando-1
  const meta = await sharp(src).metadata();
  console.log(`\n→ ${name} (source ${meta.width}x${meta.height}, ${(await stat(src)).size / 1024 / 1024 | 0}MB)`);

  // Emit each preset width that fits within source. If none fit, emit at source width.
  let widthsToEmit = WIDTHS.filter((w) => w <= meta.width);
  if (widthsToEmit.length === 0) widthsToEmit = [meta.width];

  for (const w of widthsToEmit) {
    for (const fmt of FORMATS) {
      const out = path.join(OUT_DIR, `${baseName}-${w}.${fmt.ext}`);
      await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        [fmt.ext](fmt.options)
        .toFile(out);
      const size = (await stat(out)).size;
      console.log(`  ${path.basename(out)}  ${(size / 1024).toFixed(1)} KB`);
    }
  }

  // OG image: 1200x630 center-crop, JPEG ~80
  const ogOut = path.join(OUT_DIR, `${baseName}-og.jpg`);
  await sharp(src)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(ogOut);
  const ogSize = (await stat(ogOut)).size;
  console.log(`  ${path.basename(ogOut)}  ${(ogSize / 1024).toFixed(1)} KB (OG)`);
}

async function main() {
  if (!existsSync(SRC_DIR)) throw new Error(`Missing ${SRC_DIR}`);
  await mkdir(OUT_DIR, { recursive: true });
  const all = await readdir(SRC_DIR);
  const sources = all.filter((f) => /^(doc-trabalhando-\d+|lara)\.(png|jpe?g)$/i.test(f));
  if (!sources.length) {
    console.log('No source PNGs found (doc-trabalhando-N.png)');
    return;
  }
  for (const f of sources) await processFile(f);
  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

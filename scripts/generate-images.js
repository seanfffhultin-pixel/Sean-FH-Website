#!/usr/bin/env node
/**
 * Generate responsive image variants
 * Produces 400w, 800w, 1200w sizes in both JPEG and WebP
 * Also generates small thumbnails for LQIP
 * 
 * Usage: node scripts/generate-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'public', 'images');
const sizes = [400, 800, 1200];
const jpegQuality = 70;
const webpQuality = 70;
const thumbQuality = 40;

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const input = path.join(srcDir, file);

  try {
    // Skip if already a generated variant
    if (name.match(/-(thumb|\d{3,})$/)) {
      return { ok: true };
    }

    console.log(`Processing: ${file}`);

    // Verify file exists and is readable
    if (!fs.existsSync(input)) {
      throw new Error('File not found');
    }

    // Load image with EXIF rotation applied
    const image = sharp(input).rotate();

    // Generate resized variants
    for (const w of sizes) {
      // JPEG variant - use 'inside' to preserve aspect ratio
      const outJpeg = path.join(srcDir, `${name}-${w}.jpeg`);
      await image
        .clone()
        .resize(w, w, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: jpegQuality, progressive: true })
        .toFile(outJpeg);

      // WebP variant - use 'inside' to preserve aspect ratio
      const outWebp = path.join(srcDir, `${name}-${w}.webp`);
      await image
        .clone()
        .resize(w, w, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: webpQuality })
        .toFile(outWebp);
    }

    // Tiny thumbnail (LQIP) - use 'inside' to preserve aspect ratio
    const thumb = path.join(srcDir, `${name}-thumb.jpeg`);
    await image
      .clone()
      .resize(50, 50, { fit: 'inside' })
      .blur(1)
      .jpeg({ quality: thumbQuality })
      .toFile(thumb);

    console.log(`✓ Generated variants for: ${name}`);
    return { ok: true };
  } catch (err) {
    console.error(`✗ Error processing ${file}:`, err.message);
    return { ok: false, error: err.message };
  }
}

(async () => {
  if (!fs.existsSync(srcDir)) {
    console.error(`Images directory not found: ${srcDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png)$/i.test(f));
  console.log(`Found ${files.length} source images. Generating variants...\n`);

  const failed = [];
  const succeeded = [];

  for (const f of files) {
    // eslint-disable-next-line no-await-in-loop
    const result = await processImage(f);
    if (result.ok) {
      succeeded.push(f);
    } else {
      failed.push({ file: f, error: result.error });
    }
  }

  console.log(`\n✓ Successfully processed: ${succeeded.length} images`);
  if (failed.length > 0) {
    console.log(`\n⚠ Failed to process ${failed.length} images:`);
    failed.forEach(({ file, error }) => {
      console.log(`  - ${file}: ${error}`);
    });
  } else {
    console.log('All variants generated successfully!');
  }
  console.log(
    '\nRun your dev server and images will now load responsively with <picture> + srcset.'
  );
})();

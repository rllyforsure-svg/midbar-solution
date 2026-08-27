const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processNewLogos() {
  const inputPath = 'C:\\Users\\hayou\\.gemini\\antigravity-ide\\brain\\df3ea193-2a05-46a5-98cf-b2a231d4db31\\.user_uploaded\\media_1787811110739.png';
  
  const img = sharp(inputPath).ensureAlpha();
  const metadata = await img.metadata();
  console.log(`Input dimensions: ${metadata.width} x ${metadata.height}`);

  const rawBuffer = await img.raw().toBuffer();
  const width = metadata.width;
  const height = metadata.height;

  // Buffer 1: Dark logo (original colors, transparent background)
  const darkBuffer = Buffer.from(rawBuffer);
  // Buffer 2: White/Light logo (white text + white/silver-gray hexagon icon for dark/colored backgrounds)
  const lightBuffer = Buffer.from(rawBuffer);

  for (let i = 0; i < rawBuffer.length; i += 4) {
    const r = rawBuffer[i];
    const g = rawBuffer[i + 1];
    const b = rawBuffer[i + 2];
    const a = rawBuffer[i + 3];

    const minChannel = Math.min(r, g, b);
    const maxChannel = Math.max(r, g, b);
    const diff = maxChannel - minChannel;

    // Check if background (white/off-white)
    if (minChannel >= 240 && diff < 20) {
      darkBuffer[i + 3] = 0;
      lightBuffer[i + 3] = 0;
    } else if (minChannel > 210 && diff < 30) {
      const factor = (240 - minChannel) / 30.0;
      darkBuffer[i + 3] = Math.round(Math.min(255, Math.max(0, a * factor)));
      lightBuffer[i + 3] = Math.round(Math.min(255, Math.max(0, a * factor)));
    }

    // For Light version on dark backgrounds:
    if (lightBuffer[i + 3] > 0) {
      // Calculate original luminance / brightness
      // Original text is dark navy/black (r ~ 10-30, g ~ 20-40, b ~ 30-50)
      // Icon facets range from dark navy (brightness ~ 15%) to teal/blue highlights (brightness ~ 45%)
      const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0;

      // Invert & map to silver-gray & white:
      // Darkest parts (like text) become brightest pure white (#ffffff)
      // Medium faceted parts become subtle silver/slate white (#cbd5e1 to #94a3b8)
      // Lightest facet highlights become brilliant light blue/white (#e0f2fe)
      if (brightness < 0.18) {
        // Text & dark contours -> pure white
        lightBuffer[i] = 255;
        lightBuffer[i + 1] = 255;
        lightBuffer[i + 2] = 255;
      } else {
        // Hexagon 3D facets: map proportionally to white-gray gradient preserving depth
        const val = Math.round(180 + brightness * 75); // 180 ~ 255
        // Add subtle cool slate-blue tint to the silver
        lightBuffer[i] = Math.min(255, Math.round(val * 0.95));
        lightBuffer[i + 1] = Math.min(255, Math.round(val * 0.98));
        lightBuffer[i + 2] = Math.min(255, val);
      }
    }
  }

  // 1. Save Dark Transparent Logo (Trimmed)
  const trimmedDark = await sharp(darkBuffer, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 10 })
    .png({ quality: 100 })
    .toBuffer();

  const darkMeta = await sharp(trimmedDark).metadata();
  console.log(`Trimmed Dark Logo: ${darkMeta.width} x ${darkMeta.height}`);

  fs.writeFileSync(path.join(__dirname, 'public/images/logo.png'), trimmedDark);
  fs.writeFileSync(path.join(__dirname, 'public/logo.png'), trimmedDark);

  const darkB64 = trimmedDark.toString('base64');
  const darkSvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${darkMeta.width}" height="${darkMeta.height}" viewBox="0 0 ${darkMeta.width} ${darkMeta.height}" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <image width="${darkMeta.width}" height="${darkMeta.height}" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${darkB64}" />
</svg>`;
  fs.writeFileSync(path.join(__dirname, 'public/images/logo.svg'), darkSvg);
  fs.writeFileSync(path.join(__dirname, 'public/logo.svg'), darkSvg);

  // 2. Save Light/White Transparent Logo (Trimmed)
  const trimmedLight = await sharp(lightBuffer, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 10 })
    .png({ quality: 100 })
    .toBuffer();

  const lightMeta = await sharp(trimmedLight).metadata();
  console.log(`Trimmed Light Logo: ${lightMeta.width} x ${lightMeta.height}`);

  fs.writeFileSync(path.join(__dirname, 'public/images/logo-white.png'), trimmedLight);
  fs.writeFileSync(path.join(__dirname, 'public/images/logo-light.png'), trimmedLight);

  const lightB64 = trimmedLight.toString('base64');
  const lightSvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${lightMeta.width}" height="${lightMeta.height}" viewBox="0 0 ${lightMeta.width} ${lightMeta.height}" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <image width="${lightMeta.width}" height="${lightMeta.height}" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${lightB64}" />
</svg>`;
  fs.writeFileSync(path.join(__dirname, 'public/images/logo-white.svg'), lightSvg);
  fs.writeFileSync(path.join(__dirname, 'public/images/logo-light.svg'), lightSvg);

  console.log('SUCCESS: Processed both Dark Logo and White/Silver Light Logo!');
}

processNewLogos().catch(console.error);

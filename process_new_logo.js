const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processNewLogos() {
  const inputPath = 'C:\\Users\\hayou\\.gemini\\antigravity-ide\\brain\\1e543988-937a-40a6-9494-c80005026098\\.user_uploaded\\media_1787898574868.png';
  
  const img = sharp(inputPath).ensureAlpha();
  const metadata = await img.metadata();
  console.log(`Input dimensions: ${metadata.width} x ${metadata.height}`);

  const rawBuffer = await img.raw().toBuffer();
  const width = metadata.width;
  const height = metadata.height;

  // Buffer 1: Dark logo (original colors, transparent background)
  const darkBuffer = Buffer.from(rawBuffer);
  // Buffer 2: White/Light logo (#e6ecf0 and #F7F9FB for dark backgrounds)
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
    if (minChannel >= 242 && diff < 15) {
      darkBuffer[i + 3] = 0;
      lightBuffer[i + 3] = 0;
    } else if (minChannel > 215 && diff < 25) {
      const factor = (242 - minChannel) / 27.0;
      const alpha = Math.round(Math.min(255, Math.max(0, a * factor)));
      darkBuffer[i + 3] = alpha;
      lightBuffer[i + 3] = alpha;
    }

    // For Light version on dark backgrounds:
    if (lightBuffer[i + 3] > 0) {
      const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0;

      const pixelIndex = i / 4;
      const x = pixelIndex % width;
      const isTextRegion = x > width * 0.28; // Icon is on the left ~25%, text is on right

      if (isTextRegion) {
        // Text: #F7F9FB (Soft White / Pure White)
        lightBuffer[i] = 247;
        lightBuffer[i + 1] = 249;
        lightBuffer[i + 2] = 251;
      } else {
        // Hexagon 3D facets: map proportionally between #e6ecf0 (230, 236, 240) and #F7F9FB (247, 249, 251) / pure white
        const t = Math.min(1.0, Math.max(0.0, (brightness - 0.08) / 0.38));
        
        // Linear interpolation from #e6ecf0 (230, 236, 240) to #F7F9FB (247, 249, 251) and up to #FFFFFF
        const redVal = Math.round(230 + t * (255 - 230));
        const greenVal = Math.round(236 + t * (255 - 236));
        const blueVal = Math.round(240 + t * (255 - 240));

        lightBuffer[i] = redVal;
        lightBuffer[i + 1] = greenVal;
        lightBuffer[i + 2] = blueVal;
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
  fs.writeFileSync(path.join(__dirname, 'public/logo-white.png'), trimmedLight);

  const lightB64 = trimmedLight.toString('base64');
  const lightSvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${lightMeta.width}" height="${lightMeta.height}" viewBox="0 0 ${lightMeta.width} ${lightMeta.height}" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <image width="${lightMeta.width}" height="${lightMeta.height}" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${lightB64}" />
</svg>`;
  fs.writeFileSync(path.join(__dirname, 'public/images/logo-white.svg'), lightSvg);
  fs.writeFileSync(path.join(__dirname, 'public/images/logo-light.svg'), lightSvg);
  fs.writeFileSync(path.join(__dirname, 'public/logo-white.svg'), lightSvg);

  console.log('SUCCESS: Generated both Dark Logo and White/SoftWhite Light Logo!');
}

processNewLogos().catch(console.error);

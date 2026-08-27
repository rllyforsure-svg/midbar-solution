const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function inspectAndCrop() {
  const uploadedPath = 'C:\\Users\\hayou\\.gemini\\antigravity-ide\\brain\\df3ea193-2a05-46a5-98cf-b2a231d4db31\\.user_uploaded\\media_1787809536223.png';
  const meta = await sharp(uploadedPath).metadata();
  console.log(`Uploaded image: ${meta.width} x ${meta.height}`);

  // Copy full image to public/images/hero-split-reference.png
  fs.copyFileSync(uploadedPath, path.join(__dirname, 'public/images/hero-split-bg.png'));

  // Crop the hero area below the header (header is roughly top ~20% of the image)
  // Let's find header height
  const heroTop = Math.round(meta.height * 0.20);
  const heroHeight = meta.height - heroTop;

  // Extract left half (HVAC)
  const leftHalf = await sharp(uploadedPath)
    .extract({ left: 0, top: heroTop, width: Math.round(meta.width * 0.5), height: heroHeight })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(__dirname, 'public/images/hero-hvac.png'), leftHalf);

  // Extract right half (Drone)
  const rightHalf = await sharp(uploadedPath)
    .extract({ left: Math.round(meta.width * 0.5), top: heroTop, width: Math.round(meta.width * 0.5), height: heroHeight })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(__dirname, 'public/images/hero-drone.png'), rightHalf);

  console.log('Extracted hero-hvac.png and hero-drone.png');
}

inspectAndCrop().catch(console.error);

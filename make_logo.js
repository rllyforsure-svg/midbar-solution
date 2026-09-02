const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function createBoldLogos() {
  const symbolPath = path.resolve('public/images/logo-symbol.png');
  const symbolBuf = fs.readFileSync(symbolPath);
  const symbolBase64 = symbolBuf.toString('base64');
  
  // 1. Dark Navy Text for White/Light Theme Header
  // Note: font-weight="900" / "800", Montserrat/Noto Sans
  const svgContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="880" height="214" viewBox="0 0 880 214" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&amp;display=swap');
      .brand-title {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif;
        font-weight: 800;
        font-size: 64px;
        fill: #0c2340;
        letter-spacing: 2px;
      }
    </style>
  </defs>
  <image x="0" y="0" width="190" height="214" xlink:href="data:image/png;base64,${symbolBase64}" />
  <text x="225" y="133" class="brand-title">MIDBAR SOLUTION</text>
</svg>`;

  fs.writeFileSync('public/images/logo.svg', svgContent);
  const seaonLogoSvg = path.resolve('../SeaonTech-Page-main/public/images/logo.svg');
  if (fs.existsSync(path.dirname(seaonLogoSvg))) {
    fs.writeFileSync(seaonLogoSvg, svgContent);
  }
  console.log('Saved logo.svg');

  // Convert to high-res PNG
  await sharp(Buffer.from(svgContent))
    .png()
    .toFile('public/images/logo.png');
  const seaonLogoPng = path.resolve('../SeaonTech-Page-main/public/images/logo.png');
  if (fs.existsSync(path.dirname(seaonLogoPng))) {
    await sharp(Buffer.from(svgContent)).png().toFile(seaonLogoPng);
  }
  console.log('Saved logo.png');

  // 2. White Text for Dark Backgrounds
  const svgWhiteContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="880" height="214" viewBox="0 0 880 214" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&amp;display=swap');
      .brand-title-white {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif;
        font-weight: 800;
        font-size: 64px;
        fill: #ffffff;
        letter-spacing: 2px;
      }
    </style>
  </defs>
  <image x="0" y="0" width="190" height="214" xlink:href="data:image/png;base64,${symbolBase64}" />
  <text x="225" y="133" class="brand-title-white">MIDBAR SOLUTION</text>
</svg>`;

  fs.writeFileSync('public/images/logo-white.svg', svgWhiteContent);
  const seaonWhiteSvg = path.resolve('../SeaonTech-Page-main/public/images/logo-white.svg');
  if (fs.existsSync(path.dirname(seaonWhiteSvg))) {
    fs.writeFileSync(seaonWhiteSvg, svgWhiteContent);
  }

  await sharp(Buffer.from(svgWhiteContent))
    .png()
    .toFile('public/images/logo-white.png');
  const seaonWhitePng = path.resolve('../SeaonTech-Page-main/public/images/logo-white.png');
  if (fs.existsSync(path.dirname(seaonWhitePng))) {
    await sharp(Buffer.from(svgWhiteContent)).png().toFile(seaonWhitePng);
  }
  console.log('Saved logo-white.svg and logo-white.png');
}

createBoldLogos();

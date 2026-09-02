const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function createBoldLogos() {
  const symbolPath = path.resolve('public/images/logo-symbol.png');
  const symbolBuf = fs.readFileSync(symbolPath);
  const symbolBase64 = symbolBuf.toString('base64');
  
  // 1. Dark Navy Text for White/Light Theme Header
  // viewBox: 0 0 890 214 ensures "MIDBAR SOLUTION" (ends at 868) has complete clearance
  const svgContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="890" height="214" viewBox="0 0 890 214" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&amp;display=swap');
      .brand-title {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif;
        font-weight: 800;
        font-size: 62px;
        fill: #0c2340;
        letter-spacing: 1.5px;
      }
    </style>
  </defs>
  <image x="0" y="0" width="190" height="214" xlink:href="data:image/png;base64,${symbolBase64}" />
  <text x="220" y="133" class="brand-title">MIDBAR SOLUTION</text>
</svg>`;

  fs.writeFileSync('public/images/logo.svg', svgContent);
  const seaonLogoSvg = path.resolve('../SeaonTech-Page-main/public/images/logo.svg');
  if (fs.existsSync(path.dirname(seaonLogoSvg))) {
    fs.writeFileSync(seaonLogoSvg, svgContent);
  }

  // 2. White Text for Dark Backgrounds
  const svgWhiteContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="890" height="214" viewBox="0 0 890 214" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&amp;display=swap');
      .brand-title-white {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif;
        font-weight: 800;
        font-size: 62px;
        fill: #ffffff;
        letter-spacing: 1.5px;
      }
    </style>
  </defs>
  <image x="0" y="0" width="190" height="214" xlink:href="data:image/png;base64,${symbolBase64}" />
  <text x="220" y="133" class="brand-title-white">MIDBAR SOLUTION</text>
</svg>`;

  fs.writeFileSync('public/images/logo-white.svg', svgWhiteContent);
  const seaonWhiteSvg = path.resolve('../SeaonTech-Page-main/public/images/logo-white.svg');
  if (fs.existsSync(path.dirname(seaonWhiteSvg))) {
    fs.writeFileSync(seaonWhiteSvg, svgWhiteContent);
  }

  // Render PNGs:
  const pngBuf = await sharp(Buffer.from(svgContent)).png().toBuffer();
  fs.writeFileSync('public/images/logo.png', pngBuf);
  const seaonLogoPng = path.resolve('../SeaonTech-Page-main/public/images/logo.png');
  if (fs.existsSync(path.dirname(seaonLogoPng))) {
    fs.writeFileSync(seaonLogoPng, pngBuf);
  }

  const whitePngBuf = await sharp(Buffer.from(svgWhiteContent)).png().toBuffer();
  fs.writeFileSync('public/images/logo-white.png', whitePngBuf);
  const seaonWhitePng = path.resolve('../SeaonTech-Page-main/public/images/logo-white.png');
  if (fs.existsSync(path.dirname(seaonWhitePng))) {
    fs.writeFileSync(seaonWhitePng, whitePngBuf);
  }

  const { data, info } = await sharp(pngBuf).raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for(let y=0; y<info.height; y++){
    for(let x=0; x<info.width; x++){
      const a = data[(y*info.width + x)*4 + 3];
      if(a > 20){
        if(x < minX) minX = x;
        if(x > maxX) maxX = x;
        if(y < minY) minY = y;
        if(y > maxY) maxY = y;
      }
    }
  }
  console.log('Final logo bounds: minX=' + minX + ', maxX=' + maxX + ' (total width=' + info.width + ', margin right=' + (info.width - 1 - maxX) + ')');
}

createBoldLogos();

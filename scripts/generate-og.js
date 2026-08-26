const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // 1. Prepare newly uploaded portrait: resize and round corners
  const portraitPath = path.join(__dirname, '../public/images/lizbeth-bernal-og-portrait.jpg');
  
  // Crop / resize portrait to 430x530 with perfect focus on face and posture
  const portraitWidth = 430;
  const portraitHeight = 530;
  
  const portraitBuffer = await sharp(portraitPath)
    .resize(portraitWidth, portraitHeight, { fit: 'cover', position: 'top' })
    .toBuffer();

  // Create SVG mask with rounded corners
  const maskSvg = Buffer.from(`
    <svg width="${portraitWidth}" height="${portraitHeight}">
      <rect x="0" y="0" width="${portraitWidth}" height="${portraitHeight}" rx="28" ry="28" fill="#fff" />
    </svg>
  `);

  const roundedPortrait = await sharp(portraitBuffer)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 2. Create the main background and text SVG layout
  const textSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFDFC"/>
          <stop offset="60%" stop-color="#FFF6F2"/>
          <stop offset="100%" stop-color="#FFE4DC"/>
        </linearGradient>
        <linearGradient id="coralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#B94F3D"/>
          <stop offset="100%" stop-color="#E88771"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#181412" flood-opacity="0.15"/>
        </filter>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
      
      <!-- Subtle Decorative Circles -->
      <circle cx="1100" cy="100" r="300" fill="#F6B6A6" opacity="0.25"/>
      <circle cx="100" cy="550" r="250" fill="#FFE4DC" opacity="0.4"/>

      <!-- Left Column: Branding & Typography -->
      <!-- Top Badge -->
      <g transform="translate(70, 70)">
        <rect width="390" height="38" rx="19" fill="#FFF6F2" stroke="#EADDD8" stroke-width="1.5"/>
        <circle cx="22" cy="19" r="5" fill="#B94F3D"/>
        <text x="36" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" fill="#B94F3D" letter-spacing="1.5">SÍNDICA MUNICIPAL · VILLA DE ALLENDE</text>
      </g>

      <!-- Main Name Heading -->
      <text x="70" y="195" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="68" font-weight="900" fill="#181412" letter-spacing="-1.5">
        Lizbeth <tspan fill="url(#coralGrad)">Bernal</tspan>
      </text>

      <!-- Punchline / Subtitle -->
      <text x="70" y="250" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" fill="#181412" opacity="0.9">
        Abogada &amp; Servidora Pública
      </text>

      <text x="70" y="295" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#5E524E">
        Representación jurídica, defensa patrimonial y gestión pública local.
      </text>

      <!-- 3 Credential Pills -->
      <g transform="translate(70, 340)">
        <!-- Pill 1 -->
        <g transform="translate(0, 0)">
          <rect width="480" height="42" rx="14" fill="#FFFDFC" stroke="#EADDD8" stroke-width="1.2"/>
          <text x="20" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#181412">🏛️ Sindicatura Municipal · Villa de Allende 2025</text>
        </g>
        <!-- Pill 2 -->
        <g transform="translate(0, 52)">
          <rect width="480" height="42" rx="14" fill="#FFFDFC" stroke="#EADDD8" stroke-width="1.2"/>
          <text x="20" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#181412">🎓 Maestría en Admón. Pública · UVM Metepec</text>
        </g>
        <!-- Pill 3 -->
        <g transform="translate(0, 104)">
          <rect width="480" height="42" rx="14" fill="#FFFDFC" stroke="#EADDD8" stroke-width="1.2"/>
          <text x="20" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#181412">⚖️ Licenciatura en Derecho · ISIMA Toluca</text>
        </g>
      </g>

      <!-- Bottom Domain and Verification Bar -->
      <g transform="translate(70, 560)">
        <line x1="0" y1="0" x2="520" y2="0" stroke="#EADDD8" stroke-width="1"/>
        <text x="0" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="800" fill="#B94F3D">lizbernal.mx</text>
        <text x="140" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#5E524E">· Perfil Profesional Oficial · Estado de México</text>
      </g>

      <!-- Right Column: Portrait Photo Frame Border & Shadow -->
      <g transform="translate(700, 50)" filter="url(#shadow)">
        <rect width="${portraitWidth + 12}" height="${portraitHeight + 12}" rx="34" fill="#FFFDFC" stroke="#EADDD8" stroke-width="2"/>
      </g>
    </svg>
  `);

  // 3. Composite everything together
  const baseImg = await sharp(textSvg).png().toBuffer();

  const finalOgImage = await sharp(baseImg)
    .composite([
      {
        input: roundedPortrait,
        top: 56,
        left: 706,
      },
    ])
    .jpeg({ quality: 95 })
    .toBuffer();

  // Save as static files for OpenGraph / WhatsApp / Facebook / Twitter
  fs.writeFileSync(path.join(__dirname, '../public/og-image.jpg'), finalOgImage);
  fs.writeFileSync(path.join(__dirname, '../public/images/og-lizbeth-bernal.jpg'), finalOgImage);
  fs.writeFileSync(path.join(__dirname, '../public/opengraph-image.jpg'), finalOgImage);
  fs.writeFileSync(path.join(__dirname, '../public/opengraph-image.png'), finalOgImage);
  
  console.log('✅ OpenGraph image generated successfully with the new official portrait at 1200x630!');
}

createOgImage().catch(console.error);

const fs = require('fs');
const path = require('path');
const sharp = require('C:/Users/李/Documents/Codex/2026-10-23/e-2/outputs/node_modules/sharp');

const input = path.join(__dirname, 'cover-source.svg');
const output = path.join(__dirname, 'cover.png');

sharp(fs.readFileSync(input), { density: 144 })
  .resize(1200, 630, { fit: 'contain' })
  .png({ compressionLevel: 9 })
  .toFile(output)
  .then(() => console.log('cover.png rendered'))
  .catch(err => { console.error(err); process.exit(1); });

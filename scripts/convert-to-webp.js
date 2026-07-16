/* One-off script: convert public PNG/JPEG images to WebP. */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const MAX_WIDTH = 1600;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

(async () => {
  const files = walk(PUBLIC_DIR);
  let before = 0;
  let after = 0;
  for (const file of files) {
    const target = file.replace(/\.(png|jpe?g)$/i, ".webp");
    const meta = await sharp(file).metadata();
    let pipeline = sharp(file);
    if (meta.width > MAX_WIDTH) pipeline = pipeline.resize({ width: MAX_WIDTH });
    await pipeline.webp({ quality: 82, effort: 6 }).toFile(target);
    const a = fs.statSync(file).size;
    const b = fs.statSync(target).size;
    before += a;
    after += b;
    console.log(
      `${path.relative(PUBLIC_DIR, file)}: ${(a / 1024).toFixed(0)} KB -> ${(b / 1024).toFixed(0)} KB`
    );
  }
  console.log(`\nTotal: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`);
})();

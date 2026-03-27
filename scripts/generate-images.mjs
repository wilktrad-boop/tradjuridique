import Replicate from "replicate";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const images = [
  {
    name: "hero-legal",
    prompt:
      "Professional legal translation office, elegant desk with legal documents and contracts, fountain pen, official stamps and seals, navy blue and gold color scheme, soft warm lighting, photorealistic, high quality, 4k, corporate professional atmosphere",
  },
  {
    name: "translator-working",
    prompt:
      "Professional translator working at modern desk with legal documents, laptop showing bilingual text, notary stamp nearby, warm office lighting, navy blue suit, high quality professional photo, photorealistic",
  },
  {
    name: "legal-documents",
    prompt:
      "Stack of official legal documents with stamps and seals, certificates with ribbons, notary stamps, translation materials, gold wax seals, elegant legal paperwork on dark wood desk, professional photography, warm lighting",
  },
  {
    name: "og-image",
    prompt:
      "Elegant professional banner for legal translation agency, navy blue and gold colors, balance of justice symbol, documents and globe, ATJ text, modern clean design, corporate branding, 1200x630 aspect ratio",
  },
];

async function generateImage(imageConfig) {
  console.log(`Generating: ${imageConfig.name}...`);
  try {
    const output = await replicate.run("black-forest-labs/flux-schnell", {
      input: {
        prompt: imageConfig.prompt,
        num_outputs: 1,
        aspect_ratio: imageConfig.name === "og-image" ? "16:9" : "3:2",
        output_format: "webp",
        output_quality: 90,
      },
    });

    if (output && output[0]) {
      const imageUrl = typeof output[0] === "string" ? output[0] : output[0].url?.() || output[0];
      const response = await fetch(imageUrl);
      const buffer = Buffer.from(await response.arrayBuffer());
      const filePath = path.join(OUTPUT_DIR, `${imageConfig.name}.webp`);
      fs.writeFileSync(filePath, buffer);
      console.log(`  Saved: ${filePath}`);
    }
  } catch (error) {
    console.error(`  Error generating ${imageConfig.name}:`, error.message);
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const img of images) {
    await generateImage(img);
  }

  console.log("\nDone! Images saved to public/images/");
}

main();

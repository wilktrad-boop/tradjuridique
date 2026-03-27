const Replicate = require("replicate");
const fs = require("fs");
const path = require("path");

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function gen(name, prompt, aspect) {
  console.log("Generating:", name);
  try {
    const output = await replicate.run("black-forest-labs/flux-schnell", {
      input: {
        prompt,
        num_outputs: 1,
        aspect_ratio: aspect || "3:2",
        output_format: "webp",
        output_quality: 90,
      },
    });
    if (output && output[0]) {
      const url = String(output[0]);
      const resp = await fetch(url);
      const buf = Buffer.from(await resp.arrayBuffer());
      fs.writeFileSync(path.join(OUTPUT_DIR, name + ".webp"), buf);
      console.log("  Saved:", name);
    }
  } catch (e) {
    console.error("  Error:", name, e.message);
  }
}

async function main() {
  // Hero background image
  await gen(
    "hero-bg",
    "Aerial view of elegant legal office desk with scattered translated documents in multiple languages, fountain pen, gold wax seal, official stamps, navy blue leather desk pad, warm ambient lighting, top-down flat lay photography, professional stock photo, 4k"
  );
  await sleep(12000);

  // Services section - assermentee
  await gen(
    "service-assermentee",
    "Close-up of official translation stamp and seal on legal document, notary public stamp, certified translation certificate with gold embossed seal, professional photography, warm lighting, shallow depth of field"
  );
  await sleep(12000);

  // Services section - certifiee
  await gen(
    "service-certifiee",
    "Professional translator reviewing legal contract documents at modern desk, side profile, wearing glasses, organized workspace with bilingual papers, warm natural light from window, professional corporate photo"
  );
  await sleep(12000);

  // About / Trust section
  await gen(
    "team-office",
    "Modern professional translation agency office interior, team of translators working at sleek desks, floor-to-ceiling windows, navy blue and gold accents in decor, contemporary corporate interior design, natural lighting, professional architectural photography"
  );
  await sleep(12000);

  // Contact page
  await gen(
    "contact-office",
    "Elegant reception area of professional legal office in Paris, marble desk, fresh flowers, warm lighting, navy and gold color scheme, welcoming corporate entrance, high-end interior design photography"
  );
  await sleep(12000);

  // Favicon - ATJ monogram
  await gen(
    "favicon-source",
    "Minimalist logo design, letters ATJ monogram in gold color on dark navy blue circle background, clean modern typography, professional law firm branding, vector style, centered composition, simple elegant design",
    "1:1"
  );

  console.log("\nDone!");
}

main();

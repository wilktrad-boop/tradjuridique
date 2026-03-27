const fs = require("fs");
const path = require("path");

function fix(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "node_modules") {
      fix(full);
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      let content = fs.readFileSync(full, "utf8");
      const original = content;
      // Match backslash followed by any char with code > 127
      const fixed = [];
      for (let i = 0; i < content.length; i++) {
        if (content[i] === "\\" && i + 1 < content.length && content.charCodeAt(i + 1) > 127) {
          // Skip the backslash, keep the accented char
          continue;
        }
        fixed.push(content[i]);
      }
      content = fixed.join("");
      if (content !== original) {
        fs.writeFileSync(full, content, "utf8");
        console.log("Fixed:", full);
      }
    }
  }
}
fix("src");
console.log("Done");

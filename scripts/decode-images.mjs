import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("public/images");
if (!fs.existsSync(dir)) process.exit(0);

for (const name of fs.readdirSync(dir)) {
  if (!name.endsWith(".jpg.b64")) continue;
  const out = path.join(dir, name.slice(0, -4));
  const b64 = fs.readFileSync(path.join(dir, name), "utf8").trim();
  fs.writeFileSync(out, Buffer.from(b64, "base64"));
  console.log("decoded", out);
}

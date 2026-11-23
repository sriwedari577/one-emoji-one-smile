import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
// Hatching chick: the single emoji entry, chosen as a fresh, friendly hatchling.
writeFileSync(join(outputDir, "entry.txt"), "🐣\n", "utf8");

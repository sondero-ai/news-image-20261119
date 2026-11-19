// Copies the news image this entry ships to the grader's output directory.
// The copy is byte-for-byte: two runs of the program write identical bytes.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const moduleDir = fileURLToPath(new URL('.', import.meta.url));
const source = join(moduleDir, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  console.error(`entry.png is missing: expected it at ${source}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

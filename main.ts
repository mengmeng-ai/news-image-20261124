// Entry program for the news-image-20261124 bounty (Node 22, standard library only).
//
// The whole entry is the PNG that sits next to this file. Running this program
// places a copy of it at <output>/entry.png, where <output> is the folder named
// by MAKEFUN_OUTPUT_DIR, or /output when that variable is not set. After copying,
// the program reads the written file back and checks its byte length and sha256
// against the source, printing the output size; it exits non-zero if the copy
// is missing or differs, so a bad copy is never reported as a success.
// Outside the grader, try it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const source = join(here, 'entry.png');
const destination = join(outDir, 'entry.png');
copyFileSync(source, destination);
console.log(`entry.png -> ${destination}`);

// Verify the copy: read the written file back and make sure it matches the
// source byte for byte, so a truncated or failed copy never slips through.
const sourceBytes = readFileSync(source);
let writtenBytes;
try {
  writtenBytes = readFileSync(destination);
} catch {
  console.error(`entry.png: copy failed, ${destination} is missing after writing`);
  process.exit(1);
}
if (writtenBytes.length !== sourceBytes.length) {
  console.error(`entry.png: copy mismatch, wrote ${writtenBytes.length} bytes but the source is ${sourceBytes.length} bytes`);
  process.exit(1);
}
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
if (digest(writtenBytes) !== digest(sourceBytes)) {
  console.error('entry.png: copy mismatch, sha256 of the written file differs from the source');
  process.exit(1);
}
console.log(`entry.png verified: ${writtenBytes.length} bytes, sha256 ${digest(writtenBytes)}`);

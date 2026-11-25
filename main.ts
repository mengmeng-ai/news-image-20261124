// Entry program for the news-image-20261124 bounty (Node 22, standard library only).
//
// The whole entry is the PNG that sits next to this file. Running this program
// places a copy of it at <output>/entry.png, where <output> is the folder named
// by MAKEFUN_OUTPUT_DIR, or /output when that variable is not set.
// Outside the grader, try it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const destination = join(outDir, 'entry.png');
copyFileSync(join(here, 'entry.png'), destination);
console.log(`entry.png -> ${destination}`);

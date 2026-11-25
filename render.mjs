// Renders render.html to entry.png at exactly 1024x1024 with Playwright Chromium.
// Usage: node render.mjs
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
  await page.goto('file://' + join(dir, 'render.html'), { waitUntil: 'load' });
  await page.waitForTimeout(300);
  await page.screenshot({ path: join(dir, 'entry.png'), type: 'png' });
  console.log('entry.png written');
} finally {
  await browser.close();
}

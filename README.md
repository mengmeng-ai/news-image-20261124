# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/mengmeng-ai/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/mengmeng-ai/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One 1024&times;1024 infographic summing up world news of Tuesday 24 November 2026: the Huawei jury verdict, the Houthi drone strike on Riyadh's PIF tower, tankers hitting mines in the Strait of Hormuz, the killing of Hamas's internal security chief in Gaza, Ukraine's sea strike on the Russian cargo ship Sparta II, and Senegal regaining the Africa Cup of Nations title. Every story was verified against reporting from Reuters, CNN, Al Jazeera, Arab News, AP and Bloomberg. The image is drawn in code (HTML + hand-drawn SVG icons, screenshotted with Playwright Chromium) so all text stays crisp — no AI-generated imagery.

## The six stories

1. **Huawei found guilty** — a US jury convicts Huawei of bank fraud and trade-secret theft on 10 of 12 counts, but clears it of racketeering.
2. **Drone hits Riyadh tower** — a Houthi drone strikes the PIF tower in Riyadh's financial district, wounding 11 people.
3. **Mines in the Strait** — Iran says four tankers struck mines and caught fire in the Strait of Hormuz.
4. **Gaza security chief killed** — an Israeli strike kills Hamas internal security chief Naim Abu Nahal despite the ceasefire.
5. **Kyiv claims sea strike** — Zelenskyy confirms Ukraine's drone strike on the Russian cargo ship Sparta II in the Gulf of Finland.
6. **Senegal champions again** — a sports court hands Senegal back the Africa Cup title, overturning the award to Morocco.

## Run it

Re-render the image (requires Playwright Chromium):

```sh
node render.mjs
```

Copy the entry image to an output folder:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `./entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=d5a50dzy&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>

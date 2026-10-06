# Enlumora product site

Static product website for Enlumora, deployed from `artjing/enlumora-web` with GitHub Pages at [enlumora.jingarttech.com](https://enlumora.jingarttech.com).

The legacy `artjing/enlumora-site` deployment remains at `enlumra.site` during migration so existing privacy/support links remain available. Do not change `api.jingarttech.com`, the studio root domain, or mail records when deploying this site.

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

- `index.html` — product landing page
- `privacy.html` — beta privacy overview
- `styles.css` — responsive visual system
- `script.js` — navigation and reveal interactions
- `assets/` — optimized product imagery and Qi Flow preview video

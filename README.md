# DHRUV'S OFFICIAL BIRTHDAY EXPERIENCE™ — Static Version

No npm, no build step, no Node required. Plain HTML, CSS, and JS.

## 1. Run it

**Just double-click `index.html`.** It opens directly in your browser and works.

(If you want it served over a local URL instead of `file://`, that's optional —
any static server works, e.g. `python3 -m http.server` in this folder.)

## 2. Add the song (only manual step)

Drop the audio file here, named **exactly**:

```
audio/fyne-shyt.mp3
```

If it's missing, the site still works fine — the sticky audio button just shows "N/A".

## 3. Deploy on Vercel (or anywhere static)

This folder IS the deployable site — no Root Directory setting, no build command needed.

**Vercel:**
1. Push this folder's contents to a GitHub repo (or a subfolder of one).
2. Import it in Vercel.
3. Framework Preset: **Other** / **Static**. Leave Build Command and Output
   Directory blank — Vercel will serve the files as-is.
4. Deploy.

**Also works identically on:** Netlify, GitHub Pages, Cloudflare Pages, or any
static host — just upload the folder.

## 4. File structure

```
index.html      all page markup/content
styles.css      all styling (neo-brutalist theme, colors, layout, responsive rules)
script.js       intro overlay, audio play/pause, easter eggs — vanilla JS, no dependencies
images/         the 6 provided photos
audio/          drop fyne-shyt.mp3 here
```

## 5. Common tweaks

- **Change any text/caption:** open `index.html`, find the text, edit directly (it's plain markup — no JSX, no components).
- **Change colors:** `styles.css`, the `:root { ... }` block near the top (`--black`, `--off-white`, `--pink`, `--lime`, `--blue`).
- **Change the personal message signature:** search `index.html` for `personal__signature`.
- **Change birthday wish cards:** search `index.html` for `wishes__card`.
- **Add another easter egg stat:** copy one of the `<button class="stats__card-btn" data-egg="...">` blocks and change the `data-egg` text — `script.js` already wires up any button with that attribute automatically.

## 6. Mobile responsive

Yes — media queries in `styles.css` recompose the hero, evidence gallery, stats
grid, and wish cards into single-column layouts under ~780px / ~480px, same as
the original build. No extra setup needed.

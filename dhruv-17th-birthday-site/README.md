# DHRUV'S OFFICIAL BIRTHDAY EXPERIENCE™

A neo-brutalist, chaotic, sarcastic-then-wholesome birthday site for Dhruv's 17th.

## 1. Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview
```

## 2. Add the song (only manual step left)

Drop the audio file here, named **exactly**:

```
public/audio/fyne-shyt.mp3
```

That's it — the intro's "ENTER THE NONSENSE" button will start it automatically.
If the file is missing, the site still works fine; the sticky audio button
just shows "N/A" instead of breaking.

## 3. Where things live

```
src/
  components/     one component + one .css file per section
  data/           edit these to change copy without touching JSX
    photos.js      captions + image paths + alt text
    stats.js       DHRUV.EXE stat grid + easter eggs
    fieldReport.js FIELD REPORT numbered entries
    wishes.js      birthday wish cards
  styles/index.css  global tokens (colors, fonts, shared .sticker style)
public/
  images/          the 6 provided photos (already placed + mapped)
  audio/           drop fyne-shyt.mp3 here
```

## 4. How the photos were mapped

| File | Used as |
|---|---|
| `photo-1.webp` | Hero image |
| `photo-3.webp` | "BRO THOUGHT THIS WAS A JOB INTERVIEW" (school sign visible) |
| `photo-2.webp` | "BATMAN'S UNDERPAID INTERN" (night) |
| `photo-4.webp` | "WHEN THE WIFI GOES OUT..." (silhouette), also reused next to the personal message |
| `photo-5.webp` | "CAMERA: 144p / DHRUV: 4K CONFIDENCE" (chaotic peace-sign photo) |
| `photo-6.jpg` | Final closing image — a still frame pulled from the video you uploaded (`6.mp4`), since the brief asked for a closing **photo**. The raw video wasn't embedded, to keep the page light per the performance requirements. |

## 5. Easter eggs already in

- Click **COMMON SENSE: 404** in the DHRUV.EXE stats grid → "Error 404: Common sense not found."
- Click **BRAIN CELLS: ???** → "Request timed out."

## 6. Personal message signature

The "OKAY, JOKES ASIDE." section is signed **— Sunny**, per your note.
Edit it in `src/components/PersonalMessage.jsx` if you want it different.

## 7. Common tweaks

- **Change the sender name/signature:** `src/components/PersonalMessage.jsx`, the `<p className="personal__signature">` line.
- **Change any birthday wish text:** `src/data/wishes.js`.
- **Change captions/photo order in the gallery:** `src/data/photos.js` (`evidencePhotos` array — order = display order).
- **Change colors:** `src/styles/index.css`, the `:root` block (`--black`, `--off-white`, `--pink`, `--lime`, `--blue`).
- **Change fonts:** swap the Google Fonts link in `index.html` and the `--font-display` / `--font-body` / `--font-mono` variables in `src/styles/index.css`.
- **Add/remove a stat easter egg:** `src/data/stats.js`, add an `easterEgg` string to any stat object to make it clickable.

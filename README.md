# Li Dongyang's Personal Website

BiUH Web Technologies 2026 coursework. A 4-page website hand-written with pure HTML, CSS and a little JavaScript.

## Pages

- `index.html` — homepage with a hero section and site navigation
- `quotes.html` — 20 quotes, each with author and source
- `project.html` — 5 project ideas, target users, and build steps
- `about.html` — about me and contact

## Files

- `style.css` — one stylesheet for the whole site
- `nav.html` / `footer.html` — navigation and footer fragments
- `nav.js` — loads fragments into every page to avoid repetition
- `favicon.svg` / `apple-touch-icon.png` — site icons
- `images/` — background and placeholder photo

## Run locally

Because the navigation and footer are loaded with fetch, you must serve the files over HTTP:

```bash
# Option 1: VS Code Live Server extension
# Right-click index.html → Open with Live Server

# Option 2: Node.js built-in server
npx serve .
```

Then open http://127.0.0.1:5500 or http://localhost:3000

## What to replace

- Replace `images/photo.svg` with your real photo
- Replace `apple-touch-icon.png` and `favicon.svg` with your own icons
- Change the email address in `about.html` and `footer.html`

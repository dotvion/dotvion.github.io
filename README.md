# Dot Vion

The public homepage of Dot Vion, an AI assistant powered by OpenAI.

**Website:** https://dotvion.github.io/

## Design

A compact academic homepage, inspired by [al-folio](https://github.com/alshedivat/al-folio): a 930 px reading column, light Roboto typography, understated magenta accents, lowercase section headings, a framed avatar, and light/dark themes.

This is an independent buildless implementation, not a Jekyll installation. Its content is specific to Dot Vion; it does not borrow a human biography or publication record.

## Develop

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`.

- `index.html`: content and document metadata
- `assets/style.css`: layout, responsive styles, light/dark palettes
- `assets/theme.js`: optional three-state theme preference
- `assets/dot-vion.png`: Dot Vion's existing avatar
- `404.html`: custom missing-page response

The site has no build dependencies, analytics, forms, or cookies. Roboto is loaded from Google Fonts. The theme preference uses browser-local storage and falls back to the system preference. Core content and navigation work without JavaScript.

## Attribution

- Design inspiration: al-folio, MIT licensed. The upstream notice is preserved in `licenses/al-folio-MIT.txt`.
- Icons: Font Awesome Free 7.2.0 by Fonticons, Inc., licensed under CC BY 4.0. The SVG assets preserve their upstream attribution comments. See `licenses/NOTICE.md`.
- Typeface: Roboto, served by Google Fonts.

## Deploy

GitHub Pages serves the `main` branch from `/ (root)`. `.nojekyll` keeps this as plain static files. Push changes to `main` and verify the Pages deployment for that exact commit before treating an update as live.

## Editorial guardrails

- Keep the AI-assistant identity explicit
- Link public work and primary sources; separate evidence from interpretation
- Do not publish the owner's identity, private information, or invented credentials and experiments
- Preserve semantic headings, keyboard focus, mobile reflow, readable contrast, and no-JavaScript access

## Checks

- Inspect desktop and narrow mobile layouts
- Verify navigation, the avatar link, theme cycling, persistence, skip link, and keyboard focus
- Check contrast and horizontal overflow in both color themes
- Confirm the live deployment corresponds to the expected repository commit

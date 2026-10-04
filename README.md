# Dot Vion

The public homepage of Dot Vion, an AI assistant powered by OpenAI.

**Website:** https://dotvion.github.io/

## Develop

This is a deliberately small, buildless static site. There are no JavaScript dependencies, analytics, external fonts, cookies, or forms.

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. All homepage markup, styles, and the original orbital illustration live in `index.html`. The favicon is an inline SVG.

## Deploy

GitHub Pages serves the `main` branch from `/ (root)`. `.nojekyll` keeps the site as plain static files. Push reviewed changes to `main` and check the Pages deployment before treating an update as live.

## Editorial guardrails

- Keep the AI-assistant identity explicit
- Link public work and primary sources; separate evidence from interpretation
- Do not publish the owner's identity, private information, or invented credentials and experiments
- Preserve semantic headings, keyboard focus, mobile reflow, and reduced-motion support

## Checks

- Check the homepage and 404 page at desktop and narrow mobile widths
- Verify navigation, public links, the skip link, and visible keyboard focus
- Check for horizontal overflow and readable content at enlarged text sizes
- Confirm the live deployment corresponds to the expected repository commit

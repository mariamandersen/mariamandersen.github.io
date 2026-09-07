# Portfolio source

The latest Figma Make portfolio, adapted to GitHub Pages. All eight projects use the Sustained by Voices case-study layout.

Run `npm ci` then `npm run build` in this directory. Commit the source and generated root `index.html`, `404.html`, `assets/portfolio` and `prosjekt/<slug>/index.html` files. The direct project entry points allow refreshes and bookmarks on GitHub Pages.

Edit `src/pages` for page layout, `src/data/projects.ts` for project summaries, `src/portfolio-body.html` for case-study text, and `src/components` for interactive galleries and Sustained by Voices. Shared styles are in `../style.css` and `src/index.css`; public images are in `../images`.

The ZIP's agent instructions, tool configuration and Figma deployment scripts were not imported.

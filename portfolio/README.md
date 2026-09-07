# Portfolio source

This is the React portfolio exported from Figma, adapted for the existing GitHub Pages domain.

Run `npm ci` then `npm run build` in this directory. The build updates the root `index.html`, bundled assets in `assets/portfolio`, and `prosjekt/<slug>/index.html` entry points so direct visits and refreshes work on GitHub Pages. Commit those generated files along with source changes.

Edit `src/pages` for page layout, `src/data/projects.ts` for the project list, `src/portfolio-body.html` for the existing case-study content, and `src/components` for interactive galleries and Sustained by Voices. Shared styles are in `../style.css` and `src/index.css`. Public images remain in `../images`.

The original Figma export's agent instructions, tool configuration and deployment scripts are not part of this project.

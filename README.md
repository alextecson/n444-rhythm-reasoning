# N444 Exam 2 — Cooked or Cooking

An NGN-style cardiac dysrhythmia review game for N444 Exam 2. Three modes
(Memorization, Clinical Reasoning, Comprehensive NGN), four NGN item types
(multiple-choice, select-all, cloze, matching) with partial-credit scoring,
annotated EKG rhythm strips, and in-memory state only.

**Live:** https://alextecson.github.io/n444-rhythm-reasoning/

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → docs/ (served by GitHub Pages from main /docs)
npm run preview  # serve the production build locally
```

Built with Vite + React. Question data lives in `src/App.jsx`; the 20 images
(10 EKG strips, 10 mascots) are externalized to `src/img/` and mapped in the
generated `src/images.js`, so they load as separate, lazily-fetched assets
(initial JS ~143 KB gzipped instead of ~945 KB). Regenerate the extraction
with `node scripts/extract-images.cjs` only if re-embedding new base64 images.

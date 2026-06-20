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

Built with Vite + React. All question data and images are embedded in the
single-file component `src/App.jsx`.

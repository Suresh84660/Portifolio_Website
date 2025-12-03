# Portfolio Website (split)

This workspace contains a split version of a single large React + Tailwind TSX file into modular components and data files. It uses Vite + React + JavaScript (JSX) + Tailwind.

How to run locally:

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

Files created under `src/`:
- components/* — UI components (Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer)
- data/* — projects, skills, experience, certifications
- App.jsx, main.jsx, index.css

Note: the app entry `index.html` lives in `public/index.html`. Vite is configured to use `public/` as the project root — dev and build use that file as the canonical entry.

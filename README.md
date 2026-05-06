# Yanze Jiang Personal Website

A personal website for presenting my background, projects, education, selected moments, and contact information.

The site is built with React, TypeScript, and Vite, and is deployed to GitHub Pages.

## Pages

- `Home`: profile summary, education highlights, and personal background
- `Project`: selected course projects and toy projects
- `Education`: academic background, program information, and gallery
- `Moments`: travel and field experience gallery
- `Contact`: email, phone, and social media links

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- GitHub Pages

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Content

Most editable content lives in:

- `src/pages/Home.tsx`
- `src/pages/Education.tsx`
- `src/pages/Moment.tsx`
- `src/pages/Contact.tsx`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/cv.ts`

Images are stored in `src/pic/`. Static icons are stored in `public/icons/`.

## Deployment

The site is configured for GitHub Pages under the `/MyWebsite/` base path. Pushing to the `main` branch triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`.

# Ayesha Shafiq — Engineering Portfolio

A responsive React portfolio featuring projects in software development, mobile applications, embedded systems, IoT, computer vision, and database design.

## Tech stack
- React
- Vite
- CSS animations and responsive layouts

## Run locally

1. Install Node.js (LTS) if it is not installed.
2. Open this project folder in VS Code.
3. Open Terminal → New Terminal.
4. Install project dependencies:

   ```bash
   npm install
   ```
5. Start the development server:

   ```bash
   npm run dev
   ```
6. Open the localhost address printed in the terminal.

## Build and preview

```bash
npm run build
npm run preview
```

## Profile photo
The hero section includes a profile photo picker. Selected images are stored in the current browser for preview. To publish a permanent portrait visible to all visitors, add your photo as `public/images/profile.jpg`. The hero will use this file as its default image when no browser-uploaded photo is selected. The upload picker is for local preview; its saved image is specific to the browser/device.

## Project structure

- `index.html` — HTML entry page and metadata
- `src/main.jsx` — React entry point
- `src/App.jsx` — sections, interactions, profile picker, robot buddy and project dialog
- `src/data.js` — profile details, skills, experience and project content
- `src/style.css` — colors, layout, responsive styling and animation
- `public/images/` — project imagery

## Publish
Push the project to a GitHub repository and import it into Vercel. The build command is `npm run build` and the output directory is `dist`.

# Aventine | Luxury Asset Stewardship Portfolio

This repository contains both a modern **Vite + React** codebase (for your developer portfolio / GitHub) and an **instant double-clickable HTML preview** that runs without any setup.

---

## 🚀 How to Launch This Project

### Method 1: Instant Preview (No Terminal / Node.js Required)
Simply double-click **`double-click-to-preview.html`** in this folder! It runs right inside Google Chrome, Safari, or Edge with all animations, layouts, and typography working out of the box.

---

### Method 2: Full React + Vite Development (For GitHub Portfolio)
To run the project in development mode or deploy it to Vercel/Netlify/GitHub Pages:

1. **Open your terminal** in this unzipped folder:
   ```bash
   cd aventine-frontend
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local Vite development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Click the URL displayed in your terminal (usually `http://localhost:5173`).

---

## 📁 Repository Structure
- `double-click-to-preview.html` → Instant standalone preview (no terminal needed)
- `src/App.jsx` → Core React application, routes, and custom scroll reveal hooks
- `src/main.jsx` → React 18 DOM mount point
- `src/index.css` → Tailwind directives + fluid typography engine
- `package.json` → Dependencies & npm run scripts
- `tailwind.config.js` → Tailwind color extensions and typography
- `vite.config.js` → Vite React configuration

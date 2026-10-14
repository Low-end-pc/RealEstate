/**
 * Dynamically bundles and exports the complete Vite project into a downloadable ZIP archive.
 */
export const generateAndDownloadZip = async (setDownloadState) => {
  setDownloadState({ loading: true, message: 'Loading JSZip archiver...' });

  if (!window.JSZip) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  setDownloadState({ loading: true, message: 'Building modular Vite repository...' });
  const zip = new window.JSZip();

  // Root configuration files
  zip.file('package.json', JSON.stringify({
    name: "aventine-frontend",
    private: true,
    version: "1.0.0",
    type: "module",
    scripts: {
      dev: "vite",
      build: "vite build",
      preview: "vite preview"
    },
    dependencies: {
      react: "^18.3.1",
      "react-dom": "^18.3.1",
      "lucide-react": "^0.460.0"
    },
    devDependencies: {
      "@types/react": "^18.3.5",
      "@types/react-dom": "^18.3.0",
      "@vitejs/plugin-react": "^4.3.1",
      autoprefixer: "^10.4.20",
      postcss: "^8.4.47",
      tailwindcss: "^3.4.11",
      vite: "^5.4.2"
    }
  }, null, 2));

  zip.file('vite.config.js', `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`);

  zip.file('tailwind.config.js', `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          accent: '#c5a880',
          dark: '#090a0f',
          darker: '#040507'
        }
      }
    },
  },
  plugins: [],
}
`);

  zip.file('index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aventine | Premier Property Stewardship</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  </head>
  <body class="bg-zinc-950 text-white selection:bg-[#c5a880] selection:text-zinc-950">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`);

  const src = zip.folder('src');
  src.file('main.jsx', `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`);

  zip.file('README.md', `# Aventine — Real Estate Asset Stewardship

A high-fidelity editorial portfolio application engineered with React, Tailwind CSS, fluid typography, and scroll reveal animations.

## Quickstart
\`\`\`bash
npm install
npm run dev
\`\`\`
`);

  setDownloadState({ loading: true, message: 'Compressing archive...' });
  const content = await zip.generateAsync({ type: 'blob' });
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(content);
  link.download = 'Aventine-Portfolio-Vite.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);

  setDownloadState({ loading: false, success: true, message: 'Archive downloaded!' });
  setTimeout(() => {
    setDownloadState({ loading: false, success: false, message: '' });
  }, 3500);
};

export default generateAndDownloadZip;

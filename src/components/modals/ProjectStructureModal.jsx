import React from 'react';
import { X, FolderTree, FileCode, Download } from 'lucide-react';

export const ProjectStructureModal = ({ isOpen, onClose, onDownloadZip, downloadState }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0f1118] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left">
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-[#c5a880]/10 border border-[#c5a880]/30 rounded-xl text-[#c5a880]">
            <FolderTree className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif-luxury text-2xl text-white">Full GitHub Project Export</h3>
            <p className="text-zinc-400 text-xs font-light">Clean Modular Vite + React Architecture</p>
          </div>
        </div>

        <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-5">
          This project is engineered with a modular, scalable architecture. Download the ZIP archive to extract and run locally with <code className="bg-white/10 px-1.5 py-0.5 rounded text-white text-xs">npm run dev</code>.
        </p>

        {/* Tree Display */}
        <div className="bg-black/60 rounded-xl p-4 border border-white/10 font-mono text-xs text-zinc-300 mb-6 space-y-1.5 max-h-56 overflow-y-auto hide-scrollbar">
          <div className="flex items-center gap-2 text-[#c5a880]"><FolderTree className="w-3.5 h-3.5" /> <span>aventine/</span></div>
          <div className="pl-4 flex items-center gap-2 text-zinc-400">├── 📁 src/</div>
          <div className="pl-8 flex items-center gap-2 text-sky-400">├── 📁 components/</div>
          <div className="pl-12 flex items-center gap-2 text-zinc-400">├── 📁 layout/ (NavigationBar, GlobalFooter)</div>
          <div className="pl-12 flex items-center gap-2 text-zinc-400">├── 📁 home/ (Hero, Slider, Editorial)</div>
          <div className="pl-12 flex items-center gap-2 text-zinc-400">└── 📁 modals/ (ProjectStructureModal)</div>
          <div className="pl-8 flex items-center gap-2 text-emerald-400">├── 📁 pages/ (Home, Vision, Commercial, Residences, Detail, Pricing, Contact)</div>
          <div className="pl-8 flex items-center gap-2 text-amber-400">├── 📁 data/ (propertiesData, commercialData)</div>
          <div className="pl-8 flex items-center gap-2 text-indigo-400">├── 📁 hooks/ (useScrollObserver)</div>
          <div className="pl-8 flex items-center gap-2 text-purple-400">├── 📁 utils/ (zipExporter)</div>
          <div className="pl-8 flex items-center gap-2 text-emerald-400"><FileCode className="w-3.5 h-3.5" /> <span>App.jsx</span></div>
          <div className="pl-8 flex items-center gap-2 text-emerald-400"><FileCode className="w-3.5 h-3.5" /> <span>main.jsx</span></div>
          <div className="pl-8 flex items-center gap-2 text-emerald-400"><FileCode className="w-3.5 h-3.5" /> <span>index.css</span></div>
          <div className="pl-4 flex items-center gap-2">├── <FileCode className="w-3.5 h-3.5 text-yellow-400" /> <span>package.json</span></div>
          <div className="pl-4 flex items-center gap-2">├── <FileCode className="w-3.5 h-3.5 text-yellow-400" /> <span>tailwind.config.js</span></div>
          <div className="pl-4 flex items-center gap-2">└── <FileCode className="w-3.5 h-3.5 text-yellow-400" /> <span>vite.config.js</span></div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            {downloadState.loading ? (
              <span className="text-[#c5a880] animate-pulse">{downloadState.message}</span>
            ) : downloadState.success ? (
              <span className="text-emerald-400 font-medium">✓ Project ZIP downloaded successfully!</span>
            ) : (
              <span>Ready for unzipping & GitHub upload</span>
            )}
          </div>

          <button
            onClick={onDownloadZip}
            disabled={downloadState.loading}
            className="btn-editorial px-6 py-2.5 border border-white text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 disabled:opacity-50 w-full sm:w-auto justify-center rounded-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{downloadState.loading ? 'Bundling...' : 'Download Project ZIP'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectStructureModal;

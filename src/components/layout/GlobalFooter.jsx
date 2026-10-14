import React from 'react';
import { Download } from 'lucide-react';

export const GlobalFooter = ({ setCurrentPage, onOpenZipModal }) => {
  return (
    <footer className="bg-[#090a0f] text-white border-t border-white/10 pt-16 pb-12 px-4 sm:px-8 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white text-[#090a0f] flex items-center justify-center font-serif-luxury font-bold rounded-sm">
                A
              </div>
              <span className="font-serif-luxury font-semibold text-xl tracking-wide">Aventine</span>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-5">
              The premier asset stewardship system orchestrating high-value residential estates and commercial floor plates.
            </p>
            <button 
              onClick={onOpenZipModal}
              className="text-xs uppercase tracking-widest text-[#c5a880] hover:underline flex items-center gap-1 font-bold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Project ZIP</span>
            </button>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-300 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-light">
              <li><button onClick={() => setCurrentPage('commercial')} className="hover:text-white transition-colors cursor-pointer">Commercial Hub</button></li>
              <li><button onClick={() => setCurrentPage('residential')} className="hover:text-white transition-colors cursor-pointer">Residential Bento</button></li>
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition-colors cursor-pointer">Pricing & Plans</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-300 mb-4">Organization</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-light">
              <li><button onClick={() => setCurrentPage('vision')} className="hover:text-white transition-colors cursor-pointer">Corporate Vision</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors cursor-pointer">Private Advisory Desk</button></li>
              <li><span className="text-zinc-600">SOC-2 Type II Certified</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-300 mb-4">Governance</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-light">
              <li><span className="hover:text-white cursor-pointer transition-colors">Non-Disclosure Protocol</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Terms of Stewardship</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Trust Privacy Shield</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-light gap-3 text-center sm:text-left">
          <p>© 2026 Aventine Technologies & Assets Inc. All rights reserved.</p>
          <p>Engineered for high-performing frontend engineering portfolios.</p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;

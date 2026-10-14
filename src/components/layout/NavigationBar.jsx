import React, { useState, useEffect } from 'react';
import { FolderTree, Menu, X } from 'lucide-react';

export const NavigationBar = ({ currentPage, setCurrentPage, onOpenZipModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'residential', label: 'Residences' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'vision', label: 'Vision' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl px-4 sm:px-8 md:px-12 py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Monogram Brand Presentation (Non-button display per request) */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white text-[#090a0f] flex items-center justify-center font-serif-luxury font-bold text-base sm:text-lg rounded-sm shadow-md">
            A
          </div>
          <div>
            <span className="font-serif-luxury font-semibold text-lg sm:text-xl tracking-wide block leading-none text-white">Aventine</span>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-white/50 font-sans-clean font-medium">Asset Stewardship</span>
          </div>
        </div>

        {/* Desktop Nav with Dedicated Home Button & Visible Active Highlight */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id || (currentPage === 'apartment-detail' && item.id === 'residential');
            return (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`text-xs uppercase tracking-widest transition-all px-4 py-2 rounded-full cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#c5a880]/20 text-[#c5a880] font-bold border border-[#c5a880]/50 shadow-[0_0_16px_rgba(197,168,128,0.3)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 font-medium border border-transparent'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] shadow-[0_0_6px_#c5a880] shrink-0" />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={onOpenZipModal}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-widest border border-white/20 bg-white/5 hover:bg-white hover:text-[#090a0f] text-white transition-all duration-300 rounded-sm cursor-pointer"
          >
            <FolderTree className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>GitHub ZIP</span>
          </button>

          <button 
            onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="btn-editorial px-5 py-2 text-xs font-semibold uppercase tracking-widest border border-white/40 text-white cursor-pointer"
          >
            Schedule Visit
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-zinc-300 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090a0f] border-b border-white/10 px-6 py-6 mt-4 space-y-2 animate-page-enter">
          {navItems.map((item) => {
            const isActive = currentPage === item.id || (currentPage === 'apartment-detail' && item.id === 'residential');
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                  isActive 
                    ? 'bg-[#c5a880]/20 text-[#c5a880] font-bold border-l-4 border-[#c5a880]' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 font-medium'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#c5a880] shadow-[0_0_6px_#c5a880]" />
                )}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button 
              onClick={() => { onOpenZipModal(); setMobileMenuOpen(false); }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20"
            >
              Export GitHub ZIP
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest bg-white text-[#090a0f]"
            >
              Schedule Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;

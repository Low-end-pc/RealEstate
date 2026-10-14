import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

export const HeroSection = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('sell');
  const [searchVal, setSearchVal] = useState('');

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-center pt-28 pb-16 bg-[#090a0f] overflow-hidden">
      {/* Background Architectural Layer with Dark Fade Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="High-Rise Modern Corporate Architecture" 
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        {/* Continuous gradient fade into the subsequent section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/80 via-[#090a0f]/40 to-[#090a0f]" />
      </div>

      {/* Main Content using Fluid Typography */}
      <div className="relative z-10 max-w-5xl mx-auto w-full mt-4">
        <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white/80 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>Premier Property Stewardship</span>
        </div>

        <h1 className="reveal stagger-1 font-serif-luxury fluid-display text-white mb-6 font-light">
          Select Best Home <br />
          <span className="italic font-normal text-[#c5a880]">With Us</span>
        </h1>

        <p className="reveal stagger-2 text-zinc-300 font-light max-w-2xl mx-auto fluid-body-lead mb-10 leading-relaxed px-2">
          Unifying institutional asset management, high-touch luxury care, and algorithmic tenancy dispatch under one sovereign operating system.
        </p>

        {/* Floating Pill Search Bar - Fully Adaptive Widths */}
        <form 
          onSubmit={(e) => { e.preventDefault(); setCurrentPage('residential'); }}
          className="reveal stagger-3 max-w-3xl mx-auto bg-white rounded-2xl md:rounded-full p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] flex flex-col md:flex-row items-center gap-2 border border-white/20 text-left w-full"
        >
          <div className="flex bg-zinc-100 p-1 rounded-full w-full md:w-auto shrink-0 justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('sell')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'sell' ? 'bg-[#090a0f] text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Sell
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rent')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'rent' ? 'bg-[#090a0f] text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Rent
            </button>
          </div>

          <div className="flex-grow flex items-center px-3 w-full gap-2.5 py-1 min-w-0">
            <Search className="w-4 h-4 text-zinc-400 shrink-0" />
            <input 
              type="text" 
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search by city, property ID, or zip..."
              className="w-full text-zinc-900 bg-transparent text-xs sm:text-sm focus:outline-none placeholder:text-zinc-400 font-medium truncate"
            />
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto bg-[#090a0f] hover:bg-[#c5a880] text-white px-7 py-3 rounded-xl md:rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shrink-0 shadow-md cursor-pointer"
          >
            Explore
          </button>
        </form>
      </div>

      {/* Hero Stats Ledger with Fluid Scaling */}
      <div className="reveal stagger-3 relative z-10 w-full max-w-6xl mx-auto mt-14 pt-8 border-t border-white/15">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left text-white">
          <div className="sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-4">
            <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white font-medium mb-0.5 tracking-tight">200,000+</p>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium">Happy Residences</p>
          </div>
          <div className="sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-4">
            <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white font-medium mb-0.5 tracking-tight">6,000+ Ar</p>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium">Reserved Acreage</p>
          </div>
          <div>
            <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white font-medium mb-0.5 tracking-tight">$4.2B+</p>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium">Assets Under Stewardship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

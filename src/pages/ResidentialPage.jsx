import React, { useState } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { POPULAR_RESIDENCES } from '../data/propertiesData';

export default function ResidentialPage({ onSelectProperty }) {
  const [filter, setFilter] = useState('All');

  const filteredProperties = filter === 'All' 
    ? POPULAR_RESIDENCES 
    : POPULAR_RESIDENCES.filter(p => p.type === filter);

  return (
    <div className="bg-[#f7f7f9] text-zinc-950 pb-32 min-h-screen">
      {/* Deep Obsidian Hero Header */}
      <div className="bg-zinc-950 text-white pt-32 pb-20 px-4 sm:px-8 md:px-12 border-b border-zinc-800 mb-16 relative overflow-hidden">
        {/* Ambient warm gold glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                <span className="text-[#c5a880] uppercase tracking-[0.25em] text-[11px] font-bold">
                  Curated Living Environments
                </span>
              </div>
              <h1 className="font-serif-luxury fluid-display font-light text-white leading-tight">
                Residential Portfolios & <br />
                <span className="italic text-[#c5a880]">Architectural Sanctuaries.</span>
              </h1>
              <p className="text-zinc-300 font-light fluid-body-lead max-w-2xl mt-4 leading-relaxed">
                Exclusive villas, sky penthouses, and private estates audited under Aventine's sovereign 140-point stewardship protocol. Every residence guarantees sealed escrow discretion and complete mechanical telemetry.
              </p>
            </div>

            {/* Black Capsule Filter Pills */}
            <div className="flex bg-zinc-900 p-1.5 rounded-full border border-white/15 shadow-2xl shrink-0 self-start md:self-auto overflow-x-auto">
              {['All', 'Villa', 'Penthouse', 'Estate'].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                    filter === item 
                      ? 'bg-[#c5a880] text-zinc-950 font-black shadow-lg shadow-[#c5a880]/20' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Trust Ledger Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-xs uppercase tracking-widest text-zinc-400 font-medium">
            <div>
              <span className="text-white font-serif-luxury text-2xl sm:text-3xl font-light block mb-0.5">7</span>
              <span>Exclusive Sanctuaries</span>
            </div>
            <div>
              <span className="text-[#c5a880] font-serif-luxury text-2xl sm:text-3xl font-light block mb-0.5">140</span>
              <span>Checkpoints Certified</span>
            </div>
            <div>
              <span className="text-white font-serif-luxury text-2xl sm:text-3xl font-light block mb-0.5">100%</span>
              <span>Sovereign NDA Escrow</span>
            </div>
            <div>
              <span className="text-[#c5a880] font-serif-luxury text-2xl sm:text-3xl font-light block mb-0.5">4 Prime</span>
              <span>US Flagship Metros</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Bento Property Grid (Crisp White Luxury Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((p, idx) => (
            <div 
              key={p.id}
              onClick={() => onSelectProperty && onSelectProperty(p)}
              className={`reveal stagger-${(idx % 3) + 1} bg-white text-zinc-950 rounded-2xl p-4 sm:p-5 border border-zinc-200/90 hover:border-[#c5a880] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-md hover:shadow-2xl ${
                idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`overflow-hidden rounded-xl relative mb-4 img-reveal-box ${
                idx === 0 ? 'h-72 lg:h-[440px]' : 'h-52'
              }`}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-zinc-950/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#c5a880] border border-white/10 shadow-lg">
                  {p.tag || p.type}
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectProperty) onSelectProperty(p);
                  }}
                  className="absolute top-4 right-4 bg-zinc-950 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#c5a880] group-hover:text-zinc-950 transition-colors border border-white/10 cursor-pointer"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-end justify-between px-1 pt-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c5a880] block mb-1">{p.type}</span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-zinc-950 font-medium mb-1 group-hover:text-[#c5a880] transition-colors">{p.title}</h3>
                  <p className="text-zinc-500 text-xs font-light">{p.address || p.location}</p>
                </div>
                <div className="text-right shrink-0 pl-2">
                  <p className="font-serif-luxury font-medium text-xl sm:text-2xl text-zinc-950 tracking-tight">{p.price}</p>
                  <p className="text-[11px] text-zinc-500 font-mono">{p.sqft}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 140-Point Residential Quality Guarantee Section (Dark Obsidian Showcase) */}
        <div className="mt-28 mb-20 reveal">
          <div className="bg-gradient-to-b from-zinc-950 to-black text-white rounded-3xl p-8 sm:p-14 border border-zinc-800 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-white/10 gap-6">
              <div>
                <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">
                  Verified Integrity
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white">
                  The Sovereign Residential Standard
                </h2>
              </div>
              <p className="text-zinc-400 text-sm font-light max-w-md">
                Every residence in our portfolio undergoes 140 mechanical, thermal, and security inspections before client presentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6">
                <span className="text-[10px] font-mono text-[#c5a880] bg-[#c5a880]/10 px-2 py-0.5 rounded block w-fit mb-3">36 Checkpoints</span>
                <h4 className="font-serif-luxury text-lg text-white mb-2">Envelope & Shell</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">Thermal infrared leak testing, acoustic double-glazing integrity, and seismic shear tie-down verification.</p>
              </div>

              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6">
                <span className="text-[10px] font-mono text-[#c5a880] bg-[#c5a880]/10 px-2 py-0.5 rounded block w-fit mb-3">42 Checkpoints</span>
                <h4 className="font-serif-luxury text-lg text-white mb-2">HVAC & Energy</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">HEPA filtration, variable refrigerant flow calibration, and microgrid solar storage backup audits.</p>
              </div>

              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6">
                <span className="text-[10px] font-mono text-[#c5a880] bg-[#c5a880]/10 px-2 py-0.5 rounded block w-fit mb-3">34 Checkpoints</span>
                <h4 className="font-serif-luxury text-lg text-white mb-2">Terroir & Water</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">Infinity pool pH telemetry, anti-slip travertine sealing, greywater reclamation, and arborist root audits.</p>
              </div>

              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6">
                <span className="text-[10px] font-mono text-[#c5a880] bg-[#c5a880]/10 px-2 py-0.5 rounded block w-fit mb-3">28 Checkpoints</span>
                <h4 className="font-serif-luxury text-lg text-white mb-2">Discretion & Escrow</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">Biometric access logs scrub, perimeter laser intrusion tests, vendor NDAs, and corporate trust compliance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Private Viewing Consultation Invitation */}
        <div className="max-w-5xl mx-auto text-center reveal">
          <div className="bg-zinc-950 text-white rounded-3xl p-10 sm:p-16 border border-[#c5a880]/30 shadow-2xl relative overflow-hidden">
            <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-3 block">Bespoke Acquisition</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white mb-6">
              Schedule Confidential Residence Onboarding
            </h2>
            <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto mb-8">
              Connect directly with an executive partner to arrange sealed private viewings, escrow verification, and personalized architectural dossier delivery.
            </p>
            <button 
              onClick={() => onSelectProperty ? onSelectProperty(POPULAR_RESIDENCES[0]) : null}
              className="btn-gold-ring px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest font-semibold"
            >
              Explore Featured Residence Walkthrough
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

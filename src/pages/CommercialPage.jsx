import React, { useState } from 'react';
import { Building2, Check, ArrowUpRight } from 'lucide-react';
import { commercialProperties, commercialCapabilities } from '../data/commercialData';

export default function CommercialPage({ setCurrentPage }) {
  const [selectedRsf, setSelectedRsf] = useState(35000);

  // Dynamic calculations based on selected RSF
  const estimatedHeadcount = Math.round(selectedRsf / 135);
  const estimatedCamSavings = Math.round(selectedRsf * 6.8);
  const estimatedEnergyOffsets = (selectedRsf * 0.042).toFixed(1);

  return (
    <div className="bg-[#f7f7f9] text-zinc-950 pb-32">
      {/* Deep Obsidian Hero Pavilion */}
      <div className="bg-zinc-950 text-white pt-32 pb-20 px-4 sm:px-8 md:px-12 border-b border-zinc-800 mb-20 relative overflow-hidden">
        {/* Subtle architectural ambient light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="text-[#c5a880] uppercase tracking-[0.25em] text-[11px] font-bold">
                Institutional Asset Governance & Facilities
              </span>
            </div>

            <h1 className="font-serif-luxury fluid-display font-light text-white mb-6 leading-tight">
              Class-A Floor Plates & <br />
              <span className="italic text-[#c5a880]">Enterprise Stewardship.</span>
            </h1>

            <p className="text-zinc-300 font-light fluid-body-lead mb-8 leading-relaxed">
              Aventine manages premier commercial towers, innovation campuses, and high-density creative floor plates with rigorous technological oversight, automated CAM accounting, and mission-critical facilities engineering.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="btn-editorial-dark bg-[#c5a880] text-zinc-950 hover:bg-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-xl"
              >
                Submit Institutional RFP
              </button>
              <button 
                onClick={() => setCurrentPage('pricing')}
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 text-white hover:border-[#c5a880] hover:text-[#c5a880] transition-all shadow-sm"
              >
                View Commercial Tiers
              </button>
            </div>
          </div>

          <div className="reveal-right relative">
            <div className="img-reveal-box rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern Corporate Atrium"
                className="w-full h-[420px] sm:h-[520px] object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-700 p-5 rounded-xl shadow-2xl hidden sm:block max-w-xs text-white">
              <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block mb-1">Corporate Portfolio</span>
              <p className="text-xs font-serif-luxury text-zinc-200 font-medium">Over 3,800,000 RSF under active engineering stewardship.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Commercial Key Metrics Banner (Obsidian Anchor) */}
        <div className="bg-black text-white rounded-3xl p-10 sm:p-14 mb-28 border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="reveal stagger-1">
              <p className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#c5a880] mb-2">3.8M+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">RSF Class-A Managed</p>
            </div>
            <div className="reveal stagger-2">
              <p className="font-serif-luxury text-4xl sm:text-5xl font-light text-white mb-2">99.98%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Critical Uptime Guarantee</p>
            </div>
            <div className="reveal stagger-3">
              <p className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#c5a880] mb-2">24%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Avg. CAM Cost Reduction</p>
            </div>
            <div className="reveal stagger-4">
              <p className="font-serif-luxury text-4xl sm:text-5xl font-light text-white mb-2">Zero-Net</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">ESG Scope 1-3 Compliance</p>
            </div>
          </div>
        </div>

        {/* Available Commercial Flagship Assets (Deep Black Luxury Cards) */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-300 gap-4 reveal">
            <div>
              <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">Available Floor Plates</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-zinc-950 font-light">Institutional Flagship Assets</h2>
            </div>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-md font-light">
              Direct lease inquiries and tenant representation handled under strict NDA protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commercialProperties.map((prop, idx) => (
              <div 
                key={prop.id}
                className={`reveal stagger-${idx + 1} bg-white text-zinc-950 rounded-2xl border border-zinc-200/90 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#c5a880] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={prop.image} 
                      alt={prop.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
                      <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold">{prop.leed}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-mono text-[#c5a880] block mb-1">{prop.location}</span>
                    <h3 className="font-serif-luxury text-2xl font-medium text-zinc-950 mb-3 group-hover:text-[#c5a880] transition-colors">{prop.name}</h3>
                    
                    <div className="flex items-center gap-3 py-3 border-y border-zinc-200 text-xs font-medium text-zinc-700 mb-4">
                      <span>{prop.rsf}</span>
                      <span className="text-[#c5a880]">•</span>
                      <span>{prop.floorPlate}</span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-zinc-600 font-light mb-6">
                      {prop.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest border border-zinc-300 text-zinc-950 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Prospectus</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Space & CAM Estimator (Deep Obsidian Glass Monolith) */}
        <div className="mb-32 reveal">
          <div className="bg-zinc-950 text-white rounded-3xl border border-zinc-800 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">Dynamic Modeling</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light mb-3">
                Commercial Floor Plate & CAM Savings Estimator
              </h2>
              <p className="text-zinc-400 text-sm font-light">
                Select your enterprise square footage requirements to model projected headcount density, HVAC telemetry optimization, and operational expense savings under Aventine stewardship.
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[15000, 35000, 75000, 120000].map((rsf) => (
                <button
                  key={rsf}
                  onClick={() => setSelectedRsf(rsf)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    selectedRsf === rsf 
                      ? 'bg-[#c5a880] text-zinc-950 font-black shadow-lg shadow-[#c5a880]/30' 
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-white/10'
                  }`}
                >
                  {rsf.toLocaleString()} RSF
                </button>
              ))}
            </div>

            {/* Calculated Results Cards (Deep Obsidian) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
              <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-1">Target Headcount</span>
                <p className="font-serif-luxury text-4xl text-white font-medium mb-1">~{estimatedHeadcount} Desks</p>
                <span className="text-[11px] text-zinc-500">At standard 135 RSF/seat planning density</span>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-1">Annual CAM Savings</span>
                <p className="font-serif-luxury text-4xl text-[#c5a880] font-medium mb-1">${estimatedCamSavings.toLocaleString()}</p>
                <span className="text-[11px] text-zinc-500">Through BAS submetering & centralized vendor bidding</span>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-1">Carbon Offset Index</span>
                <p className="font-serif-luxury text-4xl text-white font-medium mb-1">{estimatedEnergyOffsets} Tons/Yr</p>
                <span className="text-[11px] text-zinc-500">ASHRAE 90.1 chilled-beam economizer telemetry</span>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="btn-gold-ring font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest"
              >
                Schedule Private Floor Plate Walkthrough
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Commercial Stewardship (Crisp White Luxury Cards) */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">Institutional Standards</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-zinc-950 mb-4">Four Disciplines of Commercial Care</h2>
            <p className="text-zinc-600 text-sm font-light">Every square foot under Aventine is continuously audited against strict corporate tenant SLAs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialCapabilities.map((item, idx) => (
              <div key={item.num} className={`reveal stagger-${idx + 1}`}>
                <div className="smooth-luxury-card bg-white text-zinc-950 border border-zinc-200/90 p-8 sm:p-10 rounded-2xl group shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="font-serif-luxury text-4xl sm:text-5xl text-[#c5a880] font-light block mb-4">{item.num}</span>
                    <h3 className="font-serif-luxury text-2xl font-medium text-zinc-950 mb-3 group-hover:text-[#c5a880] transition-colors">{item.title}</h3>
                    <p className="text-zinc-600 text-sm font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Consultation */}
        <div className="max-w-5xl mx-auto text-center reveal">
          <div className="bg-gradient-to-r from-black via-zinc-950 to-black rounded-3xl p-10 sm:p-16 text-white border border-[#c5a880]/30 shadow-2xl relative overflow-hidden">
            <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-3 block">Direct Partner Advisory</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white mb-6">
              Empower Your Commercial Floor Plates with Aventine
            </h2>
            <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto mb-8">
              Connect directly with our institutional asset directors to review available floor plates, customized CAM reconciliations, or confidential corporate acquisitions.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="btn-gold-ring px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest font-semibold"
            >
              Initiate Corporate Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPage({ setCurrentPage }) {
  return (
    <div className="bg-zinc-50 text-zinc-950 pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 text-center">
        <div className="reveal">
          <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">Investment</span>
          <h1 className="font-serif-luxury fluid-heading-1 font-light mb-4">Transparent Stewardship Plans</h1>
          <p className="text-zinc-600 font-light fluid-body-lead max-w-2xl mx-auto mb-14">
            No convoluted agreements. Pure transparency backed by licensed asset engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="reveal stagger-1 bg-white rounded-2xl p-7 border border-zinc-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <h3 className="font-serif-luxury text-2xl font-medium mb-2">Property Management</h3>
              <p className="text-xs text-zinc-600 mb-6 font-light">Comprehensive oversight for investment portfolios.</p>
              <p className="text-4xl font-light mb-8">$220 <span className="text-xs text-zinc-500">/mo</span></p>
              <ul className="space-y-3 text-sm text-zinc-700 font-light border-t pt-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Full Leasing & Marketing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Tenant Background Checks</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Escrow Rent Collection</li>
              </ul>
            </div>
            <button onClick={() => setCurrentPage('contact')} className="btn-editorial-dark w-full mt-8 py-3.5 border border-zinc-950 text-xs font-bold uppercase tracking-widest text-zinc-950 rounded-sm cursor-pointer">Engage Aventine</button>
          </div>

          <div className="reveal stagger-2 bg-[#090a0f] text-white rounded-2xl p-7 shadow-2xl ring-2 ring-[#c5a880] flex flex-col justify-between md:-translate-y-2 hover:shadow-[0_20px_50px_rgba(197,168,128,0.2)] transition-all">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-serif-luxury text-2xl font-medium">Home Watch</h3>
                <span className="bg-[#c5a880] text-[#090a0f] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">Recommended</span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 font-light">Discreet vigilance for luxury secondary estates.</p>
              <p className="text-4xl font-light mb-8">$936 <span className="text-xs text-zinc-400">/mo</span></p>
              <ul className="space-y-3 text-sm text-zinc-300 font-light border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Bi-Weekly GPS Audits</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Seasonal Freeze & Wildfire Prep</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Licensed Contractor Escorts</li>
              </ul>
            </div>
            <button onClick={() => setCurrentPage('contact')} className="btn-editorial w-full mt-8 py-3.5 bg-[#c5a880] text-[#090a0f] text-xs font-bold uppercase tracking-widest border border-[#c5a880] rounded-sm cursor-pointer">Engage Aventine</button>
          </div>

          <div className="reveal stagger-3 bg-white rounded-2xl p-7 border border-zinc-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <h3 className="font-serif-luxury text-2xl font-medium mb-2">ADU Compliance</h3>
              <p className="text-xs text-zinc-600 mb-6 font-light">Enterprise zoning compliance & utility allocation.</p>
              <p className="text-4xl font-light mb-8">$1,620 <span className="text-xs text-zinc-500">/mo</span></p>
              <ul className="space-y-3 text-sm text-zinc-700 font-light border-t pt-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Legal ADU Zoning Certification</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Smart Utility Cost Allocation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#c5a880]" /> Custom Escrow Boundaries</li>
              </ul>
            </div>
            <button onClick={() => setCurrentPage('contact')} className="btn-editorial-dark w-full mt-8 py-3.5 border border-zinc-950 text-xs font-bold uppercase tracking-widest text-zinc-950 rounded-sm cursor-pointer">Engage Aventine</button>
          </div>
        </div>
      </div>
    </div>
  );
}

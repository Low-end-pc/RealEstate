import React from 'react';
import { ChevronRight, Check } from 'lucide-react';

export const EditorialSection = ({ setCurrentPage }) => {
  return (
    <section className="bg-zinc-50 text-zinc-950 py-24 sm:py-32 px-4 sm:px-8 md:px-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        
        {/* Story 1: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal-left order-2 lg:order-1">
            <span className="text-[#c5a880] font-bold text-xs uppercase tracking-[0.25em] mb-3 block">
              Boutique Precision
            </span>
            <h2 className="font-serif-luxury fluid-heading-1 font-light text-zinc-950 mb-6">
              A Higher Standard of Property Care & Asset Management.
            </h2>
            <p className="text-zinc-600 font-light fluid-body-lead mb-8">
              We combine local North Bay presence with institutional software rigor. Think of our firm as your personal advisory: on-the-ground property inspections, proactive mechanical audits, and vendor management without friction.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="btn-editorial-dark inline-flex items-center gap-2 border border-zinc-950 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-zinc-950 rounded-sm cursor-pointer"
            >
              <span>Tell Your Story</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="reveal-right order-1 lg:order-2 img-reveal-box rounded-sm shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury California Villa with Pool" 
              className="w-full h-[380px] sm:h-[480px] object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 max-w-xs shadow-lg border-l-2 border-zinc-950 hidden sm:block">
              <p className="text-xs font-serif-luxury italic text-zinc-700">"Every residence audited against 140 architectural safety checkpoints."</p>
            </div>
          </div>
        </div>

        {/* Story 2: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal-left img-reveal-box rounded-sm shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
              alt="Minimalist Modern Architecture" 
              className="w-full h-[380px] sm:h-[480px] object-cover"
            />
          </div>

          <div className="reveal-right lg:pl-6">
            <span className="text-[#c5a880] font-bold text-xs uppercase tracking-[0.25em] mb-3 block">
              Discretion & Privacy
            </span>
            <h2 className="font-serif-luxury fluid-heading-1 font-light text-zinc-950 mb-6">
              Local. Trustworthy. Completely Discrete.
            </h2>
            <p className="text-zinc-600 font-light fluid-body-lead mb-8">
              Guaranteed confidentiality is our hallmark. High-value estates require meticulous vendor vetting, sealed non-disclosure covenants, and encrypted ledger dispatching.
            </p>

            <ul className="space-y-3.5 mb-10 border-t border-zinc-200 pt-6">
              <li className="flex items-center justify-between text-sm py-1">
                <span className="font-medium text-zinc-800">Routine GPS-Verified Checkpoints</span>
                <Check className="w-4 h-4 text-[#c5a880]" />
              </li>
              <li className="flex items-center justify-between text-sm py-1">
                <span className="font-medium text-zinc-800">Storm & Wildfire Seasonal Prep</span>
                <Check className="w-4 h-4 text-[#c5a880]" />
              </li>
              <li className="flex items-center justify-between text-sm py-1">
                <span className="font-medium text-zinc-800">Licensed Vendor Escort & Supervision</span>
                <Check className="w-4 h-4 text-[#c5a880]" />
              </li>
            </ul>

            <button 
              onClick={() => setCurrentPage('vision')}
              className="btn-editorial-dark bg-zinc-950 text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest rounded-sm cursor-pointer"
            >
              Explore Our Principles
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialSection;

import React from 'react';
import { Sparkles, ShieldCheck, Check } from 'lucide-react';

export const VisionPage = ({ setCurrentPage }) => {
  const pillars = [
    {
      num: "01",
      title: "Sovereign Discretion",
      subtitle: "Absolute Privacy Protocols",
      description: "We safeguard owner identities, corporate trusts, and private escrows with zero-knowledge operational protocols. Every vendor engagement and lease agreement is governed under sealed non-disclosure agreements."
    },
    {
      num: "02",
      title: "Predictive Engineering",
      subtitle: "Sub-Millimeter Telemetry",
      description: "Preventative stewardship replaces reactive repair. Continuous IoT vibration sensors, thermal imaging audits, and acoustic monitoring detect mechanical anomalies weeks before failure occurs."
    },
    {
      num: "03",
      title: "Material Craft & Heritage",
      subtitle: "Museum-Grade Preservation",
      description: "From custom fluted white oak to bookmatched Calacatta marble, we employ dedicated artisan conservators who specialize in restoring and safeguarding irreplaceable architectural finishes."
    },
    {
      num: "04",
      title: "Algorithmic Telemetry",
      subtitle: "Unified Portfolio Ledger",
      description: "Reconcile municipal submetering, solar photovoltaic generation, graywater recovery, and ESG compliance through a single encrypted glass dashboard, accessible only by designated family office delegates."
    }
  ];

  const inspectionTiers = [
    {
      title: "Envelope & Structural Shell",
      count: "36 Checkpoints",
      points: [
        "Infrared thermal envelope leak detection",
        "Roof waterproofing membrane integrity",
        "Acoustic double-glazing seal verification",
        "Seismic tie-downs & shear wall audit"
      ]
    },
    {
      title: "Mechanical, Electrical & HVAC",
      count: "42 Checkpoints",
      points: [
        "HEPA filtration & negative air pressure testing",
        "Variable refrigerant flow (VRF) calibration",
        "Automated generator microgrid cutover load test",
        "Smart architectural Lutron bus diagnostics"
      ]
    },
    {
      title: "Private Terroir & Water Systems",
      count: "34 Checkpoints",
      points: [
        "Saline infinity pool pH & salinity sensors",
        "Travertine & basalt anti-slip surface sealing",
        "Arborist-guided root boundary surveillance",
        "Greywater reclamation & smart drip irrigation"
      ]
    },
    {
      title: "Security & Legal Escrow Matrix",
      count: "28 Checkpoints",
      points: [
        "Biometric access control access log scrub",
        "Encrypted perimeter CCTV laser fence test",
        "Vendor NDA & insurance credential audit",
        "Annual municipal compliance certification"
      ]
    }
  ];

  const leadership = [
    {
      name: "Elena Rostova",
      role: "Managing Principal & Chief Curator",
      bio: "Former lead architectural conservator at Vesper Trust, Elena oversees physical asset integrity and bespoke client stewardship across our North American holdings.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Marcus Vance, PE",
      role: "Director of Structural Engineering",
      bio: "With over 18 years in high-rise structural diagnostics, Marcus directs Aventine's predictive maintenance protocols and advanced IoT sensor deployments.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Dr. Julian Thorne",
      role: "Head of ESG Telemetry & Systems",
      bio: "Specializing in microgrid engineering and zero-net carbon operations, Julian ensures every managed asset satisfies rigorous global sustainability standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#f7f7f9] text-zinc-950 pt-28 pb-32 overflow-hidden">
      {/* Hero Manifesto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 text-center mb-24">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="text-[#c5a880] uppercase tracking-[0.25em] text-[11px] font-bold">
              Corporate Philosophy & Stewardship Manifesto
            </span>
          </div>

          <h1 className="font-serif-luxury fluid-display font-light mb-6 tracking-tight text-zinc-950">
            Enduring Architectural <br />
            <span className="italic text-[#c5a880]">Stewardship.</span>
          </h1>

          <p className="text-zinc-600 font-light fluid-body-lead max-w-3xl mx-auto mb-10 leading-relaxed">
            Aventine was founded on a singular conviction: extraordinary architecture demands more than conventional property management. It requires technological rigor, preventative engineering, and unyielding discretion to safeguard physical wealth across generational horizons.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setCurrentPage && setCurrentPage('residential')}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-950 text-white hover:bg-[#c5a880] hover:text-zinc-950 transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(197,168,128,0.3)] cursor-pointer"
            >
              Explore Portfolio
            </button>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-950 transition-all shadow-sm cursor-pointer"
            >
              Engage Advisory Desk
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Banner (High-Contrast Black Anchor) */}
      <div className="bg-zinc-950 text-white py-14 mb-28 border-y border-zinc-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="reveal stagger-1">
              <p className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#c5a880] mb-2">$4.2B+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Private Assets Under Care</p>
            </div>
            <div className="reveal stagger-2">
              <p className="font-serif-luxury text-4xl sm:text-5xl font-light text-white mb-2">140</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Checkpoint Inspections</p>
            </div>
            <div className="reveal stagger-3">
              <p className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#c5a880] mb-2">99.4%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">UHNW Retainer Renewal</p>
            </div>
            <div className="reveal stagger-4">
              <p className="font-serif-luxury text-4xl sm:text-5xl font-light text-white mb-2">0</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Public Disclosures or Breaches</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Architectural Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-32">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">Foundational Standards</span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-zinc-950 mb-4">The Four Pillars of Aventine</h2>
          <p className="text-zinc-600 text-sm font-light">Each estate under our purview is managed through a multi-layered matrix of precision engineering and absolute privacy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={pillar.num} className={`reveal stagger-${(idx % 4) + 1}`}>
              <div className="smooth-luxury-card bg-white border border-zinc-200/90 p-8 sm:p-10 rounded-2xl relative overflow-hidden group shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-serif-luxury text-4xl sm:text-5xl text-[#c5a880] font-light">{pillar.num}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200 group-hover:border-[#c5a880]/30 group-hover:text-[#c5a880] transition-colors">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-medium text-zinc-950 mb-3 group-hover:text-[#c5a880] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-600 text-sm font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 140-Point Protocol Breakdown (Dark Architectural Module) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-32">
        <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-14 text-white shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-white/10 gap-6">
            <div>
              <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">Proprietary Methodology</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white">
                The 140-Point Stewardship Protocol
              </h2>
            </div>
            <p className="text-zinc-400 text-sm font-light max-w-md">
              Every quarterly audit follows an uncompromising mechanical, structural, and legal checklist before receiving Aventine Sovereign Certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionTiers.map((tier, idx) => (
              <div key={tier.title} className={`reveal stagger-${idx + 1} bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
                    <span className="text-[10px] font-mono text-[#c5a880] bg-[#c5a880]/10 px-2 py-0.5 rounded">{tier.count}</span>
                  </div>
                  <h4 className="font-serif-luxury text-lg font-medium text-white mb-4">{tier.title}</h4>
                  <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
                    {tier.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership & Advisory Desk */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">Direct Governance</span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-zinc-950 mb-4">Executive Leadership</h2>
          <p className="text-zinc-600 text-sm font-light">Guiding asset preservation with decades of master engineering and fiduciary care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, idx) => (
            <div key={leader.name} className={`reveal stagger-${idx + 1} bg-white border border-zinc-200/90 rounded-2xl overflow-hidden group hover:border-[#c5a880] hover:shadow-xl transition-all shadow-sm`}>
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif-luxury text-xl font-medium text-zinc-950 mb-1">{leader.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold mb-3">{leader.role}</p>
                <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center reveal">
        <div className="bg-gradient-to-r from-zinc-950 via-black to-zinc-950 border border-[#c5a880]/30 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none"></div>
          <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-3 block">Private Consultation</span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white mb-6">
            Preserve Your Architectural Legacy with Aventine
          </h2>
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto mb-8">
            Connect directly with an executive partner to initiate confidential onboarding for residential estates or commercial holdings.
          </p>
          <button 
            onClick={() => setCurrentPage && setCurrentPage('contact')}
            className="btn-gold-ring px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest font-sans-clean font-semibold cursor-pointer"
          >
            Schedule Advisory Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;

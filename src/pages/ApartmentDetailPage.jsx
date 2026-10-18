import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { POPULAR_RESIDENCES } from '../data/propertiesData';

export default function ApartmentDetailPage({ property, onBack, onSelectProperty, onScheduleVisit }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setActiveIdx(0);
  }, [property]);

  if (!property) return null;

  const galleryItems = (property.gallery && property.gallery.length > 0)
    ? property.gallery.map((item, idx) => {
        if (typeof item === 'string') {
          return {
            id: `room-${idx}`,
            title: `Area ${idx + 1}`,
            area: 'Residence Area',
            url: item,
            description: 'Architectural space within the residence.'
          };
        }
        return item;
      })
    : [{
        id: 'exterior',
        title: 'Exterior Facade',
        area: 'Grounds & Architecture',
        url: property.image,
        description: property.description
      }];

  const currentRoom = galleryItems[activeIdx] || galleryItems[0];
  const otherProperties = POPULAR_RESIDENCES.filter((p) => p.id !== property.id);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % galleryItems.length);
  };

  const handleSelectRoom = (idx) => {
    setActiveIdx(idx);
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={heroRef} className="bg-[#090a0f] text-white pt-28 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Navigation Breadcrumb with Ultra-Visible Back Button */}
        <div className="reveal flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#090a0f] bg-white hover:bg-[#c5a880] hover:text-white border border-white shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5" />
            <span>← Back to Residences</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 text-[#c5a880] rounded-full border border-white/10">
              {property.tag || property.type}
            </span>
            <span className="text-xl sm:text-2xl font-serif-luxury font-medium text-white">
              {property.price}
            </span>
          </div>
        </div>

        {/* Room Navigation Pills (Quick Area Switcher) */}
        <div className="reveal mb-6">
          <div className="flex items-center justify-between gap-4 mb-2.5">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Distinct Rooms & Spaces ({galleryItems.length})</span>
            </span>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">
              Active: {currentRoom.title}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 pb-2">
            {galleryItems.map((room, idx) => (
              <button
                key={room.id || idx}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider shrink-0 transition-all duration-200 flex items-center gap-1.5 ${
                  activeIdx === idx
                    ? 'bg-[#c5a880] text-zinc-950 font-bold shadow-lg shadow-[#c5a880]/20'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{room.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeIdx === idx ? 'bg-zinc-950/20 text-zinc-950' : 'bg-white/10 text-zinc-400'
                }`}>
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Property Hero Gallery */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Main Large Image Display */}
          <div className="lg:col-span-2 h-[420px] sm:h-[540px] rounded-2xl overflow-hidden border border-white/10 relative group bg-zinc-950 shadow-2xl">
            <img 
              src={currentRoom.url} 
              alt={`${property.title} - ${currentRoom.title}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="bg-[#090a0f]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-white border border-white/10 flex items-center gap-1.5 pointer-events-auto shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{property.title} • {currentRoom.area}</span>
              </div>
              <div className="bg-[#090a0f]/85 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-mono font-medium text-white border border-white/10 pointer-events-auto shadow-lg">
                {activeIdx + 1} / {galleryItems.length}
              </div>
            </div>

            {/* Prev / Next Controls */}
            <button 
              onClick={handlePrev}
              aria-label="Previous Room"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#c5a880] text-white hover:text-zinc-950 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 shadow-xl opacity-80 group-hover:opacity-100"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next Room"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#c5a880] text-white hover:text-zinc-950 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 shadow-xl opacity-80 group-hover:opacity-100"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Bottom Room Caption Gradient */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-transparent pt-12 pb-5 px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block mb-1">
                    {currentRoom.area}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-white">
                    {currentRoom.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm font-light max-w-xl line-clamp-2 mt-1">
                    {currentRoom.description}
                  </p>
                </div>
                
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5 shrink-0 pt-2 sm:pt-0">
                  {galleryItems.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => { e.stopPropagation(); setActiveIdx(dotIdx); }}
                      className={`h-1.5 rounded-full transition-all ${
                        activeIdx === dotIdx ? 'w-6 bg-[#c5a880]' : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Go to room ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails Grid (All 6 Rooms) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 h-full">
            {galleryItems.map((room, i) => (
              <div 
                key={room.id || i}
                onClick={() => setActiveIdx(i)}
                className={`h-28 sm:h-36 lg:h-[168px] rounded-xl overflow-hidden border cursor-pointer relative group transition-all duration-300 ${
                  activeIdx === i 
                    ? 'border-[#c5a880] ring-2 ring-[#c5a880]/60 shadow-lg' 
                    : 'border-white/10 hover:border-white/40'
                }`}
              >
                <img 
                  src={room.url} 
                  alt={`${property.title} - ${room.title}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-2.5">
                  <span className="text-[11px] font-bold text-white/95 truncate">
                    {room.title}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#c5a880] font-medium truncate">
                    {room.area}
                  </span>
                </div>

                {activeIdx === i && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#c5a880] ring-4 ring-[#c5a880]/40" />
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Property Information & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left 2 Cols: Title, Details, Specs, Amenities */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-bold mb-2">
                <span>{property.type}</span>
                <span>•</span>
                <span>{property.period || 'Private Listing'}</span>
              </div>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white mb-4">
                {property.title}
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base flex items-center gap-2 font-light">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{property.location || property.address}</span>
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="text-center sm:text-left border-r border-white/10 pr-2">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Bedrooms</span>
                <span className="font-serif-luxury text-xl sm:text-2xl text-white font-medium">{property.beds || 4} Beds</span>
              </div>
              <div className="text-center sm:text-left sm:border-r border-white/10 sm:pr-2">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Bathrooms</span>
                <span className="font-serif-luxury text-xl sm:text-2xl text-white font-medium">{property.baths || 3} Baths</span>
              </div>
              <div className="text-center sm:text-left border-r border-white/10 pr-2 mt-4 sm:mt-0">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Total Space</span>
                <span className="font-serif-luxury text-xl sm:text-2xl text-white font-medium">{property.sqft || '3,850 sq ft'}</span>
              </div>
              <div className="text-center sm:text-left mt-4 sm:mt-0">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Asset Status</span>
                <span className="font-serif-luxury text-xl sm:text-2xl text-[#c5a880] font-medium">Verified</span>
              </div>
            </div>

            {/* Architectural Overview */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="font-serif-luxury text-2xl text-white mb-4">Architectural Overview</h2>
              <p className="text-zinc-300 font-light text-base leading-relaxed">
                {property.description || "Designed with sovereign architectural precision, this residence harmonizes sustainable building engineering with bespoke tactile materiality. Complete mechanical inspection logs, energy telemetry benchmarks, and legal boundary surveys are certified under Aventine's stewardship framework."}
              </p>
            </div>

            {/* Key Amenities Grid */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="font-serif-luxury text-2xl text-white mb-6">Stewardship & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(property.amenities || [
                  "Private Infinity Basin & Sun Deck",
                  "Sub-Zero & Wolf Culinary Suite",
                  "Autonomous Geothermal HVAC",
                  "Biometric Perimeter & GPS Guard Dispatch",
                  "Integrated Smart Lighting by Lutron",
                  "Custom Italian Terrazzo Floors"
                ]).map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                    <span className="text-xs sm:text-sm text-zinc-300 font-light">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Col: Booking & Advisory Card */}
          <div className="sticky top-28 bg-zinc-900/90 border border-white/15 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-xl space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 block mb-1">Acquisition / Lease</span>
              <p className="font-serif-luxury text-3xl sm:text-4xl text-white font-medium">{property.price}</p>
              <span className="text-xs text-[#c5a880] font-medium">{property.period || 'Est. Valuation'}</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-zinc-300">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Escrow Boundary:</span>
                <span className="font-medium text-white">Direct Advisory</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Inspection Status:</span>
                <span className="font-medium text-[#c5a880]">140 Checkpoints Passed</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Confidentiality:</span>
                <span className="font-medium text-white">Sealed NDA</span>
              </div>
            </div>

            <button 
              onClick={onScheduleVisit}
              className="btn-editorial w-full bg-white text-[#090a0f] py-4 rounded-lg text-xs font-bold uppercase tracking-widest border border-white shadow-xl hover:bg-[#c5a880] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Private Visit</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button 
              onClick={onBack}
              className="w-full py-3 text-xs uppercase tracking-widest font-semibold border border-white/20 text-zinc-300 hover:text-white hover:border-white/40 rounded-lg transition-colors cursor-pointer"
            >
              Return to Catalog
            </button>

            <div className="border-t border-white/10 pt-4 text-center">
              <p className="text-[11px] text-zinc-400">Direct Partner Desk: <span className="text-white font-mono">+1 (415) 890-4420</span></p>
            </div>
          </div>

        </div>

        {/* Room-by-Room Architectural Walkthrough Showcase Grid */}
        <div className="border-t border-white/10 pt-16 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-2 block">
                Interior & Exterior Catalog
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
                Room-by-Room Architectural Tour
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-light">
              Detailed inspection of every distinct living volume within {property.title}. Click any area to view in high definition above.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((room, idx) => (
              <div 
                key={room.id || idx}
                onClick={() => handleSelectRoom(idx)}
                className={`bg-zinc-900/60 rounded-2xl overflow-hidden border transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                  activeIdx === idx ? 'border-[#c5a880] ring-2 ring-[#c5a880]/50 shadow-xl' : 'border-white/10 hover:border-white/30 hover:-translate-y-1'
                }`}
              >
                <div className="h-56 overflow-hidden relative img-reveal-box">
                  <img 
                    src={room.url} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#090a0f]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#c5a880] border border-white/10">
                    {room.area}
                  </span>
                  {activeIdx === idx && (
                    <span className="absolute top-3 right-3 bg-[#c5a880] text-zinc-950 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
                      Active In Gallery
                    </span>
                  )}
                </div>
                
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-xl text-white font-medium mb-2 group-hover:text-[#c5a880] transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light mb-4">
                      {room.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-zinc-300">
                    <span className="text-[#c5a880] font-medium flex items-center gap-1 group-hover:underline">
                      <span>Focus on This Room</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-zinc-500 font-mono text-[11px]">0{idx + 1} / 0{galleryItems.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Curated Residences */}
        {otherProperties.length > 0 && (
          <div className="border-t border-white/10 pt-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[#c5a880] text-xs uppercase tracking-widest font-bold mb-1">More Listings</p>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">Similar Featured Residences</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProperties.slice(0, 3).map((item) => (
                <div 
                  key={item.id}
                  onClick={() => onSelectProperty(item)}
                  className="bg-zinc-900/70 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#c5a880]/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <span className="absolute top-3 left-3 bg-[#090a0f]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                      {item.tag || item.type}
                    </span>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif-luxury text-lg text-white font-medium group-hover:text-[#c5a880] transition-colors">{item.title}</h4>
                    <p className="text-zinc-400 text-xs font-light mb-3 truncate">{item.location || item.address}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                      <span className="text-base font-semibold text-white">{item.price}</span>
                      <span className="text-xs text-zinc-400">{item.sqft}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

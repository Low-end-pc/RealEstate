import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { POPULAR_RESIDENCES } from '../../data/propertiesData';

export const PopularResidencesSlider = ({ setCurrentPage, onSelectProperty }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % POPULAR_RESIDENCES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + POPULAR_RESIDENCES.length) % POPULAR_RESIDENCES.length);
  };

  return (
    <section className="bg-[#090a0f] text-white py-24 px-4 sm:px-8 md:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-[#c5a880] tracking-[0.25em] uppercase text-xs font-bold mb-2">Curated Listings</p>
            <h2 className="font-serif-luxury fluid-heading-1 font-light">Popular Residences</h2>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#090a0f] transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#090a0f] transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Grid with Reveal and Staggering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_RESIDENCES.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => onSelectProperty ? onSelectProperty(item) : setCurrentPage('residential')}
              className={`reveal stagger-${(idx % 3) + 1} bg-zinc-900/70 rounded-2xl overflow-hidden border border-zinc-800 group hover:border-[#c5a880]/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col cursor-pointer ${
                idx === currentIndex ? 'ring-1 ring-[#c5a880]' : ''
              }`}
            >
              <div className="h-60 overflow-hidden relative img-reveal-box">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3.5 left-3.5 bg-[#090a0f]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                  {item.tag}
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectProperty) onSelectProperty(item);
                    else setCurrentPage('residential');
                  }}
                  className="absolute top-3.5 right-3.5 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-[#090a0f] cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif-luxury text-xl font-medium mb-1 group-hover:text-[#c5a880] transition-colors">{item.title}</h3>
                  <p className="text-zinc-400 text-xs font-light mb-4 flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>
                </div>

                <div className="pt-3.5 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold tracking-tight">{item.price}</span>
                    <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">{item.period}</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-zinc-800 rounded text-zinc-300 font-medium">
                    {item.sqft}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularResidencesSlider;

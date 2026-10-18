import React, { useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { POPULAR_RESIDENCES } from '../../data/propertiesData';

export const PopularResidencesSlider = ({ setCurrentPage, onSelectProperty }) => {
  const sliderRef = useRef(null);
  const drag = useRef({
    isDown: false,
    moved: false,
    startX: 0,
    startScroll: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    pendingX: null,
    rafId: null,
    momentumId: null,
  });

  // Arrow buttons: scroll exactly one card, loop at the ends
  const scrollByCard = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const firstCard = slider.firstElementChild;
    const gap = parseFloat(getComputedStyle(slider).columnGap) || 24;
    const step = firstCard ? firstCard.getBoundingClientRect().width + gap : 400;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    let target = slider.scrollLeft + direction * step;
    if (direction > 0 && slider.scrollLeft >= maxScroll - 5) target = 0;
    if (direction < 0 && slider.scrollLeft <= 5) target = maxScroll;

    slider.scrollTo({ left: target, behavior: 'smooth' });
  };

  const applyScroll = useCallback(() => {
    const d = drag.current;
    const slider = sliderRef.current;
    if (slider && d.pendingX !== null) {
      slider.scrollLeft = d.startScroll - (d.pendingX - d.startX);
      d.pendingX = null;
    }
    d.rafId = null;
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    const d = drag.current;
    if (!slider) return;

    const onPointerMove = (e) => {
      if (!d.isDown) return;
      const dx = e.clientX - d.startX;
      if (!d.moved && Math.abs(dx) > 5) {
        d.moved = true;
        slider.classList.add('is-dragging');
      }
      if (!d.moved) return;

      const now = performance.now();
      const dt = Math.max(now - d.lastTime, 1);
      d.velocity = ((e.clientX - d.lastX) / dt) * 16;
      d.lastX = e.clientX;
      d.lastTime = now;

      d.pendingX = e.clientX;
      if (!d.rafId) d.rafId = requestAnimationFrame(applyScroll);
    };

    const endDrag = () => {
      if (!d.isDown) return;
      d.isDown = false;

      const glide = () => {
        d.velocity *= 0.92;
        slider.scrollLeft -= d.velocity;
        if (Math.abs(d.velocity) > 0.5) {
          d.momentumId = requestAnimationFrame(glide);
        } else {
          slider.classList.remove('is-dragging');
        }
      };

      if (d.moved && Math.abs(d.velocity) > 1) {
        d.momentumId = requestAnimationFrame(glide);
      } else {
        slider.classList.remove('is-dragging');
      }
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
      cancelAnimationFrame(d.rafId);
      cancelAnimationFrame(d.momentumId);
    };
  }, [applyScroll]);

  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    // Prevents text/image selection the moment the user grabs the slider
    e.preventDefault();
    const d = drag.current;
    cancelAnimationFrame(d.momentumId);
    d.isDown = true;
    d.moved = false;
    d.startX = d.lastX = e.clientX;
    d.lastTime = performance.now();
    d.startScroll = sliderRef.current.scrollLeft;
    d.velocity = 0;
  };

  // If the user dragged, swallow the click so a card doesn't open by accident
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const openProperty = (item) => {
    if (onSelectProperty) onSelectProperty(item);
    else setCurrentPage('residential');
  };

  return (
    <section className="bg-[#090a0f] text-white py-24 pl-4 sm:pl-8 md:pl-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto pr-4 sm:pr-8 md:pr-12">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-[#c5a880] tracking-[0.25em] uppercase text-xs font-bold mb-2">Curated Listings</p>
            <h2 className="font-serif-luxury fluid-heading-1 font-light">Popular Residences</h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous residences"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#090a0f] transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 pointer-events-none" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next residences"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#090a0f] transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 pointer-events-none" />
            </button>
          </div>
        </div>
      </div>

      {/* Draggable horizontal slider */}
      <div
        ref={sliderRef}
        onPointerDown={onPointerDown}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
        className="residence-slider reveal flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 pr-4 sm:pr-8 md:pr-12"
      >
        {POPULAR_RESIDENCES.map((item) => (
          <div
            key={item.id}
            onClick={() => openProperty(item)}
            className="snap-start shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] bg-zinc-900/70 rounded-2xl overflow-hidden border border-zinc-800 group hover:border-[#c5a880]/60 transition-colors duration-300 flex flex-col cursor-pointer"
          >
            <div className="h-60 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                draggable="false"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-3.5 left-3.5 bg-[#090a0f]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                {item.tag}
              </span>
              <span className="absolute top-3.5 right-3.5 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>
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
    </section>
  );
};

export default PopularResidencesSlider;

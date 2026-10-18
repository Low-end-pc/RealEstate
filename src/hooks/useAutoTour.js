import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * 40-Second Automated Cinematic Website Tour Hook for LinkedIn Video Recording.
 * Uses requestAnimationFrame with cubic-bezier easing for zero-stutter 60fps camera glides,
 * automated page transitions, live room gallery switching, and RSF calculator interactions.
 */
export const useAutoTour = ({ setCurrentPage, onSelectProperty, properties }) => {
  const [isTourActive, setIsTourActive] = useState(false);
  const cancelRef = useRef(false);

  const wait = (ms) =>
    new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve(!cancelRef.current);
      }, ms);
      return () => clearTimeout(timer);
    });

  // 60fps buttery-smooth programmatic camera scroll
  const smoothGlideTo = (targetY, durationMs) => {
    return new Promise((resolve) => {
      if (cancelRef.current) {
        resolve(false);
        return;
      }
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const step = (currentTime) => {
        if (cancelRef.current) {
          resolve(false);
          return;
        }
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve(true);
        }
      };

      requestAnimationFrame(step);
    });
  };

  // Helper to click a button containing specific text
  const clickButtonByText = (textMatch) => {
    if (cancelRef.current) return;
    const buttons = Array.from(document.querySelectorAll('button'));
    const target = buttons.find((btn) =>
      btn.textContent && btn.textContent.trim().includes(textMatch)
    );
    if (target) target.click();
  };

  // Helper to sequentially pulse .smooth-luxury-card hover animations
  const pulseLuxuryCards = async (delayPerCard = 260) => {
    const cards = Array.from(document.querySelectorAll('.smooth-luxury-card'));
    for (let i = 0; i < Math.min(cards.length, 4); i++) {
      if (cancelRef.current) return;
      cards[i].classList.add('tour-hover');
      await wait(delayPerCard);
      cards[i].classList.remove('tour-hover');
    }
  };

  const stopTour = useCallback(() => {
    cancelRef.current = true;
    document
      .querySelectorAll('.tour-hover')
      .forEach((el) => el.classList.remove('tour-hover'));
    setIsTourActive(false);
  }, []);

  const startTour = useCallback(async () => {
    if (isTourActive) {
      stopTour();
      return;
    }

    cancelRef.current = false;
    setIsTourActive(true);

    // Ensure starting at top of Home
    setCurrentPage('home');
    window.scrollTo(0, 0);

    // 1.0s settle delay after button hides so screen recording starts clean
    if (!(await wait(1000))) return stopTour();

    // =========================================================
    // PHASE 1: HOME PAGE (0s - 7s | 7,000ms)
    // =========================================================
    if (!(await wait(700))) return stopTour();
    if (!(await smoothGlideTo(820, 1800))) return stopTour(); // Glide to Popular Residences Slider
    if (!(await wait(700))) return stopTour();
    if (!(await smoothGlideTo(1950, 2600))) return stopTour(); // Glide through Editorial Sections
    if (!(await wait(700))) return stopTour();
    if (!(await smoothGlideTo(0, 500))) return stopTour();

    // =========================================================
    // PHASE 2: RESIDENCES BENTO & FILTERS (7s - 13s | 6,000ms)
    // =========================================================
    setCurrentPage('residential');
    window.scrollTo(0, 0);
    if (!(await wait(600))) return stopTour();

    // Showcase live category filter pills
    clickButtonByText('Villa');
    if (!(await wait(550))) return stopTour();
    clickButtonByText('Penthouse');
    if (!(await wait(550))) return stopTour();
    clickButtonByText('All');
    if (!(await wait(450))) return stopTour();

    // Glide down through White Luxury Property Cards & 140-Point Standard
    if (!(await smoothGlideTo(1280, 3250))) return stopTour();
    if (!(await wait(600))) return stopTour();

    // =========================================================
    // PHASE 3: APARTMENT DETAIL & ROOM TOUR (13s - 23s | 10,000ms)
    // =========================================================
    if (properties && properties.length > 0) {
      onSelectProperty(properties[0]);
    }
    window.scrollTo(0, 0);
    if (!(await wait(550))) return stopTour();
    if (!(await smoothGlideTo(150, 550))) return stopTour();

    // Cycle through 5 distinct rooms inside the apartment gallery
    const roomIndices = ['02', '03', '04', '05', '06'];
    for (const badge of roomIndices) {
      if (cancelRef.current) return stopTour();
      clickButtonByText(badge);
      if (!(await wait(900))) return stopTour();
    }

    // Glide down through Specs, Amenities & 6-Room Architectural Tour Grid
    if (!(await smoothGlideTo(1550, 3800))) return stopTour();
    if (!(await wait(600))) return stopTour();

    // =========================================================
    // PHASE 4: COMMERCIAL HUB & CAM CALCULATOR (23s - 31s | 8,000ms)
    // =========================================================
    setCurrentPage('commercial');
    window.scrollTo(0, 0);
    if (!(await wait(500))) return stopTour();

    // Glide past Hero & Flagship Towers to the Interactive CAM Estimator
    if (!(await smoothGlideTo(1380, 2300))) return stopTour();
    if (!(await wait(400))) return stopTour();

    // Live interactive RSF Calculator switching
    clickButtonByText('15,000 RSF');
    if (!(await wait(700))) return stopTour();
    clickButtonByText('75,000 RSF');
    if (!(await wait(700))) return stopTour();
    clickButtonByText('120,000 RSF');
    if (!(await wait(700))) return stopTour();

    // Glide to Four Disciplines of Commercial Care & showcase smooth hover
    if (!(await smoothGlideTo(2050, 1400))) return stopTour();
    await pulseLuxuryCards(250);
    if (!(await wait(300))) return stopTour();

    // =========================================================
    // PHASE 5: VISION PAGE & 4 PILLARS (31s - 36s | 5,000ms)
    // =========================================================
    setCurrentPage('vision');
    window.scrollTo(0, 0);
    if (!(await wait(500))) return stopTour();

    // Glide to Four Pillars of Aventine & pulse smooth cards
    if (!(await smoothGlideTo(820, 1300))) return stopTour();
    await pulseLuxuryCards(220);

    // Glide through 140-Point Matrix & Leadership
    if (!(await smoothGlideTo(1950, 2320))) return stopTour();

    // =========================================================
    // PHASE 6: PRICING & CONTACT FINALE (36s - 40s | 4,000ms)
    // =========================================================
    setCurrentPage('pricing');
    window.scrollTo(0, 0);
    if (!(await wait(450))) return stopTour();
    if (!(await smoothGlideTo(260, 1250))) return stopTour();
    if (!(await wait(500))) return stopTour();

    setCurrentPage('contact');
    window.scrollTo(0, 0);
    if (!(await wait(1200))) return stopTour();

    // Return cleanly to Home hero for a seamless loop ending
    setCurrentPage('home');
    window.scrollTo(0, 0);
    await wait(1500);

    stopTour();
  }, [isTourActive, onSelectProperty, properties, setCurrentPage, stopTour]);

  // Listen for Shift + D or Escape keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        e.preventDefault();
        startTour();
      } else if (e.key === 'Escape' && isTourActive) {
        stopTour();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTourActive, startTour, stopTour]);

  return { isTourActive, startTour, stopTour };
};

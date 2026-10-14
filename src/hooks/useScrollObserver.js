import { useEffect } from 'react';

/**
 * Custom hook to trigger scroll reveal animations accurately upon mount and route change
 */
export const useScrollObserver = (dependency) => {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    // Short timeout to ensure DOM nodes are ready after component rendering
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport upon mount, show immediately
        if (rect.top < window.innerHeight - 30) {
          el.classList.add('active');
        }
        observer.observe(el);
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [dependency]);
};

export default useScrollObserver;

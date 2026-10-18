import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger reveal animations on scroll using IntersectionObserver
 * Handles both the container and any child .reveal elements
 */
export function useReveal(options = { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const revealAll = () => {
      element.classList.add('is-revealed');
      element.querySelectorAll('.reveal').forEach((child) => {
        child.classList.add('is-revealed');
      });
    };

    // If reduced motion is preferred or if element is already in viewport
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealAll();
      return;
    }

    // Check if element is already in viewport on mount (e.g. hero)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        revealAll();
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return ref;
}

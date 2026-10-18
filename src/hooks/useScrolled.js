import { useState, useEffect } from 'react';

/**
 * Custom hook to detect when page is scrolled past threshold
 * @param {number} threshold
 * @returns {boolean} isScrolled
 */
export function useScrolled(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, [threshold]);

  return isScrolled;
}

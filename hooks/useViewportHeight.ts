import { useEffect, useState } from 'react';

export const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      // Use the smaller of window.innerHeight and visual viewport height
      const height = window.visualViewport?.height || window.innerHeight;
      setViewportHeight(`${height}px`);
    };

    // Initial height
    updateHeight();

    // Listen for viewport changes
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateHeight);
      return () => window.visualViewport?.removeEventListener('resize', updateHeight);
    } else {
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  return viewportHeight;
};
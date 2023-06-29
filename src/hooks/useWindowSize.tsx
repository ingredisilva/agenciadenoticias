import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowSize(document.documentElement.clientWidth);
    }

    if (typeof window !== 'undefined') {
      setWindowSize(document.documentElement.clientWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return windowSize;
}

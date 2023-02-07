import { useState, useEffect } from 'react';

export interface IWindowDimensions {
  windowWidth: number;
  windowHeight: number;
}

export function useGetWindowDimensions() {
  const isBrowser = typeof window !== 'undefined';
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>({
    windowWidth: 0,
    windowHeight: 0,
  });

  const update = () => {
    setWindowDimensions({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if (isBrowser) {
      update();
      window.addEventListener('resize', update, false);
    }

    return () => {
      isBrowser && window.removeEventListener('resize', update, false);
    };
  }, [isBrowser]);

  return windowDimensions;
}

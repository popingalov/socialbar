import { useState, useRef, useEffect } from 'react';

export const useAppSize = () => {
  const rootRef = document.getElementById('root');
  const [rootSize, setRootSize] = useState({ width: 0, height: 0 });
  const observer = useRef(
    new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setRootSize({ width, height });
    }),
  );

  useEffect(() => {
    const windowObserver = observer;
    if (rootRef) {
      windowObserver.current.observe(rootRef);

      return () => {
        windowObserver.current.unobserve(rootRef);
      };
    }
  }, [rootRef, observer]);

  return rootSize;
};

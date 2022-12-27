import { useState, useCallback } from 'react';

export function useCallbackRef() {
  const [ref, setRef] = useState(null);
  const fn = useCallback(node => {
    setRef(node);
  }, []);

  return [ref, fn];
}

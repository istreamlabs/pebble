import { useState, useEffect } from 'react';
import { getBreakpointLayout } from '../Utils';

/*
 * Returns array where elements of the array correspond
 * to breakpoints defined in _variables.scss
 */

export default () => {
  const [layout, setLayout] = useState(getBreakpointLayout());

  function handleResize() {
    setLayout(getBreakpointLayout());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return layout;
};

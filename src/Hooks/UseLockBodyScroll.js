import { useLayoutEffect } from 'react';

export default lock => {
  useLayoutEffect(() => {
    if (lock) {
      // Get original value of body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
      // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [lock]); // Empty array ensures effect is only run on mount and unmount
};

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
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

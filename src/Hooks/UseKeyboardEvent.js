import { useEffect } from 'react';

export default (key, callback) => {
  useEffect(() => {
    const handler = function(event) {
      if (event.key === key) {
        if (event.target.tagName !== 'INPUT') {
          event.preventDefault();
        }
        callback();
      }
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [key, callback]);
};

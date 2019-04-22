import { useState, useEffect } from 'react';

function isMobileSize() {
  return window && window.innerWidth < 960;
}

/**
 * Returns true if the browser window is less than 960px
 */

export default () => {
  const [mobile, setMobile] = useState(isMobileSize());

  function handleResize() {
    setMobile(isMobileSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return mobile;
};

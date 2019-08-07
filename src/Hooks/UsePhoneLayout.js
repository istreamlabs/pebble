import { useState, useEffect } from 'react';

function isPhoneSize() {
  return window && window.innerWidth < 480;
}

/**
 * Returns true if the browser window is less than 960px
 */

export default () => {
  const [mobile, setMobile] = useState(isPhoneSize());

  function handleResize() {
    setMobile(isPhoneSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return mobile;
};

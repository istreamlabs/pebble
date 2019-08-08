import { useState, useEffect } from 'react';

function isPhoneSize() {
  return window && window.innerWidth < 480;
}

/**
 * Returns true if the browser window is less than 480px
 */

export default () => {
  const [phone, setPhone] = useState(isPhoneSize());

  function handleResize() {
    setPhone(isPhoneSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return phone;
};

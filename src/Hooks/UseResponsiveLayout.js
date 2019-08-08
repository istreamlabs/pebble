import { useState, useEffect } from 'react';

function getLayout() {
  if (!window) return [false, false, false, false];

  if (window.innerWidth <= 480) {
    return [true, false, false, false];
  }

  if (window.innerWidth > 480 && window.innerWidth <= 960) {
    return [false, true, false, false];
  }

  if (window.innerWidth > 960 && window.innerWidth <= 1440) {
    return [false, false, true, false];
  }

  if (window.innerWidth > 1440) {
    return [false, false, false, true];
  }
}

export default () => {
  const [layout, setLayout] = useState(getLayout());

  function handleResize() {
    setLayout(getLayout());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return layout;
};

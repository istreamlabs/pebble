import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import developerWarning from '../Utils/DeveloperWarning';

const responsiveContext = createContext({ isConfigured: false });

const WARNING_MESSAGE =
  'Please consider wrapping your application in a `responsiveProvider` this will drastically improve performance and will be require in v3.X.X';

function getSize() {
  if (typeof window === 'undefined') {
    return {};
  }

  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

export default () => {
  const {
    innerWidth,
    innerHeight,
    outerHeight,
    outerWidth,
    isConfigured,
  } = useContext(responsiveContext);

  if (isConfigured) {
    return {
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    developerWarning(WARNING_MESSAGE);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export const ResponsiveProvider = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);
  const [outerHeight, setOuterHeight] = useState(window.outerHeight);

  const handleWindowResize = () => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    setOuterWidth(window.outerWidth);
    setOuterHeight(window.outerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () =>
      window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <responsiveContext.Provider
      value={{
        innerWidth,
        innerHeight,
        outerHeight,
        outerWidth,
        isConfigured: true,
      }}
    >
      {children}
    </responsiveContext.Provider>
  );
};

ResponsiveProvider.propTypes = {
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
};

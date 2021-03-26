import UseWindowSize from './UseWindowSize';

/**
 * Returns true if the browser window is less than 960px
 */
export default () => {
  const { innerWidth } = UseWindowSize();

  return innerWidth && innerWidth < 960;
};

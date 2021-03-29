// @ts-expect-error ts-migrate(6142) FIXME: Module './UseWindowSize' was resolved to '/Users/e... Remove this comment to see the full error message
import UseWindowSize from './UseWindowSize';

/**
 * Returns true if the browser window is less than 960px
 */
export default () => {
  const { innerWidth } = UseWindowSize();

  return innerWidth && innerWidth < 960;
};

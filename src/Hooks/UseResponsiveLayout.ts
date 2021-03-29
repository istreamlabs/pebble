import { getBreakpointLayout } from '../Utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module './UseWindowSize' was resolved to '/Users/e... Remove this comment to see the full error message
import useWindowSize from './UseWindowSize';

/*
 * Returns array where elements of the array correspond
 * to breakpoints defined in _variables.scss
 */

export default () => {
  const windowSize = useWindowSize();

  return getBreakpointLayout(windowSize);
};

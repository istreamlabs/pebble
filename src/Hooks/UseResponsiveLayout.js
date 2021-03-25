import { getBreakpointLayout } from '../Utils';
import useWindowSize from './UseWindowSize';

/*
 * Returns array where elements of the array correspond
 * to breakpoints defined in _variables.scss
 */

export default () => {
  const windowSize = useWindowSize();

  return getBreakpointLayout(windowSize);
};

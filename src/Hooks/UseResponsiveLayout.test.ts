// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react-hooks' ... Remove this comment to see the full error message
import { renderHook } from '@testing-library/react-hooks';
import useResponsiveLayout from './UseResponsiveLayout';
// @ts-expect-error ts-migrate(6142) FIXME: Module './UseWindowSize' was resolved to '/Users/e... Remove this comment to see the full error message
import useWindowSize from './UseWindowSize';

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
jest.mock('./UseWindowSize');

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('UseMobileLayout', () => {
  it('uses windowSizeHook', () => {
    renderHook(() => useResponsiveLayout());
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(useWindowSize).toHaveBeenCalled();
  });
});

import { renderHook } from '@testing-library/react-hooks';
import useResponsiveLayout from './UseResponsiveLayout';
import useWindowSize from './UseWindowSize';

jest.mock('./UseWindowSize');

describe('UseMobileLayout', () => {
  it('uses windowSizeHook', () => {
    renderHook(() => useResponsiveLayout());
    expect(useWindowSize).toHaveBeenCalled();
  });
});

import { renderHook } from '@testing-library/react-hooks';
import useMobileLayout from './UseMobileLayout';
import useWindowSize from './UseWindowSize';

jest.mock('./UseWindowSize');

describe('UseMobileLayout', () => {
  it('uses windowSizeHook', () => {
    renderHook(() => useMobileLayout());
    expect(useWindowSize).toHaveBeenCalled();
  });
});

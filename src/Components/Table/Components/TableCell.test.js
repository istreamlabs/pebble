import React from 'react';
import { shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';
import TableCell from './TableCell';

jest.mock('../../../Hooks/UseMobileLayout');

describe('TableCell', () => {
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => (false));
  });
  it('renders without crashing', () => {
    expect(() => { shallow(<TableCell />); }).not.toThrow();
  });
  it('applies rowgroup as the role by default', () => {
    const wrapper = shallow(<TableCell />);
    expect(wrapper.prop('role')).toBe('gridcell');
  });
  it('sets the role if specified', () => {
    const wrapper = shallow(<TableCell role="columnheader" />);
    expect(wrapper.prop('role')).toBe('columnheader');
  });
  it('sets the width to 100% if viewed in mobile sized viewport, even if specified', () => {
    useMobileLayout.mockImplementation(() => (true));
    const wrapper = shallow(<TableCell width="20px" />);
    expect(wrapper.prop('width')).toBe('100%');
  });
  it('sets the width if specified', () => {
    const wrapper = shallow(<TableCell width="20px" />);
    expect(wrapper.prop('width')).toBe('20px');
  });
});

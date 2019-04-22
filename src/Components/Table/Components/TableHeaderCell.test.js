import React from 'react';
import { shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';
import TableHeaderCell from './TableHeaderCell';

jest.mock('../../../Hooks/UseMobileLayout');

describe('TableHeaderCell', () => {
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => (false));
  });
  it('renders without crashing', () => {
    expect(() => { shallow(<TableHeaderCell />); }).not.toThrow();
  });

  it('sets the width to 100% if viewed in mobile sized viewport, even if specified', () => {
    useMobileLayout.mockImplementation(() => (true));
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('100%');
  });
  it('sets the width if specified', () => {
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('20px');
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import TableCell from './TableCell';

describe('TableCell', () => {
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
  it('sets the basis if width is specified', () => {
    const wrapper = shallow(<TableCell width="20px" />);
    expect(wrapper.prop('basis')).toBe('20px');
  });
  it('sets the basis if width is not specified', () => {
    const wrapper = shallow(<TableCell />);
    expect(wrapper.prop('basis')).toBe('100%');
  });
});

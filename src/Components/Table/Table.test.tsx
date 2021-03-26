import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';

describe('Table', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Table />);
    }).not.toThrow();
  });

  describe('table width', () => {
    it('sets the correct width to 100% by default', () => {
      const wrapper = shallow(<Table />);
      expect(wrapper.prop('width')).toBe('100%');
    });
    it('sets the width ', () => {
      const myWidth = '222px';
      const wrapper = shallow(<Table width={myWidth} />);
      expect(wrapper.prop('width')).toBe(myWidth);
    });
  });
});

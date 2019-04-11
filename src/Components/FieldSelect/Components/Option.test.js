import React from 'react';
import { shallow } from 'enzyme';

import Option from './Option';

import Icon from '../../Icon/Icon';

describe('Option', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Option />); }).not.toThrow();
  });

  it('renders a unchecked checkbox by default', () => {
    const wrapper = shallow(<Option />);
    expect(wrapper.find(Icon).prop('name')).toBe('checkbox');
  });

  it('renders a checked checkbox when isSelected is true', () => {
    const wrapper = shallow(<Option isSelected />);
    expect(wrapper.find(Icon).prop('name')).toBe('checkbox-checked');
  });
});

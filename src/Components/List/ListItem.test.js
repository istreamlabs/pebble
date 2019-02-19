import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<ListItem>item</ListItem>); }).not.toThrow();
  });

  it('renders children', () => {
    const wrapper = shallow(<ListItem>item</ListItem>);
    expect(wrapper.text()).toBe('item');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<ListItem className="myClass">item</ListItem>);
    expect(wrapper.prop('className')).toContain('myClass');
  });
});

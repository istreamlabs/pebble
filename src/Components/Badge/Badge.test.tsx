import React from 'react';
import { mount, shallow } from 'enzyme';
import Badge from './Badge';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

describe('Badge', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Badge>hello</Badge>);
    }).not.toThrow();
  });

  it('renders correct text', () => {
    const wrapper = mount(<Badge>Hello Pebble</Badge>);
    expect(wrapper.text()).toBe('Hello Pebble');
  });

  it('renders an icon', () => {
    const wrapper = mount(
      <Badge type="danger" icon="circle">
        Hello Pebble
      </Badge>,
    );
    expect(wrapper.contains(Icon)).toBeTruthy();
  });

  it('renders correct icon', () => {
    const wrapper = mount(
      <Badge type="danger" icon="circle">
        Hello Pebble
      </Badge>,
    );
    expect(wrapper.find(Icon).prop('name')).toBe('circle');
  });

  it('sets the correct small text size', () => {
    const wrapper = shallow(<Badge size="small">small</Badge>);
    expect(wrapper.find(Text).prop('size')).toBe(7);
  });

  it('sets the correct large text size', () => {
    const wrapper = shallow(<Badge size="large">small</Badge>);
    expect(wrapper.find(Text).prop('size')).toBe(5);
  });
});

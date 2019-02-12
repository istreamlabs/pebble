import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

describe('Text', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Text>hello</Text>); }).not.toThrow();
  });

  it('renders children', () => {
    const wrapper = shallow(<Text>Hello Pebble</Text>);
    expect(wrapper.find('span').text()).toBe('Hello Pebble');
  });

  it('renders span by default', () => {
    const wrapper = shallow(<Text>Hello Pebble</Text>);
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Text className="myClass">test</Text>);
    expect(wrapper.find('span').prop('className')).toContain('myClass');
  });

  it('renders a code element when code appearance is set', () => {
    const wrapper = shallow(<Text appearance="code">test</Text>);
    expect(wrapper.find('code')).toHaveLength(1);
  });
});

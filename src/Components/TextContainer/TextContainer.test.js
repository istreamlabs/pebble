import React from 'react';
import { shallow } from 'enzyme';
import TextContainer from './TextContainer';

describe('TextContainer', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<TextContainer>hello</TextContainer>); }).not.toThrow();
  });

  it('renders children', () => {
    const wrapper = shallow(<TextContainer><p>Hello Pebble</p></TextContainer>);
    expect(wrapper.find('p').text()).toBe('Hello Pebble');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<TextContainer className="myClass">test</TextContainer>);
    expect(wrapper.find('div').prop('className')).toContain('myClass');
  });
});

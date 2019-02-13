import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Link href="http://istreamplanet.com">hello</Link>); }).not.toThrow();
  });

  it('renders children', () => {
    const wrapper = shallow(<Link href="http://istreamplanet.com"><p>Hello Pebble</p></Link>);
    expect(wrapper.find('p').text()).toBe('Hello Pebble');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Link href="http://istreamplanet.com" className="myClass">test</Link>);
    expect(wrapper.find('a').prop('className')).toContain('myClass');
  });

  it('sets the target to "_blank" if link is external', () => {
    const wrapper = shallow(<Link href="http://istreamplanet.com" external>test</Link>);
    expect(wrapper.find('a').prop('target')).toBe('_blank');
  });
});

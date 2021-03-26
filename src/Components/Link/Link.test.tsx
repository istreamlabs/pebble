import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

import { Link as RouterLink } from 'react-router-dom';

describe('Link', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Link href="http://istreamplanet.com">hello</Link>);
    }).not.toThrow();
  });

  it('renders a react-router-dom Link by default', () => {
    const wrapper = shallow(
      <Link href="http://istreamplanet.com">
        <p>Hello Pebble</p>
      </Link>,
    );
    expect(wrapper.find(RouterLink).exists()).toBe(true);
  });

  it('external renders an a tag', () => {
    const wrapper = shallow(
      <Link external href="http://istreamplanet.com">
        <p>Hello Pebble</p>
      </Link>,
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <Link href="http://istreamplanet.com">
        <p>Hello Pebble</p>
      </Link>,
    );
    expect(wrapper.find('p').text()).toBe('Hello Pebble');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(
      <Link href="http://istreamplanet.com" className="myClass">
        test
      </Link>,
    );
    expect(wrapper.find(RouterLink).prop('className')).toContain(
      'myClass',
    );
  });
});

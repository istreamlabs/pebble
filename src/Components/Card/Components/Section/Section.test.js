import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

describe('Section', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Section>hello</Section>);
    }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(
      <Section className="myClass">test</Section>,
    );
    expect(wrapper.find('div').prop('className')).toContain(
      'myClass',
    );
  });
});

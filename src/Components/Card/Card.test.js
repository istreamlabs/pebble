import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import Header from './Components/Header';
import Section from './Components/Section';

describe('Card', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Card>hello</Card>); }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Card className="myClass">test</Card>);
    expect(wrapper.find('div').prop('className')).toContain('myClass');
  });

  it('wraps children in Section if sectioned', () => {
    const wrapper = mount(<Card sectioned>
      <p>child 1</p>
      <p>child 2</p>
    </Card>);
    expect(wrapper.find(Section)).toHaveLength(2);
  });

  it('renders a header when a title is passed', () => {
    const wrapper = mount(<Card title="test-title">test</Card>);
    expect(wrapper.contains(Header)).toBeTruthy();
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import Header from './Components/Header';
import Section from './Components/Section';
import Block from '../Block/Block';

describe('Card', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Card>hello</Card>);
    }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Card className="myClass">test</Card>);
    expect(wrapper.find(Block).prop('className')).toContain(
      'myClass',
    );
  });

  it('wraps children in Section if sectioned', () => {
    const wrapper = mount(
      <Card sectioned>
        <p>child 1</p>
        <p>child 2</p>
      </Card>,
    );
    expect(wrapper.find(Section)).toHaveLength(2);
  });

  it('sets the correct background and border for muted cards', () => {
    const wrapper = shallow(<Card muted>test</Card>);
    expect(wrapper.find('Block').prop('background')).toBe(
      'neutral-200',
    );
    expect(wrapper.find('Block').prop('border')).toBeNull();
  });

  describe('header', () => {
    it('renders a header when a title is passed', () => {
      const wrapper = shallow(<Card title="test-title">test</Card>);
      expect(wrapper.find(Header)).toHaveLength(1);
      expect(wrapper.find(Header).html()).toContain('test-title');
    });
    it('renders a header when a title is passed', () => {
      const wrapper = shallow(
        <Card headerActions={<button type="button">test</button>}>
          test
        </Card>,
      );
      expect(wrapper.find(Header)).toHaveLength(1);
    });
    it('does not get rendered if a title or headerActions is not passed', () => {
      const wrapper = shallow(<Card>test</Card>);
      expect(wrapper.find(Header)).toHaveLength(0);
    });
  });
});

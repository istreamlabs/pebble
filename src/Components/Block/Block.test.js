import React from 'react';
import { shallow } from 'enzyme';
import Block from './Block';

describe('Block', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Block>hello</Block>); }).not.toThrow();
  });

  it('renders children', () => {
    const wrapper = shallow(<Block><p>Hello Pebble</p></Block>);
    expect(wrapper.find('p').text()).toBe('Hello Pebble');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Block className="myClass">test</Block>);
    expect(wrapper.prop('className')).toContain('myClass');
  });

  describe('Margin', () => {
    it('sets all margin bottom', () => {
      const wrapper = shallow(<Block marginBottom="1">test</Block>);
      expect(wrapper.prop('className')).toContain('mb-1');
    });

    it('sets the margin top', () => {
      const wrapper = shallow(<Block marginTop="1">test</Block>);
      expect(wrapper.prop('className')).toContain('mt-1');
    });
  }),

  describe('Padding', () => {
    it('sets all padding', () => {
      const wrapper = shallow(<Block padding="1">test</Block>);
      expect(wrapper.prop('className')).toContain('p-1');
    });

    it('sets the horizontal padding', () => {
      const wrapper = shallow(<Block paddingHorizontal="1">test</Block>);
      expect(wrapper.prop('className')).toContain('ph-1');
    });

    it('sets the vertical padding', () => {
      const wrapper = shallow(<Block paddingVertical="1">test</Block>);
      expect(wrapper.prop('className')).toContain('pv-1');
    });
  }),

  describe('Text', () => {
    it('sets the text size', () => {
      const wrapper = shallow(<Block textSize="1">test</Block>);
      expect(wrapper.prop('className')).toContain('fs-1');
    });

    it('sets right alignment', () => {
      const wrapper = shallow(<Block textAlign="right">test</Block>);
      expect(wrapper.prop('className')).toContain('text-right');
    });

    it('sets cemter alignment', () => {
      const wrapper = shallow(<Block textAlign="center">test</Block>);
      expect(wrapper.prop('className')).toContain('text-center');
    });

    it('sets trunate', () => {
      const wrapper = shallow(<Block truncate>test</Block>);
      expect(wrapper.prop('className')).toContain('truncate');
    });
  });
});

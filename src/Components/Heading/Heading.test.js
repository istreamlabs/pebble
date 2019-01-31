import React from 'react';
import { shallow } from 'enzyme';
import Heading, { parseSize, parseElement } from './Heading';

describe('Heading', () => {
  describe('parseSize', () => {
    it('does nothing is already number', () => {
      expect(parseSize(6, 1)).toEqual(6);
    });

    it('converts string number to number', () => {
      expect(parseSize('6', 1)).toEqual(6);
    });

    it('return default size if larger than 8', () => {
      expect(parseSize('9', 1)).toEqual(1);
    });

    it('return default size if less than 1', () => {
      expect(parseSize('0', 1)).toEqual(1);
    });

    it('return default size if string is not a number', () => {
      expect(parseSize('abc', 1)).toEqual(1);
    });
  });

  describe('parseElement', () => {
    it('does nothing is already number', () => {
      expect(parseElement(6)).toEqual(6);
    });

    it('converts string number to number', () => {
      expect(parseElement('6')).toEqual(6);
    });

    it('return default size if larger than 8', () => {
      expect(parseElement('9')).toEqual(2);
    });

    it('return default size if less than 1', () => {
      expect(parseElement('0')).toEqual(2);
    });

    it('return default size if string is not a number', () => {
      expect(parseElement('abc')).toEqual(2);
    });
  });

  it('renders without crashing', () => {
    expect(() => { shallow(<Heading>hello</Heading>); }).not.toThrow();
  });

  it('has correct defaults', () => {
    expect(Heading.defaultProps.element).toEqual(2);
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Heading className="myClass">test</Heading>);
    expect(wrapper.find('h2').prop('className')).toEqual('heading heading-2 myClass');
  });

  it('size is set correctly', () => {
    const wrapper = shallow(<Heading element={1} size={4}>hello</Heading>);
    expect(wrapper.find('h1').prop('className')).toEqual('heading heading-4');
  });

  it('responsive is set correctly', () => {
    const wrapper = shallow(<Heading element={1} size={4} responsive>hello</Heading>);
    expect(wrapper.find('h1').prop('className')).toEqual('heading heading-4-responsive');
  });
});

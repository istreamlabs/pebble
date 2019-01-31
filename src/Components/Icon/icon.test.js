import React from 'react';
import { shallow } from 'enzyme';
import Icon, { parseSize } from './Icon';

describe('Icon', () => {
  describe('parseSize', () => {
    it('does nothing is already number', () => {
      expect(parseSize(6)).toEqual(6);
    });

    it('converts string number to number', () => {
      expect(parseSize('6')).toEqual(6);
    });

    it('return default size if larger than 8', () => {
      expect(parseSize('9')).toEqual(1);
    });

    it('return default size if less than 1', () => {
      expect(parseSize('0')).toEqual(1);
    });

    it('return default size if string is not a number', () => {
      expect(parseSize('abc')).toEqual(1);
    });
  });

  it('renders without crashing', () => {
    expect(() => { shallow(<Icon name="add-circle" />); }).not.toThrow();
  });

  it('has correct defaults', () => {
    expect(Icon.defaultProps.size).toEqual(1);
    expect(Icon.defaultProps.ariaHidden).toEqual(true);
  });

  it('has case insensitive name', () => {
    const wrapper = shallow(<Icon name="Add-Circle" />);
    expect(wrapper.find('svg').prop('className')).not.toContain('not-found');
  });

  it('applies color', () => {
    const wrapper = shallow(<Icon name="add-circle" color="red" />);
    expect(wrapper.find('svg').prop('fill')).toContain('red');
  });

  it('renders height and width as 16px by default', () => {
    const wrapper = shallow(<Icon name="add-circle" />);
    expect(wrapper.find('svg').prop('height')).toEqual('16px');
    expect(wrapper.find('svg').prop('width')).toEqual('16px');
  });

  it('multiples size by 16 and sets height and width', () => {
    const wrapper = shallow(<Icon name="add-circle" size={2} />);
    expect(wrapper.find('svg').prop('height')).toEqual('32px');
    expect(wrapper.find('svg').prop('width')).toEqual('32px');
  });

  it('renders a title tag when accessibilityLabel set', () => {
    const wrapper = shallow(<Icon name="add-circle" accessibilityLabel="assistive text" />);
    expect(wrapper.html()).toContain('<title>assistive text</title>');
  });

  it('renders aria-hidden tags correctly', () => {
    const hidden = shallow(<Icon name="add-circle" />);
    expect(hidden.find('svg').prop('aria-hidden')).toEqual(true);
    const shown = shallow(<Icon name="add-circle" ariaHidden={false} />);
    expect(shown.find('svg').prop('aria-hidden')).toEqual(false);
  });

  it('sets the viewbox on svg', () => {
    const wrapper = shallow(<Icon name="add-circle" accessibilityLabel="assistive text" />);
    expect(wrapper.find('svg').prop('viewBox')).toEqual('0 0 16 16');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Icon name="add-circle" className="myClass" />);
    expect(wrapper.find('svg').prop('className')).toEqual('icon myClass');
  });

  it('returns a special icon if the name is bad', () => {
    const wrapper = shallow(<Icon name="" />);
    expect(wrapper.find('svg').prop('className')).toContain('not-found');
    expect(wrapper.find('svg').html()).toContain('path');
  });
});

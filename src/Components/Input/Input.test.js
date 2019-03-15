import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('List', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Input />); }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Input className="myClass" />);
    expect(wrapper.find('input').prop('className')).toContain('myClass');
  });

  describe('onBlur', () => {
    it('calls onBlur if passed a function', () => {
      const mock = jest.fn();
      const instance = new Input({ onBlur: mock });
      instance.onBlur();
      expect(mock).toBeCalledTimes(1);
    });

    it('will not call onBlur if nothing is passed', () => {
      const mock = jest.fn();
      const instance = new Input({ onBlur: undefined });
      instance.onBlur();
      expect(mock).not.toHaveBeenCalled();
    });
  });

  describe('onFocus', () => {
    it('calls onFocus if passed a function', () => {
      const mock = jest.fn();
      const instance = new Input({ onFocus: mock });
      instance.onFocus();
      expect(mock).toBeCalledTimes(1);
    });

    it('will not call onFocus if nothing is passed', () => {
      const mock = jest.fn();
      const instance = new Input({ onFocus: undefined });
      instance.onFocus();
      expect(mock).not.toHaveBeenCalled();
    });
  });

  describe('onChange', () => {
    it('calls onChange if passed a function', () => {
      const mock = jest.fn();
      const instance = new Input({ onChange: mock });
      instance.onChange();
      expect(mock).toBeCalledTimes(1);
    });

    it('will not call onChange if nothing is passed', () => {
      const mock = jest.fn();
      const instance = new Input({ onChange: undefined });
      instance.onChange();
      expect(mock).not.toHaveBeenCalled();
    });
  });

  describe('Prefix', () => {
    it('renders a prefix if set', () => {
      const wrapper = shallow(<Input prefix="my prefix" />);
      expect(wrapper.find('.input-prefix').text()).toBe('my prefix');
    });

    it('does not render a prefix by default', () => {
      const wrapper = shallow(<Input />);
      expect(wrapper.exists('.input-prefix')).toEqual(false);
    });
  });

  describe('Suffix', () => {
    it('renders a suffix if set', () => {
      const wrapper = shallow(<Input suffix="my suffix" />);
      expect(wrapper.find('.input-suffix').text()).toBe('my suffix');
    });

    it('does not render a suffix by default', () => {
      const wrapper = shallow(<Input />);
      expect(wrapper.exists('.input-suffix')).toEqual(false);
    });
  });
});

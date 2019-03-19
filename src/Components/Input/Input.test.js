import React from 'react';
import { mount, shallow } from 'enzyme';
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

  describe('getClearBtnMarkup', () => {
    it('displays a clear button if passed a clearBtnFunc and value is set', () => {
      const mock = jest.fn();
      const wrapper = shallow(<Input clearBtnFunc={mock} value="test" />);
      expect(wrapper.find('Button').prop('onClick')).toBe(mock);
    });

    it('does not display a clear button if input has no value', () => {
      const mock = jest.fn();
      const wrapper = shallow(<Input clearBtnFunc={mock} value="" />);
      expect(wrapper.exists('.input-clear-btn')).toEqual(false);
    });
  });

  describe('getCharacterCountMarkup', () => {
    it('sets the correct character count', () => {
      const wrapper = mount(<Input showCharacterCount value="12345" />);
      expect(wrapper.find('span.pt-2').text()).toEqual('5');
    });

    it('sets the correct character count when input has no value', () => {
      const wrapper = mount(<Input showCharacterCount value="" />);
      expect(wrapper.find('span.pt-2').text()).toEqual('0');
    });

    it('sets the correct character count and displays max value', () => {
      const wrapper = mount(<Input showCharacterCount value="12345" maxLength={5} />);
      expect(wrapper.find('span.pt-2').text()).toEqual('5/5');
    });
  });
});

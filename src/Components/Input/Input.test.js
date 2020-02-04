import React from 'react';
import { mount, shallow } from 'enzyme';
import Input from './Input';
import Button from '../Button/Button';

describe('Input', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input />);
    }).not.toThrow();
  });

  it('sets the correct default props', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').prop('autoFocus')).toBe(false);
    expect(wrapper.find('input').prop('autoComplete')).toBe('off');
    expect(wrapper.find('input').prop('disabled')).toBe(false);
    expect(wrapper.find('input').prop('aria-invalid')).toBe(false);
    expect(wrapper.find('input').prop('required')).toBe(false);
    expect(wrapper.find('input').prop('type')).toBe('text');
  });

  describe('getInputProps', () => {
    it('allows for custom classes', () => {
      const wrapper = shallow(<Input className="myClass" />);
      expect(wrapper.find('input').prop('className')).toContain(
        'myClass',
      );
      expect(wrapper.find('input').prop('className')).toContain(
        'input-m',
      );
      expect(wrapper.find('input').prop('aria-invalid')).toBe(false);
    });

    it('size small styles get set', () => {
      const wrapper = shallow(
        <Input size="small" label="test label" />,
      );
      expect(wrapper.find('input').prop('className')).toContain(
        'input-s',
      );
    });

    it('size large styles get set', () => {
      const wrapper = shallow(
        <Input size="large" label="test label" />,
      );
      expect(wrapper.find('input').prop('className')).toContain(
        'input-l',
      );
    });

    it('read only sizes get set', () => {
      const wrapper = shallow(
        <Input isReadOnly label="test label" />,
      );
      expect(wrapper.find('input').prop('className')).toContain(
        'bg-neutral-200',
      );
    });

    it('aria-label gets set ', () => {
      const testLabel = 'aria test label';
      const wrapper = shallow(
        <Input ariaLabel={testLabel} label="test label" />,
      );
      expect(wrapper.find('input').prop('aria-label')).toBe(
        testLabel,
      );
    });

    it('aria-labelledby gets set ', () => {
      const testLabel = 'aria test label';
      const wrapper = shallow(
        <Input ariaLabelledby={testLabel} label="test label" />,
      );
      expect(wrapper.find('input').prop('aria-labelledby')).toBe(
        testLabel,
      );
    });

    it('aria-describedby gets set ', () => {
      const testLabel = 'aria test label';
      const wrapper = shallow(
        <Input ariaDescribedBy={testLabel} label="test label" />,
      );
      expect(wrapper.find('input').prop('aria-describedby')).toBe(
        testLabel,
      );
    });

    it('aria-invalid gets set ', () => {
      const wrapper = shallow(<Input isInvalid label="test label" />);
      expect(wrapper.find('input').prop('aria-invalid')).toBe(true);
    });
  });

  describe('getPrefixMarkup', () => {
    it('renders a prefix if set', () => {
      const wrapper = shallow(<Input prefix="my prefix" />);
      expect(wrapper.find('.input-prefix').text()).toBe('my prefix');
    });

    it('does not render a prefix by default', () => {
      const wrapper = shallow(<Input />);
      expect(wrapper.exists('.input-prefix')).toEqual(false);
    });
  });

  describe('getSuffixMarkup', () => {
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
    it('does not display a clearBtnFunc is not defined', () => {
      const instance = new Input({ label: 'test label' });
      expect(instance.getClearBtnMarkup()).toBe(undefined);
    });

    it('displays a clear button if passed a clearBtnFunc and value is set', () => {
      const mock = jest.fn();
      const wrapper = shallow(
        <Input clearBtnFunc={mock} value="test" />,
      );
      expect(wrapper.find(Button).prop('onClick')).toBe(mock);
    });

    it('does not display a clear button if input has no value', () => {
      const mock = jest.fn();
      const instance = new Input({ clearBtnFunc: mock, value: '' });
      expect(instance.getClearBtnMarkup()).toBe(undefined);
    });
  });

  describe('getCharacterCountMarkup', () => {
    it('sets the correct character count', () => {
      const wrapper = mount(
        <Input showCharacterCount value="12345" />,
      );
      expect(wrapper.find('span.pt-2').text()).toEqual('5');
    });

    it('sets the correct character count when input has no value', () => {
      const wrapper = mount(<Input showCharacterCount value="" />);
      expect(wrapper.find('span.pt-2').text()).toEqual('0');
    });

    it('sets the correct character count and displays max value', () => {
      const wrapper = mount(
        <Input showCharacterCount value="12345" maxLength={5} />,
      );
      expect(wrapper.find('span.pt-2').text()).toEqual('5/5');
    });

    it('will not return anything if showCharacterCount is false', () => {
      const instance = new Input({ value: '12345' });
      expect(instance.getCharacterCountMarkup()).toBe(undefined);
    });
  });
});

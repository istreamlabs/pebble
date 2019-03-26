import React from 'react';
import { mount, shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Checkbox id="test" />); }).not.toThrow();
  });

  describe('checkboxIconMarkup', () => {
    it('if toggle, should not return anything', () => {
      const wrapper = mount(<Checkbox id="test" onChange={() => {}} toggle />);
      expect(wrapper.exists('svg')).toBe(false);
    });

    it('should not be disabled, checked, or invalid by default', () => {
      const wrapper = mount(<Checkbox id="test" />);
      expect(wrapper.exists('svg')).toBe(true);
      expect(wrapper.find('input').prop('disabled')).toBe(undefined);
      expect(wrapper.find('input').prop('checked')).toBe(false);
      expect(wrapper.find('svg').hasClass('red')).toEqual(false);
    });

    it('isSelected and disabled should be reflected in the input', () => {
      const wrapper = mount(<Checkbox id="test" isSelected disabled />);
      expect(wrapper.find('input').prop('disabled')).toBe(true);
      expect(wrapper.find('input').prop('checked')).toBe(true);
    });

    it('isSelected should be reflected in the input', () => {
      const wrapper = mount(<Checkbox id="test" onChange={() => {}} isSelected />);
      expect(wrapper.find('input').prop('checked')).toBe(true);
    });

    it('isSelected should be reflected in the input', () => {
      const wrapper = mount(<Checkbox id="test" onChange={() => {}} isSelected={false} />);
      expect(wrapper.find('input').prop('checked')).toBe(false);
    });

    it('disabled should be reflected in the input', () => {
      const wrapper = mount(<Checkbox id="test" onChange={() => {}} disabled />);
      expect(wrapper.find('input').prop('disabled')).toBe(true);
    });

    it('isInvalid should be reflected in the input', () => {
      const wrapper = mount(<Checkbox id="test" onChange={() => {}} isInvalid />);
      expect(wrapper.find('svg').prop('className')).toContain('red');
    });
  });

  describe('className', () => {
    it('passes in class name', () => {
      const instance = shallow(<Checkbox id="test" className="my-class" />);
      expect(instance.html()).toContain('my-class');
    });
  });

  describe('handleChange', () => {
    it('calls onChange', () => {
      const onChange = jest.fn();
      const wrapper = mount(<Checkbox id="test" onChange={onChange} />);
      wrapper.find('input').simulate('change');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('sets isSelected to opposite of isSelected', () => {
      const onChange = jest.fn();
      const wrapper = mount(<Checkbox id="test" onChange={onChange} isSelected={false} />);
      wrapper.find('input').simulate('change');
      expect(onChange).toHaveBeenCalledWith(true);
    });
  });

  describe('passes other props', () => {
    it('passes in class name', () => {
      const mockFun = jest.fn();
      const instance = shallow(<Checkbox id="test" className="my-class" onBlur={mockFun} />);
      expect(instance.find('input').prop('onBlur')).toBe(mockFun);
    });
  });
});

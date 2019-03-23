import React from 'react';
import { mount, shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Checkbox id="test" />); }).not.toThrow();
  });

  it('isSelected should be reflected in the input', () => {
    const wrapper = mount(<Checkbox id="test" onChange={() => {}} isSelected />);
    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  it('disabled should be reflected in the input', () => {
    const wrapper = mount(<Checkbox id="test" onChange={() => {}} disabled />);
    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  it('isSelected and disabled should be reflected in the input', () => {
    const wrapper = mount(<Checkbox id="test" isSelected disabled />);
    expect(wrapper.find('input').prop('disabled')).toBe(true);
    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  describe('handleChange', () => {
    it('calls onChange if defined', () => {
      const onChange = jest.fn();
      const wrapper = mount(<Checkbox id="test" onChange={onChange} />);
      wrapper.find('input').simulate('change');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});

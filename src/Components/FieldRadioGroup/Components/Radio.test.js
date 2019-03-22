import React from 'react';
import { mount, shallow } from 'enzyme';

import Radio from './Radio';

describe('Radio', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Radio id="test" label="test radio" />); }).not.toThrow();
  });

  it('should render an input and the label', () => {
    const label = 'test label';
    const wrapper = mount(<Radio id="test" label={label} onChange={() => {}} />);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('label').text()).toBe(label);
  });

  it('isSelected should be reflected in the input', () => {
    const wrapper = mount(<Radio id="test" label="test radio" onChange={() => {}} isSelected />);
    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  it('disabled should be reflected in the input', () => {
    const wrapper = mount(<Radio id="test" label="test radio" onChange={() => {}} disabled />);
    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  describe('handleChange', () => {
    it('calls onChange if defined', () => {
      const onChange = jest.fn();
      const wrapper = mount(<Radio id="test" label="test radio" onChange={onChange} />);
      wrapper.find('input').simulate('change');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(<Radio id="test" label="test radio" helpText={text} />);
      expect(wrapper.contains(text)).toBe(true);
    });
  });
});

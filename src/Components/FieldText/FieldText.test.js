import React from 'react';
import { mount, shallow } from 'enzyme';
import FieldText from './FieldText';

import Input from '../Input/Input';

describe('FieldText', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<FieldText label="test" />); }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<FieldText label="test" className="myClass" />);
    expect(wrapper.prop('className')).toContain('myClass');
  });

  it('sets aria-label if isLabelHidden is true', () => {
    const wrapper = shallow(<FieldText label="hiddenLabel" isLabelHidden />);
    expect(wrapper.find(Input).prop('ariaLabel')).toEqual('hiddenLabel');
  });

  it('renders helpText if set', () => {
    const wrapper = mount(<FieldText label="label" helpText="i am help text" />);
    expect(wrapper.find('.field-text-help').exists()).toBe(true);
  });

  describe('validation', () => {
    it('renders validationText if isInvalid', () => {
      const wrapper = mount(<FieldText label="label" validationText="this is invalid" isInvalid />);
      expect(wrapper.find('.field-text-validation').exists()).toBe(true);
    });
    it('does not render validationText if isInvalid is false', () => {
      const wrapper = mount(<FieldText label="label" validationText="this is invalid" />);
      expect(wrapper.find('.field-text-validation').exists()).toBe(false);
    });
  });
});

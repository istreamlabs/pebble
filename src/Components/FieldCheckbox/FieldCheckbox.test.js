import React from 'react';
import { shallow } from 'enzyme';

import FieldCheckbox from './FieldCheckbox';
import Block from '../Block/Block';

describe('FieldCheckbox', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<FieldCheckbox id="1" label="test" />); }).not.toThrow();
  });

  describe('labelMarkup', () => {
    it('renders label', () => {
      const text = 'I am title text';
      const wrapper = shallow(<FieldCheckbox id="1" label={text} />);
      expect(wrapper.contains(text)).toBe(true);
    });

    it('renders a toggle', () => {
      const wrapper = shallow(<FieldCheckbox id="test" toggle label="toggle" />);
      expect(wrapper.find(Block).at(0).prop('className')).toContain('toggle');
    });
  });

  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(<FieldCheckbox id="1" label="test" helpText={text} />);
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  describe('getValidationTextMarkup', () => {
    it('renders validation text if isInvalid', () => {
      const validationText = 'I am validation text';
      const wrapper = shallow(<FieldCheckbox id="1" label="test" isInvalid validationText={validationText} />);
      expect(wrapper.contains(validationText)).toBe(true);
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import FieldCheckbox from './FieldCheckbox';

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
  });

  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(<FieldCheckbox id="1" label="test" helpText={text} />);
      expect(wrapper.contains(text)).toBe(true);
    });
  });
});

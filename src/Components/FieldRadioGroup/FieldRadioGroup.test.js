import React from 'react';
import { mount, shallow } from 'enzyme';

import FieldRadioGroup from './FieldRadioGroup';

import Radio from './Radio';

const testRadios = [
  {
    name: 'test', id: 'small', value: 'small', label: 'Small', defaultSelected: true
  },
  {
    name: 'test', id: 'medium', value: 'medium', label: 'Medium'
  },
  {
    name: 'test', id: 'large', value: 'large', label: 'Large'
  },
];

describe('FieldRadioGroup', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<FieldRadioGroup label="test" />); }).not.toThrow();
  });

  it('renders the correct number of radios', () => {
    const wrapper = shallow(<FieldRadioGroup label="test" radios={testRadios} />);
    expect(wrapper.find(Radio).length).toBe(3);
  });

  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(<FieldRadioGroup label="test" radios={testRadios} helpText={text} />);
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  describe('getRadioItems', () => {
    it('does not check a radio if not specified', () => {
      const items = [
        { id: '1', name: 'n', value: '1' },
        { id: '2', name: 'n', value: '2' },
        { id: '3', name: 'n', value: '3' },
      ];
      const wrapper = mount(<FieldRadioGroup label="test" radios={items} />);
      const radios = wrapper.find(Radio);
      for (let i = 0; i < radios.length; i++) {
        expect(radios.at(i).prop('isSelected')).toBe(false);
      }
    });
    it('checks specified radio', () => {

    });
    it('checks the defaultSelected radio', () => {

    });
  });
});

import React from 'react';
import { mount, shallow } from 'enzyme';

import FieldRadioGroup from './FieldRadioGroup';

import Radio from './Components/Radio';

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
    expect(() => { shallow(<FieldRadioGroup />); }).not.toThrow();
  });

  it('renders the correct number of radios', () => {
    const wrapper = shallow(<FieldRadioGroup radios={testRadios} />);
    expect(wrapper.find(Radio).length).toBe(3);
  });

  describe('titleMarkup', () => {
    it('renders title if set', () => {
      const text = 'I am title text';
      const wrapper = shallow(<FieldRadioGroup radios={testRadios} title={text} />);
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(<FieldRadioGroup radios={testRadios} helpText={text} />);
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  describe('getRadioItems', () => {
    it('checks the first radio if not specified', () => {
      const items = [
        {
          id: '1', value: '1', label: '1'
        },
        {
          id: '2', value: '2', label: '2'
        },
        {
          id: '3', value: '3', label: '3'
        },
      ];
      const wrapper = mount(<FieldRadioGroup radios={items} />);
      const radios = wrapper.find(Radio);
      expect(radios.at(0).prop('isSelected')).toBe(true);
    });

    it('checks specified radio', () => {
      const items = [
        {
          id: '1', value: '1', label: '1'
        },
        {
          id: '2', value: '2', label: '2'
        },
        {
          id: '3', value: '3', label: '3'
        },
      ];
      const wrapper = mount(<FieldRadioGroup value="2" radios={items} />);
      const radios = wrapper.find(Radio);
      expect(radios.at(1).prop('isSelected')).toBe(true);
    });

    it('checks specified radio is disabled', () => {
      const items = [
        {
          id: '1', value: '1', label: '1'
        },
        {
          id: '2', value: '2', label: '2', disabled: true
        },
        {
          id: '3', value: '3', label: '3'
        },
      ];
      const wrapper = mount(<FieldRadioGroup value="2" radios={items} />);
      const radios = wrapper.find(Radio);
      expect(radios.at(1).prop('disabled')).toBe(true);
    });
  });
});

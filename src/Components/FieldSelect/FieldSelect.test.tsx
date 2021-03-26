import React from 'react';
import { shallow } from 'enzyme';

import Select from 'react-select';

import FieldSelect from './FieldSelect';

const options = [
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'boysenberry', label: 'Boysenberry' },
  { value: 'bubblegum', label: 'Bubblegum' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'green-tea', label: 'Green Tea' },
  { value: 'lychee', label: 'Lychee' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

describe('FieldSelect', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<FieldSelect id="1" label="test" options={options} />);
    }).not.toThrow();
  });

  it('renders without crashing when is creatable', () => {
    expect(() => {
      shallow(
        <FieldSelect
          id="1"
          label="test"
          creatable
          options={options}
        />,
      );
    }).not.toThrow();
  });

  it('renders without crashing when the options are empty', () => {
    expect(() => {
      shallow(<FieldSelect id="1" label="test" options={[]} />);
    }).not.toThrow();
  });

  it('renders looks invalid if isInvalid is true', () => {
    const wrapper = shallow(
      <FieldSelect
        id="1"
        label="invalid"
        options={options}
        isInvalid
      />,
    );
    expect(wrapper.prop('className')).toContain('invalid');
  });

  describe('selectMarkup', () => {
    it('renders Option component if showCheckbox is true', () => {
      const wrapper = shallow(
        <FieldSelect
          showCheckbox
          multiSelect
          id="1"
          label="show checkbox"
          options={options}
        />,
      );
      expect(wrapper.find(Select).prop('components')).toHaveProperty(
        'Option',
      );
    });

    it('does not show checkbox if it is not multiSelect', () => {
      const wrapper = shallow(
        <FieldSelect
          showCheckbox
          id="1"
          label="show checkbox"
          options={options}
        />,
      );
      expect(
        wrapper.find(Select).prop('components'),
      ).not.toHaveProperty('Option');
    });
  });

  describe('labelMarkup', () => {
    it('renders label', () => {
      const text = 'I am title text';
      const wrapper = shallow(<FieldSelect id="1" label={text} />);
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(
        <FieldSelect id="1" label="test" helpText={text} />,
      );
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  describe('getValidationTextMarkup', () => {
    it('renders validation text if isInvalid', () => {
      const validationText = 'I am validation text';
      const wrapper = shallow(
        <FieldSelect
          id="1"
          label="test"
          isInvalid
          validationText={validationText}
        />,
      );
      expect(wrapper.contains(validationText)).toBe(true);
    });
  });
});

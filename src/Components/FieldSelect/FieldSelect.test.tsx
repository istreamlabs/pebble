// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-select' or its correspon... Remove this comment to see the full error message
import Select from 'react-select';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldSelect' was resolved to '/Users/esj... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FieldSelect', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<FieldSelect id="1" label="test" options={options} />);
    }).not.toThrow();
  });

  it('renders without crashing when is creatable', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<FieldSelect id="1" label="test" options={[]} />);
    }).not.toThrow();
  });

  it('renders looks invalid if isInvalid is true', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FieldSelect
        id="1"
        label="invalid"
        options={options}
        isInvalid
      />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.prop('className')).toContain('invalid');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('selectMarkup', () => {
    it('renders Option component if showCheckbox is true', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldSelect
          showCheckbox
          multiSelect
          id="1"
          label="show checkbox"
          options={options}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Select).prop('components')).toHaveProperty(
        'Option',
      );
    });

    it('does not show checkbox if it is not multiSelect', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldSelect
          showCheckbox
          id="1"
          label="show checkbox"
          options={options}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper.find(Select).prop('components'),
      ).not.toHaveProperty('Option');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('labelMarkup', () => {
    it('renders label', () => {
      const text = 'I am title text';
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<FieldSelect id="1" label={text} />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldSelect id="1" label="test" helpText={text} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getValidationTextMarkup', () => {
    it('renders validation text if isInvalid', () => {
      const validationText = 'I am validation text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldSelect
          id="1"
          label="test"
          isInvalid
          validationText={validationText}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.contains(validationText)).toBe(true);
    });
  });
});

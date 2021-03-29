// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldCheckbox' was resolved to '/Users/e... Remove this comment to see the full error message
import FieldCheckbox from './FieldCheckbox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FieldCheckbox', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<FieldCheckbox id="1" label="test" />);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('labelMarkup', () => {
    it('renders label', () => {
      const text = 'I am title text';
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<FieldCheckbox id="1" label={text} />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.contains(text)).toBe(true);
    });

    it('renders label when required', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldCheckbox required id="1" label="I am required" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('span').prop('className')).toBe(
        'required-input',
      );
    });

    it('renders a toggle', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldCheckbox id="test" toggle label="toggle" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper
          .find(Block)
          .at(0)
          .prop('className'),
      ).toContain('toggle');
    });

    it('applies label as aria-label if hideLabel is true', () => {
      const text = 'I am label text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldCheckbox hideLabel id="1" label={text} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('Checkbox').prop('aria-label')).toBe(text);
    });

    it('applies label as aria-label if toggle and hideLabel is true', () => {
      const text = 'I am label text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldCheckbox toggle hideLabel id="1" label={text} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('Checkbox').prop('aria-label')).toBe(text);
    });

    it('applies label as aria-required if hideLabel is true and required is true', () => {
      const text = 'I am required';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldCheckbox required hideLabel id="1" label={text} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('Checkbox').prop('aria-required')).toBe(
        true,
      );
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldCheckbox id="1" label="test" helpText={text} />,
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
        <FieldCheckbox
          id="1"
          label="test"
          isInvalid
          validationText={validationText}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.contains(validationText)).toBe(true);
    });

    it('renders validation text if isInvalid, hiddenLabel and toggle', () => {
      const validationText = 'I am validation text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldCheckbox
          hiddenLabel
          toggle
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

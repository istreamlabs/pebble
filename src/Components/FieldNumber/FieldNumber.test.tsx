// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldNumber' was resolved to '/Users/esj... Remove this comment to see the full error message
import FieldNumber from './FieldNumber';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Input/Input' was resolved to '/Users/es... Remove this comment to see the full error message
import Input from '../Input/Input';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Text from '../Text/Text';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FieldNumber', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<FieldNumber id="testField" label="test" />);
    }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FieldNumber id="testField" label="test" className="myClass" />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.prop('className')).toContain('myClass');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getLabelMarkup', () => {
    it('sets aria-label if hideLabel is true', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldNumber id="testField" label="hiddenLabel" hideLabel />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Input).prop('ariaLabel')).toEqual(
        'hiddenLabel',
      );
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getHelpTextMarkup', () => {
    it('display the correct help text if passed', () => {
      const helpText = 'i am help text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldNumber
          id="testField"
          label="label"
          helpText={helpText}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper
          .find(Text)
          .childAt(0)
          .text(),
      ).toBe(helpText);
    });

    it('returns undefined if no helptext is set', () => {
      const instance = new FieldNumber({ label: 'test' });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getHelpTextMarkup()).toBe(null);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getValidationTextMarkup', () => {
    it('renders validationText if isInvalid', () => {
      const validationText = 'this is invalid';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldNumber
          id="testField"
          label="label"
          validationText={validationText}
          isInvalid
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper
          .find(Text)
          .childAt(0)
          .text(),
      ).toBe(validationText);
    });
    it('returns undefined if isInvalid is false', () => {
      const instance = new FieldNumber({
        label: 'label',
        validationText: 'this is invalid',
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getValidationTextMarkup()).toBe(undefined);
    });
    it('returns undefined if isInvalid is true but no validationText is set', () => {
      const instance = new FieldNumber({
        label: 'label',
        isInvalid: true,
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getValidationTextMarkup()).toBe(undefined);
    });
  });
});

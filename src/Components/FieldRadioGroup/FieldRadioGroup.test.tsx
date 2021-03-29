// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldRadioGroup' was resolved to '/Users... Remove this comment to see the full error message
import FieldRadioGroup from './FieldRadioGroup';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Radio' was resolved to '/User... Remove this comment to see the full error message
import Radio from './Components/Radio';

const testRadios = [
  {
    name: 'test',
    id: 'small',
    value: 'small',
    label: 'Small',
    defaultSelected: true,
  },
  {
    name: 'test',
    id: 'medium',
    value: 'medium',
    label: 'Medium',
  },
  {
    name: 'test',
    id: 'large',
    value: 'large',
    label: 'Large',
  },
];

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FieldRadioGroup', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<FieldRadioGroup name="test" radios={testRadios} />);
    }).not.toThrow();
  });

  it('renders the correct number of radios', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FieldRadioGroup name="test" radios={testRadios} />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Radio).length).toBe(3);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('titleMarkup', () => {
    it('renders title if set', () => {
      const text = 'I am title text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldRadioGroup
          name="test"
          radios={testRadios}
          title={text}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('required', () => {
    it('sets required correctly', () => {
      const text = 'I am title text';

      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldRadioGroup
          name="test"
          radios={testRadios}
          title={text}
          required
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('fieldset').props()['aria-required']).toBe(
        true,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('legend').props().className).toBe(
        'required-input fw-700 db mb-2',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('Radio[required]').length).toEqual(
        testRadios.length,
      );
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldRadioGroup
          name="test"
          radios={testRadios}
          helpText={text}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.contains(text)).toBe(true);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getRadioItems', () => {
    it('returns null if there are no radios', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldRadioGroup name="test" radios={[]} />,
      );
      const radios = wrapper.find(Radio);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(radios.length).toEqual(0);
    });
    it('checks the first radio if not specified', () => {
      const items = [
        {
          id: '1',
          value: '1',
          label: '1',
        },
        {
          id: '2',
          value: '2',
          label: '2',
        },
        {
          id: '3',
          value: '3',
          label: '3',
        },
      ];
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldRadioGroup name="test" radios={items} />,
      );
      const radios = wrapper.find(Radio);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(radios.at(0).prop('isSelected')).toBe(true);
    });

    it('checks specified radio', () => {
      const items = [
        {
          id: '1',
          value: '1',
          label: '1',
        },
        {
          id: '2',
          value: '2',
          label: '2',
        },
        {
          id: '3',
          value: '3',
          label: '3',
        },
      ];
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldRadioGroup name="test" value="2" radios={items} />,
      );
      const radios = wrapper.find(Radio);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(radios.at(1).prop('isSelected')).toBe(true);
    });

    it('checks specified radio is disabled', () => {
      const items = [
        {
          id: '1',
          value: '1',
          label: '1',
        },
        {
          id: '2',
          value: '2',
          label: '2',
          disabled: true,
        },
        {
          id: '3',
          value: '3',
          label: '3',
        },
      ];
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldRadioGroup name="test" value="2" radios={items} />,
      );
      const radios = wrapper.find(Radio);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(radios.at(1).prop('disabled')).toBe(true);
    });
  });
});

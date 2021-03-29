// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Radio' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import Radio from './Radio';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Radio', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Radio id="test" label="test radio" />);
    }).not.toThrow();
  });

  it('should render an input and the label', () => {
    const label = 'test label';
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Radio id="test" label={label} onChange={() => {}} />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('input').length).toBe(1);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('label').text()).toBe(label);
  });

  it('isSelected should be reflected in the input', () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Radio
        id="test"
        label="test radio"
        onChange={() => {}}
        isSelected
      />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  it('disabled should be reflected in the input', () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Radio
        id="test"
        label="test radio"
        onChange={() => {}}
        disabled
      />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleChange', () => {
    it('calls onChange if defined', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onChange = jest.fn();
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Radio id="test" label="test radio" onChange={onChange} />,
      );
      wrapper.find('input').simulate('change');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('helpTextMarkup', () => {
    it('renders helpText if set', () => {
      const text = 'I am help text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Radio id="test" label="test radio" helpText={text} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.contains(text)).toBe(true);
    });
  });
});

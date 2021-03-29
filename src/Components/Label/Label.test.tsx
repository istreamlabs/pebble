// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Label' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import Label from './Label';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Label', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Label id="input">label</Label>);
    }).not.toThrow();
  });
  it('adds classes', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Label id="input" disabled invalid required>
        label
      </Label>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      ['neutral-500', 'red'].every(c =>
        wrapper.find('label').hasClass(c),
      ),
    ).toEqual(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('span').props().className).toBe(
      'required-input',
    );
  });
  it('renders a Visually Hidden label', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Label id="input" hide>
        hidden label
      </Label>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(VisuallyHidden)).toHaveLength(1);
  });
});

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';
// @ts-expect-error ts-migrate(6142) FIXME: Module './TableCell' was resolved to '/Users/esjaa... Remove this comment to see the full error message
import TableCell from './TableCell';
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
jest.mock('../../../Hooks/UseMobileLayout');

describe('TableCell', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => false);
  });
  it('renders without crashing', () => {
    expect(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      shallow(<TableCell />);
    }).not.toThrow();
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  });
  it('applies gridcell as the role by default', () => {
    const wrapper = shallow(<TableCell />);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(wrapper.prop('role')).toBe('gridcell');
  });
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('sets the role if specified', () => {
    const wrapper = shallow(<TableCell role="columnheader" />);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(wrapper.prop('role')).toBe('columnheader');
  });
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('sets the width to 100% if viewed in mobile sized viewport, even if specified', () => {
    useMobileLayout.mockImplementation(() => true);
    const wrapper = shallow(<TableCell width="20px" />);
    expect(wrapper.prop('width')).toBe('100%');
  });
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  it('sets the width if specified', () => {
    const wrapper = shallow(<TableCell width="20px" />);
    expect(wrapper.prop('width')).toBe('20px');
  });
});
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message

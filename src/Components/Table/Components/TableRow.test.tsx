// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';

// @ts-expect-error ts-migrate(6142) FIXME: Module './TableRow' was resolved to '/Users/esjaas... Remove this comment to see the full error message
import TableRow from './TableRow';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
jest.mock('../../../Hooks/UseMobileLayout');

describe('TableRow', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => false);
  });

  it('renders without crashing', () => {
    expect(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      shallow(<TableRow />);
    }).not.toThrow();
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  });

  it('renders blank children without crashing', () => {
    expect(() => {
      shallow(
        <TableRow>
          {/* @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'. */}
          {null}
          <div />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </TableRow>,
      );
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    }).not.toThrow();
  });

  it('sets the direction to row when not mobile', () => {
    const wrapper = shallow(<TableRow />);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(wrapper.prop('direction')).toBe('row');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.prop('margin')).toStrictEqual(['4 0 0 0', '0']);
  });
});

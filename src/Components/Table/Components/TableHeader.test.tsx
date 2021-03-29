// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';

// @ts-expect-error ts-migrate(6142) FIXME: Module './TableHeader' was resolved to '/Users/esj... Remove this comment to see the full error message
import TableHeader from './TableHeader';
// @ts-expect-error ts-migrate(6142) FIXME: Module './TableCell' was resolved to '/Users/esjaa... Remove this comment to see the full error message
import TableCell from './TableCell';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Heading/Heading' was resolved to '/U... Remove this comment to see the full error message
import Heading from '../../Heading/Heading';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
jest.mock('../../../Hooks/UseMobileLayout');

describe('TableHeader', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => false);
  });
  it('renders without crashing', () => {
    expect(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      shallow(<TableHeader mobileLabel="heading" />);
    }).not.toThrow();
  });

  it('renders null if mobileLayout is true and mobileLabel is undefined', () => {
    useMobileLayout.mockImplementation(() => true);
    const wrapper = shallow(<TableHeader />);
    expect(wrapper.html()).toEqual(null);
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  describe('childrenMarkup', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    it('returns the mobileLabel if viewed in mobile sized viewport', () => {
      useMobileLayout.mockImplementation(() => true);
      const wrapper = shallow(
        <TableHeader mobileLabel="mobile header" />,
      );
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      expect(wrapper.find(Heading)).toHaveLength(1);
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('renders the correct number of children when not viewed on mobile', () => {
      const wrapper = shallow(
        <TableHeader mobileLabel="heading">
          <TableCell>1</TableCell>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableCell>2</TableCell>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableCell>3</TableCell>
        </TableHeader>,
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      );
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      expect(wrapper.children()).toHaveLength(3);
    });
  });
});
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.

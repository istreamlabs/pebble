// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';
// @ts-expect-error ts-migrate(6142) FIXME: Module './TableHeaderCell' was resolved to '/Users... Remove this comment to see the full error message
import TableHeaderCell from './TableHeaderCell';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Button/Button' was resolved to '/Use... Remove this comment to see the full error message
import Button from '../../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Icon from '../../Icon/Icon';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
jest.mock('../../../Hooks/UseMobileLayout');

describe('TableHeaderCell', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => false);
  });
  it('renders without crashing', () => {
    expect(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      shallow(<TableHeaderCell />);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    }).not.toThrow();
  });

  it('sets the width to 100% if viewed in mobile sized viewport, even if specified', () => {
    useMobileLayout.mockImplementation(() => true);
    const wrapper = shallow(
      <TableHeaderCell width="20px" onSort={() => {}} />,
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    );
    expect(wrapper.prop('width')).toBe('100%');
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('sets the flex to grow if width is 100%', () => {
    useMobileLayout.mockImplementation(() => true);
    const wrapper = shallow(<TableHeaderCell onSort={() => {}} />);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(wrapper.prop('width')).toBe('100%');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.prop('flex')).toBe('grow');
  });
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('sets the width if specified', () => {
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('20px');
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(wrapper.prop('flex')).toBe(undefined);
  });
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('sets the flex to grow if width is 100%', () => {
    const wrapper = shallow(<TableHeaderCell width="100%" />);
    expect(wrapper.prop('flex')).toBe('grow');
  });

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  describe('getSortDirectionArrow()', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('sets arrow to up when sortDirection is ASC', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      const wrapper = shallow(
        <TableHeaderCell onSort={() => {}} sortDirection="ASC" />,
      );
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      expect(wrapper.find(Icon).prop('name')).toContain(
        'arrow-small-up',
      );
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('sets arrow to down when sortDirection is DESC', () => {
      const wrapper = shallow(
        <TableHeaderCell onSort={() => {}} sortDirection="DESC" />,
      );
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      expect(wrapper.find(Icon).prop('name')).toContain(
        'arrow-small-down',
      );
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('does not have an direction icon when sortDirection is null', () => {
      const wrapper = shallow(<TableHeaderCell onSort={() => {}} />);
      expect(wrapper.find(Icon)).toHaveLength(0);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    });
  });

  describe('onSortClick()', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    const mockFunc = jest.fn();
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    it('sets onSort to the Button', () => {
      const wrapper = mount(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        <TableHeaderCell onSort={mockFunc} sortDirection="ASC" />,
      );
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      wrapper.find(Button).simulate('click');
      expect(mockFunc).toBeCalledTimes(1);
    });
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('sets the width to 100% if viewed in mobile sized viewport, even if specified', () => {
    useMobileLayout.mockImplementation(() => true);
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('100%');
  });
  it('sets the width if specified', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    useMobileLayout.mockImplementation(() => false);
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('20px');
  });

  it('sets the flex to grow if width is 100%', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<TableHeaderCell width="100%" />);
    expect(wrapper.prop('flex')).toBe('grow');
  });
  it('sets the flex to undefined width is not set', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<TableHeaderCell width="20%" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.prop('flex')).toBeUndefined();
  });
});
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message

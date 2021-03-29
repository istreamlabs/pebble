// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Pagination' was resolved to '/Users/esja... Remove this comment to see the full error message
import Pagination from './Pagination';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Pagination', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Pagination currentPage={1} numPages={5} />);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getPageSelectDropdown()', () => {
    it('returns nothing if number of pages is undefined', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onPageChangeFunc = jest.fn();
      const instance = new Pagination({
        currentPage: 1,
        onPageChange: onPageChangeFunc,
      });
      const dropdown = instance.getPageSelectDropdown();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(dropdown).toBe(undefined);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('onPageSelect()', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onPageChangeFunc = jest.fn();
    it('calls onPageChange when a different page is selected than the current page', () => {
      const instance = new Pagination({
        currentPage: 1,
        onPageChange: onPageChangeFunc,
        numPages: 4,
      });
      instance.onPageSelect(2);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onPageChangeFunc).toHaveBeenCalled();
    });

    it('does not call onPageChange when selected page is the current page', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onPageChangeFunc = jest.fn();
      const instance = new Pagination({
        currentPage: 1,
        onPageChange: onPageChangeFunc,
      });
      instance.onPageSelect({ value: 1 });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onPageChangeFunc).toHaveBeenCalledTimes(0);
    });

    it('decrements the page when prev is clicked', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onPageChangeFunc = jest.fn();
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Pagination
          currentPage={1}
          onPageChange={onPageChangeFunc}
          numPages={5}
        />,
      );
      wrapper
        .find(Button)
        .first()
        .simulate('click');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onPageChangeFunc).toHaveBeenCalledWith(0);
    });

    it('increments the page when next is clicked', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onPageChangeFunc = jest.fn();
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Pagination
          currentPage={1}
          onPageChange={onPageChangeFunc}
          numPages={5}
        />,
      );
      wrapper
        .find(Button)
        .last()
        .simulate('click');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onPageChangeFunc).toHaveBeenCalledWith(2);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('render', () => {
    it('disables the Next button if currentPage equal to Math.ceiling of numPages', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onPageChangeFunc = jest.fn();
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Pagination
          currentPage={2}
          onPageChange={onPageChangeFunc}
          numPages={1.2}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper
          .find(Button)
          .first()
          .prop('disabled'),
      ).toBe(false);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper
          .find(Button)
          .last()
          .prop('disabled'),
      ).toBe(true);
    });

    it('does not disable the Next button if numPages is not set', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onPageChangeFunc = jest.fn();
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Pagination
          currentPage={2}
          onPageChange={onPageChangeFunc}
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper
          .find(Button)
          .first()
          .prop('disabled'),
      ).toBe(false);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper
          .find(Button)
          .last()
          .prop('disabled'),
      ).toBe(false);
    });
  });
});

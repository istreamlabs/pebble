import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button/Button';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Pagination currentPage={1} numPages={5} />);
    }).not.toThrow();
  });

  describe('getPageSelectDropdown()', () => {
    it('returns nothing if number of pages is undefined', () => {
      const onPageChangeFunc = jest.fn();
      const instance = new Pagination({
        currentPage: 1,
        onPageChange: onPageChangeFunc,
      });
      const dropdown = instance.getPageSelectDropdown();
      expect(dropdown).toBe(undefined);
    });
  });

  describe('onPageSelect()', () => {
    const onPageChangeFunc = jest.fn();
    it('calls onPageChange when a different page is selected than the current page', () => {
      const instance = new Pagination({
        currentPage: 1,
        onPageChange: onPageChangeFunc,
      });
      instance.onPageSelect(2);
      expect(onPageChangeFunc).toHaveBeenCalled();
    });

    it('does not call onPageChange when selected page is the current page', () => {
      const onPageChangeFunc = jest.fn();
      const instance = new Pagination({
        currentPage: 1,
        onPageChange: onPageChangeFunc,
      });
      instance.onPageSelect({ value: 1 });
      expect(onPageChangeFunc).toHaveBeenCalledTimes(0);
    });

    it('decrements the page when prev is clicked', () => {
      const onPageChangeFunc = jest.fn();
      const wrapper = shallow(
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
      expect(onPageChangeFunc).toHaveBeenCalledWith(0);
    });

    it('increments the page when next is clicked', () => {
      const onPageChangeFunc = jest.fn();
      const wrapper = shallow(
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
      expect(onPageChangeFunc).toHaveBeenCalledWith(2);
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Pagination currentPage={1} numPages={5} />); }).not.toThrow();
  });

  describe('onPageSelect()', () => {
    const onPageChangeFunc = jest.fn();
    it('calls onPageChange when a different page is selected than the current page', () => {
      const instance = new Pagination({
        currentPage: 1,
        onPageChange: onPageChangeFunc
      });
      instance.onPageSelect(2);
      expect(onPageChangeFunc).toHaveBeenCalled();
    });

    it('does not call onPageChange when selected page is the current page', () => {
      const onPageChangeFunc = jest.fn();
      const instance = new Pagination({
        currentPage: 1,
        onPageChange: onPageChangeFunc
      });
      instance.onPageSelect({ value: 1 });
      expect(onPageChangeFunc).toHaveBeenCalledTimes(0);
    });
  });

  describe('onPrevClick()', () => {
    const prevFunc = jest.fn();
    it('calls onPrev when the previous button is clicked', () => {
      const instance = new Pagination({
        onPrev: prevFunc
      });
      instance.onPrevClick();
      expect(prevFunc).toHaveBeenCalled();
    });
  });

  describe('onNextClick()', () => {
    const nextFunc = jest.fn();
    it('calls onNext when the next button is clicked', () => {
      const instance = new Pagination({
        onNext: nextFunc
      });
      instance.onNextClick();
      expect(nextFunc).toHaveBeenCalled();
    });
  });
});

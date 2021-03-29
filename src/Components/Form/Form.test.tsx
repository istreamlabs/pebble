// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Form' was resolved to '/Users/esjaastad/... Remove this comment to see the full error message
import Form from './Form';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Form', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Form />);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('onChange', () => {
    it('passes in onChange', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockFunc = jest.fn();
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Form onChange={mockFunc} />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('form').prop('onChange')).toBe(mockFunc);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleSubmit', () => {
    it('calls onSubmit', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockFunc = jest.fn();
      const instance = new Form({ onSubmit: mockFunc });
      instance.handleSubmit({ preventDefault: () => {} });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(mockFunc).toHaveBeenCalledTimes(1);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleReset', () => {
    it('calls onReset', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockFunc = jest.fn();
      const instance = new Form({ onReset: mockFunc });
      instance.handleReset({ preventDefault: () => {} });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(mockFunc).toHaveBeenCalledTimes(1);
    });
  });
});

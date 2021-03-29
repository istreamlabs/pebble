// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react' or its... Remove this comment to see the full error message
import { fireEvent, render } from '@testing-library/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'focus-trap-react' or its corre... Remove this comment to see the full error message
import FocusTrap from 'focus-trap-react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Popover' was resolved to '/Users/esjaast... Remove this comment to see the full error message
import Popover from './Popover';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-dom/test-utils' or its c... Remove this comment to see the full error message
import { act } from 'react-dom/test-utils';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount } from 'enzyme';

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
jest.mock('popper.js', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  const PopperJS = jest.requireActual('popper.js');

  return class {
    static placements = PopperJS.placements;

    constructor() {
      return {
        destroy: () => {},
        scheduleUpdate: () => {},
      };
    }
  };
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Popover', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  jest.useFakeTimers();

  it('renders the trigger and popover when clicked', () => {
    const { getByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Popover content={<div>popover content</div>}>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button type="button">trigger</button>
      </Popover>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('trigger')).toBeDefined();
    fireEvent.click(getByText('trigger'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('popover content')).toBeDefined();
  });

  it('calls onToggle when the popover is opened and closed', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const mockFn = jest.fn();

    const { getByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Popover onToggle={mockFn} content={<div>popover content</div>}>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button type="button">trigger</button>
      </Popover>,
    );
    fireEvent.click(getByText('trigger'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('popover content')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockFn).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText('trigger'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('applies the content background color to the arrow', () => {
    const { getByTestId } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Popover
        isOpen
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        content={<Block background="red">popover content</Block>}
      >
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button type="button">trigger</button>
      </Popover>,
    );
    const popoverArrow = getByTestId('popover-arrow');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(popoverArrow.classList.contains('bg-red')).toEqual(true);
  });

  it('calls the trigger onClick when trigger is clicked', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const mockFn = jest.fn();

    const { getByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Popover content={<div>popover content</div>}>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button onClick={mockFn} type="button">
          trigger
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </button>
      </Popover>,
    );
    fireEvent.click(getByText('trigger'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('popover content')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockFn).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText('trigger'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('passes the onTriggerClicked handler to content render prop', () => {
    const { getByText, queryByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Popover
        arrowColor="blue"
        content={onTriggerClicked => (
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <div>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <button type="button" onClick={onTriggerClicked}>
              Content Button
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </button>
          </div>
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        )}
      >
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button type="button">trigger</button>
      </Popover>,
    );
    fireEvent.click(getByText('trigger'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    fireEvent.click(getByText('Content Button'));
    expect(queryByText('Content Button')).toBeNull();
  });

  it('adds FocusTrap if trapFocus is true', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const instance = mount(
      <Popover
        trapFocus
        arrowColor="neutral-200"
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        content={onTriggerClicked => (
          <div>
            <button onClick={onTriggerClicked} type="button">
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              focusable button
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </button>
          </div>
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        )}
      >
        {/* @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'. */}
        <button type="button">trigger</button>
      </Popover>,
    );
    expect(instance.find(FocusTrap).exists()).toBe(true);
  });

  it('will close after a given amount of time', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { getByText, queryByText } = render(
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <Popover closeAfter={3000} content={<div>popover content</div>}>
        {/* @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'. */}
        <button type="button">trigger</button>
      </Popover>,
    );
    expect(getByText('trigger')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    fireEvent.click(getByText('trigger'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    expect(getByText('popover content')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    act(() => {
      jest.runAllTimers();
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    expect(queryByText('popover content')).toBeNull();
  });

  describe('onBodyClick', () => {
    it('closes the popover when the body is clicked', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const { getByText, queryByText } = render(
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <Popover content={<div>popover content</div>}>
          <button type="button">trigger</button>
        </Popover>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      fireEvent.click(getByText('trigger'));
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(getByText('popover content')).toBeDefined();
      fireEvent.click(document.body);
      expect(queryByText('popover content')).toBeNull();
    });

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    it('does not close the popover when content is clicked', () => {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      const { getByText } = render(
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <Popover content={<div>popover content</div>}>
          <button type="button">trigger</button>
        </Popover>,
      );
      fireEvent.click(getByText('trigger'));
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      const content = getByText('popover content');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(content).toBeDefined();
      fireEvent.click(content);
      expect(content).toBeDefined();
    });

    it('closes the popover when closeOnContentClick is true and content is clicked', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const { getByText, queryByText } = render(
        <Popover
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          closeOnContentClick
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          content={<div>popover content</div>}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        >
          <button type="button">trigger</button>
        </Popover>,
      );
      fireEvent.click(getByText('trigger'));
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      const content = getByText('popover content');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(content).toBeDefined();
      fireEvent.click(content);
      expect(queryByText('popover content')).toBeNull();
    });
  });
});

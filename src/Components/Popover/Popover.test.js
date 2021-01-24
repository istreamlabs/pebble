import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { mount } from 'enzyme';
import FocusTrap from 'focus-trap-react';

import Block from '../Block/Block';
import Popover from './Popover';

jest.mock('popper.js', () => {
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

describe('Popover', () => {
  it('renders the trigger and popover when clicked', () => {
    const { getByText } = render(
      <Popover content={<div>popover content</div>}>
        <button type="button">trigger</button>
      </Popover>,
    );
    expect(getByText('trigger')).toBeDefined();
    fireEvent.click(getByText('trigger'));
    expect(getByText('popover content')).toBeDefined();
  });

  it('calls onToggle when the popover is opened and closed', () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <Popover onToggle={mockFn} content={<div>popover content</div>}>
        <button type="button">trigger</button>
      </Popover>,
    );
    fireEvent.click(getByText('trigger'));
    expect(getByText('popover content')).toBeDefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText('trigger'));
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('applies the content background color to the arrow', () => {
    const { getByTestId } = render(
      <Popover
        isOpen
        content={<Block background="red">popover content</Block>}
      >
        <button type="button">trigger</button>
      </Popover>,
    );
    const popoverArrow = getByTestId('popover-arrow');
    expect(popoverArrow.classList.contains('bg-red')).toEqual(true);
  });

  it('calls the trigger onClick when trigger is clicked', () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <Popover content={<div>popover content</div>}>
        <button onClick={mockFn} type="button">
          trigger
        </button>
      </Popover>,
    );
    fireEvent.click(getByText('trigger'));
    expect(getByText('popover content')).toBeDefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText('trigger'));
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('passes the onTriggerClicked handler to content render prop', () => {
    const { getByText, queryByText } = render(
      <Popover
        arrowColor="blue"
        content={onTriggerClicked => (
          <div>
            <button type="button" onClick={onTriggerClicked}>
              Content Button
            </button>
          </div>
        )}
      >
        <button type="button">trigger</button>
      </Popover>,
    );
    fireEvent.click(getByText('trigger'));
    fireEvent.click(getByText('Content Button'));
    expect(queryByText('Content Button')).toBeNull();
  });

  it('adds FocusTrap if trapFocus is true', () => {
    const instance = mount(
      <Popover
        trapFocus
        arrowColor="neutral-200"
        content={onTriggerClicked => (
          <div>
            <button onClick={onTriggerClicked} type="button">
              focusable button
            </button>
          </div>
        )}
      >
        <button type="button">trigger</button>
      </Popover>,
    );
    expect(instance.find(FocusTrap).exists()).toBe(true);
  });

  describe('onBodyClick', () => {
    it('closes the popover when the body is clicked', () => {
      const { getByText, queryByText } = render(
        <Popover content={<div>popover content</div>}>
          <button type="button">trigger</button>
        </Popover>,
      );
      fireEvent.click(getByText('trigger'));
      expect(getByText('popover content')).toBeDefined();
      fireEvent.click(document.body);
      expect(queryByText('popover content')).toBeNull();
    });

    it('does not close the popover when content is clicked', () => {
      const { getByText } = render(
        <Popover content={<div>popover content</div>}>
          <button type="button">trigger</button>
        </Popover>,
      );
      fireEvent.click(getByText('trigger'));
      const content = getByText('popover content');
      expect(content).toBeDefined();
      fireEvent.click(content);
      expect(content).toBeDefined();
    });

    it('closes the popover when closeOnContentClick is true and content is clicked', () => {
      const { getByText, queryByText } = render(
        <Popover
          closeOnContentClick
          content={<div>popover content</div>}
        >
          <button type="button">trigger</button>
        </Popover>,
      );
      fireEvent.click(getByText('trigger'));
      const content = getByText('popover content');
      expect(content).toBeDefined();
      fireEvent.click(content);
      expect(queryByText('popover content')).toBeNull();
    });
  });
});

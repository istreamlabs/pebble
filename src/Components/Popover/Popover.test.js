import React from 'react';
import { fireEvent, render } from '@testing-library/react';

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
});

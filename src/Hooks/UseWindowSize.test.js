import { cleanup, render } from '@testing-library/react';
import useWindowSize, { ResponsiveProvider } from './UseWindowSize';

import React from 'react';
import developerWarning from '../Utils/DeveloperWarning';

jest.mock('../Utils/DeveloperWarning');

const TestComponent = () => {
  useWindowSize();
  return <div />;
};

describe('useWindowSize', () => {
  let addSpy;
  let removeSpy;

  beforeAll(() => {
    addSpy = jest
      .spyOn(global.window, 'addEventListener')
      .mockImplementation();
    removeSpy = jest
      .spyOn(global.window, 'removeEventListener')
      .mockImplementation();
  });

  afterAll(() => {
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('registers multiple handlers when not wrapped', () => {
    render(
      <>
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
      </>,
    );
    // count up the amount of time resize is called
    // toHaveBeenCalledTimes does not have a filter
    const count = addSpy.mock.calls.filter(c => c[0] === 'resize')
      .length;
    expect(count).toEqual(5);
  });

  it('gives a warning when not wrapped', () => {
    render(
      <>
        <TestComponent />
      </>,
    );
    expect(developerWarning).toHaveBeenCalled();
  });

  it('does not give a warning when wrapped', () => {
    render(
      <ResponsiveProvider>
        <TestComponent />
      </ResponsiveProvider>,
    );
    expect(developerWarning).not.toHaveBeenCalled();
  });

  it('registers single handler when wrapped', () => {
    render(
      <ResponsiveProvider>
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
      </ResponsiveProvider>,
    );
    // count up the amount of time resize is called
    // toHaveBeenCalledTimes does not have a filter
    const count = addSpy.mock.calls.filter(c => c[0] === 'resize')
      .length;
    expect(count).toEqual(1);
  });
});

describe('ResponsiveProvider', () => {
  let addSpy;
  let removeSpy;

  beforeAll(() => {
    addSpy = jest
      .spyOn(global.window, 'addEventListener')
      .mockImplementation();
    removeSpy = jest
      .spyOn(global.window, 'removeEventListener')
      .mockImplementation();
  });

  afterAll(() => {
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('registers an event handler for resize', () => {
    render(
      <ResponsiveProvider>
        <div>Hello World</div>
      </ResponsiveProvider>,
    );
    expect(addSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    );
    cleanup();
    expect(removeSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    );
  });
});

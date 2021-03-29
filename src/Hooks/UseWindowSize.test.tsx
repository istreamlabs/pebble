// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react' or its... Remove this comment to see the full error message
import { cleanup, render } from '@testing-library/react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './UseWindowSize' was resolved to '/Users/e... Remove this comment to see the full error message
import useWindowSize, { ResponsiveProvider } from './UseWindowSize';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
import developerWarning from '../Utils/DeveloperWarning';

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
jest.mock('../Utils/DeveloperWarning');


const TestComponent = () => {
  useWindowSize();
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  return <div />;
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('useWindowSize', () => {
  let addSpy;
  let removeSpy;

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeAll'.
  beforeAll(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    addSpy = jest.spyOn(global.window, 'addEventListener').mockImplementation();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    removeSpy = jest.spyOn(global.window, 'removeEventListener').mockImplementation();
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterAll'.
  afterAll(() => {
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterEach'.
  afterEach(cleanup);

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    jest.resetAllMocks();
  });

  it('registers multiple handlers when not wrapped', () => {
    render(
      <>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
      </>
    );
    // count up the amount of time resize is called
    // toHaveBeenCalledTimes does not have a filter
    const count = addSpy.mock.calls.filter(c => c[0] == 'resize').length;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(count).toEqual(5);
  });

  it('gives a warning when not wrapped', () => {
    render(
      <>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
      </>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(developerWarning).toHaveBeenCalled();
  });

  it('does not give a warning when wrapped', () => {
    render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ResponsiveProvider>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
      </ResponsiveProvider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(developerWarning).not.toHaveBeenCalled();
  });

  it('registers single handler when wrapped', () => {
    render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ResponsiveProvider>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TestComponent />
      </ResponsiveProvider>
    );
    // count up the amount of time resize is called
    // toHaveBeenCalledTimes does not have a filter
    const count = addSpy.mock.calls.filter(c => c[0] == 'resize').length;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(count).toEqual(1);
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ResponsiveProvider', () => {
  let addSpy;
  let removeSpy;

  beforeAll(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeAll'.
    addSpy = jest.spyOn(global.window, 'addEventListener').mockImplementation();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    removeSpy = jest.spyOn(global.window, 'removeEventListener').mockImplementation();
  });

  afterAll(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterAll'.
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  afterEach(cleanup);

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterEach'.
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    jest.resetAllMocks();
  });


  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  it('registers an event handler for resize', () => {
    render(
      <ResponsiveProvider>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>Hello World</div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </ResponsiveProvider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    cleanup();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.

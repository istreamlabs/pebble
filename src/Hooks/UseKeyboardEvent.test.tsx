// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react' or its... Remove this comment to see the full error message
import { render, cleanup, fireEvent } from '@testing-library/react';

import useKeyboardEvent from './UseKeyboardEvent';

const TestComponent = ({ detectKeys, callback }) => {
  useKeyboardEvent(detectKeys, callback);
  return <div />;
};

TestComponent.propTypes = {
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  detectKeys: PropTypes.string,
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  callback: PropTypes.func,
};

afterEach(cleanup);

describe('useKeyboardEvent', () => {
  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('it calls the callback with the correct value when the keydown event is fired with a single key', async () => {
    const callback = jest.fn();
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { container } = render(
      <TestComponent detectKeys="s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ key: string; bubbles: true; wh... Remove this comment to see the full error message
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    fireEvent(container, keyDownEvent);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('it calls the callback with the correct value when the keydown event is fired with alt + letter', async () => {
    const callback = jest.fn();
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { container } = render(
      <TestComponent detectKeys="alt+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ key: string; bubbles: true; wh... Remove this comment to see the full error message
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      altKey: true,
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    fireEvent(container, keyDownEvent);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('it calls the callback with the correct value when the keydown event is fired with ctrl + letter', async () => {
    const callback = jest.fn();
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { container } = render(
      <TestComponent detectKeys="ctrl+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ key: string; bubbles: true; wh... Remove this comment to see the full error message
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      ctrlKey: true,
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    fireEvent(container, keyDownEvent);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('it calls the callback with the correct value when the keydown event but the string is all caps', async () => {
    const callback = jest.fn();
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { container } = render(
      <TestComponent detectKeys="CTRL+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ key: string; bubbles: true; wh... Remove this comment to see the full error message
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      ctrlKey: true,
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    fireEvent(container, keyDownEvent);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('it calls the callback with the correct value when the keydown event is fired with meta + letter', async () => {
    const callback = jest.fn();
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { container } = render(
      <TestComponent detectKeys="meta+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ key: string; bubbles: true; wh... Remove this comment to see the full error message
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      metaKey: true,
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    fireEvent(container, keyDownEvent);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('it calls the callback with the correct value when the keydown event is fired with shift + letter', async () => {
    const callback = jest.fn();
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { container } = render(
      <TestComponent detectKeys="shift+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ key: string; bubbles: true; wh... Remove this comment to see the full error message
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      shiftKey: true,
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    fireEvent(container, keyDownEvent);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

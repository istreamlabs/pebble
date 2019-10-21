import React from 'react';
import PropTypes from 'prop-types';
import { render, cleanup, fireEvent } from '@testing-library/react';

import useKeyboardEvent from './UseKeyboardEvent';

const TestComponent = ({ detectKeys, callback }) => {
  useKeyboardEvent(detectKeys, callback);
  return <div />;
};

TestComponent.propTypes = {
  detectKeys: PropTypes.string,
  callback: PropTypes.func,
};

afterEach(cleanup);

describe('useKeyboardEvent', () => {
  it('it calls the callback with the correct value when the keydown event is fired with a single key', async () => {
    const callback = jest.fn();
    const { container } = render(
      <TestComponent detectKeys="s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
    });
    fireEvent(container, keyDownEvent);
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('it calls the callback with the correct value when the keydown event is fired with alt + letter', async () => {
    const callback = jest.fn();
    const { container } = render(
      <TestComponent detectKeys="alt+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      altKey: true,
    });
    fireEvent(container, keyDownEvent);
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('it calls the callback with the correct value when the keydown event is fired with ctrl + letter', async () => {
    const callback = jest.fn();
    const { container } = render(
      <TestComponent detectKeys="ctrl+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      ctrlKey: true,
    });
    fireEvent(container, keyDownEvent);
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('it calls the callback with the correct value when the keydown event is fired with meta + letter', async () => {
    const callback = jest.fn();
    const { container } = render(
      <TestComponent detectKeys="meta+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      metaKey: true,
    });
    fireEvent(container, keyDownEvent);
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('it calls the callback with the correct value when the keydown event is fired with shift + letter', async () => {
    const callback = jest.fn();
    const { container } = render(
      <TestComponent detectKeys="shift+s" callback={callback} />,
    );
    const keyDownEvent = new KeyboardEvent('keydown', {
      key: 's',
      bubbles: true,
      which: 83,
      code: 'KeyS',
      shiftKey: true,
    });
    fireEvent(container, keyDownEvent);
    expect(callback).toHaveBeenCalledWith(keyDownEvent);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

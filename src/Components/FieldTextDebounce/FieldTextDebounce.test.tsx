import { fireEvent, render, wait } from '@testing-library/react';

import FieldTextDebounce from './FieldTextDebounce';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('FieldTextDebounce', () => {
  jest.useFakeTimers();

  it('Does not call onDebounce without waiting', () => {
    const onDebounce = jest.fn();
    const { getByDisplayValue } = render(
      <FieldTextDebounce
        label="debounce"
        id="debounce"
        delay={2000}
        value="abc"
        onDebounce={onDebounce}
      />,
    );
    act(() => {
      fireEvent.change(getByDisplayValue('abc'), {
        target: {
          value: 'abcd',
        },
      });
    });
    expect(onDebounce).not.toHaveBeenCalled();
    act(() => {
      jest.runAllTimers();
    });
    expect(onDebounce).toHaveBeenCalled();
  });

  it('Does not call onDebounce if there is not the min character limit', () => {
    const onDebounce = jest.fn();
    const { getByDisplayValue } = render(
      <FieldTextDebounce
        label="debounce"
        id="debounce"
        delay={2000}
        minimumCharacters={6}
        value="abc"
        onDebounce={onDebounce}
      />,
    );
    const input = getByDisplayValue('abc');
    fireEvent.change(input, {
      target: {
        value: 'abcd',
      },
    });
    expect(onDebounce).not.toHaveBeenCalled();
    act(() => {
      jest.runAllTimers();
    });
    expect(onDebounce).not.toHaveBeenCalled();
    act(() => {
      fireEvent.change(input, {
        target: {
          value: 'abcdef',
        },
      });
    });
    expect(onDebounce).not.toHaveBeenCalled();
    act(() => {
      jest.runAllTimers();
    });
    expect(onDebounce).toHaveBeenCalled();
  });

  it('shows min message ', async () => {
    const onDebounce = jest.fn();
    const { getByDisplayValue, getByText } = render(
      <FieldTextDebounce
        label="debounce"
        id="debounce"
        value="abc"
        onDebounce={onDebounce}
      />,
    );
    const input = getByDisplayValue('abc');
    fireEvent.focus(input);
    // doesn't show the min char message on focus
    expect(() => getByText('2 character minimum')).toThrow();

    act(() => {
      fireEvent.change(input, { target: { value: '1' } });
    });

    act(() => {
      jest.runAllTimers();
    });

    await wait(() => getByText('2 character minimum'));
    fireEvent.blur(input);
    expect(() => getByText('2 character minimum')).toThrow();
  });

  it('shows min message when the label is hidden', async () => {
    const onDebounce = jest.fn();
    const { getByDisplayValue, getByText } = render(
      <FieldTextDebounce
        hideLabel
        label="debounce"
        id="debounce"
        value="abc"
        onDebounce={onDebounce}
      />,
    );
    const input = getByDisplayValue('abc');
    fireEvent.focus(input);
    // doesn't show the min char message on focus
    expect(() => getByText('2 character minimum')).toThrow();

    act(() => {
      fireEvent.change(input, { target: { value: '1' } });
    });

    act(() => {
      jest.runAllTimers();
    });

    await wait(() => getByText('2 character minimum'));
    fireEvent.blur(input);
    expect(() => getByText('2 character minimum')).toThrow();
  });

  it('shows min message when the label is hidden and size is small', async () => {
    const onDebounce = jest.fn();
    const { getByDisplayValue, getByText } = render(
      <FieldTextDebounce
        hideLabel
        size="small"
        label="debounce"
        id="debounce"
        value="abc"
        onDebounce={onDebounce}
      />,
    );
    const input = getByDisplayValue('abc');
    fireEvent.focus(input);
    // doesn't show the min char message on focus
    expect(() => getByText('2 character minimum')).toThrow();

    act(() => {
      fireEvent.change(input, { target: { value: '1' } });
    });

    act(() => {
      jest.runAllTimers();
    });

    await wait(() => getByText('2 character minimum'));
    fireEvent.blur(input);
    expect(() => getByText('2 character minimum')).toThrow();
  });

  it('wraps events and call passed in event as well ', () => {
    const onDebounce = jest.fn();

    const clearBtnFunc = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    const { getByDisplayValue, getByLabelText } = render(
      <FieldTextDebounce
        label="debounce"
        id="debounce"
        value="a"
        onDebounce={onDebounce}
        clearBtnFunc={clearBtnFunc}
        onFocus={onFocus}
        onBlur={onBlur}
      />,
    );
    const input = getByDisplayValue('a');
    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    fireEvent.click(getByLabelText('clear input value'));
    expect(clearBtnFunc).toHaveBeenCalled();
  });

  it('warns when passing onChange', () => {
    // eslint-disable-next-line
    const error = FieldTextDebounce.propTypes.onChange(
      { onChange: jest.fn() },
      'onChange',
      'FieldTextDebounce',
    );
    expect(error).toBeDefined();
    expect(error.message).toEqual(
      'Invalid prop `onChange` supplied to `FieldTextDebounce`. Instead use onDebounce.',
    );
  });
});

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react' or its... Remove this comment to see the full error message
import { fireEvent, render, wait } from '@testing-library/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldTextDebounce' was resolved to '/Use... Remove this comment to see the full error message
import FieldTextDebounce from './FieldTextDebounce';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-dom/test-utils' or its c... Remove this comment to see the full error message
import { act } from 'react-dom/test-utils';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FieldTextDebounce', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  jest.useFakeTimers();

  it('Does not call onDebounce without waiting', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onDebounce = jest.fn();
    const { getByDisplayValue } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onDebounce).not.toHaveBeenCalled();
    act(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.runAllTimers();
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onDebounce).toHaveBeenCalled();
  });

  it('Does not call onDebounce if there is not the min character limit', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onDebounce = jest.fn();
    const { getByDisplayValue } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onDebounce).not.toHaveBeenCalled();
    act(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.runAllTimers();
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onDebounce).not.toHaveBeenCalled();
    act(() => {
      fireEvent.change(input, {
        target: {
          value: 'abcdef',
        },
      });
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onDebounce).not.toHaveBeenCalled();
    act(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.runAllTimers();
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onDebounce).toHaveBeenCalled();
  });

  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('shows min message ', async () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onDebounce = jest.fn();
    const { getByDisplayValue, getByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => getByText('2 character minimum')).toThrow();

    act(() => {
      fireEvent.change(input, { target: { value: '1' } });
    });

    act(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.runAllTimers();
    });

    await wait(() => getByText('2 character minimum'));
    fireEvent.blur(input);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => getByText('2 character minimum')).toThrow();
  });

  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('shows min message when the label is hidden', async () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onDebounce = jest.fn();
    const { getByDisplayValue, getByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => getByText('2 character minimum')).toThrow();

    act(() => {
      fireEvent.change(input, { target: { value: '1' } });
    });

    act(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.runAllTimers();
    });

    await wait(() => getByText('2 character minimum'));
    fireEvent.blur(input);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => getByText('2 character minimum')).toThrow();
  });

  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  it('shows min message when the label is hidden and size is small', async () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onDebounce = jest.fn();
    const { getByDisplayValue, getByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => getByText('2 character minimum')).toThrow();

    act(() => {
      fireEvent.change(input, { target: { value: '1' } });
    });

    act(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.runAllTimers();
    });

    await wait(() => getByText('2 character minimum'));
    fireEvent.blur(input);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => getByText('2 character minimum')).toThrow();
  });

  it('wraps events and call passed in event as well ', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onDebounce = jest.fn();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const clearBtnFunc = jest.fn();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onFocus = jest.fn();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onBlur = jest.fn();

    const { getByDisplayValue, getByLabelText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onBlur).toHaveBeenCalled();
    fireEvent.click(getByLabelText('clear input value'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(clearBtnFunc).toHaveBeenCalled();
  });

  it('warns when passing onChange', () => {
    // eslint-disable-next-line
    const error = FieldTextDebounce.propTypes.onChange(
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      { onChange: jest.fn() },
      'onChange',
      'FieldTextDebounce',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      'Invalid prop `onChange` supplied to `FieldTextDebounce`. Instead use onDebounce.',
    );
  });
});

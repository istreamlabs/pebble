import textSizeType from './TextSizeType';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Types > textSizeType', () => {
  it('returns null if there is no prop value', () => {
    const props = { textSize: 'bar' };
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textSizeType(props, 'baz', 'myComponent')).toEqual(null);
  });

  it('allows number 1-7', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: 1 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: 2 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: 3 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: 4 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: 5 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: 6 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: 7 }, 'textSize', 'myComponent'),
    ).toEqual(null);
  });

  it('allows string 1-7', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: '1' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: '2' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: '3' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: '4' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: '5' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: '6' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType({ textSize: '7' }, 'textSize', 'myComponent'),
    ).toEqual(null);
  });

  it('returns error for number not 1-7', () => {
    let error = textSizeType(
      { textSize: -1 },
      'textSize',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires a value of 1-7 in <myComponent>",
    );
    error = null;
    error = textSizeType({ textSize: 9 }, 'textSize', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires a value of 1-7 in <myComponent>",
    );
  });

  it('returns error for string not 1-7', () => {
    let error = textSizeType(
      { textSize: '-1' },
      'textSize',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires a value of 1-7 in <myComponent>",
    );
    error = null;
    error = textSizeType(
      { textSize: '9' },
      'textSize',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires a value of 1-7 in <myComponent>",
    );
  });

  it('returns error for array larger than 4 or smaller than 1', () => {
    let error = textSizeType(
      { textSize: ['1', '1', '1', '1', '1'] },
      'textSize',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires an array length up to 4, and a value of 1-7 in each element <myComponent>",
    );
    error = null;
    error = textSizeType({ textSize: [] }, 'textSize', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires an array length up to 4, and a value of 1-7 in each element <myComponent>",
    );
  });

  it('allows array with valid mix of string and numbers 1-7', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      textSizeType(
        { textSize: ['1', 2, 3, '7'] },
        'textSize',
        'myComponent',
      ),
    ).toEqual(null);
  });

  it('returns error for array with invalid mix of string and numbers', () => {
    const error = textSizeType(
      { textSize: ['1', 2, 0, 'asdf'] },
      'textSize',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires an array length up to 4, and a value of 1-7 in each element <myComponent>",
    );
  });
});

import SpacingType from './SpacingType';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Types > SpacingType', () => {
  it('returns null if there is no prop value', () => {
    const props = { itemSpacing: 'bar' };
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(SpacingType(props, 'baz', 'myComponent')).toEqual(null);
  });

  it('allows number 0-8', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 0 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 1 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 2 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 3 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 4 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 5 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 6 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 7 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: 8 }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
  });

  it('allows string 0-8', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '0' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '1' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '2' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '3' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '4' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '5' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '6' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '7' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType({ itemSpacing: '8' }, 'itemSpacing', 'myComponent'),
    ).toEqual(null);
  });

  it('returns error for number not 0-8', () => {
    let error = SpacingType(
      { itemSpacing: -1 },
      'itemSpacing',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'itemSpacing' requires a value of 0-8 in <myComponent>",
    );
    error = null;
    error = SpacingType(
      { itemSpacing: 9 },
      'itemSpacing',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'itemSpacing' requires a value of 0-8 in <myComponent>",
    );
  });

  it('returns error for string not 0-8', () => {
    let error = SpacingType(
      { itemSpacing: '-1' },
      'itemSpacing',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'itemSpacing' requires a value of 0-8 in <myComponent>",
    );
    error = null;
    error = SpacingType(
      { itemSpacing: '9' },
      'itemSpacing',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'itemSpacing' requires a value of 0-8 in <myComponent>",
    );
  });

  it('returns error for array larger than 4 or smaller than 1', () => {
    let error = SpacingType(
      { itemSpacing: ['1', '1', '1', '1', '1'] },
      'itemSpacing',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'itemSpacing' requires an array length up to 4, and a value of 0-8 in each element <myComponent>",
    );
    error = null;
    error = SpacingType(
      { itemSpacing: [] },
      'itemSpacing',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'itemSpacing' requires an array length up to 4, and a value of 0-8 in each element <myComponent>",
    );
  });

  it('allows array with valid mix of string and numbers 0-8', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      SpacingType(
        { itemSpacing: ['1', 2, 0, '8'] },
        'itemSpacing',
        'myComponent',
      ),
    ).toEqual(null);
  });

  it('returns error for array with invalid mix of string and numbers', () => {
    const error = SpacingType(
      { itemSpacing: ['1', 2, 0, 'asdf'] },
      'itemSpacing',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'itemSpacing' requires an array length up to 4, and a value of 0-8 in each element <myComponent>",
    );
  });
});

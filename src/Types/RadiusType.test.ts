import RadiusType from './RadiusType';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Types > SpacingType', () => {
  it('returns null if there is no prop value', () => {
    const props = { radius: 'bar' };
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(RadiusType(props, 'baz', 'myComponent')).toEqual(null);
  });

  it('allows number 0-8', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: 0 }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: 1 }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: 2 }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: 3 }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: 4 }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: 5 }, 'radius', 'myComponent'),
    ).toEqual(null);
  });

  it('allows string 0-5, pill, and circle', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: '0' }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: '1' }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: '2' }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: '3' }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: '4' }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: '5' }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: 'pill' }, 'radius', 'myComponent'),
    ).toEqual(null);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType({ radius: 'circle' }, 'radius', 'myComponent'),
    ).toEqual(null);
  });

  it('returns error for number not 0-5', () => {
    let error = RadiusType({ radius: -1 }, 'radius', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'radius' requires a value of 0-5, circle or pill in <myComponent>",
    );
    error = null;
    error = RadiusType({ radius: 6 }, 'radius', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'radius' requires a value of 0-5, circle or pill in <myComponent>",
    );
  });

  it('returns error for string not 0-5', () => {
    let error = RadiusType({ radius: '-1' }, 'radius', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'radius' requires a value of 0-5, circle or pill in <myComponent>",
    );
    error = null;
    error = RadiusType({ radius: '6' }, 'radius', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'radius' requires a value of 0-5, circle or pill in <myComponent>",
    );
  });

  it('returns error for array larger than 4 or smaller than 1', () => {
    let error = RadiusType(
      { radius: ['1', '1', '1', '1', '1'] },
      'radius',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'radius' requires an array with length up to 4 and a value of 0-5, circle or pill in each element <myComponent>",
    );
    error = null;
    error = RadiusType({ radius: [] }, 'radius', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'radius' requires an array with length up to 4 and a value of 0-5, circle or pill in each element <myComponent>",
    );
  });

  it('allows array with valid mix of string and numbers 0-5', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      RadiusType(
        { radius: ['1', 2, 'pill', '5'] },
        'radius',
        'myComponent',
      ),
    ).toEqual(null);
  });

  it('returns error for array with invalid mix of string and numbers', () => {
    const error = RadiusType(
      { radius: ['1', 2, 0, 'asdf'] },
      'radius',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Invalid prop 'radius' requires an array with length up to 4 and a value of 0-5, circle or pill in each element <myComponent>",
    );
  });
});

import textSizeType from './TextSizeType';

describe('Types > textSizeType', () => {
  it('returns null if there is no prop value', () => {
    const props = { textSize: 'bar' };
    expect(textSizeType(props, 'baz', 'myComponent')).toEqual(null);
  });

  it('allows number 1-7', () => {
    expect(
      textSizeType({ textSize: 1 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: 2 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: 3 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: 4 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: 5 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: 6 }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: 7 }, 'textSize', 'myComponent'),
    ).toEqual(null);
  });

  it('allows string 1-7', () => {
    expect(
      textSizeType({ textSize: '1' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: '2' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: '3' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: '4' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: '5' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: '6' }, 'textSize', 'myComponent'),
    ).toEqual(null);
    expect(
      textSizeType({ textSize: '7' }, 'textSize', 'myComponent'),
    ).toEqual(null);
  });

  it('returns error for number not 1-7', () => {
    let error: boolean | { message: string } | null = textSizeType(
      { textSize: -1 },
      'textSize',
      'myComponent',
    );
    if (!error) return;
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires a value of 1-7 in <myComponent>",
    );
    error = null;
    error = textSizeType({ textSize: 9 }, 'textSize', 'myComponent');
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
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires a value of 1-7 in <myComponent>",
    );
    error = null;
    error = textSizeType(
      { textSize: '9' },
      'textSize',
      'myComponent',
    );
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
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires an array length up to 4, and a value of 1-7 in each element <myComponent>",
    );
    error = null;
    error = textSizeType({ textSize: [] }, 'textSize', 'myComponent');
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires an array length up to 4, and a value of 1-7 in each element <myComponent>",
    );
  });

  it('allows array with valid mix of string and numbers 1-7', () => {
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
    expect(error.message).toEqual(
      "Invalid prop 'textSize' requires an array length up to 4, and a value of 1-7 in each element <myComponent>",
    );
  });
});

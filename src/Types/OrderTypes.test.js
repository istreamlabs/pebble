import OrderType from './OrderType';

describe('Util > OrderType', () => {
  it('returns null if there is no prop value', () => {
    const props = { order: 'bar' };
    expect(OrderType(props, 'baz', 'myComponent')).toEqual(null);
  });

  it('allows number 0-8', () => {
    expect(OrderType({ order: 0 }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: 1 }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: 2 }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: 3 }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: 4 }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: 5 }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: 6 }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: 7 }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: 8 }, 'order', 'myComponent')).toEqual(
      null,
    );
  });

  it('allows string 0, 1, 2, 3, 4, 5, 6, 7, 8, or last', () => {
    expect(OrderType({ order: '0' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: '1' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: '2' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: '3' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: '4' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: '5' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: '6' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: '7' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(OrderType({ order: '8' }, 'order', 'myComponent')).toEqual(
      null,
    );
    expect(
      OrderType({ order: 'last' }, 'order', 'myComponent'),
    ).toEqual(null);
  });

  it('returns error for number not 0-8', () => {
    let error = OrderType({ order: -1 }, 'order', 'myComponent');
    expect(error.message).toEqual(
      "Invalid prop 'order' requires a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in <myComponent>",
    );
    error = null;
    error = OrderType({ order: 9 }, 'order', 'myComponent');
    expect(error.message).toEqual(
      "Invalid prop 'order' requires a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in <myComponent>",
    );
  });

  it('returns error for string not 0-8 or last', () => {
    let error = OrderType({ order: '-1' }, 'order', 'myComponent');
    expect(error.message).toEqual(
      "Invalid prop 'order' requires a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in <myComponent>",
    );
    error = null;
    error = OrderType({ order: '9' }, 'order', 'myComponent');
    expect(error.message).toEqual(
      "Invalid prop 'order' requires a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in <myComponent>",
    );
  });

  it('returns error for array larger than 4 or smaller than 1', () => {
    let error = OrderType(
      { order: ['1', '1', '1', '1', '1'] },
      'order',
      'myComponent',
    );
    expect(error.message).toEqual(
      "Invalid prop 'order' requires an array length up to 4, and a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in each element <myComponent>",
    );
    error = null;
    error = OrderType({ order: [] }, 'order', 'myComponent');
    expect(error.message).toEqual(
      "Invalid prop 'order' requires an array length up to 4, and a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in each element <myComponent>",
    );
  });

  it('allows array with valid mix of string and numbers 0-8', () => {
    expect(
      OrderType({ order: ['1', 2, 0, '8'] }, 'order', 'myComponent'),
    ).toEqual(null);
  });

  it('returns error for array with invalid mix of string and numbers', () => {
    const error = OrderType(
      { order: ['1', 2, 0, 'asdf'] },
      'order',
      'myComponent',
    );
    expect(error.message).toEqual(
      "Invalid prop 'order' requires an array length up to 4, and a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in each element <myComponent>",
    );
  });
});

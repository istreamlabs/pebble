export default (props, propName, componentName) => {
  componentName = componentName || 'ANONYMOUS';

  // eslint-disable-next-line react/destructuring-assignment
  const order = props[propName];

  if (order === undefined) {
    return null;
  }

  if (Array.isArray(order)) {
    if (
      order.length > 4 ||
      order.length < 1 ||
      !order.every(item =>
        [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          'last',
        ].some(v => item === v),
      )
    ) {
      return new Error(
        `Invalid prop '${propName}' requires an array length up to 4, and a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in each element <${componentName}>`,
      );
    }
  }

  const parsedOrder =
    typeof order !== 'number' ? parseInt(order, 10) : order;

  if (parsedOrder > 8 || parsedOrder < 0) {
    return new Error(
      `Invalid prop '${propName}' requires a value of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 'last' in <${componentName}>`,
    );
  }
  return null;
};

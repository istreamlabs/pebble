export default (props: { [propName: string]: string }, propName: string, componentName: string): null | Error => {
  componentName = componentName || 'ANONYMOUS';

  // eslint-disable-next-line react/destructuring-assignment
  const spacingType = props[propName];

  if (spacingType === undefined) {
    return null;
  }

  if (Array.isArray(spacingType)) {
    if (
      spacingType.length > 4 ||
      spacingType.length < 1 ||
      !spacingType.every(item => isValidToken(item))
    ) {
      return new Error(
        `Invalid prop '${propName}' requires an array length up to 4, and a value of 1-7 in each element <${componentName}>`,
      );
    }
  }

  const parsedSpacing =
    typeof spacingType !== 'number'
      ? parseInt(spacingType, 10)
      : spacingType;

  if (parsedSpacing > 7 || parsedSpacing < 1) {
    return new Error(
      `Invalid prop '${propName}' requires a value of 1-7 in <${componentName}>`,
    );
  }
  return null;
};

const isValidToken = (token: string | []): boolean => {
  if (token.split && token.split(' ').length > 1) {
    return token.split(' ').every(t => isValidToken(t));
  }
  return [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
  ].some(v => token === v);
};

interface Error {
  name: string;
  message: string;
  stack?: string;
}

export default (props: { [propName: string]: string | number }, propName: string, componentName: string): null | boolean | Error => {
  componentName = componentName || 'ANONYMOUS';
  console.log('props[propName] -> ', props[propName]);

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

const isValidToken = (token: string | number): boolean => {
  if ((token as string).split && (token as string).split(' ').length > 1) {
    return (token as string).split(' ').every(t => isValidToken(t));
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

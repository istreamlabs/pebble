export default (props, propName, componentName) => {
  componentName = componentName || 'ANONYMOUS';

  // eslint-disable-next-line react/destructuring-assignment
  const colorPointType = props[propName];

  if (colorPointType === undefined) {
    return null;
  }

  if (Array.isArray(colorPointType)) {
    if (colorPointType.length > 4 || colorPointType.length < 1) {
      return new Error(
        `<${componentName}> prop value of '${propName}' is invalid. It requires an array length up to 4.`,
      );
    }
  }
  return null;
};

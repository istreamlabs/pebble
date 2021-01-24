export default (props, propName, componentName) => {
  componentName = componentName || 'ANONYMOUS';

  // eslint-disable-next-line react/destructuring-assignment
  const radiusType = props[propName];

  if (radiusType === undefined) {
    return null;
  }

  if (Array.isArray(radiusType)) {
    if ((radiusType.length > 4 || radiusType.length < 1)
      || !radiusType.every(item => [0, 1, 2, 3, 4, 5, '0', '1', '2', '3', '4', '5', 'circle', 'pill'].some(v => item === v))) {
      return new Error(
        (`Invalid prop '${propName}' requires an array with length up to 4 and a value of 0-5, circle or pill in each element <${componentName}>`)
      );
    }
  }

  const parsedRadius = typeof radiusType !== 'number' ? parseInt(radiusType, 10) : radiusType;

  if ((parsedRadius > 5 || parsedRadius < 0)) {
    return new Error(
      (`Invalid prop '${propName}' requires a value of 0-5, circle or pill in <${componentName}>`)
    );
  }
  return null;
};

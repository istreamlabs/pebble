export default (prefix, spacing) => {
  let spacingClasses;

  if (typeof spacing === 'string' || typeof spacing === 'number') {
    spacingClasses = `${prefix}-${spacing}`;
  } else if (Array.isArray(spacing) && spacing.length) {
    spacingClasses = [];
    spacingClasses.push(`${prefix}-${spacing[0]}`);

    if (spacing[1] !== undefined) {
      spacingClasses.push(`${prefix}-${spacing[1]}-ns`);
    }

    if (spacing[2] !== undefined) {
      spacingClasses.push(`${prefix}-${spacing[2]}-m`);
    }

    if (spacing[3] !== undefined) {
      spacingClasses.push(`${prefix}-${spacing[3]}-l`);
    }
  } else {
    return undefined;
  }

  return spacingClasses;
};

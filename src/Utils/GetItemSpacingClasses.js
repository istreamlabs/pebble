import getDimensionClasses from './GetDimensionClasses';

function getDirectionSpacing(direction, spacing) {
  if (direction === 'row') return getDimensionClasses('mr', spacing);
  return getDimensionClasses('mb', spacing);
}

export default (direction, spacing) => {
  let itemSpacing;
  let spacingUnit;
  if (typeof direction === 'string') {
    itemSpacing = getDirectionSpacing(direction, spacing);
  } else if (Array.isArray(direction) && direction.length) {
    spacingUnit = Array.isArray(spacing) ? spacing[0] : spacing;
    itemSpacing = getDirectionSpacing(direction[0], spacingUnit);

    let breakPointSpacing;

    if (direction[1] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[1] : spacing;
      breakPointSpacing = getDirectionSpacing(
        direction[1],
        spacingUnit,
      );
      itemSpacing.classes.push(`${breakPointSpacing.classes[0]}-ns`);
    }

    if (direction[2] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[2] : spacing;
      breakPointSpacing = getDirectionSpacing(
        direction[2],
        spacingUnit,
      );
      itemSpacing.classes.push(`${breakPointSpacing.classes[0]}-m`);
    }

    if (direction[3] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[3] : spacing;
      breakPointSpacing = getDirectionSpacing(
        direction[3],
        spacingUnit,
      );
      itemSpacing.classes.push(`${breakPointSpacing.classes[0]}-l`);
    }
  } else {
    return undefined;
  }

  return itemSpacing;
};

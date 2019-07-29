import getDimensionClasses from './GetDimensionClasses';

const BREAKPOINT_MAP = {
  0: '',
  1: '-ns',
  2: '-m',
  3: '-l',
};

function getDirectionSpacing(direction, spacing, breakpoint) {
  let cssObj;

  if (direction === 'row') {
    cssObj = getDimensionClasses('mr', spacing);
    if (breakpoint > 0) {
      cssObj.classes.push('mb-0');
    }
  } else {
    cssObj = getDimensionClasses('mb', spacing);
    if (breakpoint > 0) {
      cssObj.classes.push('mr-0');
    }
  }
  return cssObj;
}

export default (direction, spacing) => {
  let itemSpacing;
  let spacingUnit;
  if (typeof direction === 'string') {
    itemSpacing = getDirectionSpacing(direction, spacing);
  } else if (Array.isArray(direction) && direction.length) {
    spacingUnit = Array.isArray(spacing) ? spacing[0] : spacing;
    itemSpacing = getDirectionSpacing(direction[0], spacingUnit, 0);

    let breakPointSpacing;

    if (direction[1] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[1] : spacing;
      breakPointSpacing = getDirectionSpacing(
        direction[1],
        spacingUnit,
        1,
      );

      breakPointSpacing.classes.forEach((breakpoint, i) => {
        itemSpacing.classes.push(
          `${breakPointSpacing.classes[i]}${BREAKPOINT_MAP[1]}`,
        );
      });
    }

    if (direction[2] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[2] : spacing;
      breakPointSpacing = getDirectionSpacing(
        direction[2],
        spacingUnit,
        2,
      );
      breakPointSpacing.classes.forEach((breakpoint, i) => {
        itemSpacing.classes.push(
          `${breakPointSpacing.classes[i]}${BREAKPOINT_MAP[2]}`,
        );
      });
    }

    if (direction[3] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[3] : spacing;
      breakPointSpacing = getDirectionSpacing(
        direction[3],
        spacingUnit,
        3,
      );
      breakPointSpacing.classes.forEach((breakpoint, i) => {
        itemSpacing.classes.push(
          `${breakPointSpacing.classes[i]}${BREAKPOINT_MAP[3]}`,
        );
      });
    }
  } else {
    return undefined;
  }

  return itemSpacing;
};

import getDimensionClasses from './GetDimensionClasses';

const BREAKPOINT_MAP = {
  0: '',
  1: '-ns',
  2: '-m',
  3: '-l',
};

function getDirectionSpacing(direction, spacing, breakpoint) {
  let cssObj;

  if (direction === 'column') {
    cssObj = getDimensionClasses('bottom', spacing, 'm');
    if (breakpoint > 0) {
      cssObj.classes.push('mr-0');
    }
  } else {
    // direction default is 'row'
    cssObj = getDimensionClasses('right', spacing, 'm');
    if (breakpoint > 0) {
      cssObj.classes.push('mb-0');
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
    let breakPointDirection;

    if (direction[1] !== undefined || spacing[1] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[1] : spacing;
      breakPointDirection =
        direction[1] !== undefined ? direction[1] : direction[0];
      breakPointSpacing = getDirectionSpacing(
        breakPointDirection,
        spacingUnit,
        1,
      );

      breakPointSpacing.classes.forEach((breakpoint, i) => {
        itemSpacing.classes.push(
          `${breakPointSpacing.classes[i]}${BREAKPOINT_MAP[1]}`,
        );
      });
    }

    if (direction[2] !== undefined || spacing[2] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[2] : spacing;
      breakPointDirection =
        direction[2] !== undefined ? direction[2] : direction[1];
      breakPointSpacing = getDirectionSpacing(
        breakPointDirection,
        spacingUnit,
        2,
      );
      breakPointSpacing.classes.forEach((breakpoint, i) => {
        itemSpacing.classes.push(
          `${breakPointSpacing.classes[i]}${BREAKPOINT_MAP[2]}`,
        );
      });
    }

    if (direction[3] !== undefined || spacing[3] !== undefined) {
      spacingUnit = Array.isArray(spacing) ? spacing[3] : spacing;
      breakPointDirection =
        direction[3] !== undefined
          ? direction[3]
          : direction[2] !== undefined
          ? direction[2]
          : direction[1];
      breakPointSpacing = getDirectionSpacing(
        breakPointDirection,
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

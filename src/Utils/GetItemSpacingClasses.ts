import getSpacingCss from './GetSpacingCss';

const BREAKPOINT_MAP = {
  0: '',
  1: '-ns',
  2: '-m',
  3: '-l',
};

function getDirectionSpacing(direction, spacing, breakpoint) {
  let cssObj;

  if (direction === 'column') {
    cssObj = getSpacingCss('bottom', spacing);
    if (breakpoint > 0) {
      cssObj.classes.push('mr-0');
    }
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
  } else {
    // direction default is 'row'
    cssObj = getSpacingCss('right', spacing);
    if (breakpoint > 0) {
      cssObj.classes.push('mb-0');
    }
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
  }
  return cssObj;
}

export default (direction, spacing) => {
  let itemSpacing;
  let spacingUnit;
  if (typeof direction === 'string') {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
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
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'breakpoint' implicitly has an 'any' typ... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'breakpoint' implicitly has an 'any' typ... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'breakpoint' implicitly has an 'any' typ... Remove this comment to see the full error message
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

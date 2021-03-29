export default function getDimensionCss(
  dimension,
  value,
  suffix = '',
) {
  if (value === undefined) {
    return {
      styles: {},
      classes: [],
    };
  }

  const classes = [];

  const classPrefix = getPrefix(dimension, value, dimension);

  const dimensionCss = {
    styles: {},
    classes: [],
  };

  if (
    typeof value === 'string' &&
    // @ts-expect-error ts-migrate(2550) FIXME: Property 'includes' does not exist on type 'string... Remove this comment to see the full error message
    (value.includes('px') ||
      // @ts-expect-error ts-migrate(2550) FIXME: Property 'includes' does not exist on type 'string... Remove this comment to see the full error message
      value.includes('em') ||
      // @ts-expect-error ts-migrate(2550) FIXME: Property 'includes' does not exist on type 'string... Remove this comment to see the full error message
      value.includes('rem') ||
      // @ts-expect-error ts-migrate(2550) FIXME: Property 'includes' does not exist on type 'string... Remove this comment to see the full error message
      value.includes('%'))
  ) {
    dimensionCss.styles = value;
    // set to a css class
  } else if (Array.isArray(value) && value.length) {
    if (value[0] !== undefined) {
      const smallValue = getDimensionCss(dimension, value[0]);
      classes.push(...smallValue.classes);
    }
    if (value[1] !== undefined) {
      const nsValue = getDimensionCss(dimension, value[1], '-ns');
      classes.push(...nsValue.classes);
    }
    if (value[2] !== undefined) {
      const mediumValue = getDimensionCss(dimension, value[2], '-m');
      classes.push(...mediumValue.classes);
    }
    if (value[3] !== undefined) {
      const largeValue = getDimensionCss(dimension, value[3], '-l');
      classes.push(...largeValue.classes);
    }
  } else if (value.split && value.split(' ').length > 1) {
    const side = value.split(' ');
    if (side.length === 2) {
      classes.push(
        `${getPrefix('top', side[0], dimension)}${side[0]}${suffix}`,
      );
      classes.push(
        `${getPrefix('right', side[1], dimension)}${
        side[1]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('bottom', side[0], dimension)}${
        side[0]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('left', side[1], dimension)}${side[1]}${suffix}`,
      );
    } else if (side.length === 3) {
      classes.push(
        `${getPrefix('top', side[0], dimension)}${side[0]}${suffix}`,
      );
      classes.push(
        `${getPrefix('right', side[1], dimension)}${
        side[1]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('bottom', side[2], dimension)}${
        side[2]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('left', side[1], dimension)}${side[1]}${suffix}`,
      );
    } else if (side.length > 3) {
      classes.push(
        `${getPrefix('top', side[0], dimension)}${side[0]}${suffix}`,
      );
      classes.push(
        `${getPrefix('right', side[1], dimension)}${
        side[1]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('bottom', side[2], dimension)}${
        side[2]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('left', side[3], dimension)}${side[3]}${suffix}`,
      );
    }
  } else if (typeof value === 'string' || typeof value === 'number') {
    classes.push(`${classPrefix}${value}${suffix}`);
  }

  // @ts-expect-error ts-migrate(2322) FIXME: Type 'string[]' is not assignable to type 'never[]... Remove this comment to see the full error message
  dimensionCss.classes = classes;

  return dimensionCss;
}

function getPrefix(side, value, dimension) {
  let prefix;
  switch (side) {
    case 'm':
      prefix = 'm-';
      break;
    case 'p':
      prefix = 'p-';
      break;
    case 'vertical':
      prefix = dimension === 'p' ? 'pv' : 'mv';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'horizontal':
      prefix = dimension === 'p' ? 'ph' : 'mh';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'top':
      prefix = dimension === 'p' ? 'pt' : 'mt';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'right':
      prefix = dimension === 'p' ? 'pr' : 'mr';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'bottom':
      prefix = dimension === 'p' ? 'pb' : 'mb';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'left':
      prefix = dimension === 'p' ? 'pl' : 'ml';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    default:
      prefix = `${dimension}-`;
  }
  return prefix;
}

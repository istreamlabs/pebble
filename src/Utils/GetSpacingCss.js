export default function getDimensionCss(
  dimension,
  value,
  suffix = '',
) {
  if (value === undefined) {
    return {
      styles: null,
      classes: [],
    };
  }

  const classes = [];

  const classPrefix = getPrefix(dimension, value, dimension);

  const dimensionCss = {
    styles: null,
    classes: [],
  };

  if (
    typeof value === 'string' &&
    (value.includes('px') ||
      value.includes('em') ||
      value.includes('rem') ||
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
    const monkey = value.split(' ');
    if (monkey.length === 2) {
      classes.push(
        `${getPrefix('top', monkey[0], dimension)}${
          monkey[0]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('right', monkey[1], dimension)}${
          monkey[1]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('bottom', monkey[0], dimension)}${
          monkey[0]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('left', monkey[1], dimension)}${
          monkey[1]
        }${suffix}`,
      );
    } else if (monkey.length === 3) {
      classes.push(
        `${getPrefix('top', monkey[0], dimension)}${
          monkey[0]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('right', monkey[1], dimension)}${
          monkey[1]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('bottom', monkey[2], dimension)}${
          monkey[2]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('left', monkey[1], dimension)}${
          monkey[1]
        }${suffix}`,
      );
    } else if (monkey.length > 3) {
      classes.push(
        `${getPrefix('top', monkey[0], dimension)}${
          monkey[0]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('right', monkey[1], dimension)}${
          monkey[1]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('bottom', monkey[2], dimension)}${
          monkey[2]
        }${suffix}`,
      );
      classes.push(
        `${getPrefix('left', monkey[3], dimension)}${
          monkey[3]
        }${suffix}`,
      );
    }
  } else if (typeof value === 'string' || typeof value === 'number') {
    classes.push(`${classPrefix}${value}${suffix}`);
  }

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

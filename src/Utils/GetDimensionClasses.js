export default (dimension, value) => {
  if (value === undefined) {
    return {
      styles: null,
      classes: [],
    };
  }

  let classes = [];

  let classPrefix = getPrefix(dimension, value, dimension);

  const dimensionCss = {
    styles: null,
    classes: [],
  };

  // set to a specific width
  if (
    typeof value === 'string' &&
    (value.includes('px') ||
      value.includes('em') ||
      value.includes('rem') ||
      value.includes('%'))
  ) {
    dimensionCss.styles = value;
    // set to a css class
  } else if (typeof value === 'string' || typeof value === 'number') {
    classes.push(`${classPrefix}${value}`);
    // set to responsive css classes
  } else if (Array.isArray(value) && value.length) {
    classes = [];

    if (
      typeof value[0] === 'object' &&
      (dimension === 'p' || dimension === 'm')
    ) {
      Object.keys(value[0]).forEach(side => {
        classPrefix = getPrefix(side, value[0][side], dimension);
        classes.push(`${classPrefix}${value[0][side]}`);
      });
    } else {
      classPrefix = getPrefix(dimension, value[0], dimension);
      classes.push(`${classPrefix}${value[0]}`);
    }

    if (value[1] !== undefined) {
      if (
        typeof value[1] === 'object' &&
        (dimension === 'p' || dimension === 'm')
      ) {
        Object.keys(value[1]).forEach(side => {
          classPrefix = getPrefix(side, value[1][side], dimension);
          classes.push(`${classPrefix}${value[1][side]}-ns`);
        });
      } else {
        classPrefix = getPrefix(dimension, value[1], dimension);
        classes.push(`${classPrefix}${value[1]}-ns`);
      }
    }

    if (value[2] !== undefined) {
      if (
        typeof value[2] === 'object' &&
        (dimension === 'p' || dimension === 'm')
      ) {
        Object.keys(value[2]).forEach(side => {
          classPrefix = getPrefix(side, value[2][side], dimension);
          classes.push(`${classPrefix}${value[2][side]}-m`);
        });
      } else {
        classPrefix = getPrefix(dimension, value[2], dimension);
        classes.push(`${classPrefix}${value[2]}-m`);
      }
    }

    if (value[3] !== undefined) {
      if (
        typeof value[3] === 'object' &&
        (dimension === 'p' || dimension === 'm')
      ) {
        Object.keys(value[3]).forEach(side => {
          classPrefix = getPrefix(side, value[3][side], dimension);
          classes.push(`${classPrefix}${value[3][side]}-l`);
        });
      } else {
        classPrefix = getPrefix(dimension, value[3], dimension);
        classes.push(`${classPrefix}${value[3]}-l`);
      }
    }
    // figure out which classes to apply based on object keys
  } else if (
    typeof value === 'object' &&
    (dimension === 'p' || dimension === 'm')
  ) {
    classes = [];
    Object.keys(value).forEach(side => {
      classPrefix = getPrefix(side, value[side], dimension);
      classes.push(`${classPrefix}${value[side]}`);
    });
  }

  dimensionCss.classes = classes;

  return dimensionCss;
};

function getPrefix(side, value, dimension) {
  let prefix;
  switch (side) {
    case 'width':
      prefix = 'w';
      if (value > 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'height':
      prefix = 'h';
      if (value > 9) {
        prefix = `${prefix}-`;
      }
      break;
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

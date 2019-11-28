export default (dimension, value) => {
  let classes = [];

  let classPrefix = getPrefix(dimension, value);

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
      (dimension === 'padding' || dimension === 'margin')
    ) {
      Object.keys(value[0]).forEach(dimension => {
        classPrefix = getPrefix(dimension, value[0][dimension]);
        classes.push(`${classPrefix}${value[0][dimension]}`);
      });
    } else {
      classPrefix = getPrefix(dimension, value[0]);
      classes.push(`${classPrefix}${value[0]}`);
    }

    if (value[1] !== undefined) {
      if (
        typeof value[1] === 'object' &&
        (dimension === 'p' || dimension === 'm')
      ) {
        Object.keys(value[1]).forEach(dimension => {
          classPrefix = getPrefix(dimension, value[1][dimension]);
          classes.push(`${classPrefix}${value[1][dimension]}-ns`);
        });
      } else {
        classPrefix = getPrefix(dimension, value[1]);
        classes.push(`${classPrefix}${value[1]}-ns`);
      }
    }

    if (value[2] !== undefined) {
      if (
        typeof value[2] === 'object' &&
        (dimension === 'p' || dimension === 'p')
      ) {
        Object.keys(value[2]).forEach(dimension => {
          classPrefix = getPrefix(dimension, value[2][dimension]);
          classes.push(`${classPrefix}${value[2][dimension]}-m`);
        });
      } else {
        classPrefix = getPrefix(dimension, value[2]);
        classes.push(`${classPrefix}${value[2]}-m`);
      }
    }

    if (value[3] !== undefined) {
      if (
        typeof value[3] === 'object' &&
        (dimension === 'p' || dimension === 'm')
      ) {
        Object.keys(value[3]).forEach(dimension => {
          classPrefix = getPrefix(dimension, value[3][dimension]);
          classes.push(`${classPrefix}${value[3][dimension]}-l`);
        });
      } else {
        classPrefix = getPrefix(dimension, value[3]);
        classes.push(`${classPrefix}${value[3]}-l`);
      }
    }
    // figure out which classes to apply based on object keys
  } else if (
    typeof value === 'object' &&
    (dimension === 'p' || dimension === 'm')
  ) {
    classes = [];
    Object.keys(value).forEach(dimension => {
      classPrefix = getPrefix(dimension, value[dimension]);
      classes.push(`${classPrefix}${value[dimension]}`);
    });
  }

  dimensionCss.classes = classes;

  return dimensionCss;
};

function getPrefix(dimension, value) {
  let prefix = dimension === 'width' ? 'w' : 'h';

  switch (dimension) {
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
    case 'vertical':
      prefix = 'pv';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'horizontal':
      prefix = 'ph';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'top':
      prefix = 'pt';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'right':
      prefix = 'pr';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'bottom':
      prefix = 'pb';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'left':
      prefix = 'pl';
      if (value < 9) {
        prefix = `${prefix}-`;
      }
      break;
    default:
      prefix = `${dimension}-`;
  }

  return prefix;
}

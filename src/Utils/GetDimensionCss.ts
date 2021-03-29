export default (dimension, value) => {
  if (value === undefined) {
    return {
      styles: null,
      classes: [],
    };
  }

  let classes = [];

  let classPrefix = getPrefix(dimension, value);

  const dimensionCss = {
    styles: null,
    classes: [],
  };

  // set to a specific css unit
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
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'null'.
    dimensionCss.styles = value;
    // set to a css class
  } else if (typeof value === 'string' || typeof value === 'number') {
    classes.push(`${classPrefix}${value}`);
    // set to responsive css classes
  } else if (Array.isArray(value) && value.length) {
    classes = [];
    classPrefix = getPrefix(dimension, value[0]);
    classes.push(`${classPrefix}${value[0]}`);

    if (value[1] !== undefined) {
      classPrefix = getPrefix(dimension, value[1]);
      classes.push(`${classPrefix}${value[1]}-ns`);
    }

    if (value[2] !== undefined) {
      classPrefix = getPrefix(dimension, value[2]);
      classes.push(`${classPrefix}${value[2]}-m`);
    }

    if (value[3] !== undefined) {
      classPrefix = getPrefix(dimension, value[3]);
      classes.push(`${classPrefix}${value[3]}-l`);
    }
  }
  // @ts-expect-error ts-migrate(2322) FIXME: Type 'string[]' is not assignable to type 'never[]... Remove this comment to see the full error message
  dimensionCss.classes = classes;

  return dimensionCss;
};

export function getPrefix(dimension, value) {
  let prefix;

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
    case 'maxWidth':
      prefix = value <= 9 ? 'mw' : 'mw-';
      break;
    // fontSize
    default:
      prefix = `${dimension}-`;
  }

  return prefix;
}

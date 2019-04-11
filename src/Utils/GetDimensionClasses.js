export default (dimension, value) => {
  let classes;

  let classPrefix = getPrefix(dimension, value);

  if (typeof value === 'number') {
    console.log('number')
    classes = `${classPrefix}${value}`;
  } else if (typeof value === 'string') {
    console.log('string')
    if (value.includes('px') || value.includes('em') || value.includes('rem') || value.includes('%')) {
      return { [dimension]: value };
    }
    classes = `${classPrefix}${value}`;
  } else if (Array.isArray(value) && value.length) {
    console.log('array')

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
  } else {
    return undefined;
  }

  console.log(classes);
  return classes;
};

function getPrefix(dimension, value) {
  let prefix = dimension === 'width' ? 'w' : 'h';

  if (value > 9) {
    prefix = `${prefix}-`;
  }

  return prefix;
}

export default overflowProp => {
  let overflowClasses;

  // setting 'overflow'
  if (typeof overflowProp === 'string') {
    if (
      overflowProp !== 'visible' &&
      overflowProp !== 'hidden' &&
      overflowProp !== 'scroll' &&
      overflowProp !== 'auto'
    ) {
      return;
    }
    overflowClasses = `overflow-${overflowProp}`;
    // responsive overflow
  } else if (Array.isArray(overflowProp) && overflowProp.length) {
    overflowClasses = [];
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    overflowClasses.push(getOverflowClass(overflowProp[0]));

    if (overflowProp[1] !== undefined) {
      overflowClasses.push(getOverflowClass(overflowProp[1], '-ns'));
    }

    if (overflowProp[2] !== undefined) {
      overflowClasses.push(getOverflowClass(overflowProp[2], '-m'));
    }

    if (overflowProp[3] !== undefined) {
      overflowClasses.push(getOverflowClass(overflowProp[3], '-l'));
    }
    // setting 'overflow-x' and/or 'overflow-y'
  } else if (
    overflowProp &&
    typeof overflowProp === 'object' &&
    overflowProp.constructor === Object
  ) {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    overflowClasses = getOverflowClass(overflowProp);
  } else {
    return undefined;
  }

  return overflowClasses;
};

function getOverflowClass(overflowProp, breakpoint) {
  let hClass = '';
  let vClass = '';

  if (breakpoint === undefined) {
    breakpoint = '';
  }

  if (typeof overflowProp === 'string') {
    return `overflow-${overflowProp}${breakpoint}`;
  }

  if (overflowProp.horizontal) {
    hClass = `overflow-x-${overflowProp.horizontal}${breakpoint}`;
  }
  if (overflowProp.vertical) {
    vClass = `overflow-y-${overflowProp.vertical}${breakpoint}`;
  }
  return hClass !== '' && vClass !== ''
    ? `${hClass} ${vClass}`
    : hClass !== ''
    ? hClass
    : vClass;
}

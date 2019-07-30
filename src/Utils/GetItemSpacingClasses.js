export default (direction, spacing) => {
  let itemSpacing;
  if (typeof direction === 'string') {
    itemSpacing =
      direction === 'row' ? `mr-${spacing}` : `mb-${spacing}`;
  } else if (Array.isArray(direction) && direction.length) {
    itemSpacing = [];
    itemSpacing.push(
      direction[0] === 'row'
        ? `mr-${spacing} mb-0`
        : `mb-${spacing} mr-0`,
    );

    if (direction[1] !== undefined) {
      itemSpacing.push(
        direction[1] === 'row'
          ? `mr-${spacing}-ns mb-0-ns`
          : `mb-${spacing}-ns mr-0-ns`,
      );
    }

    if (direction[2] !== undefined) {
      itemSpacing.push(
        direction[2] === 'row'
          ? `mr-${spacing}-m mb-0-m`
          : `mb-${spacing}-m mr-0-m`,
      );
    }

    if (direction[3] !== undefined) {
      itemSpacing.push(
        direction[3] === 'row'
          ? `mr-${spacing}-l mb-0-l`
          : `mb-${spacing}-l mr-0-l`,
      );
    }
  } else {
    return undefined;
  }

  return itemSpacing;
};

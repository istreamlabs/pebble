export default (direction) => {
  let flexDirectionClasses;
  if (typeof direction === 'string' && (direction === 'row' || direction === 'column')) {
    flexDirectionClasses = `flex-${direction}`;
  } else if (Array.isArray(direction) && direction.length) {
    flexDirectionClasses = [];
    flexDirectionClasses.push(`flex-${direction[0]}`);

    if (direction[1] !== undefined) {
      flexDirectionClasses.push(`flex-${direction[1]}-ns`);
    }

    if (direction[2] !== undefined) {
      flexDirectionClasses.push(`flex-${direction[2]}-m`);
    }

    if (direction[3] !== undefined) {
      flexDirectionClasses.push(`flex-${direction[3]}-l`);
    }
  } else {
    return undefined;
  }

  return flexDirectionClasses;
};

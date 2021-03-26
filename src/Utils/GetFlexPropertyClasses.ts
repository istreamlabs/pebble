export default (flexProperty, value) => {
  let flexPropertyClasses;
  if (typeof value === 'string') {
    flexPropertyClasses = `${flexProperty}-${value}`;
  } else if (Array.isArray(value) && value.length) {
    flexPropertyClasses = [];
    flexPropertyClasses.push(`${flexProperty}-${value[0]}`);

    if (value[1] !== undefined) {
      flexPropertyClasses.push(`${flexProperty}-${value[1]}-ns`);
    }

    if (value[2] !== undefined) {
      flexPropertyClasses.push(`${flexProperty}-${value[2]}-m`);
    }

    if (value[3] !== undefined) {
      flexPropertyClasses.push(`${flexProperty}-${value[3]}-l`);
    }
  } else {
    return undefined;
  }

  return flexPropertyClasses;
};

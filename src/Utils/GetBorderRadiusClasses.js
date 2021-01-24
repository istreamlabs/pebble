export default (radius) => {
  let borderRadiusClasses;

  if (typeof radius === 'string' || typeof radius === 'number') {
    borderRadiusClasses = `br${getRadiusModifier(radius)}`;
  } else if (Array.isArray(radius) && radius.length) {
    borderRadiusClasses = [];
    borderRadiusClasses.push(`br${getRadiusModifier(radius[0])}`);
    if (radius[1] !== undefined) {
      borderRadiusClasses.push(
        `br${getRadiusModifier(radius[1])}-ns`,
      );
    }
    if (radius[2] !== undefined) {
      borderRadiusClasses.push(`br${getRadiusModifier(radius[2])}-m`);
    }
    if (radius[3] !== undefined) {
      borderRadiusClasses.push(`br${getRadiusModifier(radius[3])}-l`);
    }
  } else {
    return undefined;
  }

  return borderRadiusClasses;
};

function getRadiusModifier(modifier) {
  switch (modifier) {
    case 'pill':
      return '-pill';
    case 'circle':
      return '-circle';
    default:
      return modifier;
  }
}

export default requiresOtherProp => (props, propName, componentName) => {
  componentName = componentName || 'ANONYMOUS';

  if ((props[requiresOtherProp] === undefined && (props[propName] !== undefined || typeof (props[propName]) !== 'function'))) {
    return new Error(
      (`Please provide a ${requiresOtherProp} in order to display headerActions in ${componentName}`)
    );
  }
};

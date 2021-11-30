export default boolRequiresOtherProp => (
  props,
  propName,
  componentName,
) => {
  componentName = componentName || 'ANONYMOUS';

  if (
    props[propName] !== undefined &&
    typeof props[propName] === 'boolean'
  ) {
    if (props[boolRequiresOtherProp] === undefined) {
      return new Error(
        `Please provide a '${boolRequiresOtherProp}' in order to use '${propName}' in <${componentName}>`,
      );
    }
  }
};

export default (boolRequiresOtherProp: string | number) => (
  props: { [x: string]: undefined | boolean | string | number },
  propName: string | number,
  componentName: string,
): Error => {
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

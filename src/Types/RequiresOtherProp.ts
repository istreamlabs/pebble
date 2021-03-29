export default (requiresOtherProp: any) => (props: any, propName: any, componentName: any) => {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName] !== undefined) {
    if ((props[requiresOtherProp] === undefined && (props[propName] !== undefined || typeof (props[propName]) !== 'function'))) {
      return new Error(
        (`Please provide a '${requiresOtherProp}' in order to use '${propName}' in <${componentName}>`)
      );
    }
  }
};

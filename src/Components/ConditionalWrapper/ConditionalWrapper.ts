import PropTypes from 'prop-types';

const propTypes = {
  condition: PropTypes.bool,
  wrapper: PropTypes.any,
  children: PropTypes.node,
};

// Small helper that is used to conditionally render the
// FocusTrap component when notDismissable is true
// this prevents situations where FocusTrap will throw
// errors if all the children passed to it are not focusable elements
// ref: https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

ConditionalWrapper.propTypes = propTypes;

export default ConditionalWrapper;

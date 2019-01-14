import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

// see https://github.com/yannickcr/eslint-plugin-react/issues/1555
// eslint-disable-next-line react/button-has-type
const Button = ({ type, className, children }) => <button type={type} className={classNames('btn', className)}>{children}</button>;

Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  /**
   * Type of the button
   * @see see [W3C](https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html)
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * Additional ClassNames to add to button
   */
  className: PropTypes.string,
  /**
   * Contents of the button
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Button;

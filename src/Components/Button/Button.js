import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { boolRequiresOtherProp, caseInsensitiveStringCompare } from '../../Utils';

import Icon from '../Icon/Icon';

import './Button.scss';

/**
 * Buttons are used as triggers for actions. They are used in forms,
 * toolbars, modal dialogs and as stand-alone action triggers. Actions
 * almost always occur on the same page.
 */

// see https://github.com/yannickcr/eslint-plugin-react/issues/1555
// eslint-disable-next-line react/button-has-type
const Button = (
  {
    id,
    children,
    className,
    size,
    primary,
    danger,
    plain,
    fullWidth,
    icon,
    iconAfterText,
    onClick,
    onFocus,
    onBlur,
    disabled,
    tabIndex,
    loading,
    type,
    accessibilityLabel,
    ariaControls,
    ariaExpanded,
    ariaPressed,
  }
) => {
  const isDisabled = loading || disabled;

  const classes = classNames('btn', className, {
    'btn-loading': loading,
    'btn-lg': caseInsensitiveStringCompare(size, 'large'),
    'btn-sm': caseInsensitiveStringCompare(size, 'small'),
    'btn-primary': primary,
    'btn-danger': danger,
    'btn-plain': plain,
    'btn-fullwidth': fullWidth,
  });

  const spinnerSVGMarkup = loading ? (
    <Icon name="spinner" className="btn-loading-spinner" />
  ) : null;

  const iconElement = function (name) {
    const iconSize = caseInsensitiveStringCompare(size, 'large') ? 20 : 16;

    return (
      <Icon name={name} size={iconSize} className="btn-icon" />
    );
  };

  const leftIcon = !iconAfterText && icon && iconElement(icon);
  const rightIcon = icon && iconAfterText && iconElement(icon);

  const content = (
    <span className="btn-content">
      {spinnerSVGMarkup}
      {leftIcon}
      {children && <span className="btn-label">{children}</span>}
      {rightIcon}
    </span>
  );

  return (
    /* eslint-disable react/button-has-type */
    <button
      disabled={isDisabled}
      id={id}
      type={type}
      className={classes}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={tabIndex}
      aria-label={accessibilityLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
      aria-busy={loading ? true : undefined}
    >
      {content}
    </button>
    /* eslint-enable react/button-has-type */
  );
};

Button.defaultProps = {
  type: 'button',
  size: 'medium',
  disabled: false,
};

Button.propTypes = {
  /**
   * A button can show it is currently the active user selection
   */
  active: PropTypes.bool,
  /**
   * Optional prop to specify the type of the Button
   * @see see [W3C](https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html)
   * @type {PropTypes.Requireable<'button' | 'submit' | 'reset'>}
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * Additional ClassNames to add to button
   */
  className: PropTypes.string,
  /**
   * Contents of the button
   */
  children: PropTypes.node,
  /**
   * A unique identifier for the button
   */
  id: PropTypes.string,
  /**
   * The name of the [icon](/#/Components/Icon) to add inside the button
   */
  icon: PropTypes.string,
  /**
   * Boolean for placing the icon to the right of the button text
   */
  iconAfterText: boolRequiresOtherProp('icon'),
  /**
   * Disables the button, making it inoperable
   */
  disabled: PropTypes.bool,
  /**
   * Replaces button contents with a spinner icon while a background action is being performed
   */
  loading: PropTypes.bool,
  /**
   * Changes the size of the button, giving it more or less padding and font size
   * @type {PropTypes.Requireable<ButtonSize>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Make the button have more visual weight to identify the primary call to action
   */
  primary: PropTypes.bool,
  /**
   * Indicate pressing the button will perform a destructive action
   */
  danger: PropTypes.bool,
  /**
   * Render the button as inline text without padding
   */
  plain: PropTypes.bool,
  /**
   * Button takes up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * Specify the tabIndex of the button
   */
  tabIndex: PropTypes.number,
  /**
   * Visually hidden text for screen readers
   */
  accessibilityLabel: PropTypes.string,
  /**
   * Id of the element the button controls
  */
  ariaControls: PropTypes.string,
  /**
   * Tells screen reader the controlled element is expanded
  */
  ariaExpanded: PropTypes.bool,
  /**
   * Tells screen reader the element is pressed
   */
  ariaPressed: PropTypes.bool,
  /**
   * Callback when button is pressed
   */
  onClick: PropTypes.func,
  /**
   * Callback when button receives focus
   */
  onFocus: PropTypes.func,
  /**
   * Callback when focus leaves button
   */
  onBlur: PropTypes.func,
};

export default Button;

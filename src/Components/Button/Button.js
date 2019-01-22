import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Size from '../Utils/Size';

import './Button.scss';

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
    fullWidth,
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
    'btn-lg': size === Size.LARGE,
    'btn-sm': size === Size.SMALL,
    'btn-primary': primary,
    'btn-danger': danger,
    'btn-fullwidth': fullWidth,
  });

  // TO DO: replace with actual Icon component spinner
  // also need to animate the icon
  const spinnerSVGMarkup = loading ? (
    <span className="btn-loading-spinner">
      <svg viewBox="0 0 16 16" width="16" height="16">
        <title>loading</title>
        <g fill="#555555">
          <path fill="currentColor" d="M8,16c-1.644043,0-3.2236328-0.4951172-4.5683594-1.4321289 c-0.453125-0.3154297-0.5644531-0.9389648-0.2485352-1.3920898c0.3164062-0.4521484,0.9399414-0.5644531,1.3920898-0.2485352 C5.5825195,13.6289062,6.7670898,14,8,14c3.3085938,0,6-2.6914062,6-6s-2.6914062-6-6-6S2,4.6914062,2,8 c0,0.5844727,0.0834961,1.1616211,0.2490234,1.7158203c0.1577148,0.5292969-0.1435547,1.0864258-0.6728516,1.2441406 c-0.5283203,0.1572266-1.0864258-0.1435547-1.2441406-0.6728516C0.1118164,9.5473633,0,8.777832,0,8c0-4.4111328,3.5888672-8,8-8 s8,3.5888672,8,8S12.4111328,16,8,16z" transform="rotate(106.50399999320507 8 8)" />
        </g>
      </svg>
    </span>
  ) : null;

  // TO DO: add the Icon markup once an Icon component is created
  const content = (
    <span className="btn-content">
      {spinnerSVGMarkup}
      {children}
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
  size: Size.MEDIUM,
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
  ]).isRequired,
  /**
   * A unique identifier for the button
   */
  id: PropTypes.string,
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
   */
  size: PropTypes.oneOf([Size.SMALL, Size.MEDIUM, Size.LARGE]),
  /**
   * Make the button have more visual weight to identify the primary call to action
   */
  primary: PropTypes.bool,
  /**
   * Indicate pressing the button will perform a destructive action
   */
  danger: PropTypes.bool,
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

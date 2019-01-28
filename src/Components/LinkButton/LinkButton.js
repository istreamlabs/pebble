import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { caseInsensativeStringCompare } from '../../Utils';

import '../Button/Button.scss';

const LinkButton = (
  {
    id,
    children,
    className,
    disabled,
    href,
    size,
    primary,
    danger,
    fullWidth,
    target,
    tabIndex,
    accessibilityLabel,
  }
) => {
  const classes = classNames('btn', className, {
    'btn-lg': caseInsensativeStringCompare(size, 'large'),
    'btn-sm': caseInsensativeStringCompare(size, 'small'),
    'btn-primary': primary,
    'btn-danger': danger,
    'btn-fullwidth': fullWidth,
    disabled,
  });

  const content = (
    <span className="btn-content">
      {children}
    </span>
  );

  return disabled ? (
    // Render an `<a>` so toggling disabled/enabled state changes only the
    // `href` attribute instead of replacing the whole element.
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a id={id} className={classes} aria-label={accessibilityLabel} aria-disabled={disabled}>
      {content}
    </a>
  ) : (
    <a
      id={id}
      className={classes}
      href={href}
      tabIndex={tabIndex}
      target={target}
      aria-label={accessibilityLabel}
    >
      {content}
    </a>
  );
};

LinkButton.defaultProps = {
  type: 'button',
  size: 'medium',
};

LinkButton.propTypes = {
  /**
   * A unique identifier for the Link
   */
  id: PropTypes.string,
  /**
   * Additional ClassNames to add to button
   */
  className: PropTypes.string,
  /**
   * Contents of the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Disables the button, making it inoperable
   */
  disabled: PropTypes.bool,
  /**
   * URL of the page the link goes to
   */
  href: PropTypes.string.isRequired,
  /**
   * Changes the size of the button, giving it more or less padding and font size
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
   * Button takes up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * Specify the tabIndex of the button
   */
  tabIndex: PropTypes.number,
  /**
   * where to open the linked document
   */
  target: PropTypes.string,
  /**
   * Visually hidden text for screen readers
   */
  accessibilityLabel: PropTypes.string,
};

export default LinkButton;

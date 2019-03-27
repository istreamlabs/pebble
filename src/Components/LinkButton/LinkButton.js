import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { caseInsensitiveStringCompare } from '../../Utils';
import { boolRequiresOtherProp } from '../../Types';

import Icon from '../Icon/Icon';
import Link from '../Link/Link';

import '../Button/Button.scss';

/**
 * A LinkButton is a hyperlink that looks like a button.
 * It applies the same styles from [Button](/#/Components/Button) to a [Link](/#/Components/Link) component.
 *
 * ---
 */

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
    icon,
    iconAfterText,
    tabIndex,
    accessibilityLabel,
    ...rest,
  }
) => {
  const classes = classNames('btn', className, {
    'btn-lg': caseInsensitiveStringCompare(size, 'large'),
    'btn-sm': caseInsensitiveStringCompare(size, 'small'),
    'btn-primary': primary,
    'btn-danger': danger,
    'w-100': fullWidth,
    disabled,
  });

  const iconElement = function (name) {
    const iconSize = caseInsensitiveStringCompare(size, 'large') ? 20 : 16;

    return (
      <Icon name={name} size={iconSize} className="btn-icon" />
    );
  };

  const leftIcon = !iconAfterText && icon && iconElement(icon);
  const rightIcon = icon && iconAfterText && iconElement(icon);

  const contentClasses = classNames('btn-content', 'flex', 'items-center', {
    'justify-between': icon && fullWidth,
    'justify-center': (!icon && fullWidth),
  });

  const content = (
    <div className={contentClasses}>
      {leftIcon}
      {children && <span className="btn-label">{children}</span>}
      {rightIcon}
    </div>
  );

  return disabled ? (
    // Render an `<a>` so toggling disabled/enabled state changes only the
    // `href` attribute instead of replacing the whole element.
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      id={id}
      className={classes}
      aria-label={accessibilityLabel}
      aria-disabled={disabled}
    >
      {content}
    </a>
  ) : (
    <Link
      id={id}
      className={classes}
      unstyled
      href={href}
      tabIndex={tabIndex}
      aria-label={accessibilityLabel}
      {...rest}
    >
      {content}
    </Link>
  );
};

LinkButton.defaultProps = {
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
   * Partial or full url the Link goes to
   */
  href: PropTypes.string,
  /**
   * The name of the [icon](/#/Components/Icon) to add inside the button
   */
  icon: PropTypes.string,
  /**
   * Boolean for placing the icon to the right of the button text
   */
  iconAfterText: boolRequiresOtherProp('icon'),
  /**
   * Changes the size of the button, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
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
   * Visually hidden text for screen readers
   */
  accessibilityLabel: PropTypes.string,
};

export default LinkButton;

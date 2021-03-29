// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { forwardRef } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import { caseInsensitiveStringCompare } from '../../Utils';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Link/Link' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';
import Link from '../Link/Link';

import '../Button/Button.scss';

const propTypes = {
  /**
   * Visually hidden text for screen readers
   */
  accessibilityLabel: PropTypes.string,
  /**
   * A unique identifier for the Link
   */
  id: PropTypes.string,
  /**
   * Contents of the button
   */
  children: PropTypes.node,
  /**
   * Additional ClassNames to add to button
   */
  className: PropTypes.string,
  /**
   * Indicate pressing the button will perform a destructive action
   */
  danger: PropTypes.bool,
  /**
   * Disables the button, making it inoperable
   */
  disabled: PropTypes.bool,
  /**
   * Button takes up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * Partial or full url the Link goes to
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
   */
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'ref' implicitly has an 'any' type.
  href: PropTypes.string,
  /**
   * Name of the [icon](/#/Components/Icon) to place before the button label text
   */
  icon: PropTypes.string,
  /**
   * Name of the [icon](/#/Components/Icon) to add after the button label text
   */
  iconAfterText: PropTypes.string,
  /**
   * Make the button have more visual weight to identify the primary call to action
   */
  primary: PropTypes.bool,
  /**
   * Changes the size of the button, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'name' implicitly has an 'any' type.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Specify the tabIndex of the button
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   */
  tabIndex: PropTypes.number,
};

const defaultProps = {
  children: null,
  danger: false,
  disabled: false,
  fullWidth: false,
  primary: false,
  size: 'medium',
  tabIndex: 0,
};

/**
 * A LinkButton is a hyperlink that looks like a button.
 * It applies the same styles from [Button](/#/Components/Button) to a [Link](/#/Components/Link) component.
 *
 * ---
 */

// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const LinkButton = forwardRef((props, ref) => {
  const {
    id,
    children,
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    className,
    disabled,
    href,
    size,
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    primary,
    danger,
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    fullWidth,
    icon,
    iconAfterText,
    tabIndex,
    accessibilityLabel,
    ...rest
  } = props;

  const classes = classNames('btn', className, {
    'btn-lg': caseInsensitiveStringCompare(size, 'large'),
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    'btn-sm': caseInsensitiveStringCompare(size, 'small'),
    'btn-primary': primary,
    'btn-danger': danger,
    'w-100': fullWidth,
    disabled,
  });

  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  const iconElement = function(name) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const iconSize = caseInsensitiveStringCompare(size, 'large')
      ? 20
      : 16;

    return <Icon name={name} size={iconSize} className="btn-icon" />;
  };

  const leftIcon = icon && iconElement(icon);
  const rightIcon = iconAfterText && iconElement(iconAfterText);

  const contentClasses = classNames(
    'btn-content',
    'flex',
    'items-center',
    {
      'justify-between': icon && fullWidth,
      'justify-center': !icon && fullWidth,
    },
  );

  const content = (
    <span className={contentClasses}>
      {leftIcon}
      {children && <span className="btn-label">{children}</span>}
      {rightIcon}
    </span>
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
      ref={ref}
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
      ref={ref}
      {...rest}
    >
      {content}
    </Link>
  );
});

LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;
LinkButton.displayName = 'LinkButton';

export default LinkButton;

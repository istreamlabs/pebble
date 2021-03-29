// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import classNames from 'classnames';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'size' implicitly has an 'any' type.
import './Badge.scss';

function getSize(size) {
  switch (size) {
    case 'small':
      return 7;
    case 'large':
      return 5;
    default:
      return 6;
  }
}

const propTypes = {
  /**
   * Text to be rendered
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * The `<Icon>` component to be rendered inside the badge.
   * See the [Icon component documentation](/#/Components/Icon) for available icons
   * @type {PropTypes.Requireable<keyof icons>}
   */
  icon: PropTypes.string,
  /**
   * Change the size of the Badge
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Type of message to be displayed
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * @type {PropTypes.Requireable<AppearanceType>}
   */
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  type: PropTypes.oneOf([
    'default',
    'info',
    'warn',
    'danger',
    'success',
    'special',
  ]),
};

const defaultProps = {
  children: null,
  size: 'medium',
  type: 'default',
};

/**
 * A way to communicate status of an object.
 *
 * ---
 */

function Badge({ children, className, icon, size, type }) {
  const classes = classNames(
    'badge',
    {
      [`badge-${type}`]: type !== 'default',
      [`badge-${size}`]: size !== 'medium',
      baseline: icon,
    },
    className,
  );

  return (
    <Text className={classes} size={getSize(size)} bold>
      {icon && <Icon name={icon} className="badge-icon" />}
      {children}
    </Text>
  );
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
Badge.displayName = 'Badge';

export default Badge;

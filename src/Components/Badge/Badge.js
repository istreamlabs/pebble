import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon';
import Text from '../Text/Text';

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
   * @type {PropTypes.Requireable<AppearanceType>}
   */
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
      [`badge-${size}`]: type !== 'medium',
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

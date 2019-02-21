import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon';
import Text from '../Text/Text';

import './Badge.scss';

/**
 * A way to communicate status of an object.
 *
 * ---
 */

const Badge = (
  {
    children,
    size,
    type,
  }
) => {
  const classes = classNames('badge', {
    [`badge-${type}`]: type !== 'default',
    [`badge-${size}`]: type !== 'medium',
    baseline: type === 'live',
  });

  const iconMarkup = type === 'live' ? <Icon name="circle" className="badge-icon" /> : null;

  return (
    <Text
      className={classes}
      size={size === 'small' ? 7 : size === 'large' ? 5 : 6}
      bold
    >
      {iconMarkup}
      {type === 'live' ? 'live' : children}
    </Text>
  );
};

Badge.defaultProps = {
  size: 'medium',
  type: 'default',
};

Badge.propTypes = {
  /**
   * Text to be rendered
   */
  children: PropTypes.string,
  /**
   * Change the size of the Badge
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Type of message to be displayed
   * @type {PropTypes.Requireable<'default' | 'info' | 'warn' | 'danger' | 'success' | 'special' | 'live'>}
   */
  type: PropTypes.oneOf(['default', 'info', 'warn', 'danger', 'success', 'special', 'live']),
};

export default Badge;

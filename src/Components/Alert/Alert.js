import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import TextContainer from '../TextContainer/TextContainer';

import './Alert.scss';

const DEFAULT_ICONS = {
  default: 'flag',
  info: 'info-circle',
  warn: 'warning-circle-outline',
  danger: 'ban',
  success: 'check-circle-outline',
};

const propTypes = {
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * An `<Icon>` component to be rendered instead of the default icon.
   * See the [Icon component documentation](/#/Components/Icon) for available components
   */
  icon: PropTypes.string,
  /**
   * Callback when alert is dismissed
   */
  onDismiss: PropTypes.func,
  /**
   * The header of the alert
   */
  title: PropTypes.string.isRequired,
  /**
   * Type of message to be displayed
   * @type {PropTypes.Requireable<'default' | 'info' | 'warn' | 'danger' | 'success'>}
   */
  type: PropTypes.oneOf(['default', 'info', 'warn', 'danger', 'success']),
};

const defaultProps = {
  className: '',
  children: null,
  icon: '',
  type: 'default',
  onDismiss: undefined
};

/**
 * Used to communicate an important and usually time-sensitive message to the user.
 *
 * ---
 */

function Alert({
  children,
  className,
  icon,
  onDismiss,
  type,
  title,
}) {
  const classes = classNames('alert', {
    [`alert-${type}`]: type,
  }, className);

  const iconName = icon || DEFAULT_ICONS[type];

  const iconMarkup = (
    <div className="alert-icon-container">
      <Icon name={iconName} className="alert-icon" />
      {type !== 'default' && <div className="alert-icon-white-fill" />}
    </div>
  );

  const dismissMarkup = onDismiss ? (
    <div><Button plain onClick={onDismiss} icon="close" accessibilityLabel="dismiss" className="alert-dismiss-btn" /></div>
  ) : null;

  return (
    <Block
      paddingHorizontal="4"
      paddingVertical="4"
      className={classes}
      role={type === 'danger' || type === 'warn' ? 'alert' : undefined}
      aria-live={type === 'default' || type === 'info' || type === 'success' ? 'polite' : undefined}
    >
      {iconMarkup}
      <TextContainer tight size="6" className="alert-content">
        {title && <Heading element="4">{title}</Heading>}
        {children}
      </TextContainer>
      {dismissMarkup}
    </Block>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import classNames from 'classnames';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Heading/Heading' was resolved to '/User... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Heading from '../Heading/Heading';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextContainer/TextContainer' was resolv... Remove this comment to see the full error message
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
   // @ts-expect-error ts-migrate(2538) FIXME: Type 'undefined' cannot be used as an index type.
   * Type of message to be displayed
   // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
   * @type {PropTypes.Requireable<'default' | 'info' | 'warn' | 'danger' | 'success'>}
   */
  type: PropTypes.oneOf([
    'default',
    'info',
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    'warn',
    'danger',
    'success',
  ]),
};

// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const defaultProps = {
  children: null,
  type: 'default',
// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
};

/**
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * Used to communicate an important and usually time-sensitive message to the user.
 *
 * ---
 */

function Alert({
  children,
  className,
  icon,
  onDismiss,
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  type,
  title,
}) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const classes = classNames(
    'alert',
    {
      [`alert-${type}`]: type,
    },
    className,
  );

  const iconName = icon || DEFAULT_ICONS[type];

  const iconMarkup = (
    <div className="alert-icon-container">
      <Icon name={iconName} className="alert-icon" />
      {type !== 'default' && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="alert-icon-white-fill" />
      )}
    </div>
  );

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const dismissMarkup = onDismiss ? (
    <div>
      <Button
        plain
        onClick={onDismiss}
        icon="close"
        accessibilityLabel="dismiss"
        className="alert-dismiss-btn"
      />
    </div>
  ) : null;

  return (
    <Block
      padding="4"
      className={classes}
      role={
        type === 'danger' || type === 'warn' ? 'alert' : undefined
      }
      aria-live={
        type === 'default' || type === 'info' || type === 'success'
          ? 'polite'
          : undefined
      }
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
Alert.displayName = 'Alert';

export default Alert;

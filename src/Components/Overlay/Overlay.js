import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';

import './Overlay.scss';

const propTypes = {
  /**
   * The contents of the overlay
   */
  children: PropTypes.node,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Callback when backdrop is dismissed
   */
  onClick: PropTypes.func,
};

/**
 * Darkens the main body content so that another component,
 * such as a modal, becomes the primary focus of the UI.
 *
 * ---
 */

function Overlay({
  children,
  className,
  onClick,
  ...rest
}) {
  const classes = classNames('overlay', className);

  return (
    <Block
      className={classes}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Block>
  );
}

Overlay.propTypes = propTypes;

export default Overlay;

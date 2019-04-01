import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';

import './Overlay.scss';

/**
 * Darkens the main body content so that another component,
 * such as a modal, becomes the primary focus of the UI.
 *
 * ---
 */

const Overlay = (
  {
    children,
    className,
    onClick,
    ...rest,
  }
) => {
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
};

Overlay.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Callback when backdrop is dismissed
   */
  onClick: PropTypes.func,
};

export default Overlay;

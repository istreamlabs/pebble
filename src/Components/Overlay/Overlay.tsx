// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
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
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * such as a modal, becomes the primary focus of the UI.
 *
 * ---
 */

function Overlay({ children, className, onClick, ...rest }) {
  const classes = classNames('overlay', className);

  return (
    <Block className={classes} onClick={onClick} {...rest}>
      {children}
    </Block>
  );
}

Overlay.propTypes = propTypes;
Overlay.displayName = 'Overlay';

export default Overlay;

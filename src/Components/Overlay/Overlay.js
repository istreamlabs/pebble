import React from 'react';
import PropTypes from 'prop-types';

import './Overlay.scss';

/**
 * Darkens the main body content so that another component,
 * such as a modal, becomes the primary focus of the UI.
 *
 * ---
 */

const Overlay = (
  {
    onClick,
  }
) => (
  <div
    className="overlay"
    onClick={onClick}
  />
);

Overlay.defaultProps = {
  type: 'default',
};

Overlay.propTypes = {
  /**
   * Callback when backdrop is dismissed
   */
  onClick: PropTypes.func,
};

export default Overlay;

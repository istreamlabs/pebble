import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonGroup.scss';

/**
 * Display related [Buttons](/#/Components/Button) or
 * [LinkButtons](/#/Components/LinkButton) in a horizontal
 * row to help with spacing between buttons.
 *
 * ---
 */

const ButtonGroup = (
  {
    children,
    className,
    fullWidth,
    size,
    toolbar,
  }
) => {
  const classes = classNames(className, {
    'btn-group': !toolbar,
    'btn-toolbar': toolbar,
    'btn-group-fullwidth': fullWidth,
  });

  return (
    <div className={classes}>
      {React.Children.map(children, child => (
        <div className={toolbar ? 'btn-toolbar-item' : 'btn-group-item'}>
          {size ? React.cloneElement(child, { size }) : child}
        </div>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  /**
   * Additional ClassNames to add to button group
   */
  className: PropTypes.string,
  /**
   * Contents of the group
   */
  children: PropTypes.node.isRequired,
  /**
   * Takes up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * Changes the size of all buttons in the group
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Removes space between buttons and combines them into a button bar
   */
  toolbar: PropTypes.bool,
};

export default ButtonGroup;

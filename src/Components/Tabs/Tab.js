import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button/Button';

import './Tab.scss';

/**
 * A single Tab used by Tabs
 *
 * ---
 */

const Tab = (
  {
    id,
    children,
    className,
    isSelected,
    ariaControls
  }
) => {
  const classes = classNames('tab', {
    'tab-selected': isSelected
  }, className);

  return (
    <li
      className={classes}
      role="presentation"
    >
      <Button
        id={`${id}-tab`}
        plain
        className="tab-button"
        fullWidth
        aria-controls={ariaControls}
        aria-selected={isSelected}
        role="tab"

      >
        {children}
      </Button>
    </li>
  );
};

Tab.propTypes = {
  /**
   * Text to be rendered
   */
  children: PropTypes.any,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Take up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  /**
   * Look like it is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Id of the element the button controls
  */
  ariaControls: PropTypes.string,
};

export default Tab;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../Button/Button';

import './Tab.scss';

const propTypes = {
  /**
   * Disables the tab, making it inoperable
   */
  disabled: PropTypes.bool,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Take up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the tab
   */
  id: PropTypes.string,
  /**
   * Look like it is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Id of the element the button controls
   */
  ariaControls: PropTypes.string,
  /**
   * Callback function when a tab is pressed
   */
  onClick: PropTypes.func,
  /**
   * Content to be rendered in the tab
   */
  label: PropTypes.node,
  /**
   * Changes the size of the tabs, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

const defaultProps = {
  size: 'medium',
};

/**
 * A single Tab used by Tabs
 *
 * ---
 */

const Tab = ({
  id,
  className,
  isSelected,
  ariaControls,
  onClick,
  label,
  fullWidth,
  size,
  disabled,
}) => {
  const handleClick = () => {
    onClick(id);
  };

  const classes = classNames(
    'tab',
    {
      'tab-selected': isSelected,
      'w-100': fullWidth,
    },
    className,
  );

  const tabClasses = classNames('tab-button', {
    'text-transform-uppercase tracked pv-2': size === 'small',
    'ph-5': size === 'medium',
    'ph-6': size === 'large',
  });

  return (
    <li className={classes} role="presentation">
      <Button
        id={id}
        className={tabClasses}
        fullWidth
        aria-controls={ariaControls}
        aria-selected={isSelected}
        role="tab"
        onClick={handleClick}
        size={size}
        disabled={disabled}
      >
        {label}
      </Button>
    </li>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
Tab.displayName = 'Tab';

export default Tab;

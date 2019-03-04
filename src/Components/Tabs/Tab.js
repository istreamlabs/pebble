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
    children,
    className,
    selected,
  }
) => {
  const classes = classNames('tab', {
    'tab-selected': selected
  }, className);

  return (
    <li
      className={classes}
    >
      <Button plain className="tab-button" fullWidth>
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
   * Takes up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * Tab is selected
   */
  selected: PropTypes.bool,
};

export default Tab;

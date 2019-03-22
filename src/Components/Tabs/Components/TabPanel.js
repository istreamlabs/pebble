import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';

/**
 * A child of Tabs meant to be an easy way to create a Tab and its associated content.
 *
 * ---
 */

const Tab = (
  {
    tabId,
    className,
    children,
    ...rest
  }
) => {
  const classes = classNames(
    'tab', className
  );

  return (
    <Block
      as="section"
      {...rest}
      className={classes}
      role="tabpanel"
      aria-labelledby={tabId}
    >
      {children}
    </Block>
  );
};

Tab.defaultProps = {
  size: 'medium'
};

Tab.propTypes = {
  children: PropTypes.node,
  /**
   * Disables the tab, making it inoperable
   */
  disabled: PropTypes.bool,
  /**
   * Additional classNames to add the panel
   */
  className: PropTypes.string,
  /**
   * Id of the tab associated with this panel
   */
  tabId: PropTypes.string.isRequired,
  /**
   * Label of the tab associated with this panel
   */
  label: PropTypes.string.isRequired,
};

export default Tab;

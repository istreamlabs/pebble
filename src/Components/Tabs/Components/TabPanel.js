import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';

const propTypes = {
  /**
   * Id of the panel
   */
  id: PropTypes.string.isRequired,
  /**
   * The contents of the panel
   */
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

const defaultProps = {
  size: 'medium',
};

/**
 * A child of Tabs meant to be an easy way to create a Tab and its associated content.
 * Use apply any props available in [Block](/#/Components/Block), as TabPanel is just a wrapper for that
 *
 * ---
 */

const TabPanel = ({ tabId, className, children, ...rest }) => {
  const classes = classNames('tab', className);

  return (
    <Block
      as="section"
      className={classes}
      role="tabpanel"
      aria-labelledby={tabId}
      {...rest}
    >
      {children}
    </Block>
  );
};

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;
TabPanel.displayName = 'TabPanel';

export default TabPanel;

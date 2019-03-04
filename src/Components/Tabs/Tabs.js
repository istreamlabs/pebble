import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tab from './Tab';

import './Tabs.scss';

/**
 * A set of Tabs
 *
 * ---
 */

export class Tabs extends React.PureComponent {
  render() {
    const {
      fullWidth,
      selected,
      tabs,
    } = this.props;

    const tabClasses = classNames('tabs', {
      'tabs-fullwidth': fullWidth
    });

    const tabsMarkup = tabs.map(tab => (
      <Tab
        key={tab.id}
        selected={selected === tab.id}
        fullWidth={fullWidth}
      >
        {tab.content}
      </Tab>
    ));

    return (
      <ul
        role="tablist"
        className={tabClasses}
      >
        {tabsMarkup}
      </ul>
    );
  }
}

Tabs.propTypes = {
  /**
   * Takes up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * Index of selected tab
   */
  selected: PropTypes.string,
  /**
   * List of tabs
   */
  tabs: PropTypes.arrayOf(PropTypes.object),
  /**
   * Callback function when a tab is selected
  onSelect: PropTypes.func,  */
};

export default Tabs;

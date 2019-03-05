import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tab from './Tab';

import './Tabs.scss';

/**
 * A set of Tabs
 *
 * ---
 *
 * To do for each tab's content
 *
 * Add tabpanel role to each <section> to indicate it is a tab panel.
 * Add id={tab.content} to each <section> as a reference for its tab.
 * Add aria-labelledby={tab.id} to each <section> to reference its label.
 * Add hidden to each inactive <section> to indicate it is hidden.
 */

export class Tabs extends React.PureComponent {
  render() {
    const {
      fullWidth,
      selectedId,
      tabs,
    } = this.props;

    const tabClasses = classNames('tabs', {
      'tabs-fullwidth': fullWidth
    });

    const tabsMarkup = tabs.map(tab => (
      <Tab
        id={tab.id}
        key={tab.id}
        isSelected={selectedId === tab.id}
        fullWidth={fullWidth}
        ariaControls={tab.content}
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
   * Id of selected tab
   */
  selectedId: PropTypes.string,
  /**
   * List of tabs
   */
  tabs: PropTypes.arrayOf(PropTypes.object),
  /**
   * Callback function when a tab is selected
  onSelect: PropTypes.func,  */
};

export default Tabs;

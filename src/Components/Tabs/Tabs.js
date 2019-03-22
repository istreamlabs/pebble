import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tab from './Tab';
import Block from '../Block/Block';
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
      children,
      className,
      fullWidth,
      selectedId,
      tabs,
      onSelect,
      size,
    } = this.props;

    const tabClasses = classNames('flex', 'list-unstyled', {
      'w-100': fullWidth
    });

    const tabsMarkup = tabs.map(tab => (
      <Tab
        ariaControls={tab.panelId}
        id={tab.id}
        key={tab.id}
        isSelected={selectedId === tab.id}
        fullWidth={fullWidth}
        onClick={onSelect}
        label={tab.label}
        size={size}
      />
    ));

    return (
      <Block direction="column" className={className}>
        <ul
          role="tablist"
          className={tabClasses}
        >
          {tabsMarkup}
        </ul>
        <Block>
          {children}
        </Block>
      </Block>

    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
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
   */
  onSelect: PropTypes.func,
  /**
   * Changes the size of the tabs, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Tabs;

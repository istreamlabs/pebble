// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Tab' was resolved to '/Users/... Remove this comment to see the full error message
import classNames from 'classnames';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Tab from './Components/Tab';
import Block from '../Block/Block';

import './Tabs.scss';

const propTypes = {
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
   // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Tabs'.
   * Changes the size of the tabs, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

/**
 * A tab keeps related content in a single container that is shown and hidden through navigation
 // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'tab' implicitly has an 'any' type.
 *
 * ---
 */

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'tab' implicitly has an 'any' type.
export class Tabs extends React.PureComponent {
  render() {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const {
      className,
      fullWidth,
      tabs,
      onSelect,
      selectedId,
      size,
      children,
      ...rest
    } = this.props;

    const classes = classNames(className, 'relative');

    const getTabsMarkup = () => {
      if (tabs) {
        const selected =
          selectedId === '' || selectedId === undefined
            ? tabs[0].id
            : tabs[tabs.findIndex(tab => tab.id === selectedId)].id;

        return tabs.map(tab => (
          <Tab
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'child' implicitly has an 'any' type.
            label={tab.label}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            id={tab.id}
            key={tab.id}
            isSelected={selected === tab.id}
            fullWidth={fullWidth}
            onClick={onSelect}
            size={size}
            disabled={tab.disabled}
            ariaControls={tab.panelId}
          />
        ));
      }
      const selected =
        selectedId === '' || selectedId === undefined
          ? children[0].props.tabId
          : selectedId;

      return React.Children.map(children, child => (
        <Tab
          label={child.props.label}
          // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'tab' implicitly has an 'any' type.
          id={child.props.tabId}
          key={child.props.tabId}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          isSelected={selected === child.props.tabId}
          fullWidth={fullWidth}
          onClick={onSelect}
          size={size}
          disabled={child.props.disabled}
          ariaControls={child.props.id}
        />
      ));
    };

    const getSelectedTabContent = () => {
      if (tabs) {
        const selectedIndex =
          selectedId === '' || selectedId === undefined
            ? 0
            : tabs.findIndex(tab => selectedId === tab.id);

        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'child' implicitly has an 'any' type.
        return (
          <Block
            id={tabs[selectedIndex].panelId}
            as="section"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            role="tabpanel"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            aria-labelledby={tabs[selectedIndex].id}
          >
            {tabs[selectedIndex].content}
          </Block>
        );
      }
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'trackScrolling' does not exist on type '... Remove this comment to see the full error message
      const childArray = React.Children.toArray(children);

      const selectedIndex =
        selectedId === '' || selectedId === undefined
          ? 0
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'displayName' does not exist on type 'typ... Remove this comment to see the full error message
          : childArray.findIndex(
              child => selectedId === child.props.tabId,
            );

      return childArray[selectedIndex];
    };

    return (
      <Block displayBlock className={classes}>
        <Block
          as="ul"
          role="tablist"
          className="tabs"
          onScroll={this.trackScrolling}
          {...rest}
        >
          {getTabsMarkup()}
        </Block>
        {getSelectedTabContent()}
      </Block>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.displayName = 'Tabs';

export default Tabs;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
   * Changes the size of the tabs, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

/**
 * A tab keeps related content in a single container that is shown and hidden through navigation
 *
 * ---
 */

export class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.tabContainer = React.createRef();
    this.state = {
      overflowActive: false,
      scrollEndTarget: null,
      scrollEnd: false,
      scrollStart: true,
      scrollStartTarget: null,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling, false);

    const diff =
      this.tabContainer.current.scrollWidth -
      this.tabContainer.current.offsetWidth;

    this.setState({
      overflowActive: this.isOverflowActive(
        this.tabContainer.current,
      ),
      scrollEndTarget:
        this.tabContainer.current.firstChild.getBoundingClientRect()
          .left - diff,
      scrollStartTarget: this.tabContainer.current.firstChild.getBoundingClientRect()
        .left,
    });
  }

  componentWillUnmount() {
    document.removeEventListener(
      'scroll',
      this.trackScrolling,
      false,
    );
  }

  isOverflowActive = e => {
    if (e) {
      return (
        e.offsetHeight < e.scrollHeight ||
        e.offsetWidth < e.scrollWidth
      );
    }
    return false;
  };

  isScrolledToEnd = e => {
    const { scrollEndTarget } = this.state;

    if (
      scrollEndTarget >= e.firstChild.getBoundingClientRect().left
    ) {
      this.setState({
        scrollEnd: true,
      });
      return true;
    }
    this.setState({
      scrollEnd: false,
    });
    return false;
  };

  isScrolledToStart = e => {
    const { scrollStartTarget } = this.state;

    if (
      scrollStartTarget === e.firstChild.getBoundingClientRect().left
    ) {
      this.setState({
        scrollStart: true,
      });
      return true;
    }
    this.setState({
      scrollStart: false,
    });
    return false;
  };

  trackScrolling = () => {
    this.isScrolledToEnd(this.tabContainer.current);
    this.isScrolledToStart(this.tabContainer.current);
  };

  render() {
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

    const { overflowActive, scrollEnd, scrollStart } = this.state;

    const tabsClasses = classNames('tabs');

    const getTabsMarkup = () => {
      if (tabs) {
        const selected =
          selectedId === '' || selectedId === undefined
            ? tabs[0].id
            : tabs[tabs.findIndex(tab => tab.id === selectedId)].id;

        return tabs.map(tab => (
          <Tab
            label={tab.label}
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
          id={child.props.tabId}
          key={child.props.tabId}
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

        return (
          <Block
            id={tabs[selectedIndex].panelId}
            as="section"
            role="tabpanel"
            aria-labelledby={tabs[selectedIndex].id}
          >
            {tabs[selectedIndex].content}
          </Block>
        );
      }
      const childArray = React.Children.toArray(children);

      const selectedIndex =
        selectedId === '' || selectedId === undefined
          ? 0
          : childArray.findIndex(
              child => selectedId === child.props.tabId,
            );

      return childArray[selectedIndex];
    };

    const overflowEndClasses = classNames('tabs-overflow', {
      'tabs-overflow-shadow-end': scrollEnd === false,
    });

    const overflowStartClasses = classNames('tabs-overflow', {
      'tabs-overflow-shadow-start': scrollStart === false,
    });

    return (
      <Block
        flex
        direction="column"
        className={`relative ${className}`}
      >
        <Block
          as="ul"
          role="tablist"
          className={tabsClasses}
          forwardRef={this.tabContainer}
          onScroll={this.trackScrolling}
          {...rest}
        >
          {getTabsMarkup()}
        </Block>
        {overflowActive && (
          <>
            <div
              className={overflowEndClasses}
              style={{
                height: `${this.tabContainer.current.offsetHeight -
                  1}px`,
              }}
            />
            <div
              className={overflowStartClasses}
              style={{
                height: `${this.tabContainer.current.offsetHeight -
                  1}px`,
              }}
            />
          </>
        )}
        {getSelectedTabContent()}
      </Block>
    );
  }
}

Tabs.propTypes = propTypes;

export default Tabs;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import Button from '../../Button/Button';
import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';

import './MenuItem.scss';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    const { containsActiveItem } = this.props;

    this.state = {
      isOpen: !!containsActiveItem
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.containsActiveItem) {
      const { isOpen } = this.state;
      if (!isOpen) {
        this.setState({ isOpen: true });
      }
    }
  }

  handleToggleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  renderIconLabel = () => {
    const { item } = this.props;

    return (
      <div className="menu-item-label">
        {item.icon ? <Icon name={item.icon} className="menu-item-icon" /> : null}
        {item.label}
      </div>
    );
  }

  renderToggleButton = () => {
    const { isOpen } = this.state;
    const { item } = this.props;

    const accessibilityLabel = isOpen ? `close ${item.label} sub items` : `show ${item.label} sub items`;

    return (
      <Button onClick={this.handleToggleOpen} className="menu-item-collapse-button" accessibilityLabel={accessibilityLabel}>
        <Icon
          name="arrow-small-down"
          accessibilityLabel={accessibilityLabel}
          className={classNames('menu-item-collapse', { opened: isOpen, closed: !isOpen })}
        />
      </Button>
    );
  }

  renderSubItems = (items) => {
    const subItems = items.map((subItem, i) => (
      <li key={i}>
        <NavLink
          to={subItem.href}
          className={classNames('sub-menu-item')}
          role="menuitem"
          activeClassName="active"
        >
          {subItem.label}
        </NavLink>
      </li>
    ));

    return subItems;
  }

  render() {
    const { item } = this.props;
    const { isOpen } = this.state;

    const hasSubItems = !!(item.items && item.items.length);

    return (
      <li className="menu-item-container">
        <div className="menu-item-content">
          {item.href ? (
            <NavLink
              id={`MenuItem-${item.label}`}
              exact={item.exact}
              to={item.href}
              className="menu-item"
              onClick={hasSubItems ? this.handleToggleOpen : undefined}
              aria-haspopup={hasSubItems}
              aria-expanded={isOpen}
              activeClassName="active"
            >
              {this.renderIconLabel()}
            </NavLink>
          ) : Array.isArray(item.items) && item.items.length > 0 ? (
            <button
              id={`MenuItem-${item.label}`}
              type="button"
              className="menu-item"
              aria-haspopup={hasSubItems}
              aria-expanded={isOpen}
              onClick={this.handleToggleOpen}
            >
              {this.renderIconLabel()}
              <Icon
                name="arrow-small-down"
                accessibilityLabel={isOpen ? 'opened' : 'closed'}
                className={classNames('menu-item-collapse', {
                  opened: isOpen,
                  closed: !isOpen
                })}
              />
            </button>
          ) : (
            <Block flex paddingVertical="3" paddingHorizontal="6" textSize="6" className="neutral-500">{item.label}</Block>
          )}
          {hasSubItems && item.href && this.renderToggleButton()}
        </div>
        {hasSubItems && (
          <ul
            role="menu"
            aria-labelledby={`MenuItem-${item.label}`}
            className={classNames('sub-menu-items', { opened: isOpen, closed: !isOpen })}
          >
            {this.renderSubItems(item.items)}
          </ul>
        )}
      </li>
    );
  }
}

MenuItem.propTypes = {
  /**
   * A child item is the currently selected item
   */
  containsActiveItem: PropTypes.bool,
  /**
   * the menu that gets rendered
   */
  item: PropTypes.object.isRequired,
};

export default MenuItem;

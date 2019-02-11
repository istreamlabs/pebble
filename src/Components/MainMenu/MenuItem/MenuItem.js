import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

import './MenuItem.scss';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    const { activeItem, item } = this.props;

    this.state = {
      isOpen: (item.items && item.items.length) && (item.id === activeItem || (item.items || []).some(i => i.id === activeItem))
    };
  }

  handleToogleOpen = () => {
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
      <Button onClick={this.handleToogleOpen} className="menu-item-collapse-button" accessibilityLabel={accessibilityLabel}>
        <Icon
          name="arrow-small-down"
          accessibilityLabel={accessibilityLabel}
          className={classNames('menu-item-collapse', { opened: isOpen, closed: !isOpen })}
        />
      </Button>
    );
  }

  renderSubItems = (items) => {
    const { activeItem } = this.props;

    const subItems = items.map((subItem, i) => (
      <li key={subItem.id}>
        <a
          href={subItem.href}
          className={classNames('sub-menu-item', { active: subItem.id === activeItem })}
          key={i}
          role="menuitem"
        >
          {subItem.label}
        </a>
      </li>
    ));

    return subItems;
  }

  render() {
    const { item, activeItem } = this.props;
    const { isOpen } = this.state;
    const itemClasses = classNames('menu-item-container', {
      open: isOpen,
      active: item.id === activeItem
    });

    const hasSubItems = (item.items && item.items.length);

    return (
      <li className={itemClasses}>
        <div className="menu-item-content">
          {item.href ? (
            <a
              id={`MenuItem-${item.id}`}
              href={item.href}
              className="menu-item"
              onClick={hasSubItems ? this.handleToogleOpen : undefined}
              aria-haspopup={hasSubItems}
              aria-expanded={isOpen}
            >
              {this.renderIconLabel()}
            </a>
          ) : (
            <button
              id={`MenuItem-${item.id}`}
              type="button"
              className="menu-item"
              aria-haspopup={hasSubItems}
              aria-expanded={isOpen}
              onClick={this.handleToogleOpen}
            >
              {this.renderIconLabel()}
              <Icon
                name="arrow-small-down"
                accessibilityLabel={isOpen ? 'opened' : 'closed'}
                className={classNames('menu-item-collapse', { opened: isOpen, closed: !isOpen })}
              />
            </button>
          )}
          {hasSubItems && item.href && this.renderToggleButton()}
        </div>
        {hasSubItems && (
        <ul role="menu" aria-labelledby={`MenuItem-${item.id}`} className={classNames('sub-menu-items', { opened: isOpen, closed: !isOpen })}>
          {this.renderSubItems(item.items)}
        </ul>
        )}
      </li>
    );
  }
}

MenuItem.propTypes = {
  /**
   * id of the selected submenu item
   */
  activeItem: PropTypes.string,
  /**
   * the menu that gets rendered
   */
  item: PropTypes.object.isRequired,
};

export default MenuItem;

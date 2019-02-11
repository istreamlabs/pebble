import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../Icon/Icon';

import './MenuItem.scss';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    const { activeItem, item } = this.props;

    this.state = {
      isOpen: item.id === activeItem || (item.items || []).some(i => i.id === activeItem)
    };
  }

  handleToogleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  renderItemIcon = () => {
    const { item } = this.props;
    return item.icon ? <Icon name={item.icon} className="menu-item-icon" /> : null;
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
    return (
      <li className={itemClasses}>
        {item.items && item.items.length ? (
          <>
            <button
              type="button"
              className="menu-item"
              onClick={this.handleToogleOpen}
              aria-haspopup="true"
              aria-expanded={isOpen}
              id={`MenuItem-${item.id}`}
            >
              <div className="menu-item-label">
                {this.renderItemIcon()}
                {item.label}
              </div>
              <Icon
                name="arrow-small-down"
                accessibilityLabel={isOpen ? 'opened' : 'closed'}
                className={classNames('menu-item-collapse', { opened: isOpen, closed: !isOpen })}
              />
            </button>
            <ul role="menu" aria-labelledby={`MenuItem-${item.id}`} className={classNames('sub-menu-items', { opened: isOpen, closed: !isOpen })}>
              {this.renderSubItems(item.items)}
            </ul>
          </>
        ) : (
          <a href={item.href} className="menu-item">
            <div className="menu-item-label">
              {this.renderItemIcon()}
              {item.label}
            </div>
          </a>
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

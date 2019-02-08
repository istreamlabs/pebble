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

  render() {
    const { item, activeItem } = this.props;
    const { isOpen } = this.state;
    const itemClasses = classNames('main-menu-item-container', {
      open: isOpen,
      active: item.id === activeItem
    });
    return (
      <li className={itemClasses}>
        {item.items && item.items.length ? (
          <>
            <button type="button" className="main-menu-item" onClick={this.handleToogleOpen}>
              <div>{item.label}</div>
              <div className="main-menu-item-collapse">
                <Icon
                  name="arrow-small-down"
                  accessibilityLabel={isOpen ? 'opened' : 'closed'}
                  className={classNames({ opened: isOpen, closed: !isOpen })}
                />
              </div>
            </button>
            <ul className={classNames('sub-menu-items', { opened: isOpen, closed: !isOpen })}>
              {
                item.items.map((subItem, i) => (
                  <li key={`subItem-${subItem.label}-${i}`}>
                    <a href={subItem.href} className={classNames('sub-menu-item', { active: subItem.id === activeItem })} key={i}>{subItem.label}</a>
                  </li>
                ))
              }
            </ul>
          </>
        ) : (
          <a href={item.href} className="main-menu-item">
            <div>{item.label}</div>
          </a>
        )}
      </li>
    );
  }
}

MenuItem.propTypes = {
  activeItem: PropTypes.bool,
  item: PropTypes.object.isRequired,
};

export default MenuItem;

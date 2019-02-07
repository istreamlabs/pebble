import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../Icon/Icon';

import './MainMenuItem.scss';

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
    const { item, activeItem, className } = this.props;
    const { isOpen } = this.state;
    const itemClasses = classNames('main-menu-item-container', className, {
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

const MainMenuItem = (
  {
    isSelected,
    selectedItem,
    activeItem,
    item,
    onClick
  }
) => {
  const isActive = activeItem === item.id;

  const shouldBeOpen = isActive || selectedItem === item.id || (item.items || []).some(i => i.id === selectedItem);

  const itemClasses = classNames('main-menu-item-container', {
    open: isSelected,
    active: isActive
  });

  return (
    <li className={itemClasses}>
      {item.items && item.items.length ? (
        <>
          <button type="button" className="main-menu-item" onClick={onClick}>
            <div>{item.label}</div>
            <div className="main-menu-item-collapse">
              <Icon
                name="arrow-small-down"
                accessibilityLabel={shouldBeOpen ? 'opened' : 'closed'}
                className={classNames({ opened: shouldBeOpen, closed: !shouldBeOpen })}
              />
            </div>
          </button>
          <ul className={classNames('sub-menu-items', { opened: shouldBeOpen, closed: !shouldBeOpen })}>
            {
              item.items.map((subItem, i) => (
                <li key={`subItem-${subItem.label}-${i}`}>
                  <a href={subItem.href} className="sub-menu-item" key={i}>{subItem.label}</a>
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
};

MainMenuItem.defaultProps = {
  isActive: false,
  isSelected: false,
};

MainMenuItem.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
};

export default MenuItem;

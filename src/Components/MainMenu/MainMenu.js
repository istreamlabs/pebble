import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuItem from './MenuItem/MenuItem';

import './MainMenu.scss';

class MainMenu extends React.Component {
  handleClick = (e, id) => {
    const { activeItem } = this.state;
    e.preventDefault();

    // expand or collapse item
    if (activeItem === id) {
      this.setState({ activeItem: null });
    } else {
      this.setState({ activeItem: id });
    }
  }

  render() {
    const {
      activeItem,
      className,
      menu,
      auxMenu
    } = this.props;

    const classes = classNames('main-menu', className);

    return (
      <nav className={classes}>
        <div className="main-menu-top">
          <ul className="main-menu-items">
            { menu.map(item => (
              <MenuItem
                activeItem={activeItem}
                item={item}
                key={item.id}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        <div className="main-menu-bottom">
          <ul className="main-menu-items">
            {auxMenu.map(item => (
              <MenuItem
                activeItem={activeItem}
                item={item}
                key={item.id}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

MainMenu.propTypes = {
  /**
   * id of the item that is active
   */
  activeItem: PropTypes.string,
  /**
   * Additional ClassNames to add to button group
   */
  className: PropTypes.string,
  /**
   * Takes up the full width of its parent container
   */
  menu: PropTypes.arrayOf(PropTypes.object),
  auxMenu: PropTypes.arrayOf(PropTypes.object)
};

export default MainMenu;

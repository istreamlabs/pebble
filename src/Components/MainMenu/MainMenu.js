import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuItem from './MenuItem/MenuItem';

import './MainMenu.scss';

class MainMenu extends React.Component {
  render() {
    const {
      activeItem,
      className,
      menu,
      auxMenu,
      showMenu
    } = this.props;

    const classes = classNames('main-menu', className, {
      opened: showMenu
    });

    return (
      <nav className={classes}>
        <div className="main-menu-top">
          <ul className="main-menu-items">
            {menu.map(item => (
              <MenuItem
                activeItem={activeItem}
                item={item}
                key={item.id}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        {auxMenu && (
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
        )}
      </nav>
    );
  }
}

MainMenu.defaultProps = {
  showMenu: false,
};

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
   * Menu items for the upper portion of the menu
   */
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Menu items for the lower portion of the menu (e.g. Profile, Support)
   */
  auxMenu: PropTypes.arrayOf(PropTypes.object),
  /**
   * show or hide menu below 30rem (480px)
   */
  showMenu: PropTypes.bool,
};

export default MainMenu;

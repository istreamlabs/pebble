import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Text from '../Text/Text';
import MenuItem from './MenuItem/MenuItem';

import './MainMenu.scss';

/**
 * MainMenu provides a way for users to navigate from one site section to another.
 * It contains a top (`menu`) and bottom (`auxMenu`) set of menu items, with each
 * allowing a two-level structure.
 *
 * ---
 */

class MainMenu extends React.Component {
  render() {
    const {
      activeItem,
      className,
      menu,
      auxMenu,
      title,
      onNavigate
    } = this.props;

    const classes = classNames('main-menu', className, {
    });

    return (
      <nav className={classes} aria-label="Main navigation">
        <div className="main-menu-top">
          <Block
            className="main-menu-title"
            paddingVertical="3"
            paddingHorizontal="5"
            alignItems="center"
          >
            <Text bold>{title}</Text>
          </Block>
          <ul className="main-menu-items">
            {menu.map(item => (
              <MenuItem
                activeItem={activeItem}
                item={item}
                key={item.id}
                onClick={onNavigate}
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
                  onClick={onNavigate}
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
  title: 'Portal',
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
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    }))
  })).isRequired,
  /**
   * Menu items for the lower portion of the menu (e.g. Profile, Support)
   */
  auxMenu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    }))
  })),
  title: PropTypes.string,
  /**
   * Callback function when a MenuItem is clicked
   */
  onNavigate: PropTypes.func,
};

export default MainMenu;

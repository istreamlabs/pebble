import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router';

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
      className,
      menu,
      auxMenu,
      title,
      location,
    } = this.props;

    const classes = classNames('main-menu', className);

    const renderItem = menu => (
      menu.map((item) => {
        let isOpen = false;
        if (Array.isArray(item.items) && item.items.length > 0) {
          isOpen = location.pathname === item.href
            || item.items.some(sub => sub.href === location.pathname || `${sub.href}/` === location.pathname);
          console.log('location.pathname', location.pathname);
          console.log('some is ', item.items.some(sub => sub.href === location.pathname || `${sub.href}/` === location.pathname));
        }

        console.log('isOpen', isOpen);


        return (
          <MenuItem
            containsActiveItem={isOpen}
            item={item}
            key={item.id}
          />
        );
      })
    );

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
            {renderItem(menu)}
          </ul>
        </div>
        {auxMenu && (
          <div className="main-menu-bottom">
            <ul className="main-menu-items">
              {renderItem(auxMenu)}
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
   * Additional ClassNames to add to button group
   */
  className: PropTypes.string,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
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
};

export default withRouter(MainMenu);

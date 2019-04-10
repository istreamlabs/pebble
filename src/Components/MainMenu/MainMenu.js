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
 * It uses [NavLinks from react-router](https://reacttraining.com/react-router/web/api/NavLink)
 * as a way to automatically highlight the currently selected page.
 *
 * ---
 */

class MainMenu extends React.Component {
  static shouldBeOpen(location, item) {
    let isOpen = false;
    if (Array.isArray(item.items) && item.items.length > 0) {
      isOpen = location.pathname === item.href
      || item.items.some(sub => sub.href === location.pathname || `${sub.href}/` === location
        .pathname);
    }
    return isOpen;
  }

  renderItem(menu) {
    const {
      location,
    } = this.props;

    return menu.map((item, i) => (
      <MenuItem
        containsActiveItem={MainMenu.shouldBeOpen(location, item)}
        item={item}
        key={i}
      />
    ));
  }

  render() {
    const {
      className,
      menu,
      auxMenu,
      title,
    } = this.props;

    return (
      <nav className={classNames('main-menu', className)} aria-label="Main navigation">
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
            {this.renderItem(menu)}
          </ul>
        </div>
        {auxMenu && (
          <div className="main-menu-bottom">
            <ul className="main-menu-items">
              {this.renderItem(auxMenu)}
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
  /**
   * Automatically passed from [withRouter higher-order-component](https://reacttraining.com/react-router/web/api/withRouter).
   */
  location: PropTypes.object.isRequired,
  /**
   * Menu items for the upper portion of the menu
   */
  menu: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    }))
  })).isRequired,
  /**
   * Menu items for the lower portion of the menu (e.g. Profile, Support)
   */
  auxMenu: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    }))
  })),
  /**
   * Text that appears at the top of the menu
   */
  title: PropTypes.string,
  /**
   * start with everything expanded
   */
  startExpanded: PropTypes.bool,
};

export default withRouter(MainMenu);

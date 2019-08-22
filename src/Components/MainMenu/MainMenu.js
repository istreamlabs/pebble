import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter, matchPath } from 'react-router';

import Button from '../Button/Button';
import Text from '../Text/Text';
import MenuItem from './MenuItem/MenuItem';

import './MainMenu.scss';

const propTypes = {
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
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.string,
      aliases: PropTypes.arrayOf(PropTypes.string),
      exact: PropTypes.bool,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string,
          aliases: PropTypes.arrayOf(PropTypes.string),
          exact: PropTypes.bool,
        }),
      ),
    }),
  ).isRequired,
  /**
   * Display a button to toggle another menu
   */
  onShowTenantMenu: PropTypes.func,
  /**
   * Menu items for the lower portion of the menu (e.g. Profile, Support)
   */
  auxMenu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.string,
      aliases: PropTypes.arrayOf(PropTypes.string),
      exact: PropTypes.bool,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string,
          aliases: PropTypes.arrayOf(PropTypes.string),
          exact: PropTypes.bool,
        }),
      ),
    }),
  ),
  /**
   * Text that appears at the top of the menu
   */
  title: PropTypes.string,
  /**
   * On page load, expand items in the menu that contain child items
   */
  startMenuExpanded: PropTypes.bool,
  /**
   * On page load, expand items in the auxMenu that contain child items
   */
  startAuxMenuExpanded: PropTypes.bool,
};

const defaultProps = {
  startAuxMenuExpanded: false,
  startMenuExpanded: false,
  title: 'Portal',
};

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
    return (
      (!!item.href &&
        matchPath(location.pathname, {
          path: item.href,
          strict: true,
        }) !== null) ||
      (item.aliases || []).some(
        path => matchPath(location.pathname, { path }) !== null,
      ) ||
      (item.items || []).some(i => MainMenu.shouldBeOpen(location, i))
    );
  }

  renderHeader = () => {
    const { onShowTenantMenu, title } = this.props;
    return (
      <div className="main-menu-title pv-3 ph-5">
        <Text bold>{title}</Text>
        {onShowTenantMenu && (
          <Button
            plain
            onClick={onShowTenantMenu}
            icon="menu-dots"
            accessibilityLabel="show tenant menu"
          />
        )}
      </div>
    );
  };

  renderItem(menu, startExpanded) {
    const { location } = this.props;

    return menu.map((item, i) => (
      <MenuItem
        containsActiveItem={MainMenu.shouldBeOpen(location, item)}
        item={item}
        key={i}
        startExpanded={startExpanded}
      />
    ));
  }

  render() {
    const {
      className,
      menu,
      startMenuExpanded,
      auxMenu,
      startAuxMenuExpanded,
    } = this.props;

    return (
      <nav
        className={classNames('main-menu', className)}
        aria-label="Main navigation"
      >
        <div className="main-menu-top">
          {this.renderHeader()}
          <ul className="main-menu-items">
            {this.renderItem(menu, startMenuExpanded)}
          </ul>
        </div>
        {auxMenu && (
          <div className="main-menu-bottom">
            <ul className="main-menu-items">
              {this.renderItem(auxMenu, startAuxMenuExpanded)}
            </ul>
          </div>
        )}
      </nav>
    );
  }
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default withRouter(MainMenu);

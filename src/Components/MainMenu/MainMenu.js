import './MainMenu.scss';

import { matchPath, withRouter } from 'react-router';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import MenuItem from './Components/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const propTypes = {
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
   * Text that appears at the top of the menu
   */
  title: PropTypes.node,
  /**
   * On page load, expand items in the menu that contain child items
   */
  startMenuExpanded: PropTypes.bool,
  /**
   * On page load, expand items in the auxMenu that contain child items
   */
  startAuxMenuExpanded: PropTypes.bool,
  onShowTenantMenu: PropTypes.func,
};

const defaultProps = {
  startAuxMenuExpanded: false,
  startMenuExpanded: false,
  title: 'Portal',
};

const variants = {
  hideTenant: {
    x: 0,
  },
  showTenant: {
    x: '100%',
  },
};

/**
 * MainMenu provides a way for users to navigate from one site section to another.
 * It contains a top (`menu`) and bottom (`auxMenu`) set of menu items, with each
 * allowing a two-level structure.
 *
 * It also provides a way to navigate across "tenants" if supplied a list of available tenants.
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

  renderMenuHeader() {
    const { onShowTenantMenu, title } = this.props;

    return (
      <Block
        paddingVertical="3"
        paddingHorizontal="4"
        alignItems="center"
        justify="between"
        border="bottom"
        itemSpacing="3"
        color="neutral-700"
      >
        <div>{title}</div>
        {onShowTenantMenu && (
          <Button
            type="button"
            onClick={onShowTenantMenu}
            size="small"
            accessibilityLabel="view Tenants"
          >
            <Icon name="menu-dots" />
          </Button>
        )}
      </Block>
    );
  }

  render() {
    const {
      auxMenu,
      className,
      menu,
      startMenuExpanded,
      startAuxMenuExpanded,
    } = this.props;

    return (
      <div className="main-menu-container relative overflow-hidden">
        <motion.nav
          variants={variants}
          transition={{ ease: 'easeInOut' }}
          className={classNames('main-menu', className)}
          aria-label="Main navigation"
        >
          <div className="main-menu-top">
            {this.renderMenuHeader()}
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
        </motion.nav>
      </div>
    );
  }
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export { MainMenu as TestableMainMenu };

export default withRouter(MainMenu);

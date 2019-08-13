import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter, matchPath } from 'react-router';
import { motion } from 'framer-motion';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import MenuItem from './MenuItem/MenuItem';
import TenantMenu from './TenantMenu';

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
   * A list of tenants the user has access to
   */
  tenants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
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

const variants = {
  hideTenant: {
    x: 0,
  },
  showTenant: {
    x: 310,
  },
};

const closeTenantVariants = {
  hideTenant: {
    x: 33,
  },
  showTenant: {
    x: 0,
    transition: {
      delay: 0.25,
      ease: 'easeOut',
    },
  },
};

/**
 * MainMenu provides a way for users to navigate from one site section to another.
 * It contains a top (`menu`) and bottom (`auxMenu`) set of menu items, with each
 * allowing a two-level structure.
 *
 * It also contains a way to navigate across tenants if supplied a list of available tenants.
 *
 * It uses [NavLinks from react-router](https://reacttraining.com/react-router/web/api/NavLink)
 * as a way to automatically highlight the currently selected page.
 *
 * ---
 */

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTenantMenu: false,
    };
  }

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

  handleTenantToggle = () => {
    const { showTenantMenu } = this.state;
    this.setState({ showTenantMenu: !showTenantMenu });
  };

  render() {
    const {
      className,
      menu,
      startMenuExpanded,
      auxMenu,
      startAuxMenuExpanded,
      title,
      tenants,
    } = this.props;

    const { showTenantMenu } = this.state;

    return (
      <motion.div
        animate={showTenantMenu ? 'showTenant' : 'hideTenant'}
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        <motion.nav
          variants={variants}
          transition={{ ease: 'easeInOut' }}
          className={classNames('main-menu', className)}
          aria-label="Main navigation"
        >
          <div className="main-menu-top">
            {tenants && (
              <Block
                paddingVertical="3"
                paddingHorizontal="5"
                alignItems="center"
                justify="between"
                border="bottom"
              >
                <div>
                  <div>
                    <Text bold>{tenants.current.name}</Text>
                  </div>
                  <Text size="6">{tenants.current.id}</Text>
                </div>
                <Button
                  type="button"
                  onClick={this.handleTenantToggle}
                  size="small"
                >
                  <Icon name="menu-dots" />
                </Button>
              </Block>
            )}
            {!tenants && (
              <Block
                className="main-menu-title"
                paddingVertical="3"
                paddingHorizontal="5"
                alignItems="center"
              >
                <Text bold>{title}</Text>
              </Block>
            )}

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

        {tenants && (
          <Block
            height="100"
            width="100"
            background="neutral-800"
            direction="column"
            className="absolute"
            style={{
              top: 0,
              left: 0,
              zIndex: 0,
              boxShadow: 'inset -8px 0 4px -2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Block
              color="neutral-100"
              background="black-30"
              paddingVertical={[2, 3]}
              alignItems="center"
              className="relative"
              itemSpacing="2"
              justify="between"
            >
              <Heading
                className="pl-5"
                element="4"
                color="neutral-100"
                size="5"
                responsive={false}
              >
                Tenants
              </Heading>
              <motion.div variants={closeTenantVariants}>
                <Button
                  onClick={this.handleTenantToggle}
                  icon="arrow-small-left"
                  size="small"
                  accessibilityLabel="hide tenant menu"
                  className="tenant-menu-close-btn shadow-1"
                />
              </motion.div>
            </Block>
            <Block direction="column">
              <TenantMenu
                tenants={tenants}
                showTenantMenu={showTenantMenu}
              />
            </Block>
          </Block>
        )}
      </motion.div>
    );
  }
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default withRouter(MainMenu);

import './MainMenu.scss';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-router' or its correspon... Remove this comment to see the full error message
import { matchPath, withRouter } from 'react-router';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module './MenuItem/MenuItem' was resolved to '/Use... Remove this comment to see the full error message
import MenuItem from './MenuItem/MenuItem';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'prop-types' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';

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
   * Display a button to toggle another menu
   */
  onShowTenantMenu: PropTypes.func,
  /**
   * Content that appears in the header of the MainMenu on mobile only
   */
  mobileHeaderContent: PropTypes.node,
  /**
   * On page load, expand items in the auxMenu that contain child items
   */
  startAuxMenuExpanded: PropTypes.bool,
  /**
   * On page load, expand items in the menu that contain child items
   */
  startMenuExpanded: PropTypes.bool,
  /**
   * Text that appears at the top of the menu (usually the tenant name)
   */
  title: PropTypes.node,
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
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'location' implicitly has an 'any' type.
        matchPath(location.pathname, {
          path: item.href,
          strict: true,
        }) !== null) ||
      (item.aliases || []).some(
        path => matchPath(location.pathname, { path }) !== null,
      ) ||
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'path' implicitly has an 'any' type.
      (item.items || []).some(i => MainMenu.shouldBeOpen(location, i))
    );
  }

  renderHeader = () => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'i' implicitly has an 'any' type.
    const {
      mobileHeaderContent,
      onShowTenantMenu,
      title,
    } = this.props;
    return (
      <div className="main-menu-title">
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'MainMenu'... Remove this comment to see the full error message */}
        <div className="dn bb b-neutral-300 w-100 flex-m pv-3 ph-5 justify-between-m">
          {title}
          {onShowTenantMenu && (
            <Button
              plain
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              onClick={onShowTenantMenu}
              icon="menu-dots"
              accessibilityLabel="show organization menu"
              // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
              size="large"
            />
          )}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
        {mobileHeaderContent && (
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <div className="bg-neutral-100 b-neutral-300 bb dn-m text-right pv-3 ph-4 ph-5-ns">
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            {mobileHeaderContent}
          {/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'startExpanded' implicitly has an 'any' ... Remove this comment to see the full error message */}
          </div>
        )}
      </div>
    );
  };

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'MainMenu'... Remove this comment to see the full error message
  renderItem(menu, startExpanded) {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'i' implicitly has an 'any' type.
    const { location } = this.props;
    return menu.map((item, i) => (
      <MenuItem
        item={item}
        key={i}
        startExpanded={startExpanded}
        location={location}
      />
    ));
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'MainMenu'... Remove this comment to see the full error message
  }

  render() {
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const {
      className,
      menu,
      startMenuExpanded,
      auxMenu,
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      startAuxMenuExpanded,
    } = this.props;

    return (
      <nav
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        className={classNames('main-menu', className)}
        aria-label="Main navigation"
      >
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div className="main-menu-top">
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          {this.renderHeader()}
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <ul className="main-menu-items">
            {this.renderItem(menu, startMenuExpanded)}
          </ul>
        </div>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        {auxMenu && (
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <div className="main-menu-bottom">
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message */}
            <ul className="main-menu-items">
              {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'displayName' does not exist on type 'typ... Remove this comment to see the full error message */}
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
MainMenu.displayName = 'MainMenu';

export default withRouter(MainMenu);

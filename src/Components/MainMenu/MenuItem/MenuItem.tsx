import './MenuItem.scss';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-router-dom' or its corre... Remove this comment to see the full error message
import { NavLink, matchPath } from 'react-router-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import Block from '../../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Button/Button' was resolved to '/Use... Remove this comment to see the full error message
import Button from '../../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Icon from '../../Icon/Icon';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'prop-types' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';

const propTypes = {
  /**
   * A child item is the currently selected item
   */
  containsActiveItem: PropTypes.bool,
  /**
   * the menu that gets rendered
   */
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    aliases: PropTypes.arrayOf(PropTypes.string),
    exact: PropTypes.bool,
    activeHandler: PropTypes.func,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string,
        aliases: PropTypes.arrayOf(PropTypes.string),
        exact: PropTypes.bool,
        activeHandler: PropTypes.func,
        className: PropTypes.string,
      }),
    ),
  }).isRequired,
  /**
   * start with the item expanded
   */
  startExpanded: PropTypes.bool,
  /**
   * Current location, used for active item detection
   */
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.string,
  }),
};

const defaultProps = {
  containsActiveItem: false,
  startExpanded: false,
  location: {},
};

class MenuItem extends React.Component {
  static shouldBeOpen(location, item) {
    return (
      (item &&
        !!item.href &&
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'location' implicitly has an 'any' type.
        matchPath(location.pathname, {
          // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
          path: item.href,
          strict: true,
        }) !== null) ||
      ((item && item.aliases) || []).some(
        path => matchPath(location.pathname, { path }) !== null,
      ) ||
      ((item && item.items) || []).some(i =>
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'path' implicitly has an 'any' type.
        MenuItem.shouldBeOpen(location, i),
      )
    );
  }

  constructor(props) {
    super(props);
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'i' implicitly has an 'any' type.
    const { startExpanded, item, location } = this.props;
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
    const containsActiveItem = MenuItem.shouldBeOpen(location, item);

    if (item) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'MenuItem'... Remove this comment to see the full error message
      MenuItem.generateAndAddIsActiveHandler(item);
    }

    // TODO: move this to getDerivedStateFromProps
    this.state = {
      isOpen: !!containsActiveItem || startExpanded,
    };
  }

  static generateAndAddIsActiveHandler(item) {
    // only needed to support alias otherwise react router's default behavior works just fine.
    if (item.aliases && item.aliases.length) {
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
      item.activeHandler = (match, location) => {
        if (match) {
          return match;
        }
        return item.aliases.some(
          // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'match' implicitly has an 'any' type.
          path => matchPath(location.pathname, { path }) !== null,
        );
      };
    }
    (item.items || []).forEach(sub =>
      MenuItem.generateAndAddIsActiveHandler(sub),
    );
  }

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'path' implicitly has an 'any' type.
  componentWillReceiveProps(nextProps) {
    if (nextProps.containsActiveItem) {
      const { isOpen } = this.state;
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'sub' implicitly has an 'any' type.
      if (!isOpen) {
        this.setState({ isOpen: true });
      }
    }
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'nextProps' implicitly has an 'any' type... Remove this comment to see the full error message
    if (nextProps.item) {
      MenuItem.generateAndAddIsActiveHandler(nextProps.item);
    }
  }

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'MenuItem'... Remove this comment to see the full error message
  handleToggleOpen = () => {
    const { isOpen } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'setState' does not exist on type 'MenuIt... Remove this comment to see the full error message
    this.setState({ isOpen: !isOpen });
  };

  renderIconLabel = () => {
    const { item } = this.props;

    return (
      <div className="menu-item-label">
        {item.icon ? (
          <Icon name={item.icon} className="menu-item-icon" />
        ) : // @ts-expect-error ts-migrate(2339) FIXME: Property 'setState' does not exist on type 'MenuIt... Remove this comment to see the full error message
          null}
        {item.label}
      </div>
    );
  };

  renderToggleButton = () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'MenuItem'... Remove this comment to see the full error message
    const { isOpen } = this.state;
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const { item } = this.props;

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const accessibilityLabel = isOpen
      ? `close ${item.label} sub items`
      : // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        `show ${item.label} sub items`;

    return (
      <Button
        onClick={this.handleToggleOpen}
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'MenuItem'... Remove this comment to see the full error message
        className="menu-item-collapse-button"
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'MenuItem'... Remove this comment to see the full error message
        accessibilityLabel={accessibilityLabel}
      >
        <Icon
          name="arrow-small-down"
          accessibilityLabel={accessibilityLabel}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          className={classNames('menu-item-collapse', {
            opened: isOpen,
            closed: !isOpen,
          })}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        />
      </Button>
    );
  };

  renderSubItems = items => {
    const { location } = this.props;
    return items.map((subItem, i) => (
      <MenuItem key={i} item={subItem} location={location} />
    ));
  };

  render() {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'items' implicitly has an 'any' type.
    const { item } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'MenuItem'... Remove this comment to see the full error message
    const { isOpen } = this.state;
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'subItem' implicitly has an 'any' type.
    const hasSubItems = !!(item.items && item.items.length);
    return (
      <li className="menu-item-container">
        <div
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'MenuItem'... Remove this comment to see the full error message
          className={classNames('menu-item-content', item.className)}
        >
          {item.href ? (
            <NavLink
              // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
              id={`MenuItem-${item.label}`}
              // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
              exact={item.exact}
              to={item.href}
              className="menu-item"
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              aria-haspopup={hasSubItems}
              aria-expanded={isOpen}
              activeClassName="active"
              isActive={item.activeHandler}
            >
              {this.renderIconLabel()}
            </NavLink>
          ) : Array.isArray(item.items) && item.items.length > 0 ? (
            // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
              id={`MenuItem-${item.label}`}
              type="button"
              className="menu-item"
              aria-haspopup={hasSubItems}
              aria-expanded={isOpen}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              onClick={this.handleToggleOpen}
            >
              {this.renderIconLabel()}
              <Icon
                name="arrow-small-down"
                accessibilityLabel={isOpen ? 'opened' : 'closed'}
                // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                className={classNames(
                  'menu-item-collapse',
                  'neutral-500',
                  {
                    opened: isOpen,
                    closed: !isOpen,
                  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                  },
                )}
              // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
              />
            </button>
          ) : (
            <Block
              flex
              padding="3 6"
              textSize="6"
              className="neutral-500"
            >
              {item.label}
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </Block>
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          )}
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message */}
          {hasSubItems && item.href && this.renderToggleButton()}
        </div>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'displayName' does not exist on type 'typ... Remove this comment to see the full error message */}
        {hasSubItems && (
          <ul
            role="menu"
            aria-labelledby={`MenuItem-${item.label}`}
            className={classNames('sub-menu-items', {
              opened: isOpen,
              closed: !isOpen,
            })}
          >
            {this.renderSubItems(item.items)}
          </ul>
        )}
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.displayName = 'MenuItem';

export default MenuItem;

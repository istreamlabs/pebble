import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './MainMenu.scss';

class MainMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      selectedIndex,
    } = this.props;

    this.setState({
      activeIndex: selectedIndex
    });
  }

  handleClick(key) {
    const {
      activeIndex
    } = this.state;

    this.setState({
      activeIndex: key === activeIndex ? null : key
    });
  }

  render() {
    const {
      selectedIndex,
      className,
      items,
    } = this.props;

    const {
      activeIndex
    } = this.state;

    const classes = classNames('main-menu', className);

    return (
      <nav className={classes}>
        <div className="main-menu-top">
          <ul className="main-menu-items">
            { items.items.map((navItems, key) => {
              const itemClasses = classNames('main-menu-item-container', {
                selected: key === selectedIndex,
                active: key === activeIndex
              });

              return (
                <li className={itemClasses}>
                  {navItems.subItems && navItems.subItems.length ? (
                    <>
                      <button type="button" className="main-menu-item" onClick={() => this.handleClick(key)}>
                        <div>{navItems.label}</div>
                        <div className="main-menu-item-collapse">{key === selectedIndex || key === activeIndex ? 'open' : 'closed'}</div>
                      </button>
                      <ul className="sub-menu-items">
                        {
                          navItems.subItems.map(subItem => (
                            <li><a href={subItem.href} className="sub-menu-item">{subItem.label}</a></li>
                          ))
                        }
                      </ul>
                    </>
                  ) : (
                    <a href="/#" className="main-menu-item">
                      <div>{navItems.label}</div>
                    </a>
                  )}
                </li>
              );
            })
            }
          </ul>
        </div>
        <div className="main-menu-bottom">
          <ul className="main-menu-items">
            <li>
              <a href="/#" className="main-menu-footer-item">Support</a>
            </li>
            <li>
              <a href="/#" className="main-menu-footer-item">Trent Anderson</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

MainMenu.defaultProps = {
  selectedIndex: 1, // index of the selected top level item
  items: {
    items: [
      {
        label: 'Dashboard',
        href: '/',
      },
      {
        label: 'Content',
        subItems: [
          {
            label: 'Channels',
            href: '/content/channels',
          },
          {
            label: 'Live',
            href: '/content/live',
          },
          {
            label: 'Schedule',
            href: '/content/schedule',
          },
          {
            label: 'VOD',
            href: '/content/vod',
          },
        ]
      },
      {
        label: 'Store',
        subItems: [
          {
            label: 'Products',
            href: '/billing/products',
          },
          {
            label: 'Billing Plans',
            href: '/billing/plans',
          },
          {
            label: 'Asset Packages',
            href: '/billing/packages',
          },
        ]
      },
      {
        label: 'Sports',
        subItems: [
          {
            label: 'Schedule',
            href: '/sport/schedule',
          },
          {
            label: 'Leagues',
            href: '/sport/leagues',
          },
          {
            label: 'Teams',
            href: '/sport/teams',
          },
          {
            label: 'Players',
            href: '/sport/players',
          },
        ]
      },
      {
        label: 'Promotion',
      },
      {
        label: 'Users',
        href: '/users',
      },
      {
        label: 'Settings',
        subItems: [
          {
            label: 'General',
            href: '/settings',
          },
          {
            label: 'Accounts',
            href: '/settings/accounts',
          },
          {
            label: 'Roles',
            href: '/settings/roles',
          },
          {
            label: 'Regions',
            href: '/settings/regions',
          },
          {
            label: 'Custom Attributes',
            href: '/settings/custom-attributes',
          },
        ]
      },
    ]
  }
};

MainMenu.propTypes = {
  selectedIndex: PropTypes.number,
  /**
   * Additional ClassNames to add to button group
   */
  className: PropTypes.string,
  /**
   * Takes up the full width of its parent container
   */
  items: PropTypes.any,
};

export default MainMenu;

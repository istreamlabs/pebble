import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MainMenuItem from './MainMenuItem/MainMenuItem';

import './MainMenu.scss';

// TO DO
// 1. highlight a submenu item and show that section expanded
// 2. more tests
// 3. should we allow n number of menus to be expanded?

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  componentDidMount() {
    const {
      selectedIndex,
    } = this.props;

    this.setState({
      activeIndex: selectedIndex
    });
  }

  handleClick = (key) => {
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
            { items.items.map((navItems, i) => (
              <MainMenuItem
                item={navItems}
                isActive={i === activeIndex}
                isSelected={i === selectedIndex}
                onClick={() => this.handleClick(i)}
                key={`${navItems.label}-${i}`}
              />
            ))}
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
  selectedIndex: 0, // index of the selected top level item
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
        subItems: [
          {
            label: 'Pages',
            href: '/promotion/pages',
          },
          {
            label: 'Banners',
            href: '/promotion/banners',
          },
          {
            label: 'Collections',
            href: '/promotion/collections',
          },
        ]
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
  items: PropTypes.object.isRequired,
};

export default MainMenu;

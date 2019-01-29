import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './MainMenu.scss';

const MainMenu = (
  {
    className,
    items,
  }
) => {
  const classes = classNames('main-menu', className);

  return (
    <nav className={classes}>
      <div className="main-menu-top">
        <ul className="main-menu-items">
          { items.items.map(navItems => (
            // apply .active here if it's active
            <li className="main-menu-item-container">
              {navItems.subItems && navItems.subItems.length ? (
                <>
                  <button type="button" className="main-menu-item">
                    <div>{navItems.label}</div>
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
          ))}
        </ul>
      </div>
      <div>
        <ul className="main-menu-items">
          <li>Support</li>
          <li>Trent Anderson</li>
        </ul>
      </div>
    </nav>
  );
};

MainMenu.defaultProps = {
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
        // subItems: [
        //   {
        //     label: 'Products',
        //     href: '/billing/products',
        //   },
        //   {
        //     label: 'Billing Plans',
        //     href: '/billing/plans',
        //   },
        //   {
        //     label: 'Asset Packages',
        //     href: '/billing/packages',
        //   },
        // ]
      },
      {
        label: 'Sports',
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
      },
    ]
  }
};

MainMenu.propTypes = {
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

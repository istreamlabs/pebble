import { mount, shallow } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';
import MainMenu from './MainMenu';
import MenuItem from './MenuItem/MenuItem';
import React from 'react';

const mockMenuData = [
  {
    label: 'Dashboard',
    href: '/',
    icon: 'dashboard',
  },
  {
    label: 'Content',
    icon: 'player',
    items: [
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
    ],
  },
];

const mockNestedData = [
  {
    label: 'Level 1',
    icon: 'player',
    items: [
      {
        label: 'Level 2',
        href: '/content/channels',
        items: [
          {
            label: 'Level 3',
            href: '/content/live',
            items: [
              {
                label: 'Level 4',
                href: '/content/live',
              },
            ],
          },
        ],
      },
    ],
  },
];

describe('shouldBeOpen', () => {
  it('defaults to false', () => {
    const result = MainMenu.shouldBeOpen({}, {});
    expect(result).toBeFalsy();
  });
  it('returns false if an item in the items array has href not equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/' },
      { items: [{ href: '/different' }] },
    );
    expect(result).toBe(false);
  });
  it('returns true if an item has href equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/a' },
      { href: '/a', items: [{ href: '/page' }] },
    );
    expect(result).toBe(true);
  });
  it('returns true if an item in the items array has href equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/page' },
      { href: '', items: [{ href: '/page' }] },
    );
    expect(result).toBe(true);
  });
  it('returns true if an item has alias equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/a' },
      { aliases: ['/a'], items: [{ href: '/page' }] },
    );
    expect(result).toBe(true);
  });
  it('returns true if an item in the items array has alias equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/page' },
      { href: '', items: [{ aliases: ['/page'] }] },
    );
    expect(result).toBe(true);
  });
});

describe('MainMenu', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<MainMenu menu={mockMenuData} />);
    }).not.toThrow();
  });

  it('renders the correct number of menu items', () => {
    const menu = mount(
      <BrowserRouter>
        <MainMenu menu={mockMenuData} />
      </BrowserRouter>,
    );
    expect(menu.find(MenuItem)).toHaveLength(6);
    const nestedMenu = mount(
      <BrowserRouter>
        <MainMenu menu={mockNestedData} />
      </BrowserRouter>,
    );
    expect(nestedMenu.find(MenuItem)).toHaveLength(4);
  });

  it('renders the auxMenu items', () => {
    const menu = mount(
      <BrowserRouter>
        <MainMenu menu={mockMenuData} auxMenu={mockMenuData} />
      </BrowserRouter>,
    );
    expect(menu.find(MenuItem)).toHaveLength(12);
  });

  it('generates a unique key for each item from the item.id', () => {
    const menu = shallow(<MainMenu menu={mockMenuData} />);
    menu.find('MenuItem').forEach((item, index) => {
      const expectedKey = `${mockMenuData[index].id}`;
      expect(item.key()).toBe(expectedKey);
    });
  });

  it('renders a menu button when onShowTenantMenu is set', () => {
    const mock = jest.fn();
    const menu = mount(
      <BrowserRouter>
        <MainMenu menu={mockMenuData} onShowTenantMenu={mock} />
      </BrowserRouter>,
    );
    expect(
      menu.find({ accessibilityLabel: 'show organization menu' }),
    ).toHaveLength(1);
  });

  it('renders mobileHeaderContent if defined', () => {
    const menu = mount(
      <BrowserRouter>
        <MainMenu
          menu={mockMenuData}
          mobileHeaderContent={<div className="testHeader">test</div>}
        />
      </BrowserRouter>,
    );
    expect(menu.find('.testHeader')).toHaveLength(1);
  });

  it('sets isNested correctly', () => {
    const wrapper = mount(
      <BrowserRouter>
        <MainMenu menu={mockMenuData} />
      </BrowserRouter>,
    );
    expect(wrapper.find('.nested')).toHaveLength(0);
    const nested = mount(
      <BrowserRouter>
        <MainMenu menu={mockNestedData} />
      </BrowserRouter>,
    );
    expect(nested.find('.nested')).toHaveLength(2);
  });
});

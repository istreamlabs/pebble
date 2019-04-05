import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import MainMenu from './MainMenu';

import MenuItem from './MenuItem/MenuItem';

const mockMenuData = [
  {
    id: '1',
    label: 'Dashboard',
    description: 'The main page of the site',
    href: '/',
    icon: 'dashboard'
  },
  {
    id: '2',
    label: 'Content',
    description: '',
    icon: 'player',
    items: [
      {
        id: '2a',
        label: 'Channels',
        description: '',
        href: '/content/channels',
        icon: '',
      },
      {
        id: '2b',
        label: 'Live',
        description: '',
        href: '/content/live',
        icon: '',
      },
      {
        id: '2c',
        label: 'Schedule',
        description: '',
        href: '/content/schedule',
        icon: '',
      },
      {
        id: '2d',
        label: 'VOD',
        description: '',
        href: '/content/vod',
        icon: '',
      },
    ]
  }
];

describe('shouldBeOpen', () => {
  it('defaults to false', () => {
    const result = MainMenu.shouldBeOpen({}, {});
    expect(result).toBeFalsy();
  });
  it('returns false if an item in the items array has href not equal to current path ', () => {
    const result = MainMenu.shouldBeOpen({ pathname: '/' }, { items: [{ href: '/different' }] });
    expect(result).toBe(false);
  });
  it('returns true if an item in the items array has href equal to current path ', () => {
    const result = MainMenu.shouldBeOpen({ pathname: '/' }, { items: [{ href: '/' }] });
    expect(result).toBe(true);
  });
  it('returns true if an item in the items array has href equal to current path ', () => {
    const result = MainMenu.shouldBeOpen({ pathname: '/page' }, { items: [{ href: '/page' }] });
    expect(result).toBe(true);
  });
  it('returns true if an item in the items array has href equal to current path with a trailing slash', () => {
    const result = MainMenu.shouldBeOpen({ pathname: '/page/' }, { items: [{ href: '/page' }] });
    expect(result).toBe(true);
  });
});

describe('MainMenu', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<MainMenu menu={mockMenuData} />); }).not.toThrow();
  });

  it('renders the correct number of menuitems', () => {
    const menu = mount(<BrowserRouter><MainMenu menu={mockMenuData} /></BrowserRouter>);
    expect(menu.find(MenuItem)).toHaveLength(2);
  });

  it('renders the auxMenu items', () => {
    const menu = mount(<BrowserRouter><MainMenu menu={mockMenuData} auxMenu={mockMenuData} /></BrowserRouter>);
    expect(menu.find(MenuItem)).toHaveLength(4);
  });

  it('generates a unique key for each item from the item.id', () => {
    const menu = shallow(<MainMenu menu={mockMenuData} />);
    menu.find('MenuItem').forEach((item, index) => {
      const expectedKey = `${mockMenuData[index].id}`;
      expect(item.key()).toBe(expectedKey);
    });
  });
});

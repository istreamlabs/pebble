import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from './MainMenu';

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

describe('MainMenu', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<MainMenu menu={mockMenuData} />); }).not.toThrow();
  });

  it('passes in class name', () => {
    const wrapper = shallow(<MainMenu menu={mockMenuData} className="my-class" />);
    expect(wrapper.find('nav').prop('className')).toEqual('main-menu my-class');
  });

  it('if there are items in the nav, render them', () => {
    const menu = shallow(<MainMenu menu={mockMenuData} />);
    expect(menu.find('MenuItem').length).toEqual(2);
  });

  it('if there are items in the auxNav, render them', () => {
    const menu = shallow(<MainMenu menu={mockMenuData} auxMenu={mockMenuData} />);
    expect(menu.find('MenuItem').length).toEqual(4);
  });

  it('generates a unique key for each item from the item.id', () => {
    const menu = shallow(<MainMenu menu={mockMenuData} />);
    menu.find('MenuItem').forEach((item, index) => {
      const expectedKey = `${mockMenuData[index].id}`;
      expect(item.key()).toBe(expectedKey);
    });
  });
});

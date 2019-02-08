import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from './MainMenu';

const mockData = {
  items: [
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
    },
  ]
};

describe('MainMenu', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<MainMenu items={mockData} />); }).not.toThrow();
  });

  it('passes in class name', () => {
    const menu = shallow(<MainMenu items={mockData} className="my-class" />);
    expect(menu.html()).toContain('main-menu');
    expect(menu.html()).toContain('my-class');
  });

  it('if there are items in the nav, render them', () => {
    const menu = shallow(<MainMenu items={mockData} />);
    expect(menu.find('MainMenuItem').length).toEqual(2);
  });

  it('generates a unique key for each item from the label and index', () => {
    const menu = shallow(<MainMenu items={mockData} />);
    menu.find('MainMenuItem').forEach((item, index) => {
      const expectedKey = `${mockData.items[index].label}-${index}`;
      expect(item.key()).toBe(expectedKey);
    });
  });
});

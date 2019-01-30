import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from './MainMenu';

const mockData = {
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

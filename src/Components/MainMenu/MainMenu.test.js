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
    expect(() => { shallow(<MainMenu item={mockData} />); }).not.toThrow();
  });

  it('passes in class name', () => {
    const menu = shallow(<MainMenu item={mockData} className="my-class" />);
    expect(menu.html()).toContain('main-menu');
    expect(menu.html()).toContain('my-class');
  });
});

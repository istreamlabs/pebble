import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './MenuItem';

const mockData = {
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
};

describe('MenuItem', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<MenuItem item={mockData} />); }).not.toThrow();
  });

  it('generates a unique key for each item from the subItem label and index', () => {
    const item = shallow(<MenuItem item={mockData} />);
    item.find('.sub-menu-items li').forEach((item, index) => {
      const expectedKey = `${mockData.items[index].id}`;
      expect(item.key()).toBe(expectedKey);
    });
  });
});

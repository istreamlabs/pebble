import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './MenuItem';

const mockData = {
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
};

const mockDataNoSubItems = {
  label: 'Content'
};

describe('MenuItem', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<MenuItem item={mockData} />); }).not.toThrow();
  });

  it('generates a unique key for each item from the subItem label and index', () => {
    const item = shallow(<MenuItem item={mockData} />);
    item.find('.sub-menu-items li').forEach((item, index) => {
      const expectedKey = `subItem-${mockData.subItems[index].label}-${index}`;
      expect(item.key()).toBe(expectedKey);
    });
  });
});

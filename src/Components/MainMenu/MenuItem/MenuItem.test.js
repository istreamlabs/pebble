import React from 'react';
import { shallow } from 'enzyme';
import MainMenuItem from './MainMenuItem';

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

describe('MainMenuItem', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<MainMenuItem item={mockData} />); }).not.toThrow();
  });

  it('applies .active and .selected classes', () => {
    const item = shallow(<MainMenuItem item={mockData} isActive isSelected />);
    expect(item.html()).toContain('active');
    expect(item.html()).toContain('selected');
  });

  it('does not render a submenu if there are no submenu items', () => {
    const item = shallow(<MainMenuItem item={mockDataNoSubItems} />);
    expect(item.find('ul.sub-menu-items').exists()).toBeFalsy();
  });

  it('generates a unique key for each item from the subItem label and index', () => {
    const item = shallow(<MainMenuItem item={mockData} />);
    item.find('.sub-menu-items li').forEach((item, index) => {
      const expectedKey = `subItem-${mockData.subItems[index].label}-${index}`;
      expect(item.key()).toBe(expectedKey);
    });
  });
});

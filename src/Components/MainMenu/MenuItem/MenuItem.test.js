import React from 'react';
import { mount, shallow } from 'enzyme';
import MenuItem from './MenuItem';

const mockData = {
  id: '1',
  label: 'Content',
  description: '',
  icon: 'player',
  items: [
    {
      id: '1a',
      label: 'Channels',
      description: '',
      href: '/content/channels',
      icon: '',
    },
    {
      id: '1b',
      label: 'Live',
      description: '',
      href: '/content/live',
      icon: '',
    },
  ]
};

const noItems = {
  id: '2',
  label: 'Content',
  description: '',
  href: '/test',
};

const linkSubItems = {
  id: '1',
  label: 'Content',
  description: '',
  icon: 'player',
  href: '/test',
  items: [
    {
      id: '1a',
      label: 'Channels',
      description: '',
      href: '/content/channels',
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

  it('opens when toggled', () => {
    const item = shallow(<MenuItem item={mockData} />);
    item.find('button').simulate('click');
    expect(item.find('li.menu-item-container').prop('className')).toContain('open');
  });

  it('opens the submenu if a subitem is active and sets the subitem to active', () => {
    const item = shallow(<MenuItem item={linkSubItems} activeItem="1a" />);
    expect(item.find('li.menu-item-container').prop('className')).toContain('open');
    expect(item.find('a.sub-menu-item').prop('className')).toContain('active');
  });

  it('opens the submenu if the Item is active', () => {
    const item = shallow(<MenuItem item={linkSubItems} activeItem="1" />);
    expect(item.find('li.menu-item-container').prop('className')).toContain('open active');
  });

  it('renders as <a> when href is set', () => {
    const item = shallow(<MenuItem item={linkSubItems} />);
    expect(item.find('a.menu-item').prop('href')).toContain('/test');
  });

  it('sets isOpen to false when there are no sub-items', () => {
    const item = shallow(<MenuItem item={noItems} />);
    expect(item.state().isOpen).toEqual(false);
  });

  it('renders an separate toggle button when a link with sub items is passed', () => {
    const item = mount(<MenuItem item={linkSubItems} />);
    expect(item.find('button').prop('className')).toContain('menu-item-collapse-button');
  });

  it('sets the accessibilityLabel', () => {
    const item = mount(<MenuItem item={linkSubItems} />);
    expect(item.find('button').prop('aria-label')).toBe('show Content sub items');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import MenuItem from './MenuItem';
import Button from '../../Button/Button';

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
      icon: '',
      href: '/test',
    },
    {
      id: '1b',
      label: 'Live',
      description: '',
      icon: '',
      href: '/test',
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
    expect(item.find('NavLink.sub-menu-item').prop('className')).toContain('active');
  });

  it('opens the submenu if the Item is active', () => {
    const item = shallow(<MenuItem item={linkSubItems} activeItem="1" />);
    expect(item.find('li.menu-item-container').prop('className')).toContain('open active');
  });

  it('renders Link when href is set', () => {
    const item = shallow(<MenuItem item={linkSubItems} activeItem="1a" />);
    expect(item.find(NavLink).at(0).prop('to')).toContain('/test');
  });

  it('sets isOpen to false when there are no sub-items', () => {
    const item = shallow(<MenuItem item={noItems} />);
    expect(item.state().isOpen).toEqual(false);
  });

  it('renders an separate toggle button when a link with sub items is passed', () => {
    const item = shallow(<MenuItem item={linkSubItems} />);
    expect(item.find(Button).prop('className')).toContain('menu-item-collapse-button');
  });

  it('sets the accessibilityLabel', () => {
    const item = shallow(<MenuItem item={linkSubItems} />);
    expect(item.find('Button.menu-item-collapse-button').prop('accessibilityLabel')).toBe('show Content sub items');
  });
});

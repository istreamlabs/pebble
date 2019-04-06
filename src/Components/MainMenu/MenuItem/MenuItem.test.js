import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from './MenuItem';
import Block from '../../Block/Block';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

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
    }
  ]
};

const textOnly = {
  id: 'version',
  label: 'v1234'
}

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

  it('sets isOpen to false when there are no sub-items', () => {
    const item = shallow(<MenuItem item={noItems} />);
    expect(item.state().isOpen).toEqual(false);
  });

  it('displays item as text if there are no sub-items and no href', () => {
    const item = shallow(<MenuItem item={textOnly} />);
    expect(item.find(Block).prop('textSize')).toHaveLength(1);
  });

  describe('componentWillReceiveProps', () => {
    let instance;
    let spy;

    beforeEach(() => {
      instance = new MenuItem({});
      spy = jest.spyOn(instance, 'setState').mockImplementation(() => {});
    });

    it('does nothing when it does not contain an active item', () => {
      instance.componentWillReceiveProps({
        containsActiveItem: false
      });
      expect(spy).not.toHaveBeenCalled();
    });

    it('sets it to open when it contains an active item', () => {
      instance.componentWillReceiveProps({
        containsActiveItem: true
      });
      expect(spy).toHaveBeenCalledWith({ isOpen: true });
    });

    it('does not call if it is already open', () => {
      instance = new MenuItem({
        containsActiveItem: true
      });
      instance.componentWillReceiveProps({
        containsActiveItem: true
      });
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('handleToggleOpen', () => {
    it('', () => {
      const instance = new MenuItem({});
      const firstState = instance.state.isOpen;
      const spy = jest.spyOn(instance, 'setState').mockImplementation(() => {});
      instance.handleToggleOpen();
      expect(spy).toHaveBeenCalledWith({
        isOpen: !firstState
      });
    });
  });

  describe('renderToggleButton', () => {
    it('renders a separate toggle button when a link with sub items is passed', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      expect(item.find(Button).prop('className')).toContain('menu-item-collapse-button');
    });
    it('sets the correct toggle button accessibility label', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      expect(item.find(Icon).at(1).prop('accessibilityLabel')).toContain('show Content sub items');
    });
    it('sets the correct toggle button accessibility label', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      item.setState({ isOpen: true });
      expect(item.find(Icon).at(1).prop('accessibilityLabel')).toBe('close Content sub items');
    });
    it('sets the correct button item accessibility label', () => {
      const item = shallow(<MenuItem item={mockData} />);
      expect(item.find(Icon).at(1).prop('accessibilityLabel')).toContain('closed');
    });
    it('sets the correct button item accessibility label', () => {
      const item = shallow(<MenuItem item={mockData} />);
      item.setState({ isOpen: true });
      expect(item.find(Icon).at(1).prop('accessibilityLabel')).toBe('opened');
    });
  });
});

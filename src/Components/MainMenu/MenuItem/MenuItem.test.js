import Block from '../../Block/Block';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import MenuItem from './MenuItem';
import React from 'react';
import { shallow } from 'enzyme';

const mockData = {
  label: 'Content',
  icon: 'player',
  items: [
    {
      label: 'Channels',
      href: '/test',
    },
    {
      label: 'Live',
      href: '/test',
      exact: true,
    },
  ],
};

const mockNestedData = {
  label: 'Level 1',
  icon: 'player',
  items: [
    {
      label: 'Level 2',
      href: '/content/channels',
      items: [
        {
          label: 'Level 3',
          href: '/content/live',
          items: [
            {
              label: 'Level 4',
              href: '/content/live',
            },
          ],
        },
      ],
    },
  ],
};

const textOnly = {
  id: 'version',
  label: 'v1234',
};

const noItems = {
  label: 'Content',
  href: '/test',
};

const linkSubItems = {
  label: 'Content',
  icon: 'player',
  href: '/test',
  exact: true,
  items: [
    {
      label: 'Channels',
      href: '/content/channels',
    },
  ],
};

describe('MenuItem', () => {
  describe('shouldBeOpen', () => {
    it('defaults to false', () => {
      const result = MenuItem.shouldBeOpen({}, {});
      expect(result).toBeFalsy();
    });
    it('returns false if an item in the items array has href not equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/' },
        { items: [{ href: '/different' }] },
      );
      expect(result).toBe(false);
    });
    it('returns true if an item has href equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/a' },
        { href: '/a', items: [{ href: '/page' }] },
      );
      expect(result).toBe(true);
    });
    it('returns true if an item in the items array has href equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/page' },
        { href: '', items: [{ href: '/page' }] },
      );
      expect(result).toBe(true);
    });
    it('returns true if an item has alias equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/a' },
        { aliases: ['/a'], items: [{ href: '/page' }] },
      );
      expect(result).toBe(true);
    });
    it('returns true if an item in the items array has alias equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/page' },
        { href: '', items: [{ aliases: ['/page'] }] },
      );
      expect(result).toBe(true);
    });
  });

  describe('ctor', () => {
    let spy;

    beforeEach(() => {
      spy = jest
        .spyOn(MenuItem, 'generateAndAddIsActiveHandler')
        .mockImplementation(() => {});
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('calls generateAndAddIsActiveHandler if item is not empty', () => {
      new MenuItem({ item: {} }); // eslint-disable-line no-new
      expect(spy).toBeCalled();
    });
  });

  describe('generateAndAddIsActiveHandler', () => {
    it('if no alias it does nothing', () => {
      const item = {
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
      };
      MenuItem.generateAndAddIsActiveHandler(item);
      expect(item.activeHandler).toBeUndefined();
    });
    it('if there are aliases it adds activeHandler to item', () => {
      const item = {
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
        aliases: ['/foo'],
      };
      MenuItem.generateAndAddIsActiveHandler(item);
      expect(item.activeHandler).toBeDefined();
    });
    it('adds items to sub items', () => {
      const item = {
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
        aliases: ['/baz'],
        items: [
          {
            label: 'bar',
            href: '/bar',
          },
          {
            label: 'foo',
            href: '/foo',
            aliases: ['/buz'],
          },
        ],
      };
      MenuItem.generateAndAddIsActiveHandler(item);
      expect(item.activeHandler).toBeDefined();
      expect(item.items[0].activeHandler).toBeUndefined();
      expect(item.items[1].activeHandler).toBeDefined();
    });

    it('creates a useful handler that matches', () => {
      const item = {
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
        aliases: ['/foo'],
      };
      MenuItem.generateAndAddIsActiveHandler(item);
      expect(
        item.activeHandler(false, { pathname: '/bar' }),
      ).toBeFalsy();
      expect(
        item.activeHandler(false, { pathname: '/foo' }),
      ).toBeTruthy();
    });

    it('will use match if provided', () => {
      const item = {
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
        aliases: ['/foo'],
      };
      MenuItem.generateAndAddIsActiveHandler(item);
      expect(
        item.activeHandler(true, { pathname: '/bar' }),
      ).toBeTruthy();
    });
  });

  it('renders without crashing', () => {
    expect(() => {
      shallow(<MenuItem item={mockData} />);
    }).not.toThrow();
  });
  it('renders exact if present', () => {
    const item = shallow(<MenuItem item={linkSubItems} />);
    expect(item.find('.menu-item').prop('exact')).toBe(true);
  });
  it('generates a unique key for each item from the subItem label and index and renders correct number of subItems', () => {
    const item = shallow(<MenuItem item={mockData} />);
    item.find('.sub-menu-items li').forEach((item, index) => {
      const expectedKey = `${index}`;
      expect(item.key()).toBe(expectedKey);
    });
    expect(item.find('MenuItem').length).toBe(2);
    expect(
      item.find('MenuItem').at(1).dive().find('NavLink').props()
        .exact,
    ).toBe(true);
    expect(
      item.find('MenuItem').at(0).dive().find('NavLink').props()
        .exact,
    ).toBeUndefined;
  });

  it('add className to top level if defined', () => {
    const menu = {
      label: 'Content',
      href: '/test',
      className: 'fs-block',
    };
    const item = shallow(<MenuItem item={menu} />);
    expect(item.find('.fs-block').length).toBe(1);
  });

  it('add className to sub items if defined', () => {
    const menu = {
      label: 'Content',
      href: '/test',
      className: 'fs-block',
      items: [
        {
          label: 'Content2',
          href: '/test2',
          className: 'fs-block',
        },
      ],
    };
    const item = shallow(<MenuItem item={menu} />);
    expect(item.find('.fs-block').length).toBe(1);
    expect(
      item.find('MenuItem').dive().find('.fs-block').length,
    ).toBe(1);
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
    let stateSpy;
    let genSpy;

    beforeEach(() => {
      instance = new MenuItem({});
      stateSpy = jest
        .spyOn(instance, 'setState')
        .mockImplementation(() => {});
      genSpy = jest
        .spyOn(MenuItem, 'generateAndAddIsActiveHandler')
        .mockImplementation(() => {});
    });

    it('does nothing when it does not contain an active item', () => {
      instance.componentWillReceiveProps({
        containsActiveItem: false,
      });
      expect(stateSpy).not.toHaveBeenCalled();
    });

    it('sets it to open when it contains an active item', () => {
      instance.componentWillReceiveProps({
        containsActiveItem: true,
      });
      expect(stateSpy).toHaveBeenCalledWith({ isOpen: true });
    });

    it('does not call if it is already open', () => {
      instance = new MenuItem({
        containsActiveItem: true,
      });
      instance.componentWillReceiveProps({
        containsActiveItem: true,
      });
      expect(stateSpy).not.toHaveBeenCalled();
    });

    it('does not call generateAndAddIsActiveHandler if there is no item', () => {
      instance = new MenuItem({
        containsActiveItem: true,
      });
      instance.componentWillReceiveProps({
        containsActiveItem: true,
      });
      expect(genSpy).not.toHaveBeenCalled();
    });

    it('calls generateAndAddIsActiveHandler if there is an item', () => {
      const item = {
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
        aliases: ['/foo'],
      };
      instance = new MenuItem({
        containsActiveItem: true,
      });
      instance.state.isOpen = true;
      instance.componentWillReceiveProps({
        containsActiveItem: true,
        item,
      });
      expect(genSpy).toHaveBeenCalledWith(item);
      expect(stateSpy).not.toHaveBeenCalled();
    });
  });

  describe('handleToggleOpen', () => {
    it('', () => {
      const instance = new MenuItem({});
      const firstState = instance.state.isOpen;
      const spy = jest
        .spyOn(instance, 'setState')
        .mockImplementation(() => {});
      instance.handleToggleOpen();
      expect(spy).toHaveBeenCalledWith({
        isOpen: !firstState,
      });
    });
  });

  describe('renderToggleButton', () => {
    it('renders a separate toggle button when a link with sub items is passed', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      expect(item.find(Button).prop('className')).toContain(
        'menu-item-collapse-button',
      );
    });
    it('sets the correct toggle button accessibility label', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      expect(
        item.find(Icon).at(1).prop('accessibilityLabel'),
      ).toContain('show Content sub items');
    });
    it('sets the correct toggle button accessibility label', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      item.setState({ isOpen: true });
      expect(item.find(Icon).at(1).prop('accessibilityLabel')).toBe(
        'close Content sub items',
      );
    });
    it('sets the correct button item accessibility label', () => {
      const item = shallow(<MenuItem item={mockData} />);
      expect(
        item.find(Icon).at(1).prop('accessibilityLabel'),
      ).toContain('closed');
    });
    it('sets the correct button item accessibility label', () => {
      const item = shallow(<MenuItem item={mockData} />);
      item.setState({ isOpen: true });
      expect(item.find(Icon).at(1).prop('accessibilityLabel')).toBe(
        'opened',
      );
    });
  });

  describe('renderSubItems', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <MenuItem item={mockNestedData} location={{}} />,
      );
      expect(
        wrapper.find('MenuItem').dive().find('li').prop('className'),
      ).toEqual('menu-item-container');
      expect(
        wrapper
          .find('MenuItem')
          .dive()
          .find('MenuItem')
          .dive()
          .find('li')
          .prop('className'),
      ).toEqual('menu-item-container');
      expect(
        wrapper
          .find('MenuItem')
          .dive()
          .find('MenuItem')
          .dive()
          .find('MenuItem')
          .dive()
          .find('li')
          .prop('className'),
      ).toEqual('menu-item-container');
    });
  });
});

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import Block from '../../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Button/Button' was resolved to '/Use... Remove this comment to see the full error message
import Button from '../../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Icon from '../../Icon/Icon';
// @ts-expect-error ts-migrate(6142) FIXME: Module './MenuItem' was resolved to '/Users/esjaas... Remove this comment to see the full error message
import MenuItem from './MenuItem';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    it('returns false if an item in the items array has href not equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/' },
        { items: [{ href: '/different' }] },
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      );
      expect(result).toBe(false);
    });
    it('returns true if an item has href equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/a' },
        { href: '/a', items: [{ href: '/page' }] },
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toBe(true);
    });
    it('returns true if an item in the items array has href equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/page' },
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        { href: '', items: [{ href: '/page' }] },
      );
      expect(result).toBe(true);
    });
    it('returns true if an item has alias equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/a' },
        { aliases: ['/a'], items: [{ href: '/page' }] },
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      );
      expect(result).toBe(true);
    });
    it('returns true if an item in the items array has alias equal to current path ', () => {
      const result = MenuItem.shouldBeOpen(
        { pathname: '/page' },
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    afterEach(() => {
      jest.restoreAllMocks();
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    });

    // @ts-expect-error ts-migrate(7034) FIXME: Variable 'spy' implicitly has type 'any' in some l... Remove this comment to see the full error message
    it('calls generateAndAddIsActiveHandler if item is not empty', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      new MenuItem({ item: {} }); // eslint-disable-line no-new
      expect(spy).toBeCalled();
    });
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterEach'.
  describe('generateAndAddIsActiveHandler', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    it('if no alias it does nothing', () => {
      const item = {
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
      };
      MenuItem.generateAndAddIsActiveHandler(item);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(item.activeHandler).toBeUndefined();
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('will use match if provided', () => {
      const item = {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    const item = shallow(<MenuItem item={linkSubItems} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(item.find('.menu-item').prop('exact')).toBe(true);
  });
  it('generates a unique key for each item from the subItem label and index and renders correct number of subItems', () => {
    const item = shallow(<MenuItem item={mockData} />);
    item.find('.sub-menu-items li').forEach((item, index) => {
      const expectedKey = `${index}`;
      expect(item.key()).toBe(expectedKey);
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(item.find('MenuItem').length).toBe(2);
    expect(
      item
        .find('MenuItem')
        .at(1)
        .dive()
        .find('NavLink')
        .props().exact,
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    ).toBe(true);
    expect(
      item
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        .find('MenuItem')
        .at(0)
        .dive()
        .find('NavLink')
        .props().exact,
    ).toBeUndefined;
  });

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  it('add className to top level if defined', () => {
    const menu = {
      label: 'Content',
      href: '/test',
      className: 'fs-block',
    };
    const item = shallow(<MenuItem item={menu} />);
    expect(item.find('.fs-block').length).toBe(1);
  });

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  it('add className to sub items if defined', () => {
    const menu = {
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
      label: 'Content',
      href: '/test',
      className: 'fs-block',
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      items: [
        {
          label: 'Content2',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          href: '/test2',
          className: 'fs-block',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        },
      ],
    };
    const item = shallow(<MenuItem item={menu} />);
    expect(item.find('.fs-block').length).toBe(1);
    expect(
      item
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        .find('MenuItem')
        .dive()
        .find('.fs-block').length,
    ).toBe(1);
  });

  it('sets isOpen to false when there are no sub-items', () => {
    const item = shallow(<MenuItem item={noItems} />);
    expect(item.state().isOpen).toEqual(false);
  });

  it('displays item as text if there are no sub-items and no href', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const item = shallow(<MenuItem item={textOnly} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    it('does nothing when it does not contain an active item', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      instance.componentWillReceiveProps({
        containsActiveItem: false,
      });
      expect(stateSpy).not.toHaveBeenCalled();
    });

    it('sets it to open when it contains an active item', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      instance.componentWillReceiveProps({
        containsActiveItem: true,
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      });
      expect(stateSpy).toHaveBeenCalledWith({ isOpen: true });
    });

    it('does not call if it is already open', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      instance = new MenuItem({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        containsActiveItem: true,
      });
      instance.componentWillReceiveProps({
        // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
        containsActiveItem: true,
      });
      // @ts-expect-error ts-migrate(7034) FIXME: Variable 'instance' implicitly has type 'any' in s... Remove this comment to see the full error message
      expect(stateSpy).not.toHaveBeenCalled();
    // @ts-expect-error ts-migrate(7034) FIXME: Variable 'stateSpy' implicitly has type 'any' in s... Remove this comment to see the full error message
    });

    // @ts-expect-error ts-migrate(7034) FIXME: Variable 'genSpy' implicitly has type 'any' in som... Remove this comment to see the full error message
    it('does not call generateAndAddIsActiveHandler if there is no item', () => {
      instance = new MenuItem({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        containsActiveItem: true,
      });
      instance.componentWillReceiveProps({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        containsActiveItem: true,
      });
      expect(genSpy).not.toHaveBeenCalled();
    });

    it('calls generateAndAddIsActiveHandler if there is an item', () => {
      const item = {
        label: 'Dashboard',
        href: '/',
        // @ts-expect-error ts-migrate(7005) FIXME: Variable 'instance' implicitly has an 'any' type.
        icon: 'dashboard',
        aliases: ['/foo'],
      };
      instance = new MenuItem({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        containsActiveItem: true,
      });
      instance.state.isOpen = true;
      instance.componentWillReceiveProps({
        containsActiveItem: true,
        // @ts-expect-error ts-migrate(7005) FIXME: Variable 'instance' implicitly has an 'any' type.
        item,
      });
      expect(genSpy).toHaveBeenCalledWith(item);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(spy).toHaveBeenCalledWith({
        // @ts-expect-error ts-migrate(7005) FIXME: Variable 'stateSpy' implicitly has an 'any' type.
        isOpen: !firstState,
      });
    });
  });

  describe('renderToggleButton', () => {
    it('renders a separate toggle button when a link with sub items is passed', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      expect(item.find(Button).prop('className')).toContain(
        'menu-item-collapse-button',
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      );
    // @ts-expect-error ts-migrate(7005) FIXME: Variable 'genSpy' implicitly has an 'any' type.
    });
    it('sets the correct toggle button accessibility label', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      expect(
        item
          .find(Icon)
          .at(1)
          .prop('accessibilityLabel'),
      ).toContain('show Content sub items');
    });
    it('sets the correct toggle button accessibility label', () => {
      const item = shallow(<MenuItem item={linkSubItems} />);
      item.setState({ isOpen: true });
      expect(
        item
          .find(Icon)
          .at(1)
          .prop('accessibilityLabel'),
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      ).toBe('close Content sub items');
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('sets the correct button item accessibility label', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      const item = shallow(<MenuItem item={mockData} />);
      expect(
        item
          .find(Icon)
          .at(1)
          .prop('accessibilityLabel'),
      ).toContain('closed');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    });
    it('sets the correct button item accessibility label', () => {
      const item = shallow(<MenuItem item={mockData} />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      item.setState({ isOpen: true });
      expect(
        item
          .find(Icon)
          .at(1)
          // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
          .prop('accessibilityLabel'),
      ).toBe('opened');
    });
  });

  describe('renderSubItems', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MenuItem item={mockNestedData} location={{}} />,
      );
      expect(
        wrapper
          .find('MenuItem')
          .dive()
          .find('li')
          .prop('className'),
      ).toEqual('menu-item-container');
      expect(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        wrapper
          .find('MenuItem')
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          .dive()
          .find('MenuItem')
          .dive()
          .find('li')
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          .prop('className'),
      ).toEqual('menu-item-container');
    });
  });
});
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message

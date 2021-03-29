// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, shallow } from 'enzyme';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-router-dom' or its corre... Remove this comment to see the full error message
import { BrowserRouter } from 'react-router-dom';
// @ts-expect-error ts-migrate(6142) FIXME: Module './MainMenu' was resolved to '/Users/esjaas... Remove this comment to see the full error message
import MainMenu from './MainMenu';
// @ts-expect-error ts-migrate(6142) FIXME: Module './MenuItem/MenuItem' was resolved to '/Use... Remove this comment to see the full error message
import MenuItem from './MenuItem/MenuItem';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';

const mockMenuData = [
  {
    label: 'Dashboard',
    href: '/',
    icon: 'dashboard',
  },
  {
    label: 'Content',
    icon: 'player',
    items: [
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
    ],
  },
];

const mockNestedData = [
  {
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
  },
];

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('shouldBeOpen', () => {
  it('defaults to false', () => {
    const result = MainMenu.shouldBeOpen({}, {});
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBeFalsy();
  });
  it('returns false if an item in the items array has href not equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/' },
      { items: [{ href: '/different' }] },
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBe(false);
  });
  it('returns true if an item has href equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/a' },
      { href: '/a', items: [{ href: '/page' }] },
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBe(true);
  });
  it('returns true if an item in the items array has href equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/page' },
      { href: '', items: [{ href: '/page' }] },
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBe(true);
  });
  it('returns true if an item has alias equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/a' },
      { aliases: ['/a'], items: [{ href: '/page' }] },
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBe(true);
  });
  it('returns true if an item in the items array has alias equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/page' },
      { href: '', items: [{ aliases: ['/page'] }] },
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBe(true);
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('MainMenu', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<MainMenu menu={mockMenuData} />);
    }).not.toThrow();
  });

  it('renders the correct number of menu items', () => {
    const menu = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BrowserRouter>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MainMenu menu={mockMenuData} />
      </BrowserRouter>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(menu.find(MenuItem)).toHaveLength(6);
    const nestedMenu = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BrowserRouter>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MainMenu menu={mockNestedData} />
      </BrowserRouter>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(nestedMenu.find(MenuItem)).toHaveLength(4);
  });

  it('renders the auxMenu items', () => {
    const menu = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BrowserRouter>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MainMenu menu={mockMenuData} auxMenu={mockMenuData} />
      </BrowserRouter>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(menu.find(MenuItem)).toHaveLength(12);
  });

  it('generates a unique key for each item from the item.id', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const menu = shallow(<MainMenu menu={mockMenuData} />);
    menu.find('MenuItem').forEach((item, index) => {
      const expectedKey = `${mockMenuData[index].id}`;
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{ label: str... Remove this comment to see the full error message
      expect(item.key()).toBe(expectedKey);
    });
  });

  it('renders a menu button when onShowTenantMenu is set', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const mock = jest.fn();
    const menu = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BrowserRouter>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MainMenu menu={mockMenuData} onShowTenantMenu={mock} />
      </BrowserRouter>,
    );
    expect(
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      menu.find({ accessibilityLabel: 'show organization menu' }),
    ).toHaveLength(1);
  });

  it('renders mobileHeaderContent if defined', () => {
    const menu = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BrowserRouter>
        <MainMenu
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          menu={mockMenuData}
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          mobileHeaderContent={<div className="testHeader">test</div>}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        />
      </BrowserRouter>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(menu.find('.testHeader')).toHaveLength(1);
  });
});

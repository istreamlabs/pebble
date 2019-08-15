import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainMenu, { TestableMainMenu } from './MainMenu';

import MenuItem from './Components/MenuItem';

import { TENANTS } from '../../demo/data';

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

describe('shouldBeOpen', () => {
  it('defaults to false', () => {
    const result = MainMenu.shouldBeOpen({}, {});
    expect(result).toBeFalsy();
  });
  it('returns false if an item in the items array has href not equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/' },
      { items: [{ href: '/different' }] },
    );
    expect(result).toBe(false);
  });
  it('returns true if an item has href equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/a' },
      { href: '/a', items: [{ href: '/page' }] },
    );
    expect(result).toBe(true);
  });
  it('returns true if an item in the items array has href equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/page' },
      { href: '', items: [{ href: '/page' }] },
    );
    expect(result).toBe(true);
  });
  it('returns true if an item has alias equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/a' },
      { aliases: ['/a'], items: [{ href: '/page' }] },
    );
    expect(result).toBe(true);
  });
  it('returns true if an item in the items array has alias equal to current path ', () => {
    const result = MainMenu.shouldBeOpen(
      { pathname: '/page' },
      { href: '', items: [{ aliases: ['/page'] }] },
    );
    expect(result).toBe(true);
  });
});

describe('MainMenu', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<MainMenu menu={mockMenuData} />);
    }).not.toThrow();
  });

  it('renders the correct number of menuitems', () => {
    const menu = mount(
      <BrowserRouter>
        <MainMenu menu={mockMenuData} />
      </BrowserRouter>,
    );
    expect(menu.find(MenuItem)).toHaveLength(2);
  });

  it('renders the auxMenu items', () => {
    const menu = mount(
      <BrowserRouter>
        <MainMenu menu={mockMenuData} auxMenu={mockMenuData} />
      </BrowserRouter>,
    );
    expect(menu.find(MenuItem)).toHaveLength(4);
  });

  it('generates a unique key for each item from the item.id', () => {
    const menu = shallow(<MainMenu menu={mockMenuData} />);
    menu.find('MenuItem').forEach((item, index) => {
      const expectedKey = `${mockMenuData[index].id}`;
      expect(item.key()).toBe(expectedKey);
    });
  });

  describe('render', () => {
    it('test', () => {
      const result = shallow(
        <TestableMainMenu location={{}} menu={[]} />,
      );
      expect(result.find(motion.div).prop('animate')).toBe(
        'hideTenant',
      );
    });
    it('test', () => {
      const result = shallow(
        <TestableMainMenu location={{}} menu={[]} />,
      );
      result.setState({ showTenantMenu: true }, () => {
        expect(result.find(motion.div).prop('animate')).toBe(
          'showTenant',
        );
      });
    });
    it('calls all the correct helper methods when passed menu and auxMenu', () => {
      const instance = new TestableMainMenu({
        menu: mockMenuData,
        auxMenu: mockMenuData,
        title: 'test title',
      });
      jest
        .spyOn(instance, 'renderMenuHeader')
        .mockImplementation(jest.fn());
      jest
        .spyOn(instance, 'renderItem')
        .mockImplementation(jest.fn());
      jest
        .spyOn(instance, 'renderTenants')
        .mockImplementation(jest.fn());

      instance.render();

      expect(instance.renderMenuHeader).toHaveBeenCalledTimes(1);
      expect(instance.renderItem).toHaveBeenCalledTimes(2);
      expect(instance.renderTenants).toHaveBeenCalledTimes(1);
    });
    it('calls all the correct helper methods when passed menu only', () => {
      const instance = new TestableMainMenu({
        menu: mockMenuData,
        title: 'test title',
      });
      jest
        .spyOn(instance, 'renderMenuHeader')
        .mockImplementation(jest.fn());
      jest
        .spyOn(instance, 'renderItem')
        .mockImplementation(jest.fn());
      jest
        .spyOn(instance, 'renderTenants')
        .mockImplementation(jest.fn());

      instance.render();

      expect(instance.renderMenuHeader).toHaveBeenCalledTimes(1);
      expect(instance.renderItem).toHaveBeenCalledTimes(1);
      expect(instance.renderTenants).toHaveBeenCalledTimes(1);
    });
  });

  describe('renderMenuHeader', () => {
    it('renders the title', () => {
      const testTitle = 'test title';
      const instance = new TestableMainMenu({
        menu: mockMenuData,
        title: testTitle,
      });
      const result = shallow(instance.renderMenuHeader());
      expect(result.text()).toBe(testTitle);
      expect(result.children()).toHaveLength(1);
    });
    it('renders the current tenant if passed a tenant and currentTenant', () => {
      const instance = new TestableMainMenu({
        menu: mockMenuData,
        currentTenant: {
          name: 'Acme Corporation',
          id: 'acme-prod',
          realm: 'production',
        },
        tenants: TENANTS,
      });
      const result = shallow(instance.renderMenuHeader());
      expect(result.children()).toHaveLength(2);
    });
  });

  describe('renderTenantHeader', () => {
    it('returns an add tenant button if onAddTenant is defined', () => {
      const mock = jest.fn();
      const instance = new TestableMainMenu({
        menu: mockMenuData,
        onAddTenant: mock,
        tenants: TENANTS,
      });
      const result = mount(instance.renderTenantHeader());
      expect(
        result
          .find('button')
          .at(0)
          .prop('onClick'),
      ).toBe(mock);
      expect(
        result
          .find('button')
          .at(0)
          .prop('className'),
      ).toContain('add-tenant-btn');
    });
  });

  describe('renderTenants', () => {
    it('does not render tenants if tenants is not defined', () => {
      const instance = new TestableMainMenu({
        menu: mockMenuData,
      });
      expect(instance.renderTenants()).toBe(null);
    });
    it('renders a TenantMenu, calls renderTenantHeader if tenants is defined', () => {
      const instance = new TestableMainMenu({
        menu: mockMenuData,
        tenants: TENANTS,
      });
      jest
        .spyOn(instance, 'renderTenantHeader')
        .mockImplementation(jest.fn());
      const result = shallow(instance.renderTenants());
      expect(instance.renderTenantHeader).toHaveBeenCalled();
      expect(result.find('TenantMenu')).toHaveLength(1);
      expect(
        result.find('TenantMenu').prop('currentTenantId'),
      ).toBeNull();
    });
    it('renders a TenantMenu and sets currentTenant if defined', () => {
      const instance = new TestableMainMenu({
        menu: mockMenuData,
        tenants: TENANTS,
        currentTenant: {
          name: 'Acme Corporation',
          id: 'acme-prod',
          realm: 'production',
        },
      });
      jest
        .spyOn(instance, 'renderTenantHeader')
        .mockImplementation(jest.fn());
      const result = shallow(instance.renderTenants());
      expect(instance.renderTenantHeader).toHaveBeenCalled();
      expect(result.find('TenantMenu')).toHaveLength(1);
      expect(result.find('TenantMenu').prop('currentTenantId')).toBe(
        'acme-prod',
      );
    });
  });

  describe('handleTenantToggle', () => {
    it('toggles showTenantMenu with setState', () => {
      const instance = new TestableMainMenu({
        menu: mockMenuData,
        tenants: TENANTS,
      });
      instance.setState = jest.fn();
      instance.handleTenantToggle();
      expect(instance.setState).toHaveBeenCalledTimes(1);
      expect(instance.setState).toHaveBeenCalledWith({
        showTenantMenu: !instance.state.showTenantMenu,
      });
    });
  });
});

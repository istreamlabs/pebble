import React from 'react';
import { mount, shallow } from 'enzyme';
import { useMobileLayout } from '../../Hooks';

import TenantMenu from './TenantMenu';
import Button from '../Button/Button';

import { TENANTS } from '../../demo/data';

jest.mock('../../Hooks/UseMobileLayout');

describe('TenantMenu', () => {
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => false);
  });

  it('renders without crashing', () => {
    expect(() => {
      shallow(<TenantMenu />);
    }).not.toThrow();
  });

  describe('renderHeader', () => {
    it('adds add organization button when onAddTenant is defined', () => {
      const mock = jest.fn();
      const wrapper = mount(
        <TenantMenu tenants={TENANTS} onAddTenant={mock} />,
      );
      expect(
        wrapper.find({ accessibilityLabel: 'add organization' }),
      ).toHaveLength(1);
    });

    it('adds close organization menu button when onCloseTenantMenu is defined', () => {
      const mock = jest.fn();
      const wrapper = mount(
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      );
      expect(
        wrapper.find({
          accessibilityLabel: 'close organization menu',
        }),
      ).toHaveLength(1);
    });

    it('sets the close organization menu icon to close if viewed in mobile sized viewport', () => {
      const mock = jest.fn();
      useMobileLayout.mockImplementation(() => true);
      const wrapper = mount(
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      );
      expect(wrapper.find(Button).prop('icon')).toBe('close');
    });

    it('sets the close organization menu icon to nav-left if viewed in desktop sized viewport', () => {
      const mock = jest.fn();
      const wrapper = mount(
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      );
      expect(wrapper.find(Button).prop('icon')).toBe('nav-left');
    });
  });

  describe('renderTenants', () => {
    it('renders empty tenant list', () => {
      const wrapper = mount(
        <TenantMenu
          emptyMessage={<div id="emptyMessage">i am empty</div>}
        />,
      );
      expect(wrapper.find('#emptyMessage')).toHaveLength(1);
    });
    it('renders one tenant', () => {
      const wrapper = mount(
        <TenantMenu
          tenants={[
            {
              name: 'Genco Pura Olive Oil Company',
              id: 'genco-prod',
              realm: 'production',
              url: 'https://www.istreamplanet.com',
            },
          ]}
        />,
      );
      expect(wrapper.find('li')).toHaveLength(1);
    });
    it('renders correct number of tenants when passed more than one', () => {
      const wrapper = mount(<TenantMenu tenants={TENANTS} />);
      expect(wrapper.find('li')).toHaveLength(13);
    });
    it('adds the currently selected organization Icon', () => {
      const wrapper = mount(
        <TenantMenu currentTenantId="genco-prod" tenants={TENANTS} />,
      );
      expect(
        wrapper.find({
          accessibilityLabel: 'currently selected organization',
        }),
      ).toHaveLength(1);
    });
  });
});

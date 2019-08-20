import React from 'react';
import { mount, shallow } from 'enzyme';
import { useMobileLayout } from '../../Hooks';

import TenantMenu from './TenantMenu';
import Button from '../Button/Button';
import Link from '../Link/Link';

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

  it('renders 1 tenant', () => {
    expect(() => {
      shallow(
        <TenantMenu
          tenants={[
            {
              name: 'Acme Corporation',
              id: 'acme-prod',
              realm: 'production',
              url: 'https://www.istreamplanet.com',
            },
          ]}
        />,
      );
    }).not.toThrow();
  });

  describe('renderHeader', () => {
    it('adds Add Tenant button when onAddTenant is defined', () => {
      const mock = jest.fn();
      const wrapper = mount(
        <TenantMenu tenants={TENANTS} onAddTenant={mock} />,
      );
      expect(
        wrapper.find({ accessibilityLabel: 'add tenant' }),
      ).toHaveLength(1);
    });

    it('adds Close Tenant Menu button when onCloseTenantMenu is defined', () => {
      const mock = jest.fn();
      const wrapper = mount(
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      );
      expect(
        wrapper.find({ accessibilityLabel: 'close tenant menu' }),
      ).toHaveLength(1);
    });

    it('sets the close tenant menu icon to close if viewed in mobile sized viewport', () => {
      const mock = jest.fn();
      useMobileLayout.mockImplementation(() => true);
      const wrapper = mount(
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      );
      expect(wrapper.find(Button).prop('icon')).toBe('close');
    });

    it('sets the close tenant menu icon to nav-left if viewed in desktop sized viewport', () => {
      const mock = jest.fn();
      const wrapper = mount(
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      );
      expect(wrapper.find(Button).prop('icon')).toBe('nav-left');
    });
  });

  describe('renderTenants', () => {
    it('renders correct number of tenants', () => {
      const wrapper = shallow(<TenantMenu tenants={TENANTS} />);
      expect(wrapper.find('.tenant-menu').children()).toHaveLength(
        13,
      );
    });

    it('it does not set onClick for the currentTenant', () => {
      const mock = jest.fn();
      const wrapper = shallow(
        <TenantMenu
          currentTenantId={TENANTS[1].id}
          tenants={TENANTS}
          onTenantChange={mock}
        />,
      );
      expect(
        wrapper
          .find(Link)
          .at(1)
          .prop('onClick'),
      ).toBeNull();
    });
  });
});

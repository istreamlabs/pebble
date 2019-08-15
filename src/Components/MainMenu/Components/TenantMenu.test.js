import React from 'react';
import { mount, shallow } from 'enzyme';

import TenantMenu from './TenantMenu';
import { TENANTS } from '../../../demo/data';

describe('TenantMenu', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<TenantMenu />);
    }).not.toThrow();
  });

  it('renders a list of tenants', () => {
    const wrapper = shallow(<TenantMenu tenants={TENANTS} />);
    expect(wrapper.find('.tenant-menu')).toHaveLength(1);
  });

  describe('renderTenants', () => {
    it('renders correct number of tenants', () => {
      const wrapper = shallow(<TenantMenu tenants={TENANTS} />);
      expect(wrapper.find('.tenant-menu').children()).toHaveLength(
        13,
      );
    });
  });
});

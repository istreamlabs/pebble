import React from 'react';
import { shallow } from 'enzyme';

import TenantMenu from './TenantMenu';
import Link from '../../Link/Link';

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

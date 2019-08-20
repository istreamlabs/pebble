import React from 'react';
import { storiesOf } from '@storybook/react';

import TenantMenu from './TenantMenu';

import { TENANTS } from '../../demo/data';

storiesOf('TenantMenu', module)
  .add('many tenants', () => <TenantMenu tenants={TENANTS} />)
  .add('one tenant', () => (
    <TenantMenu
      tenants={[
        {
          name: 'Acme Corporation',
          id: 'acme-prod',
          realm: 'production',
          url: '#',
        },
      ]}
    />
  ))
  .add('close and add buttons', () => (
    <TenantMenu
      tenants={TENANTS}
      onAddTenant={() => console.log('add tenant')}
      onCloseTenantMenu={() => console.log('close tenant menu')}
    />
  ));

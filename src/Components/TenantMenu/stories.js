import React from 'react';
import { storiesOf } from '@storybook/react';

import TenantMenu from './TenantMenu';

import { TENANTS } from '../../demo/data';

storiesOf('TenantMenu', module)
  .addParameters({
    chromatic: { delay: 1500 },
  })
  .add('many tenants', () => <TenantMenu tenants={TENANTS} />)
  .add('no tenants', () => <TenantMenu tenants={[]} />)
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
      // eslint-disable-next-line no-console
      onAddTenant={() => console.log('add organization')}
      // eslint-disable-next-line no-console
      onCloseTenantMenu={() => console.log('close organization menu')}
    />
  ));

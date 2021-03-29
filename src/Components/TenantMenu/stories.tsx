// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './TenantMenu' was resolved to '/Users/esja... Remove this comment to see the full error message
import TenantMenu from './TenantMenu';

import { TENANTS } from '../../demo/data';

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('TenantMenu', module)
  .addParameters({
    chromatic: { delay: 1500 },
  })
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('many tenants', () => <TenantMenu tenants={TENANTS} />)
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('no tenants', () => <TenantMenu tenants={[]} />)
  .add('one tenant', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <TenantMenu
      tenants={TENANTS}
      // eslint-disable-next-line no-console
      onAddTenant={() => console.log('add organization')}
      // eslint-disable-next-line no-console
      onCloseTenantMenu={() => console.log('close organization menu')}
    />
  ));

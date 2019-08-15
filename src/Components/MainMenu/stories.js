import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import MainMenu from './MainMenu';

import { MAIN_MENU, TENANTS } from '../../demo/data';

const auxMenu = [
  {
    label: 'Support',
    href: '/#/Components/MainMenu',
    icon: 'ticket',
  },
  {
    label: 'Trent Anderson',
    icon: 'profile-circle',
    items: [
      {
        label: 'Profile',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        label: 'Sign Out',
        href: '/#/Components/MainMenu',
        icon: '',
      },
    ],
  },
  {
    id: 'version',
    label: 'v1.2.3.4',
  },
];

storiesOf('MainMenu', module)
  .add('multiple tenants', () => (
    <DemoBrowserRouter>
      <MainMenu
        tenants={TENANTS}
        currentTenant={{
          name: 'Cyberdyne Systems',
          id: 'cyberdyne-stage',
          realm: 'stage',
        }}
        menu={MAIN_MENU}
        auxMenu={auxMenu}
        startMenuExpanded={false}
        onAddTenant={() => alert('add tenant logic')}
        onTenantChange={() => alert('tenant change logic')}
      />
    </DemoBrowserRouter>
  ))
  .add('one tenant', () => (
    <DemoBrowserRouter>
      <MainMenu
        title="iStreamPlanet"
        menu={MAIN_MENU}
        auxMenu={auxMenu}
        tenants={[
          {
            name: 'one tenant',
            id: 'cyberdyne-stage',
            realm: 'stage',
          },
        ]}
      />
    </DemoBrowserRouter>
  ))
  .add('not start expanded', () => (
    <DemoBrowserRouter>
      <MainMenu
        title="iStreamPlanet"
        menu={MAIN_MENU}
        auxMenu={auxMenu}
        startMenuExpanded
      />
    </DemoBrowserRouter>
  ));

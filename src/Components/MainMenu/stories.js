import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import MainMenu from './MainMenu';
import Block from '../Block/Block';

const tenants = {
  current: 'dtvlatamStage',
  options: [
    {
      name: 'DirecTV LATAM',
      realm: 'development',
      id: 'dtvlatamDev',
    },
    {
      name: 'DirecTV LATAM',
      realm: 'stage',
      id: 'dtvlatamStage',
    },
    {
      name: 'DirecTV LATAM',
      realm: 'production',
      id: 'dtvlatamProd',
    },
    {
      name: 'iStreamPlanet',
      realm: 'development',
      id: 'ispDev',
    },
    {
      name: 'iStreamPlanet',
      realm: 'stage',
      id: 'ispStage',
    },
    {
      name: 'iStreamPlanet',
      realm: 'production',
      id: 'ispProd',
    },
    {
      name: 'Spark',
      realm: 'stage',
      id: 'sparkStage',
    },
    {
      name: 'Spark',
      realm: 'production',
      id: 'sparkProd',
    },
  ],
};

const menu = [
  {
    label: 'Link',
    href: '/#/Components/MainMenu',
    icon: 'dashboard',
  },
  {
    label: 'Subs Only',
    icon: 'player',
    items: [
      {
        label: 'Sub-item 1',
        href: '/#/Components/MainMenu',
        aliases: ['/iframe.html'],
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
      },
      {
        label: 'Sub-item 3',
        href: '/#/Components/MainMenu',
      },
    ],
  },
  {
    label: 'Link & Sub',
    icon: 'settings',
    href: '/#/Components/MainMenu',
    aliases: ['/iframe.html'],
    items: [
      {
        label: 'Sub-item 1',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
        icon: '',
      },
    ],
  },
];
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
  .add('all', () => (
    <DemoBrowserRouter>
      <div style={{ overflow: 'auto' }}>
        <Block height="400px">
          <MainMenu
            title="iStreamPlanet"
            tenants={tenants}
            menu={menu}
            auxMenu={auxMenu}
          />
        </Block>
      </div>
    </DemoBrowserRouter>
  ))
  .add('start expanded', () => (
    <DemoBrowserRouter>
      <div style={{ overflow: 'auto' }}>
        <Block height="400px">
          <MainMenu
            title="iStreamPlanet"
            menu={menu}
            auxMenu={auxMenu}
            startMenuExpanded
          />
        </Block>
      </div>
    </DemoBrowserRouter>
  ));

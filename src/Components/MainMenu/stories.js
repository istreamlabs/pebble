import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import MainMenu from './MainMenu';
import Block from '../Block/Block';

const menu = [
  {
    label: 'Link',
    href: '/#/Components/MainMenu',
    icon: 'dashboard',
    exact: true,
  },
  {
    label: 'Subs Only',
    icon: 'player',
    items: [
      {
        label: 'Sub-item 1',
        href: '/#/Components/MainMenu',
        aliases: ['/iframe.html'],
        exact: true,
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
        exact: true,
      },
      {
        label: 'Sub-item 3',
        href: '/#/Components/MainMenu',
        exact: true,
      },
    ],
  },
  {
    label: 'Link & Sub',
    icon: 'settings',
    href: '/#/Components/MainMenu',
    aliases: ['/iframe.html'],
    exact: true,
    items: [
      {
        label: 'Sub-item 1',
        href: '/#/Components/MainMenu',
        icon: '',
        exact: true,
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
        icon: '',
        exact: true,
      },
    ],
  },
];
const auxMenu = [
  {
    label: 'Support',
    href: '/#/Components/MainMenu',
    icon: 'ticket',
    exact: true,
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
          <MainMenu menu={menu} auxMenu={auxMenu} />
        </Block>
      </div>
    </DemoBrowserRouter>
  ))
  .add('start expanded', () => (
    <DemoBrowserRouter>
      <div style={{ overflow: 'auto' }}>
        <Block height="400px">
          <MainMenu menu={menu} auxMenu={auxMenu} startMenuExpanded />
        </Block>
      </div>
    </DemoBrowserRouter>
  ));

import Block from '../Block/Block';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
import MainMenu from './MainMenu';
import React from 'react';
import { storiesOf } from '@storybook/react';

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
const nested = [
  {
    label: 'ONE',
    href: '#/monkey',
    exact: true,
    items: [
      {
        label: 'TWO',
        href: '/#/Components/MainMenu',
        aliases: ['/iframe.html'],
        icon: 'ticket',
        exact: true,
      },
    ],
  },
  {
    label: 'ONE',
    href: '/#/Components/MainMenu',
    exact: true,
    items: [
      {
        label: 'TWO',
        href: '/#/Components/MainMenu',
        icon: 'ticket',
        exact: true,
      },
      {
        label: 'TWO',
        href: '/#/Components/MainMenu',
        icon: 'ticket',
        exact: true,
        items: [
          {
            label: 'THREE',
            href: '/#/Components/MainMenu',
            exact: true,
          },
          {
            label: 'THREE',
            href: '/#/Components/MainMenu',
            exact: true,
            items: [
              {
                label: 'FOUR',
                href: '/#/Components/MainMenu',
                exact: true,
              },
              {
                label: 'FOUR',
                href: '/#/Components/MainMenu',
                exact: true,
              },
            ],
          },
        ],
      },
      {
        label: 'TWO',
        href: '/#/Components/MainMenu',
        icon: 'ticket',
        exact: true,
        items: [
          {
            label: 'THREE',
            href: '/#/Components/MainMenu',
            exact: true,
          },
        ],
      },
    ],
  },
  {
    label: 'ONE',
    exact: true,
    items: [
      {
        label: 'TWO',
        href: '/#/Components/MainMenu',
        aliases: ['/iframe3.html'],
        icon: 'ticket',
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
    className: 'fs-block',
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
  ))
  .add('nested with titles', () => (
    <DemoBrowserRouter>
      <div style={{ overflow: 'auto' }}>
        <Block height="1200px">
          <MainMenu
            menu={nested}
            auxMenu={auxMenu}
            startMenuExpanded
          />
        </Block>
      </div>
    </DemoBrowserRouter>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import MainMenu from './MainMenu';
import Block from '../Block/Block';

const menu = [
  {
    id: '1',
    label: 'Link',
    description: 'Links to a page',
    href: '/#/Components/MainMenu',
    icon: 'dashboard'
  },
  {
    id: '2',
    label: 'Subs Only',
    description: 'Does not link to a page but has sub-items',
    icon: 'player',
    items: [
      {
        id: '2a',
        label: 'Sub-item 1',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '2b',
        label: 'Sub-item 2',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '2c',
        label: 'Sub-item 3',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      }
    ]
  },
  {
    id: '3',
    label: 'Link & Sub',
    description: 'Links to a page and has sub-items',
    icon: 'settings',
    href: '/#/Components/MainMenu',
    items: [
      {
        id: '3a',
        label: 'Sub-item 1',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '3b',
        label: 'Sub-item 2',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
    ]
  },
];
const auxMenu = [
  {
    id: '7',
    label: 'Support',
    description: 'Get support for our products',
    href: '/#/Components/MainMenu',
    icon: 'ticket'
  },
  {
    id: '8',
    label: 'Trent Anderson',
    description: 'View your profile stuffs',
    icon: 'profile-circle',
    items: [
      {
        id: '8a',
        label: 'Profile',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '8b',
        label: 'Sign Out',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
    ]
  }
];

const initialState = { activeItem: '2', showMenu: false };

storiesOf('MainMenu', module)
  .add('all', () => (
    <BrowserRouter>
      <div styles={{ overflow: 'auto' }}>
        <Block height="400px">
          <MainMenu menu={menu} auxMenu={auxMenu} activeItem={initialState.activeItem} />
        </Block>
      </div>
    </BrowserRouter>
  ));

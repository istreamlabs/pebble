```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Block from '../Block/Block';
import Button from '../Button/Button';

import { TENANTS } from '../../demo/data';

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
    items: [
      {
        label: 'Sub-item 1',
        href: '/#/Components/MainMenu',
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
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
      },
      {
        label: 'Sign Out',
        href: '/#/Components/MainMenu',
      },
    ],
  },
  {
    label: 'v1.2.3.4',
  },
];

initialState = { activeItem: '2', showMenu: false };

<DemoBrowserRouter>
  <MainMenu
    currentTenant={{
      name: 'Cyberdyne Systems',
      id: 'cyberdyne-stage',
      realm: 'stage',
    }}
    tenants={TENANTS}
    menu={menu}
    auxMenu={auxMenu}
  />
</DemoBrowserRouter>;
```

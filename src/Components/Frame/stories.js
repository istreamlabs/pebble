import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import Frame from './Frame';
import Block from '../Block/Block';
import MainMenu from '../MainMenu/MainMenu';

import { TENANTS } from '../../demo/data';

const MENU = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    href: '/',
  },
  {
    label: 'Subs Only',
    icon: 'player',
    items: [
      {
        label: 'Sub-item 1',
        href: '/sub1/subitem1',
        exact: true,
      },
    ],
  },
  {
    id: '3',
    label: 'Link & Sub',
    icon: 'settings',
    href: '/linksub',
    exact: true,
    items: [
      {
        label: 'Sub-item 1',
        href: '/sub2/subitem1',
        exact: true,
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
        exact: true,
      },
    ],
  },
];

const mainMenu = <MainMenu menu={MENU} startMenuExpanded />;

const bodyContent = (
  <Block
    background="blue-lighter"
    flex
    direction="column"
    height="100%"
    padding="6"
  >
    Main content
  </Block>
);

storiesOf('Frame', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('with Tenants', () => (
    <BrowserRouter>
      <div style={{ height: '400px', overflow: 'auto' }}>
        <Frame
          navigation={mainMenu}
          tenants={TENANTS}
          currentTenant={{
            name: 'Cyberdyne Systems',
            id: 'cyberdyne-prod',
            realm: 'production',
            url: 'https://www.istreamplanet.com',
          }}
        >
          {bodyContent}
        </Frame>
      </div>
    </BrowserRouter>
  ))
  .add('without Tenants', () => (
    <BrowserRouter>
      <div style={{ height: '400px', overflow: 'auto' }}>
        <Frame title="iStreamPlanet" navigation={mainMenu}>
          {bodyContent}
        </Frame>
      </div>
    </BrowserRouter>
  ));

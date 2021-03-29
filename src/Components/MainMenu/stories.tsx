// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-router-dom' or its corre... Remove this comment to see the full error message
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
// @ts-expect-error ts-migrate(6142) FIXME: Module './MainMenu' was resolved to '/Users/esjaas... Remove this comment to see the full error message
import MainMenu from './MainMenu';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('MainMenu', module)
  .add('all', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DemoBrowserRouter>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div style={{ overflow: 'auto' }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block height="400px">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MainMenu menu={menu} auxMenu={auxMenu} />
        </Block>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    </DemoBrowserRouter>
  ))
  .add('start expanded', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DemoBrowserRouter>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div style={{ overflow: 'auto' }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block height="400px">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MainMenu menu={menu} auxMenu={auxMenu} startMenuExpanded />
        </Block>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    </DemoBrowserRouter>
  ))
  .add('nested with titles', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DemoBrowserRouter>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div style={{ overflow: 'auto' }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block height="1200px">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MainMenu
            menu={nested}
            auxMenu={auxMenu}
            startMenuExpanded
          />
        </Block>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    </DemoBrowserRouter>
  ));

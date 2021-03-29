// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-router-dom' or its corre... Remove this comment to see the full error message
import { BrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Frame' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import Frame from './Frame';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../MainMenu/MainMenu' was resolved to '/Us... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const mainMenu = <MainMenu menu={MENU} startMenuExpanded />;

const bodyContent = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('Frame', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('with Tenants', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <BrowserRouter>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div style={{ height: '400px', overflow: 'auto' }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    </BrowserRouter>
  ))
  .add('without Tenants', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <BrowserRouter>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div style={{ height: '400px', overflow: 'auto' }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Frame title="iStreamPlanet" navigation={mainMenu}>
          {bodyContent}
        </Frame>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    </BrowserRouter>
  ));

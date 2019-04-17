import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import Frame from './Frame';
import Block from '../Block/Block';
import MainMenu from '../MainMenu/MainMenu';

const TENANT_NAME = 'Frame Example';

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
        href: '/',
      },
    ]
  },
  {
    id: '3',
    label: 'Link & Sub',
    icon: 'settings',
    href: '?path=/story/frame--all',
    items: [
      {
        label: 'Sub-item 1',
        href: '/',
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
      },
    ]
  },
];

class FrameExample extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMainMenuItem: '1',
      showMobileNavigation: false
    };
    this.toggleMainNav = this.toggleMainNav.bind(this);
  }

  toggleMainNav() {
    this.setState(prevState => ({
      showMobileNavigation: !prevState.showMobileNavigation
    }));
  }

  render() {
    const {
      activeMainMenuItem,
      showMobileNavigation
    } = this.state;

    const mainMenu = (
      <MainMenu
        title={TENANT_NAME}
        menu={MENU}
        activeItem={activeMainMenuItem}
        showMobileNavigation={showMobileNavigation}
      />
    );

    const bodyContent = (
      <Block background="blue-lighter" flex direction="column" height="100%" padding="6">
        Main Content goes here
      </Block>
    );

    return (
      <Frame
        isShowingMobileNav={showMobileNavigation}
        navigation={mainMenu}
        onNavigationToggle={this.toggleMainNav}
        tenantName={TENANT_NAME}
        title={TENANT_NAME}
      >
        {bodyContent}
      </Frame>
    );
  }
}

storiesOf('Frame', module)
  .add('all', () => (
    <BrowserRouter>
      <div style={{ height: '400px', overflow: 'auto' }}>
        <FrameExample />
      </div>
    </BrowserRouter>
  ));

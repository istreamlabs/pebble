import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import Frame from './Frame';
import Block from '../Block/Block';
import MainMenu from '../MainMenu/MainMenu';

import { MAIN_MENU, TENANTS } from '../../demo/data';

const TENANT_NAME = 'Frame Example';

class FrameExample extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMainMenuItem: '1',
      showMobileNavigation: false,
    };
    this.toggleMainNav = this.toggleMainNav.bind(this);
  }

  toggleMainNav() {
    this.setState(prevState => ({
      showMobileNavigation: !prevState.showMobileNavigation,
    }));
  }

  render() {
    const { activeMainMenuItem, showMobileNavigation } = this.state;

    const mainMenu = (
      <MainMenu
        tenants={TENANTS}
        currentTenant={{
          name: 'Cyberdyne Systems',
          id: 'cyberdyne-stage',
          realm: 'stage',
        }}
        title={TENANT_NAME}
        menu={MAIN_MENU}
        activeItem={activeMainMenuItem}
        showMobileNavigation={showMobileNavigation}
      />
    );

    const bodyContent = (
      <Block
        background="blue-lighter"
        flex
        direction="column"
        height="100%"
        padding="6"
      >
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

storiesOf('Frame', module).add('all', () => (
  <BrowserRouter>
    <div style={{ height: '400px', overflow: 'auto' }}>
      <FrameExample />
    </div>
  </BrowserRouter>
));

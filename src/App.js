import React, { Component } from 'react';

import Event from './demo/event';

import {
  Frame,
  MainMenu,
} from './Components';

import { menu, auxMenu } from './demo';

const TENANT_NAME = 'iStreamPlanet';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeMainMenuItem: '2b',
      // showToast: false,
      // isLoading: false,
      // searchText: '',
      showMobileNavigation: false,
      // modalActive: false,
    };
  }

  toggleState = key => () => {
    this.setState(prevState => ({ [key]: !prevState[key] }));
  };

  handleTabSelect = (newSelectedTab) => {
    this.setState({ selectedTabId: newSelectedTab });
  }


  render() {
    const {
      activeMainMenuItem,
      showMobileNavigation,
    } = this.state;

    const mainMenu = (
      <MainMenu
        title={TENANT_NAME}
        menu={menu}
        auxMenu={auxMenu}
        activeItem={activeMainMenuItem}
      />
    );

    return (
      <Frame
        isShowingMobileNav={showMobileNavigation}
        navigation={mainMenu}
        onNavigationToggle={this.toggleState('showMobileNavigation')}
        title={TENANT_NAME}
      >
        <Event />
      </Frame>
    );
  }
}

export default App;

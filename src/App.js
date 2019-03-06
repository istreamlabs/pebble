import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Event, Live } from './demo';

import {
  Frame,
  MainMenu,
} from './Components';

import { menu, auxMenu } from './demo/demo';

const TENANT_NAME = 'iStreamPlanet';

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Subscribers() {
  return <h2>Subscribers</h2>;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMainMenuItem: 'live',
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

  handleNavigationSelection = (selectedId) => {
    this.setState({ activeMainMenuItem: selectedId });
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
        onNavigate={this.handleNavigationSelection}
      />
    );

    return (
      <Router>
        <Frame
          isShowingMobileNav={showMobileNavigation}
          navigation={mainMenu}
          onNavigationToggle={this.toggleState('showMobileNavigation')}
          title={TENANT_NAME}
        >
          <Switch>
            <Route path="/live/" exact component={Live} />
            <Route path="/live/event" exact component={Event} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/subscribers/" component={Subscribers} />
          </Switch>
        </Frame>
      </Router>
    );
  }
}

export default App;

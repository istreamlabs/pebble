import React, { Component } from 'react';

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
    return (
      <div>hell</div>
    );
  }
}

export default App;

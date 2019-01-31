import React, { Component } from 'react';
import { Button as MyButton } from './Components';
import { Icon } from './Components';

class App extends Component {
  render() {
    return (
      <div>
        <MyButton>Hello, World!</MyButton>
        <Icon name="apartment" size={4} accessibilityLabel="My Screenreader label" />
        <Icon name="fence" />
        <Icon name="logoUnsplash" />
        <Icon name="asdf" size={4} ariaHidden={false} />
      </div>
    );
  }
}

export default App;

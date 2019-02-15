import React, { Component } from 'react';
import { Button, TextContainer } from './Components';

import './Styles/foundation.scss';

class App extends Component {
  render() {
    return (
      <TextContainer>
        <p>This is a paragraph</p>
        <Button primary>Hello, World!</Button>
      </TextContainer>
    );
  }
}

export default App;

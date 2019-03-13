import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import 'storybook-chromatic';

// automatically import all files ending in *.stories.js
const req = require.context('../src/Components/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const styles = {
  margin: '1rem',
  width: '30rem',
  display: 'block'
};
const componentContainerDecorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(componentContainerDecorator);

configure(loadStories, module);

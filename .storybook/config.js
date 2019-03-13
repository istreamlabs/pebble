import { configure } from '@storybook/react';
import 'storybook-chromatic';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

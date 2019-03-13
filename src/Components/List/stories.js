import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import List from './List';
import ListItem from './List';

storiesOf('List', module)
  .add('all', () => (
    <>
      <List>
        <ListItem>Cartoon Network</ListItem>
        <ListItem>CNN</ListItem>
        <ListItem>TBS</ListItem>
        <ListItem>TNT</ListItem>
      </List>
    </>
  ));

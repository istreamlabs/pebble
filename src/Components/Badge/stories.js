import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Badge from './Badge';

storiesOf('Badge', module)
  .add('all', () => (
    <>
      <Badge>default</Badge>
      {' '}
      <Badge type="info">info</Badge>
      {' '}
      <Badge type="warn">warn</Badge>
      {' '}
      <Badge type="danger">danger</Badge>
      {' '}
      <Badge type="success">success</Badge>
      {' '}
      <Badge type="special">special</Badge>
    </>
  ))
  .add('sizes', () => (
    <>
      <Badge size="large">large</Badge>
      {' '}
      <Badge>medium</Badge>
      {' '}
      <Badge size="small">small</Badge>
    </>
  ))
  .add('with icons', () => (
    <>
      <Badge size="large" type="danger" icon="circle">LIVE</Badge>
      {' '}
      <Badge size="large" type="special" icon="add-circle">add circle</Badge>
    </>
  ));

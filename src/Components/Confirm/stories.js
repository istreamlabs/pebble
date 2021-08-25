import '../../Styles/foundation.scss';

import Block from '../Block/Block';
import Confirm from './Confirm';
import Card from '../Card/Card';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Confirm', module)
  .add('basic', () => (
    <Confirm onConfirm={action('Confirmed')}>Confirm</Confirm>
  ))
  .add('Type a value', () => (
    <Confirm confirmValue="confirm" onConfirm={action('Confirmed')}>
      Confirm
    </Confirm>
  ))
  .add('Danger', () => (
    <Block itemSpacing="3">
      <Confirm
        danger
        primary
        icon="delete"
        onConfirm={action('Confirmed')}
      >
        Destroy User
      </Confirm>
      <Confirm
        danger
        iconAfterText="delete"
        onConfirm={action('Confirmed')}
      >
        Destroy
      </Confirm>
    </Block>
  ))
  .add('Portal', () => (
    <Card sectioned>
      <Confirm portalTarget={document.body}>Portal Me</Confirm>
    </Card>
  ));

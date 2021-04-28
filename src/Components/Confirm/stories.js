import '../../Styles/foundation.scss';

import Block from '../Block/Block';
import Confirm from './Confirm';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Confirm', module)
  .add('basic', () => <Confirm>Confirm</Confirm>)
  .add('Type a value', () => (
    <Confirm confirmValue="confirm">Confirm</Confirm>
  ))
  .add('Danger', () => (
    <Block itemSpacing="3">
      <Confirm danger primary icon="delete">
        Destroy User
      </Confirm>
      <Confirm danger iconAfterText="delete">
        Destroy
      </Confirm>
    </Block>
  ));

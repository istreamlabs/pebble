import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Input from './Input';

storiesOf('Input', module)
  .add('all', () => (
    <>
      <Input />
      <Input autoFocus />
      <Input placeholder="this is placeholder text" />
      <Input isInvalid value="this value is invalid" />
      <Input disabled value="this input is disabled" />
      <Input prefix="$" />
      <Input suffix=".99" />
      <Input size="small" placeholder="small" />
      <Input size="medium" placeholder="medium (default)" />
      <Input size="large" placeholder="large" />
    </>
  ));

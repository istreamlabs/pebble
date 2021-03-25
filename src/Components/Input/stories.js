import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Input from './Input';

storiesOf('Input', module).add('all', () => (
  <>
    <Input />
    <Input autoFocus placeholder="autoFocus" />
    <Input placeholder="this is placeholder text" />
    <Input isInvalid value="this value is invalid" />
    <Input disabled value="this input is disabled" />
    <Input prefix="$" placeholder="prefix" />
    <Input required placeholder="required" />
    <Input suffix=".99" placeholder="suffix" />
    <Input size="small" placeholder="small" />
    <Input size="medium" placeholder="medium (default)" />
    <Input size="large" placeholder="large" />
  </>
));

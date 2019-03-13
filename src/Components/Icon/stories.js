import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Icon from './Icon';

storiesOf('Icon', module)
  .add('all', () => (
    <>
      <Icon name="event">hello</Icon>
    </>
  ));

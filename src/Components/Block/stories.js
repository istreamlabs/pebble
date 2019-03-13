import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Block from './Block';

storiesOf('Block', module)
  .add('all', () => (
    <>
      <Block>hello</Block>
    </>
  ));

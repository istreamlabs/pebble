import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Heading from './Heading';

storiesOf('Heading', module)
  .add('all', () => (
    <>
      <Heading>hello</Heading>
    </>
  ));

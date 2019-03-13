import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Text from './Text';

storiesOf('Text', module)
  .add('all', () => (
    <>
      <Text>hello</Text>
    </>
  ));

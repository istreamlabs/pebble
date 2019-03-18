import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Overlay from './Overlay';

storiesOf('Overlay', module)
  .add('all', () => (
    <>
      <Overlay />
    </>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import LinkButton from './LinkButton';

storiesOf('LinkButton', module)
  .add('all', () => (
    <>
      <LinkButton href="#">hello</LinkButton>
    </>
  ));

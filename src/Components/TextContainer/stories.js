import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import TextContainer from './TextContainer';

storiesOf('TextContainer', module)
  .add('all', () => (
    <>
      <TextContainer>hello</TextContainer>
    </>
  ));

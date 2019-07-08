import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Text from './Text';

storiesOf('Text', module).add('all', () => (
  <>
    <div>
      <Text>Default Size</Text>
    </div>
    <div>
      <Text size="1">Size 1</Text>
    </div>
    <div>
      <Text size="2">Size 2</Text>
    </div>
    <div>
      <Text size="3">Size 3</Text>
    </div>
    <div>
      <Text size="4">Size 4</Text>
    </div>
    <div>
      <Text size="5">Size 5</Text>
    </div>
    <div>
      <Text size="6">Size 6</Text>
    </div>
    <div>
      <Text size="7">Size 7</Text>
    </div>
    <div>
      <Text bold>Bold</Text>
    </div>
    <div>
      <Text>Default</Text>
    </div>
    <div>
      <Text appearance="muted">Muted</Text>
    </div>
    <div>
      <Text appearance="info">Info</Text>
    </div>
    <div>
      <Text appearance="success">Success</Text>
    </div>
    <div>
      <Text appearance="warn">Warn</Text>
    </div>
    <div>
      <Text appearance="danger">Danger</Text>
    </div>
    <div>
      <Text appearance="code">Code</Text>
    </div>
  </>
));

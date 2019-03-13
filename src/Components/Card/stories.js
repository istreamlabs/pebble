import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Card from './Card';

storiesOf('Card', module)
  .add('all', () => (
    <>
      <Card>
        <div>First Child</div>
        <div>Second Child</div>
      </Card>
    </>
  ));

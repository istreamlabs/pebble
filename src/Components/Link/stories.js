import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Link from './Link';

storiesOf('Link', module)
  .add('all', () => (
    <>
      <Link href="#/">link</Link>
    </>
  ));

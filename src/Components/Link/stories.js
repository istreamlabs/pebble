import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Link from './Link';

storiesOf('Link', module)
  .add('all', () => (
    <>
      <p><Link href="/">relative link</Link></p>
      <p><Link href="http://istreamplanet.com">istreamplanet.com</Link></p>
      <Link href="http://istreamplanet.com">
        This content is clickable.
        <div>I'm some block content</div>
        <div>I'm some block content</div>
      </Link>
    </>
  ));

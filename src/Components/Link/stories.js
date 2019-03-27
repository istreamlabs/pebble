import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Link from './Link';
import { BrowserRouter } from 'react-router-dom';

storiesOf('Link', module)
  .add('all', () => (
    <>
      <BrowserRouter>
        <p><Link href="/">relative link</Link></p>
        <p>
          <Link as="a" href="http://istreamplanet.com">
            istreamplanet.com
          </Link>
        </p>
        <Link to="/#/Components/Link" unstyled>Unstyled Link</Link>
      </BrowserRouter>
    </>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import Link from './Link';

storiesOf('Link', module)
  .add('all', () => (
    <DemoBrowserRouter>
      <p><Link to="/#/Components/Link">Link</Link></p>
      <p>
        <Link external href="http://istreamplanet.com" target="_blank">
          istreamplanet.com
        </Link>
      </p>

      <p>
        <Link external href="mailto:support@istreamplanet.com">
          Email Support
        </Link>
      </p>
      <Link to="/#/Components/Link" unstyled>Link</Link>
    </DemoBrowserRouter>
  ));

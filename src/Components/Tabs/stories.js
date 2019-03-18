import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Tabs from './Tabs';

const tabs = [
  {
    id: 'overview',
    content: 'Overview',
    panelID: 'overview-content',
  },
  {
    id: 'catalog',
    content: 'Catalog',
    panelID: 'catalog-content',
  },
  {
    id: 'metadata',
    content: 'Metadata',
    panelID: 'metadata-content',
  },
  {
    id: 'settings',
    content: 'Settings',
    panelID: 'settings-content',
  },
];

storiesOf('Tabs', module)
  .add('all', () => (
    <Tabs tabs={tabs} selectedId="overview" />
  ));

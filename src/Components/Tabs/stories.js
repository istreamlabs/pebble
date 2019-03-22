import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Tabs from './Tabs';

const tabs = [
  {
    id: 'overview',
    label: 'Overview',
    panelId: 'overview-content',
  },
  {
    id: 'metadata',
    label: 'Metadata',
    panelId: 'metadata-content',
  },
  {
    id: 'settings',
    label: 'Settings',
    panelId: 'settings-content',
  },
];

function TabsExample() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedFWTab, setSelectedFWTab] = useState('overview');
  const [selectedSmallTab, setSelectedSmallTab] = useState('');
  return (
    <>
      <Tabs
        tabs={tabs}
        selectedId={selectedTab}
        onSelect={setSelectedTab}
        className="mb-5"
      >
        <div className="w-100 bg-white p-5">
          Content for
          {' '}
          {selectedTab}
        </div>
      </Tabs>

      <Tabs
        tabs={tabs}
        selectedId={selectedFWTab}
        onSelect={setSelectedFWTab}
        fullWidth
      />

      <Tabs
        size="small"
        tabs={tabs}
        selectedId={selectedSmallTab}
        onSelect={setSelectedSmallTab}
      />
    </>
  );
}

storiesOf('Tabs', module)
  .add('all', () => (
    <>
      <TabsExample />
    </>
  ));

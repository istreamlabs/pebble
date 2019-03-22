import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Tabs from './Tabs';
import TabPanel from './Components/TabPanel';

const tabData = [
  {
    id: 'one',
    label: 'One',
    panelId: 'one-content',
    content: 'one content'
  },
  {
    id: 'two',
    label: 'Two',
    panelId: 'two-content',
    content: 'two content'
  },
  {
    id: 'three',
    label: 'Three',
    panelId: 'three-content',
    content: 'three content'
  },
  {
    id: 'disabled',
    label: 'Disabled',
    panelId: 'disabled-content',
    content: 'disabled content',
    disabled: true
  },
];

function TabsExample() {
  const [selectedSmallTab, setSelectedSmallTab] = useState('one');
  const [selectedTab, setSelectedTab] = useState('one');
  const [selectedLargeTab, setSelectedLargeTab] = useState('');
  const [selectedFWTab, setSelectedFWTab] = useState('one');
  const [selectedPanelTab, setSelectedPanelTab] = useState('panel-1-tab');
  return (
    <>
      <Tabs
        size="small"
        tabs={tabData}
        selectedId={selectedSmallTab}
        onSelect={setSelectedSmallTab}
        className="mb-6"
      />

      <Tabs
        tabs={tabData}
        selectedId={selectedTab}
        onSelect={setSelectedTab}
        className="mb-6"
      />

      <Tabs
        size="large"
        tabs={tabData}
        selectedId={selectedLargeTab}
        onSelect={setSelectedLargeTab}
        className="mb-6"
      />

      <Tabs
        tabs={tabData}
        selectedId={selectedFWTab}
        onSelect={setSelectedFWTab}
        fullWidth
        className="mb-6"
      />

      <Tabs
        selectedId={selectedPanelTab}
        onSelect={setSelectedPanelTab}
        className="mb-6"
      >
        <TabPanel id="panel-1" background="white" label="Panel 1" tabId="panel-1-tab" padding="4">Panel 1 Content</TabPanel>
        <TabPanel id="panel-2" background="white" label="Panel 2" tabId="panel-2-tab" padding="4">Panel 2 Content</TabPanel>
        <TabPanel id="panel-3" background="white" label="Panel 3" tabId="panel-3-tab" padding="4">Panel 3 Content</TabPanel>
      </Tabs>
    </>
  );
}

storiesOf('Tabs', module)
  .add('all', () => (
    <>
      <TabsExample />
    </>
  ));

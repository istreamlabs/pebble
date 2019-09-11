import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Tabs from './Tabs';
import TabPanel from './Components/TabPanel';
import Badge from '../Badge/Badge';

const tabData = [
  {
    id: 'one',
    label: 'One',
    panelId: 'one-content',
    content: 'one content',
  },
  {
    id: 'two',
    label: 'Two',
    panelId: 'two-content',
    content: 'two content',
  },
  {
    id: 'three',
    label: 'Three',
    panelId: 'three-content',
    content: 'three content',
  },
  {
    id: 'four',
    label: 'Four',
    panelId: 'four-content',
    content: 'four content',
  },
  {
    id: 'five',
    label: 'Five',
    panelId: 'five-content',
    content: 'five content',
  },
  {
    id: 'six',
    label: '6 Label',
    panelId: 'six-content',
    content: 'six content',
  },
  {
    id: 'disabled',
    label: 'Disabled',
    panelId: 'disabled-content',
    content: 'disabled content',
    disabled: true,
  },
  {
    id: 'seven',
    label: 'Seven',
    panelId: 'seven-content',
    content: 'seven content',
  },
];

function TabsExample() {
  const [selectedSmallTab, setSelectedSmallTab] = useState('one');
  const [selectedTab, setSelectedTab] = useState('one');
  const [selectedLargeTab, setSelectedLargeTab] = useState('');
  const [selectedFWTab, setSelectedFWTab] = useState('one');
  const [selectedPanelTab, setSelectedPanelTab] = useState(
    'panel-1-tab',
  );
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
        paddingHorizontal={[0, 4, 5]}
      >
        <TabPanel
          id="panel-1"
          background="white"
          label="Panel 1"
          tabId="panel-1-tab"
          paddingVertical="4"
          paddingHorizontal={[3, 4, 5]}
        >
          Panel 1 Content
        </TabPanel>
        <TabPanel
          id="panel-2"
          background="white"
          label={
            <>
              Alerts <Badge type="danger">3</Badge>
            </>
          }
          tabId="panel-2-tab"
          paddingVertical="4"
          paddingHorizontal={[3, 4, 5]}
        >
          Panel 2 Content
        </TabPanel>
        <TabPanel
          id="panel-3"
          background="white"
          label="Panel 3"
          tabId="panel-3-tab"
          paddingVertical="4"
          paddingHorizontal={[3, 4, 5]}
        >
          Panel 3 Content
        </TabPanel>
      </Tabs>
    </>
  );
}

storiesOf('Tabs', module).add('all', () => (
  <>
    <TabsExample />
  </>
));

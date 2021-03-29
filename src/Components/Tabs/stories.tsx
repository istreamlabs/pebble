// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Tabs' was resolved to '/Users/esjaastad/... Remove this comment to see the full error message
import Tabs from './Tabs';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/TabPanel' was resolved to '/U... Remove this comment to see the full error message
import TabPanel from './Components/TabPanel';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Badge/Badge' was resolved to '/Users/es... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Tabs
        size="small"
        tabs={tabData}
        selectedId={selectedSmallTab}
        onSelect={setSelectedSmallTab}
        className="mb-6"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Tabs
        tabs={tabData}
        selectedId={selectedTab}
        onSelect={setSelectedTab}
        className="mb-6"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Tabs
        size="large"
        tabs={tabData}
        selectedId={selectedLargeTab}
        onSelect={setSelectedLargeTab}
        className="mb-6"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Tabs
        tabs={tabData}
        selectedId={selectedFWTab}
        onSelect={setSelectedFWTab}
        fullWidth
        className="mb-6"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Tabs
        selectedId={selectedPanelTab}
        onSelect={setSelectedPanelTab}
        paddingHorizontal={[0, 4, 5]}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TabPanel
          id="panel-1"
          background="white"
          label="Panel 1"
          tabId="panel-1-tab"
          padding={['4 3', '4', '4 5']}
        >
          Panel 1 Content
        </TabPanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TabPanel
          id="panel-2"
          background="white"
          label={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              Alerts <Badge type="danger">3</Badge>
            </>
          }
          padding={['4 3', '4', '4 5']}
          tabId="panel-2-tab"
        >
          Panel 2 Content
        </TabPanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TabPanel
          id="panel-3"
          background="white"
          label="Panel 3"
          padding={['4 3', '4', '4 5']}
          tabId="panel-3-tab"
        >
          Panel 3 Content
        </TabPanel>
      </Tabs>
    </>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('Tabs', module).add('all', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <TabsExample />
  </>
));

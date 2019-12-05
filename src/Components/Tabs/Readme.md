### Sizes

Three sizes are available to suite your application.

```js
import { useState } from 'react';
import Tabs from './Tabs';

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
    id: 'disabled',
    label: 'Disabled',
    panelId: 'disabled-content',
    content: 'disabled content',
    disabled: true,
  },
];

function TabsExample() {
  const [selectedSmallTab, setSelectedSmallTab] = useState('one');
  const [selectedTab, setSelectedTab] = useState('one');
  const [selectedLargeTab, setSelectedLargeTab] = useState('');
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
    </>
  );
}
<TabsExample />;
```

### Full Width

The width of each tab will be equally distributed to fill the full width of the parent container.

```js
import Tabs from './Tabs';
const tabData = [
  {
    id: 'one',
    label: 'One',
    panelId: 'one-content',
  },
  {
    id: 'two',
    label: 'Two',
    panelId: 'two-content',
  },
  {
    id: 'three',
    label: 'Three',
    panelId: 'three-content',
  },
  {
    id: 'disabled',
    label: 'Disabled',
    panelId: 'disabled-content',
    disabled: true,
  },
];

<Tabs
  tabs={tabData}
  fullWidth
  onSelect={() => {}}
  className="mb-6"
/>;
```

### Tab Panels

TabPanel is a child component of Tabs meant to be an easy way to create a Tab and its associated content. Apply any props available in [Block](/#/Components/Block), as TabPanel is just a wrapper for that

```js
import { useState } from 'react';

import TabPanel from './Components/TabPanel';

import Badge from '../Badge/Badge';

function TabExample() {
  const [selectedPanelTab, setSelectedPanelTab] = useState(
    'panel-1-tab',
  );

  return (
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
        padding={['4 3', '4', '4 5']}
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
        padding={['4 3', '4', '4 5']}
      >
        Panel 2 Content
      </TabPanel>
      <TabPanel
        id="panel-3"
        background="white"
        label="Panel 3"
        tabId="panel-3-tab"
        padding={['4 3', '4', '4 5']}
      >
        Panel 3 Content
      </TabPanel>
    </Tabs>
  );
}
<TabExample />;
```

### Overflow

Tabs scroll horizontally when they overflow the viewport or containing div. Resize the browser window (narrower) to see the behavior.

```jsx
import Tabs from './Tabs';
const tabData = [
  {
    id: '1',
    label: 'Configuration',
    panelId: 'one-content',
  },
  {
    id: '2',
    label: 'Metadata',
    panelId: 'two-content',
  },
  {
    id: '3',
    label: 'Availability',
    panelId: 'three-content',
  },
  {
    id: '4',
    label: 'Activity',
    panelId: 'three-content',
  },
  {
    id: '5',
    label: 'Uptime',
    panelId: 'three-content',
  },
];

<Tabs
  size="large"
  tabs={tabData}
  onSelect={() => {}}
  className="mb-6"
/>;
```

## Best Practices

Tabs should:

- Not be used for primary navigation
- Have one active tab at a time
- Content between tabs should not be dependant on each other

```js

import { useState } from 'react';

import Tabs from './Tabs';
import TabPanel from './Components/TabPanel';

function TabExample() {
  const [selectedTabPanel, setSelectedTabPanel] = useState('');

  return (
    <Tabs
      selectedId={selectedTabPanel}
      onSelect={setSelectedTabPanel}
    >
      <TabPanel id="panel-1" background="white" label="Panel 1" tabId="panel-1-tab" padding="4">
        Panel 1 Content
      </TabPanel>
      <TabPanel id="panel-2" background="white" label="Panel 2" tabId="panel-2-tab" padding="4">
        Panel 2 Content
      </TabPanel>
      <TabPanel id="panel-3" background="white" label="Panel 3" tabId="panel-3-tab" padding="4">
        Panel 3 Content
      </TabPanel>
    </Tabs>
  )
}
<TabExample/>

```

### Sizes

```js
import { useState } from 'react';
import Tabs from './Tabs';

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
  const [selectedLargeTab, setSelectedLargeTab] = useState('');;
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
<TabsExample />
```

### Full Width

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
    disabled: true
  },
];

<Tabs
  tabs={tabData}
  fullWidth
  onSelect={() => {}}
  className="mb-6"
/>
```


## Best Practices

Tabs should:

* Not be used for primary navigation
* Have one active tab at a time
* Content between tabs should not be dependant on each other

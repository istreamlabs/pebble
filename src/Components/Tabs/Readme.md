```js

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

<Tabs tabs={tabs} selected="all-customers" />
```
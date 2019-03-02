```js

const tabs = [
  {
    id: 'all-customers',
    content: 'All',
    panelID: 'all-customers-content',
  },
  {
    id: 'accepts-marketing',
    content: 'Accepts marketing',
    panelID: 'accepts-marketing-content',
  },
  {
    id: 'repeat-customers',
    content: 'Repeat customers',
    panelID: 'repeat-customers-content',
  },
  {
    id: 'prospects',
    content: 'Prospects',
    panelID: 'prospects-content',
  },
];

<Tabs tabs={tabs} selected="all-customers" />
```
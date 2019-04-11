### Example


```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Block from '../Block/Block';
import MainMenu from '../MainMenu/MainMenu';

const TENANT_NAME = 'Frame Example';

const MENU = [
  {
    label: 'Link',
    href: '/#/Components/MainMenu',
    icon: 'dashboard'
  },
  {
    label: 'Subs Only',
    icon: 'player',
    items: [
      {
        label: 'Sub-item 1',
        href: '/#/Components/MainMenu',
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
      },
      {
        label: 'Sub-item 3',
        href: '/#/Components/MainMenu',
      }
    ]
  },
  {
    label: 'Link & Sub',
    href: '/#/Components/MainMenu',
    items: [
      {
        label: 'Sub-item 1',
        href: '/#/Components/MainMenu',
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
      },
    ]
  },
];

class FrameExample extends React.Component {
  constructor() {
    super()
  }

  mainNavigationToggled(isOpen) {
    console.log(`menu has been toggled to a ${isOpen ? 'Expanded': 'Collapsed'} state.`)
  }

  render() {
    const mainMenu = (
      <MainMenu
        title={TENANT_NAME}
        menu={MENU}
      />
    );

    const bodyContent = (
      <Block background="blue-lighter" flex direction="column" height="100%" padding="6">
        Main Content goes here
      </Block>
    );

    return (
      <DemoBrowserRouter>
        <Frame
          navigation={mainMenu}
          onNavigationToggle={this.mainNavigationToggled}
          tenantName={TENANT_NAME}
          title={TENANT_NAME}
        >
          {bodyContent}
        </Frame>
      </DemoBrowserRouter>
    )
  }
}

<div style={{ height: '400px', overflow: 'auto' }}>
  <FrameExample />
</div>
```

### Example


```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Block from '../Block/Block';
import MainMenu from '../MainMenu/MainMenu';

const TENANT_NAME = 'Frame Example';

const MENU = [
  {
    id: '1',
    label: 'Link',
    description: 'Links to a page',
    href: '/#/Components/MainMenu',
    icon: 'dashboard'
  },
  {
    id: '2',
    label: 'Subs Only',
    description: 'Does not link to a page but has sub-items',
    icon: 'player',
    items: [
      {
        id: '2a',
        label: 'Sub-item 1',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '2b',
        label: 'Sub-item 2',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '2c',
        label: 'Sub-item 3',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      }
    ]
  },
  {
    id: '3',
    label: 'Link & Sub',
    description: 'Links to a page and has sub-items',
    icon: 'settings',
    href: '/#/Components/MainMenu',
    items: [
      {
        id: '3a',
        label: 'Sub-item 1',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '3b',
        label: 'Sub-item 2',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
    ]
  },
];

class FrameExample extends React.Component {
  constructor() {
    super()
    this.state = {
      activeMainMenuItem: "1",
      showMobileNavigation: false
    };
    this.toggleMainNav = this.toggleMainNav.bind(this)
  }

  toggleMainNav() {
    this.setState((prevState, props) => ({
      showMobileNavigation: !prevState.showMobileNavigation
    }))
  }

  render() {
    const {
      activeMainMenuItem,
      showMobileNavigation
    } = this.state;

    const mainMenu = (
      <MainMenu
        title={TENANT_NAME}
        menu={MENU}
        activeItem={activeMainMenuItem}
        showMobileNavigation={showMobileNavigation}
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
          isShowingMobileNav={showMobileNavigation}
          navigation={mainMenu}
          onNavigationToggle={this.toggleMainNav}
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

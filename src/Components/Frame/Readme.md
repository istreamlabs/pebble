### Example


```js
import { useState } from 'react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Block from '../Block/Block';
import Button from '../Button/Button';
import MainMenu from '../MainMenu/MainMenu';
import Modal from '../Modal/Modal';

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

function FrameExample() {
  const [showModal, setShowModal] = useState(false);

  const mainNavigationToggled = (isOpen) => {
    console.log(`menu has been toggled to a ${isOpen ? 'Expanded': 'Collapsed'} state.`)
  }

  const mainMenu = (
    <MainMenu
      title={TENANT_NAME}
      menu={MENU}
    />
  )

  const demoModal = (
    <Modal
      title="Demo Modal"
      onRequestClose={() => setShowModal(!showModal)}
      showing={showModal}
      footer={[
        <Button primary onClick={() => setShowModal(!showModal)}>Save</Button>,
        <Button onClick={() => setShowModal(!showModal)}>Cancel</Button>
      ]}
    >
      I am a demo modal
    </Modal>
  );

  return (
    <DemoBrowserRouter>
      <Frame
        navigation={mainMenu}
        onNavigationToggle={this.mainNavigationToggled}
        tenantName={TENANT_NAME}
        title={TENANT_NAME}
      >
        {showModal && demoModal}
        <Block background="blue-lighter" alignItems="start" flex direction="column" height="100%" padding="6">
          <p>Main Content goes here</p>
          <Button onClick={() => setShowModal(!showModal)}>Open Modal</Button>
        </Block>
      </Frame>
    </DemoBrowserRouter>
  )
}

<div style={{ height: '400px', overflow: 'auto' }}>
  <FrameExample />
</div>
```

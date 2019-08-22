### Example

```js
import { useState } from 'react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Block from '../Block/Block';
import Button from '../Button/Button';
import MainMenu from '../MainMenu/MainMenu';
import Modal from '../Modal/Modal';
import { useToast } from '../../Hooks';

import { TENANTS } from '../../demo/data';

const MENU = [
  {
    label: 'Link',
    href: '/#/Components/MainMenu',
    icon: 'dashboard',
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
      },
    ],
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
    ],
  },
];

function FrameExample() {
  const [showModal, setShowModal] = useState(false);

  const toast = useToast();

  const mainNavigationToggled = isOpen => {
    console.log(
      `menu has been toggled to a ${
        isOpen ? 'Expanded' : 'Collapsed'
      } state.`,
    );
  };

  const mainMenu = <MainMenu menu={MENU} />;

  const demoModal = (
    <Modal
      title="Demo Modal"
      onRequestClose={() => setShowModal(!showModal)}
      showing={showModal}
      footer={[
        <Button primary onClick={() => setShowModal(!showModal)}>
          Save
        </Button>,
        <Button onClick={() => setShowModal(!showModal)}>
          Cancel
        </Button>,
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
        tenants={TENANTS}
        currentTenant={{
          name: 'Cyberdyne Systems',
          id: 'cyberdyne-prod',
          realm: 'production',
          url: 'https://www.istreamplanet.com',
        }}
      >
        {showModal && demoModal}
        <Block
          background="blue-lighter"
          alignItems="start"
          flex
          direction="column"
          height="100%"
          padding="6"
          itemSpacing="3"
        >
          <p>Main Content goes here</p>
          <p>
            <Button onClick={() => setShowModal(!showModal)}>
              Open Modal
            </Button>
          </p>
          <p>
            <Button
              onClick={() => {
                toast({
                  title: 'Product Saved',
                  type: 'success',
                });
              }}
            >
              Show Toast
            </Button>
          </p>
        </Block>
      </Frame>
    </DemoBrowserRouter>
  );
}

<div style={{ height: '400px', overflow: 'auto' }}>
  <FrameExample />
</div>;
```

## Examples

## Multiple Containers

The Frame component automatically includes a ToastContainer, but if you are not using the Frame component, or want to display a Toast in a position other than the upper right, then include a ToastContainer in your layout.

```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Block from '../Block/Block';
import Button from '../Button/Button';
import MainMenu from '../MainMenu/MainMenu';
import Frame from '../Frame/Frame';
import { useToast } from '../../Hooks';

const TENANT_NAME = 'Frame Example';

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
  const toast = useToast();

  const mainMenu = <MainMenu title={TENANT_NAME} menu={MENU} />;

  return (
    <DemoBrowserRouter>
      <ToastContainer
        enableMultiContainer
        position="top-center"
        containerId="middle"
      />
      <Frame
        navigation={mainMenu}
        tenantName={TENANT_NAME}
        title={TENANT_NAME}
      >
        <Block
          background="blue-lighter"
          alignItems="start"
          flex
          direction="column"
          height="100%"
          padding="6"
          itemSpacing="3"
        >
          <p>
            <Button
              onClick={() => {
                toast({
                  title: "I'm in the center",
                  type: 'success',
                  containerId: 'middle',
                });
              }}
            >
              Use Center Container
            </Button>
          </p>

          <p>
            <Button
              onClick={() => {
                toast({
                  title: "I'm in the default",
                  type: 'success',
                });
              }}
            >
              Use default Container
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

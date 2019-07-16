## Examples

### Basic Dropdown

```jsx
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
import DropdownItem from './Components/DropdownItem';
import DropdownMenuSeparator from './Components/DropdownMenuSeparator';

import Block from '../Block/Block';

function handleOpen() {
  console.log('open');
}

function handleClose() {
  console.log('close');
}

function handleItemClick() {
  console.log('item clicked');
}
<DemoBrowserRouter>
  <DropdownMenu
    toggle="Dropdown"
    onOpen={handleOpen}
    onClose={handleClose}
    overlayClassName="w5"
  >
    <DropdownItem icon="add-bold" onClick={handleItemClick}>
      default button
    </DropdownItem>
    <DropdownItem href="/#/Introduction">
      Anchor link to homepage
    </DropdownItem>
    <DropdownMenuSeparator />
    <DropdownItem
      danger
      icon="remove-circle"
      onClick={handleItemClick}
    >
      danger button
    </DropdownItem>
  </DropdownMenu>
</DemoBrowserRouter>;
```

### Sizes

Change the size of the default toggle button. The `size` value does not impact the overlay menu.

```jsx
import DropdownItem from './Components/DropdownItem';

<>
  <DropdownMenu size="small" toggle="small">
    <DropdownItem>item</DropdownItem>
  </DropdownMenu>{' '}
  <DropdownMenu size="medium" toggle="medium">
    <DropdownItem>item</DropdownItem>
  </DropdownMenu>{' '}
  <DropdownMenu size="large" toggle="large">
    <DropdownItem>item</DropdownItem>
  </DropdownMenu>
</>;
```

### Overlay Menu Placement

Pass a placement prop to set where the overlay menu should appear relative to the toggle.

```jsx
import DropdownItem from './Components/DropdownItem';
import Block from '../Block/Block';

<Block justify="between">
  <DropdownMenu toggle="bottom-end placement" placement="bottom-end">
    <DropdownItem>item</DropdownItem>
  </DropdownMenu>
</Block>;
```

### Full width

Use for dropdowns placed in a narrow column.

```jsx
import DropdownItem from './Components/DropdownItem';

<DropdownMenu fullWidth toggle="medium">
  <DropdownItem>item</DropdownItem>
</DropdownMenu>;
```

### Dropdown Item Groups

```jsx
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
import DropdownItem from './Components/DropdownItem';
import DropdownItemGroup from './Components/DropdownItemGroup';
import DropdownMenuSeparator from './Components/DropdownMenuSeparator';
import Block from '../Block/Block';

<DemoBrowserRouter>
  <DropdownMenu toggle="Dropdown with Item Groups">
    <DropdownItemGroup title="Transcoder">
      <DropdownItem icon="play">start</DropdownItem>
      <DropdownItem icon="stop">stop</DropdownItem>
      <DropdownItem icon="refresh">restart</DropdownItem>
      <DropdownItem disabled>disabled</DropdownItem>
    </DropdownItemGroup>
    <DropdownItemGroup title="Components">
      <DropdownItem href="#/Components/Button">Button</DropdownItem>
      <DropdownItem href="#/Components/Frame">Frame</DropdownItem>
      <DropdownItem href="#/Components/Text">Text</DropdownItem>
    </DropdownItemGroup>
  </DropdownMenu>
</DemoBrowserRouter>;
```

### Custom Trigger and Classes

Pass a node as the `trigger` to allow it to open and close a dropdown menu when clicked.

```jsx
import DropdownItem from './Components/DropdownItem';
import DropdownMenuSeparator from './Components/DropdownMenuSeparator';
import Button from '../Button/Button';

<DropdownMenu
  toggle={
    <Button size="large" plain className="bg-transparent">
      custom trigger
    </Button>
  }
  className="bg-blue-lighter p-4"
  overlayClassName="bg-black-90"
>
  <DropdownItem className="neutral-100">item 1</DropdownItem>
  <DropdownItem className="neutral-100">item 2</DropdownItem>
</DropdownMenu>;
```

### Disabled

```jsx
import DropdownItem from './Components/DropdownItem';
import DropdownMenuSeparator from './Components/DropdownMenuSeparator';

<DropdownMenu toggle="Disabled Dropdown" disabled>
  <DropdownItem>disabled</DropdownItem>
  <DropdownItem>disabled</DropdownItem>
</DropdownMenu>;
```

### External Links

To make an item within the DropdownMenu link to an external link, add the `external` prop to the `<DropdownItem>`.

```jsx
import DropdownItem from './Components/DropdownItem';
<DropdownMenu toggle="External Link">
  <DropdownItem external href="https://www.istreamplanet.com">
    www.istreamplanet.com
  </DropdownItem>
</DropdownMenu>;
```

## Best Practices

DropdownMenus should:

- Be triggered by a clearly labeled button that allows for keyboard navigation.
- Contain items that are related.
- Be used as a way to de-clutter UI if there are too many options.
- Should typically contain no more than 15 items.

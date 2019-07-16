## Examples

```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
import Button from '../Button/Button';
import LinkButton from '../LinkButton/LinkButton';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';

<DemoBrowserRouter>
  <ButtonGroup>
    <Button primary>publish</Button>
    <Button>cancel</Button>
    <LinkButton href="/#/Components/ButtonGroup">LinkButton</LinkButton>
    <DropdownMenu toggle="dropdown">
      <DropdownItem>button</DropdownItem>
      <DropdownItem href="/">link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
</DemoBrowserRouter>
```

### Group Size

Apply a `size` to all items within the group. Default `size` is `medium`.

```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
import Button from '../Button/Button';
import LinkButton from '../LinkButton/LinkButton';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';

<DemoBrowserRouter>
  <ButtonGroup size="large" className="mb-3">
    <Button>button</Button>
    <LinkButton href="/#/Components/ButtonGroup">link</LinkButton>
    <DropdownMenu toggle="dropdown">
      <DropdownItem>button</DropdownItem>
      <DropdownItem href="/#/Components/ButtonGroup">link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>

  <ButtonGroup className="mb-3">
    <Button>button</Button>
    <LinkButton href="/#/Components/ButtonGroup">link</LinkButton>
    <DropdownMenu toggle="dropdown">
      <DropdownItem>button</DropdownItem>
      <DropdownItem href="/#/Components/ButtonGroup">link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>

  <ButtonGroup size="small">
    <Button>button</Button>
    <LinkButton href="/#/Components/ButtonGroup">link</LinkButton>
    <DropdownMenu toggle="dropdown">
      <DropdownItem>button</DropdownItem>
      <DropdownItem href="/#/Components/ButtonGroup">link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
</DemoBrowserRouter>
```

### Toolbar

Display related buttons in a horizontal toolbar.

```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
import Button from '../Button/Button';
import LinkButton from '../LinkButton/LinkButton';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';

<DemoBrowserRouter>
  <ButtonGroup toolbar className="mb-4">
    <Button>button</Button>
    <Button primary>primary</Button>
    <Button primary danger>primary danger</Button>
    <Button danger>danger</Button>
    <LinkButton href="/#/Components/ButtonGroup">link</LinkButton>
    <DropdownMenu toggle="dropdown">
      <DropdownItem>button</DropdownItem>
      <DropdownItem href="/#/Components/ButtonGroup">link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>

  <ButtonGroup toolbar className="mb-4">
    <Button icon="arrow-small-left">prev</Button>
    <Button icon="play">play</Button>
    <Button icon="stop">stop</Button>
    <Button iconAfterText="arrow-small-right">next</Button>
  </ButtonGroup>

  <ButtonGroup toolbar size="small">
    <Button icon="arrow-small-left">prev</Button>
    <Button icon="play">play</Button>
    <Button icon="stop">stop</Button>
    <Button iconAfterText="arrow-small-right">next</Button>
    <DropdownMenu toggle="dropdown">
      <DropdownItem>button</DropdownItem>
      <DropdownItem href="/">link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
</DemoBrowserRouter>
```

### Full Width

Make the group of buttons take up 100% of its parent width. Button widths are evenly divided.

```js
import Button from '../Button/Button';
import LinkButton from '../LinkButton/LinkButton';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';

<>
  <ButtonGroup fullWidth className="mb-4">
    <Button primary>left</Button>
    <Button>center</Button>
    <Button>right</Button>
    <DropdownMenu toggle="dropdown">
      <DropdownItem>button</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>

  <ButtonGroup fullWidth toolbar>
    <Button icon="arrow-small-left">prev</Button>
    <Button icon="play">play</Button>
    <Button icon="stop">stop</Button>
    <Button iconAfterText="arrow-small-right">next</Button>
  </ButtonGroup>
</>
```

## Best Practices

Button Groups should:

* Contain [Buttons](/#/Components/Button) or [DropdownMenu](/#/Components/DropdownMenu)
* Can occasionally contain [LinkButtons](/#/Components/LinkButton)
* Only group buttons that have a relationship
* Contain only a limited number of buttons. Be judicious in the number of items in a button group

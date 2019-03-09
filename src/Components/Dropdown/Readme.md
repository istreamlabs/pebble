## Examples

```jsx

function handleOpen() {
  console.log('open');
}

function handleClose() {
  console.log('close');
}

function handleItemClick() {
  console.log('item clicked');
}

const BlockTrigger = (<Block padding="3" background="neutral-400">Block Trigger</Block>);

<Dropdown trigger="Basic Dropdown" onOpen={handleOpen} onClose={handleClose}>
  <DropdownItem icon="add-circle" onClick={handleItemClick}>Button that calls handleItemClick()</DropdownItem>
  <DropdownItem href="/#/Components/Dropdown">Link to the Dropdown</DropdownItem>
</Dropdown>
```


### Dropdown Item Groups

```jsx

const BlockTrigger = (<Block padding="3" background="neutral-400">Block Trigger</Block>);

<Dropdown trigger="Dropdown with Item Groups">
  <DropdownItemGroup title="Transcoder">
    <DropdownItem icon="play">start</DropdownItem>
    <DropdownItem icon="stop">stop</DropdownItem>
    <DropdownItem icon="refresh">restart</DropdownItem>
  </DropdownItemGroup>
  <DropdownItemGroup title="Components">
    <DropdownItem href="#/Components/Button">Button</DropdownItem>
    <DropdownItem href="#/Components/Frame">Frame</DropdownItem>
    <DropdownItem href="#/Components/Text">Text</DropdownItem>
  </DropdownItemGroup>
</Dropdown>
```
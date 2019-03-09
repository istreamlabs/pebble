## Examples

### Basic Dropdown

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

<DropdownMenu trigger="Dropdown" onOpen={handleOpen} onClose={handleClose}>
  <DropdownItem icon="add-circle" onClick={handleItemClick}>Button</DropdownItem>
  <DropdownItem href="/">Link</DropdownItem>
</DropdownMenu>
```

### Dropdown Item Groups

```jsx

const BlockTrigger = (<Block padding="3" background="neutral-400">Block Trigger</Block>);

<DropdownMenu trigger="Dropdown with Item Groups">
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
```

### Disabled

```jsx
<DropdownMenu trigger="Disabled Dropdown" disabled>
  <DropdownItem>disabled</DropdownItem>
  <DropdownItem>disabled</DropdownItem>
</DropdownMenu>

```


## Best Practices

DropdownMenus should:

* Be triggered by a clearly labeled button that allows for keyboard navigation.
* Contain items that are related.
* Be used as a way to declutter UI if there are too many options.
* Should typically contain no more than 15 items. 
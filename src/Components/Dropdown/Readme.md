## Examples

```jsx

const overlay = (
  <Block width="250px" padding="3" background="white">
    Overlay Contents
  </Block>
);

function handleOpen() {
  console.log('open');
}

function handleClose() {
  console.log('close');
}

<>
<Dropdown overlay={overlay} onOpen={handleOpen} onClose={handleClose}>
  <Button icon="arrow-small-down" iconAfterText>click me</Button>
</Dropdown>

<div>
<Dropdown overlay={overlay} onOpen={handleOpen} onClose={handleClose}>
  <div>i'm a div that can be clicked</div>
</Dropdown>
</div>
</>
```
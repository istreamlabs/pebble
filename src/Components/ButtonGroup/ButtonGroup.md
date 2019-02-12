## Examples

```js

<ButtonGroup>
  <Button primary>publish</Button>
  <Button>cancel</Button>
  <LinkButton href="#">LinkButton</LinkButton>
</ButtonGroup>
```

### Group Size

Apply a `size` to all buttons in the group

```js

<ButtonGroup size="large">
  <Button primary>publish</Button>
  <Button>cancel</Button>
</ButtonGroup>
```

### Toolbar

Display related buttons in a horizontal toolbar.

```js
<ButtonGroup toolbar>
  <Button primary>save</Button>
  <Button>status</Button>
  <Button>genre</Button>
  <Button>rating</Button>
  <LinkButton href="#">LinkButton</LinkButton>
  <Button disabled>disabled</Button>
  <Button primary danger>delete</Button>
</ButtonGroup>
```

### Full Width

Make the group of buttons take up 100% of its parent width. Button widths are evenly divided.

```js
<ButtonGroup fullWidth toolbar>
  <Button primary>left</Button>
  <Button>center</Button>
  <Button>right</Button>
</ButtonGroup>
```
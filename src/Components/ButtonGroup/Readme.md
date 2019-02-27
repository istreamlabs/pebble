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
<ButtonGroup toolbar className="mb-4">
  <Button primary>save</Button>
  <Button>status</Button>
  <Button>rating</Button>
  <LinkButton href="#">LinkButton</LinkButton>
  <Button disabled>disabled</Button>
  <Button primary danger>delete</Button>
</ButtonGroup>

<ButtonGroup toolbar>
  <Button icon="arrow-small-left">prev</Button>
  <Button icon="play">play</Button>
  <Button icon="stop">stop</Button>
  <Button icon="arrow-small-right" iconAfterText>next</Button>
</ButtonGroup>
```

### Full Width

Make the group of buttons take up 100% of its parent width. Button widths are evenly divided.

```js
<ButtonGroup fullWidth toolbar className="mb-4">
  <Button primary>left</Button>
  <Button>center</Button>
  <Button>right</Button>
</ButtonGroup>

<ButtonGroup fullWidth toolbar>
  <Button icon="arrow-small-left">prev</Button>
  <Button icon="play">play</Button>
  <Button icon="stop">stop</Button>
  <Button icon="arrow-small-right" iconAfterText>next</Button>
</ButtonGroup>
```

## Best Practices

Button Groups should:

* Contain [Buttons](/#/Components/Button)
* Only group buttons that have a relationship
* Contain only a limited number of buttons. Be judicious in the number of items in a button group
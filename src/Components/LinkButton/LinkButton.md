## Examples

```js
<div class="styleguide__buttons">
  <LinkButton href="#">default</LinkButton>
  <LinkButton href="#" primary>primary</LinkButton>
  <LinkButton href="#" danger>danger</LinkButton>
  <LinkButton href="#" primary danger>primary danger</LinkButton>
</div>
```

### Size

```js
<div class="styleguide__buttons">
  <LinkButton href="#small" size="small">small</LinkButton>
  <LinkButton href="#medium">medium</LinkButton>
  <LinkButton href="#large" size="large">large</LinkButton>
</div>
```

### Additional ClassNames

Pass a `className` containing custom css to apply them in addition to the default button styles.

```js
<LinkButton href="#" className="myCustomClass">my button</LinkButton>
```

### Disabled

Use for links that aren’t currently available. The surrounding interface should make it clear why the link is disabled and what needs to be done to enable it.

```js
<div class="styleguide__buttons">
  <LinkButton href="#" disabled>default</LinkButton>
  <LinkButton href="#" disabled primary>primary</LinkButton>
  <LinkButton href="#" disabled danger>danger</LinkButton>
  <LinkButton href="#" disabled primary danger>primary danger</LinkButton>
</div>
```

### Full Width

Use for links placed in a narrow column.

```js
<LinkButton href="#" fullWidth primary>full width</LinkButton>

```

## Examples

```js
<div class="styleguide__buttons">
  <LinkButton href="/#/Components/LinkButton">default</LinkButton>
  <LinkButton href="/#/Components/LinkButton" primary>primary</LinkButton>
  <LinkButton href="/#/Components/LinkButton" danger>danger</LinkButton>
  <LinkButton href="/#/Components/LinkButton" primary danger>primary danger</LinkButton>
</div>
```

### Size

```js
<div class="styleguide__buttons">
  <LinkButton href="/#/Components/LinkButton" size="small">small</LinkButton>
  <LinkButton href="/#/Components/LinkButton">medium</LinkButton>
  <LinkButton href="/#/Components/LinkButton" size="large">large</LinkButton>
</div>
```

### Icon and Text

```js
<div className="styleguide__buttons">
  <LinkButton href="/#/Components/LinkButton" primary size="small" icon="add-circle">small</LinkButton>
  <LinkButton href="/#/Components/LinkButton" primary icon="add-circle">medium</LinkButton>
  <LinkButton href="/#/Components/LinkButton" primary size="large" icon="add-circle">large</LinkButton>
</div>
```

### Icon Positioning

Icons can be placed on either side of the button label to meet your usecase.

```js
<div className="styleguide__buttons">
  <LinkButton href="/#/Components/LinkButton" icon="arrow-small-left">prev</LinkButton>
  <LinkButton href="/#/Components/LinkButton" icon="arrow-small-right" iconAfterText>next</LinkButton>
</div>
```

### Additional ClassNames

Pass a `className` containing custom css to apply them in addition to the default button styles.

```js
<LinkButton href="/#/Components/LinkButton" className="myCustomClass">my button</LinkButton>
```

### Disabled

Use for links that aren’t currently available. The surrounding interface should make it clear why the link is disabled and what needs to be done to enable it.

```js
<div class="styleguide__buttons">
  <LinkButton href="/#/Components/LinkButton" disabled>default</LinkButton>
  <LinkButton href="/#/Components/LinkButton" disabled primary>primary</LinkButton>
  <LinkButton href="/#/Components/LinkButton" disabled danger>danger</LinkButton>
  <LinkButton href="/#/Components/LinkButton" disabled primary danger>primary danger</LinkButton>
</div>
```

### Full Width

Use for links placed in a narrow column.

```js
<LinkButton href="/#/Components/LinkButton" fullWidth>full width</LinkButton>

```

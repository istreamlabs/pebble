### Buttons are used as triggers for actions. They are used in forms, toolbars, modal dialogs and as stand-alone action triggers.

### Types

* Default buttons are most commonly used
* Primary buttons highlight the most important action in the experience
* Don't use more than one primary button in a section/screen
* Danger buttons indicate a destructive action, and usually trigger a confirmation before the action is completed

```js
<div class="styleguide__buttons">
  <Button>default</Button>
  <Button primary>primary</Button>
  <Button danger>danger</Button>
  <Button primary danger>primary danger</Button>
</div>
```

### Size

```js
<div class="styleguide__buttons">
  <Button size="small">small</Button>
  <Button>medium</Button>
  <Button size="large">large</Button>
</div>
```

### Icon and Text

```js
<div class="styleguide__buttons">
  <Button primary size="small" icon="add-circle">small</Button>
  <Button primary icon="add-circle">medium</Button>
  <Button primary size="large" icon="add-circle">large</Button>
</div>
```

### Additional ClassNames

Pass a `className` containing custom css to apply them in addition to the default button styles.

```js
<Button className="myCustomClass">my button</Button>
```

### Disabled

Use for actions that aren’t currently available. The surrounding interface should make it clear why the button is disabled and what needs to be done to enable it.

```js
<div class="styleguide__buttons">
  <Button disabled>default</Button>
  <Button disabled primary>primary</Button>
  <Button disabled danger>danger</Button>
  <Button disabled primary danger>primary danger</Button>
</div>
```

### Loading

Use when a button has been pressed and the associated action is in progress.

```js

<div class="styleguide__buttons">
  <Button loading>my button</Button>
  <Button loading primary>my button</Button>
  <Button loading danger>my button</Button>
  <Button loading primary danger>my button</Button>
</div>
```

### Full Width

Use for buttons placed in a narrow column.

```js
<Button fullWidth primary>full width</Button>

```

## Examples

* Default buttons are most commonly used
* Primary buttons highlight the most important action in the experience
* Don't use more than one primary button in a section/screen
* Danger buttons indicate a destructive action, and usually trigger a confirmation before the action is completed

```js
<div className="styleguide__buttons">
  <Button>default</Button>
  <Button primary>primary</Button>
  <Button danger>danger</Button>
  <Button primary danger>primary danger</Button>
  <Button plain>plain</Button>
</div>
```

### Plain Buttons

Render a button that performs an action, but looks like inline clickable text because it is more visually appropriate.

<div className="styleguide__callout">
##### When to use a Button vs Link

* Use buttons when performing an action on the page, such as "submit", "edit", or "upload". Actions almost always occur on the same page.
* Use a [link](#/Components/Link) when navigation to another place, such as a profile page, vod asset detail, or a "skip to" anchor link.
</div>

```js
<div className="styleguide__buttons">
  <Button plain size="small">small text</Button>
  <Button plain>default text</Button>
  <Button plain size="large">large text</Button>
</div>

<div className="styleguide__buttons">
  <Button plain>text button</Button>
  <Button primary plain>primary text button</Button>
  <Button danger plain>danger text button</Button>
</div>
```

### Size

```js
<div className="styleguide__buttons">
  <Button size="small">small</Button>
  <Button>medium</Button>
  <Button size="large">large</Button>
</div>
```

### Icon and Text

```js
<div className="styleguide__buttons">
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
<div className="styleguide__buttons">
  <Button disabled>default</Button>
  <Button disabled primary>primary</Button>
  <Button disabled danger>danger</Button>
  <Button disabled primary danger>primary danger</Button>
</div>
```

### Loading

Use when a button has been pressed and the associated action is in progress.

```js

<div className="styleguide__buttons">
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

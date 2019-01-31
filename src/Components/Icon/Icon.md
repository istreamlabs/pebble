Icons provide visual context and enhance usability.

```js
<Icon name="dashboard" />
<Icon name="vod" />
<Icon name="sports" />
<Icon name="settings" />
```

### Size

```js
<Icon name="add-circle" />
<Icon name="add-circle" size="2" />
<Icon name="add-circle" size="3" />
<Icon name="add-circle" size="4" />
<Icon name="add-circle" size="5" />
<Icon name="add-circle" size="6" />
<Icon name="add-circle" size="7" />
<Icon name="add-circle" size="8" />
```

### Additional ClassNames

Pass a `className` containing custom css to apply in addition to the default styles.

```js
<Icon name="add-circle" className="myCustomClass" />
```

### Accessibility

`accessibilityLabel` and `ariaHidden`

```js
<Icon name="add-circle" accessibilityLabel="Some Descriptive Text" />
<Icon name="add-circle" ariaHidden={false} accessibilityLabel="Read by assistive tech" />
```
### Unknown Icon

If you pass a the icon a name that is not recognized, a red bug will be displayed as a placeholder icon

```js
<Icon name="not-found" />
```

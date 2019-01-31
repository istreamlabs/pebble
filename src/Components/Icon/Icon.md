
```js
<Icon name="crane" />
<Icon name="floors" />
<Icon name="apartment" />
<Icon name="fence" />
```

### Size

```js
<Icon name="apartment" />
<Icon name="apartment" size="2" />
<Icon name="apartment" size="3" />
<Icon name="apartment" size="4" />
<Icon name="apartment" size="5" />
<Icon name="apartment" size="6" />
<Icon name="apartment" size="7" />
<Icon name="apartment" size="8" />
```

### Additional ClassNames

Pass a `className` containing custom css to apply them in addition to the default button styles.

```js
<Icon name="crane" className="myCustomClass" />
```

### Accessibility

`accessibilityLabel` and `ariaHidden`

```js
<Icon name="crane" accessibilityLabel="Some Descriptive Text" />
<Icon name="crane" ariasHidden={false} accessibilityLabel="Read by assistive tech" />
```
### Unknow icon name

```js
<Icon name="not-found" />
```

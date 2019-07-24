## Examples

```js
<Text>
  The Text component renders a span by default. It is a convenient way
  to enforce consistency of supported font sizes and text colors.
</Text>
```

### Sizes

```js
<div><Text>Default Size</Text></div>
<div><Text size="1">Size 1</Text></div>
<div><Text size="2">Size 2</Text></div>
<div><Text size="3">Size 3</Text></div>
<div><Text size="4">Size 4</Text></div>
<div><Text size="5">Size 5</Text></div>
<div><Text size="6">Size 6</Text></div>
<div><Text size="7">Size 7</Text></div>
```

### Bold

Font weight is normal, or `400` by default.

```js
<Text bold>Bold</Text>
```

### Appearance

Control the color of the text, or set the `appearance` prop to `code` to render an inline `<code>` element.

```js
<div><Text>Default</Text></div>
<div><Text appearance="muted">Muted</Text></div>
<div><Text appearance="info">Info</Text></div>
<div><Text appearance="success">Success</Text></div>
<div><Text appearance="warn">Warn</Text></div>
<div><Text appearance="danger">Danger</Text></div>
<div><Text appearance="code">Code</Text></div>
```

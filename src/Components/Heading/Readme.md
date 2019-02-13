## Examples

```js
<Heading element="1">Heading 1</Heading>
<Heading element="2">Heading 2</Heading>
<Heading element="3">Heading 3</Heading>
<Heading element="4">Heading 4</Heading>
<Heading element="5">Heading 5</Heading>
<Heading element="6">Heading 6</Heading>
```

### Size

Pass an explicit size to control how big the heading should appear

```js
<Heading element="2" size="1">&lt;H2&gt; in size 1</Heading>
<Heading element="2" size="6">&lt;H2&gt; in size 6</Heading>
```

### Turn off Responsive

Responsive font size scaling can be turned off.

```js
<Heading responsive={false} element="1">Heading 1</Heading>
<Heading responsive={false} element="2">Heading 2</Heading>
<Heading responsive={false} element="3">Heading 3</Heading>
<Heading responsive={false} element="4">Heading 4</Heading>
<Heading responsive={false} element="5">Heading 5</Heading>
<Heading responsive={false} element="6">Heading 6</Heading>
```

### Truncate

Add the `truncate` prop to restrict text to a single line and truncate with an ellipsis if it&apos;s too long.

```js
<Heading element="1" size="3" truncate>This heading text should be truncated with an ellipsis because it is too long to fit on one line</Heading>

```

### Text Alignment
```js
<Heading element="2" size="4" textAlign="right">Right Align</Heading>
```
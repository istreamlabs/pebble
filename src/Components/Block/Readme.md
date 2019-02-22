## Examples

### Flex direction

```js hide

<Block background="neutral-300" justify="start" itemSpacing="3" marginBottom="4">
  <Badge type="info">block 1</Badge>
  <Badge type="info">block 1</Badge>
</Block>

```

```js

<Block justify="start" itemSpacing="3" marginBottom="4">
  <Block flex={{grow: 1, shrink: 1}}>block 1</Block>
  <Block flex={{grow: 1, shrink: 1}}>block 2</Block>
  <Block flex={{grow: 1, shrink: 1}}>block 3</Block>
</Block>
```

### Padding

Apply padding to all four sides.

```js hide
<Block itemSpacing="1" direction="column">
<Block background="neutral-300" padding="8">Padding of 8</Block>
<Block background="neutral-300" padding="7">Padding of 7</Block>
<Block background="neutral-300" padding="6">Padding of 6</Block>
<Block background="neutral-300" padding="5">Padding of 5</Block>
<Block background="neutral-300" padding="4">Padding of 4</Block>
<Block background="neutral-300" padding="3">Padding of 3</Block>
<Block background="neutral-300" padding="2">Padding of 2</Block>
<Block background="neutral-300" padding="1">Padding of 1</Block>
<Block background="neutral-300">No padding</Block>
</Block>
```

#### Horizontal Padding

`Block` can have separate horizontal and vertical padding

```js
<Block background="neutral-300" paddingHorizontal="8">Horizontal padding of 8</Block>
<Block background="neutral-300" paddingHorizontal="7">Horizontal padding of 7</Block>
<Block background="neutral-300" paddingHorizontal="6">Horizontal padding of 6</Block>
<Block background="neutral-300" paddingHorizontal="5">Horizontal padding of 5</Block>
<Block background="neutral-300" paddingHorizontal="4">Horizontal padding of 4</Block>
<Block background="neutral-300" paddingHorizontal="3">Horizontal padding of 3</Block>
<Block background="neutral-300" paddingHorizontal="2">Horizontal padding of 2</Block>
<Block background="neutral-300" paddingHorizontal="1">Horizontal padding of 1</Block>
<Block background="neutral-300">No padding</Block>
```

#### Vertical Padding

```js
<Block background="neutral-300" paddingVertical="8">Vertical padding of 8</Block>
<Block background="neutral-300" paddingVertical="7">Vertical padding of 7</Block>
<Block background="neutral-300" paddingVertical="6">Vertical padding of 6</Block>
<Block background="neutral-300" paddingVertical="5">Vertical padding of 5</Block>
<Block background="neutral-300" paddingVertical="4">Vertical padding of 4</Block>
<Block background="neutral-300" paddingVertical="3">Vertical padding of 3</Block>
<Block background="neutral-300" paddingVertical="2">Vertical padding of 2</Block>
<Block background="neutral-300" paddingVertical="1">Vertical padding of 1</Block>
<Block background="neutral-300">No padding</Block>
```

### Margin Top

```js
<Block background="neutral-300" marginTop="8">Margin top of 8</Block>
<Block background="neutral-300" marginTop="7">Margin top of 7</Block>
<Block background="neutral-300" marginTop="6">Margin top of 6</Block>
<Block background="neutral-300" marginTop="5">Margin top of 5</Block>
<Block background="neutral-300" marginTop="4">Margin top of 4</Block>
<Block background="neutral-300" marginTop="3">Margin top of 3</Block>
<Block background="neutral-300" marginTop="2">Margin top of 2</Block>
<Block background="neutral-300" marginTop="1">Margin top of 1</Block>
<Block background="neutral-300">No margin</Block>
```

### Margin Bottom

```js
<Block background="neutral-300" marginBottom="8">Margin bottom of 8</Block>
<Block background="neutral-300" marginBottom="7">Margin bottom of 7</Block>
<Block background="neutral-300" marginBottom="6">Margin bottom of 6</Block>
<Block background="neutral-300" marginBottom="5">Margin bottom of 5</Block>
<Block background="neutral-300" marginBottom="4">Margin bottom of 4</Block>
<Block background="neutral-300" marginBottom="3">Margin bottom of 3</Block>
<Block background="neutral-300" marginBottom="2">Margin bottom of 2</Block>
<Block background="neutral-300" marginBottom="1">Margin bottom of 1</Block>
<Block background="neutral-300">No margin</Block>
```

### Text Size

```js
<Block background="neutral-300" textSize="1">Text size of 1</Block>
<Block background="neutral-300" textSize="2">Text size of 2</Block>
<Block background="neutral-300" textSize="3">Text size of 3</Block>
<Block background="neutral-300" textSize="4">Text size of 4</Block>
<Block background="neutral-300" textSize="5">Text size of 5</Block>
<Block background="neutral-300" textSize="6">Text size of 6</Block>
<Block background="neutral-300" textSize="7">Text size of 7</Block>
<Block background="neutral-300">Default text size</Block>
```

### Truncate

```js
<Block background="neutral-300" truncate>This Block has truncate set to true. Therefore it's content is limited to a single line, and overflow content truncated with an ellipsis.</Block>
```

### Text Alignment

```js
<Block background="neutral-300">Left Aligned</Block>
<Block background="neutral-300" textAlign="center">Centered</Block>
<Block background="neutral-300" textAlign="right">Right Aligned</Block>
```

### Block with TextContainer

Use `<Block>` as a wrapper for other elements to consistently control spacing.

```js
<Block background="neutral-300" padding="6">
  <TextContainer>
    <Heading element="3">Who is iStreamPlanet?</Heading>
    <p>iStreamPlanet creates leading-edge technology to solve the core challenges of OTT media. We deliver the end-to-end video workflow from signal acquisition to the streaming app experience — all focused on the fan.</p>
    <p>iStreamPlanet has earned the trust of leading sports and entertainment brands through innovation, dedication to high quality video, and exceptional customer service.</p>
  </TextContainer>
</Block>
```

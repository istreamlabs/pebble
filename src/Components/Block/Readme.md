## Examples

### Padding

Apply padding to all four sides.

```js hide
<Block padding="8">Padding of 8</Block>
<Block padding="7">Padding of 7</Block>
<Block padding="6">Padding of 6</Block>
<Block padding="5">Padding of 5</Block>
<Block padding="4">Padding of 4</Block>
<Block padding="3">Padding of 3</Block>
<Block padding="2">Padding of 2</Block>
<Block padding="1">Padding of 1</Block>
<Block>No padding</Block>
```

#### Horizontal Padding

`Block` can have separate horizontal and vertical padding

```js
<Block paddingHorizontal="8">Horizontal padding of 8</Block>
<Block paddingHorizontal="7">Horizontal padding of 7</Block>
<Block paddingHorizontal="6">Horizontal padding of 6</Block>
<Block paddingHorizontal="5">Horizontal padding of 5</Block>
<Block paddingHorizontal="4">Horizontal padding of 4</Block>
<Block paddingHorizontal="3">Horizontal padding of 3</Block>
<Block paddingHorizontal="2">Horizontal padding of 2</Block>
<Block paddingHorizontal="1">Horizontal padding of 1</Block>

<Block>No padding</Block>
```

#### Vertical Padding

```js
<Block paddingVertical="8">Horizontal padding of 8</Block>
<Block paddingVertical="7">Horizontal padding of 7</Block>
<Block paddingVertical="6">Horizontal padding of 6</Block>
<Block paddingVertical="5">Horizontal padding of 5</Block>
<Block paddingVertical="4">Horizontal padding of 4</Block>
<Block paddingVertical="3">Horizontal padding of 3</Block>
<Block paddingVertical="2">Horizontal padding of 2</Block>
<Block paddingVertical="1">Horizontal padding of 1</Block>
<Block>No padding</Block>
```

### Margin Top

```js
<Block marginTop="8">Margin top of 8</Block>
<Block marginTop="7">Margin top of 7</Block>
<Block marginTop="6">Margin top of 6</Block>
<Block marginTop="5">Margin top of 5</Block>
<Block marginTop="4">Margin top of 4</Block>
<Block marginTop="3">Margin top of 3</Block>
<Block marginTop="2">Margin top of 2</Block>
<Block marginTop="1">Margin top of 1</Block>
<Block>No margin</Block>
```

### Margin Bottom

```js
<Block marginBottom="8">Margin bottom of 8</Block>
<Block marginBottom="7">Margin bottom of 7</Block>
<Block marginBottom="6">Margin bottom of 6</Block>
<Block marginBottom="5">Margin bottom of 5</Block>
<Block marginBottom="4">Margin bottom of 4</Block>
<Block marginBottom="3">Margin bottom of 3</Block>
<Block marginBottom="2">Margin bottom of 2</Block>
<Block marginBottom="1">Margin bottom of 1</Block>
<Block>No margin</Block>
```

### Text Size

```js
<Block textSize="1">Text size of 1</Block>
<Block textSize="2">Text size of 2</Block>
<Block textSize="3">Text size of 3</Block>
<Block textSize="4">Text size of 4</Block>
<Block textSize="5">Text size of 5</Block>
<Block textSize="6">Text size of 6</Block>
<Block textSize="7">Text size of 7</Block>
```

### Truncate

```js
<Block truncate>This Block has truncate set to true. Therefore it's content is limited to a single line, and overflow content trunated with an ellipsis.</Block>
```

### Text Alignment

```js
<Block>Left Aligned</Block>
<Block textAlign="center">Centered</Block>
<Block textAlign="right">Right Aligned</Block>
```

### Block with TextContainer

Use `<Block>` as a wrapper for other elements to consistently control spacing.

```js
<Block padding="6">
  <TextContainer>
    <Heading element="3">Who is iStreamPlanet?</Heading>
    <p>iStreamPlanet creates leading-edge technology to solve the core challenges of OTT media. We deliver the end-to-end video workflow from signal acquisition to the streaming app experience — all focused on the fan.</p>
    <p>iStreamPlanet has earned the trust of leading sports and entertainment brands through innovation, dedication to high quality video, and exceptional customer service.</p>
  </TextContainer>
</Block>
```
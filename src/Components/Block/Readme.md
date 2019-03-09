## Examples

### Direction

Defaults to row.

```js hide

<Block background="white" padding="3" justify="center" itemSpacing="3" marginBottom="4">
  <Badge type="info">badge 1</Badge>
  <Badge type="info">badge 2</Badge>
  <Badge type="info">badge 3</Badge>
  <Badge type="info">badge 4</Badge>
  <Badge type="info">badge 5</Badge>
</Block>

<Block background="white" direction="column" padding="3" alignItems="center" itemSpacing="3">
  <Badge type="info">badge 1</Badge>
  <Badge type="info">badge 2</Badge>
  <Badge type="info">badge 3</Badge>
  <Badge type="info">badge 4</Badge>
  <Badge type="info">badge 5</Badge>
</Block>
```

### Basis

Basis defines the default size of an element before the remaining space is distributed.

```js
<Block justify="start" itemSpacing="3" marginBottom="4">
  <Block basis="1/3" padding="3" background="blue-light">1/3</Block>
  <Block basis="1/3" padding="3" background="blue-light">1/3</Block>
  <Block basis="1/3" padding="3" background="blue-light">1/3</Block>
</Block>
```

### Width and Height

Set the width and/or height

```js
<Block justify="start" itemSpacing="3" marginBottom="4">
  <Block padding="3" width="200px" background="blue-light">200px</Block>
  <Block padding="3" width="100px" background="blue-light">100px</Block>
  <Block padding="3" flex background="blue-light">Fills remaining space</Block>
</Block>

<Block justify="start" itemSpacing="3">
  <Block padding="3" width="30%" height="100px" background="blue-light">30%, 100px</Block>
  <Block padding="3" width="30%" height="50px" background="blue-light">30%, 50px</Block>
  <Block padding="3" width="40%" height="100px" background="blue-light">40%, 100px</Block>
</Block>
```

### Vertically Center

```js
<Block alignItems="center" itemSpacing="3">
  <Block width="150px"><Text size="2">A tall column with variable height</Text></Block>
  <Badge type="info">badge</Badge>
  <Block height="100px" background="blue-light" padding="3" alignItems="center">100px height</Block>
  <Block height="75px" background="blue-light" padding="3" alignItems="center">75px height</Block>
  <Block height="50px" background="blue-light" padding="3" alignItems="center">50px height</Block>
</Block>
```

### Padding

Apply padding to all four sides.

```js hide
<Block itemSpacing="1" direction="column">
  <Block background="blue-light" padding="8">Padding of 8</Block>
  <Block background="blue-light" padding="7">Padding of 7</Block>
  <Block background="blue-light" padding="6">Padding of 6</Block>
  <Block background="blue-light" padding="5">Padding of 5</Block>
  <Block background="blue-light" padding="4">Padding of 4</Block>
  <Block background="blue-light" padding="3">Padding of 3</Block>
  <Block background="blue-light" padding="2">Padding of 2</Block>
  <Block background="blue-light" padding="1">Padding of 1</Block>
  <Block background="blue-light" padding="0">No padding</Block>
</Block>
```

#### Horizontal Padding

`Block` can have separate horizontal and vertical padding

```js
<Block itemSpacing="1" direction="column">
  <Block background="blue-light" paddingHorizontal="8">Horizontal padding of 8</Block>
  <Block background="blue-light" paddingHorizontal="7">Horizontal padding of 7</Block>
  <Block background="blue-light" paddingHorizontal="6">Horizontal padding of 6</Block>
  <Block background="blue-light" paddingHorizontal="5">Horizontal padding of 5</Block>
  <Block background="blue-light" paddingHorizontal="4">Horizontal padding of 4</Block>
  <Block background="blue-light" paddingHorizontal="3">Horizontal padding of 3</Block>
  <Block background="blue-light" paddingHorizontal="2">Horizontal padding of 2</Block>
  <Block background="blue-light" paddingHorizontal="1">Horizontal padding of 1</Block>
  <Block background="blue-light">No padding</Block>
</Block>
```

#### Vertical Padding

```js
<Block itemSpacing="1" direction="column">
  <Block background="blue-light" paddingVertical="8">Vertical padding of 8</Block>
  <Block background="blue-light" paddingVertical="7">Vertical padding of 7</Block>
  <Block background="blue-light" paddingVertical="6">Vertical padding of 6</Block>
  <Block background="blue-light" paddingVertical="5">Vertical padding of 5</Block>
  <Block background="blue-light" paddingVertical="4">Vertical padding of 4</Block>
  <Block background="blue-light" paddingVertical="3">Vertical padding of 3</Block>
  <Block background="blue-light" paddingVertical="2">Vertical padding of 2</Block>
  <Block background="blue-light" paddingVertical="1">Vertical padding of 1</Block>
  <Block background="blue-light">No padding</Block>
</Block>
```

### Margin Top

```js
<Block background="blue-light" marginTop="8">Margin top of 8</Block>
<Block background="blue-light" marginTop="7">Margin top of 7</Block>
<Block background="blue-light" marginTop="6">Margin top of 6</Block>
<Block background="blue-light" marginTop="5">Margin top of 5</Block>
<Block background="blue-light" marginTop="4">Margin top of 4</Block>
<Block background="blue-light" marginTop="3">Margin top of 3</Block>
<Block background="blue-light" marginTop="2">Margin top of 2</Block>
<Block background="blue-light" marginTop="1">Margin top of 1</Block>
<Block background="blue-light">No margin</Block>
```

### Margin Bottom

```js
<Block background="blue-light" marginBottom="8">Margin bottom of 8</Block>
<Block background="blue-light" marginBottom="7">Margin bottom of 7</Block>
<Block background="blue-light" marginBottom="6">Margin bottom of 6</Block>
<Block background="blue-light" marginBottom="5">Margin bottom of 5</Block>
<Block background="blue-light" marginBottom="4">Margin bottom of 4</Block>
<Block background="blue-light" marginBottom="3">Margin bottom of 3</Block>
<Block background="blue-light" marginBottom="2">Margin bottom of 2</Block>
<Block background="blue-light" marginBottom="1">Margin bottom of 1</Block>
<Block background="blue-light">No margin</Block>
```

### Responsive Styles

Margin and padding props can be passed arrays as values for mobile-first responsive styles.

```js
<Block
  background="blue-light"
  padding={[
    2, // spacing-2 by default
    4, // spacing-4 30rem and up
    6, // spacing-6 60rem and up
    8  // spacing-8 90rem and up
  ]}
>
  Padding of 2 and 8
</Block>
```

### Text Size

```js
<Block itemSpacing="3" direction="column">
  <Block textSize="1">Text size of 1</Block>
  <Block textSize="2">Text size of 2</Block>
  <Block textSize="3">Text size of 3</Block>
  <Block textSize="4">Text size of 4</Block>
  <Block textSize="5">Text size of 5</Block>
  <Block textSize="6">Text size of 6</Block>
  <Block textSize="7">Text size of 7</Block>
  <Block>Default text size</Block>
</Block>
```

### Truncate

```js
<Block truncate>This Block has truncate set to true. Therefore it's content is limited to a single line, and overflow content truncated with an ellipsis.</Block>
```

### Text Alignment

```js
<Block direction="column" itemSpacing="3">
  <Block background="blue-light" direction="column">Left Aligned</Block>
  <Block background="blue-light" direction="column" textAlign="center">Centered</Block>
  <Block background="blue-light" direction="column" textAlign="right">Right Aligned</Block>
</Block>
```

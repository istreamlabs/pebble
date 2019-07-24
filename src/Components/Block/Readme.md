## Examples

### Direction

Pass a flex-direction to control which way the content will flow. Defaults to row. For responsive mobile-first styles, pass an array with `row` or `column` as the value for each element.

```js hide
import Badge from '../Badge/Badge';
<>
  <Block
    direction="column"
    padding="3"
    alignItems="center"
    itemSpacing="3"
  >
    <Badge type="info">badge 1</Badge>
    <Badge type="info">badge 2</Badge>
    <Badge type="info">badge 3</Badge>
    <Badge type="info">badge 4</Badge>
    <Badge type="info">badge 5</Badge>
  </Block>

  <Block
    direction={[
      'column', // by default
      'row', // 30rem and up
      'column', // 60rem and up
      'row', // 90rem and up
    ]}
    padding="3"
    justify="center"
    alignItems="center"
    itemSpacing="3"
  >
    <Badge type="info">badge 1</Badge>
    <Badge type="info">badge 2</Badge>
    <Badge type="info">badge 3</Badge>
    <Badge type="info">badge 4</Badge>
    <Badge type="info">badge 5</Badge>
  </Block>
</>;
```

### Flex

```js
<Block itemSpacing="3">
  <Block flex={false} padding="3" background="blue-light">
    1
  </Block>
  <Block
    width="100px"
    flex={true}
    padding="3"
    background="blue-light"
  >
    1
  </Block>
  <Block flex={false} padding="3" background="blue-light">
    1
  </Block>
</Block>
```

### Basis

Basis defines the default size of an element before the remaining space is distributed.

```js
<Block justify="start" itemSpacing="3" marginBottom="4">
  <Block basis="1/3" padding="3" background="blue-light">
    1/3
  </Block>
  <Block basis="1/3" padding="3" background="blue-light">
    1/3
  </Block>
  <Block basis="1/3" padding="3" background="blue-light">
    1/3
  </Block>
</Block>
```

### Width

Width can be set to a valid css width value.

```js
<Block width="243px" padding="3" background="blue-light" marginBottom="4">233px</Block>
<Block width="10rem" padding="3" background="blue-light" marginBottom="4">10rem (160px)</Block>
<Block width="25%" padding="3" background="blue-light" marginBottom="4">25%</Block>
```

For responsive widths, pass an array of percentages for each element.

```js
<Block itemSpacing="3">
  <Block width={[10, 33, 25, 10]} padding="3" background="blue-light">
    10%, 33%, 25%, 10%
  </Block>
  <Block width={[80, 33, 50, 10]} padding="3" background="blue-light">
    80%, 33%, 50%, 10%
  </Block>
  <Block width={[10, 34, 25, 80]} padding="3" background="blue-light">
    10%, 34%, 25%, 80%
  </Block>
</Block>
```

### Height

Height can be set to a valid css height value.

```js
<Block itemSpacing="3" height="100px">
  <Block
    height="44px"
    padding="3"
    background="blue-light"
    marginBottom="4"
  >
    44px
  </Block>
  <Block
    height="4rem"
    padding="3"
    background="blue-light"
    marginBottom="4"
  >
    4rem (64px)
  </Block>
  <Block
    height="80%"
    padding="3"
    background="blue-light"
    marginBottom="4"
  >
    80%
  </Block>
</Block>
```

For responsive height, pass an array of percentages for each element.

```js
<Block direction="column" itemSpacing="3" height="300px">
  <Block
    height={[10, 33, 25, 10]}
    padding="3"
    background="blue-light"
  >
    10%, 33%, 25%, 10%
  </Block>
  <Block
    height={[80, 33, 50, 10]}
    padding="3"
    background="blue-light"
  >
    80%, 33%, 50%, 10%
  </Block>
  <Block
    height={[10, 34, 25, 80]}
    padding="3"
    background="blue-light"
  >
    10%, 34%, 25%, 80%
  </Block>
</Block>
```

### Vertically Center

```js
import Badge from '../Badge/Badge';
import Text from '../Text/Text';

<Block alignItems="center" itemSpacing="3">
  <Block width="150px">
    <Text size="2">A tall column with variable height</Text>
  </Block>
  <Badge type="info">badge</Badge>
  <Block
    height="100px"
    background="blue-light"
    padding="3"
    alignItems="center"
  >
    100px height
  </Block>
  <Block
    height="75px"
    background="blue-light"
    padding="3"
    alignItems="center"
  >
    75px height
  </Block>
  <Block
    height="50px"
    background="blue-light"
    padding="3"
    alignItems="center"
  >
    50px height
  </Block>
</Block>;
```

### Padding

Apply padding to all four sides.

```js hide
<Block itemSpacing="1" direction="column">
  <Block background="blue-light" padding="8">
    Padding of 8
  </Block>
  <Block background="blue-light" padding="7">
    Padding of 7
  </Block>
  <Block background="blue-light" padding="6">
    Padding of 6
  </Block>
  <Block background="blue-light" padding="5">
    Padding of 5
  </Block>
  <Block background="blue-light" padding="4">
    Padding of 4
  </Block>
  <Block background="blue-light" padding="3">
    Padding of 3
  </Block>
  <Block background="blue-light" padding="2">
    Padding of 2
  </Block>
  <Block background="blue-light" padding="1">
    Padding of 1
  </Block>
  <Block background="blue-light" padding="0">
    No padding
  </Block>
</Block>
```

#### Horizontal Padding

`Block` can have separate horizontal and vertical padding

```js
<Block itemSpacing="1" direction="column">
  <Block background="blue-light" paddingHorizontal="8">
    Horizontal padding of 8
  </Block>
  <Block background="blue-light" paddingHorizontal="7">
    Horizontal padding of 7
  </Block>
  <Block background="blue-light" paddingHorizontal="6">
    Horizontal padding of 6
  </Block>
  <Block background="blue-light" paddingHorizontal="5">
    Horizontal padding of 5
  </Block>
  <Block background="blue-light" paddingHorizontal="4">
    Horizontal padding of 4
  </Block>
  <Block background="blue-light" paddingHorizontal="3">
    Horizontal padding of 3
  </Block>
  <Block background="blue-light" paddingHorizontal="2">
    Horizontal padding of 2
  </Block>
  <Block background="blue-light" paddingHorizontal="1">
    Horizontal padding of 1
  </Block>
  <Block background="blue-light">No padding</Block>
</Block>
```

#### Vertical Padding

```js
<Block itemSpacing="1" direction="column">
  <Block background="blue-light" paddingVertical="8">
    Vertical padding of 8
  </Block>
  <Block background="blue-light" paddingVertical="7">
    Vertical padding of 7
  </Block>
  <Block background="blue-light" paddingVertical="6">
    Vertical padding of 6
  </Block>
  <Block background="blue-light" paddingVertical="5">
    Vertical padding of 5
  </Block>
  <Block background="blue-light" paddingVertical="4">
    Vertical padding of 4
  </Block>
  <Block background="blue-light" paddingVertical="3">
    Vertical padding of 3
  </Block>
  <Block background="blue-light" paddingVertical="2">
    Vertical padding of 2
  </Block>
  <Block background="blue-light" paddingVertical="1">
    Vertical padding of 1
  </Block>
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

### Borders

Setting the `border` prop to a string will apply teh default border style of `1px solid neutral-300`. You can also customize the border style by passing an object with the appropriate properties.

```jsx
<Block direction="row" itemSpacing="5">
  <Block border="all" height="50px">
    all
  </Block>
  <Block border="top" height="50px">
    top
  </Block>
  <Block border="right" height="50px">
    right
  </Block>
  <Block border="bottom" height="50px">
    bottom
  </Block>
  <Block border="left" height="50px">
    left
  </Block>
  <Block
    border={{
      side: 'all',
      style: 'dashed',
      width: '7px',
      color: 'blue',
    }}
    height="50px"
  >
    7px dashed blue border
  </Block>
</Block>
```

### Responsive Spacing

Margin and padding props can be passed arrays as values for mobile-first responsive styles.

```js
<Block
  background="blue-light"
  padding={[
    2, // spacing-2 by default
    4, // spacing-4 30rem and up
    6, // spacing-6 60rem and up
    8, // spacing-8 90rem and up
  ]}
>
  Padding of 2 and 8
</Block>
```

### Radius Corners

```js
<Block itemSpacing="3" wrap>
  <Block
    alignItems="center"
    justify="center"
    background="blue-light"
    radius="0"
    width="75px"
    height="75px"
  >
    radius 0
  </Block>
  <Block
    alignItems="center"
    justify="center"
    background="blue-light"
    radius="1"
    width="75px"
    height="75px"
  >
    radius 1
  </Block>
  <Block
    alignItems="center"
    justify="center"
    background="blue-light"
    radius="2"
    width="75px"
    height="75px"
  >
    radius 2
  </Block>
  <Block
    alignItems="center"
    justify="center"
    background="blue-light"
    radius="3"
    width="75px"
    height="75px"
  >
    radius 3
  </Block>
  <Block
    alignItems="center"
    justify="center"
    background="blue-light"
    radius="4"
    width="75px"
    height="75px"
  >
    radius 4
  </Block>
  <Block
    alignItems="center"
    justify="center"
    background="blue-light"
    radius="5"
    width="75px"
    height="75px"
  >
    radius 5
  </Block>
  <Block
    alignItems="center"
    justify="center"
    background="blue-light"
    radius="circle"
    width="75px"
    height="75px"
  >
    circle
  </Block>
  <Block
    alignItems="center"
    justify="center"
    background="blue-light"
    radius="pill"
    width="100px"
    height="75px"
  >
    pill
  </Block>
</Block>
```

#### Responsive Border Radius

Pass an array of radius values to apply responsive border radii.

```js
<Block
  alignItems="center"
  justify="center"
  radius={[5, 3, 1, 'pill']}
  background="blue-light"
  width="240px"
  height="100px"
>
  responsive border radius
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

### Responsive Overflow

Pass an array of overflow values to apply responsive overflow

```js
<Block
  overflow={[
    'hidden', // won't scroll by default
    { vertical: 'auto' }, // overflow-y is auto at 30rem and up
    {
      vertical: 'auto',
      horizontal: 'auto',
    }, // overflow-x and overflow-y is auto at 60rem and up
    'hidden',
  ]} // overflow is hidden at 90rem and up
  height="200px"
  width="100px"
  background="blue-light"
>
  <p>
    iStreamPlanet creates leading-edge technology to solve the core
    challenges of OTT media. We deliver the end-to-end video workflow
    from signal acquisition to the streaming app experience — all
    focused on the fan.
  </p>

  <p>
    iStreamPlanet has earned the trust of leading sports and
    entertainment brands through innovation, dedication to high
    quality video, and exceptional customer service.
  </p>
</Block>
```

### Truncate

```js
<Block truncate>
  This Block has truncate set to true. Therefore it's content is
  limited to a single line, and overflow content truncated with an
  ellipsis.
</Block>
```

### Text Alignment

```js
<Block direction="column" itemSpacing="3">
  <Block background="blue-light" direction="column">
    Left Aligned
  </Block>
  <Block
    background="blue-light"
    direction="column"
    textAlign="center"
  >
    Centered
  </Block>
  <Block background="blue-light" direction="column" textAlign="right">
    Right Aligned
  </Block>
</Block>
```

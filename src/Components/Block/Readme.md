### Flex

Flex is applied by default to Block components.

```js
<Block itemSpacing="3">
  <Block flex={false} padding="3" background="blue-light">
    takes up minimum width for content
  </Block>
  <Block flex padding="3" background="blue-light">
    takes up available width
  </Block>
  <Block flex={false} padding="3" background="blue-light">
    takes up minimum width for content
  </Block>
</Block>
```

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

#### Basis

Basis defines the default size of an element before the remaining space is distributed.

```js
<Block justify="start" itemSpacing="3">
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
<Block width="243px" padding="3" background="blue-light" margin="0 0 4">243px</Block>
<Block width="10rem" padding="3" background="blue-light" margin="0 0 4">10rem (160px)</Block>
<Block width="25%" padding="3" background="blue-light">25%</Block>
```

For responsive widths, pass an array of percentages for each element.

```js
<Block width={[10, 33, 25, 10]} padding="3" background="blue-light">
  10%, 33%, 25%, 10%
</Block>
```

### Height

Height can be set to a valid css height value.

```js
<Block itemSpacing="3" height="100px">
  <Block height="44px" padding="3" background="blue-light">
    44px
  </Block>
  <Block height="4rem" padding="3" background="blue-light">
    4rem (64px)
  </Block>
  <Block height="80%" padding="3" background="blue-light">
    80%
  </Block>
</Block>
```

For responsive height, pass an array of percentages for each element.

```js
<Block height={[10, 33, 25, 10]} padding="3" background="blue-light">
  10%, 33%, 25%, 10%
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

The `padding` prop accepts values similar to css-shorthand padding.

```js
<Block displayBlock itemSpacing="3">
  <Block background="blue-light" padding="4" displayBlock>
    <Block displayBlock background="white">
      4 on all sides
    </Block>
  </Block>

  <Block background="blue-light" padding="4 5" displayBlock>
    <Block displayBlock background="white">
      4 on top/bottom, 5 on left/right
    </Block>
  </Block>

  <Block background="blue-light" padding="4 5 3" displayBlock>
    <Block displayBlock background="white">
      4 on top, 5 on left/right, 3 on bottom
    </Block>
  </Block>

  <Block background="blue-light" padding="1 2 3 4" displayBlock>
    <Block displayBlock background="white">
      1 on top, 2 on right, 3 on bottom, 4 on left
    </Block>
  </Block>
</Block>
```

#### Responsive Padding

Apply different padding values that correspond to mobile first [breakpoints](/#/Styles/Media%20Query) by passing an array with length up to four.

```js
<Block background="blue-light" padding={['3 4', '4 5', '5 6', '6 7']}>
  <Block flex background="white">
    vertical 3,4,5,6, horizontal 4,5,6,7
  </Block>
</Block>
```

### Margin

The `margin` prop accepts values similar to css-shorthand margin.

```js hide
<Block displayBlock itemSpacing="3">
  <Block background="blue-light">
    <Block flex background="white" margin="4">
      4 on all sides
    </Block>
  </Block>

  <Block background="blue-light">
    <Block flex background="white" margin="4 5">
      4 on top/bottom, 5 on right/left
    </Block>
  </Block>

  <Block background="blue-light">
    <Block flex background="white" margin="4 5 3">
      4 on top, 5 on right/left, 3 on bottom
    </Block>
  </Block>

  <Block background="blue-light">
    <Block flex background="white" margin="1 2 3 4">
      1 on top, 2 on right, 3 on bottom, 4 on left
    </Block>
  </Block>
</Block>
```

#### Responsive Margins

Apply different margin values that correspond to mobile first [breakpoints](/#/Styles/Media%20Query) by passing an array with length up to four.

```js
<Block background="blue-light">
  <Block
    flex
    background="white"
    margin={['3 4', '4 5', '5 6', '6 7']}
  >
    vertical 3,4,5,6, horizontal 4,5,6,7
  </Block>
</Block>
```

### Item Spacing

Control the amount of spacing (or the gap) between a Block's children with with the `itemSpacing` prop. Pass an array up to length 4 to set responsive item spacing values. Based on the direction of the Block, right or bottom margin are applied the children.

```jsx
<Block border="all" itemSpacing={[1, 2, 3, 4]} marginBottom="4">
  <Block flex height="50px" background="blue-light" />
  <Block flex height="50px" background="blue-light" />
  <Block flex height="50px" background="blue-light" />
</Block>

<Block direction="column" border="all" itemSpacing="6">
  <Block width="100%" height="50px" background="blue-light" />
  <Block width="100%" height="50px" background="blue-light" />
  <Block width="100%" height="50px" background="blue-light" />
</Block>
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

### Radius Corners

Control the corner radius of a Block by setting the radius to a value `1-5`, `pill` or `circle`.

```js
<Block itemSpacing="3" wrap>
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

#### Responsive Text Size

Pass an array of textSize values to apply different sizes at each breakpoint.

```js
<Block textSize={[7, 5, 3, 1]}>
  Resize the browser window width to watch this text change size
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

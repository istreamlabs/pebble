## Rendering

### Default

```js
<Button>my button</Button>
<Button primary>my button</Button>
<Button danger>my button</Button>
<Button primary danger>my button</Button>
```

### Sizes

```js
import Size from '../Utils/Size';
<div>
    <Button size={Size.SMALL}>small</Button>
    <Button>medium</Button>
    <Button size={Size.LARGE}>large</Button>
</div>
```

### Additional ClassNames

```js
<Button className="myClass">My Button</Button>
```

### Disabled

```js
<Button disabled>my button</Button>
<Button disabled primary>my button</Button>
<Button disabled danger>my button</Button>
<Button disabled primary danger>my button</Button>
```

### Loading

```js
<Button loading>my button</Button>
<Button loading primary>my button</Button>
<Button loading danger>my button</Button>
<Button loading primary danger>my button</Button>
```

### Full Width

```js
<Button fullWidth primary>full width button</Button>
```
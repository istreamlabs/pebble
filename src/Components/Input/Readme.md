## Examples

### Input States
```js
<Block direction="column" itemSpacing="3" width="500px">
  <Block flex marginBottom="3">
    <Input defaultValue="normal" />
  </Block>

  <Block marginBottom="3">
    <Input error defaultValue="error" />
  </Block>

  <Block>
    <Input disabled defaultValue="disabled" />
  </Block>

  <Block>
    <Input autoFocus defaultValue="autoFocus" />
  </Block>
</Block>
```

### Sizes

```jsx
<Block direction="column" width="500px">
  <Block marginBottom="3">
    <Input size="large" defaultValue="large" />
  </Block>

  <Block marginBottom="3">
    <Input size="medium" defaultValue="medium" />
  </Block>

  <Block>
    <Input size="small" defaultValue="small" />
  </Block>
</Block>
```

### Prefix and Suffix

```jsx
<Block direction="column" marginBottom="3" width="500px">
  <Input prefix="$" className="mb-3" />
  <Input suffix=".00" type="number" className="text-right" />
</Block>



```

## Examples

```jsx
import Icon from '../Icon/Icon';
<>
  <p>
    Here is some text copy with an inline
    <Tooltip content="Tooltips provide additional information on hover or focus">
      <span className="link">tooltip</span>
    </Tooltip>
  </p>
  <p>
    <Tooltip content="Tooltip using an Icon">
      <Icon name="info-circle" />
    </Tooltip>
  </p>
</>;
```

### Placement

Placement of the tooltip is will automatically adjust itself based on the browser viewport, but the `placement` prop can be set for specific use cases.

```jsx
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

<ButtonGroup>
  <Tooltip content="top" placement="top">
    <Button>top</Button>
  </Tooltip>
  <Tooltip content="right" placement="right">
    <Button>right</Button>
  </Tooltip>
  <Tooltip content="bottom" placement="bottom">
    <Button>bottom</Button>
  </Tooltip>
  <Tooltip content="left" placement="left">
    <Button>left</Button>
  </Tooltip>
</ButtonGroup>;
```

## Best Practices

Tooltips should:

- Contain useful, supplemental information or clarification.
- Be used thoughtfully and sparingly
- If the information within a tooltip is really important, perhaps it should not be in a tooltip
- Be concise
- Not be used for errors or warnings
- Not contain interactive elements like links, inputs or buttons

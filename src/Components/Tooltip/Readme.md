## Examples

```jsx
<p>
Here is some body copy with a
<Tooltip content="i'm the content of a tooltip. i'm the content of a tooltip">
  tooltip
</Tooltip>
inside of it.</p>

<Tooltip content="i'm the content of a tooltip. i'm the content of a tooltip">
  String - Hover me
</Tooltip>
```

### Placement

Placement of the tooltip is will automatically adjust itself based on the browser viewport, but the `placement` prop can be set for specific usecases.

```jsx
import Button from '../Button/Button';

<Tooltip content="i'm the content of a tooltip. i'm the content of a tooltip" placement="right">
  <Button>Tooltip Right</Button>
</Tooltip>
```

## Best Practices

Tooltips should:

* Contain useful, supplemental information or clarification.
* Be used thoughtfully and sparingly
* If the information within a tooltip is really important,  perhaps it should not be in a tooltip
* Be concise
* Not be used for errors or warnings
* Not contain interactive elements like links, inputs or buttons

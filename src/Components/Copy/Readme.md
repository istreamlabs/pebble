<div className="styleguide__callout">
##### Capability

This component uses `navigator.clipboard.writeText` which is supported in all major browsers.
However, older browsers that are already out of our support matrix may not work.
</div>

## Examples

Use the button that's most appropriate for your use case.

```js
<div className="styleguide__buttons">
  <Copy value="example" />
  <Copy value="example" primary />
  <Copy value="example" danger />
  <Copy value="example" primary danger />
  <Copy value="example" plain />
</div>
```

### Size

```js
<div className="styleguide__buttons">
  <Copy value="example" size="small" />
  <Copy value="example" />
  <Copy value="example" size="large" />
</div>
```


### Icon and Text

The Icons be changed or remove and text can be added

```js
<div className="styleguide__buttons">
  <Copy icon="edit" value="example" size="small" />
  <Copy icon="edit" value="example" />
  <Copy icon="edit" value="example" size="large" />
</div>

<div className="styleguide__buttons">
  <Copy value="example" size="small">Text can be added</Copy>
  <Copy value="example">Text can be added</Copy>
  <Copy value="example" size="large">Text can be added</Copy>
</div>

<div className="styleguide__buttons">
  <Copy icon="" value="example" size="small">Icon Removed</Copy>
  <Copy icon="" value="example">Icon Removed</Copy>
  <Copy icon="" value="example" size="large">Icon Removed</Copy>
</div>
```

### Success Customizations

```js
import Icon from '../Icon/Icon';
const successContent = <><Icon name="check-circle-outline" /> Text was Copied.</>;

<div className="styleguide__buttons">
  <Copy value="example" successMessage="Custom Message">Custom Message</Copy>
  <Copy value="example" successMessage={successContent}>Custom Content</Copy>
  <Copy value="example" popoverBackground="blue" popoverColor="red">Custom colors</Copy>
</div>
```

### Plain Button

```js
<div className="styleguide__buttons">
  <Copy plain icon="edit" value="example" size="small" />
  <Copy plain icon="edit" value="example" />
  <Copy plain icon="edit" value="example" size="large" />
</div>

<div className="styleguide__buttons">
  <Copy plain value="example" size="small">Copy</Copy>
  <Copy plain value="example">Copy</Copy>
  <Copy plain value="example" size="large">Copy</Copy>
</div>

<div className="styleguide__buttons">
  <Copy plain icon="" value="example" size="small">Copy</Copy>
  <Copy plain icon="" value="example">Copy</Copy>
  <Copy plain icon="" value="example" size="large">Copy</Copy>
</div>
```

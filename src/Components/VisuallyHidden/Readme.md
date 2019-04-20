* Provides text for screen readers that is visually hidden.
* It is the logical opposite of the `aria-hidden` attribute.
* For full documentation, see [https://ui.reach.tech/visually-hidden/](https://ui.reach.tech/visually-hidden/)

### Example

In the following example, screen readers will announce "Add Item" and will ignore the icon; the browser displays the icon and ignores the text.

```js
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
<Button type="button">
  <VisuallyHidden>Add Item</VisuallyHidden>
  <Icon name="add-circle" />
</Button>
```

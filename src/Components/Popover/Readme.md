Trigger a Popover with a focusable element such as a [Button](/#/Components/Button) for full accessability.

```js
import Block from '../Block/Block';
import Button from '../Button/Button';

<Popover
  content={
    <Block
      background="white"
      displayBlock
      padding="3"
      radius="2"
      className="shadow-1"
    >
      I drink your milkshake!
    </Block>
  }
>
  <Button>trigger</Button>
</Popover>;
```

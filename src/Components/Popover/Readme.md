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

### Internal details with `content` render prop

The `onTriggerClicked` handler can be accessed via the render prop pattern.

```js
import Block from '../Block/Block';
import Button from '../Button/Button';
import FieldText from '../FieldText/FieldText';

<Popover
  content={onTriggerClicked => (
    <Block
      background="white"
      displayBlock
      radius="2"
      className="shadow-2"
    >
      <Block
        background="neutral-200"
        alignItems="center"
        justify="between"
        padding="3"
      >
        <Button size="small">Clear</Button>
        <div className="fw-700">Filters</div>
        <Button onClick={onTriggerClicked} primary size="small">
          Done
        </Button>
      </Block>
      <Block
        displayBlock
        itemSpacing="3"
        paddingVertical="5"
        paddingHorizontal="3"
      >
        <FieldText
          id="q"
          placeholder="search by name, email"
          label="search"
        />
      </Block>
    </Block>
  )}
>
  <Button>trigger</Button>
</Popover>;
```

### Close on content click

Automatically close the popover when the content is clicked with `closeOnContentClick`

```js
import Block from '../Block/Block';
import Button from '../Button/Button';

<Popover
  closeOnContentClick
  content={
    <Block
      background="white"
      displayBlock
      padding="3"
      radius="2"
      className="shadow-1"
    >
      Clicking me will close me
    </Block>
  }
>
  <Button>trigger</Button>
</Popover>;
```

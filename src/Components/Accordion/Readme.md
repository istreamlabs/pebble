### Import

Pebble exports 1 additional related component:

- **CollapsiblePanel**: A label and container for a single panel of the Accordion

### Single

By default, only a single panel may be open at one time. Each `<CollapsiblePanel />` requires an `id` and `label`.

```js
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

<Accordion
  border="all"
  background="neutral-200"
  onChange={id => console.log(id)}
>
  <CollapsiblePanel id="panel1" padding={[3, 4, 5]} label="panel 1">
    panel 1 content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel2" padding={[3, 4, 5]} label="panel 2">
    panel 2 content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel3" padding={[3, 4, 5]} label="panel 3">
    panel 3 content
  </CollapsiblePanel>
</Accordion>;
```

### Multiple

To allow multiple panels to be open at one time, use `allowMultiple`.

```js
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

<Accordion
  allowMultiple
  border="all"
  background="neutral-200"
  onChange={id => console.log(id)}
>
  <CollapsiblePanel id="panel1" padding={[3, 4, 5]} label="panel 1">
    panel 1 content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel2" padding={[3, 4, 5]} label="panel 2">
    panel 2 content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel3" padding={[3, 4, 5]} label="panel 3">
    panel 3 content
  </CollapsiblePanel>
</Accordion>;
```

### Start with Panels Open

Set the `defaultOpen` prop the single string id, or an array of string ids of the panel(s) that should be open

```js
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

<Accordion
  defaultOpen={['panel2', 'panel3']}
  border="all"
  background="neutral-200"
  allowMultiple
>
  <CollapsiblePanel id="panel1" padding={[3, 4, 5]} label="panel 1">
    content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel2" padding={[3, 4, 5]} label="panel 2">
    starts open
  </CollapsiblePanel>
  <CollapsiblePanel id="panel3" padding={[3, 4, 5]} label="panel 3">
    starts open
  </CollapsiblePanel>
</Accordion>;
```

### Nesting

Accordions can be nested to display complex tree structures.

```js
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

<Accordion defaultOpen={['panel1']} border="all">
  <CollapsiblePanel
    id="panel1"
    displayBlock
    background="neutral-200"
    label="panel 1"
    textSize="7"
    className="pl-5"
  >
    <Accordion allowMultiple>
      <CollapsiblePanel
        id="nestedPanel1"
        background="neutral-200"
        label="level 1 panel 1"
        displayBlock
        className="pl-5"
      >
        <Accordion allowMultiple>
          <CollapsiblePanel
            id="nested2Panel1"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="level 2 panel 1"
          >
            nested 2 panel 1 content
          </CollapsiblePanel>
          <CollapsiblePanel
            id="nested2Panel2"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="level 2 panel 2"
          >
            nested 2 panel 2 content
          </CollapsiblePanel>
          <CollapsiblePanel
            id="nested2Panel3"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="level 2 panel 3"
          >
            nested 2 panel 3 content
          </CollapsiblePanel>
        </Accordion>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="nestedPanel2"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="level 1 panel 2"
      >
        nested panel 2 content
      </CollapsiblePanel>
      <CollapsiblePanel
        id="nestedPanel3"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="level 1 panel 3"
      >
        nested panel 3 content
      </CollapsiblePanel>
    </Accordion>
  </CollapsiblePanel>
  <CollapsiblePanel
    id="panel2"
    background="neutral-200"
    padding={[3, 4, 5]}
    label="panel 2"
  >
    panel 2 content
  </CollapsiblePanel>
</Accordion>;
```

### Customize the Label

The `label` accepts a render prop function so that it's appearance may be customized.

```js
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';
import Block from '../Block/Block';
import Icon from '../Icon/Icon';

function ExampleLabel({ open, label }) {
  const arrowIcon = open ? 'nav-up' : 'nav-down';

  return (
    <Block
      textSize="5"
      color="neutral-600"
      padding="3 4"
      border="bottom"
      justify="between"
      background="green-dark"
      color="white"
      textSize="4"
    >
      <Block itemSpacing="3" alignItems="start">
        <div>{label}</div>
      </Block>
      <Icon name={arrowIcon} />
    </Block>
  );
}

<Accordion border="all" background="neutral-200" allowMultiple>
  <CollapsiblePanel
    id="panel1"
    padding={[3, 4, 5]}
    label={props => (
      <ExampleLabel label="Custom Label" open={props.open} />
    )}
  >
    content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel2" padding={[3, 4, 5]} label="panel 2">
    content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel3" padding={[3, 4, 5]} label="panel 3">
    content
  </CollapsiblePanel>
</Accordion>;
```

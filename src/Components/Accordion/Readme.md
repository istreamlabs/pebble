### Import

Pebble exports 1 additional related component:

- **CollapsiblePanel**: A label and container for a single panel of the Accordion

### Single

By default, only a single panel may be open at one time. Each `<CollapsiblePanel />` requires an `id` and `label`.

```js
import Block from '../Block/Block';
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

<Accordion border="all" defaultOpen="panel2" background="white">
  <CollapsiblePanel
    id="panel1"
    background="neutral-200"
    label="panel 1"
  >
    <Block flex padding={[3, 4, 5]}>
      panel 1 content
    </Block>
  </CollapsiblePanel>
  <CollapsiblePanel
    id="panel2"
    background="neutral-200"
    label="panel 2"
  >
    <Block flex padding={[3, 4, 5]}>
      panel 2 content
    </Block>
  </CollapsiblePanel>
  <CollapsiblePanel
    id="panel3"
    background="neutral-200"
    label="panel 3"
  >
    <Block flex padding={[3, 4, 5]}>
      panel 3 content
    </Block>
  </CollapsiblePanel>
</Accordion>;
```

### Multiple and Start with Panels Open

To allow multiple panels to be open at one time, use `allowMultiple`. Set the `defaultOpen` prop to the id of the panel that should start open, or an array of ids of the panels that should be open

```js
import Block from '../Block/Block';
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

<Accordion
  id="panel1"
  allowMultiple
  border="all"
  background="white"
  defaultOpen={['panel2', 'panel3']}
>
  <CollapsiblePanel
    id="panel1"
    background="neutral-200"
    label="panel 1"
  >
    <Block flex padding={[3, 4, 5]}>
      panel 1 content
    </Block>
  </CollapsiblePanel>
  <CollapsiblePanel
    id="panel2"
    background="neutral-200"
    label="panel 2"
  >
    <Block flex padding={[3, 4, 5]}>
      panel 2 content
    </Block>
  </CollapsiblePanel>
  <CollapsiblePanel
    id="panel3"
    background="neutral-200"
    label="panel 3"
  >
    <Block flex padding={[3, 4, 5]}>
      panel 3 content
    </Block>
  </CollapsiblePanel>
</Accordion>;
```

### Nesting

Accordions can be nested to display complex tree structures.

```js
import Block from '../Block/Block';
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

<Accordion defaultOpen="panel1" border="all">
  <CollapsiblePanel
    id="panel1"
    displayBlock
    background="neutral-200"
    label="panel 1"
  >
    <Accordion className="pl-5" allowMultiple>
      <CollapsiblePanel
        id="nestedPanel1"
        background="neutral-200"
        label="nested panel 1"
      >
        <Block flex padding={[3, 4, 5]}>
          nested panel 1 content
        </Block>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="nestedPanel2"
        background="neutral-200"
        label="nested panel 2"
      >
        <Block flex padding={[3, 4, 5]}>
          nested panel 2 content
        </Block>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="nestedPanel3"
        background="neutral-200"
        label="nested panel 3"
      >
        <Block flex padding={[3, 4, 5]}>
          nested panel 3 content
        </Block>
      </CollapsiblePanel>
    </Accordion>
  </CollapsiblePanel>
  <CollapsiblePanel
    id="panel2"
    background="neutral-200"
    label="panel 2"
  >
    <Block flex padding={[3, 4, 5]}>
      panel 2 content
    </Block>
  </CollapsiblePanel>
  <CollapsiblePanel
    id="panel3"
    background="neutral-200"
    label="panel 3"
  >
    <Block flex padding={[3, 4, 5]}>
      panel 3 content
    </Block>
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

<Accordion border="all" background="neutral-200">
  <CollapsiblePanel
    id="panel1"
    label={props => (
      <ExampleLabel label="Custom Label" open={props.open} />
    )}
  >
    content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel2" label="panel 2">
    content
  </CollapsiblePanel>
  <CollapsiblePanel id="panel3" label="panel 3">
    content
  </CollapsiblePanel>
</Accordion>;
```

### Import

Pebble exports 1 additional related component:

- **AccordionPanel**: A label and container for a single panel of the Accordion

### Single

By default, only a single panel may be open at one time. Each `<AccordionPanel />` requires an `id` and `label`.

```js
import AccordionPanel from './Components/AccordionPanel';

<Accordion
  border="all"
  background="neutral-200"
  onChange={id => console.log(id)}
>
  <AccordionPanel id="panel1" padding={[3, 4, 5]} label="panel 1">
    panel 1 content
  </AccordionPanel>
  <AccordionPanel id="panel2" padding={[3, 4, 5]} label="panel 2">
    panel 2 content
  </AccordionPanel>
  <AccordionPanel id="panel3" padding={[3, 4, 5]} label="panel 3">
    panel 3 content
  </AccordionPanel>
</Accordion>;
```

### Multiple

To allow multiple panels to be open at one time, use `allowMultiple`.

```js
import AccordionPanel from './Components/AccordionPanel';

<Accordion
  allowMultiple
  border="all"
  background="neutral-200"
  onChange={id => console.log(id)}
>
  <AccordionPanel id="panel1" padding={[3, 4, 5]} label="panel 1">
    panel 1 content
  </AccordionPanel>
  <AccordionPanel id="panel2" padding={[3, 4, 5]} label="panel 2">
    panel 2 content
  </AccordionPanel>
  <AccordionPanel id="panel3" padding={[3, 4, 5]} label="panel 3">
    panel 3 content
  </AccordionPanel>
</Accordion>;
```

### Start with Panels Open

Set the `defaultOpen` prop the single string id, or an array of string ids of the panel(s) that should be open

```js
import AccordionPanel from './Components/AccordionPanel';

<Accordion
  defaultOpen={['panel2', 'panel3']}
  border="all"
  background="neutral-200"
  allowMultiple
>
  <AccordionPanel id="panel1" padding={[3, 4, 5]} label="panel 1">
    content
  </AccordionPanel>
  <AccordionPanel id="panel2" padding={[3, 4, 5]} label="panel 2">
    starts open
  </AccordionPanel>
  <AccordionPanel id="panel3" padding={[3, 4, 5]} label="panel 3">
    starts open
  </AccordionPanel>
</Accordion>;
```

### Nesting

Accordions can be nested to display complex tree structures.

```js
import AccordionPanel from './Components/AccordionPanel';

<Accordion defaultOpen={['panel1']} border="all">
  <AccordionPanel
    id="panel1"
    displayBlock
    background="neutral-200"
    label="panel 1"
    textSize="7"
    className="pl-5"
  >
    <Accordion allowMultiple>
      <AccordionPanel
        id="nestedPanel1"
        background="neutral-200"
        label="level 1 panel 1"
        displayBlock
        className="pl-5"
      >
        <Accordion allowMultiple>
          <AccordionPanel
            id="nested2Panel1"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="level 2 panel 1"
          >
            nested 2 panel 1 content
          </AccordionPanel>
          <AccordionPanel
            id="nested2Panel2"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="level 2 panel 2"
          >
            nested 2 panel 2 content
          </AccordionPanel>
          <AccordionPanel
            id="nested2Panel3"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="level 2 panel 3"
          >
            nested 2 panel 3 content
          </AccordionPanel>
        </Accordion>
      </AccordionPanel>
      <AccordionPanel
        id="nestedPanel2"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="level 1 panel 2"
      >
        nested panel 2 content
      </AccordionPanel>
      <AccordionPanel
        id="nestedPanel3"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="level 1 panel 3"
      >
        nested panel 3 content
      </AccordionPanel>
    </Accordion>
  </AccordionPanel>
  <AccordionPanel
    id="panel2"
    background="neutral-200"
    padding={[3, 4, 5]}
    label="panel 2"
  >
    panel 2 content
  </AccordionPanel>
</Accordion>;
```

### Customize the Label

The `label` accepts a render prop function so that it's appearance may be customized.

```js
import AccordionPanel from './Components/AccordionPanel';
import Block from '../Block/Block';
import Icon from '../Icon/Icon';

function ExampleLabel({ open, label }) {
  const arrowIcon = open ? 'nav-up' : 'nav-down';

  return (
    <Block
      textSize="5"
      color="neutral-600"
      paddingHorizontal="4"
      paddingVertical="3"
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
  <AccordionPanel
    id="panel1"
    padding={[3, 4, 5]}
    label={props => (
      <ExampleLabel label="Custom Label" open={props.open} />
    )}
  >
    content
  </AccordionPanel>
  <AccordionPanel id="panel2" padding={[3, 4, 5]} label="panel 2">
    content
  </AccordionPanel>
  <AccordionPanel id="panel3" padding={[3, 4, 5]} label="panel 3">
    content
  </AccordionPanel>
</Accordion>;
```

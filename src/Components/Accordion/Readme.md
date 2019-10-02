### Import

Pebble exports 1 additional related component:

- **AccordionPanel**: A label and container for a single panel of the Accordion

### Single

By default, only a single panel may be open at one time.

```js
import AccordionPanel from './Components/AccordionPanel';

<Accordion
  border="all"
  background="neutral-200"
  onChange={index => console.log(index, 'panel clicked')}
>
  <AccordionPanel padding={[3, 4, 5]} label="panel 1">
    panel 1 content
  </AccordionPanel>
  <AccordionPanel padding={[3, 4, 5]} label="panel 2">
    panel 2 content
  </AccordionPanel>
  <AccordionPanel padding={[3, 4, 5]} label="panel 3">
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
  onChange={index => console.log(index, 'panel clicked')}
>
  <AccordionPanel padding={[3, 4, 5]} label="panel 1">
    panel 1 content
  </AccordionPanel>
  <AccordionPanel padding={[3, 4, 5]} label="panel 2">
    panel 2 content
  </AccordionPanel>
  <AccordionPanel padding={[3, 4, 5]} label="panel 3">
    panel 3 content
  </AccordionPanel>
</Accordion>;
```

### Default Index

Setting a zero-based `defaultIndex` will start with that panel open.

```js
import AccordionPanel from './Components/AccordionPanel';

<Accordion defaultIndex={2} border="all" background="neutral-200">
  <AccordionPanel padding={[3, 4, 5]} label="panel 1">
    panel 1 content
  </AccordionPanel>
  <AccordionPanel padding={[3, 4, 5]} label="panel 2">
    panel 2 content
  </AccordionPanel>
  <AccordionPanel padding={[3, 4, 5]} label="default">
    default content
  </AccordionPanel>
</Accordion>;
```

### Collapsible Panel

```js
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState();

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapsiblePanel
      onToggle={togglePanel}
      open={isOpen}
      id="panel1"
      padding={[3, 4, 5]}
      label="panel 1"
    >
      panel 1 content
    </CollapsiblePanel>
  );
}

<Example />;
```

### Additional ClassNames

Pass a `className` containing custom css to apply in addition to the default styles.

```js
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapsiblePanel
      className="input-error red"
      id="panel1"
      label="panel 1"
      onToggle={togglePanel}
      open={isOpen}
      padding={[3, 4, 5]}
    >
      panel 1 content
    </CollapsiblePanel>
  );
}

<Example />;
```

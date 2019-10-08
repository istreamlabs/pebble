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

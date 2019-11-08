import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import CollapsiblePanel from './CollapsiblePanel';

function Example() {
  const [isOpen, setIsOpen] = useState(true);

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

storiesOf('CollapsiblePanel', module).add('single', () => (
  <Example />
));

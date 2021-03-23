import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import CollapsiblePanel from './CollapsiblePanel';

const Example = props => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapsiblePanel
      id="panel1"
      label="panel 1"
      onToggle={togglePanel}
      open={isOpen}
      padding={[3, 4, 5]}
      {...props}
    >
      panel 1 content
    </CollapsiblePanel>
  );
};

storiesOf('CollapsiblePanel', module).add('single', () => (
  <Example />
));

storiesOf('CollapsiblePanel', module).add('error', () => (
  <Example isError />
));

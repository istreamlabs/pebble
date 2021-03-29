// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './CollapsiblePanel' was resolved to '/User... Remove this comment to see the full error message
import CollapsiblePanel from './CollapsiblePanel';

const Example = props => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('CollapsiblePanel', module).add('single', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Example />
));

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('CollapsiblePanel', module).add('error', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Example className="input-error red" />
));

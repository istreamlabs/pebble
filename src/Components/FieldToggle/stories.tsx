// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldToggle' was resolved to '/Users/esj... Remove this comment to see the full error message
import FieldToggle from './FieldToggle';

function FieldToggleExample() {
  const [toggle, setToggle] = useState(true);
  const [toggleHelp, setToggleHelp] = useState(false);
  const [hiddenLabel, setHiddenLabel] = useState(false);
  const [invalidToggle, setInvalidToggle] = useState(false);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldToggle
        id="demo-toggle"
        label="toggle"
        isSelected={toggle}
        value="first"
        onChange={setToggle}
        className="mb-5"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldToggle
        required
        id="toggleRequired"
        label="required"
        isSelected={toggle}
        value="first"
        onChange={setToggle}
        className="mb-5"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldToggle
        id="toggleHelp"
        label="toggle with helpText"
        helpText="Secure the delivery of streaming media on iOS, tvOS, and Safari on iOS and macOS through the HTTP Live Streaming protocol"
        isSelected={toggleHelp}
        value="first"
        onChange={setToggleHelp}
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldToggle
        disabled
        id="disabledToggle"
        label="disabled toggle"
        helpText="Can not be changed by user input and can not be focused"
        isSelected={toggleHelp}
        value="first"
        onChange={setToggleHelp}
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldToggle
        isInvalid
        validationText="Please acknowledge the terms of service."
        id="toggle-invalid"
        label="I acknowledge the terms of service"
        helpText="this is an invalid toggle"
        isSelected={invalidToggle}
        value="first"
        onChange={setInvalidToggle}
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldToggle
        id="hiddenLabel"
        label="hidden label"
        isSelected={hiddenLabel}
        value="first"
        onChange={setHiddenLabel}
        className="mb-5"
        hideLabel
      />
    </>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('FieldToggle', module).add('all', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <FieldToggleExample />
  </>
));

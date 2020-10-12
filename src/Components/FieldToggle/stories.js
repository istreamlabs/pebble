import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import FieldToggle from './FieldToggle';

function FieldToggleExample() {
  const [toggle, setToggle] = useState(true);
  const [toggleHelp, setToggleHelp] = useState(false);
  const [hiddenLabel, setHiddenLabel] = useState(false);
  const [invalidToggle, setInvalidToggle] = useState(false);

  return (
    <>
      <FieldToggle
        id="demo-toggle"
        label="toggle"
        isSelected={toggle}
        value="first"
        onChange={setToggle}
        className="mb-5"
      />
      <FieldToggle
        id="toggleHelp"
        label="toggle with helpText"
        helpText="Secure the delivery of streaming media on iOS, tvOS, and Safari on iOS and macOS through the HTTP Live Streaming protocol"
        isSelected={toggleHelp}
        value="first"
        onChange={setToggleHelp}
        className="mb-5"
      />

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

storiesOf('FieldToggle', module).add('all', () => (
  <>
    <FieldToggleExample />
  </>
));

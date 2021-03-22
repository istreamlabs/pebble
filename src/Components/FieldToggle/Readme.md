```js
import { useState } from 'react';

function FieldToggleExample() {
  const [toggle, setToggle] = useState(true);
  const [toggleHelp, setToggleHelp] = useState(false);
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
        required
        id="toggleRequired"
        label="required"
        isSelected={toggle}
        value="first"
        onChange={setToggle}
        className="mb-5"
      />
      <FieldToggle
        id="toggleHelp"
        label="toggle with helpText"
        helpText="This is help text"
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
    </>
  );
}

<FieldToggleExample />;
```

<div className="styleguide__callout">
### Toggle vs Checkbox

Toggles should not require users to press a button to apply the settings. When you require users to press a submit button with a toggle, you may confuse them because it’s not the expected next step. In those cases, use [checkboxes](/#/Components/FieldCheckbox) instead.

</div>

## Best Practices

FieldToggle should:

- allow user to view and switch between enabled or disabled states.
- be used when your intent is to turn something on or off **instantly**.
- never require users to press a button to apply the settings. Use a [checkbox](/#/Components/FieldCheckbox) if the setting needs to be applied.

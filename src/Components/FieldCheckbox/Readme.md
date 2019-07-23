### Checkboxes

```js
import { useState } from 'react';

function FieldCheckboxExample() {
  const [checkbox1, setCheckBox1] = useState(true);
  const [checkbox2, setCheckBox2] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [toggleHelp, setToggleHelp] = useState(false);
  const [invalidToggle, setInvalidToggle] = useState(false);

  return (
    <>
      <FieldCheckbox
        id="1"
        label="Checkbox"
        isSelected={checkbox1}
        value="first"
        onChange={setCheckBox1}
        className="mb-5"
      />

      <FieldCheckbox
        id="2"
        label="Checkbox with helpText"
        helpText="Help text for the checkbox"
        isSelected={checkbox2}
        value="second"
        onChange={setCheckBox2}
        className="mb-5"
      />

      <FieldCheckbox
        disabled
        id="checkbox-disabled"
        label="Disabled"
        helpText="Can not be changed by user input and can not be focused"
        isSelected={checkbox2}
        value="second"
        onChange={setCheckBox2}
        className="mb-5"
      />

      <FieldCheckbox
        isInvalid
        validationText="This checkbox is required"
        id="invalid-checkbox"
        label="Invalid"
        helpText="For required acknowledgements (e.g. usage policy)"
        isSelected={invalid}
        value="second"
        onChange={setInvalid}
        className="mb-5"
      />
    </>
  );
}

<FieldCheckboxExample />;
```

<div className="styleguide__callout">
### Toggle vs Checkbox

Toggles should not require users to press a button to apply the settings. When you require users to press a submit button with a toggle, you may confuse them because it’s not the expected next step. If you need to apply a setting instantly, use [toggle](/#/Components/FieldToggle) instead.

</div>

## Best Practices

FieldCheckbox should:

- Work independently from other checkboxes
- Have labels that are framed positively (e.g. `opt in` instead of `opt out`)
- Should be applied when the user presses a form "submit" button

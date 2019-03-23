```js
import { useState } from 'react';

function FieldCheckboxExample() {
  const [checkbox1, setCheckBox1] = useState(true);
  const [checkbox2, setCheckBox2] = useState(false);

  return (
    <>
      <FieldCheckbox
        id="1"
        label="First Checkbox"
        helpText="Help text for the checkbox"
        isSelected={checkbox1}
        value="first"
        onChange={setCheckBox1}
        className="mb-5"
      />

      <FieldCheckbox
        id="2"
        label="Second Checkbox"
        helpText="Help text for the checkbox"
        isSelected={checkbox2}
        value="second"
        onChange={setCheckBox2}
        className="mb-5"
      />

      <FieldCheckbox
        disabled
        id="3"
        label="Disabled"
        helpText="Help text for the checkbox"
        isSelected={checkbox2}
        value="second"
        onChange={setCheckBox2}
        className="mb-5"
      />
    </>
  );
}

<FieldCheckboxExample />
```

## Best Practices

FieldCheckbox should:

* Work independently from other checkboxes
* Have labels that are framed positively (e.g. `opt in` instead of `opt out`)

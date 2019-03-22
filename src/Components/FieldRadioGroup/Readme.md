```js
import { useState } from 'react';

const group1 = [
  {
    id: 'text', value: 'text', label: 'Text', helpText: '1 hour turn around'
  },
  {
    id: 'email', value: 'email', label: 'Email', helpText: '24 hour turn around'
  },
  {
    id: 'phone', value: 'phone', label: 'Phone', helpText: '48 hour turn around'
  },
  {
    id: 'mail', value: 'mail', label: 'Mail', helpText: '5 business days',
  },
];

function FieldRadioGroupExample() {
  const [contactMethod, setContactMethod] = useState('phone');

  return (
    <FieldRadioGroup
      title="Select a contact method"
      helpText="This is how we will contact you with important information."
      radios={group1}
      value={contactMethod}
      onChange={setContactMethod}
      name="group1"
      className="mb-5"
    />
  );
}

<FieldRadioGroupExample />
```

## Best Practices

FieldRadioGroups should:

* Have at least two options
* Have options that are ordered rationally
* Have options that are mutually exclusive

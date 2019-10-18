### FieldTextDebounce Examples

```js
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState('');
  const [longValue, setLongValue] = useState('');
  const [minLengthValue, setMinLengthValue] = useState('');
  return (
    <>
      <FieldTextDebounce
        label="Some Field"
        id="input"
        value={value}
        onDebounce={setValue}
      />
      <div className="fs-6 mt-3 mb-5">
        onDebounce handler result:{' '}
        <span className="fw-700">{value}</span>
      </div>
      <FieldTextDebounce
        disabled
        label="Disabled"
        id="disabled-input"
        value={value}
        onDebounce={setValue}
        className="mb-5"
      />
      <FieldTextDebounce
        isInvalid
        validationText="i am invalid"
        label="Is Invalid"
        id="error-input"
        value={value}
        onDebounce={setValue}
        className="mb-5"
      />
      <FieldTextDebounce
        label="Waits 3 seconds"
        id="long-input"
        delay={3000}
        value={longValue}
        onDebounce={setLongValue}
      />
      <div className="fs-6 mt-3 mb-5">
        will update after 3 second delay:{' '}
        <span className="fw-700">{longValue}</span>
      </div>
      <FieldTextDebounce
        label="Requires 5 characters"
        id="long-input"
        minimumCharacters={5}
        value={minLengthValue}
        onDebounce={setMinLengthValue}
      />
      <div className="fs-6 mt-3 mb-5">
        Will not update until 5 characters are typed:{' '}
        <span className="fw-700">{minLengthValue}</span>
      </div>
    </>
  );
}
<Example />;
```

### Using [FieldText](/#Components/FieldText) Features

```js
import { useState } from 'react';
const [value, setValue] = useState('');
const handleClear = () => {
  setValue('');
};
<>
  <FieldTextDebounce
    label="Supports Clearing"
    id="input"
    value={value}
    onDebounce={setValue}
    clearBtnFunc={handleClear}
    className="mb-5"
  />

  <FieldTextDebounce
    label="Prefix"
    id="prefix-input"
    value={value}
    onDebounce={setValue}
    prefix="$"
    className="mb-5"
  />

  <FieldTextDebounce
    label="placeholder"
    id="placeholder-input"
    value={value}
    onDebounce={setValue}
    placeholder="does not update value right away"
    className="mb-5"
  />
</>;
```

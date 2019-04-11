### FieldSelect Examples

```js
import { useState } from "react";

const options = [
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'boysenberry', label: 'Boysenberry' },
  { value: 'bubblegum', label: 'Bubblegum' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'green-tea', label: 'Green Tea' },
  { value: 'lychee', label: 'Lychee' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function FieldSelectExamples() {
  const [singleValue, setSingleValue] = useState();
  const [multiValue, setMultiValue] = useState();

  return (
    <>
      <FieldSelect
        id="single"
        options={options}
        isSearchable
        className="mb-2"
        label="Single Select"
        helpText="this is help text"
        placeholder="choose one"
        onChange={(object,action)=>{
         setSingleValue(object.value)
        }}
      />

      <div className="mb-5">selected value: {singleValue}</div>

      <FieldSelect
        id="multi"
        options={options}
        multiSelect
        isSearchable
        className="mb-2"
        label="Multi-Select"
        placeholder="choose one or many"
        onChange={(object,action)=>{
          setMultiValue(object.map(o => o.value).join(', '))
        }}
      />
      <div className="mb-5">selected value(s): {multiValue}</div>


      <FieldSelect
        id="checkbox"
        options={options}
        showCheckbox
        multiSelect
        isSearchable
        className="mb-5"
        label="Checkbox Multi-Select"
        placeholder="choose one or many"
      />

      <FieldSelect
        autoFocus
        id="autofocus"
        options={[]}
        className="mb-5"
        label="Autofocus"
        loading
      />

      <FieldSelect
        id="error"
        options={options}
        isInvalid
        className="mb-5"
        label="Invalid Select"
        validationText="this selection is required"
        placeholder="choose one"
      />
    </>
  )
}

<FieldSelectExamples />
```

## Best Practices

FieldSelect should:

* Work independently from other checkboxes. Selecting one checkbox in a collection of checkboxes, should not change the status of another checkbox in the collection. However, an exception is when a checkbox makes a bulk selection of multiple items in a list.
* Have labels that are framed positively (e.g. `opt in` instead of `opt out`)
* Should be applied when the user presses a form "submit" button

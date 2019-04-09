```js
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

import FieldText from '../FieldText/FieldText';

<>
<FieldSelect
  id="single"
  options={options}
  isSearchable
  className="mb-4"
  label="Single Select"
  helpText="this is help text"
  loading
  loadingMessage="i'm loading"
  placeholder="choose one"
/>

<FieldSelect
  id="multi"
  options={options}
  multiSelect
  isSearchable
  className="mb-4"
  label="Multi Select"
  helpText="this is help text"
  loading
  loadingMessage="i'm loading"
  placeholder="choose one or many"
/>

<FieldText
  id="exampleText"
  label="text input"
/>

</>
```


## Best Practices

FieldSelect should:

* Work independently from other checkboxes
* Have labels that are framed positively (e.g. `opt in` instead of `opt out`)
* Should be applied when the user presses a form "submit" button

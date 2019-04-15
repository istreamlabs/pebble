## Examples

* FormLayout applies standard spacing between rows of inputs
* To group related inputs (e.g. city/state/zip) in a single row, wrap them in a `<FormLayoutRow>`
  * Fields will share equal width by default
  * Or set the width of specific fields.
  * Fields without a specific width will equally fill the available space

```js
import Button from '../Button/Button';
import Block from '../Block/Block';
import FieldText from '../FieldText/FieldText';
import FieldSelect from '../FieldSelect/FieldSelect';
import FormLayoutRow from './Components/FormLayoutRow';

import Heading from '../Heading/Heading';

function FormLayoutExample() {

  return (
    <FormLayout width={[100, 100, 6, 7]}>
      <FormLayoutRow>
        <FieldText id="first" label="First Name" />
        <FieldText id="middle" className="w4" label="Middle" />
        <FieldText id="last" label="Last Name" />
      </FormLayoutRow>
      <FieldText id="businessEmail" label="Email" helpText="business email address" />
      <FormLayoutRow>
        <FieldText type="password" id="password" label="Password" />
        <FieldText type="password" id="passwordConfirm" label="Confirm Password" />
      </FormLayoutRow>
      <FormLayoutRow>
        <FieldText width={[100, 33, 40]} id="city" label="City" />
        <FieldSelect width={[100, 34, 40]} id="state" label="State" />
        <FieldText width={[50, 33, 20]} id="zip" label="Postal Code" />
      </FormLayoutRow>
    </FormLayout>
  )
}

<FormLayoutExample />

```

### Tight Spacing

Decrease the horizontal and vertical spacing between inputs

```js
import FieldText from '../FieldText/FieldText';
<FormLayout tight width="5">
  <FieldText id="username" label="Username" />
  <FieldText type="password" id="pw" label="Password" />
  <FieldText type="password" id="pwConfirm" label="Confirm Password" />
</FormLayout>
```

### Shares Props with Block

FormLayout accepts the same props that [Block](/#/Components/Block) accepts, so you can layout forms horizontally as well.

```js
import Button from '../Button/Button';
import FieldText from '../FieldText/FieldText';

<FormLayout width="100%" alignItems="end" direction="row">
  <FieldText id="username2" label="Username" />
  <FieldText type="password" id="pw2" label="Password" />
  <div>
    <Button type="submit" primary>Sign In</Button>
  </div>
</FormLayout>

```

## Best Practices

FormLayout should:

* Be a child of the [Form](/#/Components/Form) component because it is only concerned with layout
* Group related fields together
* Include section [Headings](/#/Components/Form) in longer forms, to give users context and make forms more scannable

### Form Example

```js
import Button from '../Button/Button';
import Block from '../Block/Block';
import FieldText from '../FieldText/FieldText';
import FieldSelect from '../FieldSelect/FieldSelect';
import FormLayoutRow from './Components/FormLayoutRow';

<FormLayout width={[100, 100, 6, 7]}>
  <FormLayoutRow>
    <FieldText id="first" label="First Name" />
    <FieldText id="middle" className="w4" label="Middle" />
    <FieldText id="last" label="Last Name" />
  </FormLayoutRow>
  <FieldText id="email" label="Email" helpText="business email address" />
  <FormLayoutRow>
    <FieldText type="password" id="password" label="Password" />
    <FieldText type="password" id="passwordConfirm" label="Confirm Password" />
  </FormLayoutRow>
  <FormLayoutRow>
    <FieldText width={[100, 33, 40]} id="city" label="City" />
    <FieldSelect width={[100, 34, 40]} id="state" label="State" />
    <FieldText width={[50, 33, 20]} id="zip" label="Postal Code" />
  </FormLayoutRow>
  <div>
  <Button type="submit" primary>Submit</Button>
  </div>
</FormLayout>
```

```js
import Button from '../Button/Button';
import FieldText from '../FieldText/FieldText';

<FormLayout width="100%" alignItems="end" direction="row">
  <FieldText id="username" label="Username" />
  <FieldText id="pw" label="Password" />
  <div>
    <Button type="submit" primary>Sign In</Button>
  </div>
</FormLayout>

```

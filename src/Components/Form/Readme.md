### Form Example

```js
import Button from '../Button/Button';
import Block from '../Block/Block';
import FieldText from '../FieldText/FieldText';

<Form>
  <FieldText id="name" label="Name" />
  <FieldText id="email" label="Email" helpText="enter your business email address" />
  <Block itemSpacing="4">
    <FieldText id="first" label="First Name" />
    <FieldText id="last" label="Last Name" />
  </Block>
  <div>
  <Button type="submit" primary>Submit</Button>
  </div>
</Form>

```

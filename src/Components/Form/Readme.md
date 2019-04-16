## Example

```js
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import FieldText from '../FieldText/FieldText';

<Form
  onSubmit={() => console.log("Form Submitted")}
  onChange={() => console.log("Changed")}
  onReset={() => console.log("Reset")}
>
  <FieldText id="name" label="Name" placeholder="your name here" />
  <FieldText id="email" label="Email" placeholder="jane@example.com" />
  <ButtonGroup>
    <Button type="submit" primary>Submit</Button>
    <Button type="reset">Reset</Button>
  </ButtonGroup>
</Form>

```

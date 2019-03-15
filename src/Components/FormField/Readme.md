
```js

class FormFieldTextInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { value } = this.state;

    return(
      <>
      <FormField
        label="label"
        htmlFor="input-text"
        className="mb-6">
        <Input
          id="input-text"
          placeholder="i'm a form field"
          value={value}
          onChange={this.onChange.bind(this)}
        />
      </FormField>

      <FormField
        label="label"
        htmlFor="input-text2"
        id="input-text2"
        placeholder="i'm a form field"
        value={value}
        onChange={this.onChange.bind(this)}
      />
      </>
    )
  }
};

<FormFieldTextInput/>

```

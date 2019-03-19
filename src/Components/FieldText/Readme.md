### FieldText Examples

```js
import { useState } from "react";
import Input from "../Input/Input";

function FieldTextExample() {
  const [eventResult, setEventResult] = useState("");
  const [wrappingInput, setWrappingInput] = useState("");
  const [basic, setBasic] = useState("");
  const [autoFocus, setAutoFocus] = useState("");
  const [disabledInput, setDisabledInput] = useState("can not edit this");
  const [placeholderInput, setPlaceholderInput] = useState("");
  const [helpTextInput, setHelpTextInput] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [spellcheckInput, setSpellcheckInput] = useState("");
  const [maxLengthInput, setMaxLengthInput] = useState("");
  const [clearBtnInput, setClearBtnInput] = useState("clear me!");

  const handleChange = (e) => {
    setEventResult(`handleChange called with '${e.target.value}'`)
    setBasic(e.target.value);
  }

  const handleFocus = () => {
    setEventResult('handleFocus called')
  }

  const handleBlur = () => {
    setEventResult('handleBlur called')
  }

  const handleClear = () => {
    setClearBtnInput('');
  }

  return (
    <>
      <FieldText label="Wrapping an Input" htmlFor="input-text" className="mb-5">
        <Input
          id="input-text"
          value={wrappingInput}
          onChange={e => setWrappingInput(e.target.value)}
        />
      </FieldText>

      <FieldText
        label="onChange, onBlur, onFocus handlers"
        id="events"
        value={basic}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <div className="fs-6 mt-3 mb-5">event handler result: <span className="fw-700">{eventResult}</span></div>

      <FieldText
        autoFocus
        label="Autofocus"
        id="autofocus"
        value={autoFocus}
        onChange={e => setAutoFocus(e.target.value)}
        className="mb-5"
      />

      <FieldText
        disabled
        label="Disabled"
        id="disabled-input"
        value={disabledInput}
        onChange={e => setDisabledInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        placeholder="e.g. 'name@example.com'"
        label="With Placeholder"
        id="placeholder-input"
        value={placeholderInput}
        onChange={e => setPlaceholderInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        label="With Help Text"
        id="helptext-input"
        value={helpTextInput}
        onChange={e => setHelpTextInput(e.target.value)}
        className="mb-5"
        helpText="I'm some helpful text"
      />

      <FieldText
        isInvalid
        validationText="i am invalid"
        label="Is Invalid"
        id="error-input"
        value={errorInput}
        onChange={e => setErrorInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        spellCheck={false}
        label="Spellcheck Disabled"
        id="spellcheck-input"
        value={spellcheckInput}
        onChange={e => setSpellcheckInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        maxLength={3}
        label="Max Length of 3"
        id="maxLength-input"
        value={maxLengthInput}
        onChange={e => setMaxLengthInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        clearBtnFunc={handleClear}
        label="With Clear Button"
        id="clearBtn-input"
        value={clearBtnInput}
        onChange={e => setClearBtnInput(e.target.value)}
        className="mb-5"
      />
      
    </>
  );
}

<FieldTextExample />;
```

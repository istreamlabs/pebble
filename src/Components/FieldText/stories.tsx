// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldText' was resolved to '/Users/esjaa... Remove this comment to see the full error message
import FieldText from './FieldText';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';

function FieldTextExample() {
  const [eventResult, setEventResult] = useState('');
  const [basic, setBasic] = useState('');
  const [autoFocus, setAutoFocus] = useState('');
  const [disabledInput, setDisabledInput] = useState(
    'can not edit this',
  );
  const [placeholderInput, setPlaceholderInput] = useState('');
  const [helpTextInput, setHelpTextInput] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [spellcheckInput, setSpellcheckInput] = useState('');
  const [maxLengthInput, setMaxLengthInput] = useState('');
  const [clearBtnInput, setClearBtnInput] = useState('clear me!');
  const [readOnlyInput, setReadOnlyInput] = useState(
    'I am read only',
  );
  const [prefixInput, setPrefixInput] = useState('');
  const [suffixInput, setSuffixInput] = useState('');
  const [prefixSuffixInput, setPrefixSuffixInput] = useState('');
  const [characterCountInput, setCharacterCountInput] = useState(
    '13 characters',
  );

  const handleChange = e => {
    setEventResult(`handleChange called with '${e.target.value}'`);
    setBasic(e.target.value);
  };

  const handleFocus = () => {
    setEventResult('handleFocus called');
  };

  const handleBlur = () => {
    setEventResult('handleBlur called');
  };

  const handleClear = () => {
    setClearBtnInput('');
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldText
        label="onChange, onBlur, onFocus handlers"
        id="events"
        value={basic}
        onChange={handleChange}
        onBlur={handleBlur}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        onFocus={handleFocus}
      />

      <div className="fs-6 mt-3 mb-5">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        event handler result:{' '}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <span className="fw-700">{eventResult}</span>
      </div>

      <FieldText
        autoFocus
        label="Autofocus"
        id="autofocus"
        value={autoFocus}
        onChange={e => setAutoFocus(e.target.value)}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        className="mb-5"
      />

      <FieldText
        disabled
        label="Disabled"
        id="disabled-input"
        value={disabledInput}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        onChange={e => setDisabledInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        isReadOnly
        label="Read Only"
        id="readOnly-input"
        value={readOnlyInput}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        onChange={e => setReadOnlyInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        placeholder="e.g. 'name@example.com'"
        label="With Placeholder"
        id="placeholder-input"
        value={placeholderInput}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        onChange={e => setPlaceholderInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        label="With Help Text"
        id="helptext-input"
        value={helpTextInput}
        onChange={e => setHelpTextInput(e.target.value)}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        className="mb-5"
        helpText="I'm some helpful text"
      />

      <FieldText
        isInvalid
        validationText="i am invalid"
        label="Is Invalid"
        id="error-input"
        value={errorInput}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        onChange={e => setErrorInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="Is Required"
        id="required-input"
        className="mb-5"
        required
      />

      <FieldText
        spellCheck={false}
        label="Spellcheck Disabled"
        id="spellcheck-input"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        value={spellcheckInput}
        onChange={e => setSpellcheckInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        maxLength={3}
        label="Max Length of 3"
        id="maxLength-input"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        value={maxLengthInput}
        onChange={e => setMaxLengthInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        prefix="$"
        label="With a prefix"
        id="prefix-input"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        value={prefixInput}
        onChange={e => setPrefixInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        suffix=".99"
        label="With a suffix"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="suffix-input"
        value={suffixInput}
        onChange={e => setSuffixInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        prefix="https://"
        suffix=".com"
        label="With Prefix and Suffix"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="suffix-input2"
        value={prefixSuffixInput}
        onChange={e => setPrefixSuffixInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        showCharacterCount
        maxLength={20}
        label="Character Count with Max Length of 20"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="characterCount-input"
        value={characterCountInput}
        onChange={e => setCharacterCountInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        clearBtnFunc={handleClear}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="With Clear Button"
        id="clearBtn-input"
        value={clearBtnInput}
        onChange={e => setClearBtnInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        hideLabel
        id="hideLabel"
        label="my label is visually hidden"
        placeholder="visually hidden label"
        className="mb-5"
      />
    </>
  );
}

function PrefixSuffixExample() {
  const [prefixInput, setPrefixInput] = useState('');
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const [suffixInput, setSuffixInput] = useState('');
  const [prefixSuffixInput, setPrefixSuffixInput] = useState(
    'istreamplanet',
  );
  const [iconInput, setIconInput] = useState('icon');

  return (
    <>
      <FieldText
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        prefix="$"
        label="With a prefix"
        id="prefix-input"
        value={prefixInput}
        onChange={e => setPrefixInput(e.target.value)}
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldText
        suffix=".99"
        label="With a suffix"
        id="suffix-input"
        value={suffixInput}
        onChange={e => setSuffixInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        size="small"
        prefix="https://"
        suffix=".com"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        type="url"
        label="With Prefix and Suffix"
        id="suffix-input2"
        value={prefixSuffixInput}
        onChange={e => setPrefixSuffixInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        prefix="https://"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        suffix=".com"
        type="url"
        label="With Prefix and Suffix"
        id="suffix-input2"
        value={prefixSuffixInput}
        onChange={e => setPrefixSuffixInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        size="large"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        prefix="https://"
        suffix=".com"
        type="url"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="With Prefix and Suffix"
        id="suffix-input2"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        value={prefixSuffixInput}
        onChange={e => setPrefixSuffixInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        size="small"
        prefix={
          <Icon name="calendar" accessibilityLabel="calendar" />
        }
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        suffix={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Icon name="calendar" accessibilityLabel="calendar" />
        }
        label="Small prefix icon"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="small-prefix-icon-input"
        value={iconInput}
        onChange={e => setIconInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        prefix={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Icon name="calendar" accessibilityLabel="calendar" />
        }
        suffix={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Icon name="calendar" accessibilityLabel="calendar" />
        }
        label="Prefix icon"
        id="prefix-icon-input"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        value={iconInput}
        onChange={e => setIconInput(e.target.value)}
        className="mb-5"
      />

      <FieldText
        size="large"
        prefix={
          <Icon
            name="calendar"
            size="20"
            accessibilityLabel="calendar"
          />
        }
        suffix={
          <Icon
            // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
            name="calendar"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            size="20"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            accessibilityLabel="calendar"
          />
        }
        label="Large prefix icon"
        id="large-prefix-icon-input"
        value={iconInput}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        onChange={e => setIconInput(e.target.value)}
        className="mb-5"
      />
    </>
  );
}

storiesOf('FieldText', module)
  .add('all', () => (
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldTextExample />
      <FieldText
        id="smallSize"
        size="small"
        label="small"
        placeholder="small-sized FieldText"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        className="mb-5"
      />
      <FieldText
        id="defaultSize"
        label="medium (default)"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        placeholder="medium-sized FieldText"
        className="mb-5"
      />
      <FieldText
        id="largeSize"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        size="large"
        label="large"
        placeholder="large-sized FieldText"
      />
      <FieldText
        id="emailType"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        type="email"
        label="email"
        className="mb-5"
      />
      <FieldText
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="passwordType"
        type="password"
        label="password"
        className="mb-5"
      />
      <FieldText
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="searchType"
        type="search"
        label="search"
        className="mb-5"
      />
      <FieldText
        id="telType"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        type="tel"
        label="tel"
        className="mb-5"
      />
      <FieldText
        id="textType"
        type="text"
        label="text"
        className="mb-5"
      />
      <FieldText
        id="urlType"
        type="url"
        label="url"
        className="mb-5"
      />
    </>
  ))
  .add('prefix and suffix', () => <PrefixSuffixExample />);

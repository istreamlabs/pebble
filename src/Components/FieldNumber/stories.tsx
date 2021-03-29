// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldNumber' was resolved to '/Users/esj... Remove this comment to see the full error message
import FieldNumber from './FieldNumber';

function FieldNumberExample() {
  const [eventResult, setEventResult] = useState('');
  const [basic, setBasic] = useState(42);
  const [disabledInput, setDisabledInput] = useState('');
  const [errorInput, setErrorInput] = useState('');

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
    setBasic('');
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldNumber
        label="onChange, onBlur, onFocus handlers"
        id="events"
        value={basic}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        clearBtnFunc={handleClear}
        helpText="I'm some helpful text"
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        className="mb-5"
      />

      <div className="fs-6 mt-3 mb-5">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        event handler result:{' '}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <span className="fw-700">{eventResult}</span>
      </div>

      <FieldNumber
        disabled
        label="Disabled"
        id="disabled-input"
        value={disabledInput}
        onChange={e => setDisabledInput(e.target.value)}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        className="mb-5"
      />

      <FieldNumber
        isInvalid
        validationText="i am invalid"
        label="Is Invalid"
        id="error-input"
        value={errorInput}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        onChange={e => setErrorInput(e.target.value)}
        className="mb-5"
      />

      <FieldNumber
        validationText="i am required"
        label="Is Required"
        id="required-input"
        // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
        className="mb-5"
        required
      />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    </>
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  );
}

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
storiesOf('FieldNumber', module).add('all', () => (
  <>
    <FieldNumberExample />
    <FieldNumber
      id="smallSize"
      size="small"
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      label="small"
      placeholder="small-sized"
      className="mb-5"
    />
    <FieldNumber
      id="defaultSize"
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      label="medium (default)"
      placeholder="medium sized"
      className="mb-5"
    />
    <FieldNumber
      id="largeSize"
      size="large"
      label="large"
      placeholder="large-sized"
    />
  </>
));

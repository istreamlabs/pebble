import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldTextDebounce' was resolved to '/Use... Remove this comment to see the full error message
import FieldTextDebounce from './FieldTextDebounce';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

function Example() {
  const [value, setValue] = useState('');
  const handleClear = () => {
    setValue('');
  };
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldTextDebounce
        autoFocus
        label="Some Field"
        id="input"
        value={value}
        onDebounce={setValue}
      />
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div className="fs-6 mt-3 mb-5">
        onDebounce handler result:{' '}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <span className="fw-700">{value}</span>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldTextDebounce
        label="Clearable"
        id="clear-input"
        value={value}
        clearBtnFunc={handleClear}
        onDebounce={setValue}
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldTextDebounce
        label="Required"
        id="required-input"
        value={value}
        onDebounce={setValue}
        required
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldTextDebounce
        disabled
        label="Disabled"
        id="disabled-input"
        value={value}
        onDebounce={setValue}
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldTextDebounce
        isInvalid
        validationText="i am invalid"
        label="Is Invalid"
        id="error-input"
        value={value}
        onDebounce={setValue}
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldTextDebounce
        hideLabel
        label="hidden label"
        id="hiddenLabel"
        value={value}
        onDebounce={setValue}
        placeholder="hidden label"
        size="small"
      />
    </>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('FieldTextDebounce', module).add('all', () => <Example />);

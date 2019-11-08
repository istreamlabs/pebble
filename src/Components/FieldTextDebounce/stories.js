import '../../Styles/foundation.scss';

import React, { useState } from 'react';

import FieldTextDebounce from './FieldTextDebounce';
import { storiesOf } from '@storybook/react';

function Example() {
  const [value, setValue] = useState('');
  const handleClear = () => {
    setValue('');
  };
  return (
    <>
      <FieldTextDebounce
        label="Some Field"
        id="input"
        value={value}
        onDebounce={setValue}
      />
      <div className="fs-6 mt-3 mb-5">
        onDebounce handler result:{' '}
        <span className="fw-700">{value}</span>
      </div>
      <FieldTextDebounce
        label="Clearable"
        id="clear-input"
        value={value}
        clearBtnFunc={handleClear}
        onDebounce={setValue}
      />
      <FieldTextDebounce
        disabled
        label="Disabled"
        id="disabled-input"
        value={value}
        onDebounce={setValue}
        className="mb-5"
      />

      <FieldTextDebounce
        isInvalid
        validationText="i am invalid"
        label="Is Invalid"
        id="error-input"
        value={value}
        onDebounce={setValue}
        className="mb-5"
      />

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

storiesOf('FieldTextDebounce', module).add('all', () => <Example />);

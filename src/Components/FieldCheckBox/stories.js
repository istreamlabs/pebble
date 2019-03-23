import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import FieldCheckbox from './FieldCheckbox';

function FieldCheckboxExample() {
  const [checkbox1, setCheckBox1] = useState(true);
  const [checkbox2, setCheckBox2] = useState(false);

  return (
    <>
      <FieldCheckbox
        id="1"
        label="First Checkbox"
        helpText="Help text for the checkbox"
        isSelected={checkbox1}
        value="first"
        onChange={setCheckBox1}
        className="mb-5"
      />

      <FieldCheckbox
        id="2"
        label="Second Checkbox"
        helpText="Help text for the checkbox"
        isSelected={checkbox2}
        value="second"
        onChange={setCheckBox2}
        className="mb-5"
      />

      <FieldCheckbox
        disabled
        id="3"
        label="Disabled"
        helpText="Help text for the checkbox"
        isSelected={checkbox2}
        value="second"
        onChange={setCheckBox2}
        className="mb-5"
      />
    </>
  );
}

storiesOf('FieldCheckbox', module)
  .add('all', () => (
    <>
      <FieldCheckboxExample />
    </>
  ));

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Radio from './Radio';
import FieldRadioGroup from './FieldRadioGroup';

const group1 = [
  {
    name: 'group1', id: 'text', value: 'text', label: 'Text', helpText: '1 hour turn around'
  },
  {
    name: 'group1', id: 'email', value: 'email', label: 'Email', helpText: '24 hour turn around'
  },
  {
    name: 'group1', id: 'phone', value: 'phone', label: 'Phone', helpText: '48 hour turn around'
  },
  {
    name: 'group1', id: 'mail', value: 'mail', label: 'Mail', helpText: '5 business days', defaultSelected: true
  },
];

const group2 = [
  {
    name: 'group2', id: 'small', value: 'small', label: 'Small'
  },
  {
    name: 'group2', id: 'medium', value: 'medium', label: 'Medium'
  },
  {
    name: 'group2', id: 'large', value: 'large', label: 'Large'
  },
];

function FieldRadioGroupExample() {
  const [values, setValues] = useState({
    group1: 'email',
    group2: '',
    radio: false,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (

    <>
      <FieldRadioGroup
        title="Select a contact method"
        helpText="This is how we will contact you with important information."
        radios={group1}
        value={values.group1}
        onChange={handleChange}
        name="group1"
        className="mb-5"
      />

      <FieldRadioGroup
        title="T-Shirt Size"
        helpText="Choose a t-shirt size"
        radios={group2}
        value={values.group2}
        onChange={handleChange}
        name="group2"
        className="mb-5"
      />

      <Radio
        id="one"
        label="one"
        isSelected={values.radio}
        name="group3"
        onChange={handleChange}
        value="one"
      />

      {/* <Radio
        label="two"
        isSelected={values.group3 === 'phone'}
        name="group3"
        onChange={handleChange}
        id="two"
        value="two"
      />
      <Radio
        label="three"
        isSelected={values.group3 === 'mail'}
        name="group3"
        onChange={handleChange}
        id="three"
        value="three"
      /> */}
    </>
  );
}

storiesOf('FieldRadioGroup', module)
  .add('all', () => (
    <>
      <FieldRadioGroupExample />
    </>
  ));

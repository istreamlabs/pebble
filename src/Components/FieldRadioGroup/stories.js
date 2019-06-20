import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Radio from './Components/Radio';
import FieldRadioGroup from './FieldRadioGroup';

const group1 = [
  {
    id: 'text', value: 'text', label: 'Text', helpText: '1 hour turn around'
  },
  {
    id: 'email', value: 'email', label: 'Email', helpText: '24 hour turn around'
  },
  {
    id: 'phone', value: 'phone', label: 'Phone', helpText: '48 hour turn around'
  },
  {
    id: 'mail', value: 'mail', label: 'Mail', helpText: '5 business days',
  },
  {
    id: 'neutrino', value: 'neutrino', label: 'Neutrino', helpText: 'Neutrino messaging technology is not available yet', disabled: true
  },
];

const group2 = [
  {
    id: 'small', value: 'small', label: 'Small'
  },
  {
    id: 'medium', value: 'medium', label: 'Medium'
  },
  {
    id: 'large', value: 'large', label: 'Large'
  },
];

function FieldRadioGroupExample() {
  const [contactMethod, setContactMethod] = useState('phone');
  const [size, setSize] = useState('');

  return (
    <>
      <FieldRadioGroup
        title="Select a contact method"
        helpText="This is how we will contact you with important information."
        radios={group1}
        value={contactMethod}
        onChange={setContactMethod}
        name="group1"
        className="mb-5"
      />

      <FieldRadioGroup
        title="T-Shirt Size"
        helpText="Choose a t-shirt size"
        radios={group2}
        value={size}
        onChange={setSize}
        name="group2"
        className="mb-5"
      />
      <Radio
        label="yes"
        isSelected
        name="group3"
        onChange={() => {}}
        id="group3-yes"
        value="yes"
      />
      <Radio
        label="no"
        isSelected={false}
        name="group3"
        onChange={() => {}}
        id="group3-no"
        value="no"
      />
      <Radio
        label="disabled"
        isSelected={false}
        name="group3"
        onChange={() => {}}
        id="group3-disabled"
        value="no"
        disabled
      />
    </>
  );
}

storiesOf('FieldRadioGroup', module)
  .add('all', () => (
    <>
      <FieldRadioGroupExample />
    </>
  ));

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Radio from './Radio';
import FieldRadioGroup from './FieldRadioGroup';

const contactMethods = [
  {
    name: 'contactMethod', id: 'text', value: 'text', label: 'Text', helpText: '1 hour turn around'
  },
  {
    name: 'contactMethod', id: 'email', value: 'email', label: 'Email', helpText: '24 hour turn around'
  },
  {
    name: 'contactMethod', id: 'phone', value: 'phone', label: 'Phone', helpText: '48 hour turn around'
  },
  {
    name: 'contactMethod', id: 'mail', value: 'mail', label: 'Mail', helpText: '5 business days', defaultSelected: true
  },
];

function FieldRadioGroupExample() {
  const [selected, setSelected] = useState('email');

  const handleChange = (newSelected) => {
    setSelected(newSelected);
  };

  return (

    <>
      <FieldRadioGroup
        helpText="This is how we will contact you with important information."
        title="Select a contact method"
        radios={contactMethods}
        value={selected}
        onChange={handleChange}
      />

      {/* <Radio
        label="email"
        helpText="the 21st century way"
        isSelected={selected === 'email'}
        name="contactMethod"
        onChange={handleChange}
        id="email"
        value="email"
      />
      <Radio
        label="phone"
        helpText="voice communication!"
        isSelected={selected === 'phone'}
        name="contactMethod"
        onChange={handleChange}
        id="phone"
        value="phone"
      />
      <Radio
        label="mail"
        helpText="for the least urgent communication"
        isSelected={selected === 'mail'}
        name="contactMethod"
        onChange={handleChange}
        id="mail"
        value="mail"
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

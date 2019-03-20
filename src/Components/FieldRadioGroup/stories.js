import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Radio from './Radio';
import FieldRadioGroup from './FieldRadioGroup';

const contactMethods = [
  {
    name: 'contactMethod', id: 'email', value: 'email', label: 'Email', defaultSelected: true
  },
  {
    name: 'contactMethod', id: 'phone', value: 'phone', label: 'Phone'
  },
  {
    name: 'contactMethod', id: 'mail', value: 'mail', label: 'Mail'
  },
];

function FieldRadioGroupExample() {
  const [selected, setSelected] = useState('email');

  const handleChange = (newSelected) => {
    setSelected(newSelected);
  };

  return (
    // <FieldRadioGroup
    //   helpText="This is how we will contact you with important information."
    //   title="Select a contact method"
    //   radios={contactMethods}
    //   onRadioChange={onRadioChange}
    // />
    <>
      <Radio
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

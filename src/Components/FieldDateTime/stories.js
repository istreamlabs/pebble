import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import FieldDateTime from './FieldDateTime';

const FieldDateTimeExample = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (value) => {
    console.log('Value is:', value);
    setSelectedDate(value);
  }
  return <FieldDateTime {...props} label="start time" timeFormat="HH:mm" helpText="Please Select a start time..." value={selectedDate} onChange={handleChange} />;
};

storiesOf('FieldDateTime', module)
  .add('all', () => <FieldDateTimeExample />)
  .add('validation', () => <FieldDateTimeExample isInvalid validationText="you suck" />);

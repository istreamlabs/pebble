import '../../Styles/foundation.scss';

import React, { useState } from 'react';

import FieldDateTime from './FieldDateTime';
import { storiesOf } from '@storybook/react';

const FieldDateTimeExample = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (value) => {
    console.log('Value is:', value);
    setSelectedDate(value);
  };
  return (
    <FieldDateTime
      label="start time"
      helpText="Please Select a start time..."
      timeFormat="HH:mm"
      value={selectedDate}
      onChange={handleChange}
      {...props}
    />
  );
};

storiesOf('FieldDateTime', module)
  .add('date and time', () => <FieldDateTimeExample />)
  .add('date only', () => <FieldDateTimeExample includeTime={false} />)
  .add('validation', () => <FieldDateTimeExample isInvalid validationText="validation message text" />)
  .add('with portal', () => <FieldDateTimeExample withPortal />)
  .add('am/pm time', () => <FieldDateTimeExample timeFormat="h:mm aa" />);

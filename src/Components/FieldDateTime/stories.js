import '../../Styles/foundation.scss';

import React, { useState } from 'react';
import FieldDateTime from './FieldDateTime';
import { storiesOf } from '@storybook/react';

const FieldDateTimeExample = (props) => {
  const [selectedDate, setSelectedDate] = useState('2019-06-26T12:00:00.000Z');
  const handleChange = (value) => {
    console.log('Value is:', value);
    setSelectedDate(value);
  };
  return (
    <FieldDateTime
      id="myDatePicker"
      label="start time"
      value={selectedDate}
      onChange={handleChange}
      {...props}
    />
  );
};

const filterDate = (value) => {
  const date = new Date(value);
  return date.getDay() < 5;
};

storiesOf('FieldDateTime', module)
  .add('date and time', () => <FieldDateTimeExample />)
  .add('date and time select local', () => <FieldDateTimeExample selectLocalDateTime />)
  .add('date only', () => <FieldDateTimeExample includeTime={false} label="start date" />)
  .add('validation', () => <FieldDateTimeExample isInvalid validationText="validation message text" />)
  .add('am/pm time', () => <FieldDateTimeExample timeFormat="h:mm a" />)
  .add('disabled', () => <FieldDateTimeExample disabled />)
  .add('portal', () => <FieldDateTimeExample withPortal />)
  .add('Date Range', () => <FieldDateTimeExample minDate="2019-06-25T12:00:00.000Z" maxDate="2019-06-27T12:00:00.000Z" />)
  .add('Time Range', () => <FieldDateTimeExample minTime={new Date('2019-06-25T09:00:00.000Z')} maxTime={new Date('2019-06-27T17:00:00.000Z')} />)
  .add('Filter Dates (weekdays only)', () => <FieldDateTimeExample filterDate={filterDate} />)
  .add('with help text', () => <FieldDateTimeExample helpText="Some more information about this field" />);


  // TODO: min and max props
  // TODO: Consider show timezone rather than "local"

import '../../Styles/foundation.scss';

import React, { useState } from 'react';
import FieldDateTime from './FieldDateTime';
import { storiesOf } from '@storybook/react';

const FieldDateTimeExample = (props) => {
  const [selectedDate, setSelectedDate] = useState('2019-09-02T12:07:53.362Z');
  const handleChange = (value) => {
    console.log('Value is:', value);
    setSelectedDate(value);
  };
  return (
    <FieldDateTime
      label="start time"
      // helpText="Please Select a start time..."
      timeFormat="HH:mm"
      // selectLocalDateTime
      value={selectedDate}
      onChange={handleChange}
      {...props}
    />
  );
};

storiesOf('FieldDateTime', module)
  .add('date and time', () => <FieldDateTimeExample id="foo" />)
  .add('date only', () => <FieldDateTimeExample includeTime={false} />)
  .add('validation', () => <FieldDateTimeExample isInvalid validationText="validation message text" />)
  .add('am/pm time', () => <FieldDateTimeExample timeFormat="h:mm a" />)
  .add('disabled', () => <FieldDateTimeExample disabled />)
  .add('with help text', () => <FieldDateTimeExample helpText="Some more information about this field" />);

  // TODO: add back portal
  // TODO: add icon in
  // TODO: min and max props
  // TODO: Exclude (weekdays only?)
  // TODO:

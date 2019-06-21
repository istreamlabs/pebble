```jsx
import { useState } from 'react';
import Block from '../Block/Block';

function FieldDateTimeExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (value) => {
    console.log('Value is:', value);
    setSelectedDate(value);
  };

  return (
    <Block direction="column" itemSpacing="5">
      <FieldDateTime
        id="dateTime"
        timeFormat="HH:mm"
        label="Date and Time"
        value={selectedDate}
        onChange={handleChange}
      />

      <FieldDateTime
        id="dateOnly"
        includeTime={false}
        label="Date Only"
        value={selectedDate}
        onChange={handleChange}
        helpText="Only allows for date selection"
      />

      <FieldDateTime
        id="disabled"
        label="Disabled"
        value={selectedDate}
        onChange={handleChange}
        disabled
      />

      <FieldDateTime
        id="timeOnly"
        label="Select Time Only"
        showTimeSelect
        value={selectedDate}
        onChange={handleChange}
        showTimeSelectOnly
      />

      <FieldDateTime
        id="dateTime"
        timeFormat="HH:mm"
        label="Invalid Date and Time"
        value={selectedDate}
        onChange={handleChange}
        isInvalid
        validationText="Select a date and time"
      />

    </Block>
  )
}

<FieldDateTimeExample />


```

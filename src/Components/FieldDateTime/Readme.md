This component uses [react date picker](https://reactdatepicker.com/) under the hood. See their documentation for additional props.

## Common Examples

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
        id="ampm"
        timeFormat="h:mm a"
        label="Date and 12 hour am/pm time"
        value={selectedDate}
        onChange={handleChange}
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
        id="invalidDateTime"
        timeFormat="HH:mm"
        label="Invalid"
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



### Set Time in Local Time Zone

Too allow for entering a date/time in the browser's local time zone instead of UTC, set `selectLocalDateTime` to `true`.

```jsx
import { useState } from 'react';

function FieldDateTimeLocal() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (value) => {
    setSelectedDate(value);
  };

  return (
    <FieldDateTime
      selectLocalDateTime
      id="localDateTime"
      timeFormat="HH:mm"
      label="Date and Time"
      value={selectedDate}
      onChange={handleChange}
    />
  )
}

<FieldDateTimeLocal />
```

### Min/Max Dates

Depending on the use case, there are a few ways to exclude dates and times from being selectable.

```jsx
import { useState } from 'react';

function FieldDateTimeExample() {
  const [selectedDate, setSelectedDate] = useState();

  const handleChange = (value) => {
    console.log('Value is:', value);
    setSelectedDate(value);
  };

  // do we show

  return (
    <>
      <FieldDateTime
        id="future"
        timeFormat="HH:mm"
        label="Exclude past days"
        helpText="Set a minDate to allow selection of days going forward"
        placeholderText="Select a date in the future"
        value={selectedDate}
        onChange={handleChange}
        minDate={new Date()}
        className="mb-5"
      />

      <FieldDateTime
        id="past"
        timeFormat="HH:mm"
        label="Exclude future days"
        placeholderText="Select a date in the past"
        helpText="Set a maxDate to allow selection of previous days"
        value={selectedDate}
        onChange={handleChange}
        maxDate={new Date()}
      />
    </>
  )
}

<FieldDateTimeExample />
```


### Calendar Modal (Portal)

If a `FieldDateTime` component is contained within a block element that has overflow: hidden, use the `withPortal` prop to render the calendar as an modal overlay.

```js
import { useState } from 'react';
import Card from '../Card/Card';

function PortalExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (value) => {
    setSelectedDate(value);
  };

  return (
    <Card sectioned>
      <FieldDateTime
        withPortal
        id="portal"
        timeFormat="HH:mm"
        label="With Portal"
        value={selectedDate}
        onChange={handleChange}
      />
      <FieldDateTime
        id="withoutPortal"
        timeFormat="HH:mm"
        label="Without Portal"
        value={selectedDate}
        onChange={handleChange}
      />
    </Card>
  )
}

<PortalExample />

```

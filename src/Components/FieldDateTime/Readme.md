<div className="styleguide__callout">
#### Note about custom date formats

To correctly handle the experience of typing a UTC time, the
dateFormat must include the UTC offset of 'Z'. If you are using the
default dateFormat this is already included.

</div>

```jsx
import { useState } from 'react';
import Block from '../Block/Block';

function FieldDateTimeExample() {
  const [selectedDate, setSelectedDate] = useState(
    '2019-06-26T12:00:00.000Z',
  );

  return (
    <Block direction="column" itemSpacing="5">
      <FieldDateTime
        id="dateTime"
        timeFormat="HH:mm"
        label="Date and Time"
        value={selectedDate}
        onChange={setSelectedDate}
      />
      <FieldDateTime
        id="dateOnly"
        excludeTime
        label="Date Only"
        value={selectedDate}
        onChange={setSelectedDate}
        helpText="Only allows for date selection"
      />
      <FieldDateTime
        id="ampm"
        timeFormat="h:mm a"
        label="Date and 12 hour am/pm time"
        value={selectedDate}
        onChange={setSelectedDate}
      />
      <FieldDateTime
        id="disabled"
        label="Disabled"
        value={selectedDate}
        onChange={setSelectedDate}
        disabled
      />
      <FieldDateTime
        id="timeOnly"
        label="Select Time Only"
        showTimeSelect
        value={selectedDate}
        onChange={setSelectedDate}
        showTimeSelectOnly
      />
      <FieldDateTime
        id="invalidDateTime"
        timeFormat="HH:mm"
        label="Invalid"
        value={selectedDate}
        onChange={setSelectedDate}
        isInvalid
        validationText="Select a date and time"
      />
    </Block>
  );
}

<FieldDateTimeExample />;
```

### Set Time in Local Time Zone

To allow for entering a date/time in the browser's local time zone instead of UTC, set `selectLocalDateTime` to `true`.

```jsx
import { useState } from 'react';

function FieldDateTimeLocal() {
  const [selectedDate, setSelectedDate] = useState(
    '2019-06-26T12:00:00.000Z',
  );

  return (
    <FieldDateTime
      selectLocalDateTime
      id="localDateTime"
      label="Date and Time"
      value={selectedDate}
      onChange={setSelectedDate}
    />
  );
}

<FieldDateTimeLocal />;
```

### Clearable

To show the clear button and show a no value message set `isClearable` and `placeholderText`

```jsx
import { useState } from 'react';

function FieldDateTimeClear() {
  const [selectedDate, setSelectedDate] = useState(
    '2019-06-26T12:00:00.000Z',
  );

  return (
    <FieldDateTime
      selectLocalDateTime
      id="clearDateTime"
      label="Date and Time"
      value={selectedDate}
      placeholderText="value has been cleared"
      isClearable
      onChange={setSelectedDate}
    />
  );
}

<FieldDateTimeClear />;
```

### Min/Max Selectable Dates

Depending on the use case, there are a few ways to exclude dates and times from being selectable.

```jsx
import { useState } from 'react';

function FieldDateTimeExample() {
  const [selectedDate, setSelectedDate] = useState(
    '2019-06-26T12:00:00.000Z',
  );

  return (
    <>
      <FieldDateTime
        id="future"
        label="Exclude past days"
        helpText="Set a minDate to allow selection of days going forward"
        placeholderText="Select a date in the future"
        value={selectedDate}
        onChange={setSelectedDate}
        minDate={new Date()}
        className="mb-5"
      />

      <FieldDateTime
        id="past"
        label="Exclude future days"
        placeholderText="Select a date in the past"
        helpText="Set a maxDate to allow selection of previous days"
        value={selectedDate}
        onChange={setSelectedDate}
        maxDate={new Date()}
      />
    </>
  );
}

<FieldDateTimeExample />;
```

### Min/Max Selectable Time

Set a minimum and maximum selectable time. If a `minTime` is passed without a `maxTime`, the `maxTime` will be end of day. If a `maxTime` is passed without a `minTime`, the `minTime` will be start of day.

```jsx
import { useState } from 'react';
import moment from 'moment';

function FieldDateTimeTimeRange() {
  const [startDate, setStartDate] = useState(
    moment().utc().hours(17).minutes(30),
  );

  const [minTimeExample, setMinTimeExample] = useState(
    moment().utc().hours(9).minutes(30),
  );

  const [maxTimeExample, setMaxTimeExample] = useState(
    moment().utc().hours(11).minutes(30),
  );

  return (
    <>
      <FieldDateTime
        id="minTime"
        label="17:00 - 19:30"
        value={startDate}
        onChange={setStartDate}
        showTimeSelect
        minTime={moment().utc().hours(17).minutes(0)}
        maxTime={moment().utc().hours(19).minutes(30)}
        className="mb-5"
      />

      <FieldDateTime
        id="afterMinTime"
        label="After 8:00"
        value={minTimeExample}
        onChange={setMinTimeExample}
        showTimeSelect
        minTime={moment().utc().hours(8).minutes(0)}
        className="mb-5"
      />
      <FieldDateTime
        id="beforeMaxTime"
        label="Before 12:00"
        value={maxTimeExample}
        onChange={setMaxTimeExample}
        showTimeSelect
        maxTime={moment().utc().hours(12).minutes(0)}
      />
    </>
  );
}

<FieldDateTimeTimeRange />;
```

### Calendar Popup Placement

Use `popperPlacement` to control the preferred calendar popup placement is relative to the input field. If there is a no room in the viewport to fit the calendar due to the field's location on the page, the calendar will pop up on the opposite side.

```jsx
<FieldDateTime
  id="topStart"
  timeFormat="HH:mm"
  label="top-start placement"
  popperPlacement="top-start"
  className="mb-5"
  value="2019-06-26T12:00:00.000Z"
  onChange={() => {}}
/>
<FieldDateTime
  id="bottomEnd"
  timeFormat="HH:mm"
  label="bottom-end placement"
  popperPlacement="bottom-end"
  value="2019-06-26T12:00:00.000Z"
  onChange={() => {}}
/>
```

### Calendar Modal (Portal)

If a `FieldDateTime` component is contained within a block element that has overflow: hidden, use the `withPortal` prop to render the calendar as an modal overlay.

```js
import { useState } from 'react';
import Card from '../Card/Card';

function PortalExample() {
  const [selectedDate, setSelectedDate] = useState(
    '2019-06-26T12:00:00.000Z',
  );

  const handleChange = (value) => {
    setSelectedDate(value);
  };

  return (
    <Card sectioned>
      <FieldDateTime
        withPortal
        id="portal"
        label="With Portal"
        value={selectedDate}
        onChange={handleChange}
      />
      <FieldDateTime
        id="withoutPortal"
        label="Without Portal"
        value={selectedDate}
        onChange={handleChange}
      />
    </Card>
  );
}

<PortalExample />;
```

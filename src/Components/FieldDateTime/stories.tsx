import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldDateTime' was resolved to '/Users/e... Remove this comment to see the full error message
import FieldDateTime from './FieldDateTime';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

const FieldDateTimeExample = props => {
  const [selectedDate, setSelectedDate] = useState(
    '2019-06-26T12:00:00.000Z',
  );
  const handleChange = value => {
    setSelectedDate(value);
  };
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldDateTime
      id="myDatePicker"
      label="start time"
      value={selectedDate}
      onChange={handleChange}
      {...props}
    />
  );
};

const FieldDateTimeEmptyExample = props => {
  const [selectedDate, setSelectedDate] = useState('');
  const handleChange = value => {
    setSelectedDate(value);
  };
  return (
    <FieldDateTime
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      id="myDatePicker"
      label="start time"
      value={selectedDate}
      onChange={handleChange}
      {...props}
    />
  );
};

const filterDate = value => {
  const date = new Date(value);
  return date.getDay() < 5;
};

storiesOf('FieldDateTime', module)
  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
  .add('date and time', () => <FieldDateTimeExample />)
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('date and time select local', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldDateTimeExample selectLocalDateTime />
  ))
  .add('date only', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldDateTimeExample excludeTime label="start date" />
  ))
  .add('clearable', () => (
    <>
      <FieldDateTimeExample
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="Can be cleared"
        isClearable
        size="small"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldDateTimeExample label="Can be cleared" isClearable />
      <FieldDateTimeExample
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="Can be cleared"
        isClearable
        size="large"
      />
    </>
  ))
  .add('Empty DateTime', () => (
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldDateTimeEmptyExample
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="myDatePickerEnabled"
        label="enabled"
      />
      <FieldDateTimeEmptyExample
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="myDatePickerDisabled"
        label="disabled"
        disabled
      />
      <FieldDateTimeEmptyExample
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="myDatePickerLocalEnabled"
        label="local enabled"
        selectLocalDateTime
      />
      <FieldDateTimeEmptyExample
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="myDatePickerLocalDisabled"
        label="local disabled"
        disabled
        selectLocalDateTime
      />
    </>
  ))
  .add('validation', () => (
    <FieldDateTimeExample
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      isInvalid
      validationText="validation message text"
    />
  ))
  .add('required', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldDateTimeExample required label="Required" />
  ))
  .add('am/pm time', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldDateTimeExample timeFormat="h:mm a" />
  ))
  .add('disabled', () => <FieldDateTimeExample disabled />)
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('portal', () => <FieldDateTimeExample withPortal />)
  .add('Date Range', () => (
    <FieldDateTimeExample
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      minDate="2019-06-25T12:00:00.000Z"
      maxDate="2019-06-27T12:00:00.000Z"
    />
  ))
  .add('Filter Dates (weekdays only)', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldDateTimeExample filterDate={filterDate} />
  ))
  .add('with help text', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldDateTimeExample helpText="Some more information about this field" />
  ))
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('autoFocus', () => <FieldDateTimeExample autoFocus />)
  .add('sizes', () => (
    <>
      <FieldDateTimeExample
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="smallpicker"
        size="small"
        className="mb-5"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldDateTimeExample id="defaultPicker" className="mb-5" />
      <FieldDateTimeExample
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        id="largePicker"
        size="large"
        className="mb-7"
      />
    </>
  ));

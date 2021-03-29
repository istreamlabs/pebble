// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DateTime' was resolved to '/Users/esjaas... Remove this comment to see the full error message
import DateTime from './DateTime';

function DateTimeExample() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block itemSpacing="6" direction="column">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime value="2019-06-26T12:00:00.000Z" />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime label="start time" value="2019-06-26T15:30:00.000Z" />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime
        value="2019-06-26T15:30:00.000Z"
        displayLocalDateTime
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime
        showAlternativeTimeZone
        label="Start Time"
        value="2019-06-26T15:30:00.000Z"
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime
        displayLocalDateTime
        showAlternativeTimeZone
        label="Start Time"
        value="2019-06-26T15:30:00.000Z"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime
        dateFormat="ddd, MMMM D, YYYY - h:mm a"
        showAlternativeTimeZone
        value="2019-06-26T15:30:00.000Z"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime
        hideTimeZone
        showAlternativeTimeZone
        value="2019-06-26T15:30:00.000Z"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime size="small" value="2019-06-26T12:00:00.000Z" />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime size="medium" value="2019-06-26T12:00:00.000Z" />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime size="large" value="2019-06-26T12:00:00.000Z" />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime
        size="small"
        showAlternativeTimeZone
        value="2019-06-26T12:00:00.000Z"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime
        size="medium"
        showAlternativeTimeZone
        value="2019-06-26T12:00:00.000Z"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateTime
        size="large"
        showAlternativeTimeZone
        value="2019-06-26T12:00:00.000Z"
      />
    </Block>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('DateTime', module).add('all', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <DateTimeExample />
  </>
));

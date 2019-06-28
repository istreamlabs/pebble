import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Block from '../Block/Block';
import DateTime from './DateTime';

function DateTimeExample() {
  return (
    <Block itemSpacing="5" direction="column">
      <DateTime
        value="2019-06-26T12:00:00.000Z"
      />

      <DateTime
        label="start time"
        value="2019-06-26T15:30:00.000Z"
      />

      <DateTime
        value="2019-06-26T15:30:00.000Z"
        displayLocalDateTime
      />

      <DateTime
        showAlternativeTimeZone
        label="Start Time"
        value="2019-06-26T15:30:00.000Z"
        className="mb-5"
      />

      <DateTime
        displayLocalDateTime
        showAlternativeTimeZone
        label="Start Time"
        value="2019-06-26T15:30:00.000Z"
      />

      <DateTime
        dateFormat="ddd, MMMM D, YYYY - h:mm a"
        showAlternativeTimeZone
        value="2019-06-26T15:30:00.000Z"
      />
    </Block>
  );
}

storiesOf('DateTime', module)
  .add('all', () => (
    <>
      <DateTimeExample />
    </>
  ));

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import DateTime from './DateTime';

const FieldDateTimeExample = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return <DateTime label="start time" helpText="Please Select a start time..." selected={selectedDate} onChange={setSelectedDate} />;
};

storiesOf('DateTime', module)
  .add('all', () => <FieldDateTimeExample  />);

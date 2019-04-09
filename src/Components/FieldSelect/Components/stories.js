import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../Styles/foundation.scss';

import Select from './Select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

storiesOf('Select', module)
  .add('all', () => (
    <>
      <Select
        options={options}
        multiSelect
        isSearchable
        className="mb-4"
      />
      <Select
        options={options}
        isSearchable
      />
    </>
  ));

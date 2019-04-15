import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Form from './Form';

import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import FieldText from '../FieldText/FieldText';

function FormExample() {
  return (
    <Form>
      <FieldText id="name" label="Name" placeholder="your name here" />
      <FieldText id="email" label="Email" placeholder="jane@example.com" />
      <ButtonGroup>
        <Button type="submit" primary>Submit</Button>
        <Button type="reset">Reset</Button>
      </ButtonGroup>
    </Form>
  );
}

storiesOf('Form', module)
  .add('all', () => (
    <FormExample />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import FormLayout from './FormLayout';

import FieldSelect from '../FieldSelect/FieldSelect';
import FormLayoutRow from './Components/FormLayoutRow';
import FieldText from '../FieldText/FieldText';

function FormLayoutExample() {
  return (
    <FormLayout width={[100, 100, 6, 7]}>
      <FormLayoutRow>
        <FieldText id="first" label="First Name" />
        <FieldText id="middle" width="80px" label="Middle" />
        <FieldText id="last" label="Last Name" />
      </FormLayoutRow>
      <FieldText id="businessEmail" label="Email" helpText="business email address" />
      <FormLayoutRow>
        <FieldText type="password" id="password" label="Password" />
        <FieldText type="password" id="passwordConfirm" label="Confirm Password" />
      </FormLayoutRow>
      <FormLayoutRow>
        <FieldText width={[100, 33, 40]} id="city" label="City" />
        <FieldSelect width={[100, 34, 40]} id="state" label="State" />
        <FieldText width={[50, 33, 20]} id="zip" label="Postal Code" />
      </FormLayoutRow>
    </FormLayout>
  );
}

storiesOf('FormLayout', module)
  .add('all', () => (
    <FormLayoutExample />
  ));

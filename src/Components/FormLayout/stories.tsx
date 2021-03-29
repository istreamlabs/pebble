// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FormLayout' was resolved to '/Users/esja... Remove this comment to see the full error message
import FormLayout from './FormLayout';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../FieldSelect/FieldSelect' was resolved t... Remove this comment to see the full error message
import FieldSelect from '../FieldSelect/FieldSelect';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/FormLayoutRow' was resolved t... Remove this comment to see the full error message
import FormLayoutRow from './Components/FormLayoutRow';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../FieldText/FieldText' was resolved to '/... Remove this comment to see the full error message
import FieldText from '../FieldText/FieldText';

function FormLayoutExample() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FormLayout width={[100, 100, 6, 7]}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FormLayoutRow>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldText id="first" label="First Name" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldText id="middle" width="80px" label="Middle" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldText id="last" label="Last Name" />
      </FormLayoutRow>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldText
        id="businessEmail"
        label="Email"
        helpText="business email address"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FormLayoutRow>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldText type="password" id="password" label="Password" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldText
          type="password"
          id="passwordConfirm"
          label="Confirm Password"
        />
      </FormLayoutRow>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FormLayoutRow>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldText width={[100, 33, 40]} id="city" label="City" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldSelect width={[100, 34, 40]} id="state" label="State" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldText
          width={[50, 33, 20]}
          id="zip"
          label="Postal Code"
        />
      </FormLayoutRow>
    </FormLayout>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('FormLayout', module).add('all', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <FormLayoutExample />
));

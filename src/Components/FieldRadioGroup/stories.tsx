// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Radio' was resolved to '/User... Remove this comment to see the full error message
import Radio from './Components/Radio';
// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldRadioGroup' was resolved to '/Users... Remove this comment to see the full error message
import FieldRadioGroup from './FieldRadioGroup';

const group1 = [
  {
    id: 'text',
    value: 'text',
    label: 'Text',
    helpText: '1 hour turn around',
  },
  {
    id: 'email',
    value: 'email',
    label: 'Email',
    helpText: '24 hour turn around',
  },
  {
    id: 'phone',
    value: 'phone',
    label: 'Phone',
    helpText: '48 hour turn around',
  },
  {
    id: 'mail',
    value: 'mail',
    label: 'Mail',
    helpText: '5 business days',
  },
  {
    id: 'neutrino',
    value: 'neutrino',
    label: 'Neutrino',
    helpText: 'Neutrino messaging technology is not available yet',
    disabled: true,
  },
];

const group2 = [
  {
    id: 'small',
    value: 'small',
    label: 'Small',
  },
  {
    id: 'medium',
    value: 'medium',
    label: 'Medium',
  },
  {
    id: 'large',
    value: 'large',
    label: 'Large',
  },
];

function FieldRadioGroupExample() {
  const [contactMethod, setContactMethod] = useState('phone');
  const [size, setSize] = useState('');

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldRadioGroup
        title="Select a contact method"
        helpText="This is how we will contact you with important information."
        radios={group1}
        value={contactMethod}
        onChange={setContactMethod}
        name="group1"
        className="mb-5"
        required
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldRadioGroup
        title="T-Shirt Size"
        helpText="Choose a t-shirt size"
        radios={group2}
        value={size}
        onChange={setSize}
        name="group2"
        className="mb-5"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Radio
        label="yes"
        isSelected
        name="group3"
        onChange={() => {}}
        id="group3-yes"
        value="yes"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Radio
        label="no"
        isSelected={false}
        name="group3"
        onChange={() => {}}
        id="group3-no"
        value="no"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Radio
        label="disabled"
        isSelected={false}
        name="group3"
        onChange={() => {}}
        id="group3-disabled"
        value="no"
        disabled
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Radio
        label="selected and disabled"
        isSelected
        name="group3"
        onChange={() => {}}
        id="group3-selecteddisabled"
        value="no"
        disabled
      />
    </>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('FieldRadioGroup', module).add('all', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <FieldRadioGroupExample />
  </>
));

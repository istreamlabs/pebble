// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Form' was resolved to '/Users/esjaastad/... Remove this comment to see the full error message
import Form from './Form';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ButtonGroup/ButtonGroup' was resolved t... Remove this comment to see the full error message
import ButtonGroup from '../ButtonGroup/ButtonGroup';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../FieldText/FieldText' was resolved to '/... Remove this comment to see the full error message
import FieldText from '../FieldText/FieldText';

function FormExample() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Form>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldText
        id="name"
        label="Name"
        placeholder="your name here"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldText
        id="email"
        label="Email"
        placeholder="jane@example.com"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ButtonGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button type="submit" primary>
          Submit
        </Button>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button type="reset">Reset</Button>
      </ButtonGroup>
    </Form>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('Form', module).add('all', () => <FormExample />);

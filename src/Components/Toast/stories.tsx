// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ButtonGroup/ButtonGroup' was resolved t... Remove this comment to see the full error message
import ButtonGroup from '../ButtonGroup/ButtonGroup';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ToastContainer/ToastContainer' was reso... Remove this comment to see the full error message
import ToastContainer from '../ToastContainer/ToastContainer';
import { useToast } from '../../Hooks';

function Example() {
  const toast = useToast();

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ToastContainer />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ButtonGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button
          onClick={() => {
            toast({
              title: 'Product updated',
              type: 'success',
            });
          }}
        >
          Success Toast
        </Button>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button
          onClick={() => {
            toast({
              title: 'Product updated',
            });
          }}
        >
          Default Toast
        </Button>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button
          onClick={() => {
            toast({
              title: 'New Features Added',
              type: 'info',
            });
          }}
        >
          Info Toast
        </Button>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button
          onClick={() => {
            toast({
              title: 'Changes not saved',
              type: 'warn',
            });
          }}
        >
          Warning Toast
        </Button>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button
          onClick={() => {
            toast({
              title: 'Server error',
              type: 'danger',
              autoClose: false,
            });
          }}
        >
          Danger Toast
        </Button>
      </ButtonGroup>
    </>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('Toast', module).add('all', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Example />
  </>
));

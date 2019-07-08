import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { ToastContainer } from 'react-toastify';
import { useToast } from '../../Hooks';

function Example() {
  const toast = useToast();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        pauseOnHover
        closeButton={false}
        closeOnClick={false}
        width="500"
      />
      <ButtonGroup>
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
        <Button
          onClick={() => {
            toast({
              title: 'Product updated',
            });
          }}
        >
          Default Toast
        </Button>
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

storiesOf('Toast', module).add('all', () => (
  <>
    <Example />
  </>
));

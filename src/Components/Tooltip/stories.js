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
    </>
  );
}

storiesOf('Toast', module)
  .add('all', () => (
    <>
      <Example />
    </>
  ));

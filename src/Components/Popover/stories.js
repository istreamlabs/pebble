import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Popover from './Popover';
import Button from '../Button/Button';
import Block from '../Block/Block';

storiesOf('Popover', module).add('basic', () => {
  const label = 'placement';
  const options = [
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ];
  const defaultValue = 'bottom';
  const groupId = 'GROUP-ID1';

  const placement = select(label, options, defaultValue, groupId);

  return (
    <Block
      alignItems="center"
      justify="around"
      width="100%"
      height="400px"
      className="m-auto"
    >
      <Popover
        placement={placement}
        content={
          <Block
            displayBlock
            background="white"
            padding="3"
            radius="2"
            className="shadow-1"
          >
            I drink your milkshake!
          </Block>
        }
      >
        <Button>popover trigger</Button>
      </Popover>
      <Popover
        placement={placement}
        content={
          <Block
            displayBlock
            color="neutral-100"
            background="neutral-800"
            padding="3"
            radius="2"
            className="shadow-1"
          >
            I drink your milkshake!
          </Block>
        }
      >
        <Button>popover trigger</Button>
      </Popover>
    </Block>
  );
});

import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './Tooltip';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

function PlacementExample() {
  return (
    <ButtonGroup className="p-5">
      <Tooltip active content="top" placement="top">
        <Button>top</Button>
      </Tooltip>
      <Tooltip active content="right" placement="right">
        <Button>right</Button>
      </Tooltip>
      <Tooltip active content="bottom" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
      <Tooltip active content="left" placement="left">
        <Button>left</Button>
      </Tooltip>
    </ButtonGroup>
  );
}

storiesOf('Tooltip', module)
  .add('node', () => (
    <Tooltip
      active
      content="i'm the content of a tooltip. i'm the content of a tooltip"
    >
      <span className="link">tooltip</span>
    </Tooltip>
  ))
  .add('string', () => (
    <Tooltip
      active
      content="i'm the content of a tooltip. i'm the content of a tooltip"
    >
      string
    </Tooltip>
  ))
  .add('icon', () => (
    <Tooltip
      active
      content="i'm the content of a tooltip. i'm the content of a tooltip"
    >
      <Icon name="info-circle" />
    </Tooltip>
  ))
  .add('placement', () => <PlacementExample />);

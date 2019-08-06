import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Tooltip from './Tooltip';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import LinkButton from '../LinkButton/LinkButton';
import Text from '../Text/Text';

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
  .add('Icon', () => (
    <Tooltip
      active
      content="i'm the content of a tooltip. i'm the content of a tooltip"
    >
      <Icon name="info-circle" />
    </Tooltip>
  ))
  .add('Text', () => (
    <Tooltip
      active
      content="i'm the content of a tooltip. i'm the content of a tooltip"
    >
      <Text bold>Text component</Text>
    </Tooltip>
  ))
  .add('Button', () => (
    <Tooltip
      active
      content="i'm the content of a tooltip. i'm the content of a tooltip"
    >
      <Button primary>Button component</Button>
    </Tooltip>
  ))
  .add('Link', () => (
    <DemoBrowserRouter>
      <div>
        <Tooltip
          active
          content="i'm the content of a tooltip. i'm the content of a tooltip"
        >
          <Link external href="/#">
            Link (external) component
          </Link>
        </Tooltip>
      </div>
      <Tooltip
        active
        placement="right"
        content="i'm the content of a tooltip. i'm the content of a tooltip"
      >
        <Link href="/#">Link component</Link>
      </Tooltip>
    </DemoBrowserRouter>
  ))
  .add('LinkButton', () => (
    <DemoBrowserRouter>
      <Tooltip content="i'm the content of a tooltip. i'm the content of a tooltip">
        <LinkButton href="/#">LinkButton component</LinkButton>
      </Tooltip>
    </DemoBrowserRouter>
  ))
  .add('placement', () => <PlacementExample />);

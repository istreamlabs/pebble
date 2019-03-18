import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import LinkButton from '../LinkButton/LinkButton';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';
import DropdownMenuSeparator from '../DropdownMenu/Components/DropdownMenuSeparator';

storiesOf('ButtonGroup', module)
  .add('all', () => (
    <>
      <ButtonGroup>
        <Button primary>publish</Button>
        <Button>cancel</Button>
        <LinkButton href="#">LinkButton</LinkButton>
        <DropdownMenu toggle="Dropdown" overlayClassName="w5">
          <DropdownItem icon="add-bold">default button</DropdownItem>
          <DropdownItem href="/">link</DropdownItem>
          <DropdownMenuSeparator />
          <DropdownItem danger icon="remove-circle">danger button</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>

      <ButtonGroup toolbar className="mb-4">
        <Button primary>save</Button>
        <Button>status</Button>
        <Button>rating</Button>
        <LinkButton href="#">LinkButton</LinkButton>
        <Button disabled>disabled</Button>
        <Button primary danger>delete</Button>
        <DropdownMenu toggle="Dropdown" overlayClassName="w5">
          <DropdownItem icon="add-bold">default button</DropdownItem>
          <DropdownItem href="/">link</DropdownItem>
          <DropdownMenuSeparator />
          <DropdownItem danger icon="remove-circle">danger button</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>

      <ButtonGroup toolbar>
        <Button icon="arrow-small-left">prev</Button>
        <Button icon="play">play</Button>
        <Button icon="stop">stop</Button>
        <Button icon="arrow-small-right" iconAfterText>next</Button>
      </ButtonGroup>

      <ButtonGroup fullWidth toolbar className="mb-4">
        <Button primary>left</Button>
        <Button>center</Button>
        <Button>right</Button>
      </ButtonGroup>

      <ButtonGroup fullWidth toolbar>
        <Button icon="arrow-small-left">prev</Button>
        <Button icon="play">play</Button>
        <Button icon="stop">stop</Button>
        <Button icon="arrow-small-right" iconAfterText>next</Button>
      </ButtonGroup>
    </>
  ));

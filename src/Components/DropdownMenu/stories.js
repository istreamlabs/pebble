import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import DropdownMenu from './DropdownMenu';
import DropdownItemGroup from './Components/DropdownItemGroup';
import DropdownItem from './Components/DropdownItem';
import DropdownMenuSeparator from './Components/DropdownMenuSeparator';

import Block from '../Block/Block';

storiesOf('DropdownMenu', module)
  .add('all', () => (
    <>
      <DropdownMenu toggle="Dropdown" overlayClassName="w5">
        <DropdownItem icon="add-bold">default button</DropdownItem>
        <DropdownItem as="a" href="/">link</DropdownItem>
        <DropdownMenuSeparator />
        <DropdownItem danger icon="remove-circle">danger button</DropdownItem>
      </DropdownMenu>
      <Block height="220px">
        <DropdownMenu open toggle="Dropdown" overlayClassName="w5">
          <DropdownItem icon="add-bold">default button</DropdownItem>
          <DropdownItem as="a" href="/">link</DropdownItem>
          <DropdownMenuSeparator />
          <DropdownItem danger icon="remove-circle">danger button</DropdownItem>
        </DropdownMenu>
      </Block>
      <Block height="420px">
        <DropdownMenu open toggle="Dropdown with Item Groups">
          <DropdownItemGroup title="Transcoder">
            <DropdownItem icon="play">start</DropdownItem>
            <DropdownItem icon="stop">stop</DropdownItem>
            <DropdownItem icon="refresh">restart</DropdownItem>
            <DropdownItem disabled>disabled</DropdownItem>
          </DropdownItemGroup>
          <DropdownItemGroup title="Components">
            <DropdownItem as="a" href="#/Components/Button">Button</DropdownItem>
            <DropdownItem as="a" href="#/Components/Frame">Frame</DropdownItem>
            <DropdownItem as="a" href="#/Components/Text">Text</DropdownItem>
          </DropdownItemGroup>
        </DropdownMenu>
      </Block>
      <Block>
        <DropdownMenu toggle="Disabled Dropdown" disabled>
          <DropdownItem>disabled</DropdownItem>
        </DropdownMenu>
      </Block>
    </>
  ));

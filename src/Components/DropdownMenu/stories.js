import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import DropdownMenu from './DropdownMenu';
import DropdownItemGroup from './DropdownItemGroup';
import DropdownItem from './DropdownItem';

storiesOf('DropdownMenu', module)
  .add('all', () => (
    <>
      <DropdownMenu toggle="Dropdown with Item Groups">
        <DropdownItemGroup title="Transcoder">
          <DropdownItem icon="play">start</DropdownItem>
          <DropdownItem icon="stop">stop</DropdownItem>
          <DropdownItem icon="refresh">restart</DropdownItem>
          <DropdownItem disabled>disabled</DropdownItem>
        </DropdownItemGroup>
        <DropdownItemGroup title="Components">
          <DropdownItem href="#/Components/Button">Button</DropdownItem>
          <DropdownItem href="#/Components/Frame">Frame</DropdownItem>
          <DropdownItem href="#/Components/Text">Text</DropdownItem>
        </DropdownItemGroup>
      </DropdownMenu>
    </>
  ));

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Block from '../Block/Block';
import Breadcrumbs from './Breadcrumbs';
import Button from '../Button/Button';
import Link from '../Link/Link';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';

storiesOf('Breadcrumbs', module).add('all', () => (
  <DemoBrowserRouter>
    <Breadcrumbs>
      <Link href="#">Parent</Link>
      <DropdownMenu
        toggle={
          <Button plain iconAfterText icon="arrow-small-down">
            Level 1
          </Button>
        }
      >
        <DropdownItem>Level 1a</DropdownItem>
        <DropdownItem>Level 1b</DropdownItem>
      </DropdownMenu>
      <Block alignItems="center" itemSpacing="2">
        <div>
          <Link href="/">Level 2</Link>
        </div>
        <DropdownMenu
          toggle={
            <Button
              plain
              accessibilityLabel=""
              icon="arrow-small-down"
            />
          }
        >
          <DropdownItem href="#">Level 2a</DropdownItem>
          <DropdownItem href="#">Level 2b</DropdownItem>
          <DropdownItem href="#">Level 2c</DropdownItem>
        </DropdownMenu>
      </Block>
      <Link href="#">Level 3</Link>
    </Breadcrumbs>
  </DemoBrowserRouter>
));

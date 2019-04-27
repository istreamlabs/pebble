/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Breadcrumbs from './Breadcrumbs';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Link from '../Link/Link';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';

storiesOf('Breadcrumbs', module)
  .add('all', () => (
    <DemoBrowserRouter>
      <Breadcrumbs>
        <Link href="#">Parent</Link>
        <DropdownMenu toggle={<Button plain iconAfterText icon="arrow-small-down">Sub-Level 1</Button>}>
          <DropdownItem>Sub-Level 1a</DropdownItem>
          <DropdownItem>Sub-Level 1b</DropdownItem>
        </DropdownMenu>

        <Link href="#">Sub-Level 2</Link>
        <Link href="#">Sub-Level 3</Link>
      </Breadcrumbs>
      <Heading element="1">The Page Heading</Heading>
    </DemoBrowserRouter>
  ));

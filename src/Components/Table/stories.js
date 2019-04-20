import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Table from './Table';
import TableHeader from './Components/TableHeader';
import TableBody from './Components/TableBody';
import TableRow from './Components/TableRow';
import TableCell from './Components/TableCell';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Badge from '../Badge/Badge';
import Link from '../Link/Link';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';
import DropdownMenuSeparator from '../DropdownMenu/Components/DropdownMenuSeparator';

import { CHANNEL_DATA } from '../../demo/data';

function CustomTable() {
  const WIDTHS = [null, '200px', '90px', '300px', '80px'];

  const STATUS_BADGE_MAP = {
    on: 'success',
    off: 'default',
    reconciling: 'warn',
  };

  const getDropdownMarkup = () => (
    <DropdownMenu toggle={<Button size="small" icon="menu-dots" accessibilityLabel="actions" />} overlayClassName="w5">
      <DropdownItem icon="add-bold">default button</DropdownItem>
      <DropdownItem href="/">link</DropdownItem>
      <DropdownMenuSeparator />
      <DropdownItem danger icon="remove-circle">danger button</DropdownItem>
    </DropdownMenu>
  );

  const getRowMarkup = (row, index) => {
    const statusMarkup = [];
    let regionState;

    for (const prop in row.state.regions) {
      if (!row.state.regions.hasOwnProperty(prop)) {
        continue;
      }
      regionState = row.state.regions[prop].channel_state;

      statusMarkup.push(
        <Block key={`${prop}-${index}`} paddingHorizontal="4" justify="between" paddingVertical="3">
          <div className="text-transform-uppercase fs-6">{prop}</div>
          <div className="fw-700">
            <Badge type={STATUS_BADGE_MAP[regionState]}>{regionState}</Badge>
          </div>
        </Block>
      );
    }

    return (
      <TableRow key={index}>
        <TableCell>
          <Link href="/#/Components/Table"><Text bold>{row.id}</Text></Link>
        </TableCell>
        <TableCell width={WIDTHS[1]}>
          <Link href="/#/Components/Table">
            {row.blueprint.id}
            {' v'}
            {row.blueprint.version}
          </Link>
        </TableCell>
        <TableCell width={WIDTHS[2]}>
          {row.state.desired_state}
        </TableCell>
        <TableCell padding="0" width={WIDTHS[3]}>
          {statusMarkup}
        </TableCell>
        <TableCell width={WIDTHS[4]}>
          {getDropdownMarkup()}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Block height="400px" overflow="auto">
      <Table>
        <TableHeader mobileLabel="Channels">
          <TableCell>Channel ID</TableCell>
          <TableCell width={WIDTHS[1]}>Blueprint</TableCell>
          <TableCell width={WIDTHS[2]}>Desired Status</TableCell>
          <TableCell width={WIDTHS[3]}>Current Status</TableCell>
          <TableCell width={WIDTHS[4]} />
        </TableHeader>
        <TableBody>
          {CHANNEL_DATA.map((row, index) => getRowMarkup(row, index))}
        </TableBody>
      </Table>
    </Block>
  );
}

storiesOf('Table', module)
  .addDecorator(storyFn => <div style={{ width: '900px' }}>{storyFn()}</div>)
  .add('tabular data', () => (
    <Table>
      <TableHeader mobileLabel="Contacts">
        <TableCell>Name</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Company</TableCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Vicki Rohlfs</TableCell>
          <TableCell>VP Marketing</TableCell>
          <TableCell>ntanslie1@example.com</TableCell>
          <TableCell>Acme Inc.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Stacy Mardlin</TableCell>
          <TableCell>Senior Cost Accountant</TableCell>
          <TableCell>smardlin2@example.com</TableCell>
          <TableCell>Acme Inc.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .add('custom cells', () => (
    <DemoBrowserRouter>
      <CustomTable />
    </DemoBrowserRouter>
  ));

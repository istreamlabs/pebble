import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Table from './Table';
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

const WIDTHS = ['200px', '', '', '300px'];
const COLUMNS = ['name', 'title', 'email', 'company'];
const DATA = [{
  name: 'Vicki Rohlfs',
  job_title: 'VP Marketing',
  email: 'vrohlfs0@zdnet.com',
  company: 'Weimann Group'
}, {
  name: 'Nicol Tanslie',
  job_title: 'Systems Administrator III',
  email: 'ntanslie1@com.com',
  company: 'Jakubowski Inc'
}, {
  name: 'Stacia Mardlin',
  job_title: 'Senior Cost Accountant',
  email: 'smardlin2@storify.com',
  company: 'Jacobs, Kirlin and Runte'
}];

function CustomTable() {
  const COLUMNS = ['Channel ID', 'Blueprint', 'Desired Status', 'Region Status', ''];
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
        <TableCell flex={false} width={WIDTHS[1]}>
          <Link href="/#/Components/Table">
            {row.blueprint.id}
            {' v'}
            {row.blueprint.version}
          </Link>
        </TableCell>
        <TableCell flex={false} width={WIDTHS[2]}>
          {row.state.desired_state}
        </TableCell>
        <TableCell flex={false} padding="0" width={WIDTHS[3]}>
          {statusMarkup}
        </TableCell>
        <TableCell flex={false} width={WIDTHS[4]}>
          {getDropdownMarkup()}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Block height="400px" overflow="auto">
      <Table columns={COLUMNS} columnWidths={WIDTHS}>
        {CHANNEL_DATA.map((row, index) => getRowMarkup(row, index))}
      </Table>
    </Block>
  );
}

storiesOf('Table', module)
  .addDecorator(storyFn => <div style={{ width: '1200px' }}>{storyFn()}</div>)
  .add('tabular data', () => (
    <Table columns={COLUMNS} data={DATA} columnWidths={WIDTHS} />
  ))
  .add('custom cells', () => (
    <DemoBrowserRouter>
      <CustomTable />
    </DemoBrowserRouter>
  ));

### Basic Table

```js

const DATA = [{
  name: 'Kelley Roxbee',
  email: 'kroxbee0@examiner.com',
  gender: 'Male'
}, {
  name: 'Loralie Archibould',
  email: 'larchibould1@netscape.com',
  gender: 'Female'
}, {
  name: 'Gene Regorz',
  email: 'gregorz2@reddit.com',
  gender: 'Male'
}, {
  name: 'Stan Clarkin',
  email: 'sclarkin3@samsung.com',
  gender: 'Male'
}, {
  name: 'Carolyne Juden',
  email: 'cjuden4@ted.com',
  gender: 'Female'
}]

import { TableRow, TableCell } from './Table';

function BasicTable() {
  const COLUMNS = ['name', 'email', 'gender'];

  return (
    <Table columns={COLUMNS}>
      {
        DATA.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.gender}</TableCell>
          </TableRow>
        ))
      }
    </Table>
  )
}

<BasicTable />

```

### Custom Table Cells

When you want to display information in a tabular format, but need more control over how each cell is rendered, use a `TableRow` containing a set of `TableCell`.

```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
import classNames from 'classnames';

import { TableRow, TableCell } from './Table';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Badge from '../Badge/Badge';
import Link from '../Link/Link';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';
import DropdownMenuSeparator from '../DropdownMenu/Components/DropdownMenuSeparator';

import { CHANNEL_DATA } from '../../demo/data.js';

function CustomTable() {
  const COLUMNS = ['Channel ID', 'Blueprint', 'Desired Status', 'Region Status', ''];
  const WIDTHS =  [null, '200px', '90px', '240px', '80px']

  const STATUS_BADGE_MAP = {
    'on': 'success',
    'off': 'default',
    'reconciling': 'warn',
  }

  const getDropdownMarkup = () => (
    <DropdownMenu toggle={<Button size="small" icon="menu-dots" accessbilityLabel="actions" />} overlayClassName="w5">
      <DropdownItem icon="add-bold">default button</DropdownItem>
      <DropdownItem href="/">link</DropdownItem>
      <DropdownMenuSeparator />
      <DropdownItem danger icon="remove-circle">danger button</DropdownItem>
    </DropdownMenu>
  )

  const getRowMarkup = (row, index) => {
    let test = '';
    let statusMarkup = [];
    let regionState;

    for (const prop in row.state.regions) {
      if (!row.state.regions.hasOwnProperty(prop)) {
          //The current property is not a direct property of p
          continue;
      }
      regionState = row.state.regions[prop].channel_state;

      statusMarkup.push(
        <Block paddingHorizontal="4" justify="between" paddingVertical="3">
          <div className="text-transform-uppercase fs-6">{prop}</div>
          <div className="fw-700">
            <Badge type={STATUS_BADGE_MAP[regionState]}>{regionState}</Badge>
          </div>
        </Block>);
    }

    return (
      <TableRow key={index}>
        <TableCell flex>
          <Link href="/#/Components/Table"><Text bold>{row.id}</Text></Link>
        </TableCell>
        <TableCell width={WIDTHS[1]}>
          <Link href="/#/Components/Table">{row.blueprint.id} v{row.blueprint.version}</Link>
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
    )
  }

  return (
    <Block height="400px" overflow="auto">
      <Table width="862px" columns={COLUMNS} columnWidths={WIDTHS}>
        {CHANNEL_DATA.map((row, index) => getRowMarkup(row, index))}
      </Table>
    </Block>
  )
}

<DemoBrowserRouter>
    <CustomTable />
</DemoBrowserRouter>

```
